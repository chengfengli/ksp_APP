import { Http,Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';
import { ToastController, AlertController, LoadingController, Loading } from 'ionic-angular';
 
import { Observable } from "rxjs";
import "rxjs/Rx";
 
import { Storage } from '@ionic/storage';

/*
  数据请求统一配置
*/
@Injectable()
export class HttpProvider {
  private apiURL = 'http://192.168.1.194:8080/cms/app/';

  constructor(private http: Http,public toastCtrl:ToastController,private alertCtrl: AlertController, private loadingCtrl: LoadingController,public storage: Storage,private network: Network) {}

  // 请求头接口
  private headers = new Headers({'Content-Type': 'application/json'});
 
  // 对参数进行编码
  private encode (params) {
    var str = '';
    if (params) {
      for (var key in params) {
        if (params.hasOwnProperty(key)) {
          var value = params[key];
          str += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&';
        }
      }
      str = '?' + str.substring(0, str.length - 1);
    }
    return str;
  }

  //合并两个json对象
  private jsonMerge (json1,json2) {
    for(let key in json2){
      json1[key] = json2[key];
    }
    return json1;
  }

  // get方法
  get (option,success,error?) {
    let old_option = {url:'',params:null,loader:false};
    old_option = this.jsonMerge(old_option,option);
    let loading = this.showLoading();
    if (old_option.loader) {
      loading.present();
    }
    let url = option.url;
    if(url.indexOf('http://')==-1){
      url = this.apiURL+option.url;
    }
    this.http.get(url+this.encode(option.params)).map(res=>res.json()) //返回数据转换成json
    .subscribe(res=>{
      if (old_option.loader) {
        loading.dismiss();
      }
      success(res);
    },err=>{
      if (old_option.loader) {
        loading.dismiss();
      }
      if(error){
        error(err);
      }
    })
  }
 
  // post方法
  post (option,success,error?) {
    let old_option = {url:'',params:null,loader:false,error_hint:true};
    old_option = this.jsonMerge(old_option,option);
    let loading = this.showLoading();
    if (old_option.loader) {
      loading.present();
    }
    this.storageGet('user').subscribe(data=>{
      if(!this.isEmpty(data)){
        option.url+='?userId='+data.userId+'&token='+data.token;
        option.params.userId=data.userId;
        option.params.token=data.token;
      }
      this.http.post(this.apiURL+option.url,JSON.stringify(option.params),{headers :this.headers}).map(res=>res.json()) //返回数据转换成json
      .subscribe(res=>{
        loading.dismiss();
        if(res.code=='0000'){
          success(res);
        }else if(res.code=='9997'){
          this.alert('登录已过期，请重新登录！',()=>{
            //option.navCtrl.setRoot(LoginPage);
          });
        }else{
          if(old_option.error_hint){
            this.errorToast(res.msg);
          }
        }
      },err=>{
        loading.dismiss();
        if(old_option.error_hint){
          this.handleError(err);
        }
        if(error){
          error(err);
        }
      })
    });
  }
 
  private handleError (error: Response | any) {
    let msg = '';
    if(error.status == 400){
      msg = '请求参数错误:Bad request(code：400)';
    }
    if(error.status == 404){
      msg = '请求资源/地址不存在(code：404)';
    }
    if(error.status == 500){
      msg = '服务器发生错误(code：500)';
    }
    if (msg != '') {
      this.errorToast(msg);
    }
  }
 
  // 提示框
  alert (message:string, callback?) {
    let title = '提示';
    let alert = this.alertCtrl;
    if (callback) {
      alert.create({
        title: title,
        message: message,
        buttons: [{
          text: "确定",
          handler: data => {
            callback();
          }
        }]
      }).present();
    } else {
      alert.create({title: title,message: message,buttons: ["确定"]}).present();
    }
  }

  //确认框
  confim(message:string, callback){
    let alert = this.alertCtrl;
    alert.create({
      title: message,
      message: '',
      buttons: [{
        text: "确定",
        handler: data => {
          callback();
        }
      },{
        text: "取消"
      }]
    }).present();
  }

  successToast(message, callback?){
    this.toast(message,'succ', callback);
  }

  errorToast(message, callback?){
    this.toast(message,'error', callback);
  }
  
  toast (message:string,cssClass, callback?) {
    let time = 1000*3;
    let toast = this.toastCtrl.create({
      message: message,
      duration:time,
      position:'top',
      cssClass:cssClass,
      dismissOnPageChange: true,
    });
    toast.present();
    if (callback) {
      setTimeout(()=>{
        callback();
      },time);
    }   
  }
  
  // 本地储存方法
  storageSet (key,value) {
    let newData = JSON.stringify(value);
    return Observable.fromPromise(this.storage.set(key, newData));
  }
  storageGet(key: string): Observable<any> {
    return Observable.fromPromise(this.storage.get(key)).map(data => {
        return JSON.parse(data)
    });
  }
  storageRemove(key) {
    return Observable.fromPromise(this.storage.remove(key));
  }
 
 
  showLoading(message?:string):Loading {
    if(this.isEmpty(message)){
      message = '正在加载中...'
    }
    return this.loadingCtrl.create({
        content: message
    });
  }

  //监测网络状态
  networkType(){
    return this.network.type;
  }
  //网络连接
  netWorkConnect(){
    return this.network.onConnect();
  }
  //网络断开
  netWorkDisConnect(){
    return this.network.onDisconnect();
  }
  /**
   * 验证是否为空，为空则返回true
   * @param val 
   */
  isEmpty(val):boolean{
    let bool = false;
    if(val != null && val != undefined){
        val = val.toString();
    }
    if(val == null || val == undefined || val == '' || val.trim() == ''){
      bool = true;
    }
    return bool;
  }

  /**
   * 
   * @param date 时间格式
   * @param format 
   */
  dateFormat(date,format:string){
    let dateStr = '';
    let nowDate = new Date(date);
    let year = nowDate.getFullYear();
    let month = nowDate.getMonth()+1+'';
    let day = nowDate.getDate()+'';
    if(parseInt(month)<10){
      month='0'+month;
    }
    if(parseInt(day)<10){
      day='0'+day;
    }
    dateStr=year+'-'+month+'-'+day;
    return dateStr;
  }

  // 获取时间
  getCurrentTime(field){
    //今天的时间
    let day = new Date();
    return this.swithTime(day,field)
  }

  swithTime(day,field){
    let get_year = day.getFullYear()
    let get_month= day.getMonth()+1
    let get_day = day.getDate()
    if(field == "month"){
      return get_month
    }else if(field == "year"){
      return get_year
    }else if(field === "day"){
      return get_day
    }
  }


}

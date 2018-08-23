import { Component } from '@angular/core';
import { HttpProvider } from '../../providers/http/http';

/**
 * 公共基础实体
 **/

@Component({
  selector: 'page-base',
  templateUrl: 'base.html',
})
export class BasePage {
//网络是否异常，默认不异常
isNetError = false;
//请求是否有返回数据，false表示有数据
isNoData = false;
//刷新
refresher=null;
//加载更多
infiniteScroll=null;
constructor(public httpServer: HttpProvider) {
  //网络异常
  this.httpServer.netWorkDisConnect().subscribe(() => {
    let type = this.httpServer.networkType();
    if(type==='none'){
      this.httpServer.errorToast('网络异常!');
      this.isNetError = true;
    }
  });
  //网络恢复
  this.httpServer.netWorkConnect().subscribe(()=>{
    if(this.isNetError){
      let type = this.httpServer.networkType();
      this.httpServer.successToast('网络已恢复为'+type);
      this.isNetError = false;
    }
  });
}

ionViewDidLoad() {
  
}

//没有更多数据
notMoreScroll(){
  if(!this.httpServer.isEmpty(this.infiniteScroll)){
    this.infiniteScroll.enable(true);
  }
}

closeRefreshAndInfinite(){
  if(!this.httpServer.isEmpty(this.refresher)){
    this.refresher.complete();
  }
  if(!this.httpServer.isEmpty(this.infiniteScroll)){
    this.infiniteScroll.complete();
  }
}
}

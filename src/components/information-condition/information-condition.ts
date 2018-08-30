import { Component, Output, EventEmitter } from '@angular/core';
import { HttpProvider } from '../../providers/http/http';
import { User } from '../../entity/user/user';

/**
 * 资讯条件筛选
 */
@Component({
  selector: 'information-condition',
  templateUrl: 'information-condition.html'
})
export class InformationConditionComponent {
  user:User = new User();
  height = 'auto';
  currentChoice = '';
  // 所有的栏目
  columns = [];
  // 当前选择的栏目
  selectColumns = [];
  // 所有的标签
  tags = [];
  // 当前选择的标签
  selectTags = [];
  // 选择的日期
  date = '';
  // 其他
  other = '';
  tagName = ''
  @Output()confirmCall = new EventEmitter();
  constructor(public httpServe:HttpProvider) {
    for(let i=1;i<=10;i++){
      this.columns.push({name:'栏目'+i,val:i});
      this.tags.push({name:'标签'+i,val:i});
    }
    this.defaultEvent()
  }
 
  defaultEvent(){
    this.httpServe.post({url:'/common/searchTag.json',params:this.tagName},(res)=>{
        console.log("==============")
        console.log(res)
    })
  }
  /**
   * 切换条件时
   * @param type 栏目、标签、日期、更多
   */
  choice(type){
    this.height = '100%';
    this.currentChoice = type;
  }

  /**
   * 确定
   */
  confim(){
    this.height = 'auto';
    this.currentChoice = '';
    var res = {
      column: this.selectColumns,
      tag: this.selectTags,
      date: this.date,
      other: this.other
    }
    this.confirmCall.emit(res);
  }

  /**
   * 选择或取消条件
   * @param array 已选择的数据
   * @param val 当前选中的值
   */
  select(array,val){
    let i=0;
    let flag = false;
    for(;i<array.length;i++){
      if(array[i]==val){
        flag = true;
        break;
      }
    }
    if(flag){
      array.splice(i,1);
    }else{
      array.push(val);
    }
    if(this.currentChoice === 'column'){
      this.selectColumns = array;
    }else if(this.currentChoice === 'tag'){
      this.selectTags = array;
    }
  }

  /**
   * 选择日期
   * @param val 
   */
  slelctDate(val){
    this.date = val;
  }

  /**
   * 选择其他
   * @param val 
   */
  selectOther(val){
    this.other = val;
  }
}

import { Component, Output, EventEmitter } from '@angular/core';
import { HttpProvider } from '../../providers/http/http';
import { User } from '../../entity/user/user';
import { Search } from '../../entity/search/search';

/**
 * 资讯条件筛选
 */
@Component({
  selector: 'information-condition',
  templateUrl: 'information-condition.html'
})
export class InformationConditionComponent {
  search:Search = new Search();
  height = 'auto';
  currentChoice = '';
  // 所有的栏目
  columns = [];
  // 当前选择的栏目
  selectColumns = [1];
  // 所有的标签
  tags = [];
  // 当前选择的标签
  selectTags = [];
  // 选择的日期
  date = '';
  // 其他
  other = '';
  tagName = '';
  time = 'all'
  isCheckedAll= false
  @Output()confirmCall = new EventEmitter();
  constructor(public httpServe:HttpProvider) {
    this.defaultEvent()
  }
 
  defaultEvent(){
    //查询标签
    this.httpServe.request({url:'/common/searchTag.json',type:'get',params:{tagName:this.tagName}},(res)=>{
        this.tags = res.data;
    })
    //查询栏目
    this.httpServe.request({url:'/common/searchColumn.json'},(res)=>{
      this.columns = res.data;
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
   * 重置
   */
  reset(){
    switch(this.currentChoice){
      case 'column':
      this.search.column = [];
      case 'tag':
      this.search.tagId = [];
      case 'date':
        this.time = 'all';
      case 'more':
        this.search.sort = 'currentTime'
        this.search.order = null
    }
  }

  /**
   * 确定
   */
  confim(){
    this.height = 'auto';
    this.currentChoice = '';
    var res = {
      search: this.search,
      time: this.time
    }
    this.confirmCall.emit(this.search);
 
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
     // this.isCheckedAll = this.search.column.length===this.columns.length;
      this.search.column = array;
    }else if(this.currentChoice === 'tag'){
      this.search.tagId = array;
    }
  }

 // 全选
  checkedAll(){
    if(this.isCheckedAll){
      this.search.column = [];
      for(let i=0;i<this.columns.length;i++){
        this.search.column.push(this.columns[i].id)
      }
    }else{
      this.search.column = [];
    }
    console.log(this.search.column);
  }

  /**
   * 选择日期
   * @param val 
   */
  slelctDate(val){
    this.date = val;
    if(val === ''){
      this.time = 'all'
    }else if(val === 'd'){
      this.time = 'oneDay'
    }else if(val === 'c'){
      this.time = 'threeDay'
    }else if(val === 'week'){
      this.time = 'week'
    }else{
      this.time = 'month'
    }
  }

  /**
   * 选择其他
   * @param val 
   */
  selectOther(val){
    this.other = val;
    if(val === 'q'){
      this.search.sort = 'currentTime'
      this.search.order = null
    }
  }
}

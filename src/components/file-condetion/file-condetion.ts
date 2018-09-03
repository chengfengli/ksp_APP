import { Component, Output, EventEmitter } from '@angular/core';
import { HttpProvider } from '../../providers/http/http';
import { Search } from '../../entity/search/search';

/**
 * 文档条件
 */
@Component({
  selector: 'file-condetion',
  templateUrl: 'file-condetion.html'
})
export class FileCondetionComponent {
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
  // 格式
  format = '';
  @Output()confirmCall = new EventEmitter();
  constructor(public httpServe: HttpProvider) {
    this.defaultEvent();
  }

  defaultEvent(){
    //查询标签
    this.httpServe.request({url:'/common/searchTag.json',type:'get',params:{tagName:''}},(res)=>{
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
        this.selectColumns = [];
      case 'tag':
        this.selectTags = [];
      case 'date':
        this.date = 'all';
      case 'format':
        this.format = '';
    }
  }

  /**
   * 确定
   */
  confim(){
    this.height = 'auto';
    this.currentChoice = '';
    let search:Search = new Search();
    search.column = this.selectColumns;
    search.tagId = this.selectTags;
    this.confirmCall.emit(search);
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
    this.format = val;
  }
}

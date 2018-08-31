import { Component, Output, EventEmitter } from '@angular/core';
import { HttpProvider } from '../../providers/http/http';
import { User } from '../../entity/user/user';
import { Screening } from '../../entity/news/screening';

/**
 * 资讯条件筛选
 */
@Component({
  selector: 'information-condition',
  templateUrl: 'information-condition.html'
})
export class InformationConditionComponent {
  user:User = new User();
  screening:Screening = new Screening();
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
  isCheckedAll= false
  @Output()confirmCall = new EventEmitter();
  constructor(public httpServe:HttpProvider) {
    this.defaultEvent()
  }
 
  defaultEvent(){
    //查询标签
    this.httpServe.get({url:'/common/searchTag.json',params:{tagName:this.tagName}},(res)=>{
        this.tags = res.data;
    })
    //查询栏目
    this.httpServe.post({url:'/common/searchColumn.json'},(res)=>{
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
   * 确定
   */
  confim(){
    this.height = 'auto';
    this.currentChoice = '';
    // var res = {
    //   column: this.selectColumns,
    //   tag: this.selectTags,
    //   date: this.date,
    //   other: this.other
    // }
    this.confirmCall.emit(this.screening);
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
      this.screening.column = array;
    }else if(this.currentChoice === 'tag'){
      this.screening.tagId = array;
    }
  }

 // 全选
  checkedAll(){
    this.isCheckedAll = !this.isCheckedAll
    if (this.isCheckedAll) {
      // 全选时
      this.screening.column = []
      for(let i=0;i<this.columns.length;i++){
        this.screening.column.push(this.columns[i].itemText)
      }
      console.log(this.screening.column)
    } else {
      this.screening.column = []
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
    console.log(val)
    if(val === 'd'){
      
    }
  }
}

import { Component, Output, EventEmitter } from '@angular/core';

/**
 * 
 */
@Component({
  selector: 'colum-list',
  templateUrl: 'colum-list.html'
})
export class ColumListComponent {

  // 所有的栏目
  columns = [];
  // 当前选择的栏目
  selectColumns = '3';

  @Output()confirm = new EventEmitter();
  @Output()cancel = new EventEmitter();

  constructor() {
    for(let i=1;i<=10;i++){
      this.columns.push({name:'栏目'+i,val:i});
    }
  }

  /**
   * 选择或取消条件
   * @param array 已选择的数据
   * @param val 当前选中的值
   */
  select(item){
    this.selectColumns = item;
  }

  /**
   * 取消
   */
  cancelFun(){
    this.cancel.emit();
  }

  /**
   * 确定
   */
  confirmFun(){
    console.log(this.selectColumns);
    this.confirm.emit(this.selectColumns);
  }

}

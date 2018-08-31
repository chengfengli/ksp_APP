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
  selectColumns = null;

  @Output()confirm = new EventEmitter();
  @Output()cancel = new EventEmitter();

  constructor() {
    for(let i=1;i<=10;i++){
      this.columns.push({name:'栏目'+i,val:i});
    }
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
    let res = null;
    for(let i=0;i<this.columns.length;i++){
      if(this.columns[i].val === this.selectColumns){
        res = this.columns[i];
      }
    }
    this.confirm.emit(res);
  }

}

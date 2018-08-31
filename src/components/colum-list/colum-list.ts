import { Component, Output, EventEmitter } from '@angular/core';
import { HttpProvider } from '../../providers/http/http';

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
  selectColumns = '';

  @Output()confirm = new EventEmitter();
  @Output()cancel = new EventEmitter();

  constructor(public httpServe:HttpProvider) {
     //查询栏目
     this.httpServe.post({url:'/common/searchColumn.json'},(res)=>{
      this.columns = res.data;
    })
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
      if(this.columns[i].id === this.selectColumns){
        res = this.columns[i];
      }
    }
    this.confirm.emit(res);
  }

}

///<reference path="../../yntree/yntree.d.ts"/>
import { Component, Output, EventEmitter } from '@angular/core';
import { HttpProvider } from '../../providers/http/http';

@Component({
  selector: 'department-tree',
  templateUrl: 'department-tree.html'
})
export class DepartmentTreeComponent {
  tree = null;

  @Output()confirm = new EventEmitter();
  @Output()cancel = new EventEmitter();
  potions = {
    onchange: (input, yntree) => {
      console.log(this.tree.getCheckedInputs());
    },
    // checkStrictly: true,
    data:[]
  };
  selectDeps = [];

  constructor(public httpServe:HttpProvider) {
    setTimeout(()=>{
      this.httpServe.request({url:'/common/org.json'},(res)=>{
        this.potions.data = res.data;
        this.tree = new YnTree(document.getElementById("tree"), this.potions);
      })
      
      // for(let i =0;i<this.selectDeps.length;i++){
      //   this.tree.select(this.selectDeps[i],true);
      // }
    },100);
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
    let array = [];
    let selectNodes = this.tree.getCheckedInputs();
    for(let i=0;i<selectNodes.length;i++){
      array.push({value:selectNodes[i].value,name:selectNodes[i].name});
    }
    this.confirm.emit(array);
  }
}

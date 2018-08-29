///<reference path="../../yntree/yntree.d.ts"/>
import { Component, Output, EventEmitter } from '@angular/core';

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
    checkStrictly: true,
    data:[
      {
        name: "我的公司",
        inputName: "我的公司",
        value: "1",
        children: [
          {
            name: "公司管理",
            inputName: "公司管理",
            value: "1-1"
          },
          {
            name: "部门管理",
            inputName: "部门管理",
            value: "1-2"
          }
        ]
      }
    ]
  };
  selectDeps = [];

  constructor() {
    setTimeout(()=>{
      this.tree = new YnTree(document.getElementById("tree"), this.potions);
      for(let i =0;i<this.selectDeps.length;i++){
        this.tree.select(this.selectDeps[i],true);
      }
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

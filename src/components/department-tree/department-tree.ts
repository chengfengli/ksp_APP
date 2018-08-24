///<reference path="../../yntree/yntree.d.ts"/>
import { Component } from '@angular/core';

@Component({
  selector: 'department-tree',
  templateUrl: 'department-tree.html'
})
export class DepartmentTreeComponent {
  tree = null;
  potions = {
    onchange: (input, yntree) => {
      console.log(this.tree.getValues());
    },
    checkStrictly: true,
    data:[
      {
        name: "我的公司",
        value: "1",
        children: [
          {
            name: "公司管理",
            value: "1-1"
          },
          {
            name: "部门管理",
            value: "1-2"
          }
        ]
      }
    ]
  };
  selectDeps = ['1-1','1-2'];

  constructor() {
    setTimeout(()=>{
      this.tree = new YnTree(document.getElementById("tree"), this.potions);
      for(let i =0;i<this.selectDeps.length;i++){
        this.tree.select(this.selectDeps[i],true);
      }
    },500);
  }

}

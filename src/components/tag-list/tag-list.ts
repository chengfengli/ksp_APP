import { Component, EventEmitter, Output } from '@angular/core';
import { HttpProvider } from '../../providers/http/http';

/**
 * Generated class for the TagListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tag-list',
  templateUrl: 'tag-list.html'
})
export class TagListComponent {

  text: string;
  // 所有的标签
  tags = [];
  // 当前选择的标签
  selectTags = [];
  color = '#000';
  showAddTag = false
  newTag:string = ''
  tagName= '';
  checked = false;
  @Output()confirm = new EventEmitter();
  @Output()cancel = new EventEmitter();
  constructor(public httpServe: HttpProvider) {
    this.defaultEvent()
  }
  defaultEvent(){
    
    this.httpServe.request({url:'/common/searchTag.json',type:'get',params:{tagName:this.tagName}},(res)=>{
      this.tags = res.data;
      for(let i=0;i<this.tags.length;i++){
        this.tags[i].color = '#000'
      }
    })
  }
   /**
   * 取消
   */
  cancelFun(){
    this.cancel.emit();
  }
  //添加标签
  addTag(){
    this.showAddTag = true
  }

  /**
   * 确定
   */
  confirmFun(){
    this.confirm.emit(this.selectTags);
  }
  // 点击标签
  selectTagEvent(array,val) {
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
    this.selectTags = array;
  }
  //取消添加标签
  cancelAdd(){
    this.showAddTag = false
  }
  confirmAdd(){
    this.tags.push({name:this.newTag,val:this.tags.length+1,color:'#000'})
    this.showAddTag = false
    this.newTag = ''
  }
}

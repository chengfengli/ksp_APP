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
  tagName= ''
  @Output()confirm = new EventEmitter();
  @Output()cancel = new EventEmitter();
  constructor(public httpServe: HttpProvider) {
    // for(let i=1;i<=10;i++){
    //   this.tags.push({name:'标签'+i,val:i,color:'#000'});
    // }
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
    for(let i =0;i<this.tags.length;i++){
      if(this.tags[i].color === '#ff6600'){
        this.selectTags.push(this.tags[i]) 
        
      }
    }
    console.log(this.selectTags);
    this.confirm.emit(this.selectTags);
  }
  // 点击标签
  selectTagEvent(item) {
    if(item.color==='#000'){
      item.color = '#ff6600'
    }else{
      item.color = '#000'
    }
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

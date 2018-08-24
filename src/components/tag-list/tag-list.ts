import { Component, EventEmitter, Output } from '@angular/core';

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
  selectTags = '3';
  color = '#000'
  @Output()confirm = new EventEmitter();
  @Output()cancel = new EventEmitter();
  constructor() {
    for(let i=1;i<=10;i++){
      this.tags.push({name:'标签'+i,val:i,color:'#000'});
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
    console.log(this.selectTags);
    this.confirm.emit(this.selectTags);
  }
  // 点击标签
  selectTagEvent(item) {
    item.color = 'ff6600'
  }
}

import { Component } from '@angular/core';

/**
 * 无数据
 */
@Component({
  selector: 'not-data',
  templateUrl: 'not-data.html'
})
export class NotDataComponent {

  text: string = '无数据';

  constructor() {
  }

}

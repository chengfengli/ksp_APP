import { Pipe, PipeTransform } from '@angular/core';

/**
 * 空数据格式化
 */
@Pipe({
  name: 'emptyFormat',
})
export class EmptyFormatPipe implements PipeTransform {
  /**
   * 将所有为空的格式转换为空格
   */
  transform(value: string, ...args) {
    let str = '';
    if(value === undefined || value === null){
      return str;
    }else{
      return value;
    }
  }
}

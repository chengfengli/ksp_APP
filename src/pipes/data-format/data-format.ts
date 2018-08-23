import { Pipe, PipeTransform } from '@angular/core';

/**
 * 时间格式化
 */
@Pipe({
  name: 'dataFormat',
})
export class DataFormatPipe implements PipeTransform {
  /**
   * 将时间转换为到分的字符串格式
   */
  transform(value: string, ...args) {
    let dateStr = '';
    let nowDate = new Date(value);
    let year = nowDate.getFullYear();
    let month = nowDate.getMonth()+1+'';
    let day = nowDate.getDate()+'';
    let hours = nowDate.getHours();
    let minute = nowDate.getMinutes();
    if(parseInt(month)<10){
      month='0'+month;
    }
    if(parseInt(day)<10){
      day='0'+day;
    }
    dateStr=year+'-'+month+'-'+day+' '+hours+':'+minute;
    return dateStr;
  }
}

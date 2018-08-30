import { Page } from "../page/Page";

export class Screening extends Page{
    // 搜索文本
    search: String = '';
    // 栏目
    column: Array<String> = [];
    // 标签id
    tagId: Array<String> = [];
    // 排序字段
    sort: String = '';
    //排序方式
    order: String = '';
}
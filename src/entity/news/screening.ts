import { Page } from "../page/Page";

export class Screening extends Page{
    search: String = '';
    order: String = '';
    column: Array<String> = [];
    tagId: Array<String> = [];
    sort: String = '';
}
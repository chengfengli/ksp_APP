import { Page } from "../page/Page";

export class News extends Page{
    id: String = null;
    name: String = '';
    digest: String = null;
    content: String = '';
    resourcePath: String = null;
    column: String = null
    orgId: Number = null;
    status: Number = null;
    creator: Number = null;
    createTime: Date = null;
    modifier: Number = null;
    modifyTime: Date = null;
    sourceAddress: String = null;
    sourceSite: String = null;
    replaceStr: String = null;
    creatorName: String = null;
    modifierName: String = null;
    tags: String = null;
}
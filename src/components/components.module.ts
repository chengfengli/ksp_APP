import { NgModule } from '@angular/core';
import { InformationConditionComponent } from './information-condition/information-condition';
import { IonicPageModule } from 'ionic-angular';
import { FileCondetionComponent } from './file-condetion/file-condetion';
import { DepartmentTreeComponent } from './department-tree/department-tree';
import { ColumListComponent } from './colum-list/colum-list';
import { TagListComponent } from './tag-list/tag-list';
import { NotDataComponent } from './not-data/not-data';
@NgModule({
	declarations: [InformationConditionComponent,
    FileCondetionComponent,
    DepartmentTreeComponent,
    ColumListComponent,
    TagListComponent,
    NotDataComponent],
	imports: [IonicPageModule],
	exports: [InformationConditionComponent,
    FileCondetionComponent,
    DepartmentTreeComponent,
    ColumListComponent,
    TagListComponent,
    TagListComponent,
    NotDataComponent]
})
export class ComponentsModule {}

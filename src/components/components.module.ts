import { NgModule } from '@angular/core';
import { InformationConditionComponent } from './information-condition/information-condition';
import { IonicPageModule } from 'ionic-angular';
import { FileCondetionComponent } from './file-condetion/file-condetion';
import { DepartmentTreeComponent } from './department-tree/department-tree';
import { ColumListComponent } from './colum-list/colum-list';
@NgModule({
	declarations: [InformationConditionComponent,
    FileCondetionComponent,
    DepartmentTreeComponent,
    ColumListComponent],
	imports: [IonicPageModule],
	exports: [InformationConditionComponent,
    FileCondetionComponent,
    DepartmentTreeComponent,
    ColumListComponent]
})
export class ComponentsModule {}

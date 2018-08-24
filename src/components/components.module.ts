import { NgModule } from '@angular/core';
import { InformationConditionComponent } from './information-condition/information-condition';
import { IonicPageModule } from 'ionic-angular';
import { FileCondetionComponent } from './file-condetion/file-condetion';
import { DepartmentTreeComponent } from './department-tree/department-tree';
@NgModule({
	declarations: [InformationConditionComponent,
    FileCondetionComponent,
    DepartmentTreeComponent],
	imports: [IonicPageModule],
	exports: [InformationConditionComponent,
    FileCondetionComponent,
    DepartmentTreeComponent]
})
export class ComponentsModule {}

import { NgModule } from '@angular/core';
import { InformationConditionComponent } from './information-condition/information-condition';
import { IonicPageModule } from 'ionic-angular';
import { FileCondetionComponent } from './file-condetion/file-condetion';
@NgModule({
	declarations: [InformationConditionComponent,
    FileCondetionComponent],
	imports: [IonicPageModule],
	exports: [InformationConditionComponent,
    FileCondetionComponent]
})
export class ComponentsModule {}

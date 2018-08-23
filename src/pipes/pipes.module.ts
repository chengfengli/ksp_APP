import { NgModule } from '@angular/core';
import { DataFormatPipe } from './data-format/data-format';
import { EmptyFormatPipe } from './empty-format/empty-format';
@NgModule({
	declarations: [DataFormatPipe,
    EmptyFormatPipe],
	imports: [],
	exports: [DataFormatPipe,
    EmptyFormatPipe]
})
export class PipesModule {}

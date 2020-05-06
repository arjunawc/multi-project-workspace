import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreCommonComponent } from './store-common.component';



@NgModule({
  declarations: [StoreCommonComponent],
  imports: [HttpClientModule
  ],
  exports: [StoreCommonComponent]
})
export class StoreCommonModule { }

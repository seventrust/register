import {
  MdButtonModule,
  MdCheckboxModule,
  MdInputModule,
  MdCardModule} from '@angular/material';

import { NgModule } from '@angular/core';

  @NgModule({
    imports: [  MdButtonModule,
      MdCheckboxModule,
      MdInputModule,
      MdCardModule,],

    exports: [   MdButtonModule,
      MdCheckboxModule,
      MdInputModule,
      MdCardModule ]
  })

  export class AllMaterialModule {}

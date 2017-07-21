import {
  MdButtonModule,
  MdCheckboxModule,
  MdInputModule,
  MdCardModule,
  MdToolbarModule,
  MdIconModule,
  MdSidenavModule } from '@angular/material';

import { NgModule } from '@angular/core';

  @NgModule({
    imports: [  MdButtonModule,
      MdCheckboxModule,
      MdInputModule,
      MdCardModule,
      MdToolbarModule,
      MdIconModule,
      MdSidenavModule
    ],

    exports: [   MdButtonModule,
      MdCheckboxModule,
      MdInputModule,
      MdCardModule,
      MdToolbarModule,
      MdIconModule,
      MdSidenavModule ]
  })

  export class AllMaterialModule {}

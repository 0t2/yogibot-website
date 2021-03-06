import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdToolbarModule, MdDialogModule, MdIconModule,
  MdButtonModule, MdInputModule, MdAutocompleteModule,
  MdMenuModule
} from '@angular/material';

import { LegalDialog, AboutDialog } from '../../components/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
// This module is used to collect all material dependency.
// https://material.angular.io/guide/getting-started#step-3-import-the-component-modules
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdDialogModule,
    MdIconModule,
    MdButtonModule,
    MdInputModule,
    MdAutocompleteModule,
    MdMenuModule,
    FlexLayoutModule
  ],
  exports: [
    BrowserAnimationsModule,
    MdToolbarModule,
    MdDialogModule,
    MdIconModule,
    MdButtonModule,
    MdInputModule,
    MdAutocompleteModule,
    MdMenuModule,
    FlexLayoutModule
  ],
  declarations: [
    LegalDialog,
    AboutDialog
  ],
  entryComponents: [
    LegalDialog,
    AboutDialog
  ]
})
export class CustomMaterialModule { }

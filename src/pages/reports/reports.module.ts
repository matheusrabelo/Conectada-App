import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportsPage } from './reports';

@NgModule({
  declarations: [
    ReportsPage,
  ],
  imports: [
    IonicPageModule.forChild(ReportsPage),
  ],
  exports: [
    ReportsPage
  ]
})
export class ReportsModule {}
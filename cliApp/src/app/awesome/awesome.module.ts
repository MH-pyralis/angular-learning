import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwesomePipe } from '../awesome.pipe';
import { LowercasePipe } from './lowercase.pipe';
import { UppercasePipe } from '../uppercase.pipe';

@NgModule({
  declarations: [AwesomePipe, LowercasePipe, UppercasePipe],
  imports: [
    CommonModule
  ]
})
export class AwesomeModule { }

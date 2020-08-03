import { NgModule } from '@angular/core';
import { AlumniLibComponent } from './alumni-lib.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [AlumniLibComponent, HeaderComponent],
  imports: [
  ],
  exports: [AlumniLibComponent,HeaderComponent]
})
export class AlumniLibModule { }

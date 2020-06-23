import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconCloseComponent } from './components/icons/icon-close.component';
import { IconDeleteComponent } from './components/icons/icon-delete.component';
import { IconEditComponent } from './components/icons/icon-edit.component';
import { IconNavComponent } from './components/icons/icon-nav.component';



@NgModule({
  declarations: [IconDeleteComponent, IconEditComponent, IconNavComponent, IconCloseComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [IconDeleteComponent, IconEditComponent, IconNavComponent, IconCloseComponent]
})
export class IconModule { }

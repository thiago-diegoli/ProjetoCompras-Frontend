import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeaderClientComponent } from './header-client/header-client.component';
import { RouterModule } from '@angular/router';
import { PopoverComponent } from './popover/popover.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderClientComponent,
    PopoverComponent,
    HeaderAdminComponent
   ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    HeaderClientComponent,
    PopoverComponent,
    HeaderAdminComponent
  ]
})

export class LayoutModule { }

import { NgModule } from '@angular/core';

import { UsersComponent } from './users.component';
import { UsersRoutingModules } from './users-routing.module';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [UsersComponent],
    imports: [CommonModule, UsersRoutingModules]
})
export class UsersModules {}
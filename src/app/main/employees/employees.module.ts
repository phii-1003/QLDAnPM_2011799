import {NgModule} from '@angular/core';
import {AppSharedModule} from '@app/shared/app-shared.module';
import {EmployeesRoutingModule} from './employees-routing.module';
import {EmployeesComponent} from './employees.component';

@NgModule({
    declarations: [EmployeesComponent],
    imports: [AppSharedModule, EmployeesRoutingModule]
})
export class EmployeesModule {}
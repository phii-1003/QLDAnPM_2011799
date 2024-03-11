import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { EmployeesServiceProxy, EmployeeListDto, ListResultDtoOfEmployeeListDto } from '@shared/service-proxies/service-proxies';

@Component({
    templateUrl: './employees.component.html',
    animations: [appModuleAnimation()]
})
export class EmployeesComponent extends AppComponentBase implements OnInit {

    people: EmployeeListDto[] = [];
    filter: string = '';

    constructor(
        injector: Injector,
        private _personService: EmployeesServiceProxy
    ) {
        super(injector);
    }

    ngOnInit(): void {
        this.getEmployees();
    }

    getEmployees(): void {
        this._personService.getEmployees(this.filter).subscribe((result) => {
            this.people = result.items;
        });
    }
}
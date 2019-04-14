import { NgModule } from "@angular/core";
import { DropdownDirective } from './dropdown.directive';
import { FilterPipe } from '../recipes/recipe-list/filter.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [DropdownDirective,
                    FilterPipe],
    exports: [
        DropdownDirective,
        FilterPipe,
        CommonModule
    ]
})
export class SharedModule {}
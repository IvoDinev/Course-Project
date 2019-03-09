import { Directive, HostListener, Output, EventEmitter, HostBinding, Input } from '@angular/core';
import { text } from '@angular/core/src/render3';

@Directive({
  selector: '[appEnableButton]'
})
export class EnableButtonDirective {
    
isEmpty: boolean = true;
  

  @HostListener('input', ['$event.target']) onInput() {   
    this.isEmpty = false;
    console.log(this.isEmpty);
  }   

  constructor() { }
  

}

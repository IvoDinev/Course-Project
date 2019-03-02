import { Directive, HostListener, Output, EventEmitter } from '@angular/core';
import { text } from '@angular/core/src/render3';

@Directive({
  selector: '[appEnableButton]'
})
export class EnableButtonDirective {
    
  symbolsEntered: number = 0;
  isEmpty: boolean = true;
  @Output() textAdded = new EventEmitter<boolean>();

  @HostListener('input', ['$event.target']) onInput() {   
    this.isEmpty = false;
    console.log(this.isEmpty);
    this.symbolsEntered++;
    console.log(this.symbolsEntered);
    this.textAdded.emit(this.isEmpty);
  }   

  constructor() { }

}

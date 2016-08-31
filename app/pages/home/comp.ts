import {Directive, HostListener} from "@angular/core";

@Directive({
  selector: '[mydirective]',
})
export class MyComponent {
  constructor() {
    console.log('starter');
  }

  @HostListener('touchstart', ['$event.changedTouches']) onTouchMove(touches) {
    setTimeout(() => {
      console.log('this runs');
    }, 0);
  }
}
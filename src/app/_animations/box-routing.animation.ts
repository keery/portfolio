import { trigger, animate, transition, style } from '@angular/animations';

export const boxEnterAnimation =
trigger('boxEnter', [
	transition(':enter', [
      style({transform: 'rotateY(30deg) translateX(100%)'}),
      animate('1s ease-in', style({transform: 'rotateY(0deg) translateX(0)'})),
    ])
]);

export const boxLeaveAnimation =
trigger('boxLeave', [
  transition(':leave', [
      style({transform: 'rotateY(0deg) translateX(0)'}),
      animate('1s ease-in', style({transform: 'rotateY(-30deg) translateX(-100%)'})),
    ])
]);
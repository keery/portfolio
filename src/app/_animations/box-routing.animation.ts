import { trigger, animate, transition, style, query } from '@angular/animations';

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

export const testAnimation =
trigger('test', [
	transition('* <=> *', [
        // Initial state of new route
        query(':enter',
          style({
            position: 'fixed',
            width:'100%',
            transform: 'translateX(-100%)'
          }),
          {optional:true}),

        query(':leave',
          style({
            position: 'fixed',
            width:'100%',
            transform: 'translateX(0%)'
          }),
          {optional:true}),        

        // move page off screen right on leave
        query(':leave',
          animate('2000ms ease',
            style({
              position: 'fixed',
              width:'100%',
              transform: 'translateX(100%)'
            })
          ),
        {optional:true}),

        // move page in screen from left to right
        query(':enter',
          animate('2000ms ease',
            style({
              opacity: 1,
              transform: 'translateX(0%)'
            })
          ),
        {optional:true}),
    ])
]);

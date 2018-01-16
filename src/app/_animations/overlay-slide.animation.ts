import { trigger, animate, transition, style } from '@angular/animations';

export const overlayLeftAnimation =
trigger('overlaySlideLeft', [
	transition(':enter', [
      style({left: '-10%', transform:'skew(-7deg, 0deg)'}),
      animate('4s ease-in', style({left: '-100%'})),
    ])
    // transition(':leave', [
    //   style({left: '0%'}),
    //   animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
    // ])
]);

export const overlayRightAnimation = 
trigger('overlaySlideRight', [
	transition(':enter', [
      style({right: '-10%', transform:'skew(-7deg, 0deg)'}),
      animate('4s ease-in', style({right: '-100%'}))
    ])
    // transition(':leave', [
    //   style({transform: 'translateX(0%)', position:'fixed', width:'100%'}),
    //   animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
    // ])
])
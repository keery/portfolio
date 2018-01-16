import { trigger, animate, transition, style, stagger, keyframes, query } from '@angular/animations';

export const appendLetterAnimation =
trigger('appendLetter', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('65ms', [
          animate('.3s 1s ease-in-out', keyframes([
            style({opacity: 0}),
            style({opacity: 1}),
          ]))]), {optional: true})
      ])
    ])

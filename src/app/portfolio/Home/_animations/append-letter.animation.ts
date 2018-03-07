import { trigger, animate, transition, style, stagger, keyframes, query } from '@angular/animations';

export const appendLetterAnimation =
trigger('appendLetter', [
      transition('* => *', [

        query(':enter', style({ transform: "translateX(-100%)" }), {optional: true}),

        query(':enter', stagger('2s', [
          animate('.3s 1s ease-in-out', keyframes([
            style({transform: "translateX(-100%)"}),
            style({transform: "translateX(0)"}),
          ]))]), {optional: true})
      ])
    ])

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.overlayLeftAnimation = animations_1.trigger('overlaySlideLeft', [
    animations_1.transition(':enter', [
        animations_1.style({ left: '-10%', transform: 'skew(-7deg, 0deg)' }),
        animations_1.animate('4s ease-in', animations_1.style({ left: '-100%' })),
    ])
    // transition(':leave', [
    //   style({left: '0%'}),
    //   animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
    // ])
]);
exports.overlayRightAnimation = animations_1.trigger('overlaySlideRight', [
    animations_1.transition(':enter', [
        animations_1.style({ right: '-10%', transform: 'skew(-7deg, 0deg)' }),
        animations_1.animate('4s ease-in', animations_1.style({ right: '-100%' }))
    ])
    // transition(':leave', [
    //   style({transform: 'translateX(0%)', position:'fixed', width:'100%'}),
    //   animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
    // ])
]);
//# sourceMappingURL=overlay-slide.animation.js.map
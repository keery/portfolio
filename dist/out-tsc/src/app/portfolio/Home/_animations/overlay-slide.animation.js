"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.overlayLeftAnimation = animations_1.trigger('overlaySlideLeft', [
    animations_1.transition(':enter', [
        animations_1.style({ left: '-10%', transform: 'skew(-7deg, 0deg)' }),
        animations_1.animate('2s ease-in-out', animations_1.style({ left: '-100%' })),
    ]),
]);
exports.overlayRightAnimation = animations_1.trigger('overlaySlideRight', [
    animations_1.transition(':enter', [
        animations_1.style({ right: '-10%', transform: 'skew(-7deg, 0deg)' }),
        animations_1.animate('2s ease-in-out', animations_1.style({ right: '-100%' }))
    ]),
]);
//# sourceMappingURL=overlay-slide.animation.js.map
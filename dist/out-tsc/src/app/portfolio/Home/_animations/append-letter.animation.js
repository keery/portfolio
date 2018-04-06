"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.appendLetterAnimation = animations_1.trigger('appendLetter', [
    animations_1.transition('* => *', [
        animations_1.query(':enter', animations_1.style({ transform: "translateX(-100%)" }), { optional: true }),
        animations_1.query(':enter', animations_1.stagger('2s', [
            animations_1.animate('.3s 1s ease-in-out', animations_1.keyframes([
                animations_1.style({ transform: "translateX(-100%)" }),
                animations_1.style({ transform: "translateX(0)" }),
            ]))
        ]), { optional: true })
    ])
]);
//# sourceMappingURL=append-letter.animation.js.map
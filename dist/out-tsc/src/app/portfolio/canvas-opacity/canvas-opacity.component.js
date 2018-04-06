"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var imageCanvas = document.createElement('canvas');
var imageCanvasContext = imageCanvas.getContext('2d');
var lineCanvas = document.createElement('canvas');
var lineCanvasContext = lineCanvas.getContext('2d');
var points = [];
var pointLifetime = 1000;
var CanvasOpacityComponent = /** @class */ (function () {
    function CanvasOpacityComponent() {
    }
    // private ;
    CanvasOpacityComponent.prototype.ngAfterViewInit = function () {
        this.image = document.getElementById('canvasOpacity');
        this.start();
    };
    CanvasOpacityComponent.prototype.start = function () {
        document.addEventListener('mousemove', this.onMouseMove);
        window.addEventListener('resize', this.resizeCanvases);
        document.body.appendChild(imageCanvas);
        this.resizeCanvases();
        this.tick();
    };
    CanvasOpacityComponent.prototype.onMouseMove = function (event) {
        points.push({
            time: Date.now(),
            x: event.clientX,
            y: event.clientY
        });
    };
    CanvasOpacityComponent.prototype.resizeCanvases = function () {
        imageCanvas.width = lineCanvas.width = window.innerWidth;
        imageCanvas.height = lineCanvas.height = window.innerHeight;
    };
    CanvasOpacityComponent.prototype.drawLineCanvas = function () {
        var minimumLineWidth = 25;
        var maximumLineWidth = 100;
        var lineWidthRange = maximumLineWidth - minimumLineWidth;
        var maximumSpeed = 50;
        lineCanvasContext.clearRect(0, 0, lineCanvas.width, lineCanvas.height);
        lineCanvasContext.lineCap = 'round';
        lineCanvasContext.shadowBlur = 30;
        lineCanvasContext.shadowColor = '#000';
        for (var i = 1; i < points.length; i++) {
            var point = points[i];
            var previousPoint = points[i - 1];
            // Change line width based on speed
            var distance = this.getDistanceBetween(point, previousPoint);
            var speed = Math.max(0, Math.min(maximumSpeed, distance));
            var percentageLineWidth = (maximumSpeed - speed) / maximumSpeed;
            lineCanvasContext.lineWidth = minimumLineWidth + percentageLineWidth * lineWidthRange;
            // Fade points as they age
            var age = Date.now() - point.time;
            var opacity = (pointLifetime - age) / pointLifetime;
            lineCanvasContext.strokeStyle = 'rgba(0, 0, 0, ' + opacity + ')';
            lineCanvasContext.beginPath();
            lineCanvasContext.moveTo(previousPoint.x, previousPoint.y);
            lineCanvasContext.lineTo(point.x, point.y);
            lineCanvasContext.stroke();
        }
    };
    /**
     * The main loop, called at ~60hz.
     */
    CanvasOpacityComponent.prototype.tick = function () {
        // Remove old points
        points = points.filter(function (point) {
            var age = Date.now() - point.time;
            return age < pointLifetime;
        });
        // this.drawLineCanvas();
        // this.drawImageCanvas();
        var minimumLineWidth = 25;
        var maximumLineWidth = 100;
        var lineWidthRange = maximumLineWidth - minimumLineWidth;
        var maximumSpeed = 50;
        lineCanvasContext.clearRect(0, 0, lineCanvas.width, lineCanvas.height);
        lineCanvasContext.lineCap = 'round';
        lineCanvasContext.shadowBlur = 30;
        lineCanvasContext.shadowColor = '#000';
        for (var i = 1; i < points.length; i++) {
            var point = points[i];
            var previousPoint = points[i - 1];
            // Change line width based on speed
            var distance = this.getDistanceBetween(point, previousPoint);
            var speed = Math.max(0, Math.min(maximumSpeed, distance));
            var percentageLineWidth = (maximumSpeed - speed) / maximumSpeed;
            lineCanvasContext.lineWidth = minimumLineWidth + percentageLineWidth * lineWidthRange;
            // Fade points as they age
            var age = Date.now() - point.time;
            var opacity = (pointLifetime - age) / pointLifetime;
            lineCanvasContext.strokeStyle = 'rgba(0, 0, 0, ' + opacity + ')';
            lineCanvasContext.beginPath();
            lineCanvasContext.moveTo(previousPoint.x, previousPoint.y);
            lineCanvasContext.lineTo(point.x, point.y);
            lineCanvasContext.stroke();
        }
        var width = imageCanvas.width;
        console.log(this.image);
        var height = imageCanvas.width / this.image.naturalWidth * this.image.naturalHeight;
        if (height < imageCanvas.height) {
            width = imageCanvas.height / this.image.naturalHeight * this.image.naturalWidth;
            height = imageCanvas.height;
        }
        imageCanvasContext.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
        imageCanvasContext.globalCompositeOperation = 'source-over';
        imageCanvasContext.drawImage(this.image, 0, 0, width, height);
        imageCanvasContext.globalCompositeOperation = 'destination-in';
        imageCanvasContext.drawImage(lineCanvas, 0, 0);
        requestAnimationFrame(this.tick);
    };
    /**
     * Draws a line using the recorded cursor positions.
     *
     * This line is used to mask the original this.image.
     */
    CanvasOpacityComponent.prototype.getDistanceBetween = function (a, b) {
        return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
    };
    /**
     * Draws the original image, masked by the line drawn in drawLineToCanvas.
     */
    CanvasOpacityComponent.prototype.drawImageCanvas = function () {
        // Emulate background-size: cover
        var width = imageCanvas.width;
        var height = imageCanvas.width / this.image.naturalWidth * this.image.naturalHeight;
        if (height < imageCanvas.height) {
            width = imageCanvas.height / this.image.naturalHeight * this.image.naturalWidth;
            height = imageCanvas.height;
        }
        imageCanvasContext.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
        imageCanvasContext.globalCompositeOperation = 'source-over';
        imageCanvasContext.drawImage(this.image, 0, 0, width, height);
        imageCanvasContext.globalCompositeOperation = 'destination-in';
        imageCanvasContext.drawImage(lineCanvas, 0, 0);
    };
    CanvasOpacityComponent = __decorate([
        core_1.Component({
            selector: 'canvas-opacity',
            templateUrl: './canvas-opacity.template.html',
            styleUrls: ['./canvas-opacity.style.scss']
        })
    ], CanvasOpacityComponent);
    return CanvasOpacityComponent;
}());
exports.CanvasOpacityComponent = CanvasOpacityComponent;
//# sourceMappingURL=canvas-opacity.component.js.map
import { Component, OnInit } from '@angular/core';

const imageCanvas = document.createElement('canvas');
const imageCanvasContext = imageCanvas.getContext('2d');
const lineCanvas = document.createElement('canvas');
const lineCanvasContext = lineCanvas.getContext('2d');
let points = [];


@Component({
	selector: 'canvas-opacity',
	templateUrl: './canvas-opacity.template.html',
	styleUrls: ['./canvas-opacity.style.scss']
})
export class CanvasOpacityComponent
{

	public image;
	private pointLifetime = 1000;

	constructor() {
		this.image = document.getElementById('canvasOpacity');
	}

	start() {
	  document.addEventListener('mousemove', this.onMouseMove);
	  window.addEventListener('resize', this.resizeCanvases);
	  document.body.appendChild(imageCanvas);
	  this.resizeCanvases();
	  this.tick();
	}

	// if (this.image.complete) {
	//   start();
	// } else {
	//   this.image.onload = start;
	// }

	onMouseMove(event) {
	  points.push({
	    time: Date.now(),
	    x: event.clientX,
	    y: event.clientY
	  });
	}

	resizeCanvases() {
	  imageCanvas.width = lineCanvas.width = window.innerWidth;
	  imageCanvas.height = lineCanvas.height = window.innerHeight;
	}

	/**
	 * The main loop, called at ~60hz.
	 */
	tick() {
	  // Remove old points
	  points = points.filter(function(point) {
	    var age = Date.now() - point.time;
	    return age < this.pointLifetime;
	  });

	  this.drawLineCanvas();
	  this.drawImageCanvas();
	  requestAnimationFrame(this.tick);
	}

	/**
	 * Draws a line using the recorded cursor positions.
	 *
	 * This line is used to mask the original this.image.
	 */
	drawLineCanvas() {
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
	    var opacity = (this.pointLifetime - age) / this.pointLifetime;
	    lineCanvasContext.strokeStyle = 'rgba(0, 0, 0, ' + opacity + ')';
	    
	    lineCanvasContext.beginPath();
	    lineCanvasContext.moveTo(previousPoint.x, previousPoint.y);
	    lineCanvasContext.lineTo(point.x, point.y);
	    lineCanvasContext.stroke();
	  }
	}

	getDistanceBetween(a, b) {
	  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
	}

	/**
	 * Draws the original image, masked by the line drawn in drawLineToCanvas.
	 */
	drawImageCanvas() {
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
	}
}
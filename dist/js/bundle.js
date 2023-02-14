/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bitmap/BitmapData.ts":
/*!**********************************!*\
  !*** ./src/bitmap/BitmapData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * BitmapData.js by Peter Nitsch - https://github.com/pnitsch/BitmapData.js
 * HTML5 Canvas API implementation of the AS3 BitmapData class.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitmapData = exports.RGBToHex = exports.hexToRGB = exports.BitmapDataChannel = exports.BlendMode = void 0;
const ColorTransform_1 = __webpack_require__(/*! ./ColorTransform */ "./src/bitmap/ColorTransform.ts");
const Matrix_1 = __webpack_require__(/*! ./Matrix */ "./src/bitmap/Matrix.ts");
const Point_1 = __webpack_require__(/*! ./Point */ "./src/bitmap/Point.ts");
const Rectangle_1 = __webpack_require__(/*! ./Rectangle */ "./src/bitmap/Rectangle.ts");
const Simplex_1 = __webpack_require__(/*! ./Simplex */ "./src/bitmap/Simplex.ts");
const halfColorMax = 0.00784313725;
var BlendMode;
(function (BlendMode) {
    BlendMode["ADD"] = "add";
    BlendMode["ALPHA"] = "alpha";
    BlendMode["DARKEN"] = "darken";
    BlendMode["DIFFERENCE"] = "difference";
    BlendMode["ERASE"] = "erase";
    BlendMode["HARDLIGHT"] = "hardlight";
    BlendMode["INVERT"] = "invert";
    BlendMode["LAYER"] = "layer";
    BlendMode["LIGHTEN"] = "lighten";
    BlendMode["MULTIPLY"] = "multiply";
    BlendMode["NORMAL"] = "normal";
    BlendMode["OVERLAY"] = "overlay";
    BlendMode["SCREEN"] = "screen";
    BlendMode["SHADER"] = "shader";
    BlendMode["SUBTRACT"] = "subtract";
})(BlendMode = exports.BlendMode || (exports.BlendMode = {}));
;
var BitmapDataChannel;
(function (BitmapDataChannel) {
    BitmapDataChannel[BitmapDataChannel["ALPHA"] = 8] = "ALPHA";
    BitmapDataChannel[BitmapDataChannel["BLUE"] = 4] = "BLUE";
    BitmapDataChannel[BitmapDataChannel["GREEN"] = 2] = "GREEN";
    BitmapDataChannel[BitmapDataChannel["RED"] = 1] = "RED";
})(BitmapDataChannel = exports.BitmapDataChannel || (exports.BitmapDataChannel = {}));
;
// RGB <-> Hex conversion
function hexToRGB(hex) { return { r: ((hex & 0xff0000) >> 16), g: ((hex & 0x00ff00) >> 8), b: ((hex & 0x0000ff)) }; }
exports.hexToRGB = hexToRGB;
;
function RGBToHex(rgb) { return rgb.r << 16 | rgb.g << 8 | rgb.b; }
exports.RGBToHex = RGBToHex;
;
// 256-value binary Vector struct
function histogramVector(n) {
    let v = [];
    for (var i = 0; i < 256; i++) {
        v[i] = n;
    }
    return v;
}
// Park-Miller-Carta Pseudo-Random Number Generator
function PRNG() {
    this.seed = 1;
    this.next = function () { return (this.gen() / 2147483647); };
    this.nextRange = function (min, max) { return min + ((max - min) * this.next()); };
    this.gen = function () { return this.seed = (this.seed * 16807) % 2147483647; };
}
;
class BitmapData {
    constructor(width, height, transparent, fillColor, canvas) {
        this.width = width;
        this.height = height;
        this.rect = new Rectangle_1.Rectangle(0, 0, this.width, this.height);
        this.transparent = transparent || false;
        this.canvas = canvas || document.createElement("canvas");
        this.context = this.canvas.getContext("2d");
        this.canvas.setAttribute('width', this.width + '');
        this.canvas.setAttribute('height', this.height + '');
        this.drawingCanvas = document.createElement("canvas");
        this.drawingContext = this.drawingCanvas.getContext("2d");
        this.imagedata = this.context.createImageData(this.width, this.height);
        /*** WebGL functions ***/
        this.glCanvas = document.createElement("canvas");
        // this.gl = null;
        // this.program = null;
        this.gpuEnabled = true;
        try {
            this.gl = this.glCanvas.getContext("experimental-webgl");
        }
        catch (e) {
            this.gpuEnabled = false;
        }
        // this.va = null;
        // this.tex0 = null;
        // this.tex1 = null;
        // this.glPixelArray = null;
        if (fillColor)
            this.fillRect(this.rect, fillColor);
        else
            this.fillRect(this.rect, 0);
    }
    dispose() {
        if (this.gl) {
            if (this.program)
                this.gl.deleteProgram(this.program);
        }
        if (this.glCanvas && this.glCanvas.parentElement) {
            this.glCanvas.parentElement.removeChild(this.glCanvas);
        }
        if (this.drawingCanvas && this.drawingCanvas.parentElement) {
            this.drawingCanvas.parentElement.removeChild(this.drawingCanvas);
        }
        if (this.canvas && this.canvas.parentElement) {
            this.canvas.parentElement.removeChild(this.canvas);
        }
    }
    get data() { return this.imagedata; }
    ;
    set data(source) { this.imagedata = source; }
    ;
    initProgram(effect) {
        var gl = this.gl;
        var program = gl.createProgram();
        var vs = gl.createShader(gl.VERTEX_SHADER);
        var fs = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(vs, effect.vsSrc);
        gl.shaderSource(fs, effect.fsSrc);
        gl.compileShader(vs);
        gl.compileShader(fs);
        if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
            gl.deleteProgram(program);
        }
        if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
            gl.deleteProgram(program);
        }
        gl.attachShader(program, vs);
        gl.attachShader(program, fs);
        gl.deleteShader(vs);
        gl.deleteShader(fs);
        gl.linkProgram(program);
        if (this.program != null)
            gl.deleteProgram(this.program);
        this.program = program;
        gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        gl.useProgram(program);
        var vertices = new Float32Array([-1.0, -1.0,
            1.0, -1.0,
            -1.0, 1.0,
            1.0, -1.0,
            1.0, 1.0,
            -1.0, 1.0]);
        this.va = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.va);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    }
    ;
    initTexture(pos, image) {
        var gl = this.gl;
        var tex = gl.createTexture();
        gl.enable(gl.TEXTURE_2D);
        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
        gl.generateMipmap(gl.TEXTURE_2D);
        gl.bindTexture(gl.TEXTURE_2D, null);
        if (pos == 0) {
            if (this.tex0 != null)
                gl.deleteTexture(this.tex0);
            this.tex0 = tex;
            this.glCanvas.setAttribute('width', image.width + '');
            this.glCanvas.setAttribute('height', image.height + '');
            this.glPixelArray = new Uint8Array(image.width * image.height * 4);
        }
        else {
            if (this.tex1 != null)
                gl.deleteTexture(this.tex1);
            this.tex1 = tex;
        }
    }
    ;
    drawGL(matrix) {
        var gl = this.gl;
        var program = this.program;
        var ra = [matrix.a, matrix.c, 0, matrix.b, matrix.d, 0, 0, 0, 1];
        var p = gl.getAttribLocation(program, "pos");
        var ur = gl.getUniformLocation(program, "r");
        var ut = gl.getUniformLocation(program, "t");
        var t0 = gl.getUniformLocation(program, "tex0");
        var t1 = gl.getUniformLocation(program, "tex1");
        var rm = gl.getUniformLocation(program, "rMat");
        gl.bindBuffer(gl.ARRAY_BUFFER, this.va);
        gl.uniform2f(ur, this.glCanvas.width * 2, this.glCanvas.height * 2);
        gl.uniformMatrix3fv(rm, false, new Float32Array(ra));
        gl.uniform2f(ut, matrix.tx, matrix.ty);
        gl.vertexAttribPointer(p, 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(p);
        gl.uniform1i(t0, 0);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, this.tex0);
        gl.uniform1i(t1, 1);
        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, this.tex1);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        gl.disableVertexAttribArray(p);
        gl.flush();
        var w = this.glCanvas.width;
        var h = this.glCanvas.height;
        var arr = this.glPixelArray;
        gl.readPixels(0, 0, w, h, gl.RGBA, gl.UNSIGNED_BYTE, arr);
        var pos;
        var data = this.imagedata.data;
        for (var y = 0; y < h; y++) {
            for (var x = 0; x < w; x++) {
                pos = (x + y * w) * 4;
                data[pos] = arr[pos];
                data[pos + 1] = arr[pos + 1];
                data[pos + 2] = arr[pos + 2];
            }
        }
    }
    ;
    /*** Canvas2D functions ***/
    setPixel(x, y, color) {
        var rgb = hexToRGB(color);
        var pos = (x + y * this.width) * 4;
        var data = this.imagedata.data;
        data[pos + 0] = rgb.r;
        data[pos + 1] = rgb.g;
        data[pos + 2] = rgb.b;
    }
    ;
    getPixel(x, y) {
        var pos = (x + y * this.width) * 4;
        var data = this.imagedata.data;
        var rgb = {
            r: data[pos + 0],
            g: data[pos + 1],
            b: data[pos + 2]
        };
        return RGBToHex(rgb);
    }
    ;
    clear(rect) {
        rect = rect || this.rect;
        this.context.clearRect(rect.x, rect.y, rect.width, rect.height);
        this.imagedata = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
    }
    ;
    clone() {
        this.context.putImageData(this.imagedata, 0, 0);
        var result = new BitmapData(this.width, this.height, this.transparent);
        result.data = this.context.getImageData(0, 0, this.width, this.height);
        return result;
    }
    ;
    colorTransform(rect, colorTransform) {
        rect = rect || this.rect;
        colorTransform = colorTransform || new ColorTransform_1.ColorTransform();
        var data = this.imagedata.data;
        var xMax = rect.x + rect.height;
        var yMax = rect.y + rect.height;
        for (var y = rect.y; y < yMax; y++) {
            for (var x = rect.x; x < xMax; x++) {
                var r = (y * this.width + x) * 4;
                var g = r + 1;
                var b = r + 2;
                var a = r + 3;
                data[r] = data[r] * colorTransform.redMultiplier + colorTransform.redOffset;
                data[g] = data[g] * colorTransform.greenMultiplier + colorTransform.greenOffset;
                data[b] = data[b] * colorTransform.blueMultiplier + colorTransform.blueOffset;
                data[a] = data[a] * colorTransform.alphaMultiplier + colorTransform.alphaOffset;
            }
        }
        this.context.putImageData(this.imagedata, 0, 0);
    }
    applyFilter(sourceBitmapData, sourceRect, destPoint, filter) {
        var copy = this.clone();
        filter.run(sourceRect, this.imagedata.data, copy.imagedata.data);
        this.context.putImageData(this.imagedata, 0, 0);
    }
    ;
    compare(otherBitmapData) {
        if (this.width != otherBitmapData.width)
            return -3;
        if (this.height != otherBitmapData.height)
            return -4;
        if (this.imagedata === otherBitmapData.data)
            return 0;
        var otherRGB, thisRGB, dif;
        var result = new BitmapData(this.width, this.height);
        for (var y = 0; y < this.height; y++) {
            for (var x = 0; x < this.width; x++) {
                otherRGB = hexToRGB(otherBitmapData.getPixel(x, y));
                thisRGB = hexToRGB(this.getPixel(x, y));
                dif = {
                    r: Math.abs(otherRGB.r - thisRGB.r),
                    g: Math.abs(otherRGB.g - thisRGB.g),
                    b: Math.abs(otherRGB.b - thisRGB.b)
                };
                result.setPixel(x, y, RGBToHex(dif));
            }
        }
        return result;
    }
    ;
    copyCanvas(sourceCanvas, sourceRect, destPoint, blendMode) {
        this.context.putImageData(this.imagedata, 0, 0);
        var bw = this.canvas.width - sourceRect.width - destPoint.x;
        var bh = this.canvas.height - sourceRect.height - destPoint.y;
        var dw = (bw < 0) ? sourceRect.width + (this.canvas.width - sourceRect.width - destPoint.x) : sourceRect.width;
        var dh = (bh < 0) ? sourceRect.height + (this.canvas.height - sourceRect.height - destPoint.y) : sourceRect.height;
        if (blendMode && blendMode != BlendMode.NORMAL) {
            var sourceData = sourceCanvas.getContext("2d").getImageData(sourceRect.x, sourceRect.y, dw, dh).data;
            var sourcePos, destPos;
            var data = this.imagedata.data;
            for (var y = 0; y < dh; y++) {
                for (var x = 0; x < dw; x++) {
                    sourcePos = (x + y * dw) * 4;
                    destPos = ((x + destPoint.x) + (y + destPoint.y) * this.width) * 4;
                    switch (blendMode) {
                        case BlendMode.ADD:
                            data[destPos] = Math.min(data[destPos] + sourceData[sourcePos], 255);
                            data[destPos + 1] = Math.min(data[destPos + 1] + sourceData[sourcePos + 1], 255);
                            data[destPos + 2] = Math.min(data[destPos + 2] + sourceData[sourcePos + 2], 255);
                            break;
                        case BlendMode.SUBTRACT:
                            data[destPos] = Math.max(sourceData[sourcePos] - data[destPos], 0);
                            data[destPos + 1] = Math.max(sourceData[sourcePos + 1] - data[destPos + 1], 0);
                            data[destPos + 2] = Math.max(sourceData[sourcePos + 2] - data[destPos + 2], 0);
                            break;
                        case BlendMode.INVERT:
                            data[destPos] = 255 - sourceData[sourcePos];
                            data[destPos + 1] = 255 - sourceData[sourcePos + 1];
                            data[destPos + 2] = 255 - sourceData[sourcePos + 1];
                            break;
                        case BlendMode.MULTIPLY:
                            data[destPos] = Math.floor(sourceData[sourcePos] * data[destPos] / 255);
                            data[destPos + 1] = Math.floor(sourceData[sourcePos + 1] * data[destPos + 1] / 255);
                            data[destPos + 2] = Math.floor(sourceData[sourcePos + 2] * data[destPos + 2] / 255);
                            break;
                        case BlendMode.LIGHTEN:
                            if (sourceData[sourcePos] > data[destPos])
                                data[destPos] = sourceData[sourcePos];
                            if (sourceData[sourcePos + 1] > data[destPos + 1])
                                data[destPos + 1] = sourceData[sourcePos + 1];
                            if (sourceData[sourcePos + 2] > data[destPos + 2])
                                data[destPos + 2] = sourceData[sourcePos + 2];
                            break;
                        case BlendMode.DARKEN:
                            if (sourceData[sourcePos] < data[destPos])
                                data[destPos] = sourceData[sourcePos];
                            if (sourceData[sourcePos + 1] < data[destPos + 1])
                                data[destPos + 1] = sourceData[sourcePos + 1];
                            if (sourceData[sourcePos + 2] < data[destPos + 2])
                                data[destPos + 2] = sourceData[sourcePos + 2];
                            break;
                        case BlendMode.DIFFERENCE:
                            data[destPos] = Math.abs(sourceData[sourcePos] - data[destPos]);
                            data[destPos + 1] = Math.abs(sourceData[sourcePos + 1] - data[destPos + 1]);
                            data[destPos + 2] = Math.abs(sourceData[sourcePos + 2] - data[destPos + 2]);
                            break;
                        case BlendMode.SCREEN:
                            data[destPos] = (255 - (((255 - data[destPos]) * (255 - sourceData[sourcePos])) >> 8));
                            data[destPos + 1] = (255 - (((255 - data[destPos + 1]) * (255 - sourceData[sourcePos + 1])) >> 8));
                            data[destPos + 2] = (255 - (((255 - data[destPos + 2]) * (255 - sourceData[sourcePos + 2])) >> 8));
                            break;
                        case BlendMode.OVERLAY:
                            if (sourceData[sourcePos] < 128)
                                data[destPos] = data[destPos] * sourceData[sourcePos] * halfColorMax;
                            else
                                data[destPos] = 255 - (255 - data[destPos]) * (255 - sourceData[sourcePos]) * halfColorMax;
                            if (sourceData[sourcePos + 1] < 128)
                                data[destPos + 1] = data[destPos + 1] * sourceData[sourcePos + 1] * halfColorMax;
                            else
                                data[destPos + 1] = 255 - (255 - data[destPos + 1]) * (255 - sourceData[sourcePos + 1]) * halfColorMax;
                            if (sourceData[sourcePos + 2] < 128)
                                data[destPos + 2] = data[destPos + 2] * sourceData[sourcePos + 2] * halfColorMax;
                            else
                                data[destPos + 2] = 255 - (255 - data[destPos + 2]) * (255 - sourceData[sourcePos + 2]) * halfColorMax;
                            break;
                        case BlendMode.HARDLIGHT:
                            if (data[destPos] < 128)
                                data[destPos] = data[destPos] * sourceData[sourcePos] * halfColorMax;
                            else
                                data[destPos] = 255 - (255 - data[destPos]) * (255 - sourceData[sourcePos]) * halfColorMax;
                            if (data[destPos + 1] < 128)
                                data[destPos + 1] = data[destPos + 1] * sourceData[sourcePos + 1] * halfColorMax;
                            else
                                data[destPos + 1] = 255 - (255 - data[destPos + 1]) * (255 - sourceData[sourcePos + 1]) * halfColorMax;
                            if (data[destPos + 2] < 128)
                                data[destPos + 2] = data[destPos + 2] * sourceData[sourcePos + 2] * halfColorMax;
                            else
                                data[destPos + 2] = 255 - (255 - data[destPos + 2]) * (255 - sourceData[sourcePos + 2]) * halfColorMax;
                            break;
                    }
                }
            }
        }
        else {
            this.context.drawImage(sourceCanvas, sourceRect.x, sourceRect.y, dw, dh, destPoint.x, destPoint.y, dw, dh);
            this.imagedata = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
        }
        this.context.putImageData(this.imagedata, 0, 0);
    }
    ;
    copyChannel(sourceBitmapData, sourceRect, destPoint, sourceChannel, destChannel) {
        var sourceColor, sourceRGB, rgb;
        var redChannel = BitmapDataChannel.RED;
        var greenChannel = BitmapDataChannel.GREEN;
        var blueChannel = BitmapDataChannel.BLUE;
        for (var y = 0; y < sourceRect.height; y++) {
            for (var x = 0; x < sourceRect.width; x++) {
                sourceColor = sourceBitmapData.getPixel(sourceRect.x + x, sourceRect.y + y);
                sourceRGB = hexToRGB(sourceColor);
                let channelValue;
                switch (sourceChannel) {
                    case redChannel:
                        channelValue = sourceRGB.r;
                        break;
                    case greenChannel:
                        channelValue = sourceRGB.g;
                        break;
                    case blueChannel:
                        channelValue = sourceRGB.b;
                        break;
                }
                rgb = hexToRGB(this.getPixel(destPoint.x + x, destPoint.y + y)); // redundancy
                switch (destChannel) {
                    case redChannel:
                        rgb.r = channelValue;
                        break;
                    case greenChannel:
                        rgb.g = channelValue;
                        break;
                    case blueChannel:
                        rgb.b = channelValue;
                        break;
                }
                this.setPixel(destPoint.x + x, destPoint.y + y, RGBToHex(rgb));
            }
        }
        this.context.putImageData(this.imagedata, 0, 0);
    }
    ;
    copyPixels(sourceBitmapData, sourceRect, destPoint, alphaBitmapData, alphaPoint, mergeAlpha) {
        this.copyCanvas(sourceBitmapData.canvas, sourceRect, destPoint);
    }
    ;
    draw(source, matrix, colorTransform, blendMode, clipRect, smoothing) {
        /*
         * currently only supports Image object
         * TODO: implement instanceof switches
         */
        let sourceMatrix = matrix || new Matrix_1.Matrix();
        let sourceRect = clipRect || new Rectangle_1.Rectangle(0, 0, source.width, source.height);
        if (blendMode && this.gpuEnabled) {
            // TO DO
        }
        this.drawingCanvas.setAttribute('width', source.width + '');
        this.drawingCanvas.setAttribute('height', source.height + '');
        this.drawingContext.transform(sourceMatrix.a, sourceMatrix.b, sourceMatrix.c, sourceMatrix.d, sourceMatrix.tx, sourceMatrix.ty);
        this.drawingContext.drawImage(source, 0, 0, source.width, source.height, 0, 0, source.width, source.height);
        this.copyCanvas(this.drawingCanvas, sourceRect, new Point_1.Point(sourceRect.x, sourceRect.y), blendMode);
    }
    fillRect(rect, color) {
        this.context.putImageData(this.imagedata, 0, 0);
        var rgb = hexToRGB(color);
        this.context.fillStyle = "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")";
        this.context.fillRect(rect.x, rect.y, rect.width, rect.height);
        this.imagedata = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
    }
    ;
    floodFill(x, y, color) {
        var queue = new Array();
        queue.push(new Point_1.Point(x, y));
        var old = this.getPixel(x, y);
        var iterations = 0;
        var searchBmp = new BitmapData(this.width, this.height, true, 0xffffff);
        var currPoint, newPoint;
        while (queue.length > 0) {
            currPoint = queue.shift();
            ++iterations;
            if (currPoint.x < 0 || currPoint.x >= this.width)
                continue;
            if (currPoint.y < 0 || currPoint.y >= this.height)
                continue;
            searchBmp.setPixel(currPoint.x, currPoint.y, 0x00);
            if (this.getPixel(currPoint.x, currPoint.y) == old) {
                this.setPixel(currPoint.x, currPoint.y, color);
                if (searchBmp.getPixel(currPoint.x + 1, currPoint.y) == 0xffffff) {
                    queue.push(new Point_1.Point(currPoint.x + 1, currPoint.y));
                }
                if (searchBmp.getPixel(currPoint.x, currPoint.y + 1) == 0xffffff) {
                    queue.push(new Point_1.Point(currPoint.x, currPoint.y + 1));
                }
                if (searchBmp.getPixel(currPoint.x - 1, currPoint.y) == 0xffffff) {
                    queue.push(new Point_1.Point(currPoint.x - 1, currPoint.y));
                }
                if (searchBmp.getPixel(currPoint.x, currPoint.y - 1) == 0xffffff) {
                    queue.push(new Point_1.Point(currPoint.x, currPoint.y - 1));
                }
            }
        }
    }
    ;
    histogram(hRect) {
        hRect = hRect || this.rect;
        var rgb = { r: [], g: [], b: [] };
        var rv = histogramVector(0);
        var gv = histogramVector(0);
        var bv = histogramVector(0);
        var p = hRect.width * hRect.height;
        var itr = -1;
        var pos;
        var color = [];
        var bw = this.canvas.width - hRect.width - hRect.x;
        var bh = this.canvas.height - hRect.height - hRect.y;
        var dw = (bw < 0) ? hRect.width + (this.canvas.width - hRect.width - hRect.x) : hRect.width;
        var dh = (bh < 0) ? hRect.height + (this.canvas.height - hRect.height - hRect.y) : hRect.height;
        var data = this.imagedata.data;
        for (var y = hRect.y; y < dh; y++) {
            for (var x = hRect.x; x < dw; x++) {
                pos = (x + y * this.width) * 4;
                color[itr++] = data[pos + 0];
                color[itr++] = data[pos + 1];
                color[itr++] = data[pos + 2];
            }
        }
        itr = 0;
        for (var i = 0; i < p; i += Math.floor(p / 256)) {
            let px = itr * 3;
            rv[itr] = color[px + 0];
            gv[itr] = color[px + 1];
            bv[itr] = color[px + 2];
            itr++;
        }
        rgb.r = rv;
        rgb.g = gv;
        rgb.b = bv;
        return rgb;
    }
    ;
    noise(randomSeed, low, high, channelOptions, grayScale) {
        this.rand = this.rand || new PRNG();
        this.rand.seed = randomSeed;
        var redChannel = BitmapDataChannel.RED;
        var greenChannel = BitmapDataChannel.GREEN;
        var blueChannel = BitmapDataChannel.BLUE;
        var data = this.imagedata.data;
        low = low || 0;
        high = high || 255;
        channelOptions = channelOptions || 7;
        grayScale = grayScale || false;
        var pos, cr, cg, cb, gray;
        for (var y = 0; y < this.height; y++) {
            for (var x = 0; x < this.width; x++) {
                pos = (x + y * this.width) * 4;
                cr = this.rand.nextRange(low, high);
                cg = this.rand.nextRange(low, high);
                cb = this.rand.nextRange(low, high);
                if (grayScale) {
                    gray = (cr + cg + cb) / 3;
                    cr = cg = cb = gray;
                }
                data[pos + 0] = (channelOptions & redChannel) ? (1 * cr) : 0x00;
                data[pos + 1] = (channelOptions & greenChannel) ? (1 * cg) : 0x00;
                data[pos + 2] = (channelOptions & blueChannel) ? (1 * cb) : 0x00;
            }
        }
    }
    ;
    paletteMap(sourceBitmapData, sourceRect, destPoint, redArray, greenArray, blueArray, alphaArray) {
        var bw = this.canvas.width - sourceRect.width - destPoint.x;
        var bh = this.canvas.height - sourceRect.height - destPoint.y;
        var dw = (bw < 0) ? sourceRect.width + (this.canvas.width - sourceRect.width - destPoint.x) : sourceRect.width;
        var dh = (bh < 0) ? sourceRect.height + (this.canvas.height - sourceRect.height - destPoint.y) : sourceRect.height;
        var sourceData = sourceBitmapData.imagedata.data;
        var sourcePos, destPos, sourceHex;
        var r, g, b, pos;
        var sx = sourceRect.x;
        var sy = sourceRect.y;
        var sw = sourceBitmapData.width;
        var dx = destPoint.x;
        var dy = destPoint.y;
        var data = this.imagedata.data;
        var w = this.width;
        for (var y = 0; y < dh; y++) {
            for (var x = 0; x < dw; x++) {
                sourcePos = ((x + sx) + (y + sy) * sw) * 4;
                r = sourceData[sourcePos + 0];
                g = sourceData[sourcePos + 1];
                b = sourceData[sourcePos + 2];
                pos = ((x + dx) + (y + dy) * w) * 4;
                data[pos + 0] = redArray[r];
                data[pos + 1] = greenArray[g];
                data[pos + 2] = blueArray[b];
            }
        }
        this.context.putImageData(this.imagedata, 0, 0);
    }
    ;
    perlinNoise(baseX, baseY, randomSeed, channelOptions, grayScale) {
        this.rand = this.rand || new PRNG();
        this.rand.seed = randomSeed;
        var redChannel = BitmapDataChannel.RED;
        var greenChannel = BitmapDataChannel.GREEN;
        var blueChannel = BitmapDataChannel.BLUE;
        channelOptions = channelOptions || 7;
        grayScale = grayScale || false;
        var data = this.imagedata.data;
        var numChannels = 0;
        if (channelOptions & redChannel) {
            this.simplexR = this.simplexR || new Simplex_1.SimplexNoise(this.rand);
            this.simplexR.setSeed(randomSeed);
            numChannels++;
        }
        if (channelOptions & greenChannel) {
            this.simplexG = this.simplexG || new Simplex_1.SimplexNoise(this.rand);
            this.simplexG.setSeed(randomSeed + 1);
            numChannels++;
        }
        if (channelOptions & blueChannel) {
            this.simplexB = this.simplexB || new Simplex_1.SimplexNoise(this.rand);
            this.simplexB.setSeed(randomSeed + 2);
            numChannels++;
        }
        var pos, cr, cg, cb;
        for (var y = 0; y < this.height; y++) {
            for (var x = 0; x < this.width; x++) {
                pos = (x + y * this.width) * 4;
                cr = (channelOptions & redChannel) ? Math.floor(((this.simplexR.noise(x / baseX, y / baseY) + 1) * 0.5) * 255) : 0x00;
                cg = (channelOptions & greenChannel) ? Math.floor(((this.simplexG.noise(x / baseX, y / baseY) + 1) * 0.5) * 255) : 0x00;
                cb = (channelOptions & blueChannel) ? Math.floor(((this.simplexB.noise(x / baseX, y / baseY) + 1) * 0.5) * 255) : 0x00;
                if (grayScale) {
                    let gray = (cr + cg + cb) / numChannels;
                    cr = cg = cb = gray;
                }
                data[pos + 0] = cr;
                data[pos + 1] = cg;
                data[pos + 2] = cb;
            }
        }
        this.context.putImageData(this.imagedata, 0, 0);
    }
    ;
    threshold(sourceBitmapData, sourceRect, destPoint, operation, threshold, color, mask, copySource) {
        color = color || 0;
        mask = mask || 0xffffff;
        copySource = copySource || false;
        var bw = this.canvas.width - sourceRect.width - destPoint.x;
        var bh = this.canvas.height - sourceRect.height - destPoint.y;
        var dw = (bw < 0) ? sourceRect.width + (this.canvas.width - sourceRect.width - destPoint.x) : sourceRect.width;
        var dh = (bh < 0) ? sourceRect.height + (this.canvas.height - sourceRect.height - destPoint.y) : sourceRect.height;
        var sourceData = sourceBitmapData.imagedata.data;
        var sourcePos, destPos, sourceHex;
        var sx = sourceRect.x;
        var sy = sourceRect.y;
        var sw = sourceBitmapData.width;
        for (var y = 0; y < dh; y++) {
            for (var x = 0; x < dw; x++) {
                sourcePos = ((x + sx) + (y + sy) * sw) * 4;
                sourceHex = RGBToHex({ r: sourceData[sourcePos], g: sourceData[sourcePos + 1], b: sourceData[sourcePos + 2] });
                switch (operation) {
                    case "<":
                        if ((sourceHex & mask) < (threshold & mask)) {
                            if (copySource)
                                this.setPixel(x + destPoint.x, y + destPoint.y, sourceHex);
                            else
                                this.setPixel(x + destPoint.x, y + destPoint.y, color);
                        }
                        break;
                    case "<=":
                        if ((sourceHex & mask) <= (threshold & mask)) {
                            if (copySource)
                                this.setPixel(x + destPoint.x, y + destPoint.y, sourceHex);
                            else
                                this.setPixel(x + destPoint.x, y + destPoint.y, color);
                        }
                        break;
                    case ">":
                        if ((sourceHex & mask) > (threshold & mask)) {
                            if (copySource)
                                this.setPixel(x + destPoint.x, y + destPoint.y, sourceHex);
                            else
                                this.setPixel(x + destPoint.x, y + destPoint.y, color);
                        }
                        break;
                    case ">=":
                        if ((sourceHex & mask) <= (threshold & mask)) {
                            if (copySource)
                                this.setPixel(x + destPoint.x, y + destPoint.y, sourceHex);
                            else
                                this.setPixel(x + destPoint.x, y + destPoint.y, color);
                        }
                        break;
                    case "==":
                        if ((sourceHex & mask) == (threshold & mask)) {
                            if (copySource)
                                this.setPixel(x + destPoint.x, y + destPoint.y, sourceHex);
                            else
                                this.setPixel(x + destPoint.x, y + destPoint.y, color);
                        }
                        break;
                    case "!=":
                        if ((sourceHex & mask) != (threshold & mask)) {
                            if (copySource)
                                this.setPixel(x + destPoint.x, y + destPoint.y, sourceHex);
                            else
                                this.setPixel(x + destPoint.x, y + destPoint.y, color);
                        }
                        break;
                }
            }
        }
        this.context.putImageData(this.imagedata, 0, 0);
    }
    ;
}
exports.BitmapData = BitmapData;
;
Object.defineProperty(HTMLCanvasElement.prototype, "bitmapData", {
    get: function () {
        if (!this._bitmapData) {
            this._bitmapData = new BitmapData(this.width, this.height, false, 0, this);
        }
        return this._bitmapData;
    }
});


/***/ }),

/***/ "./src/bitmap/ColorTransform.ts":
/*!**************************************!*\
  !*** ./src/bitmap/ColorTransform.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorTransform = void 0;
class ColorTransform {
    constructor(redMultiplier, greenMultiplier, blueMultiplier, alphaMultiplier, redOffset, greenOffset, blueOffset, alphaOffset) {
        this.redMultiplier = redMultiplier == undefined ? 1 : redMultiplier;
        this.greenMultiplier = greenMultiplier == undefined ? 1 : greenMultiplier;
        this.blueMultiplier = blueMultiplier == undefined ? 1 : blueMultiplier;
        this.alphaMultiplier = alphaMultiplier == undefined ? 1 : alphaMultiplier;
        this.redOffset = redOffset || 0;
        this.greenOffset = greenOffset || 0;
        this.blueOffset = blueOffset || 0;
        this.alphaOffset = alphaOffset || 0;
    }
}
exports.ColorTransform = ColorTransform;


/***/ }),

/***/ "./src/bitmap/Matrix.ts":
/*!******************************!*\
  !*** ./src/bitmap/Matrix.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Matrix = exports.degreeToRadian = exports.radianToDegree = void 0;
function radianToDegree(angle) { return angle * (180.0 / Math.PI); }
exports.radianToDegree = radianToDegree;
function degreeToRadian(angle) { return Math.PI * angle / 180.0; }
exports.degreeToRadian = degreeToRadian;
class Matrix {
    constructor(a, b, c, d, tx, ty) {
        this.elements =
            [
                a || 1, c || 0, tx || 0,
                b || 0, d || 1, ty || 0
            ];
        this.angle = 0; // faster but dumber method
    }
    get a() { return this.elements[0]; }
    ;
    set a(n) { this.elements[0] = n; }
    ;
    get b() { return this.elements[3]; }
    ;
    set b(n) { this.elements[3] = n; }
    ;
    get c() { return this.elements[1]; }
    ;
    set c(n) { this.elements[1] = n; }
    ;
    get d() { return this.elements[4]; }
    ;
    set d(n) { this.elements[4] = n; }
    ;
    get tx() { return this.elements[2]; }
    ;
    set tx(n) { this.elements[2] = n; }
    ;
    get ty() { return this.elements[5]; }
    ;
    set ty(n) { this.elements[5] = n; }
    ;
    clone() {
    }
    ;
    concat(m) {
    }
    ;
    identity() {
        this.elements = [1, 0, 0, 1, 0, 0];
    }
    ;
    scale(sx, sy) {
        if (sx && !sy) {
            sy = sx;
        }
        if (sx && sy) {
            this.elements[0] *= sx;
            this.elements[1] *= sy;
            this.elements[3] *= sx;
            this.elements[4] *= sy;
        }
    }
    ;
    translate(dx, dy) {
        this.elements[2] = dx * this.elements[0] + dy * this.elements[1] + this.elements[2];
        this.elements[5] = dx * this.elements[3] + dy * this.elements[4] + this.elements[5];
    }
    ;
    rotate(angle) {
        this.angle += angle;
        let r = radianToDegree(angle);
        let c = Math.cos(angle);
        let s = Math.sin(angle);
        let temp1 = this.elements[0];
        let temp2 = this.elements[1];
        this.elements[0] = c * temp1 + s * temp2;
        this.elements[1] = -s * temp1 + c * temp2;
        temp1 = this.elements[3];
        temp2 = this.elements[4];
        this.elements[3] = c * temp1 + s * temp2;
        this.elements[4] = -s * temp1 + c * temp2;
    }
    ;
}
exports.Matrix = Matrix;


/***/ }),

/***/ "./src/bitmap/Point.ts":
/*!*****************************!*\
  !*** ./src/bitmap/Point.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
/**
* The Point object represents a location in a two-dimensional coordinate system, where x represents the horizontal axis and y represents the vertical axis.
* @constructor
* @author Leandro Ferreira
*/
class Point {
    constructor(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }
    get length() { return Math.sqrt(this.x * this.x + this.y * this.y); }
    ;
    /**
    * Adds the coordinates of another point to the coordinates of this point to create a new point.
    * @param {Point} v The point to be added.
    * @returns {Point} The new Point.
    */
    add(v) {
        return new Point(this.x + v.x, this.y + v.y);
    }
    /**
    * Creates a copy of this Point object.
    * @returns {Point} The new Point.
    */
    clone() {
        return new Point(this.x, this.y);
    }
    /**
    * [static] Returns the distance between pt1 and pt2.
    * @param {Point} p1 The first point.
    * @param {Point} p2 The second point.
    * @returns {Number} The distance between the first and second points.
    */
    static distance(p1, p2) {
        var dx = p2.x - p1.x;
        var dy = p2.y - p1.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
    /**
    * Determines whether two points are equal.
    * @param {Point} toCompare The point to be compared.
    * @returns {Boolean} True if the object is equal to this Point object; false if it is not equal.
    */
    equals(toCompare) {
        return this.x == toCompare.x && this.y == toCompare.y;
    }
    /**
    * [static] Determines a point between two specified points.
    * @param {Point} p1 The first point.
    * @param {Point} p2 The second point.
    * @param {Number} f The level of interpolation between the two points. Indicates where the new point will be, along the line between pt1 and pt2. If f=1, pt1 is returned; if f=0, pt2 is returned.
    * @returns {Point} The new, interpolated point.
    */
    static interpolate(p1, p2, f) {
        var pt = new Point();
        pt.x = p1.x + f * (p2.x - p1.x);
        pt.y = p1.y + f * (p2.y - p1.y);
        return pt;
    }
    /**
    * Scales the line segment between (0,0) and the current point to a set length.
    * @param {Number} thickness The scaling value. For example, if the current point is (0,5), and you normalize it to 1, the point returned is at (0,1).
    */
    normalize(thickness) {
        var ratio = thickness / this.length;
        this.x *= ratio;
        this.y *= ratio;
    }
    /**
    * Offsets the Point object by the specified amount.
    * @param {Number} dx The amount by which to offset the horizontal coordinate, x.
    * @param {Number} dy The amount by which to offset the vertical coordinate, y.
    */
    offset(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
    /**
    * [static] Converts a pair of polar coordinates to a Cartesian point coordinate.
    * @param {Number} len The length coordinate of the polar pair.
    * @param {Number} angle The angle, in radians, of the polar pair.
    * @returns {Point} The Cartesian point.
    */
    static polar(len, angle) {
        return new Point(len * Math.cos(angle), len * Math.sin(angle));
    }
    /**
    * Subtracts the coordinates of another point from the coordinates of this point to create a new point.
    * @param {Point} v The point to be subtracted.
    * @returns {Point} The new point.
    */
    subtract(v) {
        return new Point(this.x - v.x, this.y = v.y);
    }
}
exports.Point = Point;


/***/ }),

/***/ "./src/bitmap/Rectangle.ts":
/*!*********************************!*\
  !*** ./src/bitmap/Rectangle.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Point_1 = __webpack_require__(/*! ./Point */ "./src/bitmap/Point.ts");
/**
* A Rectangle object is an area defined by its position, as indicated by its top-left corner point (x, y) and by its width and its height.
* The x, y, width, and height properties of the Rectangle class are independent of each other; changing the value of one property has no effect on the others. However, the right and bottom properties are integrally related to those four properties. For example, if you change the value of the right property, the value of the width property changes; if you change the bottom property, the value of the height property changes.
* @constructor
* @author Leandro Ferreira
*/
class Rectangle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    // TODO: test getters/setters below. Never used MDC.
    get size() { return new Point_1.Point(this.width, this.height); }
    ;
    set size(point) { this.inflatePoint(point); }
    ;
    get top() { return this.y; }
    ;
    set top(value) { this.y = value; }
    ;
    get bottom() { return this.y + this.height; }
    ;
    set bottom(value) { this.height = value - this.y; }
    ;
    get left() { return this.x; }
    ;
    set left(value) { this.x = value; }
    ;
    get right() { return this.x + this.height; }
    ;
    set right(value) { this.width = value - this.x; }
    ;
    get topLeft() { return new Point_1.Point(this.left, this.top); }
    ;
    set topLeft(point) { this.left = point.x; this.top = point.y; }
    ;
    get topRight() { return new Point_1.Point(this.right, this.top); }
    ;
    set topRight(point) { this.right = point.x; this.top = point.y; }
    ;
    get bottomLeft() { return new Point_1.Point(this.left, this.bottom); }
    ;
    set bottomLeft(point) { this.left = point.x; this.bottom = point.y; }
    ;
    get bottomRight() { return new Point_1.Point(this.right, this.bottom); }
    ;
    set bottomRight(point) { this.right = point.x; this.bottom = point.y; }
    ;
    /**
    * Returns a new Rectangle object with the same values for the x, y, width, and height properties as the original Rectangle object.
    * @returns Rectangle
    */
    clone() {
        return new Rectangle(this.x, this.y, this.width, this.height);
    }
    /**
    * Determines whether the specified point is contained within the rectangular region defined by this Rectangle object.
    * @param {Number} x horizontal position of point.
    * @param {Number} y vertical position of point.
    * @returns Boolean
    */
    contains(x, y) {
        return x > this.left && x < this.right && y > this.top && y < this.bottom;
    }
    /**
    * Determines whether the specified point is contained within the rectangular region defined by this Rectangle object.
    * @param {Point} point Point to test.
    * @returns Boolean
    */
    containsPoint(point) {
        return this.contains(point.x, point.y);
    }
    /**
    * Determines whether the Rectangle object specified by the rect parameter is contained within this Rectangle object.
    * @param {Rectangle} rect Rectangle to test.
    * @returns Boolean
    */
    containsRect(rect) {
        return this.containsPoint(rect.topLeft) && this.containsPoint(rect.bottomRight);
    }
    /**
    * Determines whether the object specified in the toCompare parameter is equal to this Rectangle object.
    * @param {Rectangle} toCompare Rectangle to test.
    * @returns Boolean
    */
    equals(toCompare) {
        return toCompare.topLeft.equals(this.topLeft) && toCompare.bottomRight.equals(this.bottomRight);
    }
    /**
    * Increases the size of the Rectangle object by the specified amounts, in pixels.
    * @param {Number} x horizontal amount.
    * @param {Number} y vertical amount.
    */
    inflate(dx, dy) {
        this.width += dx;
        this.height += dy;
    }
    /**
    * Increases the size of the Rectangle object.
    * @param {Point} point Point whose width and height are used to inflate.
    */
    inflatePoint(point) {
        this.inflate(point.width, point.height);
    }
    /**
    * If the Rectangle object specified in the toIntersect parameter intersects with this Rectangle object, returns the area of intersection as a Rectangle object.
    * @param {Rectangle} toIntersect Rectangle to intersect.
    * @returns resulting Rectangle or null, if they do not intersect.
    */
    intersection(toIntersect) {
        if (this.intersects(toIntersect)) {
            var t = Math.max(this.top, toIntersect.top);
            var l = Math.max(this.left, toIntersect.left);
            var b = Math.min(this.bottom, toIntersect.bottom);
            var r = Math.min(this.right, toIntersect.right);
            return new Rectangle(l, t, r - l, b - t);
        }
        else {
            return null;
        }
    }
    /**
    * Determines whether the object specified in the toIntersect parameter intersects with this Rectangle object.
    * @param {Rectangle} toIntersect Rectangle to test.
    * @returns Boolean
    */
    intersects(toIntersect) {
        return this.containsPoint(toIntersect.topLeft) || this.containsPoint(toIntersect.topRight) || this.containsPoint(toIntersect.bottomLeft) || this.containsPoint(toIntersect.bottomRight);
    }
    /**
    * Determines whether or not this Rectangle object is empty.
    * @returns Boolean
    */
    isEmpty() {
        return this.x == 0 && this.y == 0 && this.width == 0 && this.height == 0;
    }
    /**
    * Adjusts the location of the Rectangle object, as determined by its top-left corner, by the specified amounts.
    * @param {Number} x horizontal amount.
    * @param {Number} y vertical amount.
    */
    offset(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
    /**
    * Adjusts the location of the Rectangle object using a Point object as a parameter.
    * @param {Point} point Point whose x and y are used to offset.
    */
    offsetPoint(point) {
        this.offset(point.x, point.y);
    }
    /**
    * Sets all of the Rectangle object's properties to 0.
    */
    setEmpty() {
        this.x = this.y = this.width = this.height = 0;
    }
    /**
    * Adds two rectangles together to create a new Rectangle object, by filling in the horizontal and vertical space between the two rectangles.
    * @param {Rectangle} toUnion Rectangle to create union.
    */
    union(toUnion) {
        var t = Math.min(this.top, toUnion.top);
        var l = Math.min(this.left, toUnion.left);
        var b = Math.max(this.bottom, toUnion.bottom);
        var r = Math.max(this.right, toUnion.right);
        return new Rectangle(l, t, r - l, b - t);
    }
}
exports.Rectangle = Rectangle;


/***/ }),

/***/ "./src/bitmap/Simplex.ts":
/*!*******************************!*\
  !*** ./src/bitmap/Simplex.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Ported from Stefan Gustavson's java implementation
// http://staffwww.itn.liu.se/~stegu/simplexnoise/simplexnoise.pdf
// Sean McCullough banksean@gmail.com
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimplexNoise = void 0;
class SimplexNoise {
    constructor(gen) {
        this.rand = gen;
        this.grad3 = [
            [1, 1, 0], [-1, 1, 0], [1, -1, 0], [-1, -1, 0],
            [1, 0, 1], [-1, 0, 1], [1, 0, -1], [-1, 0, -1],
            [0, 1, 1], [0, -1, 1], [0, 1, -1], [0, -1, -1]
        ];
        this.simplex = [
            [0, 1, 2, 3], [0, 1, 3, 2], [0, 0, 0, 0], [0, 2, 3, 1], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [1, 2, 3, 0],
            [0, 2, 1, 3], [0, 0, 0, 0], [0, 3, 1, 2], [0, 3, 2, 1], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [1, 3, 2, 0],
            [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0],
            [1, 2, 0, 3], [0, 0, 0, 0], [1, 3, 0, 2], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [2, 3, 0, 1], [2, 3, 1, 0],
            [1, 0, 2, 3], [1, 0, 3, 2], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [2, 0, 3, 1], [0, 0, 0, 0], [2, 1, 3, 0],
            [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0],
            [2, 0, 1, 3], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [3, 0, 1, 2], [3, 0, 2, 1], [0, 0, 0, 0], [3, 1, 2, 0],
            [2, 1, 0, 3], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [3, 1, 0, 2], [0, 0, 0, 0], [3, 2, 0, 1], [3, 2, 1, 0]
        ];
    }
    setSeed(seed) {
        this.p = [];
        this.rand.seed = seed;
        for (var i = 0; i < 256; i++) {
            this.p[i] = Math.floor(this.rand.nextRange(0, 255));
        }
        this.perm = [];
        for (var i = 0; i < 512; i++) {
            this.perm[i] = this.p[i & 255];
        }
    }
    dot(g, x, y) {
        return g[0] * x + g[1] * y;
    }
    ;
    noise(xin, yin) {
        var n0, n1, n2;
        var F2 = 0.5 * (Math.sqrt(3.0) - 1.0);
        var s = (xin + yin) * F2;
        var i = Math.floor(xin + s);
        var j = Math.floor(yin + s);
        var G2 = (3.0 - Math.sqrt(3.0)) / 6.0;
        var t = (i + j) * G2;
        var X0 = i - t;
        var Y0 = j - t;
        var x0 = xin - X0;
        var y0 = yin - Y0;
        var i1, j1;
        if (x0 > y0) {
            i1 = 1;
            j1 = 0;
        }
        else {
            i1 = 0;
            j1 = 1;
        }
        var x1 = x0 - i1 + G2;
        var y1 = y0 - j1 + G2;
        var x2 = x0 - 1.0 + 2.0 * G2;
        var y2 = y0 - 1.0 + 2.0 * G2;
        var ii = i & 255;
        var jj = j & 255;
        var gi0 = this.perm[ii + this.perm[jj]] % 12;
        var gi1 = this.perm[ii + i1 + this.perm[jj + j1]] % 12;
        var gi2 = this.perm[ii + 1 + this.perm[jj + 1]] % 12;
        var t0 = 0.5 - x0 * x0 - y0 * y0;
        if (t0 < 0)
            n0 = 0.0;
        else {
            t0 *= t0;
            n0 = t0 * t0 * this.dot(this.grad3[gi0], x0, y0);
        }
        var t1 = 0.5 - x1 * x1 - y1 * y1;
        if (t1 < 0)
            n1 = 0.0;
        else {
            t1 *= t1;
            n1 = t1 * t1 * this.dot(this.grad3[gi1], x1, y1);
        }
        var t2 = 0.5 - x2 * x2 - y2 * y2;
        if (t2 < 0)
            n2 = 0.0;
        else {
            t2 *= t2;
            n2 = t2 * t2 * this.dot(this.grad3[gi2], x2, y2);
        }
        return 70.0 * (n0 + n1 + n2);
    }
    ;
}
exports.SimplexNoise = SimplexNoise;
;


/***/ }),

/***/ "./src/bitmap/filters/ColorMatrixFilter.ts":
/*!*************************************************!*\
  !*** ./src/bitmap/filters/ColorMatrixFilter.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorMatrixFilter = void 0;
class ColorMatrixFilter {
    constructor(matrix) {
        this.matrix = matrix || [
            1, 0, 0, 0, 0,
            0, 1, 0, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 0, 1, 0
        ];
    }
    run(sourceRect, image, copy) {
        var numPixel = image.length / 4;
        var m = this.matrix;
        for (var i = 0; i < numPixel; i++) {
            var r = i * 4;
            var g = r + 1;
            var b = r + 2;
            var a = r + 3;
            var oR = image[r];
            var oG = image[g];
            var oB = image[b];
            var oA = image[a];
            image[r] = (m[0] * oR) + (m[1] * oG) + (m[2] * oB) + (m[3] * oA) + m[4];
            image[g] = (m[5] * oR) + (m[6] * oG) + (m[7] * oB) + (m[8] * oA) + m[9];
            image[b] = (m[10] * oR) + (m[11] * oG) + (m[12] * oB) + (m[13] * oA) + m[14];
            image[a] = (m[15] * oR) + (m[16] * oG) + (m[17] * oB) + (m[18] * oA) + m[19];
        }
    }
    clone() {
        return new ColorMatrixFilter(this.matrix);
    }
}
exports.ColorMatrixFilter = ColorMatrixFilter;


/***/ }),

/***/ "./src/bitmap/modes/Difference.ts":
/*!****************************************!*\
  !*** ./src/bitmap/modes/Difference.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Difference = void 0;
exports.Difference = {
    vsSrc: [
        "attribute vec2 pos;",
        "varying vec2 p;",
        "void main(void) {",
        "	p=pos;",
        "	gl_Position = vec4(pos.x, pos.y, 0.0, 1.0);",
        "}"
    ].join("\n"),
    fsSrc: [
        "#ifdef GL_ES",
        "precision highp float;",
        "#endif",
        "uniform vec2 r;",
        "uniform vec2 t;",
        "uniform sampler2D tex0;",
        "uniform sampler2D tex1;",
        "uniform mat3 rMat;",
        "void main(void) {",
        "	vec3 t2 = rMat*vec3(gl_FragCoord.x-t.x, gl_FragCoord.y-t.y, 0.0);",
        "	vec2 p1 = 1.0 - 2.0 * gl_FragCoord.xy / r.xy;",
        "	vec2 p2 = 1.0 - 2.0 * t2.xy / r.xy;",
        "	vec3 col = abs(texture2D(tex0,p1).xyz - texture2D(tex1,p2).xyz);",
        "	gl_FragColor = vec4(col, 1.0);",
        "}"
    ].join("\n")
};


/***/ }),

/***/ "./src/examples/ExBlendModes.ts":
/*!**************************************!*\
  !*** ./src/examples/ExBlendModes.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExBlendModes = void 0;
const BitmapData_1 = __webpack_require__(/*! ../bitmap/BitmapData */ "./src/bitmap/BitmapData.ts");
const Example_1 = __webpack_require__(/*! ./Example */ "./src/examples/Example.ts");
class ExBlendModes extends Example_1.Example {
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            let bmd = this.bmd;
            // let log = document.getElementById("log");
            let blendModeArray = [
                { mode: BitmapData_1.BlendMode.ADD, name: "BlendMode.ADD" },
                { mode: BitmapData_1.BlendMode.DARKEN, name: "BlendMode.DARKEN" },
                { mode: BitmapData_1.BlendMode.DIFFERENCE, name: "BlendMode.DIFFERENCE" },
                { mode: BitmapData_1.BlendMode.HARDLIGHT, name: "BlendMode.HARDLIGHT" },
                { mode: BitmapData_1.BlendMode.LIGHTEN, name: "BlendMode.LIGHTEN" },
                { mode: BitmapData_1.BlendMode.MULTIPLY, name: "BlendMode.MULTIPLY" },
                { mode: BitmapData_1.BlendMode.NORMAL, name: "BlendMode.NORMAL" },
                { mode: BitmapData_1.BlendMode.OVERLAY, name: "BlendMode.OVERLAY" },
                { mode: BitmapData_1.BlendMode.SCREEN, name: "BlendMode.SCREEN" },
                { mode: BitmapData_1.BlendMode.SUBTRACT, name: "BlendMode.SUBTRACT" }
            ];
            let bikes = yield this.createImage("res/bikes.png");
            let lenna = yield this.createImage("res/lenna-300x300.png");
            let counter = 0;
            function cycle() {
                bmd.draw(bikes);
                bmd.draw(lenna, null, null, blendModeArray[counter].mode);
                // log.innerHTML = blendModeArray[counter].name;
                if (counter == blendModeArray.length - 1) {
                    counter = 0;
                }
                else {
                    counter++;
                }
            }
            cycle();
            setInterval(cycle, 500);
        });
    }
}
exports.ExBlendModes = ExBlendModes;


/***/ }),

/***/ "./src/examples/ExChannels.ts":
/*!************************************!*\
  !*** ./src/examples/ExChannels.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExChannels = void 0;
const BitmapData_1 = __webpack_require__(/*! ../bitmap/BitmapData */ "./src/bitmap/BitmapData.ts");
const Point_1 = __webpack_require__(/*! ../bitmap/Point */ "./src/bitmap/Point.ts");
const Rectangle_1 = __webpack_require__(/*! ../bitmap/Rectangle */ "./src/bitmap/Rectangle.ts");
const Example_1 = __webpack_require__(/*! ./Example */ "./src/examples/Example.ts");
class ExChannels extends Example_1.Example {
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            let bikes = yield this.createImage("res/bikes.png");
            this.bmd.draw(bikes);
            let lenna = yield this.createImage("res/lenna-300x300.png");
            let leenaData = new BitmapData_1.BitmapData(300, 300);
            leenaData.draw(lenna);
            this.bmd.copyChannel(leenaData, new Rectangle_1.Rectangle(50, 50, 200, 200), new Point_1.Point(50, 50), BitmapData_1.BitmapDataChannel.GREEN, BitmapData_1.BitmapDataChannel.GREEN);
        });
    }
}
exports.ExChannels = ExChannels;


/***/ }),

/***/ "./src/examples/ExColorMatrixFilter.ts":
/*!*********************************************!*\
  !*** ./src/examples/ExColorMatrixFilter.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExColorMatrixFilter = void 0;
const BitmapData_1 = __webpack_require__(/*! ../bitmap/BitmapData */ "./src/bitmap/BitmapData.ts");
const ColorMatrixFilter_1 = __webpack_require__(/*! ../bitmap/filters/ColorMatrixFilter */ "./src/bitmap/filters/ColorMatrixFilter.ts");
const Point_1 = __webpack_require__(/*! ../bitmap/Point */ "./src/bitmap/Point.ts");
const Example_1 = __webpack_require__(/*! ./Example */ "./src/examples/Example.ts");
class ExColorMatrixFilter extends Example_1.Example {
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            let canvas2 = this.canvas2 = this.createCanvas(300, 300);
            let bikes = yield this.createImage("res/bikes.png");
            let bikesData = new BitmapData_1.BitmapData(300, 300);
            var invertMatrix = [
                -1, 0, 0, 0, 255,
                0, -1, 0, 0, 255,
                0, 0, -1, 0, 255,
                0, 0, 0, 1, 0
            ];
            var brightness = [
                2, 0, 0, 0, 0,
                0, 2, 0, 0, 0,
                0, 0, 2, 0, 0,
                0, 0, 0, 1, 0
            ];
            var invertFilter = new ColorMatrixFilter_1.ColorMatrixFilter(invertMatrix);
            var brightnessFilter = new ColorMatrixFilter_1.ColorMatrixFilter(brightness);
            var zeroPoint = new Point_1.Point();
            bikesData.draw(bikes);
            bikesData.applyFilter(bikesData, bikesData.rect, zeroPoint, invertFilter);
            let context = this.canvas.getContext("2d");
            context.putImageData(bikesData.data, 0, 0);
            bikesData.draw(bikes);
            bikesData.applyFilter(bikesData, bikesData.rect, zeroPoint, brightnessFilter);
            context = canvas2.getContext("2d");
            context.putImageData(bikesData.data, 0, 0);
        });
    }
    dispose() {
        super.dispose();
        this.canvas2.parentElement.removeChild(this.canvas2);
    }
}
exports.ExColorMatrixFilter = ExColorMatrixFilter;


/***/ }),

/***/ "./src/examples/ExColorTransform.ts":
/*!******************************************!*\
  !*** ./src/examples/ExColorTransform.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExColorTransform = void 0;
const ColorTransform_1 = __webpack_require__(/*! ../bitmap/ColorTransform */ "./src/bitmap/ColorTransform.ts");
const Rectangle_1 = __webpack_require__(/*! ../bitmap/Rectangle */ "./src/bitmap/Rectangle.ts");
const Example_1 = __webpack_require__(/*! ./Example */ "./src/examples/Example.ts");
class ExColorTransform extends Example_1.Example {
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            let bikes = yield this.createImage("res/bikes.png");
            this.bmd.draw(bikes);
            let colorTrans = new ColorTransform_1.ColorTransform(1, 0, 1, 1, 180);
            let rect = new Rectangle_1.Rectangle(20, 20, 200, 200);
            this.bmd.colorTransform(rect, colorTrans);
        });
    }
}
exports.ExColorTransform = ExColorTransform;


/***/ }),

/***/ "./src/examples/ExDefault.ts":
/*!***********************************!*\
  !*** ./src/examples/ExDefault.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExDefault = void 0;
const BitmapData_1 = __webpack_require__(/*! ../bitmap/BitmapData */ "./src/bitmap/BitmapData.ts");
const Point_1 = __webpack_require__(/*! ../bitmap/Point */ "./src/bitmap/Point.ts");
const Example_1 = __webpack_require__(/*! ./Example */ "./src/examples/Example.ts");
class ExDefault extends Example_1.Example {
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            let bmd = this.bmd;
            for (var i = 0; i < 100; i++) {
                for (var j = 0; j < 300; j++) {
                    var d = Math.pow(i - 50, 2) + Math.pow(j - 150, 2);
                    var r = Math.sin(Math.sqrt(d) * 10 * Math.PI / 180);
                    var color = 100 + 100 * r << 16;
                    bmd.setPixel(i, j, color);
                }
            }
            bmd.copyChannel(bmd, bmd.rect, new Point_1.Point(100, 0), BitmapData_1.BitmapDataChannel.RED, BitmapData_1.BitmapDataChannel.GREEN);
            bmd.copyChannel(bmd, bmd.rect, new Point_1.Point(200, 0), BitmapData_1.BitmapDataChannel.RED, BitmapData_1.BitmapDataChannel.BLUE);
        });
    }
}
exports.ExDefault = ExDefault;


/***/ }),

/***/ "./src/examples/ExGPU.ts":
/*!*******************************!*\
  !*** ./src/examples/ExGPU.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExGPU = void 0;
const BitmapData_1 = __webpack_require__(/*! ../bitmap/BitmapData */ "./src/bitmap/BitmapData.ts");
const Matrix_1 = __webpack_require__(/*! ../bitmap/Matrix */ "./src/bitmap/Matrix.ts");
const Difference_1 = __webpack_require__(/*! ../bitmap/modes/Difference */ "./src/bitmap/modes/Difference.ts");
const Point_1 = __webpack_require__(/*! ../bitmap/Point */ "./src/bitmap/Point.ts");
const Rectangle_1 = __webpack_require__(/*! ../bitmap/Rectangle */ "./src/bitmap/Rectangle.ts");
const Example_1 = __webpack_require__(/*! ./Example */ "./src/examples/Example.ts");
class ExGPU extends Example_1.Example {
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            let context = this.canvas.getContext("2d");
            let lenna = yield this.createImage("res/tex7.jpg");
            let large = yield this.createImage("res/tex0.jpg");
            var bmd = new BitmapData_1.BitmapData(512, 512, false, 0xff0000);
            bmd.initProgram(Difference_1.Difference);
            bmd.initTexture(0, lenna);
            bmd.initTexture(1, large);
            let clipping = new Rectangle_1.Rectangle(0, 0, 512, 512);
            let point = new Point_1.Point(0, 0);
            let rotoMatrix = new Matrix_1.Matrix(1, 0, 0, 1, 150.0, 150.0);
            let zoomMax = 30.0;
            let zoomMin = -20.0;
            let dz = 0.025;
            let dr = 0.02;
            let angle = 0;
            let zoom = zoomMin;
            let isZoomIncreasing = true;
            setInterval(function () {
                if (isZoomIncreasing)
                    zoom = zoom + dz;
                else
                    zoom = zoom - dz;
                angle = angle + dr;
                if (angle > 360)
                    angle = 0;
                if (zoom > zoomMax) {
                    isZoomIncreasing = false;
                    zoom = zoomMax;
                }
                else if (zoom < zoomMin) {
                    isZoomIncreasing = true;
                    zoom = zoomMin;
                }
                rotoMatrix.a = Math.cos(angle) * zoom;
                rotoMatrix.b = Math.sin(angle);
                rotoMatrix.c = -Math.sin(angle);
                rotoMatrix.d = Math.cos(angle) * zoom;
                bmd.drawGL(rotoMatrix);
                context.putImageData(bmd.data, 0, 0);
            }, 10);
        });
    }
}
exports.ExGPU = ExGPU;


/***/ }),

/***/ "./src/examples/ExNoise.ts":
/*!*********************************!*\
  !*** ./src/examples/ExNoise.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ExNoise = void 0;
const BitmapData_1 = __webpack_require__(/*! ../bitmap/BitmapData */ "./src/bitmap/BitmapData.ts");
const Example_1 = __webpack_require__(/*! ./Example */ "./src/examples/Example.ts");
class ExNoise extends Example_1.Example {
    initialize() {
        this.bmd.perlinNoise(this.bmd.width / 2, this.bmd.height / 2, Math.floor(Math.random() * 0xffff), BitmapData_1.BitmapDataChannel.RED | BitmapData_1.BitmapDataChannel.BLUE, false);
    }
}
exports.ExNoise = ExNoise;


/***/ }),

/***/ "./src/examples/ExPalettemap.ts":
/*!**************************************!*\
  !*** ./src/examples/ExPalettemap.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExPalettemap = void 0;
const BitmapData_1 = __webpack_require__(/*! ../bitmap/BitmapData */ "./src/bitmap/BitmapData.ts");
const Point_1 = __webpack_require__(/*! ../bitmap/Point */ "./src/bitmap/Point.ts");
const Example_1 = __webpack_require__(/*! ./Example */ "./src/examples/Example.ts");
class ExPalettemap extends Example_1.Example {
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            let lenna = yield this.createImage("res/lenna-300x300.png");
            let lennaData = new BitmapData_1.BitmapData(300, 300);
            lennaData.draw(lenna);
            let colorModifier = 1;
            let rArray = [], gArray = [], bArray = [];
            let point = new Point_1.Point(0, 0);
            let rate = 1;
            this.startTick(() => {
                colorModifier += rate;
                if (colorModifier < 0) {
                    rate = 1;
                    return;
                }
                if (colorModifier > 125) {
                    rate = -1;
                    return;
                }
                for (let i = 0; i < 256; i++) {
                    let r = i + colorModifier;
                    if (r > 255)
                        r = r - 256;
                    let g = i + colorModifier + r;
                    if (g > 255)
                        g = g - 256;
                    let b = i + colorModifier + g;
                    if (b > 255)
                        b = b - 256;
                    rArray[i] = r;
                    gArray[i] = g;
                    bArray[i] = b;
                }
                this.bmd.paletteMap(lennaData, lennaData.rect, point, rArray, gArray, bArray);
            });
        });
    }
}
exports.ExPalettemap = ExPalettemap;


/***/ }),

/***/ "./src/examples/ExPlasma.ts":
/*!**********************************!*\
  !*** ./src/examples/ExPlasma.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExPlasma = void 0;
const Example_1 = __webpack_require__(/*! ./Example */ "./src/examples/Example.ts");
class ExPlasma extends Example_1.Example {
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            let context = this.canvas.getContext("2d");
            function dist(a, b, c, d) {
                return Math.sqrt(((a - c) * (a - c) + (b - d) * (b - d)));
            }
            this.startTick(() => {
                let time = new Date().getTime() / 50;
                for (let y = 0; y < this.bmd.height; y++) {
                    for (let x = 0; x < this.bmd.width; x++) {
                        let rgb = Math.sin(dist(x + time, y, 128.0, 128.0) / 8.0)
                            + Math.sin(dist(x, y, 64.0, 64.0) / 8.0)
                            + Math.sin(dist(x, y + time / 7, 192.0, 64) / 7.0)
                            + Math.sin(dist(x, y, 192.0, 100.0) / 8.0);
                        let c = (4 + rgb) * 32;
                        this.bmd.setPixel(x, y, c << 16 | (c * 2) << 8 | 255 - c);
                    }
                }
                context.putImageData(this.bmd.data, 0, 0);
            });
        });
    }
}
exports.ExPlasma = ExPlasma;


/***/ }),

/***/ "./src/examples/ExRotozoomer.ts":
/*!**************************************!*\
  !*** ./src/examples/ExRotozoomer.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExRotozoomer = void 0;
const Matrix_1 = __webpack_require__(/*! ../bitmap/Matrix */ "./src/bitmap/Matrix.ts");
const Rectangle_1 = __webpack_require__(/*! ../bitmap/Rectangle */ "./src/bitmap/Rectangle.ts");
const Example_1 = __webpack_require__(/*! ./Example */ "./src/examples/Example.ts");
class ExRotozoomer extends Example_1.Example {
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            let lenna = yield this.createImage("res/lenna-300x300.png");
            let clipping = new Rectangle_1.Rectangle(10, 10, 280, 280);
            let rotoMatrix = new Matrix_1.Matrix(1, 0, 0, 1, 150, 150);
            let zoomMax = 0.2;
            let zoomMin = -0.4;
            let dz = 0.015;
            let dr = 0.01;
            let angle = 0;
            let zoom = zoomMin;
            let isZoomIncreasing = true;
            this.startTick(() => {
                if (isZoomIncreasing)
                    zoom = zoom + dz;
                else
                    zoom = zoom - dz;
                angle = angle + dr;
                if (angle > 360)
                    angle = 0;
                if (zoom > zoomMax) {
                    isZoomIncreasing = false;
                    zoom = zoomMax;
                }
                else if (zoom < zoomMin) {
                    isZoomIncreasing = true;
                    zoom = zoomMin;
                }
                rotoMatrix.a = Math.cos(angle) * zoom;
                rotoMatrix.b = Math.sin(angle);
                rotoMatrix.c = -Math.sin(angle);
                rotoMatrix.d = Math.cos(angle) * zoom;
                this.bmd.draw(lenna, rotoMatrix, null, null, null);
            });
        });
    }
}
exports.ExRotozoomer = ExRotozoomer;


/***/ }),

/***/ "./src/examples/ExThreshold.ts":
/*!*************************************!*\
  !*** ./src/examples/ExThreshold.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExThreshold = void 0;
const BitmapData_1 = __webpack_require__(/*! ../bitmap/BitmapData */ "./src/bitmap/BitmapData.ts");
const Point_1 = __webpack_require__(/*! ../bitmap/Point */ "./src/bitmap/Point.ts");
const Rectangle_1 = __webpack_require__(/*! ../bitmap/Rectangle */ "./src/bitmap/Rectangle.ts");
const Example_1 = __webpack_require__(/*! ./Example */ "./src/examples/Example.ts");
class ExThreshold extends Example_1.Example {
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            let bikes = yield this.createImage("res/bikes.png");
            bikes.src = "res/bikes.png";
            this.bmd.draw(bikes);
            let lenna = yield this.createImage("res/lenna-300x300.png");
            let lennaData = new BitmapData_1.BitmapData(300, 300);
            lennaData.draw(lenna);
            let threshold = 0x333333;
            let rect = new Rectangle_1.Rectangle(100, 100, 200, 200);
            let point = new Point_1.Point(50, 50);
            let rate = 1;
            this.startTick(() => {
                threshold += 0x00eeee * rate;
                if (threshold >= 0xffffff) {
                    rate = -1;
                    return;
                }
                if (threshold <= 0x333333) {
                    rate = 1;
                    return;
                }
                this.bmd.draw(bikes);
                this.bmd.threshold(lennaData, rect, point, "<", threshold, 0x00ff00, null, true);
            });
        });
    }
}
exports.ExThreshold = ExThreshold;


/***/ }),

/***/ "./src/examples/Example.ts":
/*!*********************************!*\
  !*** ./src/examples/Example.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = void 0;
class Example {
    constructor() {
        let canvas = this.canvas = this.createCanvas(300, 300);
        this.bmd = canvas.bitmapData;
        this.initialize();
    }
    ;
    createCanvas(width, height) {
        let canvas = document.createElement("canvas");
        document.getElementById("container").appendChild(canvas);
        canvas.width = width || 300;
        canvas.height = height || 300;
        return canvas;
    }
    createImage(url) {
        return new Promise(reslove => {
            let imag = new Image();
            imag.src = url;
            imag.onload = function () {
                imag.onload = null;
                reslove(imag);
            };
        });
    }
    startTick(method) {
        let start = performance.now();
        let step = (timestamp) => {
            const elapsed = timestamp - start;
            method(elapsed);
            this.tickHandler = window.requestAnimationFrame(step);
        };
        this.tickHandler = window.requestAnimationFrame(step);
    }
    dispose() {
        this.canvas.parentElement.removeChild(this.canvas);
        window.cancelAnimationFrame(this.tickHandler);
        this.bmd.dispose();
    }
}
exports.Example = Example;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const ExBlendModes_1 = __webpack_require__(/*! ./examples/ExBlendModes */ "./src/examples/ExBlendModes.ts");
const ExChannels_1 = __webpack_require__(/*! ./examples/ExChannels */ "./src/examples/ExChannels.ts");
const ExColorMatrixFilter_1 = __webpack_require__(/*! ./examples/ExColorMatrixFilter */ "./src/examples/ExColorMatrixFilter.ts");
const ExColorTransform_1 = __webpack_require__(/*! ./examples/ExColorTransform */ "./src/examples/ExColorTransform.ts");
const ExDefault_1 = __webpack_require__(/*! ./examples/ExDefault */ "./src/examples/ExDefault.ts");
const ExGPU_1 = __webpack_require__(/*! ./examples/ExGPU */ "./src/examples/ExGPU.ts");
const ExNoise_1 = __webpack_require__(/*! ./examples/ExNoise */ "./src/examples/ExNoise.ts");
const ExPalettemap_1 = __webpack_require__(/*! ./examples/ExPalettemap */ "./src/examples/ExPalettemap.ts");
const ExPlasma_1 = __webpack_require__(/*! ./examples/ExPlasma */ "./src/examples/ExPlasma.ts");
const ExRotozoomer_1 = __webpack_require__(/*! ./examples/ExRotozoomer */ "./src/examples/ExRotozoomer.ts");
const ExThreshold_1 = __webpack_require__(/*! ./examples/ExThreshold */ "./src/examples/ExThreshold.ts");
class Main {
    constructor() {
        let examples = [
            { name: "default", clazz: ExDefault_1.ExDefault },
            { name: "channels", clazz: ExChannels_1.ExChannels },
            { name: "blendmodes", clazz: ExBlendModes_1.ExBlendModes },
            { name: "colorMatrixFilter", clazz: ExColorMatrixFilter_1.ExColorMatrixFilter },
            { name: "colorTransform", clazz: ExColorTransform_1.ExColorTransform },
            { name: "noise", clazz: ExNoise_1.ExNoise },
            { name: "palettemap", clazz: ExPalettemap_1.ExPalettemap },
            { name: "plasma", clazz: ExPlasma_1.ExPlasma },
            { name: "rotozoomer", clazz: ExRotozoomer_1.ExRotozoomer },
            { name: "threshold", clazz: ExThreshold_1.ExThreshold },
            { name: "gpu", clazz: ExGPU_1.ExGPU }
        ];
        let links = document.createElement("div");
        document.body.appendChild(links);
        let ul = document.createElement("ul");
        links.appendChild(ul);
        examples.forEach(v => {
            let li = document.createElement("li");
            let a = document.createElement("a");
            li.appendChild(a);
            ul.appendChild(li);
            a.textContent = v.name;
            a.style.cursor = "pointer";
            a.onclick = this.clickHandler.bind(this, v);
        });
        this.curExample = new ExDefault_1.ExDefault();
        this.curName = "default";
    }
    clickHandler(info) {
        if (this.curName != info.name) {
            this.curName = info.name;
            this.curExample.dispose();
            this.curExample = new info.clazz();
        }
    }
}
exports.Main = Main;
new Main();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/main.ts */"./src/main.ts");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
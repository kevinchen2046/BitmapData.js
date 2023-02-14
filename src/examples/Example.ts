import { BitmapData } from "../bitmap/BitmapData";

export abstract class Example {
    protected canvas: HTMLCanvasElement
    protected bmd: BitmapData;
    constructor() {
        let canvas: HTMLCanvasElement = this.canvas = this.createCanvas(300, 300);
        this.bmd = (canvas as any).bitmapData;
        this.initialize();
    };

    createCanvas(width?, height?) {
        let canvas: HTMLCanvasElement = document.createElement("canvas") as HTMLCanvasElement;
        document.getElementById("container").appendChild(canvas);
        canvas.width = width || 300;
        canvas.height = height || 300;
        return canvas;
    }

    createImage(url: string) {
        return new Promise<HTMLImageElement>(reslove => {
            let imag = new Image();
            imag.src = url;
            imag.onload = function () {
                imag.onload = null;
                reslove(imag);
            }
        })
    }
    private tickHandler: number;
    startTick(method: Function) {
        let start = performance.now();
        let step = (timestamp) => {
            const elapsed = timestamp - start
            method(elapsed)
            this.tickHandler = window.requestAnimationFrame(step)
        }
        this.tickHandler = window.requestAnimationFrame(step)
    }

    abstract initialize()

    dispose() {
        this.canvas.parentElement.removeChild(this.canvas);
        window.cancelAnimationFrame(this.tickHandler);
        this.bmd.dispose();
    }
}
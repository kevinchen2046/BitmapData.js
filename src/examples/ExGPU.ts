import { BitmapData } from "../bitmap/BitmapData";
import { Matrix } from "../bitmap/Matrix";
import { Difference } from "../bitmap/modes/Difference";
import { Point } from "../bitmap/Point";
import { Rectangle } from "../bitmap/Rectangle";
import { Example } from "./Example";

export class ExGPU extends Example {
    async initialize() {
       
        let context = this.canvas.getContext("2d");

        let lenna = await this.createImage("res/tex7.jpg")

        let large =  await this.createImage("res/tex0.jpg")

        var bmd = new BitmapData(512, 512, false, 0xff0000);
        bmd.initProgram(Difference);
        bmd.initTexture(0, lenna);
        bmd.initTexture(1, large);
    
        let clipping = new Rectangle(0, 0, 512, 512);
        let point = new Point(0, 0);
        let rotoMatrix = new Matrix(1, 0, 0, 1, 150.0, 150.0);

        let zoomMax = 30.0;
        let zoomMin = -20.0;
        let dz = 0.025;
        let dr= 0.02;
        let angle = 0;
        let zoom = zoomMin;
        let isZoomIncreasing = true;
            
        setInterval(function() {
            if ( isZoomIncreasing )	zoom = zoom + dz;
            else zoom = zoom - dz;	

            angle = angle + dr;

            if ( angle > 360 ) angle = 0;

            if ( zoom > zoomMax ) {
                isZoomIncreasing = false;
                zoom = zoomMax;
            } else if ( zoom < zoomMin ) {
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
    }
}
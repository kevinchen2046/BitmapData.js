import { BitmapData } from "../bitmap/BitmapData";
import { Matrix } from "../bitmap/Matrix";
import { Point } from "../bitmap/Point";
import { Rectangle } from "../bitmap/Rectangle";
import { Example } from "./Example";

export class ExRotozoomer extends Example {
    async initialize() {
       
        let lenna = await this.createImage("res/lenna-300x300.png")
    
        let clipping = new Rectangle(10, 10, 280, 280);
        let rotoMatrix = new Matrix(1, 0, 0, 1, 150, 150);
        
        let zoomMax = 0.2;
        let zoomMin = -0.4;
        let dz = 0.015;
        let dr= 0.01;
        let angle = 0;
        let zoom = zoomMin;
        let isZoomIncreasing = true;
        
        this.startTick(()=> {
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
            
            
            this.bmd.draw(lenna, rotoMatrix, null, null, null);
        });
    }
}
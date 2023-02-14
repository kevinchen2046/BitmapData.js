import { BitmapData } from "../bitmap/BitmapData";
import { ColorMatrixFilter } from "../bitmap/filters/ColorMatrixFilter";
import { Point } from "../bitmap/Point";
import { Example } from "./Example";

export class ExColorMatrixFilter extends Example {
    private canvas2:HTMLCanvasElement;
    async initialize() {
    
        let canvas2 =this.canvas2= this.createCanvas(300,300);
        
        let bikes = await this.createImage("res/bikes.png")
        let bikesData = new BitmapData(300, 300);
        
        var invertMatrix=[
                            -1, 0, 0, 0, 255,
                            0, -1, 0, 0, 255,
                            0, 0, -1, 0, 255,
                            0, 0, 0, 1, 0
                         ];
                                  
        var brightness=[
                            2, 0, 0, 0, 0,
                            0, 2, 0, 0, 0,
                            0, 0, 2, 0, 0,
                            0, 0, 0, 1, 0
                         ];
        
        var invertFilter=new ColorMatrixFilter(invertMatrix);
        var brightnessFilter=new ColorMatrixFilter(brightness);
        
        var zeroPoint=new Point();
        
        bikesData.draw(bikes);
        bikesData.applyFilter(bikesData, bikesData.rect, zeroPoint, invertFilter);
        let context = this.canvas.getContext("2d");
        context.putImageData(bikesData.data, 0, 0);
        
        bikesData.draw(bikes);
        bikesData.applyFilter(bikesData, bikesData.rect, zeroPoint, brightnessFilter);
        context = canvas2.getContext("2d");
        context.putImageData(bikesData.data, 0, 0);
    }

    dispose(): void {
        super.dispose();
        this.canvas2.parentElement.removeChild(this.canvas2);
    }
}
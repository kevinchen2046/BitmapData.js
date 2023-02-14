import { ColorTransform } from "../bitmap/ColorTransform";
import { Rectangle } from "../bitmap/Rectangle";
import { Example } from "./Example";

export class ExColorTransform extends Example {
    async initialize() {
        
        let bikes = await this.createImage("res/bikes.png")

        this.bmd.draw(bikes);
        
        let colorTrans = new ColorTransform(1, 0, 1, 1, 180);
        let rect = new Rectangle(20, 20, 200, 200);
        
        this.bmd.colorTransform(rect, colorTrans);
    }
}
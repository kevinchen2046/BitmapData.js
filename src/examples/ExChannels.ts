import { BitmapData, BitmapDataChannel } from "../bitmap/BitmapData";
import { Point } from "../bitmap/Point";
import { Rectangle } from "../bitmap/Rectangle";
import { Example } from "./Example";

export class ExChannels extends Example {
    async initialize() {
   
        let bikes = await this.createImage("res/bikes.png")

        this.bmd.draw(bikes);
        
        let lenna = await this.createImage("res/lenna-300x300.png")

        let leenaData = new BitmapData(300, 300);
        leenaData.draw(lenna);
        
        this.bmd.copyChannel(leenaData, 
            new Rectangle(50, 50, 200, 200), 
            new Point(50, 50), 
            BitmapDataChannel.GREEN, 
            BitmapDataChannel.GREEN);
    }
}
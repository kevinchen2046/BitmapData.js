import { BitmapData } from "../bitmap/BitmapData";
import { Point } from "../bitmap/Point";
import { Rectangle } from "../bitmap/Rectangle";
import { Example } from "./Example";

export class ExThreshold extends Example {
    async initialize() {

        let bikes = await this.createImage("res/bikes.png")
        bikes.src = "res/bikes.png";
        this.bmd.draw(bikes);

        let lenna = await this.createImage("res/lenna-300x300.png")

        let lennaData = new BitmapData(300, 300);
        lennaData.draw(lenna);

        let threshold = 0x333333;
        let rect = new Rectangle(100, 100, 200, 200);
        let point = new Point(50, 50);
        let rate: number = 1;
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
            this.bmd.threshold(lennaData,
                rect,
                point,
                "<",
                threshold,
                0x00ff00,
                null,
                true);
        });
    }
}
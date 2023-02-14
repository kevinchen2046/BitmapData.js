import { BitmapData } from "../bitmap/BitmapData";
import { Point } from "../bitmap/Point";
import { Example } from "./Example";

export class ExPalettemap extends Example {
    async initialize() {

        let lenna = await this.createImage("res/lenna-300x300.png")

        let lennaData = new BitmapData(300, 300);
        lennaData.draw(lenna);

        let colorModifier = 1;
        let rArray = [], gArray = [], bArray = [];
        let point = new Point(0, 0);
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
                if (r > 255) r = r - 256;

                let g = i + colorModifier + r;
                if (g > 255) g = g - 256;

                let b = i + colorModifier + g;
                if (b > 255) b = b - 256;

                rArray[i] = r;
                gArray[i] = g;
                bArray[i] = b;
            }

            this.bmd.paletteMap(lennaData, lennaData.rect, point, rArray, gArray, bArray);
        });
    }
}
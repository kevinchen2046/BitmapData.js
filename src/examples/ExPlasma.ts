import { BitmapData } from "../bitmap/BitmapData";
import { Point } from "../bitmap/Point";
import { Rectangle } from "../bitmap/Rectangle";
import { Example } from "./Example";
export class ExPlasma extends Example {
    async initialize() {

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
    }
}
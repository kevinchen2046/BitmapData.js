import { BitmapDataChannel } from "../bitmap/BitmapData";
import { Point } from "../bitmap/Point";
import { Example } from "./Example";

export class ExDefault extends Example {
    async initialize() {
        let bmd = this.bmd;
        
        for (var i = 0; i<100; i++) {
            for (var j = 0; j<300; j++) {
                var d = Math.pow(i-50, 2) + Math.pow(j-150, 2);
                var r = Math.sin(Math.sqrt(d) * 10 * Math.PI/180);
                var color = 100 + 100 * r << 16;
                bmd.setPixel( i, j, color );
            }
        }

        bmd.copyChannel(bmd,
            bmd.rect,
            new Point(100, 0),
            BitmapDataChannel.RED,
            BitmapDataChannel.GREEN);

        bmd.copyChannel(bmd,
            bmd.rect,
            new Point(200, 0),
            BitmapDataChannel.RED,
            BitmapDataChannel.BLUE);

    }
}
import { BitmapDataChannel } from "../bitmap/BitmapData";
import { Example } from "./Example";

export class ExNoise extends Example {
    initialize() {
        this.bmd.perlinNoise(
            this.bmd.width / 2,
            this.bmd.height / 2,
            Math.floor(Math.random() * 0xffff),
            BitmapDataChannel.RED | BitmapDataChannel.BLUE,
            false
        );
    }
}
import { BlendMode } from "../bitmap/BitmapData";
import { Example } from "./Example";

export class ExBlendModes extends Example {
    async initialize() {

        let bmd = this.bmd;
        // let log = document.getElementById("log");

        let blendModeArray = [
            { mode: BlendMode.ADD, name: "BlendMode.ADD" },
            { mode: BlendMode.DARKEN, name: "BlendMode.DARKEN" },
            { mode: BlendMode.DIFFERENCE, name: "BlendMode.DIFFERENCE" },
            { mode: BlendMode.HARDLIGHT, name: "BlendMode.HARDLIGHT" },
            { mode: BlendMode.LIGHTEN, name: "BlendMode.LIGHTEN" },
            { mode: BlendMode.MULTIPLY, name: "BlendMode.MULTIPLY" },
            { mode: BlendMode.NORMAL, name: "BlendMode.NORMAL" },
            { mode: BlendMode.OVERLAY, name: "BlendMode.OVERLAY" },
            { mode: BlendMode.SCREEN, name: "BlendMode.SCREEN" },
            { mode: BlendMode.SUBTRACT, name: "BlendMode.SUBTRACT" }
        ];

        let bikes = await this.createImage("res/bikes.png")

        let lenna = await this.createImage("res/lenna-300x300.png")
  
        let counter = 0;
        function cycle() {
            bmd.draw(bikes);
            bmd.draw(lenna, null, null, blendModeArray[counter].mode);

            // log.innerHTML = blendModeArray[counter].name;

            if (counter == blendModeArray.length - 1) {
                counter = 0;
            } else {
                counter++;
            }
        }

        cycle();
        setInterval(cycle, 500);
    }
}
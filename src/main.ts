import { Example } from "./examples/Example";
import { ExBlendModes } from "./examples/ExBlendModes";
import { ExChannels } from "./examples/ExChannels";
import { ExColorMatrixFilter } from "./examples/ExColorMatrixFilter";
import { ExColorTransform } from "./examples/ExColorTransform";
import { ExDefault } from "./examples/ExDefault";
import { ExGPU } from "./examples/ExGPU";
import { ExNoise } from "./examples/ExNoise";
import { ExPalettemap } from "./examples/ExPalettemap";
import { ExPlasma } from "./examples/ExPlasma";
import { ExRotozoomer } from "./examples/ExRotozoomer";
import { ExThreshold } from "./examples/ExThreshold";

export class Main {
    private curExample:Example;
    private curName:string;
    constructor(){
        let examples=[
            {name:"default",clazz:ExDefault},
            {name:"channels",clazz:ExChannels},
            {name:"blendmodes",clazz:ExBlendModes},
            {name:"colorMatrixFilter",clazz:ExColorMatrixFilter},
            {name:"colorTransform",clazz:ExColorTransform},
            {name:"noise",clazz:ExNoise},
            {name:"palettemap",clazz:ExPalettemap},
            {name:"plasma",clazz:ExPlasma},
            {name:"rotozoomer",clazz:ExRotozoomer},
            {name:"threshold",clazz:ExThreshold},
            {name:"gpu",clazz:ExGPU}
        ]
        let links=document.createElement("div")
        document.body.appendChild(links)
        let ul=document.createElement("ul");
        links.appendChild(ul);
        examples.forEach(v=>{
            let li=document.createElement("li")
            let a=document.createElement("a");
            li.appendChild(a);
            ul.appendChild(li);
            a.textContent=v.name;
            a.style.cursor="pointer";
            a.onclick=this.clickHandler.bind(this,v);
        });
    
        this.curExample=new ExDefault();
        this.curName="default";
    }

    clickHandler(info){
        if(this.curName!=info.name){
            this.curName=info.name;
            this.curExample.dispose();
            this.curExample=new info.clazz();
        }
    }
}

new Main();
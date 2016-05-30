/// <reference path="car.ts"/>

class Wheel {
    
    private div: HTMLElement;
    
    public x:number;
    public y:number;
    public width:number;
    public height:number;

    constructor() {
        this.div = document.createElement("wheel");
        document.body.appendChild(this.div);
        
        
        // vraag: hoe kan je aan elk wiel de juiste startpositie doorgeven?
        this.x = 0;
        this.y = 0;
        this.width = 62;
        this.height = 62;
        
    }
    
    
    
    public update():void {
        // vraag: hoe kan het wiel weten waar de auto is?
        this.draw();
    }
    
    public draw() : void {
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }

}
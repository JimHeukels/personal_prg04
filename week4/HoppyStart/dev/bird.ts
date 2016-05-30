/// <reference path="tree.ts"/>

class Bird {
    
    private div: HTMLElement;
    
    public x:number;
    public y:number;
    public width:number;
    public height:number;

    constructor(xpos:number, ypos:number) {
        this.div = document.createElement("bird");
        // let op! de bird moet aan het dom element van de boom worden toegevoegd! 
        // als je de bird aan de body hangt, dan beweegt de bird niet mee met de boom!
        document.body.appendChild(this.div);
                
        this.x = xpos;
        this.y = ypos;
        this.width = 67;
        this.height = 110;
        
        this.draw();
    }
        
    // omdat de bird mee beweegt met het dom element van de boom, is hier geen update functie nodig
    
    // tekenen
    public draw() : void {
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }

}
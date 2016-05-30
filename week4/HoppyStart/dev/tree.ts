/// <reference path="bird.ts" />

class Tree {
    
    public div: HTMLElement;
    
    public x:number;
    public y:number;
    public width:number;
    public height:number;
    
    // dit zijn variabelen voor de vogels, bv:
    private bird1: Bird;
    
    constructor() {
        this.div = document.createElement("tree");
        document.body.appendChild(this.div);
                
        this.width = 414;
        this.height = 86;
        this.x = 0 - this.width;
        this.y = 100;
        
        //
        // maak hier twee vogels aan met het keyword new
        // geef elke vogel zijn eigen positie mee
        // wat moet je nog meer aan de vogel geven behalve de positie?
        // 
    }
    
    
    
    public update():void {
        // vaste snelheid. hier kan je ook een eigenschap van maken
        this.x += 4;
        
        // als we uit beeld gaan, dan links plaatsen
        if(this.x > window.innerWidth) this.x = 0 - this.width;
        
        this.draw();
    }
    
    public draw() : void {
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }

}
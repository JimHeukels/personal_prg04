/**
 * Car
 */
class Car {
    private div: HTMLElement;
    
    public x:number;
    public y:number;
    public width:number;
    public height:number;
    
    private level:Level;

    constructor(l:Level) {
        this.level = l;
        
        this.div = document.createElement("car");
        this.level.div.appendChild(this.div);
        
        this.x = -168;
        this.y = 300;
        this.width = 168;
        this.height = 108;
    }
    
    public update() : void {
        this.x+=2;
    }
    
    public draw() : void {
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }
}
/**
 * Truck
 */
class Truck {
    private div: HTMLElement;
    
    public x:number;
    public y:number;
    public width:number;
    public height:number;
    
    private level:Level;

    constructor(l:Level) {
        this.level = l;
        
        this.div = document.createElement("truck");
        this.level.div.appendChild(this.div);
        
        this.x = -280;
        this.y = 80;
        this.width = 281;
        this.height = 155;
    }
    
    public update() : void {
        this.x++;
    }
    
    public draw() : void {
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }
}
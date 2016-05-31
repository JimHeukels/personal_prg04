/**
 * Player
 */
class Player {
    private div: HTMLElement;
    
    public x:number;
    public y:number;
    public width:number;
    public height:number;
    
    private level:Level;

    constructor(l:Level) {
        this.level = l;
        
        this.div = document.createElement("player");
        this.level.div.appendChild(this.div);
        
        this.x = 400;
        this.y = 640;
        this.width = 61;
        this.height = 102;
    }
    
    public update() : void {
        
    }
    
    public draw() : void {
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }
}
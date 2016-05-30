/**
 * Paddle
 */
class Paddle {
    
    private div:HTMLElement;
        
    public x : number;
    public y : number;
    public width: number;
    public height: number;
    
    private downkey : number;
    private upkey : number;
    
    private downSpeed : number = 0;
    private upSpeed : number = 0;
    
    constructor(up:number, down:number) {
        // maak een divje waar de paddle in komt te staan
        this.div = document.createElement("paddle");
        document.body.appendChild(this.div);
        
        //keys kunnen verschillend zijn voor elke instance van de paddle
        this.upkey = up;
        this.downkey = down;
        
        // positie
        this.x = 0;
        this.y = 200;
        this.width = 25;
        this.height = 100;
                
        // keyboard listener
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));

    }
    
    
        // keyboard input zorgt dat de snelheid wordt aangepast
    private onKeyDown(event:KeyboardEvent):void {
        switch(event.keyCode){
        case this.upkey:
            this.upSpeed = 5;
            break;
        case this.downkey:
            this.downSpeed = 5;
            break;
        }
    }
    
    // speed op 0 alleen als de eigen keys zijn losgelaten
    private onKeyUp(event:KeyboardEvent):void {
        switch(event.keyCode){
        case this.upkey:
            this.upSpeed = 0;
            break;
        case this.downkey:
            this.downSpeed = 0;
            break;
        }
    }
    
    
    public update() : void {
        // hier de toetsen uitlezen - in deze demo uitgezet omdat dit alleen over collision detection gaat
        this.draw();
    }
    
    public move() : void {
        this.y = this.y - this.upSpeed + this.downSpeed;         
        // de div positie aanpassen met transform - tip: scaleX kan je gebruiken om de andere kant op te kijken
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px) scaleX(-1)";
    }
    
    // tekenen
    public draw() : void {
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }
    
}
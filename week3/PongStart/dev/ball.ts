class Ball {
    
    private div : HTMLElement;
    
    public x : number;
    public y : number;
    public width: number;
    public height: number;
    
    private speedX : number;
    private speedY : number;
    
    constructor() {
        // creeer een div element
        this.div = document.createElement("ball");
        document.body.appendChild(this.div);
        
        
        // positie
        this.x = (Math.random() * (window.innerWidth/2)) + (window.innerWidth/4);
        this.y = (Math.random() * (window.innerHeight/2)) + (window.innerHeight/4);
        
        this.speedX = Math.ceil(Math.random() * 5);
        this.speedY = Math.ceil(Math.random() * 5);
                
        // plaatsen
        this.move();
    }
    
    
    public move() : void {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // als we buiten beeld gaan dan de snelheid omdraaien
        if( this.x + 40 > window.innerWidth || this.x < 0) { 
            this.speedX *= -1;
        }
        
        if( this.y + 40 > window.innerHeight || this.y < 0) { 
            this.speedY *= -1;
        }
        
        // transform gebruiken om de positie op het scherm aan te passen
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }
}
class Trunk {
    
    public div: HTMLElement;
    
    public x:number;
    public y:number;
    public width:number;
    public height:number;
    
    private screen:GameScreen;
    
    constructor(s:GameScreen) {
        this.screen = s;
        
        // let op, de game elementen worden in de div van de gamescreen geplaatst - de game screen hoeft dan alleen zijn eigen div te verwijderen
        this.div = document.createElement("tree");
        this.screen.div.appendChild(this.div);
                        
        this.width = 414;
        this.height = 86;
        this.x = 0 - this.width;
        this.y = 100;
    }
    
    
    
    public update():void {
        // vaste snelheid. hier kan je ook een eigenschap van maken
        this.x += 7;
        
        // als we uit beeld gaan, is het game over
        if(this.x > window.innerWidth){ 
            this.screen.onGameOver();
        }
        
        this.draw();
    }
    
    public draw() : void {
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }

}
class Car {
    
    private div: HTMLElement;
    private speed: number;
    
    public x:number;
    public y:number;
    public width:number;
    public height:number;

    constructor() {
        this.div = document.createElement("car");
        document.body.appendChild(this.div);
        
        this.x = 20;
        this.y = 40;
        this.width = 400;
        this.height = 124;
        this.speed = 3;
        
        // hier moet je twee wielen toevoegen met "new". 
        // zorg dat beide wielen een eigen locatie krijgen
        // vraag: waar update je de wielen?
        
    }
    
    
    
    public update():void {
        this.x += this.speed;
        
        this.draw();
    }
    
    public draw() : void {
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }

}
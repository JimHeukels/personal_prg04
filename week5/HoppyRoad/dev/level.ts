/// <reference path="car.ts"/>
/// <reference path="player.ts"/>
/// <reference path="truck.ts"/>

class Level {
    
    public div: HTMLElement;
    
    public x:number;
    public y:number;
    public width:number;
    public height:number;
    
    private game:Game;
    private car:Car;
    private player:Player;
    private truck:Truck;
    
    constructor(g:Game) {
        this.game = g;
                
        this.div = document.createElement("level");
        document.body.appendChild(this.div);
        
        this.car = new Car(this);
        this.player = new Player(this);
        this.truck = new Truck(this);
    }
    
    
    public update() : void {
        this.car.update();
        this.player.update();
        this.truck.update();
    }
    
    public draw() : void {
        this.car.draw();
        this.player.draw();
        this.truck.draw();
    }
}
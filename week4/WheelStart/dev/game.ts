/// <reference path="car.ts"/>

class Game {
    
    private car1:Car;
    
    constructor() {
        
        this.car1 = new Car();
        
        // vraag: kan je meer cars maken die elk ergens anders starten?
        
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    
    private gameLoop(){
        this.car1.update();
                
        // hiermee wordt de gameloop opnieuw aangeroepen
        requestAnimationFrame(this.gameLoop.bind(this));
    }
} 


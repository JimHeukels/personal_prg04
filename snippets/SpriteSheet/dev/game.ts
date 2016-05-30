/// <reference path="battleship.ts" />


class Game {
    
    private battleship: Battleship;
    private background: Background;
    private context: CanvasRenderingContext2D;
    
    constructor() {
        let canvas = document.getElementsByTagName("canvas")[0];
        this.context = canvas.getContext('2d');
        this.context.fillStyle = "#0099ff";
        
        // we geven de 2d context mee zodat de elementen zichzelf kunnen tekenen
        this.battleship = new Battleship(this.context);
        this.background = new Background(this.context);
        
        requestAnimationFrame(() => this.update());    
    }
    
    
    private update() : void {
        this.battleship.move();
        this.draw();
    }
    
    private draw(): void {
        // alles weghalen (hoeft niet perse als de achtergrondafbeelding alles bedekt)
        this.context.clearRect(0, 0, 800, 600);
        
        // de volgorde bepaalt wat over wat heen getekend wordt
        this.background.draw();
        this.battleship.draw();
        
        requestAnimationFrame(() => this.update());
    }
} 
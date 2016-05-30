/// <reference path="startscreen.ts"/>

class Game {
    
    private screen:any;
 
    constructor() {
        this.showStartScreen();
        
        
    }
    
    public showStartScreen():void {
        this.screen = new StartScreen(this);
    }
    
    public showGameScreen():void {
        this.screen = new GameScreen(this);
    }
    
    
} 


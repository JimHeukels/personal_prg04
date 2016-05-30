/// <reference path="tree.ts"/>

class Game {
    
    private tree1:Tree;
 
    constructor() {
        // maak meerdere trees aan, en geef een y positie mee
        this.tree1 = new Tree();
        
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    
    private gameLoop(){
        this.tree1.update();
                
        // hiermee wordt de gameloop opnieuw aangeroepen
        requestAnimationFrame(this.gameLoop.bind(this));
    }
} 


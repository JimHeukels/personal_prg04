/// <reference path="charmeleon.ts"/>
class Game {
    
    private char1:Charmeleon;
    private char2:Charmeleon;
    private char3:Charmeleon;
    
    private utils:Utils;
        
    constructor() {
        
        // we kunnen meerdere Charmeleons maken met elk hun eigen keyboard input        
        this.char1 = new Charmeleon(65, 68, 87, 83);
        this.char2 = new Charmeleon(37, 39, 38, 40);
        this.char3 = new Charmeleon(100, 102, 104, 98);
        // utils
        this.utils = new Utils();
        
        // start game loop        
        requestAnimationFrame(this.gameLoop.bind(this));        
    }
    
    // game loop
    private gameLoop(){
       this.char1.move();
       this.char2.move();
       this.char3.move();
        
       // de game kan zien of de Charmeleons elkaar raken
       let hit:boolean = this.utils.isOverlap(this.char1, this.char2, this.char3);
       
       // vertel aan de charmeleons of ze geraakt worden
       this.char1.showHit(hit);
       this.char2.showHit(hit);
       this.char3.showHit(hit);
             
       requestAnimationFrame(this.gameLoop.bind(this));
    }
} 
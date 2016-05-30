/// <reference path="fish.ts"/>
/// <reference path="bubble.ts"/>

class Game {
    
    timeid:number;
    
    constructor() {
       this.createFish();
       this.createBubble();
    }
        
    createFish():void {
       let f = new Fish();
    }
    
    createBubble():void{
       let b = new Bubble();
    }
} 


// load
window.addEventListener("load", function() {
    new Game();
});
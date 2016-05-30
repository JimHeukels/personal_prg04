/// <reference path="fish.ts"/>
/// <reference path="bubble.ts"/>

class Game {
    
    private timeid:number;
    private numelements:number;
        
    constructor() {
       this.numelements = 0;
       this.timeid = setInterval(this.createElements.bind(this), 50);
    }
    
        
    private createElements():void {
       
       let f:Fish = new Fish();
       let b:Bubble = new Bubble();
       
       
       this.numelements++;
       if(this.numelements > 100) {
           clearInterval(this.timeid);
       }   
    }
}
/// <reference path="startscreen.ts" />

class GameScreen {
    
    public div: HTMLElement;
    
    private game:Game;
    private tree:Trunk;
    private gameover:boolean = false;
    
    constructor(g:Game) {
        this.game = g;
        
        this.div = document.createElement("screen");
        document.body.appendChild(this.div);
        
        // sub elementen in de screen div. dan kunnen we alles in 1x weghalen
        this.tree = new Trunk(this);
        
        // het game screen heeft de gameloop. de start / score schermen kan je puur in html bouwen
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    
    public onGameOver():void{
        // div en alle game elementen uit de dom halen
        this.div.remove();
        // de gameloop moeten we ook stoppen!
        this.gameover = true;
        // vertel de main game dat er een ander scherm getoond mag worden
        this.game.showStartScreen();
    }

        
    private gameLoop(){
        this.tree.update();
                
        // hiermee wordt de gameloop opnieuw aangeroepen
        if(!this.gameover) requestAnimationFrame(this.gameLoop.bind(this));
    }

}
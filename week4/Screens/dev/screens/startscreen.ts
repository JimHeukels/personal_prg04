class StartScreen {
    
    private div: HTMLElement;
    private game:Game;
    
    constructor(g:Game) {
        this.game = g;
        
        this.div = document.createElement("screen");
        document.body.appendChild(this.div);
        
        // sub elementen in de screen div. dan kunnen we alles in 1x weghalen
        let btn = document.createElement("gamebutton");
        this.div.appendChild(btn);
        btn.innerHTML = "START DE GAME!";
        
        // click
        btn.addEventListener("click", this.onStartClick.bind(this));
        
    }
    
    onStartClick():void{
        this.div.remove();
        this.game.showGameScreen();
    }

}
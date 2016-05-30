class Fish {
            
    constructor() {
        let div:HTMLElement = document.createElement("fish");
        document.body.appendChild(div);
  
        // random positie
        let startx:number = (Math.random() * window.innerWidth);
        let starty:number = (Math.random() * window.innerHeight);      
        
        div.style.left = startx + "px";
        div.style.top = starty + "px";
        
        // random kleur
        let color:number = Math.random() * 360;
        
        div.style.webkitFilter = "hue-rotate("+color+"deg)";
        div.style.filter = "hue-rotate("+color+"deg)";
    }
 
}
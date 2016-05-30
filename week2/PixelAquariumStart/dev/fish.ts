class Fish {
            
    constructor() {
        let div = document.createElement("fish");
        document.body.appendChild(div);
        
        // positie
        let startx = 100;
        let starty = 100;
        
        // kleur
        let color = 45;
                        
        // set css left en top
        div.style.left = startx + "px";
        div.style.top = starty + "px";
        
        // color filter with css!
        div.style.webkitFilter = "hue-rotate("+color+"deg)";
        div.style.filter = "hue-rotate("+color+"deg)";
    }
 
}
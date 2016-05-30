class Bubble {
            
    constructor() {
       let div = document.createElement("bubble");
       document.body.appendChild(div);
        
       // positie
       let startx = 100;
       let starty = 100;
                        
       // set css left en top
       div.style.left = startx + "px";
       div.style.top = starty + "px";
    }
 
}
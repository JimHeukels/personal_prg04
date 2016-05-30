/// <reference path="vector2.ts"/>
/// <reference path="rectangle.ts"/>

class Game {
    
    
    constructor() {
        
        this.testVector();
        this.testRectangle();
    }
    
    testVector(){
        
        this.addMessage("Vector2 Class: <Br><br>let v1 = new Vector2(20,35);<br>let v2 = new Vector2(100,120)");
        
        // vector2 heeft x, y en static methods
        let v1 = new Vector2(20,35);
        let v2 = new Vector2(100,120);
        
        // vectoren optellen
        v1 = v1.add(v2);
        this.addMessage("Added v1 and v2: " + v1.x + "," + v1.y);
        
        // verschil tussen twee vectoren
        let v3 = v1.difference(v2);
        this.addMessage("Difference between: " + v1.x + "," + v1.y + " and " +  v2.x + "," + v2.y + " is " +  v3.x + "," + v3.y);
        
        // magnitude: hoe lang is de vector. pythagoras
        let v4 = new Vector2(100,0);
        let v5 = new Vector2(100,100);
        this.addMessage("Lengte (magnitude) van: " + v4.x + "," + v4.y + " is " + v4.magnitude() + "<br>Lengte (magnitude) van: " + v5.x + "," + v5.y + " is " + v5.magnitude());
        
        // normalize is dezelfde vector met een magnitude van 1 - dit gebruik je voor de richting
        let v6 = v5.normalize();
        this.addMessage("Vector: " + v5.x + "," + v5.y + " normalized is " + v6.x + "," + v6.y);
    }
    
    //
    testRectangle(){
        
        let r1:Rectangle = new Rectangle(new Vector2(20,20), 100, 100);
        let v1:Vector2 = new Vector2(25,25);
        
        // punt binnen rectangle?
        let hit:boolean = r1.isInside(v1);
        this.addMessage("Is vector " + v1.x + "," + v1.y + " inside " + r1.position.x + "," + r1.position.y + "," + r1.width + "," + r1.height + " = " + hit);
        
        // rectangles overlap?
        let r2:Rectangle = new Rectangle(new Vector2(30,30), 200, 150);
        let r3:Rectangle = new Rectangle(new Vector2(200,200), 50, 50);
        
        let hit2 = r1.isOverlap(r2);
        let hit3 = r1.isOverlap(r3);
        this.addMessage("Does rectangle " + r2.position.x + "," + r2.position.y + "," + r2.width + "," + r2.height + " overlap " + r1.position.x + "," + r1.position.y + "," + r1.width + "," + r1.height + " = " + hit);
        this.addMessage("Does rectangle " + r3.position.x + "," + r3.position.y + "," + r3.width + "," + r3.height + " overlap " + r1.position.x + "," + r1.position.y + "," + r1.width + "," + r1.height + " = " + hit);
    }
    
    
    // zet een div in de dom
    addMessage(str:string):void {
        let div = document.createElement("div");
        div.innerHTML = str;
        document.body.appendChild(div);
    }
    

} 

window.addEventListener("load", () => new Game());
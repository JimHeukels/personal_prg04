/**
 * Rectangle
 * tip: https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
 */
class Rectangle {
    
    public x : number;
    public y : number;
    public width: number;
    public height: number;
    
    constructor(x:number, y:number, w:number, h:number) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }
    
    // kijk of een punt binnen deze rectangle is - handig voor muis kliks
    hitsPoint(posx:number, posy:number): boolean {
        return (posx >= this.x && posx <= this.x + this.width && posy >= this.y && posy <= this.y + this.height);
    }
    
    // kijk of twee rectangles elkaar raken
    hitsOtherRectangle(rec: Rectangle): boolean {
         return (this.x < rec.x + rec.width && this.x + this.width > rec.x && this.y < rec.y + rec.height && this.height + this.y > rec.y);
    }
}
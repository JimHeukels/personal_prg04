/**
 * Battleship
 */
class Battleship {
    
    private directionX: number = 0;
    private directionY: number = 0;

    private x: number = 0;
    private y: number = 0;
    
    private speed: number = 0;
    
    private context: CanvasRenderingContext2D;
    private image: HTMLImageElement;
    
    private frameWidth: number      = 161;
    private frameHeight:number      = 161;
    private currentFrame: number    = 0;
    private animationY: number      = 0; // 0 = down, 1 = left, 2 = right, 3 = up
    private animationSpeed: number  = 0;
    private timer: number = 0;
    
    constructor(ctx:CanvasRenderingContext2D) {
        this.context = ctx;

        this.image = new Image();   // Create new img element
        this.image.src = 'images/battleship.png'; // Set source path
        
        this.directionX = 0;
        this.directionY = 0;
        this.speed      = 3;
        
        this.currentFrame   = 0;
        this.animationSpeed = 20;
        
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
        window.addEventListener("keyup"  , (e) => this.onKeyUp(e));
    }
    
    // keyboard input zorgt dat de snelheid wordt aangepast
    private onKeyDown(event:KeyboardEvent):void {
        switch(event.keyCode){
            case 38: //UP
                this.directionY = -1;
                this.animationY = 3;
                break;
            case 39: //RIGHT
                this.directionX = 1;
                this.animationY = 2;
                break;
            case 40: //DOWN
                this.directionY = 1;
                this.animationY = 0;
                break;
            case 37: //LEFT
                this.directionX = -1;
                this.animationY = 1;
                break;
        }
    }
    
    // speed op 0 alleen als de eigen keys zijn losgelaten
    private onKeyUp(event:KeyboardEvent):void {
        switch(event.keyCode){
            case 38: //UP
                this.directionY = 0;
                break;
            case 39: //RIGHT
                this.directionX = 0;
                break;
            case 40: //DOWN
                this.directionY = 0;
                break;
            case 37: //LEFT
                this.directionX = 0;
                break;
        }
    }
    
    public move() : void {
        this.x = this.x + this.speed * this.directionX;
        this.y = this.y + this.speed * this.directionY;
    }
    
    public draw(): void {
        //this.context.drawImage(this.image, this.x, this.y, 400, 308); // x, y, width, height
        /**
         * img	Source image object	Sprite sheet
            sx	Source x	Frame index times frame width
            sy	Source y	0
            sw	Source width	Frame width
            sh	Source height	Frame height
            dx	Destination x	0
            dy	Destination y	0
            dw	Destination width	Frame width
            dh	Destination height	Frame height
         */
        this.timer++
        
        if(this.timer % this.animationSpeed == 0) this.currentFrame++;
        
        if(this.currentFrame > 3) this.currentFrame = 0;
        
        this.context.drawImage(
            this.image, 
            this.currentFrame * this.frameWidth, 
            this.animationY * this.frameHeight, 
            this.frameWidth, 
            this.frameHeight, 
            this.x, 
            this.y, 
            161, 
            161)
    }
}

class Background {
        
    private context: CanvasRenderingContext2D;
    private image: HTMLImageElement;
    
    constructor(ctx:CanvasRenderingContext2D) {
        this.context = ctx;

        this.image = new Image();   // Create new img element
        this.image.src = 'images/sea.png'; // Set source path
    }
    
    
    
    public draw(): void {
        this.context.drawImage(this.image, 0,0,800,600);
        
    }
}

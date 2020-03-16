function Jerry(){
    this.x = 200;
    this.y = 300;
    this.name = "Jerry";
    this.speedX = 10;
    this.speedY = 10;
    this.width = 25;
    this.height = 25;
    this.pointCounter = 0;

 
} 
Jerry.prototype.move = function(edit){
    if(edit === 'left'){
        this.x -= this.speedX;
    } else if(edit === 'right'){
        this.x += this.speedX;
    } else if(edit === 'top'){
        this.y -= this.speedY;
    } else if(edit === 'bottom'){
        this.y += this.speedY;
    }
}
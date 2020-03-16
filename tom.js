function Tom(){
    this.x = 50;
    this.y = 50;
    this.name = "Tom";
    this.speedX = 10;
    this.speedY = 5;
    this.width = 50;
    this.height = 50;
    this.tomArray = [];
    this.tomCounter = 0;
}

var t = new Tom();

Tom.prototype.createTom = function(){
        this.tomArray.push({
            nx: this.x,
            ny: this.y,
            n: this.name,
            sX: this.speedX,
            sY: this.speedY,
            nwidth: this.width,
            nheight: this.height,
        });
        this.tomCounter++;
};
Tom.prototype.intervalTom = function(){
    setInterval(function(){t.createTom();},
    2000);
}

t.intervalTom();

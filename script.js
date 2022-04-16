class BarGraph {
  constructor(x, y, scr_width, scr_height, canvas_id) {
      this.x = x;
      this.y = y;
      // calculating the sum of the y values
      this.sum = 0;
      for (let i =0; i<this.x.length; i++) {
        this.sum += this.y[i];
      }
      this.scr_width = scr_width;
      this.scr_height = scr_height;
      this.width = scr_width/x.length;
      this.canvasID = canvas_id;
  }
  // generates random hex values
  generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  // drawing the bars
  draw() {
      // getting the canvas
      var c = document.getElementById(this.canvasID);
      var ctx = c.getContext("2d"); 
     
      for (let i=0; i<this.x.length; i++) {
          // giving the hex
          ctx.fillStyle = this.generateRandomColor();
          
          ctx.fillRect(this.width* i* 0.9, this.scr_height - (this.y[i]*100)/this.sum - 20, this.width* 0.8, (this.y[i]*100)/this.sum );
          // adding texts
          ctx.font = "12px Arial";
          ctx.fillText(this.y[i], this.width*i*0.9, this.scr_height - (this.y[i]*100)/this.sum - 30);
          ctx.fillText(this.x[i], this.width*i*0.9, this.scr_height - 5);
          ctx.stroke();
 }
  
  
  }
 }
  
  
  
 
///variables put here so they can be accessed by the build functions
  var cvs;
  var ctx;
  var w, h;
  var symm;


//the Square class
class Square {
constructor(position_x, position_y, width, height){
this.x = position_x;
this.y = position_y;
this.w = width;
this.h = height;
}
  
location(){
	return(this.x, this.y);
}
//fill style goes right above this 
shape(){
	ctx.beginPath();
	ctx.moveTo(this.x,this.y);
	ctx.lineTo(this.x+this.w, this.y);
	ctx.lineTo(this.x+this.w, this.y+this.h);
	ctx.lineTo(this.x, this.y+this.h);
	ctx.lineTo(this.x,this.y);
}
//fill() goes right under this
}

class Rhombus{
  constructor(position_x,position_y,height){
      this.x = position_x;
      this.y = position_y;
      this.h = height;
  }
  shape(){
    //about the larger angle
    ctx.beginPath();
    ctx.moveTo(this.x,this.y);
    ctx.lineTo(this.x+(this.h/2)*Math.sqrt(3),this.y+(this.h/2));
    ctx.lineTo(this.x,this.y+this.h);
    ctx.lineTo(this.x-(this.h/2)*Math.sqrt(3),this.y+(this.h/2));
    ctx.lineTo(this.x,this.y);
    
    //about the smaller angle
	// ctx.beginPath();
	// ctx.moveTo(this.x,this.y);
	// ctx.lineTo(this.x+this.h/ Math.sqrt(3), this.y+this.h);
	// ctx.lineTo(this.x,this.y+2*this.h);
	// ctx.lineTo(this.x - this.h/Math.sqrt(3), this.y+this.h);
	// ctx.lineTo(this.x,this.y);
  }

  grid(){
    //vertical lines
    ctx.strokeStyle = "purple";
    ctx.beginPath();
    ctx.lineTo(this.x-(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x-(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
    ctx.strokeStyle = "yellow";
    ctx.beginPath();
    ctx.lineTo(this.x-2*(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x-2*(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.lineTo(this.x,0);
    ctx.lineTo(this.x,800);
    ctx.stroke();
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.lineTo(this.x+(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x+(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
    ctx.strokeStyle = "cyan";
    ctx.beginPath();
    ctx.lineTo(this.x+2*(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x+2*(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
     ctx.strokeStyle = "magenta";
    ctx.beginPath();
    ctx.lineTo(this.x+3*(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x+3*(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
      ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.lineTo(this.x+4*(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x+4*(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
  
    
    
    //horizontal lines
    ctx.strokeStyle = "orange";
     ctx.beginPath();
    ctx.lineTo(0,this.y-this.h);
    ctx.lineTo(800,this.y-this.h);
    ctx.stroke();
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.lineTo(0,this.y);
    ctx.lineTo(800,this.y);
    ctx.stroke();
    ctx.strokeStyle = "pink";
    ctx.beginPath();
    ctx.lineTo(0,this.y+this.h);
    ctx.lineTo(800,this.y+this.h);
    ctx.stroke();
      ctx.strokeStyle = "darkgray";
    ctx.beginPath();
    ctx.lineTo(0,this.y+2*this.h);
    ctx.lineTo(800,this.y+2*this.h);
    ctx.stroke();
    
    
  }
}


//the triangle class
class IsoTrianglePGG {
constructor(position_x, position_y, height){
	this.x = position_x;
	this.y = position_y;
	this.h = height;
	}
shape(){
//   //center at the 120-deg angle
// 	ctx.beginPath();
// 	ctx.moveTo(this.x, this.y);
// 	ctx.lineTo(this.x+this.h* Math.sqrt(3), this.y+this.h);
// 	ctx.lineTo(this.x - this.h*Math.sqrt(3), this.y+this.h);
// 	ctx.lineTo(this.x,this.y);
  
  //center at 180 half
    ctx.beginPath();
	ctx.moveTo(this.x, this.y);
	ctx.lineTo(this.x+this.h* Math.sqrt(3), this.y);
	ctx.lineTo(this.x, this.y+this.h);
    ctx.lineTo(this.x-this.h*Math.sqrt(3),this.y);
	ctx.lineTo(this.x,this.y);
	}
  grid(){
    //vertical lines
    ctx.strokeStyle = "purple";
    ctx.beginPath();
    ctx.lineTo(this.x-(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x-(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
    ctx.strokeStyle = "yellow";
    ctx.beginPath();
    ctx.lineTo(this.x-2*(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x-2*(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.lineTo(this.x,0);
    ctx.lineTo(this.x,800);
    ctx.stroke();
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.lineTo(this.x+(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x+(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
    ctx.strokeStyle = "cyan";
    ctx.beginPath();
    ctx.lineTo(this.x+2*(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x+2*(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
     ctx.strokeStyle = "magenta";
    ctx.beginPath();
    ctx.lineTo(this.x+3*(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x+3*(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
      ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.lineTo(this.x+4*(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x+4*(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
  
    
    
    //horizontal lines
    ctx.strokeStyle = "orange";
     ctx.beginPath();
    ctx.lineTo(0,this.y-this.h);
    ctx.lineTo(800,this.y-this.h);
    ctx.stroke();
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.lineTo(0,this.y);
    ctx.lineTo(800,this.y);
    ctx.stroke();
    ctx.strokeStyle = "pink";
    ctx.beginPath();
    ctx.lineTo(0,this.y+this.h);
    ctx.lineTo(800,this.y+this.h);
    ctx.stroke();
      ctx.strokeStyle = "darkgray";
    ctx.beginPath();
    ctx.lineTo(0,this.y+2*this.h);
    ctx.lineTo(800,this.y+2*this.h);
    ctx.stroke();
    
    
  }
}

class IsoTriangleCM {
constructor(position_x, position_y, height){
	this.x = position_x;
	this.y = position_y;
	this.h = height;
	}
shape(){
//   //center at the 120-deg angle
// 	ctx.beginPath();
// 	ctx.moveTo(this.x, this.y);
// 	ctx.lineTo(this.x+this.h* Math.sqrt(3), this.y+this.h);
// 	ctx.lineTo(this.x - this.h*Math.sqrt(3), this.y+this.h);
// 	ctx.lineTo(this.x,this.y);
  
  //center at 180 half
    ctx.beginPath();
	ctx.moveTo(this.x, this.y);
	ctx.lineTo(this.x+this.h* Math.sqrt(3), this.y);
	ctx.lineTo(this.x, this.y+this.h);
    ctx.lineTo(this.x-this.h*Math.sqrt(3),this.y);
	ctx.lineTo(this.x,this.y);
	}
  grid(){
    //vertical lines
    ctx.strokeStyle = "purple";
    ctx.beginPath();
    ctx.lineTo(this.x-(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x-(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
    ctx.strokeStyle = "yellow";
    ctx.beginPath();
    ctx.lineTo(this.x-2*(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x-2*(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.lineTo(this.x,0);
    ctx.lineTo(this.x,800);
    ctx.stroke();
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.lineTo(this.x+(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x+(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
    ctx.strokeStyle = "cyan";
    ctx.beginPath();
    ctx.lineTo(this.x+2*(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x+2*(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
     ctx.strokeStyle = "magenta";
    ctx.beginPath();
    ctx.lineTo(this.x+3*(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x+3*(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
      ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.lineTo(this.x+4*(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x+4*(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
  
    
    
    //horizontal lines
    ctx.strokeStyle = "orange";
     ctx.beginPath();
    ctx.lineTo(0,this.y-this.h);
    ctx.lineTo(800,this.y-this.h);
    ctx.stroke();
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.lineTo(0,this.y);
    ctx.lineTo(800,this.y);
    ctx.stroke();
    ctx.strokeStyle = "pink";
    ctx.beginPath();
    ctx.lineTo(0,this.y+this.h);
    ctx.lineTo(800,this.y+this.h);
    ctx.stroke();
      ctx.strokeStyle = "darkgray";
    ctx.beginPath();
    ctx.lineTo(0,this.y+2*this.h);
    ctx.lineTo(800,this.y+2*this.h);
    ctx.stroke();
    
    
  }
}

class RightTriangleCMM{
  constructor(position_x,position_y,height){
    this.x = position_x;
    this.y = position_y;
    this.h = height;
  }
  shape(){
    //this draws the triangle with the point at the 60-deg angle
    // ctx.beginPath();
    // ctx.moveTo(this.x,this.y);
    // ctx.lineTo(this.x+this.h*Math.sqrt(3),this.y+this.h);
    // ctx.lineTo(this.x,this.y+this.h);
    // ctx.lineTo(this.x,this.y);
    
    //draws triangle with point at 90-deg angle
    ctx.beginPath();
     ctx.moveTo(this.x,this.y);
    ctx.lineTo(this.x,this.y-this.h);
    ctx.lineTo(this.x+this.h*Math.sqrt(3),this.y);
    ctx.lineTo(this.x,this.y);
    
  }
    grid(){
    //vertical lines
    ctx.strokeStyle = "purple";
    ctx.beginPath();
    ctx.lineTo(this.x-(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x-(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
    ctx.strokeStyle = "yellow";
    ctx.beginPath();
    ctx.lineTo(this.x-2*(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x-2*(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.lineTo(this.x,0);
    ctx.lineTo(this.x,800);
    ctx.stroke();
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.lineTo(this.x+(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x+(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
    ctx.strokeStyle = "cyan";
    ctx.beginPath();
    ctx.lineTo(this.x+2*(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x+2*(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
     ctx.strokeStyle = "magenta";
    ctx.beginPath();
    ctx.lineTo(this.x+3*(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x+3*(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
      ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.lineTo(this.x+4*(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x+4*(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
  
    
    
    //horizontal lines
    ctx.strokeStyle = "orange";
     ctx.beginPath();
    ctx.lineTo(0,this.y-this.h);
    ctx.lineTo(800,this.y-this.h);
    ctx.stroke();
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.lineTo(0,this.y);
    ctx.lineTo(800,this.y);
    ctx.stroke();
    ctx.strokeStyle = "pink";
    ctx.beginPath();
    ctx.lineTo(0,this.y+this.h);
    ctx.lineTo(800,this.y+this.h);
    ctx.stroke();
      ctx.strokeStyle = "darkgray";
    ctx.beginPath();
    ctx.lineTo(0,this.y+2*this.h);
    ctx.lineTo(800,this.y+2*this.h);
    ctx.stroke();
  }
  
}

class FFNTriangle {
  constructor(position_x,position_y,height){
    this.x = position_x;
    this.y = position_y;
    this.h = height;
  }
  shape(){
    ctx.beginPath();
    ctx.moveTo(this.x,this.y);
    ctx.lineTo(this.x+this.h,this.y+this.h);
    ctx.lineTo(this.x-this.h,this.y+this.h);
    ctx.lineTo(this.x,this.y);
  }
  grid(){
    
    //vertical lines
    ctx.strokeStyle = "purple";
    ctx.beginPath();
    ctx.lineTo(this.x-(this.h/2),0);
    ctx.lineTo(this.x-(this.h/2),800);
    ctx.stroke();
    ctx.strokeStyle = "yellow";
    ctx.beginPath();
    ctx.lineTo(this.x-2*(this.h/2),0);
    ctx.lineTo(this.x-2*(this.h/2),800);
    ctx.stroke();
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.lineTo(this.x,0);
    ctx.lineTo(this.x,800);
    ctx.stroke();
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.lineTo(this.x+(this.h/2),0);
    ctx.lineTo(this.x+(this.h/2),800);
    ctx.stroke();
    ctx.strokeStyle = "cyan";
    ctx.beginPath();
    ctx.lineTo(this.x+2*(this.h/2),0);
    ctx.lineTo(this.x+2*(this.h/2),800);
    ctx.stroke();
     ctx.strokeStyle = "magenta";
    ctx.beginPath();
    ctx.lineTo(this.x+3*(this.h/2),0);
    ctx.lineTo(this.x+3*(this.h/2),800);
    ctx.stroke();
      ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.lineTo(this.x+4*(this.h/2),0);
    ctx.lineTo(this.x+4*(this.h/2),800);
    ctx.stroke();
    
     //horizontal lines
    ctx.strokeStyle = "orange";
     ctx.beginPath();
    ctx.lineTo(0,this.y-this.h);
    ctx.lineTo(800,this.y-this.h);
    ctx.stroke();
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.lineTo(0,this.y);
    ctx.lineTo(800,this.y);
    ctx.stroke();
    ctx.strokeStyle = "pink";
    ctx.beginPath();
    ctx.lineTo(0,this.y+this.h);
    ctx.lineTo(800,this.y+this.h);
    ctx.stroke();
      ctx.strokeStyle = "darkgray";
    ctx.beginPath();
    ctx.lineTo(0,this.y+2*this.h);
    ctx.lineTo(800,this.y+2*this.h);
    ctx.stroke();
  }
}

//the triangle class
class IsoTriangleP6 {
constructor(position_x, position_y, height){
	this.x = position_x;
	this.y = position_y;
	this.h = height;
	}
shape(){
	ctx.beginPath();
	ctx.moveTo(this.x, this.y);
	ctx.lineTo(this.x+this.h* Math.sqrt(3), this.y+this.h);
	ctx.lineTo(this.x - this.h*Math.sqrt(3), this.y+this.h);
	ctx.lineTo(this.x,this.y);
	}
  grid(){
    //vertical lines
    ctx.strokeStyle = "purple";
    ctx.beginPath();
    ctx.lineTo(this.x-(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x-(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
    ctx.strokeStyle = "yellow";
    ctx.beginPath();
    ctx.lineTo(this.x-2*(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x-2*(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.lineTo(this.x,0);
    ctx.lineTo(this.x,800);
    ctx.stroke();
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.lineTo(this.x+(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x+(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
    ctx.strokeStyle = "cyan";
    ctx.beginPath();
    ctx.lineTo(this.x+2*(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x+2*(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
     ctx.strokeStyle = "magenta";
    ctx.beginPath();
    ctx.lineTo(this.x+3*(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x+3*(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
      ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.lineTo(this.x+4*(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x+4*(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
  
    
    
    //horizontal lines
    ctx.strokeStyle = "orange";
     ctx.beginPath();
    ctx.lineTo(0,this.y-this.h);
    ctx.lineTo(800,this.y-this.h);
    ctx.stroke();
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.lineTo(0,this.y);
    ctx.lineTo(800,this.y);
    ctx.stroke();
    ctx.strokeStyle = "pink";
    ctx.beginPath();
    ctx.lineTo(0,this.y+this.h);
    ctx.lineTo(800,this.y+this.h);
    ctx.stroke();
      ctx.strokeStyle = "darkgray";
    ctx.beginPath();
    ctx.lineTo(0,this.y+2*this.h);
    ctx.lineTo(800,this.y+2*this.h);
    ctx.stroke();
    
    
  }
}

//the triangle class
class TriangleEq {
constructor(position_x, position_y, height){
	this.x = position_x;
	this.y = position_y;
	this.h = height;
	}
shape(){
	ctx.beginPath();
	ctx.moveTo(this.x,this.y);
	ctx.lineTo(this.x + this.h/ Math.sqrt(3), this.y+this.h);
	ctx.lineTo(this.x - this.h/Math.sqrt(3), this.y+this.h);
	ctx.lineTo(this.x,this.y);
	}
  grid(){
    //vertical lines
    ctx.strokeStyle = "purple";
    ctx.beginPath();
    ctx.lineTo(300-this.h/Math.sqrt(3),0);
    ctx.lineTo(300-this.h/Math.sqrt(3),800);
    ctx.stroke();
    ctx.strokeStyle = "yellow";
    ctx.beginPath();
    ctx.lineTo(300-2*this.h/Math.sqrt(3),0);
    ctx.lineTo(300-2*this.h/Math.sqrt(3),800);
    ctx.stroke();
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.lineTo(300,0);
    ctx.lineTo(300,800);
    ctx.stroke();
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.lineTo(300+this.h/Math.sqrt(3),0);
    ctx.lineTo(300+this.h/Math.sqrt(3),800);
    ctx.stroke();
    ctx.strokeStyle = "cyan";
    ctx.beginPath();
    ctx.lineTo(300+2*this.h/Math.sqrt(3),0);
    ctx.lineTo(300+2*this.h/Math.sqrt(3),800);
    ctx.stroke();
     ctx.strokeStyle = "magenta";
    ctx.beginPath();
    ctx.lineTo(300+3*this.h/Math.sqrt(3),0);
    ctx.lineTo(300+3*this.h/Math.sqrt(3),800);
    ctx.stroke();
      ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.lineTo(300+4*this.h/Math.sqrt(3),0);
    ctx.lineTo(300+4*this.h/Math.sqrt(3),800);
    ctx.stroke();
  
    
    
    //horizontal lines
    ctx.strokeStyle = "orange";
     ctx.beginPath();
    ctx.lineTo(0,300-this.h);
    ctx.lineTo(800,300-this.h);
    ctx.stroke();
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.lineTo(0,300);
    ctx.lineTo(800,300);
    ctx.stroke();
    ctx.strokeStyle = "pink";
    ctx.beginPath();
    ctx.lineTo(0,300+this.h);
    ctx.lineTo(800,300+this.h);
    ctx.stroke();
      ctx.strokeStyle = "darkgray";
    ctx.beginPath();
    ctx.lineTo(0,300+2*this.h);
    ctx.lineTo(800,300+2*this.h);
    ctx.stroke();
    
    
  }
}

class RightTriangleP6M{
  constructor(position_x,position_y,height){
    this.x = position_x;
    this.y = position_y;
    this.h = height;
  }
  shape(){
    ctx.beginPath();
    ctx.moveTo(this.x,this.y);
    ctx.lineTo(this.x+this.h*Math.sqrt(3),this.y+this.h);
    ctx.lineTo(this.x,this.y+this.h);
    ctx.lineTo(this.x,this.y);
  }
    grid(){
    //vertical lines
    ctx.strokeStyle = "purple";
    ctx.beginPath();
    ctx.lineTo(this.x-(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x-(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
    ctx.strokeStyle = "yellow";
    ctx.beginPath();
    ctx.lineTo(this.x-2*(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x-2*(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.lineTo(this.x,0);
    ctx.lineTo(this.x,800);
    ctx.stroke();
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.lineTo(this.x+(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x+(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
    ctx.strokeStyle = "cyan";
    ctx.beginPath();
    ctx.lineTo(this.x+2*(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x+2*(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
     ctx.strokeStyle = "magenta";
    ctx.beginPath();
    ctx.lineTo(this.x+3*(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x+3*(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
      ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.lineTo(this.x+4*(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x+4*(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
  
    
    
    //horizontal lines
    ctx.strokeStyle = "orange";
     ctx.beginPath();
    ctx.lineTo(0,this.y-this.h);
    ctx.lineTo(800,this.y-this.h);
    ctx.stroke();
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.lineTo(0,this.y);
    ctx.lineTo(800,this.y);
    ctx.stroke();
    ctx.strokeStyle = "pink";
    ctx.beginPath();
    ctx.lineTo(0,this.y+this.h);
    ctx.lineTo(800,this.y+this.h);
    ctx.stroke();
      ctx.strokeStyle = "darkgray";
    ctx.beginPath();
    ctx.lineTo(0,this.y+2*this.h);
    ctx.lineTo(800,this.y+2*this.h);
    ctx.stroke();
  }
  
}

class IsoTriangleP31M {
constructor(position_x, position_y, height){
	this.x = position_x;
	this.y = position_y;
	this.h = height;
	}
shape(){
	ctx.beginPath();
	ctx.moveTo(this.x, this.y);
	ctx.lineTo(this.x+this.h* Math.sqrt(3), this.y+this.h);
	ctx.lineTo(this.x - this.h*Math.sqrt(3), this.y+this.h);
	ctx.lineTo(this.x,this.y);
	}
  grid(){
    //vertical lines
    ctx.strokeStyle = "purple";
    ctx.beginPath();
    ctx.lineTo(this.x-(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x-(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
    ctx.strokeStyle = "yellow";
    ctx.beginPath();
    ctx.lineTo(this.x-2*(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x-2*(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.lineTo(this.x,0);
    ctx.lineTo(this.x,800);
    ctx.stroke();
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.lineTo(this.x+(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x+(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
    ctx.strokeStyle = "cyan";
    ctx.beginPath();
    ctx.lineTo(this.x+2*(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x+2*(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
     ctx.strokeStyle = "magenta";
    ctx.beginPath();
    ctx.lineTo(this.x+3*(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x+3*(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
      ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.lineTo(this.x+4*(this.h/2)*Math.sqrt(3),0);
    ctx.lineTo(this.x+4*(this.h/2)*Math.sqrt(3),800);
    ctx.stroke();
  
    
    
    //horizontal lines
    ctx.strokeStyle = "orange";
     ctx.beginPath();
    ctx.lineTo(0,this.y-this.h);
    ctx.lineTo(800,this.y-this.h);
    ctx.stroke();
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.lineTo(0,this.y);
    ctx.lineTo(800,this.y);
    ctx.stroke();
    ctx.strokeStyle = "pink";
    ctx.beginPath();
    ctx.lineTo(0,this.y+this.h);
    ctx.lineTo(800,this.y+this.h);
    ctx.stroke();
      ctx.strokeStyle = "darkgray";
    ctx.beginPath();
    ctx.lineTo(0,this.y+2*this.h);
    ctx.lineTo(800,this.y+2*this.h);
    ctx.stroke();
    
    
  }
}


function setup(){
  cvs=document.getElementById("cvsId");
  ctx=cvs.getContext("2d");
  w=cvs.width;
  h=cvs.height;
  symm=document.getElementById("symm").value;
  
  //shapes defined here
rt_p4g = new FFNTriangle(160,160,160);
itri_cm = new IsoTriangleCM(160,93,93);
itri_cmm = new RightTriangleCMM(160,160,80)
itri_pgg = new IsoTrianglePGG(160,93,93);
r_p3 = new Rhombus(320,320,150);
et_p3m1 = new TriangleEq(300,300,200);
itri_p31m = new IsoTriangleP31M(200,320,80);
itri_p6 = new IsoTriangleP6(200,320,80);
rt_p6m = new RightTriangleP6M(160,160,80);

//resets the transformations so images stay on the canvas after every pattern      
ctx.resetTransform();
    
if(symm==0){
  //refresh 
  ctx.fillRect(640,640,1,1);
}

//PATTERN TYPE CM//
if(symm==2){
 var img = new Image();
  img.src = '1x1 2000 pts.png';
  img.onload = function() {
    var ptrn = ctx.createPattern(img, 'repeat');

//cm code
 // create pattern
    ctx.fillStyle = ptrn;
    itri_cm.shape();
    ctx.fill();
    
    
  ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
  ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
    
      ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
  ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
    // itri_cm.grid();
    
     //160+0*(93/2* Math.sqrt(3)),0+1*(93/2)
    
        //iso b
     ctx.translate(160-2*(93/2)*Math.sqrt(3),93-2*(93/2));
  ctx.rotate(0*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
    
    
    //set 3
     ctx.translate(160+4*(93/2)*Math.sqrt(3),93-0*(93/2));
  ctx.rotate(0*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
      
  //set 4
     ctx.translate(160+4*(93/2)*Math.sqrt(3),93-0*(93/2));
  ctx.rotate(0*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
    
  //set 5
     ctx.translate(160+0*(93/2)*Math.sqrt(3),93+4*(93/2));
  ctx.rotate(0*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
        
  ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
  ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
    
      ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
  ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
    // itri_cm.grid();
    
  
     //set 6
     ctx.translate(160-4*(93/2)*Math.sqrt(3),93+0*(93/2));
  ctx.rotate(0*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
       
  ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
  ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
    
      ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
  ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
    // itri_cm.grid();
    
  //set 7
     ctx.translate(160-4*(93/2)*Math.sqrt(3),93+0*(93/2));
  ctx.rotate(0*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
        
  ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
  ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
    
      ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
  ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
    // itri_cm.grid();
    
  //set 8
     ctx.translate(160+6*(93/2)*Math.sqrt(3),93-2*(93/2));
  ctx.rotate(0*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
        
  ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
  ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
    
      ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
  ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
    // itri_cm.grid();
    
  //set 9
     ctx.translate(160+0*(93/2)*Math.sqrt(3),93+4*(93/2));
  ctx.rotate(0*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();  
        
  ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
  ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
    
      ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
  ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
    // itri_cm.grid();
    
   //set 10
     ctx.translate(160-4*(93/2)*Math.sqrt(3),93+0*(93/2));
  ctx.rotate(0*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();  
        
  ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
  ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
    
      ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
  ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
    // itri_cm.grid();
    
   //set 11
     ctx.translate(160-2*(93/2)*Math.sqrt(3),93+2*(93/2));
  ctx.rotate(0*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();  
        
  ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
  ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
    
      ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
  ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
    // itri_cm.grid();
    
    //set 12
     ctx.translate(160+4*(93/2)*Math.sqrt(3),93+0*(93/2));
  ctx.rotate(0*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();  
        
  ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
  ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
    
      ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
  ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
    // itri_cm.grid();
    
  //set 13
     ctx.translate(160+4*(93/2)*Math.sqrt(3),93+0*(93/2));
  ctx.rotate(0*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();   
        
  ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
  ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
    
      ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
  ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
    // itri_cm.grid();
    
   //set 14
     ctx.translate(160-2*(93/2)*Math.sqrt(3),93+2*(93/2));
  ctx.rotate(0*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill(); 
     
  ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
  ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
    
      ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
  ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
    // itri_cm.grid();
    
  //set 15
     ctx.translate(160-4*(93/2)*Math.sqrt(3),93+0*(93/2));
  ctx.rotate(0*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill(); 
      
  ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
  ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
    
      ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
  ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
    // itri_cm.grid();
    
    //set 16
     ctx.translate(160-2*(93/2)*Math.sqrt(3),93+2*(93/2));
  ctx.rotate(0*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill(); 
        
  ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
  ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
    
      ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
  ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
    // itri_cm.grid();
    
    //set 17
     ctx.translate(160+4*(93/2)*Math.sqrt(3),93+0*(93/2));
  ctx.rotate(0*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();   
      
  ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
  ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
    
      ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
  ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
    // itri_cm.grid();
    
    //set 18
     ctx.translate(160+4*(93/2)*Math.sqrt(3),93+0*(93/2));
  ctx.rotate(0*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill(); 
        
  ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
  ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
    
      ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
  ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
    // itri_cm.grid();
    
    //set 19
     ctx.translate(160-2*(93/2)*Math.sqrt(3),93+2*(93/2));
  ctx.rotate(0*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill(); 
        
  ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
  ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
    
      ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
  ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
    // itri_cm.grid();
    
  //set 20
     ctx.translate(160-4*(93/2)*Math.sqrt(3),93+0*(93/2));
  ctx.rotate(0*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill(); 
        
  ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
  ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
    
      ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
  ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_cm.shape();
  ctx.fill();
    // itri_cm.grid();
  }

}
  //PATTERN TYPE CMM//
  if(symm==3){
     var img = new Image();
  img.src = '1x1 2000 pts.png';
  img.onload = function() {

    // create pattern
    var ptrn = ctx.createPattern(img, 'repeat');
    ctx.fillStyle = ptrn;
    itri_cmm.shape();
    ctx.fill();
    // itri_cmm.grid();
    
    //copy paste this after each F1 once you've put it into position wrt the last rhombus
      ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
         ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
//     //set 2
      ctx.translate(160+2*(80/2)*Math.sqrt(3),160-2*(80/2));
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
        ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
         ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
  
//set 3
     ctx.translate(160-4*(80/2)*Math.sqrt(3),160-0*(80/2));
  ctx.rotate(0*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
        
  
        ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
         ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
  //set 4
      ctx.translate(160-2*(80/2)*Math.sqrt(3),160+2*(80/2));
  ctx.rotate(0*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
         ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    //set 5
      ctx.translate(160+4*(80/2)*Math.sqrt(3),160-0*(80/2));
  ctx.rotate(0*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
  ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
         ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    //set 6
   ctx.translate(160+8*(80/2)*Math.sqrt(3),160+0*(80/2));
  ctx.rotate(0*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
  ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
         ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
  //set 7
    ctx.translate(160+4*(80/2)*Math.sqrt(3),160+0*(80/2));
  ctx.rotate(0*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    

    
//set 8
    ctx.translate(160+0*(80/2)*Math.sqrt(3),160-4*(80/2));
  ctx.rotate(0*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
  
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
         ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    
    //set 9
    ctx.translate(160+4*(80/2)*Math.sqrt(3),160-0*(80/2));
  ctx.rotate(0*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();

    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
         ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
     //set 10
    ctx.translate(160+8*(80/2)*Math.sqrt(3),160-0*(80/2));
  ctx.rotate(0*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
  ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
         ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
  //itri_cmm.grid();  
   
    //🌃🌃🌃🌃🌃🌃🌃🌃🌃🌃🌃🌃🌃
    //set 11
     ctx.translate(160-10*(80/2)*Math.sqrt(3),160+2*(80/2));
  ctx.rotate(0*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
  
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
         ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();  
    
    //set 12
     ctx.translate(160-0*(80/2)*Math.sqrt(3),160-4*(80/2));
  ctx.rotate(0*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
         ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
  //itri_cmm.grid();  
    
//set 13
     ctx.translate(160-0*(80/2)*Math.sqrt(3),160-4*(80/2));
  ctx.rotate(0*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
  ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
         ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid(); 
    
//set 14
     ctx.translate(160-0*(80/2)*Math.sqrt(3),160-4*(80/2));
  ctx.rotate(0*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
         ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
  //itri_cmm.grid();  
    
//set 15
     ctx.translate(160+4*(80/2)*Math.sqrt(3),160-0*(80/2));
  ctx.rotate(0*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
  //itri_cmm.grid();
  
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
         ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
  //itri_cmm.grid();  
    
  //set 16
     ctx.translate(160+4*(80/2)*Math.sqrt(3),160-0*(80/2));
  ctx.rotate(0*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
  //itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
         ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
  //itri_cmm.grid();  
    
  //set 15
     ctx.translate(160+0*(80/2)*Math.sqrt(3),160+4*(80/2));
  ctx.rotate(0*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
  //itri_cmm.grid();
    
  ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
         ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
  //itri_cmm.grid();  
    
     //set 17
     ctx.translate(160+0*(80/2)*Math.sqrt(3),160+4*(80/2));
  ctx.rotate(0*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
  //itri_cmm.grid();
  
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
         ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
  //itri_cmm.grid();  
    
//set 18
     ctx.translate(160-4*(80/2)*Math.sqrt(3),160+0*(80/2));
  ctx.rotate(0*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
  //itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
         ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
  //itri_cmm.grid();  
    
  //set 19
     ctx.translate(160-0*(80/2)*Math.sqrt(3),160-4*(80/2));
  ctx.rotate(0*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
  //itri_cmm.grid();
    
  ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
         ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
  //itri_cmm.grid();  
    
    //set 20
    ctx.translate(160+6*(80/2)*Math.sqrt(3),160+2*(80/2));
  ctx.rotate(0*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
  //itri_cmm.grid();
   
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
         ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
  //itri_cmm.grid();  
    
 //set 21
    ctx.translate(160+4*(80/2)*Math.sqrt(3),160+0*(80/2));
  ctx.rotate(0*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
  //itri_cmm.grid();
  
  ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
         ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
  //itri_cmm.grid();  
    
    //set 22
    ctx.translate(160+4*(80/2)*Math.sqrt(3),160+0*(80/2));
  ctx.rotate(0*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
  //itri_cmm.grid();
   
  ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
         ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
  //itri_cmm.grid();  
    
    //set 23
    ctx.translate(160+4*(80/2)*Math.sqrt(3),160+0*(80/2));
  ctx.rotate(0*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
  //itri_cmm.grid();
    
  ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
         ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
  //itri_cmm.grid();  
    
    //set 24
    ctx.translate(160+0*(80/2)*Math.sqrt(3),160-4*(80/2));
  ctx.rotate(0*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
  //itri_cmm.grid();
    
  ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
         ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
  //itri_cmm.grid();  
    
    //set 25
    ctx.translate(160+0*(80/2)*Math.sqrt(3),160-4*(80/2));
  ctx.rotate(0*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
  //itri_cmm.grid();
   
  ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
         ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
  //itri_cmm.grid();  
    
    //set 26
    ctx.translate(160-4*(80/2)*Math.sqrt(3),160-0*(80/2));
  ctx.rotate(0*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
  //itri_cmm.grid();
    
  ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
         ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
  //itri_cmm.grid();  
    
    //set 27
    ctx.translate(160-4*(80/2)*Math.sqrt(3),160-0*(80/2));
  ctx.rotate(0*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
  //itri_cmm.grid();
    
  ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
         ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
  //itri_cmm.grid();  
    
 //set 26
    ctx.translate(160-4*(80/2)*Math.sqrt(3),160-0*(80/2));
  ctx.rotate(0*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
  // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
         ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();  
    
  
 //set 27
    ctx.translate(160+8*(80/2)*Math.sqrt(3),160+4*(80/2));
  ctx.rotate(0*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
  // itri_cmm.grid();
     
  ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
         ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();  
    
  //set 28
    ctx.translate(160-4*(80/2)*Math.sqrt(3),160+0*(80/2));
  ctx.rotate(0*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
  // itri_cmm.grid();
    
  ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
         ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();  
    
    //set 29
    ctx.translate(160-4*(80/2)*Math.sqrt(3),160+0*(80/2));
  ctx.rotate(0*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
  // itri_cmm.grid();
    
  ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
         ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();
    
    ctx.translate(160,160);
  ctx.rotate(3*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  itri_cmm.shape();
  ctx.fill();
    // itri_cmm.grid();  
    
  }

  }
  //PATTERN TYPE PGG//
    if(symm==1){
 var img = new Image();
  img.src = '1x1 2000 pts.png';
  img.onload = function() {

    // create pattern
    var ptrn = ctx.createPattern(img, 'repeat');
    ctx.fillStyle = ptrn;
    itri_pgg.shape();
    ctx.fill();
    
    //the lattice to tile
  ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
//ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();
    
      ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
//ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();
    // itri_pgg.grid();
    
     //160+0*(93/2* Math.sqrt(3)),0+1*(93/2)
    
        //iso b
     ctx.translate(160-2*(93/2)*Math.sqrt(3),93-2*(93/2));
  ctx.rotate(0*Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();

    //set 3
     ctx.translate(160-4*(93/2)*Math.sqrt(3),93-0*(93/2));
  ctx.rotate(0*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();

  //set 4
     ctx.translate(160-0*(93/2)*Math.sqrt(3),93+4*(93/2));
  ctx.rotate(3*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();
    
  //set 5
     ctx.translate(160-4*(93/2)*Math.sqrt(3),93+0*(93/2));
  ctx.rotate(0*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();
    
   //the lattice to tile 2nd 
  ctx.translate(160+8*(93/2)*Math.sqrt(3),93-0*(93/2));
  ctx.rotate(3*Math.PI/3);
//ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();
    
      ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
//ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();
    // itri_pgg.grid();
    
     //160+0*(93/2* Math.sqrt(3)),0+1*(93/2)
    
        //iso b
     ctx.translate(160-2*(93/2)*Math.sqrt(3),93-2*(93/2));
  ctx.rotate(0*Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();

    //set 3
     ctx.translate(160-4*(93/2)*Math.sqrt(3),93-0*(93/2));
  ctx.rotate(0*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();

  //set 4
     ctx.translate(160-0*(93/2)*Math.sqrt(3),93+4*(93/2));
  ctx.rotate(3*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();
    
  //set 5
     ctx.translate(160-4*(93/2)*Math.sqrt(3),93+0*(93/2));
  ctx.rotate(0*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();
        
    //the lattice to tile 3rd 
  ctx.translate(160+2*(93/2)*Math.sqrt(3),93-2*(93/2));
  ctx.rotate(3*Math.PI/3);
ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();
    
      ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
//ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();
    // itri_pgg.grid();
    
     //160+0*(93/2* Math.sqrt(3)),0+1*(93/2)
    
        //iso b
     ctx.translate(160-2*(93/2)*Math.sqrt(3),93-2*(93/2));
  ctx.rotate(0*Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();

    //set 3
     ctx.translate(160-4*(93/2)*Math.sqrt(3),93-0*(93/2));
  ctx.rotate(0*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();

  //set 4
     ctx.translate(160-0*(93/2)*Math.sqrt(3),93+4*(93/2));
  ctx.rotate(3*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();
    
  //set 5
     ctx.translate(160-4*(93/2)*Math.sqrt(3),93+0*(93/2));
  ctx.rotate(0*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();
    
    
    //the lattice to tile 4th 
  ctx.translate(160+8*(93/2)*Math.sqrt(3),93-4*(93/2));
  ctx.rotate(3*Math.PI/3);
// ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();
    
      ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
//ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();
    // itri_pgg.grid();
    
     //160+0*(93/2* Math.sqrt(3)),0+1*(93/2)
    
        //iso b
     ctx.translate(160-2*(93/2)*Math.sqrt(3),93-2*(93/2));
  ctx.rotate(0*Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();

    //set 3
     ctx.translate(160-4*(93/2)*Math.sqrt(3),93-0*(93/2));
  ctx.rotate(0*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();

  //set 4
     ctx.translate(160-0*(93/2)*Math.sqrt(3),93+4*(93/2));
  ctx.rotate(3*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();
    
  //set 5
     ctx.translate(160-4*(93/2)*Math.sqrt(3),93+0*(93/2));
  ctx.rotate(0*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();
    
    //the lattice to tile 5th 
  ctx.translate(160-4*(93/2)*Math.sqrt(3),93+4*(93/2));
  ctx.rotate(3*Math.PI/3);
// ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();
    
      ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
//ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();
    // itri_pgg.grid();
    
     //160+0*(93/2* Math.sqrt(3)),0+1*(93/2)
    
        //iso b
     ctx.translate(160-2*(93/2)*Math.sqrt(3),93-2*(93/2));
  ctx.rotate(0*Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();

    //set 3
     ctx.translate(160-4*(93/2)*Math.sqrt(3),93-0*(93/2));
  ctx.rotate(0*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();

  //set 4
     ctx.translate(160-0*(93/2)*Math.sqrt(3),93+4*(93/2));
  ctx.rotate(3*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();
    
  //set 5
     ctx.translate(160-4*(93/2)*Math.sqrt(3),93+0*(93/2));
  ctx.rotate(0*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();
    
//the lattice to tile 6th 
  ctx.translate(160+2*(93/2)*Math.sqrt(3),93-2*(93/2));
  ctx.rotate(3*Math.PI/3);
ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();
    
      ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
//ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();
    // itri_pgg.grid();
    
     //160+0*(93/2* Math.sqrt(3)),0+1*(93/2)
    
        //iso b
     ctx.translate(160-2*(93/2)*Math.sqrt(3),93-2*(93/2));
  ctx.rotate(0*Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();

    //set 3
     ctx.translate(160-4*(93/2)*Math.sqrt(3),93-0*(93/2));
  ctx.rotate(0*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();

  //set 4
     ctx.translate(160-0*(93/2)*Math.sqrt(3),93+4*(93/2));
  ctx.rotate(3*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();
    
  //set 5
     ctx.translate(160-4*(93/2)*Math.sqrt(3),93+0*(93/2));
  ctx.rotate(0*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();
    
//the lattice to tile 7th 
  ctx.translate(160-4*(93/2)*Math.sqrt(3),93+4*(93/2));
  ctx.rotate(3*Math.PI/3);
// ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();
    
      ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
//ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();
    // itri_pgg.grid();
    
     //160+0*(93/2* Math.sqrt(3)),0+1*(93/2)
    
        //iso b
     ctx.translate(160-2*(93/2)*Math.sqrt(3),93-2*(93/2));
  ctx.rotate(0*Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();

    //set 3
     ctx.translate(160-4*(93/2)*Math.sqrt(3),93-0*(93/2));
  ctx.rotate(0*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();

  //set 4
     ctx.translate(160-0*(93/2)*Math.sqrt(3),93+4*(93/2));
  ctx.rotate(3*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();
    
  //set 5
     ctx.translate(160-4*(93/2)*Math.sqrt(3),93+0*(93/2));
  ctx.rotate(0*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();
    
//the lattice to tile 8th 
  ctx.translate(160+2*(93/2)*Math.sqrt(3),93+6*(93/2));
  ctx.rotate(3*Math.PI/3);
ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();
    
      ctx.translate(160,93);
  ctx.rotate(3*Math.PI/3);
//ctx.scale(-1,1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();
    // itri_pgg.grid();
    
     //160+0*(93/2* Math.sqrt(3)),0+1*(93/2)
    
        //iso b
     ctx.translate(160-2*(93/2)*Math.sqrt(3),93-2*(93/2));
  ctx.rotate(0*Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();

    //set 3
     ctx.translate(160-4*(93/2)*Math.sqrt(3),93-0*(93/2));
  ctx.rotate(0*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();

  //set 4
     ctx.translate(160-0*(93/2)*Math.sqrt(3),93+4*(93/2));
  ctx.rotate(3*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();
    
  //set 5
     ctx.translate(160-4*(93/2)*Math.sqrt(3),93+0*(93/2));
  ctx.rotate(0*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-160,-93);
  itri_pgg.shape();
  ctx.fill();

  }
}
//PATTERN TYPE P3//
  if(symm==4){
  var img = new Image();
  img.src = '1x1 2000 pts.png';
  img.onload = function() {

    // create pattern
    var ptrn = ctx.createPattern(img, 'repeat');
    ctx.fillStyle = ptrn;
    r_p3.shape();
    ctx.fill();
    // r_p3.grid();
    
      ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
          ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
    ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();

  
    
    //trio a
      ctx.translate(320+1*(150/2)*Math.sqrt(3),320+3*(150/2));
  ctx.rotate(4*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
        ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
          ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
    ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
       
    //trio b
     ctx.translate(320+1*(150/2)*Math.sqrt(3),320+3*(150/2));
  ctx.rotate(4*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
            ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
          ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
    ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
    //trio c
      ctx.translate(320-1*(150/2)*Math.sqrt(3),320+3*(150/2));
  ctx.rotate(2*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
            ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
          ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
    ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
    //trio d
       ctx.translate(320+1*(150/2)*Math.sqrt(3),320-3*(150/2));
  ctx.rotate(4*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
               ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
          ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
    ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();

    //trio e
       ctx.translate(320+2*(150/2)*Math.sqrt(3),320-0*(150/2));
  ctx.rotate(2*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
            ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
          ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
    ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
    //trio f
     ctx.translate(320-2*(150/2)*Math.sqrt(3),320-0*(150/2));
  ctx.rotate(4*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
            ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
          ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
    ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    

    
    //trio g
   ctx.translate(320+2*(150/2)*Math.sqrt(3),320+0*(150/2));
  ctx.rotate(0*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    
                ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
          ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
    ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
    //trio h
     ctx.translate(320-1*(150/2)*Math.sqrt(3),320+3*(150/2));
  ctx.rotate(0*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    
                    ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
          ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
    ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
    //trio i 
     ctx.translate(320-3*(150/2)*Math.sqrt(3),320+3*(150/2));
  ctx.rotate(0*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    
                       ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
          ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
    ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
    //trio j
    ctx.translate(320-3*(150/2)*Math.sqrt(3),320-3*(150/2));
  ctx.rotate(0*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    
  ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
          ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
    ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
    //trio k
      ctx.translate(320+1*(150/2)*Math.sqrt(3),320+3*(150/2));
  ctx.rotate(0*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    
    ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
          ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
    ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
    //trio l
       ctx.translate(320-1*(150/2)*Math.sqrt(3),320-9*(150/2));
  ctx.rotate(0*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    
        ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
          ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
    ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
    //trio m
     ctx.translate(320-1*(150/2)*Math.sqrt(3),320+3*(150/2));
  ctx.rotate(0*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    
      ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
          ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
    ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
    //trio n
    ctx.translate(320+4*(150/2)*Math.sqrt(3),320-6*(150/2));
  ctx.rotate(0*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    
         ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
          ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
    ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
    //trio o
      ctx.translate(320+2*(150/2)*Math.sqrt(3),320+0*(150/2));
  ctx.rotate(0*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    
         ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
          ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
    ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
    //trio p
      ctx.translate(320+1*(150/2)*Math.sqrt(3),320+3*(150/2));
  ctx.rotate(0*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    
      ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
          ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();
    
    ctx.translate(320,320);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-320,-320);
  r_p3.shape();
  ctx.fill();
    // r_p3.grid();

    
  }
}

//PATTERN TYPE P3M1//
  if(symm==5){
     var img = new Image();
  img.src = '1x1 2000 pts.png';
  img.onload = function() {

    // create pattern
    var ptrn = ctx.createPattern(img, 'repeat');
    ctx.fillStyle = ptrn;
    
    et_p3m1.shape();
    ctx.fill();
    // et_p3m1.grid();
    
  ctx.translate(300,300);
  ctx.rotate(Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();
    // et_p3m1.grid();
    
  ctx.translate(300,300);
  ctx.rotate(5*Math.PI/3);
      ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();
    // et_p3m1.grid();
    
  ctx.translate(300,300);
  ctx.rotate(Math.PI/3);
      ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();
    // et_p3m1.grid();
    
  ctx.translate(300,300);
  ctx.rotate(5*Math.PI/3);  
  ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();
    // et_p3m1.grid();
    
  ctx.translate(300,300);
  ctx.rotate(Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();
    // et_p3m1.grid();
    
      ctx.translate(300,300);
  ctx.rotate(5*Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();

    
    //bottom left triangle 🌃
    ctx.translate(300+600/Math.sqrt(3),500);
    ctx.translate(-300,-300);
    et_p3m1.shape();
    ctx.fill();
    // et_p3m1.grid(); //if you want to get to the original grid, have the last transformation into the negative of the top transform
    
      ctx.translate(300,300);
  ctx.rotate(Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();
    // et_p3m1.grid();
    
  ctx.translate(300,300);
  ctx.rotate(5*Math.PI/3);
      ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();
    // et_p3m1.grid();
    
  ctx.translate(300,300);
  ctx.rotate(Math.PI/3);
      ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();
    // et_p3m1.grid();
    
  ctx.translate(300,300);
  ctx.rotate(5*Math.PI/3);  
  ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();
    // et_p3m1.grid();
    
  ctx.translate(300,300);
  ctx.rotate(Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();
    // et_p3m1.grid();
    
      ctx.translate(300,300);
  ctx.rotate(5*Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();

    
    //the top right triangle
   ctx.translate(300,-100);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();
 
    
  ctx.translate(300,300);
  ctx.rotate(Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();
    // et_p3m1.grid();
    
  ctx.translate(300,300);
  ctx.rotate(5*Math.PI/3);
      ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();
    // et_p3m1.grid();
    
  ctx.translate(300,300);
  ctx.rotate(Math.PI/3);
      ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();
    // et_p3m1.grid();
    
  ctx.translate(300,300);
  ctx.rotate(5*Math.PI/3);  
  ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();
    // et_p3m1.grid();
    
  ctx.translate(300,300);
  ctx.rotate(Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();
    // et_p3m1.grid();
    
      ctx.translate(300,300);
  ctx.rotate(5*Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();

    
    //top left triangle 🌃
     ctx.translate(300-1200/Math.sqrt(3),300);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();
 
    
      ctx.translate(300,300);
  ctx.rotate(Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();
    // et_p3m1.grid();
    
  ctx.translate(300,300);
  ctx.rotate(5*Math.PI/3);
      ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();
    // et_p3m1.grid();
    
  ctx.translate(300,300);
  ctx.rotate(Math.PI/3);
      ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();
    // et_p3m1.grid();
    
  ctx.translate(300,300);
  ctx.rotate(5*Math.PI/3);  
  ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();
    // et_p3m1.grid();
    
  ctx.translate(300,300);
  ctx.rotate(Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();
    // et_p3m1.grid();
    
      ctx.translate(300,300);
  ctx.rotate(5*Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();

    
    //bottom left triangle 🌃
    ctx.translate(300,700);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();
 
    
      ctx.translate(300,300);
  ctx.rotate(Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();
    // et_p3m1.grid();
    
  ctx.translate(300,300);
  ctx.rotate(5*Math.PI/3);
      ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();
    // et_p3m1.grid();
    
  ctx.translate(300,300);
  ctx.rotate(Math.PI/3);
      ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();
    // et_p3m1.grid();
    
  ctx.translate(300,300);
  ctx.rotate(5*Math.PI/3);  
  ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();
    // et_p3m1.grid();
    
  ctx.translate(300,300);
  ctx.rotate(Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();
    // et_p3m1.grid();
    
      ctx.translate(300,300);
  ctx.rotate(5*Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();

    
    //middle bottom 🌃
    ctx.translate(300+600/Math.sqrt(3),500);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();
 
    
      ctx.translate(300,300);
  ctx.rotate(Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();
    // et_p3m1.grid();
    
  ctx.translate(300,300);
  ctx.rotate(5*Math.PI/3);
      ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();
    // et_p3m1.grid();
    
  ctx.translate(300,300);
  ctx.rotate(Math.PI/3);
      ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();
    // et_p3m1.grid();
    
  ctx.translate(300,300);
  ctx.rotate(5*Math.PI/3);  
  ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();
    // et_p3m1.grid();
    
  ctx.translate(300,300);
  ctx.rotate(Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();
    // et_p3m1.grid();
    
      ctx.translate(300,300);
  ctx.rotate(5*Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();

    
    //middle top 🌃
    ctx.translate(300,-500);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();
 
    
      ctx.translate(300,300);
  ctx.rotate(Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();
    // et_p3m1.grid();
    
  ctx.translate(300,300);
  ctx.rotate(5*Math.PI/3);
      ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();
    // et_p3m1.grid();
    
  ctx.translate(300,300);
  ctx.rotate(Math.PI/3);
      ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();
    // et_p3m1.grid();
    
  ctx.translate(300,300);
  ctx.rotate(5*Math.PI/3);  
  ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();
    // et_p3m1.grid();
    
  ctx.translate(300,300);
  ctx.rotate(Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();
    // et_p3m1.grid();
    
      ctx.translate(300,300);
  ctx.rotate(5*Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-300,-300);
  et_p3m1.shape();
  ctx.fill();

    

    
    
  }
}
  //PATTERN TYPE P31M//
  if(symm==6){
     var img = new Image();
  img.src = '1x1 2000 pts.png';
  img.onload = function() {

    // create pattern
    var ptrn = ctx.createPattern(img, 'repeat');
    ctx.fillStyle = ptrn;
    itri_p31m.shape();
    ctx.fill();
    
    
  ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    // itri_p31m.grid();
    
    //iso b
     ctx.translate(200+2*(80/2* Math.sqrt(3)),320-2*(80/2));
  ctx.rotate(1*Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    // itri_p31m.grid();
    
//     //iso c
      ctx.translate(200+2*(80/2* Math.sqrt(3)),320-2*(80/2));
  ctx.rotate(3*Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    // itri_p31m.grid();
    
//     //iso d
      ctx.translate(200+2*(80/2* Math.sqrt(3)),320-2*(80/2));
  ctx.rotate(1*Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
    ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    // itri_p31m.grid();
    
//     //trio e
      ctx.translate(200+2*(80/2* Math.sqrt(3)),320-2*(80/2));
  ctx.rotate(1*Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
        ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    // itri_p31m.grid();
    
//     //trio f
     ctx.translate(200-2*(80/2* Math.sqrt(3)),320-2*(80/2));
  ctx.rotate(1*Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
          ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    // itri_p31m.grid();
    
//     //trio g
      ctx.translate(200+2*(80/2* Math.sqrt(3)),320-2*(80/2));
  ctx.rotate(1*Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
        ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    // itri_p31m.grid();
    
//     //trio h
     ctx.translate(200+4*(80/2* Math.sqrt(3)),320+4*(80/2));
  ctx.rotate(1*Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    //No Need to fill, it's on the edge 
       
//   ctx.translate(200,320);
//   ctx.rotate(4*Math.PI/3);
//   // ctx.scale(-1, 1);
//   ctx.translate(-200,-320);
//   itri_p31m.shape();
//   ctx.fill();
    
//       ctx.translate(200,320);
//   ctx.rotate(4*Math.PI/3);
//   // ctx.scale(-1, 1);
//   ctx.translate(-200,-320);
//   itri_p31m.shape();
//   ctx.fill();
    
//       ctx.translate(200,320);
//   ctx.rotate(4*Math.PI/3);
//   // ctx.scale(-1, 1);
//   ctx.translate(-200,-320);
//   itri_p31m.shape();
//   ctx.fill();
    // itri_p31m.grid();
    
//     //trio i
      ctx.translate(200-4*(80/2* Math.sqrt(3)),320+12*(80/2));
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
     ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    // itri_p31m.grid();
    
//     //iso j
      ctx.translate(200-2*(80/2* Math.sqrt(3)),320-2*(80/2));
  ctx.rotate(5*Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
     ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    // itri_p31m.grid();
    
//     //iso k
     ctx.translate(200+2*(80/2* Math.sqrt(3)),320-2*(80/2));
  ctx.rotate(1*Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
    ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    // itri_p31m.grid();
    
//     //iso l
      ctx.translate(200-2*(80/2* Math.sqrt(3)),320-2*(80/2));
  ctx.rotate(1*Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
       ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    // itri_p31m.grid();
    
//     //iso m
          ctx.translate(200-2*(80/2* Math.sqrt(3)),320-6*(80/2));
  ctx.rotate(0*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
           ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    // itri_p31m.grid();
    
//     //iso n
       ctx.translate(200+2*(80/2* Math.sqrt(3)),320-2*(80/2));
  ctx.rotate(1*Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
           ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    // itri_p31m.grid();
    
//     //iso p
        ctx.translate(200-2*(80/2* Math.sqrt(3)),320-2*(80/2));
  ctx.rotate(5*Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    // itri_p31m.grid()
    
//     //iso q
    
      ctx.translate(200+2*(80/2* Math.sqrt(3)),320-2*(80/2));
  ctx.rotate(1*Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
       ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    // itri_p31m.grid()
    
//     //iso r
          ctx.translate(200+2*(80/2* Math.sqrt(3)),320-2*(80/2));
  ctx.rotate(1*Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
     ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    // itri_p31m.grid()
    
//     //iso s
      ctx.translate(200+2*(80/2* Math.sqrt(3)),320-2*(80/2));
  ctx.rotate(5*Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
       ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    // itri_p31m.grid()
    
//     //iso t
        ctx.translate(200-4*(80/2* Math.sqrt(3)),320-0*(80/2));
  ctx.rotate(0*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
     ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    // itri_p31m.grid()
    
//     //iso u
      ctx.translate(200+2*(80/2* Math.sqrt(3)),320-2*(80/2));
  ctx.rotate(1*Math.PI/3);
  ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
//     //no need to complete this triangle part. since it is off screen
     ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p31m.shape();
  ctx.fill();
    // itri_p31m.grid()
 }
  }
	
  //PATTERN TYPE P6//
  if(symm==7){
     var img = new Image();
  img.src = '1x1 2000 pts.png';
  img.onload = function() {

    // create pattern
    var ptrn = ctx.createPattern(img, 'repeat');
    ctx.fillStyle = ptrn;
    itri_p6.shape();
    ctx.fill();
    
    
  ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    // itri_p6.grid();
    
    //iso b
     ctx.translate(200+2*(80/2* Math.sqrt(3)),320-2*(80/2));
  ctx.rotate(1*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    // itri_p6.grid();
    
    //iso c
      ctx.translate(200+2*(80/2* Math.sqrt(3)),320-2*(80/2));
  ctx.rotate(3*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    // itri_p6.grid();
    
    //iso d
      ctx.translate(200-2*(80/2* Math.sqrt(3)),320-2*(80/2));
  ctx.rotate(1*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
    ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    // itri_p6.grid();
    
    //trio e
      ctx.translate(200-2*(80/2* Math.sqrt(3)),320-2*(80/2));
  ctx.rotate(1*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
        ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    // itri_p6.grid();
    
    //trio f
     ctx.translate(200-2*(80/2* Math.sqrt(3)),320-2*(80/2));
  ctx.rotate(1*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
          ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    // itri_p6.grid();
    
    //trio g
      ctx.translate(200-0*(80/2* Math.sqrt(3)),320+4*(80/2));
  ctx.rotate(3*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
        ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    // itri_p6.grid();
    
    //trio h
     ctx.translate(200+4*(80/2* Math.sqrt(3)),320+4*(80/2));
  ctx.rotate(1*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
       
  ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    // itri_p6.grid();
    
    //trio i
      ctx.translate(200+4*(80/2* Math.sqrt(3)),320+4*(80/2));
  ctx.rotate(1*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
     ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    // itri_p6.grid();
    
    //iso j
      ctx.translate(200+4*(80/2* Math.sqrt(3)),320+4*(80/2));
  ctx.rotate(1*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
     ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    // itri_p6.grid();
    
    //iso k
     ctx.translate(200+4*(80/2* Math.sqrt(3)),320+4*(80/2));
  ctx.rotate(1*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
    ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    // itri_p6.grid();
    
    //iso l
      ctx.translate(200-2*(80/2* Math.sqrt(3)),320-2*(80/2));
  ctx.rotate(1*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
       ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    // itri_p6.grid();
    
    //iso m
          ctx.translate(200+0*(80/2* Math.sqrt(3)),320+4*(80/2));
  ctx.rotate(1*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
           ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    // itri_p6.grid();
    
    //iso n
       ctx.translate(200+4*(80/2* Math.sqrt(3)),320+0*(80/2));
  ctx.rotate(0*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
           ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    // itri_p6.grid();
    
    //iso p
        ctx.translate(200+2*(80/2* Math.sqrt(3)),320-2*(80/2));
  ctx.rotate(5*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    // itri_p6.grid()
    
    //iso q
    
      ctx.translate(200+4*(80/2* Math.sqrt(3)),320-0*(80/2));
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
       ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    // itri_p6.grid()
    
    //iso r
          ctx.translate(200+0*(80/2* Math.sqrt(3)),320+4*(80/2));
  ctx.rotate(5*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
     ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    // itri_p6.grid()
    
    //iso s
      ctx.translate(200-2*(80/2* Math.sqrt(3)),320+10*(80/2));
  ctx.rotate(5*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
       ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    // itri_p6.grid()
    
    //iso t
        ctx.translate(200+2*(80/2* Math.sqrt(3)),320-2*(80/2));
  ctx.rotate(1*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
     ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    
      ctx.translate(200,320);
  ctx.rotate(4*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    // itri_p6.grid()
    
    //iso u
      ctx.translate(200-0*(80/2* Math.sqrt(3)),320-8*(80/2));
  ctx.rotate(5*Math.PI/3);
  // ctx.scale(-1, 1);
  ctx.translate(-200,-320);
  itri_p6.shape();
  ctx.fill();
    //no need to complete this triangle part. since it is off screen
  }
  }
	
  //PATTERN P6M//
if(symm==8){
   var img = new Image();
  img.src = '1x1 2000 pts.png';
  img.onload = function() {

    // create pattern
    var ptrn = ctx.createPattern(img, 'repeat');
    ctx.fillStyle = ptrn;
    rt_p6m.shape();
    ctx.fill();
    // rt_p6m.grid();
    
    //copy paste this after each F1 once you've put it into position wrt the last rhombus
      ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    //the left triangle rotations
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();

  
         ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    //trio a
      ctx.translate(160+2*(80/2)*Math.sqrt(3),160-2*(80/2));
  ctx.rotate(1*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
     ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    //the left triangle rotations
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();

  
         ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
  //set 3
      ctx.translate(160+2*(80/2)*Math.sqrt(3),160-2*(80/2));
  ctx.rotate(1*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    //the left triangle rotations
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();

  
         ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
  //set 4
     ctx.translate(160+2*(80/2)*Math.sqrt(3),160-2*(80/2));
  ctx.rotate(1*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    //the left triangle rotations
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();

  
         ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    
    //set 5
     ctx.translate(160+2*(80/2)*Math.sqrt(3),160-2*(80/2));
  ctx.rotate(1*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    //the left triangle rotations
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();

  
         ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
  //set 6
   ctx.translate(160+2*(80/2)*Math.sqrt(3),160-2*(80/2));
  ctx.rotate(1*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    //the left triangle rotations
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();

  
         ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    //set 7
       ctx.translate(160+2*(80/2)*Math.sqrt(3),160-6*(80/2));
  ctx.rotate(0*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
  
     ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    //the left triangle rotations
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();

  
         ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
  //set 6
   ctx.translate(160+2*(80/2)*Math.sqrt(3),160-2*(80/2));
  ctx.rotate(1*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    //the left triangle rotations
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();

  
         ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
  //set 7
  ctx.translate(160+8*(80/2)*Math.sqrt(3),160+4*(80/2));
  ctx.rotate(1*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
        ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    //the left triangle rotations
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();

  
         ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
 //set 8
      ctx.translate(160+2*(80/2)*Math.sqrt(3),160-2*(80/2));
  ctx.rotate(1*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
  
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    //the left triangle rotations
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();

  
         ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
//set 9
      ctx.translate(160+2*(80/2)*Math.sqrt(3),160-2*(80/2));
  ctx.rotate(1*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    //the left triangle rotations
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();

  
         ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
//set 10
      ctx.translate(160+2*(80/2)*Math.sqrt(3),160-2*(80/2));
  ctx.rotate(1*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
      ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    //the left triangle rotations
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();

  
         ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    
  //set 11
      ctx.translate(160-2*(80/2)*Math.sqrt(3),160-2*(80/2));
  ctx.rotate(5*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
  
        ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    //the left triangle rotations
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();

  
         ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    //set 12
     ctx.translate(160+2*(80/2)*Math.sqrt(3),160-2*(80/2));
  ctx.rotate(1*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
      ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    //the left triangle rotations
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();

  
         ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
  //set 13
     ctx.translate(160+2*(80/2)*Math.sqrt(3),160-2*(80/2));
  ctx.rotate(1*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
      ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    //the left triangle rotations
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();

  
         ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
  //set 14
     ctx.translate(160-2*(80/2)*Math.sqrt(3),160-2*(80/2));
  ctx.rotate(5*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
        ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    //the left triangle rotations
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();

  
         ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
  //set 15
    ctx.translate(160+2*(80/2)*Math.sqrt(3),160-2*(80/2));
  ctx.rotate(1*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
        ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    //the left triangle rotations
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();

  
         ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
//set 16
    ctx.translate(160+2*(80/2)*Math.sqrt(3),160-2*(80/2));
  ctx.rotate(1*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
        ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    //the left triangle rotations
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();

  
         ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
//set 17
     ctx.translate(160-2*(80/2)*Math.sqrt(3),160-2*(80/2));
  ctx.rotate(5*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
  
            ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    //the left triangle rotations
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();

  
         ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    //set 18
     ctx.translate(160+2*(80/2)*Math.sqrt(3),160-2*(80/2));
  ctx.rotate(1*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
               ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    //the left triangle rotations
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();

  
         ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    //set 19
    ctx.translate(160+12*(80/2)*Math.sqrt(3),160+12*(80/2));
  ctx.rotate(2*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
                ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    //the left triangle rotations
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();

  
         ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
  
  //set 20
     ctx.translate(160+6*(80/2)*Math.sqrt(3),160+18*(80/2));
  ctx.rotate(2*Math.PI/3);
    // ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
     ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    //the left triangle rotations
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();

  
         ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
          ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
    
    ctx.translate(160,160);
  ctx.rotate(2*Math.PI/3);
    ctx.scale(-1,1);
  ctx.translate(-160,-160);
  rt_p6m.shape();
  ctx.fill();
    // rt_p6m.grid();
  }
}
}//setup end



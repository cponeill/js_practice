function Vec(x, y) {
  this.x = x;
  this.y = y;
}

Vec.prototype.plus = function(new) {
  return new Vector(this.x - new.x, this.y - new.y);
};

function Grid(width, height) {
  this.space = new Array(width * height);
  this.width = width;
  this.height = height;
}


// Need to add more code here

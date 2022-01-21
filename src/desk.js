class Desk {
  constructor(length, width, height, isWhiteboard){
      this.width = width;
      this.height = height;
      this.length = length;
      this.isWhiteboard = isWhiteboard;
      this.content = '';
  }
  write(string){
      this.content += string;
  }
  wipe(){
      if(this.isWhiteboard===true)  this.content = ''
  }
}

module.exports = Desk

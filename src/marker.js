class Marker {
  constructor(size, color, remainingInk){
      this.size = size;
      this.color = color;
      this.remainingInk = remainingInk;
  }
  write(ogString){
      let string = ogString.replace(/ /g, "");
      let stringlength = string.length;
      this.remainingInk -= stringlength;

      return ogString.slice(0, this.remainingInk)



   
  }

}
// const marker = new Marker(...this.properties);
// console.log(marker);

module.exports = Marker

class Student {
  constructor(name, skillLevel){
      this.name = name;
      this.skillLevel = skillLevel;
      this.assignments = [];
  }
  study(){
      (this.skillLevel<100) ? this.skillLevel++ : this.skillLevel = 100;
      return this;
  }
  doHomework(obj){
      // handle null objects
    if (!obj) {
        //loop through each object and assgin the same object back for completion
        this.assignments.forEach(a => this.doHomework(a));
        return;
      }
      //handle low skill levels
      const skill = obj.skillLevel;
      //skip if no skill OR skill less than 0 OR skill is over 100
      if (!skill || skill <= 0 || skill > 100) {return};
      
      //set assignment completion status based on current skill and total student skill
      obj.completed = this.skillLevel > skill;
      //send this object to the array
      this.assignments.push(obj);
    }

  
}

module.exports = Student

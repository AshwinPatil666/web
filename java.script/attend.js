/*const student1={
    name:"Piyush",
    attendence:0;

    isPresent :funtion (){
        this.attendence++;
        console.log(
            ${this.name} is present ,total Attendence =$(this.attendence);

        );
    },
};

class Student{
    constructor(name,attendence)
    {
        this.name=this.name;
        this.attendence =attendence;
        

    }
    isPresent(){
        this.attendance++;
        console.log(${this.name} is present.Total Attendence=$(this.attendence));
    }
}
const student1=new Student("Piyush",0);
const Studnet2=new Student("Mradul",)

*/

// const student1 = {
//   name: "Piyush",
//   attendance: 0,

//   isPresent: function () {
//     this.attendance++;
//     console.log(
//       `${this.name} is present. Total Attendance = ${this.attendance}`,
//     );
//   },
// };

// student1.isPresent();
// student1.isPresent();

// const student2 = {
//   name: "Piyush",
//   attendance: 0,

//   isPresent: function () {
//     this.attendance++;
//     console.log(
//       `${this.name} is present. Total Attendance = ${this.attendance}`,
//     );
//   },
// };

class Student {
  //   constructor(name, attendance) {
  //     this.name = name; // this is the pointer pointing to the Object
  //     this.attendance = attendance;
  //   }

  isPresent() {
    // isPresent is stored only once in the memory
    // this.attendance++;
    console.log(`is present.`);
  }

  static greet() {
    // Only accessed by class and not by Objects
    console.log("Hello, Student");
  }
}

const student1 = new Student();
const student2 = new Student();

student1.isPresent();
student2.isPresent();

// student1.greet();  // error: .greet() is not a function
Student.greet();

// Object :-multiple variable are linked with each other are called Object
// here we are creating object

// let person={
//     fname:"tejas",
//     age:22,
//     // we can declare function in object
//     draw (){
//         console.log("Drawing");
        
//     }
// }

// // accessing the object
// console.log(person.fname);
// console.log(person.age);

// // accessing function the object
// person.draw()

// // adding the new properties
// // this by bracket notation
// person["city"]="kolpewadi"
// console.log(person);

// // adding the new properties
// // this by dot notation
// person.state="maharashtra"
// console.log(person );


// console.log("<--------------------------------------------------------->");
// post/pre increment/decrement

// // post increment
// let a=10
// console.log(a++);

// // pre increment
// let b=10
// console.log(++b);

// Equality operator (loose equality: ==)(strict equality: ===)

// let a=1;
// let b="1";
// console.log(a==b);  // here the output will be true bcz of loose equality(bcz it only check value not its datatype)

// let a=1;
// let b="1"
// console.log(a===b);  // here the output will be false bcz of strict equality(bcz it  check value ass well as its datatype)

// Factory Functions:-it is used when we need to create the object repeatetly

// function createRectangle (len,bre){
//     return rectangle={
//         length:len,
//         breadth:bre,
//         draw:function (){
//             console.log("Drawing");
//         }
//     }

// }
// // here we have created the factory function

// let rectangle1=createRectangle(2,3)
// // accessing the elements
// console.log(rectangle1);
// console.log(rectangle1.length);
// console.log(rectangle1.breadth);
// rectangle1.draw()

// // create the new object
// let rectangle2=createRectangle(10,20)
// console.log(rectangle2);


//Camelcase -> numberOfStudents
//constructor function -> Pascal Notation -> first letter of every word is Capital -> NumberOfStudents
//constructor function -> prop/methods -> intialise/Define
// function Rectangle(len, bre) {
//     this.length = len;
//     this.breadth = bre;
//     this.draw= function() {
//         console.log('drawing');
//     }
// }

// // Rectangle.

// //object creation using constrcutor function
// let rectangleObject = new Rectangle(4,6);

// rectangleObject.color = 'yellow';
// console.log(rectangleObject);

// delete rectangleObject.color;
// console.log(rectangleObject);


//////////////////////////// Functions are also Objects


// Iterating through objects
// 1) for-in:-we can access key,values,key-value pair from objects

// let rectangle={
//     length:1,
//     breadth:2
// }

// for (const key in rectangle) {
//     console.log(key,rectangle[key]);
    
// }

// 2)for-of :-only used in iterable like array,maps

// let a=[1,3,2.2,"Tejas"]

// for (const element of a) {
//     console.log(element);
    
// }


// By using hack we can access object in it s well
// let rectangle={
//     length:1,
//     breadth:2
// }

// for (const element of Object.keys(rectangle)) {
//     console.log(element);
    
// }




//////////////////////////    Object Cloning   ///////////////////////

// 1)Iteration:-
// let src={
//     a:10,
//     b:20
// }

// dest={}

// for (let key in src){
//     dest[key]=src[key]
// }

// console.log(dest);


// 2)assign:-

// let src={
//     a:10,
//     b:20
// }

// let dest=Object.assign(src)

// console.log(dest);

// 3)spread:-

// let src={
//     a:10,
//     b:20
// }

// let dest={...src}

// console.log(dest);


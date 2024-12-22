//classes : blueprint
class Human
{
    //property
    //initilization here
    age = 13 //public 
    #wt = 45 //private : can not access outside of class
    ht = 100//protected
    // only declare there is no value is aasigned 
    //using constructor we can pass the value
    newage;
    constructor(newht, newwt)//parameter
    {
        this.ht = newht;
        this.#wt = newwt;
        
    }
    //behaviour
    walking()
    {
        console.log("I am walking and age is", this.#wt)
    }
    ruuning()
    {
        console.log("I am running")
    }
    get fetchWeight() //for fetching the value
   {
    return this.#wt; 
   }
   set modifyWeight(val)// encapsulation and absraction
   {
    this.#wt = val;
   }
}
let obj = new Human(22,40);//argument

obj.walking();
console.log("w",obj.fetchWeight);
console.log(obj.age);
console.log("h",obj.ht);

// this keyword is use to refer the object
// accessing outside  the class
// use getter and setter
//default parameter
function sayhello(fname = "Hello")
{
    console.log(fname);
}
sayhello();
sayhello("Minu");
function say(fname = "Hello",  lname = fname.toUpperCase())
{
    console.log(fname, lname);
}

say("Minu", "dev");
say(undefined,null);//value print
say(null,'love');
say();
 // null print
//you can insert array, object, function
function getAge()
{
    return 20;
}
function utility(name = 'love', age = getAge())
{
 console.log(name,"",age)
}
utility();
utility("e", 50);
//************************************8 */
/* In built object */
Math.PI
console.log(Math.max(89,90));
console.log(Math.min(89,90));
console.log(Math.max(89,90));
console.log(Math.round(1.45));
console.log(Math.floor(1.45));
console.log(Math.ceil(1.45));
console.log(Math.abs(-97));
console.log(Math.random());//0 to 1
console.log(Math.sqrt(89));
console.log(Math.pow(2,10));
//2) Date 
let curr = new Date()
let date = new Date('June 18 2000 9');
console.log(curr);
console.log(date);
newDate = new Date(2000, 6, 17, 7)// 0 base 
// 0 = jan
//1 = feb
console.log(newDate)

console.log(newDate.getFullYear())
console.log(newDate.setFullYear(2001))
console.log(newDate)
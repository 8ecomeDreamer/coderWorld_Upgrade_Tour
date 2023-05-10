class Animal {
    name: String
   
    protected sex: String
    private  age: Number
    static origin : String = 'Japan' 											// Class level static variable.
    constructor(name : String,age : Number, sex: String){
        this.name = name; 
        this.age = age;
        this.sex = sex;
    }
    getSex(){
        console.log(`${this.name} is ${this.sex}`)
    }
    getAge(){
        console.log(`${this.name} is ${this.age} years old`)
    }
    getOrigin(){
        console.log(`${this.name} from ${Animal.origin}`)
    }
}

class Cat extends Animal{
    constructor(name : String,age : Number, sex: String){
        super(name,age,sex);														// Inherits from Animal class.
    }
    catch(){
        console.log(`${this.name} can catch mouse`)
    }
}
// // public 
// const Tom = new Cat( 'Tom', 5,'male' );	
// Tom.getOrigin()										// Cat class.
// Tom.getSex()										// Cat class.
// // private 
// const Tom = new Animal( 'Tom', 2.5,'male' );	
// Tom.getAge()										// Cat class.
// Tom.age	
// // protected
const cat = new Animal( 'cat', 2.5,'male' );
const Tom = new Cat( 'Tom', 2.5,'male' );	
cat.getSex()
Tom.getSex()
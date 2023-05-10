/*
 * @Description: ts学习笔记
 * @Version: 2.0
 * @Author: Jim
 * @Date: 2023-04-16 17:43:00
 * @LastEditors: Jim
 * @LastEditTime: 2023-04-16 23:05:36
 */

// 1.ts定义变量
// 将变量定义为布尔类型
const isHandsome: boolean = true
// 将变量定义为String类型
const realName: string = 'lin' 
// 将变量定义为any类型
const unlike: any = 4

// 将变量定义为元组类型
const tuple: [number, string] = [18, 'lin']

// 定义函数返回number类型
function add(x:number, y:number):number {
    return x + y
}
// 定义函数返回string类型
function addStr(x:number, y:string):string {
    return x + y
}
// 定义函数不返回类型
function welcome(): void {
    console.log('welcome to ts');
}
// 定义函数参数不为必传，？：代表这个参数是可选的
function addSome(x:number, y:number, z?:number):number {
    return x + y
}
// 也可以定义参数为默认参数
function defaults(x:number, y:number = 100):number {
    return x + y
}

// 2.类与继承
class People {
    name: String
    age: Number
    constructor(name : String,age : Number){
        this.name = name; this.age = age;
    }
    alive(){
        console.log(`${this.name} is Aliving`)
    }
    character(){
        console.log(`${this.name} is very beautiful`)
    }
}

// const coderWorld = new People( 'coderWorld', 21 ); 	// coderWorld is a People object.
// const Maggie = new People( 'Maggie', 21 ); 	// coderWorld is a People object.
// coderWorld.alive()
// Maggie.character()

class solider extends People{
    constructor(name : String,age : Number){
        super(name,age)
    }
    job(){
        console.log(`${this.name} is a solider`)
    }
}

const LaiNa = new solider( 'LaiNa', 23 );		// LaiNa is a solider object.
LaiNa.job()				    // LaiNa is a solider.


// 3.类的属性权限
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
Tom.getSex()										// Cat class.
cat.sex	
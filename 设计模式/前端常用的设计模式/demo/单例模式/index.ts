//  创建单例构造函数
class Singleton  { 
    // 定义private 可以限制实例化
    private name : String 
    private constructor(name: String){
        this.name = name 
    }
    static instance : Singleton
    static getInstance (name : String ): Singleton {
        // 若这个唯一的实例不存在，那么先创建它
        if (Singleton.instance === null ){
            Singleton.instance = new Singleton(name) 	//return new instance of Singleton with name 'null'
        }
         // 如果这个唯一的实例已经存在，则直接返回
        return 	Singleton.instance 				//return the instance of Singleton.instance
    }
}
// 诞生于1996 泰裤辣
const birthAt_1996 = Singleton.getInstance('birthAt_1996')
const tiKuLa = Singleton.getInstance('tiKuLa')
console.log('这两兄弟是否为同一个东西',birthAt_1996 === tiKuLa)
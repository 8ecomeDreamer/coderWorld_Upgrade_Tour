//  创建单例构造函数
class Singleton  { 
    // 定义private 可以限制实例化
    private name : String 
    private constructor(name: String){
        this.name = name 
    }
    // 创建变量接受
    static instance : Singleton
    static getInstance (name : String ): Singleton {
        if (Singleton.instance === null ){
            Singleton.instance = new Singleton(name) 	//return new instance of Singleton with name 'null'
        }
        console.log(Singleton.instance 	)
        return 	Singleton.instance 				//return the instance of Singleton.instance
    }
}
// 诞生于1996 泰裤辣
const birthAt_1996 = Singleton.getInstance('birthAt_1996')
const tiKuLa = Singleton.getInstance('tiKuLa')
console.log('这两兄弟是否为同一个东西',birthAt_1996 === tiKuLa)
/*
 * @Description: 
 * @Version: 2.0
 * @Author: Jim
 * @Date: 2023-04-23 11:36:47
 * @LastEditors: Jim
 * @LastEditTime: 2023-04-25 21:00:59
 */

// 抽象类 addObserver deleteObserver notifyObservers
interface Observer {

}
//  subject
class nbaStar {
    private name: string = ''
    private fanList: Fans[] = []
    constructor(name: string) {
        this.name = name
    }
    wantSignedFans(fans: Fans) {
        this.fanList.push(fans)
        this.sign()
    }
    sign() {
        this.fanList.forEach(fans => { fans.happy() })
        this.fanList = []
    }
}
//  observer
class Fans {
    name: string 	//  name of the fan
    constructor(name: string) {
        this.name = name
    }
    happy() {
        console.log(`${this.name}拿到签名了,开心`)
    }
}

const Bulter = new nbaStar('Jimmy Bulter')
const fans1 = new Fans('fans1')
const fans2 = new Fans('fans2')
Bulter.wantSignedFans(fans1) //  fans1 is interested in the subject 	//  this is the subject 	//
Bulter.wantSignedFans(fans2) //  fans1 is interested in the subject 	//  this is the subject 	//
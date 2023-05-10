
//  observer
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
//  
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
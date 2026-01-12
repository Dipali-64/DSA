class calculator{
    constructor(a,b,op){
        this.a = a
        this.b = b
        this.op = op
    }

    result(){

    if(this.op == "+"){
        return this.a + this.b
    }
    else if(this.op == "-"){
        return this.a - this.b
    }
    else if(this.op == "*"){
        return this.a * this.b
    }
    else if(this.op == "/"){
        return this.a / this.b
    }
    else if(this.op == "%"){
        return this.a % this.b 
    }
    else if(this.op == "**"){
        return this.a ** this.b
    }
}
}

let op1 = new calculator(3,2,"+")
console.log(op1.result())
let op2 = new calculator(3,2,"-")
console.log(op2.result())


//restaurant Menu

class menu{
    constructor(quantity,food){
        this.quantity = quantity
        this.food = food
    }

    price(){
        if(this.food == "pizza"){
            return 180 * this.quantity
        }
        else if(this.food == "Burger"){
            return 120 * this.quantity
        }
        else if(this.food == "French Fries"){ 
            return 90 * this.quantity
        }else if(this.food =="Pasta"){
            return 140 * this.quantity
        }
    }
}

let order1 = new menu (2,"burger")
console.log( order1.price())
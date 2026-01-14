class cars {
    constructor(name,model,color,fuel){
        this.name = name
        this.model = model
        this.color = color
        this.fuel = fuel
    }

    printkaro()
    {
        console.log(`name of the car is ${this.name} car model is ${this.model} color is ${this.color} and fuel is ${this.fuel}`)
    }
}

let car1 = new cars("swift","vxi","white","petrol")
console.log(car1)
car1.printkaro()
let car2 = new cars("comet","top","balck","Ev")
console.log(car2)


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
let op3 = new calculator(10,3,"%")
console.log(op3.result())
let op4 = new calculator(3,2,"*")
console.log(op4.result())
let op5 = new calculator(10,2,"/")
console.log(op1.result())
let op6 = new calculator(3,2,"**")
console.log(op6.result())



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
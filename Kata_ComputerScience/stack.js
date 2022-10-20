class Stack{
    constructor(){
        this.items = []
    }

    push(item){
        return this.items.push(item)
    }

    pop(){
        return this.items.pop()
    }

    peek(){
        
        return this.items[this.items.length-1]
    }

    size(){
        return this.items.length
    }

    print(){
        console.log(this.items)
    }

}


let s = new Stack()

s.push('Manzana')
s.push('Cebolla')
s.push('Apio')
s.push('Naranja')
s.push('Papaya')
s.push('Sandía')
s.push('Melón')

console.log("The stack is the following:")
console.log(s)

console.log("In a stack, the last item added is the first one to be removed.")
s.pop()
console.log(s)



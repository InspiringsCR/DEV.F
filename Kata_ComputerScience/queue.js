class Queue {
    constructor(){
        this.items = []
    }
    
    enqueue(item){
        return this.items.push(item)
    }

    dequeue(){
        return this.items.shift()
    }

    peek(){
        return this.items[0]
    }

    size(){
        return this.items.length
    }

    isEmpty(){
        return this.items.length == 0
    }

    front(){
        return this.peek()
    }

    back(){
        return this.items[this.items.length-1]
    }
    
    print(){

    }

}


let q = new Queue()
q.enqueue('No rompas mas')
q.enqueue('Payaso rodeo')
q.enqueue('Taki taki')
q.enqueue('sonidito')
console.log("The current queue is the following:")
console.log(q)

console.log("In a queue, the first item added, is the first item removed")
console.log("We remove "+q.dequeue())
console.log("We remove "+q.dequeue())
console.log(q)

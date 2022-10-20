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
        console.log(this.items)
    }

}


function sinColados(queue){
    let newQ = new Queue()
    let falseQ = new Queue()
    let length = queue.size()

    for (i=0; i<length;i++){
        if (queue.peek().ticket){
            newQ.enqueue(queue.dequeue())
        }
        else{
            falseQ.enqueue(queue.dequeue())
        }
    }

    newQ.print()
    falseQ.print()

}

let queue = new Queue();

queue.enqueue({ user:'User1', ticket:true   })
queue.enqueue({ user:'User2', ticket:true   })
queue.enqueue({ user:'User3', ticket:false  })
queue.enqueue({ user:'User4', ticket:true   })
queue.enqueue({ user:'User5', ticket:false  })
queue.enqueue({ user:'User6', ticket:false  })
queue.enqueue({ user:'User7', ticket:true   })
queue.enqueue({ user:'User8', ticket:true   })
queue.enqueue({ user:'User9', ticket:true   })
queue.enqueue({ user:'User10', ticket:false })
queue.enqueue({ user:'User11', ticket:true  })

console.log("Esta es la cola mezclada")
console.log(queue)

console.log("Ahora veremos la cola con tickets falsos filtrados")
sinColados(queue)
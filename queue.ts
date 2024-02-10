type QNode<T> = {
  value: T,
  next?: QNode<T>
}

export default class Queue<T> {
  public length: number;

  private head?: QNode<T>
  private tail?: QNode<T>

  constructor() {
    this.head = undefined //? the Queue is empty initially so we set head to undefined
    this.tail = undefined //? the Queue is empty initially so we set tail to undefined
    this.length = 0 //? as there is no element into the Queue sets it's length to 0
  }

  enqueue(item: T): void {
    const node = {value: item} as QNode<T>

    this.length++
 
    if(!this.tail) { //? it's checks if the list is empty, because if the tail is undefined means that there is no item on the queue 
      this.tail = node //? set the tail to the new item which is a node
      this.head = node //? set the head to the same new item of the tail, because when there is only one item on the queue the head and the tail are the same
    }

    this.tail.next = node //? if the queue is not empty we take the tail element, and set it next to receive the node item
    this.tail = node //? we change the tail to the new item
  }

  deque(): T | undefined {
    if(!this.head) return undefined

    this.length--

    const head = this.head
    this.head = this.head.next 

    if(this.length === 0) this.tail = undefined

    head.next = undefined

    return head.value
  }

  peek(): T | undefined {
    return this.head?.value
  } 
}


//? example using the class above
const stringQueue = new Queue<string>();
stringQueue.enqueue("hello"); //* This is fine
stringQueue.enqueue(123);     //! TypeScript will flag this as an error

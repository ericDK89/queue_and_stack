type QNode<T> = {
  value: T,
  prev?: QNode<T>
}

export default class Stack<T> {
  public length: number
  private head?: QNode<T>

  constructor() {
    this.head = undefined
    this.length = 0
  }

  push(item: T): void {
    const node = {value: item} as QNode<T>

    this.length++

    if(!this.head) {
      this.head = node
      return
    }

    node.prev = this.head
    this.head = node
  }

  pop(): T | undefined {
    if(!this.head) return undefined

    if(this.length > 0) this.length-- //? never goes under 0 if we keep pop

    const head = this.head
    this.head = head.prev ? head.prev : undefined

    if(this.length === 0) this.head = undefined

    return head.value
  }

  peek(): T | undefined {
   return this.head?.value
  }
}
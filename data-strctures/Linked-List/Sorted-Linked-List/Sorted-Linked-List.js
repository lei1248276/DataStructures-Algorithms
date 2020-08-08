import {LinkedList,Node} from "../Linked-List.js";
import {Compare,defaultCompare,defaultEquals} from "../../../Util.js";

class SortedLinkedList extends LinkedList{
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn);
    this.compareFn = compareFn;
  }
  insert(element, index = 0) {
    if (this.isEmpty()) return super.insert(element, 0);
    let pos = this.getIndexNextSortedElement(element, index);
    return super.insert(element, pos);
  }
  getIndexNextSortedElement(element) {
    let current = this.head,
        i = 0;
    for (; i < this.size(); i++) {
      let com = this.compareFn(element, current.element);
      if (com === Compare.LESS_THAN) return i;
      current = current.next;
    }
    return i;
  }
}

let sortedList = new SortedLinkedList();
sortedList.push(1);
sortedList.push(9);
console.log(sortedList.insert(2, 0));
console.log(sortedList.insert(3));
console.log(sortedList.toString());
console.log(sortedList);
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function(l1, l2) {
    // Edge cases
    if (!l1 && !l2){
        return;
    }
    
    if (l1 && !l2){
        return l1;
    }  
    
    if (!l1 && l2){
       return l2;
    }
    
    let mergedHead = null;
    if (l1.data <= l2.data) {
        mergedHead = l1;
        l1 = l1.next;
    } else {
        mergedHead = l2;
        l2 = l2.next;
    }

    let mergedTail = mergedHead;

    while (l1 && l2) {
        let temp = null;
        if (l1.data <= l2.data) {
            temp = l1;
            l1 = l1.next;
        } else {
            temp = l2;
            l2 = l2.next;
        }

        mergedTail.next = temp;
        mergedTail = temp;
    }

    if (l1) {
        mergedTail.next = l1;
    } else if (l2) {
        mergedTail.next = l2;
    }

    return mergedHead;
    
};


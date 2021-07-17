function reverseInt(n) {
    if (n < 0){
        n = Math.abs(n);
        console.log(n);
        n = n.toString();
        n = n.split('').reverse().join('');
        n = parseInt(n);
        
        return n = ~n + 1
    }

    n = n.toString();
    n = n.split('').reverse().join('');

    return parseInt(n);
}

reverseInt(51);
reverseInt(500);
reverseInt(-90);
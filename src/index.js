module.exports = function reverse (n) {
    let arr = n.toString().split('');
    let re = /,/gi;
    
    if (arr[0] === '-' ) {
        return n.toString().slice(1).split('').reverse().join().replace(re, '');
    } if (+arr[arr.length - 1] === 0) {
        return n.toString().slice(0, -1).split('').reverse().join().replace(re, '');
    } else {
        return arr.reverse().join().replace(re, '');
    } 
}

function nonRepeated(str) {
    const count = {};

    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        count[char] = (count[char] || 0) + 1;
    }
    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        if (count[char] === 1) {
            return char;
        }
        
    }
    return null;
}

console.log(nonRepeated('asdfghjkasdfgh'));


function isPositive(n) {
    if (n >= 0) return n ** 2
    return 0
}
console.log(isPositive(25))



function isPrime(n) {
    if (n < 2) {
        return false;
    }
    let maxDivisor = Math.floor(Math.sqrt(n));
    for (let i = 2; i <= maxDivisor; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(323211));
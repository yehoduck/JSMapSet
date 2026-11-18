const numbers = new Set([1, 2, 3])
console.log("Чи є ключ 3:", numbers.has(3))
console.log("Чи є ключ 4:", numbers.has(4))
numbers.add(4)
numbers.add(5)
numbers.add(6)
let sum = 0
for (const number of numbers) {
    sum += number
    console.log(number)
}
console.log(sum)
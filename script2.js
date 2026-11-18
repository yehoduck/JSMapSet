const numbers = new Set([1, 2, 3])
console.log("Чи є ключ 3:", numbers.has(3))
console.log("Чи є ключ 4:", numbers.has(4))
numbers.add(4)
numbers.add(5)
numbers.add(6)
for (const number of numbers) {
    console.log(number)
}
let sum = 0
numbers.forEach(num => {
    sum += num
})
console.log(sum)
numbers.delete(2)
console.log(numbers)
numbers.clear()
console.log(numbers)
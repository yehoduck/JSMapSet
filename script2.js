console.group(2.1)

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

console.groupEnd()


console.group(2.2)

const arr = [1,6,9,4,9,1,5,6]
console.log(arr)

const arrSet = [...new Set(arr)]
console.log(arrSet)

const arr2 = [5, 10, 11]
const arrSet2 = [...new Set([...arr, ...arr2])]
console.log(arrSet2)

console.groupEnd()
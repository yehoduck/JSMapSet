const numbers = new Map([[1, "first"], [3, "third"]]);

console.group("1.1.")
console.log("Кількість елементів:", numbers.size);

numbers.set(2, "second");
console.log("Після додавання:", numbers);

numbers.delete(2);
console.log("Після видалення:", numbers);

console.log("Значення ключа 1:", numbers.get(1));
console.log("Чи є ключ 2:", numbers.has(2));
console.log("Ключі:", [...numbers.keys()]);
console.log("Значення:", [...numbers.values()]);
console.groupEnd()

const numbers1 = new Map([["1", "first"],["3", "third"]])

function convertText(text) {
    const result = text
        .split(" ")
        .map(func => (numbers1.has(func) ? numbers1.get(func) : func))
        .join(" ")
    return result
}

const text = "This year I will enter the 1 grade. I have two brothers. I am the 3 child of my parents.";
const finalText = convertText(text)

console.group("1.2.")
console.log(text)
console.log(finalText)
console.groupEnd()
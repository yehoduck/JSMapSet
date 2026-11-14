const numbers = new Map([[1, "first"], [3, "third"]]);

console.log("Кількість елементів:", numbers.size);

numbers.set(2, "second");
console.log("Після додавання:", numbers);

numbers.delete(2);
console.log("Після видалення:", numbers);

console.log("Значення ключа 1:", numbers.get(1));

console.log("Чи є ключ 2:", numbers.has(2));

console.log("Ключі:", [...numbers.keys()]);

console.log("Значення:", [...numbers.values()]);
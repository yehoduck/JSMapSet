const numbers = new Map([[1, "first"], [3, "third"]]);

console.log("Кількість елементів:", numbers.size);

numbers.set(2, "second");
console.log("Після додавання:", numbers);

numbers.delete(2);
console.log("Після видалення:", numbers);
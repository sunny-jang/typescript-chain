class Human {
    public name: string;
    public age: number;
    public gender: string;

    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const sunny = new Human("Sunny", 28, "female");
interface Human {
    name: string,
    age: number,
    gender: string
}

const person = {
    name: "Sunny",
    age: 24,
    gender: "female"
};

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
}

console.log(sayHi(sunny));

export { };
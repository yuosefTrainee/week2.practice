for (let i = 0; i <= 10; i++) {
    console.log(i)
}

for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

let text = "Hello";
let reversed = "";

for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
}

console.log(reversed);


function sum(Number) {
    let total = 0;

    for (let i = 0; i < Number.length; i++) {
        total += Number[i];
    }
    return total;
}

console.log(sum([1, 2, 3, 4, 5]))


function multiplesOf(n, limit) {
    let result = [];

    for (let i = n; i <= limit; i += n) {
        result.push(i)
    }
    return result;
}
console.log(multiplesOf(5, 30))

function countVowels(text) {
    let count = 0;
    let vowels = "aeiou";

    for (let i = 0; i < text.length; i++) {
        if (vowels.includes(text[i].toLowerCase())) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("yuosef shadi alsadoudi"));

function reverseString(text) {
    let reversed = "";

    for (let i = text.length - 1; i >= 0; i--) {
        reversed += text[i];
    }

    return reversed;
}

console.log(reverseString("yuosef"));

function reverseString(text) {
    return text.split("").reverse().join("");
}

console.log(reverseString("yuosef"));


function isPalindrome(text) {
    let reversed = text.split("").reverse().join("");

    return text === reversed;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("yuosef"));

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzBuzz();

function printPattern(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";

        for (let j = 1; j <= i; j++) {
            row += "*";
        }

        console.log(row);
    }
}
printPattern(10);


let x = 10;
while (x > 0) {
    console.log(x);
    x--;
}

const person = { firstName: "yousef", lastName: "shadi", age: 22 };

for (const key in person) {
    console.log(key + ": " + person[key]);
    console.log(key)
    console.log(person[key])

}


const myinfo = {
    name: "yousef",
    city: "amman",
}
function hasAllVowels(obj) {
    return Object.values(obj).every(value => value.includes("a"));
}
console.log(hasAllVowels(myinfo));


const students = {
    Ahmad: 80,
    Yousef: 55,
    Omar: 70,
    Ali: 40,
    abood: 90
};

function passedStudents(students) {
    const passed = {};

    for (let student in students) {
        if (students[student] >= 60) {
            passed[student] = students[student];
        }
    }

    return passed;
}
console.log(passedStudents(students))


/*            */
const numbers = {
    first: 10,
    second: 20,
    third: 20
};

function sumValues(obj) {
    let sum = 0;

    for (let key in obj) {
        sum += obj[key];
    }

    return sum;
}
console.log(sumValues(numbers))

/*    */
function countKeys(obj) {
    let count = 0;

    for (let key in obj) {
        count++;
    }

    return count;
}
console.log(countKeys(myinfo))

/*        */
function login(users, username, password) {
    if (users[username] === password) {
        return "login successful";
    } else {
        return "login failed";
    }
}
const users = {
    Ahmad: "1234",
    shadi: "1234",
    Yousef: "5678",
    Omar: "abcd"
};
console.log(login(users, "Yousef", "5678"))
console.log(login(users, "shadi", "5678"))


/* Recursion */

function countup(number) {
    console.log(number);
    if (number === 10) {
        return console.log("Countup is over");
    }
    return countup(number + 1);
}
countup(0);


function countdown(number) {
    console.log(number);
    if (number <= 0) {
        return console.log("Countdown is over");
    }
    return countdown(number - 2);
}
countdown(9);


function factorial(number) {
    if (number === 1) {
        return 1;
    }
    return number * factorial(number - 1)
}
console.log(factorial(5))



let arr = [10, 20, 30, 40, 50]
function sumArray(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sumValues(arr.slice(1));
}
console.log(sumArray(arr))

function getLength(str) {
    if (str === "") {
        return 0;
    }

    return 1 + getLength(str.slice(1));
}

console.log(getLength("yuosef"));


function reverseString(str) {
    if (str === "") {
        return "";
    }

    return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("yousef"));


function addition(a, b) {
    if (b === 0) {
        return 0;
    }

    return a + addition(a, b - 1);
}
console.log(addition(3, 5))


function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    }

    if (str[0] !== str[str.length - 1]) {
        return false;
    }

    return isPalindrome(str.slice(1, -1));
}
console.log(isPalindrome("yousef"))


/* fibonacci  */












/* Callbacks & Higher Order Functions */

function useCallback(numbers) {
    return numbers.map(function (number) {
        return number * 2;
    });
}
console.log(useCallback([1, 2, 3, 4]));


function averageGrade(grades) {
    if (grades.length === 0) {
        return "Please enter at least one grade";
    }

    const sum = grades.reduce((total, grade) => total + grade, 0);

    return sum / grades.length;
}
console.log(averageGrade([80, 70, 90]));











/* OOP */
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;

    }
    getArea() {

        return this.width * this.height;

    }
    getPerimeter() {
        return 2 * (this.width + this.height)

    }
}

let rect = new Rectangle(15, 10)
console.log(rect.getArea())
console.log(rect.getPerimeter())


class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient balance");
        }
    }

    getBalance() {
        return this.balance;
    }
}

let account = new BankAccount(100);

account.deposit(50);
console.log(account.getBalance());

account.withdraw(30);
console.log(account.getBalance());

account.withdraw(200);
console.log(account.getBalance()); 


class Animal {
    makeSound(){
        console.log("Animal make a sound")
    }   
}
class Dog extends Animal{
    makeSound(){
        console.log("Woof! Woof! Woof!")
    }
}
let dog = new Dog();
dog.makeSound()

class Song {
    constructor(title, artist, duration) {
        this.title = title;
        this.artist = artist;
        this.duration = duration;
    }
}

class Playlist {
    constructor() {
        this.songs = [];
    }

    addSong(song) {
        this.songs.push(song);
    }

    removeSong(title) {
        this.songs = this.songs.filter(song => song.title !== title);
    }

    getTotalDuration() {
        return this.songs.
        reduce((total, song) => total + song.duration, 0);
    }
}

let playlist = new Playlist();

let song1 = new Song("Believer", "Imagine Dragons", 204);
let song2 = new Song("Shape of You", "Ed Sheeran", 233);
let song3 = new Song("Perfect", "Ed Sheeran", 263);

playlist.addSong(song1);
playlist.addSong(song2);
playlist.addSong(song3);
console.log(playlist.getTotalDuration()); 
playlist.removeSong("Shape of You");
console.log(playlist.getTotalDuration()); 


class MathUtils {
    static isEven(number) {
        return number % 2 === 0;
    }
}

console.log(MathUtils.isEven(10));
console.log(MathUtils.isEven(7));
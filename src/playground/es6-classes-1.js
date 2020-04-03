// Car
// make
// model
// vin
// getDiscription

// Set up a constructor name and age
// getDescription - Jinfeng CHen is 33 years old

class Person {

    constructor(name,age = 0) {
        this.name = name;
        this.age = age;
    }

    GetGreeting() {
        return `Hi, I am ${this.name}`;
    }

    getDescripton() {
        return `${this.name} is ${this.age} year(s) old!`;
    }

}

class travler extends Person{
    constructor(name,age,location) {
        super(name,age);
        this.location = location;
    }

    hasLocation() {
        return !!(this.location);
    }
    
    getGreeting() {
        let description = super.getDescripton();
        if(this.hasLocation()) {
            return description += ` and the location is ${this.location}`
        }
        return description;
    }
}

const me = new travler('Jinfeng');
console.log(me.GetGreeting());

const other = new travler();
console.log(other.GetGreeting());

const another = new travler('Jinfeng','33','dublin');
console.log(another.getGreeting());

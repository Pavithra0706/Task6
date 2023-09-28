// 3) Write a “person” class to hold all the details.


class Person {
    constructor(name, age, nationality, address, hobbies, languages, skills) {
        this.name = name;
        this.age = age;
        this.nationality = nationality;
        this.address = address;
        this.hobbies = hobbies;
        this.languages = languages;
        this.skills=skills;
        
    }

}
var c= new Person ("pavi","21","Indian","mayiladuthurai","Painting","English","Full stack Developer")
console.log(`Hello, I'm ${c.name}, and I'm ${c.age} years old. I'm ${c.nationality} and I live at ${c.address}. My hobbies include ${c.hobbies}, and I speak ${c.languages}. I have skills in ${c.skills}.`);



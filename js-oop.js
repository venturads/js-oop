function User(name, age, hobbies) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
    this.greetings = () => {
        alert("Welcome to the company: " + this.name + ", age: " + this.age + ", hobbies: " + hobbies);
    }
}
const user1 = new User('kobe', 41, ['basketball', 'movies']);
user1.greetings();
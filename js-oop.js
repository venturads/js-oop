function User(name, age, hobbies) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
    this.greetings = () => {
        console.log("Welcome to the company: " + this.name)
    }
}

function greet(name, callback) {
    console.log("Hey" + "" + name);
    callback();
}

function speak() {
    console.log("I know how to execute callback functions!")
}

greet("Shateria", speak);
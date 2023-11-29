//class method 

class person {
    constructor(name, age) { //constructor adalah data
        this.name = name;
        this.age = age; 
    }

    salam() {   //method dan parameter
        return "Hello my name is " + this.name + ", age is " + this.age;
    }
}

// name : name
// age : age
// method : salam

const lala = new person('lala', 20 ).salam(); // instance nge-creat suatu object
const judi = new person('judi', 21 ).salam();

console.log(lala); //invoke method
console.log(judi);

//kalau function, lebih powerful

function Person2(name, age){
    this.name = name;
    this.age = age;
    this.salam = function(){
        return "Hello my name is " + this.name + ", age is " + this.age;
    };
}

console.log(new Person2('Junaidian',30).salam());

// react
// SSR - server side rendering

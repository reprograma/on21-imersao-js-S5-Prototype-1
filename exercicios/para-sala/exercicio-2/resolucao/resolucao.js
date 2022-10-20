const createPeople = (firstName,lastName, age) => {
    const people = {};

    const data = new Date().getTime();
    people.uid = `${data}${Math.random(1, 1000).toFixed(3)}`;
    people.firstName = firstName;
    people.lastName = lastName;
    people.age = age;

    return people
}

const people1 = createPeople('João', 'Silva', 20)
const people2 = createPeople('Maria', 'Silva', 30)
const people3 = createPeople('José', 'Silva', 40)


console.log(people1)
console.log(people2)
console.log(people3)
function age(person) {
    if (!("yearOfDeath" in person)) {
        let d = new Date();
        person.yearOfDeath = d.getFullYear();
    }
    return person.yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        if (age(oldest) < age(person)) {
            return person;
        }
        return oldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;

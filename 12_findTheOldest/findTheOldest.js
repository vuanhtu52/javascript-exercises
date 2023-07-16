const findTheOldest = function(people) {
    const sortedPeople = people.sort((person1, person2) => {
        if (!("yearOfDeath" in person1)) {
            person1.yearOfDeath = (new Date()).getFullYear();
        }
        if (!("yearOfDeath" in person2)) {
            person2.yearOfDeath = (new Date()).getFullYear();
        }
        return (person1.yearOfDeath - person1.yearOfBirth) - (person2.yearOfDeath - person2.yearOfBirth);
    });
    console.log(sortedPeople);
    return sortedPeople[sortedPeople.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;

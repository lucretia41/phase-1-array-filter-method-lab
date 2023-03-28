// Code your solution here

const drivers = [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh'
    },
    {
        name: 'Sammy',
        hometown: 'New York'
    },
    {
        name: 'Sally',
        hometown: 'Cleveland'
    },
    {
        name: 'Annette',
        hometown: 'Los Angeles'
    },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'
    }
];





function findMatching(drivers, string) {
    return drivers.filter((drivers) => drivers.toLowerCase() === string.toLowerCase()
    );
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(drivers => drivers.startsWith(string));

}



function matchName(drivers, string) {
    return drivers.filter(drivers => drivers.name === string)


}

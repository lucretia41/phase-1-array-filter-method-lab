// Code your solution here

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

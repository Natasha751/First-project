let activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
];
console.table(activities);//creating 2-D array

for (let i = 0; i < activities.length; i++) {
    // get the size of the inner array
    var innerArrayLength = activities[i].length;
    // loop the inner array
    for (let j = 0; j < innerArrayLength; j++) {
        console.log('[' + i + ',' + j + '] = ' + activities[i][j]);
    }
}
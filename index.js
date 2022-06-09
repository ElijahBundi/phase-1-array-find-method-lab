// code your solution here
function superbowlWin(array) {
    for (let i of array) {
        if (i.result === 'W') {
            return i.year
        }
    }
}

record.find(superbowlWin)
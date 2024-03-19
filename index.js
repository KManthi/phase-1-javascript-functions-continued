function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity='go to the office') {
    return `This Monday, I will ${activity}.`;
}

let wrapAdjective = function(star="*") {
    return function(adjective="hard worker") {
        return `You are ${star}${adjective}${star}!`
    }
}


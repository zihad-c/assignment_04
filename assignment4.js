// Problem-01 : Train TT's Fine Calculator 
function totalFine(fare) {
    // You have to write your code here
    if (typeof fare !== "number" || fare <= 0) {
        // console.log("Invalid");
        return "Invalid";
    }
    let surCharge = fare * 20 / 100;
    let serviceCharge = 30;
    let fine = fare + surCharge + serviceCharge;
    // console.log(fine);
    return fine;
}

// Problem-02 : Clean & Capitalize Characters
function onlyCharacter(str) {
    // You have to write your code here}
    if (typeof str !== "string") {
        // console.log("Invalid")
        return "Invalid"
    }
    let newStr = str.replaceAll(" ", "");
    let final = newStr.toUpperCase();
    // console.log(final);
    return final;
}

// Problem-03 : FIFA Best Team Award
function bestTeam(player1, player2) {
    // You have to write your code here
    let team1 = player1.foul + player1.cardY + player1.cardR;
    let team2 = player2.foul + player2.cardY + player2.cardR;

    if (typeof player1 !== 'object' || typeof player2 !== 'object') {
        // console.log("Invalid");
        return "Invalid";
    }
    else if (team1 < team2) {
        // console.log(player1.name);
        return player1.name;
    }
    else if (team2 < team1) {
        // console.log(player2.name);
        return player2.name;
    }
    else if (team1 === team2) {
        // console.log("Tie");
        return "Tie";
    }
    return "Invalid";
}

// Problem-04 : Same Same But Different
function isSame(arr1, arr2) {
    // You have to write your code here

    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

// Problem-05: Exam Result Report Generator
function resultReport(marks) {
    // You have to write your code here
    if (!Array.isArray(marks)) {
        // console.log("Invalid")
        return "Invalid"
    }
    if (marks.length === 0) {
        return { finalScore: 0, pass: 0, fail: 0 };
    }
    let total = 0;
    let pass = 0;
    let fail = 0;
    for (let mark of marks) {
        total = total + mark;
        if (mark >= 40) { pass++; }
        else { fail++; }
    }
    const finalScore = Math.round(total / marks.length);
    return {
        finalScore: finalScore,
        pass: pass,
        fail: fail
    };
}
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
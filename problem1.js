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
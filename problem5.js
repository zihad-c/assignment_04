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

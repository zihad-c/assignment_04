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
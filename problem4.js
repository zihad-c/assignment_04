function isSame(arr1, arr2) {
    // You have to write your code here

    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        // console.log("Invalid");
        return "Invalid";
    }
    if (arr1.length !== arr2.length) {
        // console.log(false);
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] !== arr2[i];
        // console.log(false);
        return false;
    }
    // console.log(true);
    return true;
}

// isSame([1, 2, 3], [1, 2, 3])
const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [7, 8, 9];

// ...

const mergeArrays = (arr1, arr2) =>{
    return [...arr1, ...arr2];
}

const merged = mergeArrays(mergeArrays(a, b), c);


console.log(merged);

/*
 * Expected output:
 *
 * [
 *   1, 2, 3, 4, 5,
 *   6, 7, 8, 9
 * ]
 */
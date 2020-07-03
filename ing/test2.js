function isProduct(num) {
    // Since the numbers are consecutive, they must be close to the square root of num
    // If num has an integer square root, return false
    const sqrt = Math.sqrt(num);
    if (Number.isInteger(sqrt)) {
        return false;
    }
    
    // If sqrt is not integer, we test if consecutive numbers around the square root can be
    // multiplied to get num
    let a = Math.floor(sqrt);
    let b = Math.ceil(sqrt);
    
    return (a*b) === num;
}

// I tried two approaches. In the first one, I go through each number in the interval and check 
// if it can be decomposed in two consecutive numbers that multiplied result in this number.
function solution1(A, B) {
    // If the interval is not valid, return 0
    if (B < A) {
        return 0;
    }
    
    // Iterate through every number in interval [A, B] and check if they are a product of 
    // consecutive numbers
    let counter = 0;
    for (let num=A; num<=B; num++) {
        if (isProduct(num)) {
            counter++;
        }
    }
    
    return counter;
}


// ===========================
/*
The previous solution seems correct, but it iterates through every number in the interval [A, B].
This is inefficient. 
Trying a second approach that once it finds one number that is a product, computes the next products
and sees if they fall within the interval [A, B]
*/

function getFactors(num) {
    // Since the numbers are consecutive, they must be close to the square root of num
    // If num has an integer square root, return false
    const sqrt = Math.sqrt(num);
    if (Number.isInteger(sqrt)) {
        return [null, null];
    }
    
    // If sqrt is not integer, we test if consecutive numbers around the square root can be
    // multiplied to get num
    let a = Math.floor(sqrt);
    let b = Math.ceil(sqrt);
    
    if ((a*b) === num)
        return [a, b];
    else 
        return [null, null];
}

function solution(A, B) {
    // If the interval is not valid, return 0
    if (B < A) {
        return 0;
    }
    
    // Iterate through interval [A, B] until I find a number that is a product of 
    // consecutive numbers. Then, compute the next product of consecutive numbers and check
    // if it falls within the interval [A, B]
    let counter = 0;
    for (let num=A; num<=B; num++) {
        [a, b] = getFactors(num);
    
        if (a !== null && b !== null) {  // factors are not null, so we found a valid result
            counter++;
            let nextProduct = b*(b+1);
            while (nextProduct <= B) {
                counter++;
                b++;
                nextProduct = b*(b+1);
            }
            break;
        }
    }
    
    return counter;
}

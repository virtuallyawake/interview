// Returns the length of the necklace that contains bead 'i'
// Marks all the beads in the necklace with 'x'
function getNecklaceLength(i, A) {
    let length = 0;
    let index = i;
    while (A[i] !== 'x') {
        let tmp = A[i];
        // Putting in 'x' in each bead that I've already seen from the necklace
        A[i] = 'x';
        i = tmp;
        length++;
    }

    return length;
}

function solution(A) {
    // Empty array. Return 0
    if (A.length === 0) {
        return 0;
    }
    
    let totalCounter = 0;
    let max = -1;
    let length = -1;
    
    // We scan through each bead. Once I see a bead, I mark it with 'x' so that I don't
    // process it again.
    for (let i=0; i<A.length; i++) {
        if (A[i] !== 'x') {
            // I have not seen this bead before, so it must belong to a new necklace
            length = getNecklaceLength(i, A);
            
            if (length > max) {
                max = length;
            }
            // I keep count of how many beads I've seen
            totalCounter += length;
        }
        
        // If I've seen all the beads, I can exit the loop
        if (totalCounter === A.length) {
            break;
        }
    }
    
    return max;
}

/*
Your test case: [1, 0]
Returned value: 2

Your test case: [1, 0, 3, 4, 2]
Returned value: 3

Your test case: [0]
Returned value: 1
*/

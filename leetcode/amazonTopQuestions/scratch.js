Write a function delete(s,i) that deletes the char at index as well as its pair
s = []{}<>()
Assumption, the string is lexically well formed (i.e for every starting brace  there is a correspoding ending brace and ending brace occurs after all ending braces for the braces that start after the brace in quesion)

Ex: delete('({})',0) -> {}

l
<<><>>
   ||
i = 4

s = <<>>
i = 0
delete closing bracket at i=3


i points to opening bracket => delete something that comes later


i points to closing bracket => delete something that comes before

stack:
opening | position
   <        0
   <        3
   
i = 3

*/

function isOpening(c) {
    let set = new Set(['[','{', '(', '<']);
    return set.has(c);
}

function delete(s, i) {
    let tmp = "";
    let stack = [];
    for (let j=0; j<s.length; j++) {
        let c = s.charAt(j);
        if (isOpening(c)) {
            stack.push([c, j]);
        } else { // current character is closing bracket
            let popped = stack.pop();
            if (popped[1] === i) {  // matching opening bracket
                continue;
            }
            if (j === i) {  // closing bracket
                let openingToDelete = popped[1];
            }
        }
        
        if (j === i) {
            if (isOpening(c)) { // opening bracket
                continue;
            } else { // closing bracket
                
            }
        } else {
            tmp += c;
        }
    }
    
    return tmp;
}

<<>>
   |
i = 3

j | c  | stack          | tmp
0 | <  |  [<,0]         |  ""
1 | <  |  [<,0], [<,1]  | "<"
2 | >  |  [<,0]         | "<>"
3 | >  |                |  "<>"


=======================

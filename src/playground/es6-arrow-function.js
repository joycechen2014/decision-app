const squar = function(x) {
    return x * x;
}

//const squarArrow = (x) => {
//    return x * x;
//}

//const squarArrow= (x) => x * x;

//console.log(squarArrow(8));

// getFirstName('Mike Smith') -> "Mike"
// create regular arrow function
// create arrow function using shorthand syntax

const getFirstName = (name) => name.split(" ")[0];
console.log(getFirstName("Mike Smith"));
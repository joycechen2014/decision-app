// challenge area

const multiplier = {
    // numbers - array of numbers
    // multiplyBy - single number
    // multiply - return a new array where the number ahve benn multiplied
    multiplBy : 2,
    numbers:[1,2,3],
    mutiply(){
        return this.numbers.map((num) => this.multiplBy * num);
     
        //this.numbers.forEach((num) => {
        //    console.log(this.multiplBy * num);
        //});
    }
    

}
console.log( multiplier.mutiply());
//console.log(multiplier)
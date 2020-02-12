module.exports = {
    prime: function()
    {
        return 'Result = ' + calculatePrime();
    }
};

var primeString = ""
// It is partially a good solution, because 15 an other numbers are not prime. Pending this functionality for next commit
function calculatePrime(){
    for(i = 0; i < 100; i++){
        if(i % 2 != 0){
            primeString += (i + " ");
        }
    }
    return primeString;
}
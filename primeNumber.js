module.exports = {
    prime: function () {
        return calculatePrime();
    }
};
// It is partially a good solution, because 15 an other numbers are not prime. Pending this functionality for next commit
function calculatePrime() {
    var count = 0;
    var primeString = "";

    for (i = 1; i <= 100; i++) {
        count = 0;
        for (j = 1; j <= i; j++) {
            var division = i / j;
            if (Number.isInteger(division)) {
                count++;
            }
        }
        if (count == 2) {
            primeString += (i + " ");
        }
    }
    return 'Prime numbers from 1 to 100: ' + primeString;
}
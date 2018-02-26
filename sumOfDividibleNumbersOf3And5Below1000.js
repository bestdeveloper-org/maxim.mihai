    
    
    var numbers = []
    for (var i = 0; i < 1000; i++) {
    numbers.push(i)
    }

    function sum(array) {
    var output = []
    for (var j = 0; j < array.length; j++) {
        if (array[j] % 3 === 0) {
        output.push(array[j])
        } else if (array[j] % 5 === 0){
        output.push(array[j])
        } else {
        output.push()
        }
    }
    function littleSum(output) {
        var sum = 0
        for (var k = 0; k < output.length; k++) {
        sum += output[k]
        }
        return sum
    }
    return littleSum(output)
    }

    // sum(numbers) : 233168
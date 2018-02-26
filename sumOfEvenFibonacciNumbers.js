

    var numbers = [];
    for (var i = 0; i < 32; i++) {
      numbers.push(i);
    }
    
    function fiboSum(array) {
      function fiboThem(array) {
        var output = [];
        var n = array.length;
        function fib(n) {
          if (n < 2) {
            return [1];
          } else if (n < 3) {
            return [1, 2];
          }
          var a = fib(n - 1);
          a.push(a[n - 2] + a[n - 3]);
          return a;
        }
        return (output = fib(n));
      }
    
      var fiboNumbers = fiboThem(numbers);
    
      function even(array) {
        var output = [];
        for (var k = 0; k < array.length; k++) {
          if (array[k] % 2 === 0) {
            output.push(array[k]);
          }
        }
        return output;
      }
    
      var evenFiboNumbers = even(fiboNumbers);
    
      function sum(array) {
        var sum = 0;
        for (var m = 0; m < array.length; m++) {
          sum += array[m];
        }
        return sum;
      }
    
      return (sumOfEvenFiboNumbers = sum(evenFiboNumbers));
    }

    // fiboSum(numbers) : 4613732
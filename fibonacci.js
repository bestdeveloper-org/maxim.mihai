


        function fibonacciFor(n) {
          if (n < 2) {
            return [1];
          } else if (n < 3) {
            return [1, 2];
          }
          var a = fib(n - 1);
          a.push(a[n - 2] + a[n - 3]);
          return a;
        }        
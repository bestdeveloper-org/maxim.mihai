

    var number = 600851475143;

function largestPrimeDividerOf(value) {
  var output;

  function primesUntil(value) {
    function isPrime(num) {
      if (num < 2) return false;
      for (var i = 2; i < num; i++) {
        if (num % i == 0) return false;
      }
      return true;
    }

    var primes = [];

    for (var j = 0; j < value; j++) {
      if (isPrime(j) == true) primes.push(j);
    }
    return primes;
  }

  var losPrimos = primesUntil(5 * Math.pow(10, 4));

  for (var k = 0; k < losPrimos.length; k++) {
    if (value % losPrimos[k] === 0) output = losPrimos[k];
  }

  return output;
}

// largestPrimeDividerOf(number) : 6857
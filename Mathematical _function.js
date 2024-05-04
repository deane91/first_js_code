function factorial() {

    var num = prompt("Please enter a number ");
    
    var fact ;
    var prime;


    // fatctorial
    if (num === 0 || num === 1) {
        fact =  1;
    } else {
        fact =  num * factorial(num - 1);
    }


    // Prime Number Check Function:   
    if (num <= 1) {
        prime="not prime" ;
    }

    /*for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            prime="not prime" ;
        }
        else   prime="prime"
    }*/
    alert("factorial of "+num+" : "+fact+" And it is "+prime);
}

// Example usage:
factorial();
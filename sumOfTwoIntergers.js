// Sum of Two Integers

// Given two integers a and b, return the sum of the two integers without using the operators + and -.


// Example 1:
// Input: a = 1, b = 2
// Output: 3

// Example 2:
// Input: a = 2, b = 3
// Output: 5


var getSum = function(a, b) {
    // original values
    // a = 3 (0011)
    // b = 5 (0101)

    //second round(new a & b)
    // a = 6 (0110)
    // b = 2 (0010)

    //third round(new a & b)
    // a = 4 (0100)
    // b = 4 (0100)

    //fourth round(new a & b)
    // a = 0 (0000)
    // b = 8 (1000)

    //fifth round(new a & b)
    // a = 8 (1000)
    // b = 0 (0000)

    // while loop begins if b is not 0
    while (b !== 0) {
        // b = 5
        // second loop 
        // b = 2
        // third loop
        // b = 4
        // fourth loop
        // b = 8
    let carry = (a & b) << 1;
    // bitwise AND operation 
    // (3 & 5) = 1 (binary:0001)
    //   0011 
    // + 0101
    // = 0001  
    // we shift te carry one position to the left using the shift operator (`<<`)
    // carry = 1<<1 = 2 (binary:0010)  (shifting the carry one postiion to the left effectively doubles its value)

    // second loop
    // (6 & 2) = 2(binary:0010)
    //   0110
    // + 0010
    // = 0010
    // carry = 2<<1 = 4(binary:0100)

    // third loop
    // (4 & 4) = 4(binary:0100)
    //   0100
    // + 0100
    // = 0100
    // carry = 4<<1 = 8(binary:1000)

    // fourth loop
    // (0 & 8) = 0(binary:0000)
    //   0000
    // + 1000
    // = 0000
    // carry = 0<<1 = 0(binary:0000)
    a = a ^ b;
    // update a by bitwise XOR operation (`^`)
    // a = 3 ^ 5 = 6(0110)
    //   0011
    // + 0101
    // = 0110

    //second loop
    // a = 6 ^ 2 = 4(binary:0100)
    //   0110
    // + 0010
    // = 0100

    //third loop
    // a = 4 ^ 4 = 0(binary:0000)
    //   0100
    // + 0100
    // = 0000

    //third loop
    // a = 0 ^ 8 = 8(binary:1000)
    //   0000
    // + 1000
    // = 1000
    b = carry;
    // update b with the value of carry: b = 2 (binary:0010)
    
    //second loop
    // update b with the value of carry: b = 4 (binary:0100)

    // third loop
    // update b with the value of carry: b = 8 (binary:1000)

    // fourth loop
    // update b with the value of carry: b = 0 (binary:0000)
  }
  
  return a;
  // a = 8
};
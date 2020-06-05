// delimiter to add strings as per requirement specs
export const delimiter = (strNumber) => {
    const str = strNumber.replace(/[^0-9\.]+/g, ",");
    return str.split(",");
};

// Complete logic of add Strings
export function add(strNumber) {
    if (strNumber.includes("-")) {
        throw new Error("negatives not allowed")
    }
  
    const sum = delimiter(strNumber)
      .map(function (elt) {
        return /^\d+$/.test(elt) ? parseInt(elt) : 0;
      })
      .reduce(function (a, b) {
        if (a <= 1000 && b <= 1000) {
          return a + b;
        } else if (a >= 1000 && b >= 1000) {
          return 0;
        } else if (b >= 1000) {
          return a;
        } else if (a >= 1000) {
          return b;
        }
      });
  
    return sum;
}

// Function to add strings 
export const addString = (str) => {
    try {
      const resultSum = add(str);
      return resultSum;
    } catch (e) {
      return e 
    }
};
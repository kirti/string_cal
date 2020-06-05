import { addString } from './calculator'
 
const case1 = addString("11,1,2");
console.log(
  "case1- The numbers in the string are separated by a comma 14 : ====",
  case1
);

// b. Empty strings should return 0
const case2 = addString("");
console.log("case2- Empty strings should return 0 : ====", case2);

// case 3 - The return type should be an integer

const case3 = addString("1,2,5");
console.log(
  "case3- nput: “1,2,5” - expected result: number  : ====",
  typeof case3
);

// case 4- nput: “1,2,5” - expected result: 8

const case4 = addString("1,2,5");
console.log("case4- nput: “1,2,5” - expected result: 8 : ====", case4);

const case5 = addString("1\n,2,3");
console.log("case5- nput: “1\n,2,3” - expected result: 6 : ====", case5);
const case6 = addString("1,\n2,4");
console.log(
  "case6- nput: “1,\n2,4 - expected resultexpected result: 7 : ====",
  case6
);

const case8 = addString("//;\n1;3;4");
console.log("case8-  expected resultexpected result 8 : ====", case8);

const case9 = addString("//$\n1$2$3");
console.log("case9-  expected resultexpected result 6 : ====", case9);

const case10 = addString("//@\n2@3@8");
console.log("case10-  expected result expected result 13: ====", case10);

const case11 = addString("2,1001");
console.log("case11 -  expected result expected result 2,1001: ====", case11);
const case12 = addString("10002,1001");
console.log("case12 - bonus   expected result expected result 0: ====", case12);

const case15 = addString("-2,1001");
console.log("case15 - bonus   negative: ====", case15);

const case13 = addString("//***\n1***2***3");
console.log(
  "case13 - bonus //***\n1***2***3 expected result expected result 6 ====",
  case13
);

const case14 = addString("//$,@\n1$2@3");
console.log(
  "case14 - bonus //***\n1***2***3 expected result expected result 6 : ====",
  case14
);
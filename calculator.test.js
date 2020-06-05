// S
import { addString, add } from './calculator'

describe("Calculator",  function(){
    it("should return zero when '' is passed", function(){
      expect(addString('')).toEqual(0);
    });

    it("should return 6 when '4,2' is passed", function(){
        expect(addString('4,2')).toEqual(6);
    });

    
    it("should return type of number when '1,2,5' is passed", function(){
        const checkType = typeof(addString('4,2'))
        expect(checkType).toEqual('number');
    });

    it("should return 6 when '1\n,2,3' is passed", function(){
        expect(addString('1\n,2,3')).toEqual(6);
    });

    it("should throw error when '-1,2,3' is passed", function(){
       expect( function(){ add('-1,2,3') } ).toThrow(new Error("negatives not allowed"));
    });

    it("should return 2 when '2,1001' is passed", function(){
        expect(addString('2,1001')).toEqual(2);
     });

 
  });
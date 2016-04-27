Tests

describe('fizzBuzzWoof',function(){
  it('Should return 1 when passed 1',function(){
    expect(fizzBuzzWoof(1)).toBe(1);
  });
  it('Should return 2 when passed 2',function(){
    expect(fizzBuzzWoof(2)).toBe(2);
  });
    it('Should return "fizz" when passed 3',function(){
    expect(fizzBuzzWoof(3)).toBe('fizz');
  });
      it('Should return "fizz" when passed 6',function(){
    expect(fizzBuzzWoof(6)).toBe('fizz');
  });
    it('Should return "fizz" when passed 9',function(){
    expect(fizzBuzzWoof(9)).toBe('fizz');
  });
    it('Should return "buzz" when passed 5',function(){
    expect(fizzBuzzWoof(5)).toBe('buzz');
  });
    it('Should return "buzz" when passed 10',function(){
    expect(fizzBuzzWoof(10)).toBe('buzz');
  });
    it('Should return "fizz" when passed 31',function(){
    expect(fizzBuzzWoof(31)).toBe("fizz");
  }); 
    it('Should return "fizz" when passed 31',function(){
    expect(fizzBuzzWoof(31)).toBe("fizz");
  }); 
    it('Should return "fizz" when passed 5308',function(){
    expect(fizzBuzzWoof(5308)).toBe("fizz");
  }); 
    it('Should return "buzz" when passed 50',function(){
    expect(fizzBuzzWoof(50)).toBe("buzz");
  });
    it('Should return "woof" when passed 17',function(){
    expect(fizzBuzzWoof(17)).toBe("woof");
  });
    it('Should return "woof" when passed 7',function(){
    expect(fizzBuzzWoof(7)).toBe('woof');
  });  
});

Source Code
    function isDivisble(i,x){
    if (i % x === 0) {
      return true;
    }
    }

function fizzBuzzWoof(i){
 
    if (isDivisible(i,3)){
      return "fizz";
    }
    if (i % 5 === 0) {
      return "buzz";
    }
    if (i % 7 === 0){
      return "woof";
    }
    if (i.toString().indexOf('3') !== -1){
      return "fizz";
    }  
    if (i.toString().indexOf('5') !== -1){
      return "buzz";
    } 
     if (i.toString().indexOf('7') !== -1){
      return "woof";
    } 
    return i;
}
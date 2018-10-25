function isValidWalk(walk) {
  
    var dirObj = {
      n:0,
      s:0,
      e:0,
      w:0,
      };
    
    var walkAns = '';
    
    for(var i = 0; i < walk.length; i++){
      switch (walk[i]){
        case 'n':
          dirObj.n = dirObj.n + 1;
          break;
        case 's':
          dirObj.s = dirObj.s + 1;
          break;
        case 'e':
          dirObj.e = dirObj.e + 1;
          break;
        case 'w':
          dirObj.w = dirObj.w + 1;
          break;
      } 
    }
    
    var distance = dirObj.n + dirObj.s + dirObj.e + dirObj.w;
    
    if( dirObj.n - dirObj.s == 0 && dirObj.e - dirObj.w == 0 && distance == 10){
      walkAns = true;
      }
    else{
      walkAns = false;
    };
    
    return walkAns;
  }

  module.exports = isValidWalk;

  // https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript
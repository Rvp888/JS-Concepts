
function outer() {
  let a = {};
  // console.log(a);
  function inner (value) {
    if(a[`${value}`]){
      console.log('from catch')
      return a[`${value}`];
    }
    
    let b = 2;
    for(let i=0; i<value; i++){
      for(let j=i+1; j<value; j++){
        for(let k=j+1; k<value; k++){
          b++;
        }
      }
    }
    a[`${value}`] = b;
    
    return b;
  }
  
  // return inner();
  
  console.log(inner(999));
  // console.log(a);
  console.log(inner(5));
  // console.log(a);
  console.log(inner(999));
  // console.log(a);
}

outer();

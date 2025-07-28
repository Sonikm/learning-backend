console.log("Sum function calls");

let x = 10;

function sumValue(y){
  return x+y;
}

//* This is a commonjs module
// to export only one thing
// module.exports = sumValue;

// export many
module.exports = {sumValue, x: x};

//! By default all functions and varialbles are protected thats why we can not use without exporting it

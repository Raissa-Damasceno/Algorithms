console.log("It's working");

let counter = 0;

const user = {};

function inception() {
    console.log(counter)
  if (counter > 3) {
    return "done!";
  }
  debugger;
  counter++;
  return inception();
}

//inception()

function forLoop (tab){

  for (let i = 0; i < 25; i++) {
if (i ==1){
  tab.push("I am 1 strange loop." )
  }

else {
    tab.push("I am ${i} strange loops.")
  }
}
return tab;
}

function whileLoop(nombre){
  while (nombre > 0) {
  console.log(--nombre)
}
return "done";
  }
  function maybeTrue() {
    return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
  }

  function doWhileLoop(tab){
    do {
    tab.pop();
  } while (tab.length > 0 && maybeTrue());

  return tab;
    }


for(var i = 99; i >= 0; i--);
var j = i--;
 {
  if(i >= 2) {
    console.log(i + ' ' + "bottles of beer on the wall" + ' ' + i + ' ' + "bottles of beer. Take one down pass it around" + ' ' + j + ' ' +
"bottles of beer on the wall.");
  }
  else if (i >= 1) {
    console.log(i + ' ' + "bottle of beer on the wall" + ' ' + i + ' ' + "bottle of beer. Take one down, pass it around" + ' ' + j + ' '
+ "bottles of beer on the wall.");
  }
  else if (i >= 0){
    console.log("no more bottles of beer on the wall. No more bottles of beer. Go to the store and by some more 99 bottles of beer on the wall.");
  }
}

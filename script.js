let searchVal = ' '

function onSearchChange(input){
  searchVal = document.getElementById('searchbar').value
  searchVal = 'https://www.' + searchVal
}

// changeFrame() {
//   document.getElementById('frame').src = searchVal;
// }

window.addEventListener("keydown", function(event) {
   if(event.key == 'Enter'){
    document.getElementById('frame').src = searchVal;
   }
 }, true);

/*----------------Images---------------*/

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName('grid-item');
var modalImg = document.getElementById("img01");
var i;

for (i = 0; i < img.length; i++) {
    img[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.getElementsByTagName('img')[0].src;
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

/*-----------------Media Queries----------------*/
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('myModal');
  const modalImg = document.getElementById("img01");
  const gridItems = document.querySelectorAll('.grid-item');

  gridItems.forEach(item => {
      item.addEventListener('click', function() {
          modal.style.display = "block";
          modalImg.src = this.getElementsByTagName('img')[0].src;
          const closeIcon = document.querySelector('.close');
          if (!closeIcon) {
              addCloseIcon(modal); // Dynamically add close icon if not already present
          } else {
              closeIcon.style.display = "block"; // Show close icon if already present
          }
      });
  });

  // Function to dynamically add close icon
  function addCloseIcon(modal) {
      const closeIcon = document.createElement('span');
      closeIcon.classList.add('close');
      closeIcon.innerHTML = '&times;';
      closeIcon.addEventListener('click', function() {
          modal.style.display = "none";
      });
      modal.appendChild(closeIcon);
  }
});

/*------------Mobile media query-------------*/

    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementsByClassName('grid-item');
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    for (var i = 0; i < img.length; i++) {
        img[i].onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.children[0].src;
        }
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

     // Get the modal
     var modal = document.getElementById('myModal');

     // Get the image and insert it inside the modal - use its "alt" text as a caption
     var img = document.getElementsByClassName('grid-item');
     var modalImg = document.getElementById("img01");
     var captionText = document.getElementById("caption");
     for (var i = 0; i < img.length; i++) {
         img[i].onclick = function(){
             modal.style.display = "block";
             modalImg.src = this.children[0].src;
         }
     }
 
     // Get the <span> element that closes the modal
     var span = document.getElementsByClassName("close")[0];
 
     // When the user clicks on <span> (x), close the modal
     span.onclick = function() {
         modal.style.display = "none";
     }
 
     // When the user clicks anywhere outside of the modal, close it
     window.onclick = function(event) {
         if (event.target == modal) {
             modal.style.display = "none";
         }
     }














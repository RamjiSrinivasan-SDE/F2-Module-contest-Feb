const Createpostelement = document.getElementById('Createpost');


// Get the modal box and the button that opens it
let modal = document.getElementById("myModal");
let btn = document.getElementById("Createpost");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }


// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

var form = modal.querySelector('form');
var postsContainer = document.getElementById('blogarea');

// Add an event listener to the form submit button
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  // Get the input values
  var title = document.getElementById('blog-title').value;
  var description = document.getElementById('blog-description').value;

  // Create a new blog post object
  var post = {
    title: title,
    description: description
  };

  // Add the post to the main page
  addBlogPost(post);

  // Close the modal
  modal.style.display = "none";

  button.textContent = 'Edit';
  button.id =Editbutton ;
  button.addEventListener("click", handleEdit);

//   // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
});


function addBlogPost(post) {
    // Create a new blog post element
    var postElement = document.createElement('div');
    postElement.classList.add('blog-post');
    postElement.innerHTML = '<h3>' + post.title + '</h3><p>' + post.description + '</p>';
  
    // Append the post element to the container
    postsContainer.appendChild(postElement);
  }




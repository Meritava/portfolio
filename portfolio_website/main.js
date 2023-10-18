const menuButton = document.getElementById('menuButton');
const closeButton = document.getElementById('closeButton');
const sideBar = document.querySelector('.sideBar');
//a function to make the navbar responsive
menuButton.addEventListener('click', function() {
    sideBar.style.display = 'flex';
});
closeButton.addEventListener('click', function() {
    sideBar.style.display = 'none';
})

//a function to hide the navbar on large screen when opened
function hideSidebar() {
    if(window.innerWidth >= 700 && sideBar.style.display === 'block') {
       
        sideBar.style.display = 'none';
    } else {
        sideBar.style.display = 'none';
    }
}

window.addEventListener('resize',hideSidebar);
hideSidebar();

//a function to link the contact section to email
document.getElementById("contactForm").addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values from the form fields
    const recipientEmail = "meritgeorge1@gmail.com"; // Replace with the recipient's email address
    const subject = "Contact from " + document.getElementById("name").value;
    const body = document.getElementById("message").value;

    // Create a mailto link with recipient, subject, and body
    const mailtoLink = "mailto:" + recipientEmail +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

    // Open the user's email client with the pre-filled information
    window.location.href = mailtoLink;
});
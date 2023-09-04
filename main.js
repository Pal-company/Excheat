function findWord() {
    let searchInput = document.getElementById('searchInput');
    let searchValue = searchInput.value;
    let bodyText = document.body.innerHTML;
    if(searchValue && bodyText.includes(searchValue)) {
        let highlightedText = bodyText.replace(new RegExp(searchValue, 'g'), `<mark id="highlighted" style="background-color: yellow; color: black;">${searchValue}</mark>`);
        document.body.innerHTML = highlightedText;
        alert('Word found and highlighted!');
        // Scroll to the highlighted word
        document.getElementById('highlighted').scrollIntoView({behavior: "smooth"});
        // Unhighlight the word after 7 seconds
        setTimeout(function() {
            let originalText = document.body.innerHTML.replace(new RegExp(`<mark id="highlighted" style="background-color: yellow; color: black;">${searchValue}</mark>`, 'g'), `${searchValue}`);
            document.body.innerHTML = originalText;
        }, 7000);
    } else {
        alert('Word not found!');
    }
}


window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}



let toggleButton = document.querySelector('.navbar-toggler');
toggleButton.addEventListener('click', function() {
    let navbarMenu = document.querySelector('#navbarSupportedContent');
    navbarMenu.classList.toggle('show');
});








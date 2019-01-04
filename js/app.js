const content = document.querySelector('.post__article');
const insertTarget = document.querySelector('.page__header');
scrollnav.init(content, {
    debug: false,
    insertTarget: insertTarget,
    insertLocation: 'append'
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("up").style.display = "block";
  } else {
    document.getElementById("up").style.display = "none";
  }
  
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}
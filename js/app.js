const content = document.querySelector('.post__article');
const insertTarget = document.querySelector('.page__header');
scrollnav.init(content, {
    debug: false,
    insertTarget: insertTarget,
    insertLocation: 'append'
});


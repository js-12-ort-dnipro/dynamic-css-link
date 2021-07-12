

setTimeout(function(){

    let headTag = document.head;

    let linkTag = document.createElement('link');
        linkTag.rel = 'stylesheet';
        linkTag.href = './style.css';

    headTag.insertAdjacentElement('beforeend', linkTag);

}, 5000);


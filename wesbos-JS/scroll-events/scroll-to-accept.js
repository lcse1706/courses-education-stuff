const terms = document.querySelector('.terms-and-conditions');

const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');


function observerCallback(payload) {
    if(payload[0].intersectionRatio === 1){
        button.disabled = false;
        //stop observing the button
        observer.unobserve(terms.lastElementChild);
    }
    // else{
    //     button.disabled = true;
    // }
     // payload[0] becouse we can observe many things on the page
}
const observer = new IntersectionObserver(observerCallback, {
    root: terms,
    threshold: 1,
});

// observer.observe(watch);
observer.observe(terms.lastElementChild);


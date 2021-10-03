const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPannels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event){
    //hide all tab panels
    tabPannels.forEach(function(panel){
        panel.hidden = true;
    } )
    //mark all buttons as unselected
    tabButtons.forEach(function(tab){
    // tab.ariaSelected = false;
    tab.setAttribute('aria-selected', false);
})
    //mark the clicked tab as selected

    // event.currentTarget.ariaSelected = true;
    event.currentTarget.setAttribute('aria-selected', true);
    
    //find assosiated tabPanel and show it

    const id = event.currentTarget.id;

    // Wes method 1
    // const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`)
    // tabPanel.hidden = false;

    // Wes method 2
    tabPannels.find(panel => {
        if (panel.getAttribute('aria-labelledby') === id){
            panel.hidden = false;
        }
    });

    //My way
    // tabPannels.forEach(function(panel){
    //     if(panel.getAttribute(['aria-labelledby']) === event.currentTarget.id){
    //         panel.hidden = false;
    //         }
    //     })


}

tabButtons.forEach(button => {
    button.addEventListener('click', handleTabClick)
})
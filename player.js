//Create XMLHttpRequest object
const xhr = new XMLHttpRequest();

//onlad is an event... like a click event :)
xhr.onload = function() {
    if(xhr.status === 200) {
        const data  = JSON.parse(xhr.responseText);
    }
};

xhr.open("GET", "player.json",);
xhr.send();
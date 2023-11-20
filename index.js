//version asynchrone

async function getArticles(callback) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET"
    });
    let result = await response.json();
    console.log(result);
    callback(result, displayArticles);
    }

function mapTab(tab, callback) {
    let tab_titles = tab.map(e=>e.title);
    console.log(tab_titles);
    callback(tab_titles);
}

function displayArticles(tab) {
    let content = document.getElementById("content");
    for (let i=0; i<tab.length; i++){
        let html_title = "<li class='title_article'>" + tab[i] + "</li>";
        content.innerHTML += html_title;
    }
}

getArticles(mapTab);


//version synchrone
/* function showListPost(list){
    console.log(list);
    let content = document.getElementById("content_2");
    for (let i=0; i<list.length; i++){
        let html_title = "<li class='title_article'>" + list[i].title + "</li>";
        content.innerHTML += html_title;
    }
}

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((listPost) => showListPost(listPost)); */


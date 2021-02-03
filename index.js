console.log('this is java script news project...');
// cde5abf28d9d4709837b1e794bf91221
let newsAccordion = document.getElementById('accordionNews');
let source = 'bbc-news';
let apiKey = 'cde5abf28d9d4709837b1e794bf91221';
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let str = "";
        // console.log(articles);
        articles.forEach(function (element, index) {
            // console.log(articles.news);

            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index + 1}:</b> ${element.title}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#accordionNews">
                                <div class="card-body"> ${element.content}. <a href="${element.url}" style="text-decoration:none;" target="_blank"  >Click here to learn more</a>  </div>
                            </div>
                        </div>`;
            str += news;
        });
        newsAccordion.innerHTML = str;
    } else {
        alert("Some problem occured!!! please try again...(please try to open it trough localhost)");
    }
}
xhr.send();
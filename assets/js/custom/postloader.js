
var postsList = document.getElementById("posts-go-here");
var miniPostsList = document.getElementById("mini-posts-go-here");
var allPosts = [];

function loadPosts() {
    localStorage.clear();
    fetch("./news.json", {"mode": "no-cors"})
        .then(response => response.json())
        .then(json => {
            let file = JSON.parse(JSON.stringify(json));
            let postsJson = file.posts;
        
            Object.keys(postsJson).forEach(function(key) {
                allPosts.push(getPostObj(postsJson[key]))
                if (allPosts.length == Object.keys(postsJson).length) {
                    addPosts();
                }
            });
        })
}

function addPosts() {
    let element = "";
    let miniElement = "";
    let popularElement = "";

    for (var i = 0; i < allPosts.length; i++) {
        let title = allPosts[i].title;
        let author = allPosts[i].author;
        let description = allPosts[i].description;
        let category = allPosts[i].category;
        let content = allPosts[i].content;
        let link = allPosts[i].link;
        let image = allPosts[i].image;

        popularElement += '<div class="mb-20 whats-right-single"><div class=whats-right-img><img alt="" width="50" height="50" src='+ image + '></div><div class=whats-right-cap><h4><a href=' + link + '>' + title + '</a></h4><p>Posted by ' + author + '</div></div>'

        if (content == "main") {
            element += '<div class="single-slider"><div class="trending-top mb-30"><div class="trend-top-img"><img src="' 
            + image +  '" alt=""><div class="trend-top-cap"><span class="bgr" data-animation="fadeInUp" data-delay=".2s" data-duration="1000ms">' 
            + category + '</span><h2><a href="' + link + '" data-animation="fadeInUp" data-delay=".4s" data-duration="1000ms">' 
            + title + '</a></h2><p data-animation="fadeInUp" data-delay=".6s" data-duration="1000ms">Posted by ' 
            + author + '</p><p data-animation="fadeInUp" data-delay=".6s" data-duration="1000ms">' + description + '</p></div></div></div></div>'

            postsList.innerHTML = element;
        } else {
            miniElement += '<div class="col-lg-12 col-md-6 col-sm-6"><div class="mb-30 trending-top"><div class=trend-top-img><img alt="" src=' 
            + image + '><div class="trend-top-cap trend-top-cap2"><span class=bgb>' + category 
            + '</span><h2><a href=' + link + '>' + title + '</a></h2><p>Posted by ' + author + '</p></div></div></div></div>'

            miniPostsList.innerHTML = miniElement;
        }
    }
}

function getPostObj(json) {
    var post = {
        title: json.title,
        category: json.category,
        description: json.description,
        author: json.author,
        content: json.content,
        link: json.link,
        image: json.image
    }
    return post;
}
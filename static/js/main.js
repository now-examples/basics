function getHostName(url) {
  var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
  if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
  return match[2];
  }
  else {
      return null;
  }
}

function main () {
  var recentPostsList = document.querySelector(".js-posts");

  if ("content" in document.createElement("template")) {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(response => response.json())
      .then(json => {
        return Promise.all(json.slice(0,5).map(postId => {
          return fetch(`https://hacker-news.firebaseio.com/v0/item/${postId}.json`)
            .then(postRes => postRes.json())
            .then(postData => {
              var postTemplate = document.importNode(
                recentPostsList.querySelector("template").content,
                true
              );

              console.log(postData)

              var url = postData.url || `https://news.ycombinator.com/item?id=${postData.id}`
    
              postTemplate.querySelector(".js-post__title").textContent =
                postData.title;
              postTemplate.querySelector(".js-post__title").href = url
              postTemplate.querySelector(".js-post__ext-link").href =
                `https://news.ycombinator.com/from?site=${getHostName(url)}`;
              postTemplate.querySelector(".js-post__ext-link").textContent = getHostName(url)
              postTemplate.querySelector(".js-post__points").textContent = postData.score
              postTemplate.querySelector(".js-post__user").textContent = postData.by
              postTemplate.querySelector(".js-post__user").href = `https://news.ycombinator.com/user?id=${postData.by}`
              postTemplate.querySelector(".js-post__link").href = `https://news.ycombinator.com/item?id=${postData.id}`
              postTemplate.querySelector(".js-post__time").textContent = timeago.format(postData.time*1000);
              postTemplate.querySelector(".js-post__comments").textContent = `${postData.descendants} ${postData.descendants > 1 || postData.descendants === 0 ? "comments" : "comment"}`
    
              recentPostsList.appendChild(postTemplate);
            })
        }))
      })
    }
}
  
  main()
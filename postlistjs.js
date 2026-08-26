const postList = document.getElementById("post-list");
postList.innerHTML += "<ul>"
fetch("posts.txt")
    .then(response => response.text())
    .then(text => {
        console.log(text);
        let linelist = text.split(/\r\n|\n/);
        for (let line of linelist) {
            let plslist = line.split("|");
            let date = plslist[0]
            postList.innerHTML += '<li><a href="posts/' + date + '.html">' + plslist[0] + "|" + plslist[1] + "</a></li><br>";
        }
        postList.innerHTML += "</ul>"
    })

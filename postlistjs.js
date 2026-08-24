const postList = document.getElementById("post-list");

fetch("posts.txt")
    .then(response => response.text())
    .then(text => {
        console.log(text);
    })
    .then(txt => {
        let linelist = txt.split(/\r\n|\n/);
        for (let line of linelist) {
            let plslist = line.split("|");
            let date = plslist[0]
            document.getElementById("post-list").innerHTML = '<a href="posts/' + date + '.html">' + plslist[0] + "|" + plslist[1] + </a>;
        }
    });

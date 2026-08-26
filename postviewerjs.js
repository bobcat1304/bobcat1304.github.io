const articleht = document.getElementById("postarticle");
const pnbutton = document.getElementById("prevnnext");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const datehpn = urlParams.get('date');

fetch("blog/" + datehpn + ".html")
    .then(response => response.text())
    .then(text => {
        console.log(text);
        articleht.innerHTML += datehpn
        articleht.innerHTML += text
    })

fetch("posts.txt")
    .then(response => response.text())
    .then(text => {
        let herewhere = text.indexOf(datehpn)
        let pnextwhere = text.lastIndexOf("\n", herewhere)
        let nextwhere = text.lastIndexOf("\n", pnextwhere - 1)
        let pprevwhere = text.indexOf("\n", herewhere)
        let prevwhere = text.indexOf("\n", pprevwhere + 1)
        //・・番目の文字って言おうのが返り値。prevwhere番目からnextwhere番目の文字列をpnbuttonに出したらいい。リンク付もしないと。
        let prevlineouttext = text.substring(prevwhere, pprevwhere)
        console.log(prevlineouttext, prevwhere, pprevwhere)
        let nextlineouttext = text.substring(nextwhere, pnextwhere)
        console.log(nextlineouttext, nextwhere, pnextwhere)
        let prevlineoutsplit = prevlineouttext.split("|");
        let nextlineoutsplit = nextlineouttext.split("|");
        pnbutton.innerHTML += "<a href=\"postviewer.html?date=" + prevlineoutsplit[0] + '">Previous post' + prevlineouttext + "</a>"
        pnbutton.innerHTML += "<div style=\"text-align: right\"><a href=\"postviewer.html?date=" + nextlineoutsplit[0] + '">Next post' + nextlineouttext + "</a></div>"
    })

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
        let herewhere = text.indexOf(date)
        let pprevwhere = text.lastIndexOf("\n", herewhere)
        let prevwhere = text.lastIndexOf("\n", pprevwhere)
        let pnextwhere = text.IndexOf("\n", herewhere)
        let nextwhere = text.IndexOf("\n", pnextwhere)
        //・・番目の文字って言おうのが返り値。prevwhere番目からnextwhere番目の文字列をpnbuttonに出したらいい。リンク付もしないと。
        let prevlineouttext = text.substring(prevwhere, pprevwhere)
        console.log(prevlineouttext)
        let nextlineouttext = text.substring(nextwhere, pnextwhere)
        console.log(nextlineouttext)
        let prevlineoutsplit = prevlineouttext.split("|");
        let nextlineoutsplit = nextlineouttext.split("|");
        pnbutton.innerHTML += "Previous post <a href=\"postviewer.html?date=" + prevlineoutsplit[0] "\">" + prevlineouttext + "</a>"
        pnbutton.innerHTML += "Next post <a href=\"postviewer.html?date=" + nextlineoutsplit[0] "\">" + nextlineouttext + "</a>"
    })

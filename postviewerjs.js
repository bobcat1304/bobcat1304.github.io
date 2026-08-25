const articleht = document.getElementById("postarticle");
const pnbutton = document.getElementById("prevnnext");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const datehpn = urlParams.get('date');

fetch("blog/" + datehpn ".html")
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
    })

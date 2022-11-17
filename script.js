function loadNav(curPage)
{
    var nav = document.getElementsByTagName("header")[0];
    nav.innerHTML = '<nav> <img src="images/logo.png" width="64" height="64">' +
        '<div class="nav">' +
           '<a id="changelogs" href="changelogs.html">Changelogs</a>'+ 
           '<a id="downloads" href="downloads.html">Downloads</a>'+ 
           '<a id="homepage" href="index.html">Homepage</a>'+ 
           '</div>'+ 
           '</nav>'+ 
           '<h1>FNF<br>MOD<br>COLLECTION</h1>';

    switch (curPage)
    {
        case "changelogs":
            document.getElementById("changelogs").classList.add("selected");
            break;
        case "downloads":
            document.getElementById("downloads").classList.add("selected");
            break;
        case "homepage":
            document.getElementById("homepage").classList.add("selected");
            break;
    }
}
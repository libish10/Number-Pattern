/*
1
1 2
1 2 3
1 2
1 */
function numberPattern5(num, heading, pos) {
    var i, j;
    var resHtml = "";
    var pTag = "";
    var title = heading;
    for (i = 1; i < num; i++) {
        for (j = 1; j <= i; j++) {
            resHtml += "<span>" + j + "</span>";
        }
        pTag += "<p>" + resHtml + "</p>";
        resHtml = "";
    }
    for (i = num; i >= 1; i--) {
        for (j = 1; j <= i; j++) {
            if ((i + j) <= (2 * num)) {
                resHtml += "<span>" + j + "</span>";
            }
        }
        pTag += "<p>" + resHtml + "</p>";
        resHtml = "";
    }
    title += pTag;
    document.getElementById(pos).innerHTML = title;
}
var heading = "<h2>Number Pattern</h2>"
numberPattern5(5, heading, "five");

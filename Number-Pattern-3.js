/*
1 2 3 4 5  5 4 3 2 1
1 2 3 4 4 3 2 1
1 2 3 3 2 1
1 2 2 1
1 1 */
function numberPattern3(num, heading, pos) {
    var i, j, k;
    var title = heading;
    var resHtml = "";
    var pTag = "";
    for (i = 0; i < num; i++) {
        for (j = 1; i + j < (num + 1); j++) {
            resHtml += "<span>" + j + "</span>";
        }
        for (k = (num - i); k >= 1; k--) {
            resHtml += "<span>" + k + "</span>";

        }

        pTag += "<p>" + resHtml + "</p>";
        resHtml = " ";
    }
    title += pTag;
    document.getElementById(pos).innerHTML = title;
}
heading = "<h2>Number Pattern</h2>";
numberPattern3(5, heading, "three");
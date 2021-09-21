/*
1 1 1 1 1
2 2 2 2
3 3 3
4 4
5
 
*/
function numberPattern6(num,heading,pos) {
    var i,j;
    var title=heading;
    var pTag="";
    var resHtml="";
    for(i=1;i<=num;i++) {
        for(j=1;(i+j)<=(num+1);j++) {
            resHtml+="<span>"+i+"</span>";
        }
        pTag+="<p>"+resHtml+"</p>";
        resHtml=" ";
    }
    title+=pTag;
    document.getElementById(pos).innerHTML=title;
}
var heading="<h2>Number Pattern</h2>"
numberPattern6(5,heading,"six");
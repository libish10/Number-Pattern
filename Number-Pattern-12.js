/*
1 2 3 4 5
2 3 4 5
3 4 5
4 5
5
*/
function numberPattern12(num,heading,pos) {
    var i,j;
    var title=heading;
    var pTag="";
    var resHtml="";
    for(i=1;i<=num;i++) {
        for(j=i;j<=num;j++) {
            resHtml+="<span>"+j+"</span>";

        }
        pTag+="<p>"+resHtml+"</p>";
        resHtml=" ";
    }
    title+=pTag;
    document.getElementById(pos).innerHTML=title;
}
var heading="<h2>Number Pattern</h2>"
numberPattern12(5,heading,"twelve");
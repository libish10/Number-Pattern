/*
1
1 2
1 2 3
1 2 3 4 
1 2 3 4 5
*/
function numberPattern8(num,heading,pos) {
    var i,j;
    var title=heading;
    var pTag="";
    var resHtml="";
    for(i=1;i<=num;i++) {
        for(j=1;j<=i;j++) {
            resHtml+="<span>"+j+"</span>";
        }
        pTag+="<p>"+resHtml+"</p>";
        resHtml=" ";
    }
    title+=pTag;
    document.getElementById(pos).innerHTML=title;
}
var heading="<h2>Number Pattern</h2>"
numberPattern8(5,heading,"eight");
/*
5
5 4
5 4 3
5 4 3 2
5 4 3 2 1
*/
function numberPattern11(num,heading,pos) {
    var i,j;
    var title=heading;
    var pTag="";
    var resHtml="";
    for(i=num;i>=1;i--) {
        for(j=num;j>=i;j--) {
            resHtml+="<span>"+j+"</span>";
        }
        pTag+="<p>"+resHtml+"</p>";
        resHtml=" ";
    }
    title+=pTag;
    document.getElementById(pos).innerHTML=title;
}
var heading="<h2>Number Pattern</h2>"
numberPattern11(5,heading,"eleven");
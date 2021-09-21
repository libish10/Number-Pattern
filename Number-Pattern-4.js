/*
01
01 02
01 02 03
01 02 03 04
01 02 03 04 05*/
function numberPattern4(num,heading,pos) {
    var i,j;
    var resHtml="";
    var pTag="";
    var title=heading;
    for(i=1;i<=num;i++) {
        for(j=1;j<=i;j++) {
            resHtml+="<span>"+"0"+j+"</span>";
        }
        pTag+="<p>"+resHtml+"</p>";
        resHtml="";
    }
    title+=pTag;
    document.getElementById(pos).innerHTML=title;
}
var heading="<h2>Number Pattern</h2>"
numberPattern4(5,heading,"four");

/*
1 
2 3
4 5 6
7 8 9 10
11 12 13 14 15

*/
function numberPattern7(num,heading,pos) {
    var i,j,l=1;
    var title=heading;
    var pTag="";
    var resHtml="";
    for(i=1;i<=num;i++) {
        for(j=1;j<=i;j++) {
            
            resHtml+="<span>"+l+"</span>";
            l=l+1
        }
        pTag+="<p>"+resHtml+"</p>";
        resHtml=" ";
    }
    title+=pTag;
    document.getElementById(pos).innerHTML=title;
}
var heading="<h2>Number Pattern</h2>"
numberPattern7(5,heading,"seven");
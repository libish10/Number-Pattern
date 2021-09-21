/*
1
0 1
1 0 1
0 1 0 1
1 0 1 0 1
*/
function numberPattern10(num,heading,pos) {
    var i,j;
    var title=heading;
    var pTag="";
    var resHtml="";
    for(i=1;i<=num;i++) {
        for(j=1;j<=i;j++) {
            if ((i+j)%2==0) {
                 resHtml+="<span>"+"1"+"</span>";
            }
            else
            {
                resHtml+="<span>"+"0"+"</span>";
            }
        }
        pTag+="<p>"+resHtml+"</p>";
        resHtml=" ";
    }
    title+=pTag;
    document.getElementById(pos).innerHTML=title;
}
var heading="<h2>Number Pattern</h2>"
numberPattern10(5,heading,"ten");
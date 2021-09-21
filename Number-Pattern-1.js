/*
1 
1 2 1
1 2 3 2 1
*/

function numberPattern2(num,heading,pos) {
    var i,j,k;
    var title=heading;
    var pTag="";
    var resHtml="";
    for(i=1;i<=num;i++) {
        for(j=1;j<=i;j++) {
            resHtml+="<span>"+j+"</span>";
        }
        for(k=(i-1);k>=1;k--) {
            resHtml+="<span>"+k+"</span>";
        }
        pTag+="<p>"+resHtml+"</p>";
        resHtml=" ";
    }
    title+=pTag;
    document.getElementById(pos).innerHTML=title;
}
heading="<h2>Number Pattern</h2>";
numberPattern2(5,heading,"one");
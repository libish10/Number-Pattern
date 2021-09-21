/*
1 1
1 2 2 1
1 2 3 3 2 1 
1 2 3 4 4 3 2 1*/ 
function numberPattern(num,heading,pos) {
    var title=heading;
    var i,j,k;
    var resHtml="";
    var pTag="";
   for(i=1;i<=num;i++) {
        for(j=1;j<=i;j++) {
            resHtml+="<span>"+j +"</span>";
        }
        for(k=i;k>=1;k--) {
            resHtml+="<span>"+k +"</span>";
        }
        pTag+="<p>"+resHtml+"</p>";
        resHtml=" ";
    }
    title+=pTag;
    document.getElementById(pos).innerHTML=title;
}
heading="<h2>Number Pattern</h2>";
numberPattern(5,heading,"two");
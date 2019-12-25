var bb = document.getElementsByClassName('subject-item');
var txtCSV = '';
for(i=bb.length-1; i>=0; i--){
var objLink=(bb[i].getElementsByClassName('nbg'))[0].href;
txtCSV += objLink + ', ';
var imgSrc=(bb[i].getElementsByTagName('img'))[0].src;
txtCSV += imgSrc + ', ';
var infoDiv=bb[i].getElementsByClassName('info');
var titleTxt=(infoDiv[0].getElementsByTagName('a'))[0].title;
txtCSV += titleTxt + ', ';
var pubInfo=(infoDiv[0].getElementsByClassName('pub'))[0].textContent.trim();
txtCSV += pubInfo + ', ';
var spans=infoDiv[0].getElementsByTagName('span');
for(j=0; j<spans.length; j++){
if((spans[j].className).indexOf('rating')==0){
var ratingNum = (spans[j].className).substr((spans[j].className).indexOf('rating')+6,1);
txtCSV += ratingNum + ', ';
}
}
var readDate=(infoDiv[0].getElementsByClassName('date'))[0].textContent;
readDate = (readDate.substr(0, readDate.indexOf('读过'))).trim();
txtCSV += readDate + ', ';
var comment=(infoDiv[0].getElementsByClassName('comment'))[0].textContent.trim();
if(comment){
txtCSV += comment;
}
else{
txtCSV += ' ';
}

txtCSV += '\r\n ';

}
console.log(txtCSV);

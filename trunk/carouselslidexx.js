function labelthumbs(json){for(var i=0;i<numpostss;i++){var entry=json.feed.entry[i];var posttitle=entry.title.$t;var posturl;var postauthor=entry.author[0].name.$t;if(i==json.feed.entry.length)break;for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='replies'&&entry.link[k].type=='text/html'){var commenttext=entry.link[k].title;var commenturl=entry.link[k].href;}
if(entry.link[k].rel=='alternate'){posturl=entry.link[k].href;break;}}
var thumburl;try{thumburl=entry.gform_foot.url;}catch(error){s=entry.content.$t;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+ 5);d=s.substr(b+ 5,c- b- 5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){thumburl=d;}else thumburl='http://3.bp.blogspot.com/-O-vjxP03hYo/UXVtH90_iQI/AAAAAAAAAG4/60hz9Rn5FWA/s1600/No+Image+1.gif';}
var postdate=entry.published.$t;var cdyear=postdate.substring(0,4);var cdmonth=postdate.substring(5,7);var cdday=postdate.substring(8,10);var monthnames=new Array();monthnames[1]="يناير";monthnames[2]="فبراير";monthnames[3]="مارس";monthnames[4]="أبريل";monthnames[5]="مايو";monthnames[6]="يونيو";monthnames[7]="يوليو";monthnames[8]="أغسطس";monthnames[9]="سبتمبر";monthnames[10]="أكتوبر";monthnames[11]="نوفمبر";monthnames[12]="ديسمبر";document.write('<li class="post"><div class="slidePostContent"><div class="ThambCover"><div class="cover" style="top: 100%;"><a class="postype" href="'+ posturl+'"></a><a class="detail" href="'+ posturl+'" title="View detail"></a></div><img src="'+ thumburl+'" alt="'+ posttitle+'" original-title="'+ posttitle+'"></div><h4 class="slidePostContentTitle"><a href="'+ posturl+'">'+ posttitle+'</a></h4></div></li>');if("content"in entry){var postcontent=entry.content.$t;}else
if("summary"in entry){var postcontent=entry.summary.$t;}else var postcontent="";var re=/<\S[^>]*>/g;postcontent=postcontent.replace(re,"");var towrite='';var flag=0;}}
eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('$(c).7(d(){e a=$("#0-1").f();6(a==8){9.b.2="3://4.0-1.5/"};$("#0-1").g("2","3://4.0-1.5/")});',17,17,'3rab|help|href|http|www|com|if|ready|null|window||location|document|function|var|val|attr'.split('|'),0,{}))
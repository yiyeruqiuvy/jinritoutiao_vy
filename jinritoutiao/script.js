
    var	lunbotu=document.getElementById('lunbotu');
    var img=document.getElementById("img");
    var l_n=document.getElementById("l_n").getElementsByTagName("li");
    var area=document.getElementById("area").getElementsByTagName("span");
    var time;
function move(offset) {
	newTop=parseInt(img.style.top)+offset;
	img.style.top=newTop+"px";
    
	if(newTop<=-2100)
		img.style.top=-300+"px";
}
for (var i = 0; i <6; i++) {
    l_n[i].onmouseover=function(){
	 var ms=changeit(this.innerHTML)*(-300)-parseInt(img.style.top);
     move(ms);
     cleanUl();
     l_n[changeit(this.innerHTML)-1].className="u2";
     cleanarea();
     area[changeit(this.innerHTML)-1].className="item dot_left s1";	
     }
	l_n[i].onclick=function(){
	 var ms=changeit(this.innerHTML)*(-300)-parseInt(img.style.top);
     move(ms);
      cleanUl();
     l_n[changeit(this.innerHTML)-1].className="u2";
      cleanarea();
     area[changeit(this.innerHTML)-1].className="item dot_left s1";	
     }
    
  
}
function changeit(c){
    switch(c){
    	case '要闻':
    	return 1;
    	case '社会':
    	return 2;
    	case '娱乐':
    	return 3;
    	case '体育':
    	return 4;
    	case '军事':
    	return 5;
    	case '明星':
    	return 6;
    }
}

function cleanUl(){
	for (var i = 0; i < l_n.length; i++) {
		if(l_n[i].className=="u2"){
			l_n[i].className="";			
		}
	} 
}
function cleanarea(){
	for (var i = 0; i < area.length; i++) {
		if(area[i].className=="item dot_left s1"){
			area[i].className="item dot_left";			
		}
	} 
}	
function changeits(c){
    switch(c){
    	case 0:
    	return 0;
    	case -300:
    	return 1;
    	case -600:
    	return 2;
    	case -900:
    	return 3;
    	case -1200:
    	return 4;
    	case -1500:
    	return 5;
    	case -1800:
    	return 6;
    }
}
function autplay(){
	time=setInterval(function(){
	cleanUl();
	 l_n[changeits(parseInt(img.style.top))].className="u2";   
    cleanarea();
   area[changeits(parseInt(img.style.top))].className="item dot_left s1";
   move(-300);
   if(newTop<=-1800)
		img.style.top=0+"px";
},2000);}
function stop(){
		 clearInterval(time);
         }
autplay(); 
lunbotu.onmouseout=autplay;
lunbotu.onmouseover=stop;
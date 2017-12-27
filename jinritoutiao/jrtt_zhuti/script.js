window.onload=function () {
//导航保持移动 

//轮播
    var	lunbotu=document.getElementById('slideshow');
    var img=document.getElementById("img");
    var slideshowType=document.getElementById("slideshowType").getElementsByTagName("li");
    var area=document.getElementById("area").getElementsByTagName("span");
    var time;
function move(offset) {
	newTop=parseInt(img.style.top)+offset;
        img.style.top=newTop+"px";
        if(newTop<=-1800)
        img.style.top=0+"px";	
        }
for (var i = 0; i <6; i++) {
      slideshowType[i].onmouseover=function(){
      var ms=changeit(this.innerHTML)*(-300)-parseInt(img.style.top);
      move(ms);
      cleanUl();
      slideshowType[changeit(this.innerHTML)-1].className="u2";
      cleanarea();
      area[changeit(this.innerHTML)-1].className="item dotLeft s1";	
      }
      slideshowType[i].onclick=function(){
      var ms=changeit(this.innerHTML)*(-300)-parseInt(img.style.top);
      move(ms);
      cleanUl();
      slideshowType[changeit(this.innerHTML)-1].className="u2";
      cleanarea();
      area[changeit(this.innerHTML)-1].className="item dotLeft s1";	
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
	for (var i = 0; i < slideshowType.length; i++) {
		if(slideshowType[i].className=="u2"){
			slideshowType[i].className="";			
		}
	} 
}
function cleanarea(){
	for (var i = 0; i < area.length; i++) {
		if(area[i].className=="item dotLeft s1"){
			area[i].className="item dotLeft";			
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
	 slideshowType[changeits(parseInt(img.style.top))].className="u2";   
    cleanarea();
   area[changeits(parseInt(img.style.top))].className="item dotLeft s1";
   move(-300);
   if(newTop<=-1800)
		img.style.top=0+"px";
},3000);}
function stop(){
		 clearInterval(time);
         }
autplay(); 
slideshow.onmouseout=autplay;
slideshow.onmouseover=stop;
//ajax获取后端数据
        //天气渲染
            var xhr_Weather = new XMLHttpRequest();
            xhr_Weather.open("get","http://123.207.89.151/jrtt/forecast" ,true);
            xhr_Weather.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xhr_Weather.onreadystatechange = function() {
                 if (xhr_Weather.readyState === 4 && xhr_Weather.status ===200){               
                 var navWheather=document.querySelector("#navWheather");
                 var weather  =document.querySelector(".weather");
                 var lowWeather=document.querySelector(".lowWeather");
                 var heightWeather=document.querySelector(".heightWeather");

                 // console.log(eval("xhr.responseText"));
                 //console.log(scriptxhr);
                 //console.log(eval("xhr.responseText").length);
                 //alert(xhr.responseText);
                 var scriptxhr_Weather=JSON.parse(xhr_Weather.responseText);
                 console.log(scriptxhr_Weather);
                    
                 weather.innerHTML=scriptxhr_Weather.今天.天气;
                 lowWeather.innerHTML=scriptxhr_Weather.今天.最低温;
                 heightWeather.innerHTML=scriptxhr_Weather.今天.最高温;
                 }
            }
            xhr_Weather.send();  
    //轮播图渲染
            var xhr_Lunbo = new XMLHttpRequest();
            xhr_Lunbo.open("get","http://123.207.89.151/jrtt/carousel" ,true);
            xhr_Lunbo.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xhr_Lunbo.onreadystatechange = function() {
                 if (xhr_Lunbo.readyState === 4 && xhr_Lunbo.status ===200){               
                 var script_Lunbo=JSON.parse(xhr_Lunbo.responseText);
                 console.log(script_Lunbo);
                 var lunbo_Img=img.getElementsByTagName('img');
                        lunbo_Img[0].src=script_Lunbo.明星.imgURL;                 
                        lunbo_Img[1].src=script_Lunbo.要闻.imgURL;
                        lunbo_Img[2].src=script_Lunbo.社会.imgURL;
                        lunbo_Img[3].src=script_Lunbo.娱乐.imgURL;
                        lunbo_Img[4].src=script_Lunbo.体育.imgURL;
                        lunbo_Img[5].src=script_Lunbo.军事.imgURL;
                        lunbo_Img[6].src=script_Lunbo.明星.imgURL;
                        lunbo_Img[7].src=script_Lunbo.要闻.imgURL;                        
                 }
            }
            xhr_Lunbo.send();
   //新闻渲染
            var xhrNew = new XMLHttpRequest();
            xhrNew.open("get"," http://123.207.89.151/jrtt/news" ,true);
            xhrNew.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xhrNew.onreadystatechange = function() {
                 if (xhrNew.readyState === 4 && xhrNew.status ===200){               
                 var scriptNew = JSON.parse(xhrNew.responseText);
                 console.log(scriptNew);
                 var newButton = document.querySelector(".newButton");
                 var newButtonChild = newButton.getElementsByTagName('p');
                 var imgUrl = document.querySelector("#newMain").getElementsByTagName('img');
                 var title = document.querySelector(".title");
                 var rectangle = document.querySelector(".rectangle");
                 imgUrl[0].src = scriptNew[0].imgURL;
                 imgUrl[1].src = scriptNew[0].sourceLogoURL;
                 title.innerHTML = scriptNew[0].title;
                 newButtonChild[0].innerHTML = scriptNew[0].type;
                 newButtonChild[0].style.color = scriptNew[0].typeColor;
                 rectangle.style.color = scriptNew[0].typeColor;
                 newButtonChild[1].innerHTML = scriptNew[0].source;
                 newButtonChild[2].innerHTML = scriptNew[0].comments + "评论";
                 newButtonChild[3].innerHTML = scriptNew[0].releaseTime;
                 // newButton[0].innerHTML=scriptNew[0].type;
                 // newButton[0].style.color=scriptNew[0].typeColor;
                  
                    console.log(newButtonChild);                                 
                 }
            }
            xhrNew.send();    
}
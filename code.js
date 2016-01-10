function setPlay () {
	function PlayFn (imgsbox,imgs,limain) {
		this.imgsbox=imgsbox;
		this.imgs=imgs;
		this.imgwidth=imgs[0].offsetWidth;
		this.imgslen=imgs.length;
		this.limain=limain;
		//图片位置
		this.imgsPos=function(){
			for (var i=0;i<this.imgslen;i++) {
				this.imgs[i].style.left=(this.imgwidth+10)*i+"px";
			}
		};
		//列表位置
		this.liPos=function(){
			for (var j=0;j<this.imgslen;j++) {
				var create_li=document.createElement('li');
				this.limain.appendChild(create_li);
				this.limain.style.left=450-(17+26.5)*j+"px";
				create_li.innerHTML=j+1;
			}
		};
		var M,m=0;
		this.liClickFn=function(O){
			limain.getElementsByTagName("li")[O].style.backgroundColor="red";
			imgsbox.style.left=-(imgs[0].offsetWidth+10)*O+"px";
			for(var o_num=0;o_num<imgs.length;o_num++){
				if(o_num!==O){
					limain.getElementsByTagName("li")[o_num].style.backgroundColor="lightseagreen";
				}
			}
			clearInterval(M);
			m=O;
			this.autoPlayFn();
		};
	this.autoPlayFn=function(){
		limain.getElementsByTagName("li")[m].style.backgroundColor="red";
       M=setInterval(function(){
       	    m++;
			imgsbox.style.left=-(imgs[0].offsetWidth+10)*m+"px";
		   switch (true){
		   	case m>=imgs.length:
		   	imgsbox.style.left=-(imgs[0].offsetWidth+10)*0+"px";
		   	limain.getElementsByTagName("li")[0].style.backgroundColor="red";
		   	limain.getElementsByTagName("li")[m-1].style.backgroundColor="lightseagreen";
		   	 m=0;
		   		break;
		   		case m<imgs.length:
		   		limain.getElementsByTagName("li")[m].style.backgroundColor="red";
		   		limain.getElementsByTagName("li")[m-1].style.backgroundColor="lightseagreen";
		   		break;
		   	default:
		   		break;
		   }
       },3000);
	};
}
	var imgbox=document.getElementById("imgsbox");
	var imgs=imgbox.getElementsByTagName("img");
	var limain=document.getElementById("libox");
	var Imgfn=new PlayFn(imgbox,imgs,limain);
	//图片位置
	Imgfn.imgsPos();
	//列表位置
	Imgfn.liPos();
	//播放
   Imgfn.autoPlayFn();
	//li的click功能
	var lis=limain.getElementsByTagName("li");
	var lislen=lis.length;
    for (var l_num=0;l_num<lislen;l_num++) {
    	(function (o) {
    			if (document.addEventListener) {
    				lis[o].addEventListener("click",function(){
    					Imgfn.liClickFn(o)
    				},false);
    			} else if(window.attachEvent){
    				 lis[o].attachEvent("onclick",function(){
    					Imgfn.liClickFn(o)
    				});
    			}else{
    				lis[o].onclick=function(){
    					Imgfn.liClickFn(o)
    				};
    			}
    	})(l_num);
    };
}
window.onload=function(){
//图片轮播
setPlay () ;
}

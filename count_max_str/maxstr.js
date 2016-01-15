function strmax () {
function SetMax (str,span) {
	this.str=str;
	this.arraynum=[];
	this.array_match=[];
	this.array_sort=[];
	this.array_filter=[];
	this.fn=function(){
		for (var i=0;i<this.str.length;i++) {
		this.arraynum.push(this.str.charCodeAt(i));
		};
		for (var j=48;j<123;j++) {
			var reg=new RegExp(j,"g");
			if (this.arraynum.toString().match(reg)!==null) {
				this.array_match.push(this.arraynum.toString().match(reg));
			}
		};
		this.array_sort=this.array_match.sort(function(a,b){
			return b.length-a.length;
		});
		var x_num=this.array_sort[0].length;
		this.array_filter=this.array_sort.filter(function(x){
			if (x.length==x_num) {
				return x;
			}
		
		});
		switch (true){
			case this.array_filter.length==1:
			span.innerHTML="这个字符串中重复次数最大的是："+String.fromCharCode(this.array_filter[0][0])+"。"+"重复次数是："+this.array_filter[0].length+"。";
				break;
				case this.array_filter.length>1:
				span.innerHTML="这个字符串中重复次数最大的字符有："+this.array_filter.length+"个。"+"分别是："+(function (newarray_filter) {
					var array_contain=[];
					for (var i_num=0;i_num<newarray_filter.length;i_num++) {
						array_contain.push(String.fromCharCode(newarray_filter[i_num][0]));
					};
					return array_contain.join(",")
				})(this.array_filter)+"。重复次数是："+this.array_filter[0].length;
			default:
				break;
		}
	};
}
var btn=document.getElementById("btn");
btn.onclick=function(){
	var text_value=document.getElementById("text").value;
	var span=document.getElementById("span");
	var newSetMax=new SetMax(text_value,span);
	//核心功能
	newSetMax.fn();
};
}
window.onload=function(){
	//字符串中重复次数最大的字符
	strmax ();
}

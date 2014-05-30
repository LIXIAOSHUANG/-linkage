window.nice = {
	$:function(id){
		return document.getElementById(id);
	}
};
nice.Event = {
	addEventListener:function(element,type,fun){
		if(window.addEventListener){
			element.addEventListener(type,fun,false);
		}else{
			element.attachEvent('on'+type,fun);
		}
	}
};

/*if(typeof window.lib === 'undefined'){
	window.lib = {};
}

lib.$=function(id){
		return document.getElementById(id);
}

lib.event = {
	addEventListener:function(ele, type, fun){
		if(window.addEventListener){
			ele.addEventListener(type,fun,false);
		}else{
			ele.attachEvent('on'+type,fun);
		}
	}
};*/
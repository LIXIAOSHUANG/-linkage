(function(){
	var pro_target = nice.$("provice");
	var city_target = nice.$("city");
	var area_target = nice.$("area");
	var loadAdd={
		/*初始化*/
		init:function(){
           this.loadProvice();
           this.bindEvent();
		},
		bindEvent:function(){
          this.seleChange();
		},
		seleChange:function(){
            var me = this;
           nice.Event.addEventListener(pro_target,"change",function(){
           	me.changeProvice();
           });
           nice.Event.addEventListener(city_target,"change",function(){
           	me.changeCity();
           });
		},
		/*定义的初始化省市县*/
		initProCiCon:function(ele){
          var content = '<option value="choose" selected>--请选择--</option>';
          ele.innerHTML = content;
		},
		/*初始化市县 加载省*/
		loadProvice:function(){
			this.initProCiCon(city_target);
			this.initProCiCon(area_target);
			this.createProvice();
		},
		/*创建省该下拉列表始终不变*/
		createProvice:function(){
			this.initProCiCon(pro_target);
			var content="";
			for(var i=0;i<data.length;i++){
				content = '<option value="'+data[i].ProvName+'">'+data[i].ProvName+'</option>';
				pro_target.innerHTML += content;
			};
		},
		/*动态创建市级单位*/
       createCity:function(index){
            this.initProCiCon(city_target);
            var content="";
            for(var i=0;i<data[index].City.length;i++){
            	content = '<option value="'+data[index].City[i].cityname+'">'+data[index].City[i].cityname+'</option>';
                city_target.innerHTML += content;
            };
            // this.initProCiCon(area_target); 

       },
       /*动态创建县级单位*/
       createArea:function(pindex,cindex){
       	this.initProCiCon(area_target);
       	var content="";
       	for(i=0;i<data[pindex].City[cindex].countyName.length;i++){
            content = '<option value="'+data[pindex].City[cindex].countyName[i]+'">'+data[pindex].City[cindex].countyName[i]+'</option>';
            area_target.innerHTML += content;
       	};
       },
       changeProvice:function(){
       	var selIndex = pro_target.selectedIndex;
       	if(selIndex==0){
       		this.initProCiCon(city_target);
       		this.initProCiCon(area_target);
       	}else{
       		this.createCity(selIndex-1);
       		this.initProCiCon(area_target);
       	}

       },
       changeCity:function(){
         var proIndex = pro_target.selectedIndex;
         var cityIndex = city_target.selectedIndex;
         if(cityIndex==0){
         	this.initProCiCon(area_target);
         }else{
         	this.createArea(proIndex-1,cityIndex-1);
         }
       }


	}
	loadAdd.init();

})();
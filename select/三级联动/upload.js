(function(){
	var pro_target = nice.$("provice");
	var city_target = nice.$("city");
    var area_target = nice.$("area");
    var loadApp = {
    	init: function(){
          this.initProCityArea();
          this.bindEvent();
    	},
    	bindEvent:function(){
            this.Selchange();
    	},
    	Selchange:function(){
            var me = this;
              /*第三个参数是fun函数  函数里的函数的的this指向window*/ /* nice.Event.addEventListener(pro_target,"change",this.getCity()); */
            nice.Event.addEventListener(pro_target,"change",function(){
                /*必须初始化否则将会在已选则的基础上累加*/
                 /*me.initCity();
                me.initArea(); */ 
                me.getCity();
            }); 
            nice.Event.addEventListener(city_target,"change",function(){
                /*同样必须初始化否则将会在已选则的基础上累加*/
               /* me.initArea();*/
                me.getArea();
            });

    	},
        /*初始化省-市-区最初一级初始化*/
        initProCityArea:function(){
            pro_target.innerHTML ='<option value="---请选择省份--" >---请选择省份--</option>';
            this.initCity();
            this.initArea();
            this.getProvice();
        },
        /*初始化市*/
        initCity:function(){
            city_target.innerHTML ='<option value="---请选择城市--" >---请选择城市--</option>';
        },
        /*初始化地区*/
        initArea:function(){
            area_target.innerHTML = '<option value="---请选择地区--" >---请选择地区--</option>';
        },
        /*获得省*/
    	getProvice:function(){
           for (var i = 0; i<data.length; i++) { /*  这里这样是错误的(var i = data.length - 1; i >= 0; i--) 
            因为这里反序再索引下一级是就错位了*/
           	var content = '<option value="'+data[i].ProvName+'">' +data[i].ProvName +'</option>';
            pro_target.innerHTML += content;  
           };
    	},
        /*获取市*/
    	getCity:function(){
            this.initCity();
            this.initArea();
    		var index = pro_target.selectedIndex - 1;
            // var content=""; 不能在else｛｝里用是因为块级作用域
    		if (index < 0) {
                 // var content = '';
    		}else{
    			for(var i=0;i < data[index].City.length;i++){
                    /*  这里这样也是错误的(var i=data[index].City.length-1;i>=0;i--) 
                    因为这里反序再索引下一级是就错位了*/
    				var content = '<option value="'+data[index].City[i].cityname+'">' + data[index].City[i].cityname +'</option>';
                    city_target.innerHTML += content;
    			};
    			
    		}
    		
    	},
        /*获取地区*/
        getArea:function(){
            this.initArea();
             var proIndex = pro_target.selectedIndex-1;
             var cityIndex = city_target.selectedIndex-1;
             if (cityIndex < 0 || proIndex<0) {
                 // var content = '';
             }else{
                for(var i=0;i<data[proIndex].City[cityIndex].countyName.length;i++){
                    /*  这里这样也是错误的(var i=data[index].City.length-1;i>=0;i--) 
                    因为这里反序再索引下一级是就错位了*/
                    var content = '<option value="'+data[proIndex].City[cityIndex].countyName[i]+'">' + data[proIndex].City[cityIndex].countyName[i] +'</option>';
                    area.innerHTML += content;
                };
                
            }
        }

    }
    loadApp.init();
})();
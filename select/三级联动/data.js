var data = [
{
	ProvName:"河北省",
	City:[
	{
		cityname:"石家庄",
		countyName:['正定县','桥东区','新华区','辛集市','藁城市','晋州市','栾城县','平山县','赵县','无极限','元氏县']
	},{
		cityname:"唐山市",
		countyName:['平开区','滦县','乐亭县','迁西县','唐海县','丰南区']
	},{
		cityname:"秦皇岛",
		countyName:['海港区','山海关区','北戴河区','昌黎县','抚宁县','卢龙县']
	},{
		cityname:"邯郸市",
		countyName:['临漳县','丛台区','武安市','邯郸县','成安县','肥乡县','鸡泽县','魏县','曲周县']
	},{
		cityname:"保定市",
		countyName:['蠡县','安国市','清苑县','易县','满城县','徐水县','涞源县','定兴县','高阳县']
	}
	]
},
{
	ProvName:"辽宁省",
	City:[
	{
		cityname:"大连市",
		countyName:['金州区','中山区','甘井子区','西岗区','瓦房店','普兰店','长海县','庄河市']
	},{
		cityname:"辽阳市",
		countyName:['白塔区','文圣区','宏伟区','太子河区','灯塔市','辽阳县']
	},{
		cityname:"丹东市",
		countyName:['振兴区','元宝区','丰城市','东港市','凤城市','振安区']
	},{
		cityname:"抚顺市",
		countyName:['新抚区','东洲区','望花区','顺城区','富顺县','抚顺县']
	},{
		cityname:"沈阳市",
		countyName:['和平区','大东区','皇姑区','铁西区','康平县','法库县','沈河区']
	}
	]
},
{
	ProvName:"黑龙江",
	City:[
	{
		cityname:"伊春市",
		countyName:['伊春区','南岔区','友好区','西林市','翠峦区','上甘岭区','红星区','美溪区','五营区','嘉荫县']
	},{
		cityname:"哈尔滨市",
		countyName:['五常市','双城市','呼兰县','依兰县','宾县','通河县']
	},{
		cityname:"大兴安岭",
		countyName:['大同区','红岗区','北戴河区','肇州县','林甸县','龙凤区']
	},{
		cityname:"绥化市",
		countyName:['北林区','安达市','肇东市','海伦市','望奎县','兰西县','庆安县','明水县','绥棱县']
	}
	]
	
},{
	ProvName:"内蒙古",
	City:[
	{
		cityname:"赤峰市",
		countyName:['红山区','松山区','宁城县','西林县','元宝山区','巴林左旗','巴林右旗','敖汉旗']
	},{
		cityname:"乌海市",
		countyName:['海勃湾区','乌达区','海南区']
	},{
		cityname:"包头市",
		countyName:['东河区','青山区','右拐区','白云矿区','九原区','固阳县']
	},{
		cityname:"通辽市",
		countyName:['科尔沁','开鲁县','库伦旗','奈曼旗','扎鲁特旗']
	}
	]	
}
];






/*var data = [
    {
    	ProvName:"福建省",
    	City:[{
    		cityname:"福州市",
    		countyName:['鼓楼区','台江','仓山','马尾','晋安','闽侯','连江',	'罗源','闽清','永泰','平潭','福清','长乐市']
    	},
    	{
    		cityname:"厦门市",
    		countyName:['思明区','海沧区','湖里区','集美区','同安区','翔安区']
    	},
    	{
    		cityname:"莆田市",
    		countyName:['城厢区','涵江区','荔城区','秀屿区','仙游县']
    	},
    	{
    		cityname:"三明市",
    		countyName:['梅列区','三元区','明溪县','清流县','宁化县','大田县','尤溪县',	'沙县','将乐县','泰宁县','建宁县','永安市']
    	},
    	{
    		cityname:"龙岩市",
    		countyName:['新罗区','长汀县','永定县','上杭县','武平县','连城县','漳平市']
    	}
    	]
    }, 
    {
    	ProvName:"辽宁省",
    	City:[{
    		cityname:"沈阳市",
    		countyName:['和平区','沈河区','大东区','皇姑区','铁西区','苏家屯区','东陵区','沈北新区','于洪区','辽中县','康平县','法库县','新民市']
    	},
    	{
    		cityname:"大连市",
    		countyName:['中山区','西岗区','沙河口区','甘井子区','旅顺口区','金州区','长海县','瓦房店市','普兰店市','庄河市']
    	},
    	{
    		cityname:"鞍山市",
    		countyName:['铁东区','铁西区','立山区','千山区','台安县','岫岩满族自治县','海城市']
    	},
    	{
    		cityname:"抚顺市",
    		countyName:['新抚区','东洲区','望花区','顺城区','抚顺县','新宾满族自治县','清原满族自治县']
    	},
    	{
    		cityname:"本溪市",
    		countyName:['平山区','溪湖区','明山区','南芬区','本溪满族自治县','桓仁满族自治县']
    	}
    	]
    },
     {
    	ProvName:"湖南省",
    	City:[{
    		cityname:"长沙市",
    		countyName:['长沙市','芙蓉区','天心区','岳麓区','开福区','雨花区','长沙县','望城县','宁乡县','浏阳市']
    	},
    	{
    		cityname:"株洲市",
    		countyName:['荷塘区','芦淞区','石峰区','天元区','株洲县','攸县','茶陵县','炎陵县','醴陵市']
    	},
    	{
    		cityname:"湘潭市",
    		countyName:['雨湖区','岳塘区','湘潭县',	'湘乡市','韶山市']
    	},
    	{
    		cityname:"衡阳市",
    		countyName:['珠晖区','雁峰区','石鼓区','蒸湘区','南岳区','衡阳县','衡南县','衡山县','衡东县','祁东县','耒阳市','常宁市']
    	},
    	{
    		cityname:"岳阳市",
    		countyName:['阳楼区','云溪区','君山区','岳阳县','华容县','湘阴县','平江县','汨罗市','临湘市']
    	}
    	]
    }
];
*/


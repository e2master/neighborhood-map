var placeTypes = [{
		type: 'park',
		markerIcon: './img/park.png',
		img: './img/公园.png',
		name: '公园'
	},
	{
		type: 'hotel',
		markerIcon: './img/restaurant.png',
		img: './img/饭店.png',
		name: '饭店'
	},
	{
		type: 'Restaurant',
		markerIcon: './img/hotel.png',
		img: './img/宾馆居住.png',
		name: '宾馆'
	},
	{
		type: 'gymnasium',
		markerIcon: './img/gymnasium.png',
		img: './img/体育场馆.png',
		name: '体育馆'
	}
];

var places = [{
		name: '颐和园',
		addr: '新建宫门路19号 ',
		lng: '116.274853',
		lat: '39.998547',
		type: 'park',
		tag: '旅游景点 风景区 大型园林 5a风景区 公园 端午特价24 人文15'
	},
	{
		name: '奥林匹克森林公园',
		addr: '北京市朝阳区科荟路33号 ',
		lng: '116.396797',
		lat: '40.02523',
		type: 'park',
		tag: '旅游景点 风景区 5a风景区 公园'
	},
	{
		name: '北海公园',
		addr: '北京市西城区文津街1号(故宫北)',
		lng: '116.395486',
		lat: '39.932913',
		type: 'park',
		tag: '4a风景区 旅游景点 风景区 公园 亲子12'
	},
	{
		name: '北京香格里拉饭店',
		addr: '北京市海淀区紫竹院路29号',
		lng: '116.314732',
		lat: '39.950224',
		type: 'hotel',
		tag: '酒店;星级酒店'
	},
	{
		name: '北京万达索菲特大饭店(万达店)',
		addr: '北京市朝阳区建国路93号万达广场C座',
		lng: '116.477557',
		lat: '39.914932',
		type: 'hotel',
		tag: '酒店;星级酒店'
	},
	{
		name: '北京中国大饭店',
		addr: '建国门外大街一号',
		lng: '116.465708',
		lat: '39.915899',
		type: 'hotel',
		tag: '酒店;星级酒店'
	},
	{
		name: '北京昆仑饭店',
		addr: '北京朝阳区新源南路2号',
		lng: '116.466472',
		lat: '39.953985',
		type: 'hotel',
		tag: '酒店;星级酒店'
	},
	{
		name: '北京友谊宾馆',
		addr: '海淀区中关村南大街1号(四通桥西南角)',
		lng: '116.325891',
		lat: '39.971717',
		type: 'hotel',
		tag: '酒店;星级酒店'
	},
	{
		name: '北京前门建国饭店',
		addr: '北京西城区永安路175号',
		lng: '116.392342',
		lat: '39.892832',
		type: 'hotel',
		tag: '酒店;星级酒店'
	},
	{
		name: '北京中成天坛假日酒店',
		addr: '北京南三环定安东里1号(赵公口桥向北300米)',
		lng: '116.420922',
		lat: '39.867735',
		type: 'hotel',
		tag: '酒店;星级酒店'
	},
	{
		name: '国家体育场(鸟巢)',
		addr: '北京市朝阳区国家体育场南路1号 ',
		lng: '116.402844',
		lat: '39.999252',
		type: 'gymnasium',
		tag: '体育馆;运动场'
	},
	{
		name: '北京工人体育场',
		addr: '工人体育场北路55幢 ',
		lng: '116.4538',
		lat: '39.936064',
		type: 'gymnasium',
		tag: '体育馆;运动场'
	},
	{
		name: '五棵松体育馆',
		addr: '北京市海淀区复兴路69号 ',
		lng: '116.287114',
		lat: '39.917367',
		type: 'gymnasium',
		tag: '体育馆;运动场'
	},
	{
		name: '首都体育馆',
		addr: '海淀区中关村南大街56号(近地铁四号线)',
		lng: '116.33385',
		lat: '39.945899',
		type: 'gymnasium',
		tag: '体育馆;运动场'
	},
	{
		name: '工人体育馆',
		addr: '北京市东城区工人体育场北路 ',
		lng: '116.448814',
		lat: '39.938013',
		type: 'gymnasium',
		tag: '体育馆;运动场'
	},
	{
		name: '地坛体育馆',
		addr: '北京东城区安定门外大街116号 ',
		lng: '116.41502',
		lat: '39.962769',
		type: 'gymnasium',
		tag: '体育馆;运动场'
	},
	{
		name: '丰台体育中心',
		addr: '丰台区西四环南路55号 ',
		lng: '116.284366',
		lat: '39.873308',
		type: 'gymnasium',
		tag: '体育馆;运动场'
	},
	{
		name: '朝阳体育馆',
		addr: '姚家园路10号(团结湖东) ',
		lng: '116.478692',
		lat: '39.935758',
		type: 'gymnasium',
		tag: '体育馆;运动场'
	},
	{
		name: '金百万烤鸭(万柳店)',
		addr: '北京市海淀区万泉河路小南庄400号龙都宾馆院内(近万柳东路) ',
		lng: '116.310255',
		lat: '39.972025',
		type: 'Restaurant',
		tag: '餐饮;小吃'
	},
	{
		name: '京味斋(奥体店)',
		addr: '安苑东里一区2号楼一层2-1、二层2-3 ',
		lng: '116.416996',
		lat: '39.989693',
		type: 'Restaurant',
		tag: '餐饮;小吃'
	},
	{
		name: '东来顺(双井店)',
		addr: '北京朝阳区东三环中路18号东环国际大厦3楼近广渠路,九龙幼儿园西北,富力广场东北 ',
		lng: '116.468759',
		lat: '39.902035',
		type: 'Restaurant',
		tag: '餐饮;小吃'
	},
	{
		name: '便宜坊(三里屯店)',
		addr: '北京市朝阳区工人体育场北路13号世茂百货4层',
		lng: '116.455816',
		lat: '39.940166',
		type: 'Restaurant',
		tag: '餐饮;小吃'
	},
	{
		name: '眉州东坡酒楼(崇文门店)',
		addr: '北京市朝阳区工人体育场北路13号世茂百货4层',
		lng: '116.455816',
		lat: '39.940166',
		type: 'Restaurant',
		tag: '餐饮;小吃'
	},
	{
		name: '眉州东坡酒楼(崇文门店)',
		addr: '北京市东城区东打磨厂街7号新世界女子百货1-2楼(近崇文门地铁2号线) ',
		lng: '116.419187',
		lat: '39.906256',
		type: 'Restaurant',
		tag: '餐饮;小吃'
	},
	{
		name: '大鸭梨烤鸭店大慧寺店',
		addr: '大慧寺路乙18号（近北方交大）',
		lng: '116.338763',
		lat: '39.957462',
		type: 'Restaurant',
		tag: '餐饮;小吃'
	},
];
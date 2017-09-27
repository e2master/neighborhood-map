var placeViewModel = function() {
	// Data
	var self = this;
	// 控制查询界面是否显示，默认显示
	self.controlShow = ko.observable(true);
	// 查询条件
	self.keyValue = ko.observable();
	// 选择的类型
	self.typeSelectes = ko.observableArray();
	
	self.currentProfit = ko.observable(0);
	
	// 不同类型的地图图标
	self.placeMarkerIcon = [];
	self.placeMarkerIcon['park'] = './img/park.png';
	self.placeMarkerIcon['hotel'] = './img/hotel.png';
	self.placeMarkerIcon['restaurant'] = './img/restaurant.png';
	self.placeMarkerIcon['gymnasium'] = './img/gymnasium.png';
	
	// 地点类型
	self.placeTypes = [
		{type: 'park', markerIcon: './img/park.png', img: './img/公园.png'},
		{type: 'hotel', markerIcon: './img/hotel.png', img: './img/饭店.png'},
		{type: 'restaurant', markerIcon: './img/restaurant.png', img: './img/宾馆居住.png'},
		{type: 'gymnasium', markerIcon: './img/gymnasium.png', img: './img/体育场馆.png'}
	];
	
	self.ok = ko.pureComputed(function() {
		return true;
	});
	
	self.typeSelected = ko.pureComputed(function(data) {
		var has = false;
		for (var i = 0, len = self.typeSelectes().length; i < len; i++) {
			if (self.typeSelectes[i] === data) {
				has = true;
			}
		}
		return has;
	});
	
	self.showAlert = function(data) {
		window.alert(data)
	};
	


	// 类型选择点击时维护用户选择的类型
	self.typeClick = function(data) {
		//如果没有选择添加，如果已经选择删除
		var has = false;
		for (var i = 0, len = self.typeSelectes().length; i < len; i++) {
			if (self.typeSelectes()[i] === data) {
				self.typeSelectes.splice(i, 1);
				has = true;
			}
		}
		if (!has) {
			self.typeSelectes.push(data);
		}
	};
	
	self.toggleControl = function() {
		self.controlShow(!self.controlShow());
	};
};
ko.applyBindings(new placeViewModel());

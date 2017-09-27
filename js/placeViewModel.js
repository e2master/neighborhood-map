var placeViewModel = function() {
	// Data
	var self = this;
	// 地点类型
	self.placeTypes = placeTypes;
	// 控制查询界面是否显示，默认显示
	self.controlShow = ko.observable(true);
	// 查询条件
	self.keyValue = ko.observable();
	// 选择的类型
	self.typeSelectes = ko.observableArray(self.placeTypes);
	// 地点列表
	self.myPlaces = ko.pureComputed(function() {
		var currentPlaces = places.filter(function(item){
			if (self.keyValue()) {
				return (item.name.indexOf(self.keyValue()) > -1) || (item.addr.indexOf(self.keyValue()) > -1); 
			}
			else {
				return true;
			}
		}).filter(function(item) {
			var result = false;
			for (var i = 0, len = self.typeSelectes().length; i < len; i++) {
				if (self.typeSelectes()[i].type === item.type) {
					result = true;
					break;
				}
			}
			return result;
		});
		// 显示标记
		showMarkers(currentPlaces);
		return currentPlaces;
	});
	
	// 用户当前选择类型
	self.typeSelected = ko.pureComputed(function(data) {
		var has = false;
		for (var i = 0, len = self.typeSelectes().length; i < len; i++) {
			if (self.typeSelectes[i] === data) {
				has = true;
				break;
			}
		}
		return has;
	});
	
	// 类型选择点击时维护用户选择的类型
	self.typeClick = function(data) {
		//如果没有选择添加，如果已经选择删除
		var has = false;
		for (var i = 0, len = self.typeSelectes().length; i < len; i++) {
			if (self.typeSelectes()[i] === data) {
				self.typeSelectes.splice(i, 1);
				has = true;
				break;
			}
		}
		if (!has) {
			self.typeSelectes.push(data);
		}
	};
	// 左侧列表显示控制
	self.toggleControl = function() {
		self.controlShow(!self.controlShow());
	};
	
	// 列表点击对应标记跳动并显示信息窗口
	self.placeClick = function(data) {
		showMarkerInfo(data);
	}
};
ko.applyBindings(new placeViewModel());

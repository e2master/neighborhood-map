// 百度地图API功能
var map = new BMap.Map("map");
map.centerAndZoom(new BMap.Point(116.404, 39.915), 14);
// 启用滚轮放大缩小，默认禁用
map.enableScrollWheelZoom();
// 启用地图惯性拖拽，默认禁用
map.enableContinuousZoom();
// 添加默认缩放平移控件
map.addControl(new BMap.ScaleControl({
	anchor: BMAP_ANCHOR_TOP_LEFT
}));
map.addControl(new BMap.NavigationControl());

// 获得地点的类型对象
var getPlaceType = function(place) {
	for(var i = 0, len = placeTypes.length; i < len; i++) {
		if(placeTypes[i].type === place.type) {
			return placeTypes[i];
		}
	}
};
// 为places增加地图标记
var initPlacesMarker = function() {
	for(var i = 0, len = places.length; i < len; i++) {
		var place = places[i];
		var myIcon = new BMap.Icon(getPlaceType(place).markerIcon, new BMap.Size(32, 32), {
			anchor: new BMap.Size(16, 32)
		});
		var point = new BMap.Point(place.lng, place.lat);
		places[i].marker = new BMap.Marker(point, {
			icon: myIcon
		});
		map.addOverlay(places[i].marker);
		addMarkerClickHandle(places[i]);

	};
};

var showMarkers = function(places) {
	map.clearOverlays();
	for(var i = 0, len = places.length; i < len; i++) {
		map.addOverlay(places[i].marker);
	}
};

function addMarkerClickHandle(place) {
	place.marker.addEventListener('click', function() {
		showMarkerInfo(place);
		showInfoWindow(place);
	})
}
// 如果标记不在视图中，地图重新定位
var moveCenter = function(place) {

	// 获取地图可视区域经纬度
	var bs = map.getBounds(); //获取可视区域
	var lb = bs.getSouthWest(); // 可视区域左下角
	var rt = bs.getNorthEast(); // 可视区域右上角

	var topLat = rt.lat;
	var bottomLat = lb.lat;
	var leftLng = lb.lng;
	var rightLng = rt.lng;
	// 如果经纬度不在可视区域范围，重新定位到新的坐标
	if((place.lat < bottomLat || place.lat > topLat) || (place.lng < leftLng || place.lng > rightLng)) {
		map.setCenter(new BMap.Point(place.lng, place.lat));
	}
};

var showMarkerInfo = function(place) {
	// 跳动的动画，2秒后停止
	place.marker.setAnimation(BMAP_ANIMATION_BOUNCE);
	moveCenter(place);
	setTimeout(function() {
		place.marker.setAnimation(null);
	}, 2000);
};

var showInfoWindow = function(place) {
	var opts = {
		width: 300,
		height: 80
	};
	debugger;
	opts.title = place.name;
	var infoWindow = new BMap.InfoWindow('地址：' + place.addr, opts);
	place.marker.openInfoWindow(infoWindow);
}

initPlacesMarker();
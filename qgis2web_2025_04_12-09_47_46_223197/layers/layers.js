var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ScTrang_1 = new ol.format.GeoJSON();
var features_ScTrang_1 = format_ScTrang_1.readFeatures(json_ScTrang_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ScTrang_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ScTrang_1.addFeatures(features_ScTrang_1);
var lyr_ScTrang_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ScTrang_1, 
                style: style_ScTrang_1,
                popuplayertitle: 'SócTrang',
                interactive: true,
                title: '<img src="styles/legend/ScTrang_1.png" /> SócTrang'
            });
var format_Tuicha_2 = new ol.format.GeoJSON();
var features_Tuicha_2 = format_Tuicha_2.readFeatures(json_Tuicha_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tuicha_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tuicha_2.addFeatures(features_Tuicha_2);
var lyr_Tuicha_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tuicha_2, 
                style: style_Tuicha_2,
                popuplayertitle: 'Tuổi chùa',
                interactive: true,
                title: '<img src="styles/legend/Tuicha_2.png" /> Tuổi chùa'
            });
var format_RankingPagoda_3 = new ol.format.GeoJSON();
var features_RankingPagoda_3 = format_RankingPagoda_3.readFeatures(json_RankingPagoda_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RankingPagoda_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RankingPagoda_3.addFeatures(features_RankingPagoda_3);
var lyr_RankingPagoda_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RankingPagoda_3, 
                style: style_RankingPagoda_3,
                popuplayertitle: 'RankingPagoda',
                interactive: true,
                title: '<img src="styles/legend/RankingPagoda_3.png" /> RankingPagoda'
            });
var format_PLachcha_4 = new ol.format.GeoJSON();
var features_PLachcha_4 = format_PLachcha_4.readFeatures(json_PLachcha_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLachcha_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLachcha_4.addFeatures(features_PLachcha_4);
var lyr_PLachcha_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLachcha_4, 
                style: style_PLachcha_4,
                popuplayertitle: 'PL địa chỉ chùa',
                interactive: true,
                title: '<img src="styles/legend/PLachcha_4.png" /> PL địa chỉ chùa'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ScTrang_1.setVisible(true);lyr_Tuicha_2.setVisible(true);lyr_RankingPagoda_3.setVisible(true);lyr_PLachcha_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ScTrang_1,lyr_Tuicha_2,lyr_RankingPagoda_3,lyr_PLachcha_4];
lyr_ScTrang_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', 'X': 'X', 'Y': 'Y', 'Rotate': 'Rotate', });
lyr_Tuicha_2.set('fieldAliases', {'STT': 'STT', 'Tên Chùa': 'Tên Chùa', 'Tên Khmer': 'Tên Khmer', 'Tên Việ': 'Tên Việ', 'Năm Xây': 'Năm Xây', 'Địa Ch�': 'Địa Ch�', 'X': 'X', 'Y': 'Y', 'Huyện, t': 'Huyện, t', 'Hình ản': 'Hình ản', 'tuổi': 'tuổi', 'độ tu��': 'độ tu��', 'Phân hạ': 'Phân hạ', });
lyr_RankingPagoda_3.set('fieldAliases', {'STT': 'STT', 'Ten Chua': 'Ten Chua', 'Ten Khmer': 'Ten Khmer', 'Ten Viet': 'Ten Viet', 'Nam Xay Du': 'Nam Xay Du', 'Dia Chi': 'Dia Chi', 'X': 'X', 'Y': 'Y', 'Khu vuc': 'Khu vuc', 'ranking': 'ranking', });
lyr_PLachcha_4.set('fieldAliases', {'STT': 'STT', 'Tên Chùa': 'Tên Chùa', 'Tên Khmer': 'Tên Khmer', 'Tên Việ': 'Tên Việ', 'Năm Xây': 'Năm Xây', 'Địa Ch�': 'Địa Ch�', 'X': 'X', 'Y': 'Y', 'Huyện, t': 'Huyện, t', 'Hình ản': 'Hình ản', 'tuổi': 'tuổi', 'độ tu��': 'độ tu��', 'Phân hạ': 'Phân hạ', });
lyr_ScTrang_1.set('fieldImages', {'ID_0': '', 'ISO': '', 'NAME_0': '', 'ID_1': '', 'NAME_1': '', 'TYPE_1': '', 'ENGTYPE_1': '', 'NL_NAME_1': '', 'VARNAME_1': '', 'X': '', 'Y': '', 'Rotate': '', });
lyr_Tuicha_2.set('fieldImages', {'STT': '', 'Tên Chùa': '', 'Tên Khmer': '', 'Tên Việ': '', 'Năm Xây': '', 'Địa Ch�': '', 'X': '', 'Y': '', 'Huyện, t': '', 'Hình ản': '', 'tuổi': '', 'độ tu��': '', 'Phân hạ': '', });
lyr_RankingPagoda_3.set('fieldImages', {'STT': '', 'Ten Chua': '', 'Ten Khmer': '', 'Ten Viet': '', 'Nam Xay Du': '', 'Dia Chi': '', 'X': '', 'Y': '', 'Khu vuc': '', 'ranking': '', });
lyr_PLachcha_4.set('fieldImages', {'STT': '', 'Tên Chùa': '', 'Tên Khmer': '', 'Tên Việ': '', 'Năm Xây': '', 'Địa Ch�': '', 'X': '', 'Y': '', 'Huyện, t': '', 'Hình ản': '', 'tuổi': '', 'độ tu��': '', 'Phân hạ': '', });
lyr_ScTrang_1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', 'X': 'no label', 'Y': 'no label', 'Rotate': 'no label', });
lyr_Tuicha_2.set('fieldLabels', {'STT': 'no label', 'Tên Chùa': 'no label', 'Tên Khmer': 'no label', 'Tên Việ': 'no label', 'Năm Xây': 'no label', 'Địa Ch�': 'no label', 'X': 'no label', 'Y': 'no label', 'Huyện, t': 'no label', 'Hình ản': 'no label', 'tuổi': 'no label', 'độ tu��': 'no label', 'Phân hạ': 'no label', });
lyr_RankingPagoda_3.set('fieldLabels', {'STT': 'no label', 'Ten Chua': 'no label', 'Ten Khmer': 'no label', 'Ten Viet': 'no label', 'Nam Xay Du': 'no label', 'Dia Chi': 'no label', 'X': 'no label', 'Y': 'no label', 'Khu vuc': 'no label', 'ranking': 'no label', });
lyr_PLachcha_4.set('fieldLabels', {'STT': 'no label', 'Tên Chùa': 'no label', 'Tên Khmer': 'no label', 'Tên Việ': 'no label', 'Năm Xây': 'no label', 'Địa Ch�': 'no label', 'X': 'no label', 'Y': 'no label', 'Huyện, t': 'no label', 'Hình ản': 'no label', 'tuổi': 'no label', 'độ tu��': 'no label', 'Phân hạ': 'no label', });
lyr_PLachcha_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
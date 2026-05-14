var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_unesa_lidahwetan_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'unesa_lidahwetan<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/unesa_lidahwetan_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [0.000000, -263.000000, 350.000000, 0.000000]
        })
    });
var lyr_upnv_jatim_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'upnv_jatim<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/upnv_jatim_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [0.000000, -350.000000, 350.000000, 0.000000]
        })
    });
var lyr_its_manyar_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'its_manyar<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/its_manyar_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [0.000000, -197.000000, 350.000000, 0.000000]
        })
    });
var lyr_its_sukolilo_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'its_sukolilo<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/its_sukolilo_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [0.000000, -233.000000, 350.000000, 0.000000]
        })
    });
var lyr_uin_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'uin<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/uin_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [0.000000, -233.000000, 350.000000, 0.000000]
        })
    });
var lyr_unair_a_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'unair_a<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/unair_a_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2309233.018139, -20686265.359510, 2311776.118209, -20681792.741084]
        })
    });
var lyr_unair_b_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'unair_b<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/unair_b_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2308314.875822, -20686265.359510, 2311776.118209, -20681788.568725]
        })
    });
var lyr_unair_c_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'unair_c<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/unair_c_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2308544.411288, -20686265.359510, 2311776.118209, -20681789.624226]
        })
    });
var lyr_unesa_ketintang_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'unesa_ketintang<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/unesa_ketintang_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2308786.698807, -20686265.359510, 2311776.118209, -20681790.729390]
        })
    });
var format_aksesibilitas_univunion_10 = new ol.format.GeoJSON();
var features_aksesibilitas_univunion_10 = format_aksesibilitas_univunion_10.readFeatures(json_aksesibilitas_univunion_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aksesibilitas_univunion_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aksesibilitas_univunion_10.addFeatures(features_aksesibilitas_univunion_10);
var lyr_aksesibilitas_univunion_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aksesibilitas_univunion_10, 
                style: style_aksesibilitas_univunion_10,
                popuplayertitle: 'aksesibilitas_univ — union',
                interactive: true,
                title: '<img src="styles/legend/aksesibilitas_univunion_10.png" /> aksesibilitas_univ — union'
            });
var format_univ_surabaya_11 = new ol.format.GeoJSON();
var features_univ_surabaya_11 = format_univ_surabaya_11.readFeatures(json_univ_surabaya_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_univ_surabaya_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_univ_surabaya_11.addFeatures(features_univ_surabaya_11);
var lyr_univ_surabaya_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_univ_surabaya_11, 
                style: style_univ_surabaya_11,
                popuplayertitle: 'univ_surabaya',
                interactive: true,
                title: '<img src="styles/legend/univ_surabaya_11.png" /> univ_surabaya'
            });
var format_PTNSBY_12 = new ol.format.GeoJSON();
var features_PTNSBY_12 = format_PTNSBY_12.readFeatures(json_PTNSBY_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PTNSBY_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTNSBY_12.addFeatures(features_PTNSBY_12);
var lyr_PTNSBY_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PTNSBY_12, 
                style: style_PTNSBY_12,
                popuplayertitle: 'PTN SBY',
                interactive: true,
    title: 'PTN SBY<br />\
    <img src="styles/legend/PTNSBY_12_0.png" /> ITS Manyar<br />\
    <img src="styles/legend/PTNSBY_12_1.png" /> ITS Sukolilo<br />\
    <img src="styles/legend/PTNSBY_12_2.png" /> UIN Sunan Ampel<br />\
    <img src="styles/legend/PTNSBY_12_3.png" /> UNAIR A<br />\
    <img src="styles/legend/PTNSBY_12_4.png" /> UNAIR B<br />\
    <img src="styles/legend/PTNSBY_12_5.png" /> UNAIR C<br />\
    <img src="styles/legend/PTNSBY_12_6.png" /> UNESA Ketintang<br />\
    <img src="styles/legend/PTNSBY_12_7.png" /> UNESA Lidah Wetan<br />\
    <img src="styles/legend/PTNSBY_12_8.png" /> UPNV Jatim<br />' });

lyr_ESRIGraylight_0.setVisible(true);lyr_unesa_lidahwetan_1.setVisible(true);lyr_upnv_jatim_2.setVisible(true);lyr_its_manyar_3.setVisible(true);lyr_its_sukolilo_4.setVisible(true);lyr_uin_5.setVisible(true);lyr_unair_a_6.setVisible(true);lyr_unair_b_7.setVisible(true);lyr_unair_c_8.setVisible(true);lyr_unesa_ketintang_9.setVisible(true);lyr_aksesibilitas_univunion_10.setVisible(true);lyr_univ_surabaya_11.setVisible(true);lyr_PTNSBY_12.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_unesa_lidahwetan_1,lyr_upnv_jatim_2,lyr_its_manyar_3,lyr_its_sukolilo_4,lyr_uin_5,lyr_unair_a_6,lyr_unair_b_7,lyr_unair_c_8,lyr_unesa_ketintang_9,lyr_aksesibilitas_univunion_10,lyr_univ_surabaya_11,lyr_PTNSBY_12];
lyr_aksesibilitas_univunion_10.set('fieldAliases', {'fid': 'fid', 'Access': 'Access', });
lyr_univ_surabaya_11.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'Deskripsi Univ_QS WUR': 'Deskripsi Univ_QS WUR', 'Deskripsi Univ_Didirikan': 'Deskripsi Univ_Didirikan', 'Deskripsi Univ_Fakultas': 'Deskripsi Univ_Fakultas', });
lyr_PTNSBY_12.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'Ranking QS': 'Ranking QS', 'Tahun Berdiri': 'Tahun Berdiri', 'Fakultas': 'Fakultas', 'Foto': 'Foto', });
lyr_aksesibilitas_univunion_10.set('fieldImages', {'fid': '', 'Access': '', });
lyr_univ_surabaya_11.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'Deskripsi Univ_QS WUR': 'TextEdit', 'Deskripsi Univ_Didirikan': 'TextEdit', 'Deskripsi Univ_Fakultas': 'TextEdit', });
lyr_PTNSBY_12.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'Ranking QS': 'TextEdit', 'Tahun Berdiri': 'TextEdit', 'Fakultas': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_aksesibilitas_univunion_10.set('fieldLabels', {'fid': 'no label', 'Access': 'no label', });
lyr_univ_surabaya_11.set('fieldLabels', {'fid': 'hidden field', 'Nama': 'hidden field', 'Kampus': 'inline label - always visible', 'Deskripsi Univ_QS WUR': 'no label', 'Deskripsi Univ_Didirikan': 'no label', 'Deskripsi Univ_Fakultas': 'no label', });
lyr_PTNSBY_12.set('fieldLabels', {'fid': 'hidden field', 'Nama': 'hidden field', 'Kampus': 'inline label - always visible', 'Ranking QS': 'inline label - always visible', 'Tahun Berdiri': 'inline label - always visible', 'Fakultas': 'inline label - always visible', 'Foto': 'no label', });
lyr_PTNSBY_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
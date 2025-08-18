var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PE_Municipios_2024_1 = new ol.format.GeoJSON();
var features_PE_Municipios_2024_1 = format_PE_Municipios_2024_1.readFeatures(json_PE_Municipios_2024_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PE_Municipios_2024_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PE_Municipios_2024_1.addFeatures(features_PE_Municipios_2024_1);
var lyr_PE_Municipios_2024_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PE_Municipios_2024_1, 
                style: style_PE_Municipios_2024_1,
                popuplayertitle: 'PE_Municipios_2024',
                interactive: true,
                title: '<img src="styles/legend/PE_Municipios_2024_1.png" /> PE_Municipios_2024'
            });
var format_RegioMetropolitanadoRecife_2 = new ol.format.GeoJSON();
var features_RegioMetropolitanadoRecife_2 = format_RegioMetropolitanadoRecife_2.readFeatures(json_RegioMetropolitanadoRecife_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RegioMetropolitanadoRecife_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioMetropolitanadoRecife_2.addFeatures(features_RegioMetropolitanadoRecife_2);
var lyr_RegioMetropolitanadoRecife_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioMetropolitanadoRecife_2, 
                style: style_RegioMetropolitanadoRecife_2,
                popuplayertitle: 'Região Metropolitana do Recife',
                interactive: true,
    title: 'Região Metropolitana do Recife<br />\
    <img src="styles/legend/RegioMetropolitanadoRecife_2_0.png" /> Abreu e Lima<br />\
    <img src="styles/legend/RegioMetropolitanadoRecife_2_1.png" /> Araçoiaba<br />\
    <img src="styles/legend/RegioMetropolitanadoRecife_2_2.png" /> Cabo de Santo Agostinho<br />\
    <img src="styles/legend/RegioMetropolitanadoRecife_2_3.png" /> Camaragibe<br />\
    <img src="styles/legend/RegioMetropolitanadoRecife_2_4.png" /> Igarassu<br />\
    <img src="styles/legend/RegioMetropolitanadoRecife_2_5.png" /> Ilha de Itamaracá<br />\
    <img src="styles/legend/RegioMetropolitanadoRecife_2_6.png" /> Ipojuca<br />\
    <img src="styles/legend/RegioMetropolitanadoRecife_2_7.png" /> Itapissuma<br />\
    <img src="styles/legend/RegioMetropolitanadoRecife_2_8.png" /> Jaboatão dos Guararapes<br />\
    <img src="styles/legend/RegioMetropolitanadoRecife_2_9.png" /> Moreno<br />\
    <img src="styles/legend/RegioMetropolitanadoRecife_2_10.png" /> Olinda<br />\
    <img src="styles/legend/RegioMetropolitanadoRecife_2_11.png" /> Paulista<br />\
    <img src="styles/legend/RegioMetropolitanadoRecife_2_12.png" /> Recife<br />\
    <img src="styles/legend/RegioMetropolitanadoRecife_2_13.png" /> São Lourenço da Mata<br />\
    <img src="styles/legend/RegioMetropolitanadoRecife_2_14.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_PE_Municipios_2024_1.setVisible(true);lyr_RegioMetropolitanadoRecife_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PE_Municipios_2024_1,lyr_RegioMetropolitanadoRecife_2];
lyr_PE_Municipios_2024_1.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', });
lyr_RegioMetropolitanadoRecife_2.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', });
lyr_PE_Municipios_2024_1.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_RegioMetropolitanadoRecife_2.set('fieldImages', {'fid': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_PE_Municipios_2024_1.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', });
lyr_RegioMetropolitanadoRecife_2.set('fieldLabels', {'fid': 'no label', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', });
lyr_RegioMetropolitanadoRecife_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
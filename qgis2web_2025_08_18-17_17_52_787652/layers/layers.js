var wms_layers = [];

var format_malhacicloviariapermanente_jul20254326_INFRAESTRUTURA_CICLOVIARIA22_07_2025_0 = new ol.format.GeoJSON();
var features_malhacicloviariapermanente_jul20254326_INFRAESTRUTURA_CICLOVIARIA22_07_2025_0 = format_malhacicloviariapermanente_jul20254326_INFRAESTRUTURA_CICLOVIARIA22_07_2025_0.readFeatures(json_malhacicloviariapermanente_jul20254326_INFRAESTRUTURA_CICLOVIARIA22_07_2025_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_malhacicloviariapermanente_jul20254326_INFRAESTRUTURA_CICLOVIARIA22_07_2025_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_malhacicloviariapermanente_jul20254326_INFRAESTRUTURA_CICLOVIARIA22_07_2025_0.addFeatures(features_malhacicloviariapermanente_jul20254326_INFRAESTRUTURA_CICLOVIARIA22_07_2025_0);
var lyr_malhacicloviariapermanente_jul20254326_INFRAESTRUTURA_CICLOVIARIA22_07_2025_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_malhacicloviariapermanente_jul20254326_INFRAESTRUTURA_CICLOVIARIA22_07_2025_0, 
                style: style_malhacicloviariapermanente_jul20254326_INFRAESTRUTURA_CICLOVIARIA22_07_2025_0,
                popuplayertitle: 'malhacicloviariapermanente_jul2025 4326_INFRAESTRUTURA_CICLOVIARIA 22_07_2025',
                interactive: true,
                title: '<img src="styles/legend/malhacicloviariapermanente_jul20254326_INFRAESTRUTURA_CICLOVIARIA22_07_2025_0.png" /> malhacicloviariapermanente_jul2025 4326_INFRAESTRUTURA_CICLOVIARIA 22_07_2025'
            });
var format_rotasoperacionaisrecifeago2023RotasOperacionaisRecife_1 = new ol.format.GeoJSON();
var features_rotasoperacionaisrecifeago2023RotasOperacionaisRecife_1 = format_rotasoperacionaisrecifeago2023RotasOperacionaisRecife_1.readFeatures(json_rotasoperacionaisrecifeago2023RotasOperacionaisRecife_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rotasoperacionaisrecifeago2023RotasOperacionaisRecife_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rotasoperacionaisrecifeago2023RotasOperacionaisRecife_1.addFeatures(features_rotasoperacionaisrecifeago2023RotasOperacionaisRecife_1);
var lyr_rotasoperacionaisrecifeago2023RotasOperacionaisRecife_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rotasoperacionaisrecifeago2023RotasOperacionaisRecife_1, 
                style: style_rotasoperacionaisrecifeago2023RotasOperacionaisRecife_1,
                popuplayertitle: 'rotasoperacionaisrecife-ago2023 RotasOperacionaisRecife',
                interactive: true,
                title: '<img src="styles/legend/rotasoperacionaisrecifeago2023RotasOperacionaisRecife_1.png" /> rotasoperacionaisrecife-ago2023 RotasOperacionaisRecife'
            });

lyr_malhacicloviariapermanente_jul20254326_INFRAESTRUTURA_CICLOVIARIA22_07_2025_0.setVisible(true);lyr_rotasoperacionaisrecifeago2023RotasOperacionaisRecife_1.setVisible(true);
var layersList = [lyr_malhacicloviariapermanente_jul20254326_INFRAESTRUTURA_CICLOVIARIA22_07_2025_0,lyr_rotasoperacionaisrecifeago2023RotasOperacionaisRecife_1];
lyr_malhacicloviariapermanente_jul20254326_INFRAESTRUTURA_CICLOVIARIA22_07_2025_0.set('fieldAliases', {'Nome': 'Nome', 'Logradouro': 'Logradouro', 'Tipo': 'Tipo', 'Sentido': 'Sentido', 'Bairro': 'Bairro', });
lyr_rotasoperacionaisrecifeago2023RotasOperacionaisRecife_1.set('fieldAliases', {'Nome': 'Nome', 'Sentido': 'Sentido', });
lyr_malhacicloviariapermanente_jul20254326_INFRAESTRUTURA_CICLOVIARIA22_07_2025_0.set('fieldImages', {'Nome': '', 'Logradouro': '', 'Tipo': '', 'Sentido': '', 'Bairro': '', });
lyr_rotasoperacionaisrecifeago2023RotasOperacionaisRecife_1.set('fieldImages', {'Nome': '', 'Sentido': '', });
lyr_malhacicloviariapermanente_jul20254326_INFRAESTRUTURA_CICLOVIARIA22_07_2025_0.set('fieldLabels', {'Nome': 'no label', 'Logradouro': 'no label', 'Tipo': 'no label', 'Sentido': 'no label', 'Bairro': 'no label', });
lyr_rotasoperacionaisrecifeago2023RotasOperacionaisRecife_1.set('fieldLabels', {'Nome': 'no label', 'Sentido': 'no label', });
lyr_rotasoperacionaisrecifeago2023RotasOperacionaisRecife_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
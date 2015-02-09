/**
 * @name FieldSheetController
 * @constructor
 * @desc Controla la vista para capturar la hoja de campo
 * @this {Object} $scope - Contenedor para el modelo, AngularJS
 * @param {Object} CloudService - Proveedor de datos, Coberturas nubes
 * @param {Object} WindService - Proveedor de datos, Direcciones viento
 * @param {Object} WaveService - Proveedor de datos, Intensidades oleaje
 * @param {Object} SamplingNormService - Proveedor de datos, Normas muestreo
 * @param {Object} PointService - Proveedor de datos, Puntos muestreo
 * @param {Object} FieldParameterService - Proveedor de datos, Parámetros campo
 * @param {Object} PreservationService - Proveedor de datos, Preservaciones
 * @param {Object} FieldSheetService - Proveedor de datos, Hojas de campo
 */
function FieldSheetController(CloudService, WindService, WaveService,
  SamplingNormService, PointService, FieldParameterService,
  PreservationService, FieldSheetService) {
  var vm = this;
  vm.fieldSheet = FieldSheetService.query();
  vm.cloudCovers = CloudService.query();
  vm.windDirections = WindService.query();
  vm.waveIntensities = WaveService.query();
  vm.samplingNorms = SamplingNormService.query();
  vm.points = PointService.query();
  vm.fieldParameters = FieldParameterService.query();
  vm.preservations = PreservationService.query();

  vm.temp1 = 0;
  vm.temp2 = 0;
  vm.temp3 = 0;
  vm.temp = 0;
  vm.tempAmb1 = 0;
  vm.tempAmb2 = 0;
  vm.tempAmb3 = 0;
  vm.tempAmb = 0;
  vm.ph1 = 0;
  vm.ph2 = 0;
  vm.ph3 = 0;
  vm.ph = 0;
  vm.cond1 = 0;
  vm.cond2 = 0;
  vm.cond3 = 0;
  vm.cond = 0;
  vm.od1 = 0;
  vm.od2 = 0;
  vm.od3 = 0;
  vm.od = 0;
  vm.cr1 = 0;
  vm.cr2 = 0;
  vm.cr3 = 0;
  vm.cr = 0;

  vm.tempAvg = tempAvg;
  vm.tempAmbAvg = tempAmbAvg;
  vm.phAvg = phAvg;
  vm.condAvg = condAvg;
  vm.odAvg = odAvg;
  vm.crAvg = crAvg;

  vm.selectCloudCover = selectCloudCover;
  vm.selectWindDirection = selectWindDirection;
  vm.selectWaveIntensity = selectWaveIntensity;
  vm.selectSamplingNorm = selectSamplingNorm;
  vm.selectPoint = selectPoint;

  vm.validateFieldSheetForm = validateFieldSheetForm;
  vm.submitFieldSheetForm = submitFieldSheetForm;

  function selectItemFromCollection(id, collection, field) {
    var i = 0,
    l = collection.length,
    item = {};
    for (i; i < l; i += 1) {
      if (collection[i][field] == id)
      {
        item = collection[i];
        break;
      }
    }
    return item;
  }

  function averageFromArray(arr) {
    var i = 0,
    l = arr.length,
    sum = 0;
    if (l < 1)
    {
      return 0;
    }
    for (i; i < l; i++) {
      sum += parseFloat(arr[i]);
    }
    return Math.round((sum / l) * 1000 * 1000) / (1000 * 1000);
  }

  function tempAvg(){
    vm.temp = averageFromArray([
      vm.temp1,
      vm.temp2,
      vm.temp3
    ]);
    return vm.temp;
  }

  function tempAmbAvg(){
    vm.tempAmb = averageFromArray([
      vm.tempAmb1,
      vm.tempAmb2,
      vm.tempAmb3
    ]);
    return vm.tempAmb;
  }

  function phAvg() {
    vm.ph = averageFromArray([
      vm.ph1,
      vm.ph2,
      vm.ph3
    ]);
    return vm.ph;
  }

  function condAvg() {
    vm.cond = averageFromArray([
      vm.cond1,
      vm.cond2,
      vm.cond3
    ]);
    return vm.cond;
  }

  function odAvg() {
    vm.od = averageFromArray([
      vm.od1,
      vm.od2,
      vm.od3
    ]);
    return vm.od;
  }

  function crAvg() {
    vm.cr = averageFromArray([
      vm.cr1,
      vm.cr2,
      vm.cr3
    ]);
    return vm.cr;
  }

  function selectCloudCover(idCloud) {
    selectItemFromCollection(
      idCloud,'id_cobertura_nubes', vm.cloudCovers
    );
  }

  function selectWindDirection(idWind) {
    selectItemFromCollection(
      idWind,'id_direccion_viento', vm.windDirections
    );
  }

  function selectWaveIntensity(idWave) {
    selectItemFromCollection(
      idWave,'id_oleaje', vm.waveIntensities
    );
  }

  function selectSamplingNorm(idNorm) {
    selectItemFromCollection(
      idNorm,'id_metodo_muestreo', vm.samplingNorms
    );
  }

  function selectPoint(idPoint) {
    selectItemFromCollection(
      idPoint,'id_punto_muestreo', vm.points
    );
  }

  function validateFieldSheetForm() {

  }

  function submitFieldSheetForm() {

  }
}

angular
  .module('siclabApp')
  .controller('FieldSheetController',
    [
      'CloudService', 'WindService', 'WaveService',
      'SamplingNormService', 'PointService', 'FieldParameterService',
      'PreservationService', 'FieldSheetService',
      FieldSheetController
    ]
  );
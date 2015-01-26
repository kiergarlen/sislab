//CONTROLLERS

/**
 * @name LoginController
 * @constructor
 * @desc Controla la vista para Login
 * @this {Object} $scope - Contenedor para el modelo, AngularJS
 * @param {Object} $http - Manejo de peticiones HTTP [AngularJS]
 * @param {Object} LoginService - Proveedor de datos, Login
 */
function LoginController($scope, $http, Loginservice) {
  var vm = this;
  vm.message = '';
  vm.user = {username: '', password: ''};
  vm.submit = submitMessage;
  vm.login = login;

  function submitMessage(msg, usr, pwd) {
    msg = [
      msg,
      ' USER: ',
      usr,
      ' PASSWORD: ',
      pwd
    ].join('');
    return msg;
  }

  function login() {
    if ($scope.loginForm.$valid)
    {
      if (vm.user.username == 'rgarcia' &&
        vm.user.password == 'rgarcia'
      )
      {
        vm.message = 'Enviando...';
        vm.submit(
          '',
          vm.user.username,
          vm.user.password
        );
      }
      else
      {
        vm.message = 'Usuario o contraseña incorrectos';
      }
    }
    else
    {
      vm.message = 'Debe ingresar usuario y/o contraseña';
    }
  }
}

angular
  .module('siclabApp')
  .controller('LoginController',
    [
      '$scope', '$http',
      'LoginService',
      LoginController
    ]
  );

/**
 * @name MenuController
 * @constructor
 * @desc Controla la vista para el Menú principal
 * @this {Object} $scope - Contenedor para el modelo, AngularJS
 * @param {Object} MenuService - Proveedor de datos, Menú
 */
function MenuController($scope, MenuService) {
  $scope.menu = MenuService.query();
}

angular
  .module('siclabApp')
  .controller('MenuController',
    [
      '$scope',
      'MenuService',
      MenuController
    ]
  );

/**
 * @name TasksController
 * @constructor
 * @desc Controla la vista para Bienvenida
 * @this {Object} $scope - Contenedor para el modelo, AngularJS
 * @param {Object} TaskService - Proveedor de datos, Bienvenida
 */
function TasksController(TaskService) {
  var vm = this;
  vm.welcome = TaskService.query();
}

angular
  .module('siclabApp')
  .controller('TasksController',
    [
      'TaskService',
      TasksController
    ]
  );

/**
 * @name ClientsListController
 * @constructor
 * @desc Controla la vista para el listado de Clientes
 * @this {Object} $scope - Contenedor para el modelo, AngularJS
 * @param {Object} ClientService - Proveedor de datos, Cliente
 */
function ClientsListController(ClientService) {
  var vm = this;
  vm.clients = ClientService.query();
}

angular
  .module('siclabApp')
  .controller('ClientsListController',
    [
      'ClientService',
      ClientsListController
    ]
  );

/**
 * @name ClientDetailController
 * @constructor
 * @desc Controla la vista para con el detalle de un Cliente
 * @this {Object} $scope - Contenedor para el modelo, AngularJS
 * @param {Object} ClientDetailService - Proveedor de datos, Detalle cliente
 */
function ClientDetailController($scope, ClientDetailService) {
  $scope.clientDetail = ClientDetailService.query();
}

angular
  .module('siclabApp')
  .controller('ClientDetailController',
    [
      '$scope',
      'ClientDetailService',
      ClientsListController
    ]
  );

/**
 * @name DepartmentsListController
 * @constructor
 * @desc Controla la vista para el listado de Áreas
 * @this {Object} $scope - Contenedor para el modelo, AngularJS
 * @param {Object} DepartmentService - Proveedor de datos, Áreas
 */
function DepartmentsListController($scope, DepartmentService) {
  $scope.departments = DepartmentService.query();
}

angular
  .module('siclabApp')
  .controller('DepartmentsListController',
    [
      '$scope',
      'DepartmentService',
      DepartmentsListController
    ]
  );

/**
 * @name EmployeesListController
 * @constructor
 * @desc Controla la vista para el listado de Empleados
 * @this {Object} $scope - Contenedor para el modelo, AngularJS
 * @param {Object} EmployeeService - Proveedor de datos, Empleados
 */
function EmployeesListController($scope, EmployeeService) {
  $scope.employees = EmployeeService.query();
}

angular
  .module('siclabApp')
  .controller('EmployeesListController',
    [
      '$scope',
      'EmployeeService',
      EmployeesListController
    ]
  );

/**
 * @name UsersListController
 * @constructor
 * @desc Controla la vista para el listado de Usuarios
 * @this {Object} $scope - Contenedor para el modelo, AngularJS
 * @param {Object} UserService - Proveedor de datos, Usuarios
 */
function UsersListController ($scope, UserService) {
  $scope.users = UserService.query();
}

angular
  .module('siclabApp')
  .controller('UsersListController',
    [
      '$scope',
      'UserService',
      UsersListController
    ]
  );

/**
 * @name NormsListController
 * @constructor
 * @desc Controla la vista para el listado de Normas
 * @this {Object} $scope - Contenedor para el modelo, AngularJS
 * @param {Object} NormService - Proveedor de datos, Normas
 */
function NormsListController($scope, NormService) {
  $scope.norms = NormService.query();
}

angular
  .module('siclabApp')
  .controller('NormsListController',
  [
    '$scope',
    'NormService',
    NormsListController
  ]
  );

/**
 * @name QuoteController
 * @constructor
 * @desc Controla la vista para capturar una Solicitud/Cotización
 * @this {Object} $scope - Contenedor para el modelo, AngularJS
 * @param {Object} ClientService - Proveedor de datos, Clientes
 * @param {Object} ParameterService - Proveedor de datos, Parámetros
 * @param {Object} NormService - Proveedor de datos, Normas
 * @param {Object} SamplingTypeService - Proveedor de datos, Tipos muestreo
 * @param {Object} QuoteService - Proveedor de datos, Cotizaciones
 */
function QuoteController(ClientService, ParameterService, NormService,
  SamplingTypeService, QuoteService) {
  var vm = this;
  vm.clients = ClientService.query();
  vm.parameters = ParameterService.query();
  vm.norms = NormService.query();
  vm.samplingTypes = SamplingTypeService.query();
  vm.quote = QuoteService.query();
  vm.clientDetailsIsShown = false;
  vm.totalCost = 0;

  vm.toggleClientInfo = toggleClientInfo;
  vm.selectClient = selectClient;
  vm.totalParameter = totalParameter;
  vm.selectNorm = selectNorm;
  vm.selectNormParameters = selectNormParameters;
  vm.selectSamplingType = selectSamplingType;
  vm.submitQuoteForm = submitQuoteForm;

  function toggleClientInfo() {
    var id = vm.quote.id_cliente;
    vm.clientDetailsIsShown = (
      vm.quote.id_cliente > 0 &&
      vm.selectClient(id).cliente &&
      !vm.clientDetailsIsShown
    );
  }

  function selectClient(idClient) {
    var i = 0, l = vm.clients.length;
    vm.quote.cliente = {};
    for (i; i < l; i += 1) {
      if (vm.clients[i].id_cliente == idClient)
      {
        vm.quote.cliente = vm.clients[i];
        break;
      }
    }
    return vm.quote.cliente;
  }

  function totalParameter(){
    var t = 0;
    angular.forEach(vm.parameters, function(s){
      if(s.selected)
      {
        t += parseFloat(s.precio);
      }
    });
    t = t * vm.quote.cliente.tasa;
    vm.totalCost = (Math.round(t * 100) / 100);
    vm.quote.total = vm.totalCost;
    return vm.totalCost;
  }

  function selectNorm(idNorm) {
    var i, l;
    l = vm.norms.length;
    vm.quote.norma = {};
    vm.quote.parametros_seleccionados = [];
    for (i = 0; i < l; i += 1) {
      if (vm.norms[i].id_norma == idNorm)
      {
        vm.quote.norma = vm.norms[i];
        break;
      }
    }
    vm.selectNormParameters();
    return '';
  }

  function selectNormParameters() {
    var i, l, j, m;
    l = vm.parameters.length;
    for(i = 0; i < l; i += 1) {
      vm.parameters[i].selected = false;
      if (vm.quote.norma.parametros !== undefined)
      {
        m = vm.quote.norma.parametros.length;
        for (j = 0; j < m; j += 1) {
          if (vm.parameters[i].id_parametro ==
            vm.quote.norma.parametros[j].id_parametro)
          {
            vm.parameters[i].selected = true;
          }
        }
      }
    }
  }

  function selectSamplingType() {
    var i, l;
    l = vm.samplingTypes.length;
    for (i = 0; i < l; i += 1) {
      vn.samplingTypes[i].selected =
      (vm.samplingTypes[i].id_tipo_muestreo ==
        vm.quote.id_tipo_muestreo);
    }
  }

  function submitQuoteForm() {

  }
}

angular
  .module('siclabApp')
  .controller('QuoteController',
    [
      'ClientService', 'ParameterService', 'NormService',
      'SamplingTypeService', 'QuoteService',
      QuoteController
    ]
  );

/**
 * @name OrderController
 * @constructor
 * @desc Controla la vista para capturar una Orden de muestreo
 * @this {Object} $scope - Contenedor para el modelo, AngularJS
 * @param {Object} QuoteService - Proveedor de datos, Cotizaciones
 * @param {Object} OrderSourceService - Proveedor de datos, Orígenes orden
 * @param {Object} MatrixService - Proveedor de datos, Tipos matriz
 * @param {Object} ParameterService - Proveedor de datos, Parámetros
 * @param {Object} SamplingSupervisorService - Proveedor de datos, Supervisores muestreo
 * @param {Object} OrderService - Proveedor de datos, Orden muestreo
 */
function OrderController(QuoteService, OrderSourceService,
  MatrixService, ParameterService, SamplingSupervisorService,
  OrderService) {
  var vm = this;
  vm.order = OrderService.query();
  vm.quote = QuoteService.query();
  vm.orderSources = OrderSourceService.query();
  vm.matrices = MatrixService.query();
  vm.supervisors = SamplingSupervisorService.query();
  vm.parameters = ParameterService.query();

  vm.selectOrderSource = selectOrderSource;
  vm.selectMatrix = selectMatrix;
  vm.selectSupervisor = selectSupervisor;
  vm.validateOrderForm = validateOrderForm;
  vm.submitOrderForm = submitOrderForm;

  function selectOrderSource(idSource) {
    var i = 0, l = vm.orderSources.length;
    vm.order.origen_orden = {};
    for (i; i < l; i += 1) {
      if (vm.orderSources[i].id_origen_orden == idSource)
      {
        vm.order.origen_orden = vm.orderSources[i];
        break;
      }
    }
    return vm.order.origen_orden;
  }

  function selectMatrix(idMatrix) {
    var i = 0, l = vm.matrices.length;
    vm.order.matriz = {};
    for (i; i < l; i += 1) {
      if (vm.matrices[i].id_matriz == idMatrix)
      {
        vm.order.matriz = vm.matrices[i];
        break;
      }
    }
    return vm.order.matriz;
  }

  function selectSupervisor(idSupervisor) {
    var i = 0, l = vm.supervisors.length;
    vm.order.id_responsable_muestreo = {};
    for (i; i < l; i += 1) {
      if (vm.supervisors[i].id_id_responsable_muestreo == idSupervisor)
      {
        vm.order.id_responsable_muestreo = vm.supervisors[i];
        break;
      }
    }
    return vm.order.id_responsable_muestreo;
  }

  function validateOrderForm() {

  }

  function submitOrderForm() {

  }
}

angular
  .module('siclabApp')
  .controller('OrderController',
    [
      'QuoteService','OrderSourceService','MatrixService',
      'ParameterService','SamplingSupervisorService','OrderService',
      OrderController
    ]
  );

/**
 * @name PlanController
 * @constructor
 * @desc Controla la vista para capturar un Plan de muestreo
 * @this {Object} $scope - Contenedor para el modelo, AngularJS
 */
function PlanController($scope) {
  //
}

angular
  .module('siclabApp')
  .controller('PlanController',
    [
      '$scope',
      PlanController
    ]
  );

/**
 * @name PlanCheckController
 * @constructor
 * @desc Controla la vista para capturar la verificación de un Plan de muestreo
 * @this {Object} $scope - Contenedor para el modelo, AngularJS
 */
function PlanCheckController($scope) {
  //
}

angular
  .module('siclabApp')
  .controller('PlanCheckController',
    [
      '$scope',
      PlanCheckController
    ]
  );

/**
 * @name PlanContainersController
 * @constructor
 * @desc Controla la vista para capturar los recipientes de un Plan de muestreo
 * @this {Object} $scope - Contenedor para el modelo, AngularJS
 */
function PlanContainersController($scope) {
  //
}

angular
  .module('siclabApp')
  .controller('PlanContainersController',
    [
      '$scope',
      PlanContainersController
    ]
  );

/**
 * @name PlanSubstancesController
 * @constructor
 * @desc Controla la vista para capturar los reactivos de un Plan de muestreo
 * @this {Object} $scope - Contenedor para el modelo, AngularJS
 */
function PlanSubstancesController($scope) {
  //
}

angular
  .module('siclabApp')
  .controller('PlanSubstancesController',
    [
      '$scope',
      PlanSubstancesController
    ]
  );

/**
 * @name PlanMaterialsController
 * @constructor
 * @desc Controla la vista para capturar los materiales de un Plan de muestreo
 * @this {Object} $scope - Contenedor para el modelo, AngularJS
 */
function PlanMaterialsController($scope) {
  //
}

angular
  .module('siclabApp')
  .controller('PlanMaterialsController',
    [
      '$scope',
      PlanMaterialsController
    ]
  );

/**
 * @name PlanCoolersController
 * @constructor
 * @desc Controla la vista para capturar las hieleras de un Plan de muestreo
 * @this {Object} $scope - Contenedor para el modelo, AngularJS
 */
function PlanCoolersController($scope) {
  //
}

angular
  .module('siclabApp')
  .controller('PlanCoolersController',
    [
      '$scope',
      PlanCoolersController
    ]
  );

/**
 * @name ReceptionController
 * @constructor
 * @desc Controla la vista para capturar la recepción de muestras
 * @this {Object} $scope - Contenedor para el modelo, AngularJS
 * @param {Object} ReceptionistService - Proveedor de datos, Recepcionistas
 * @param {Object} ReceptionService - Proveedor de datos, Recepción muestras
 */
function ReceptionController(ReceptionistService, ReceptionService) {
  var vm = this;
  vm.receptionists = ReceptionistService.query();
  vm.reception = ReceptionService.query();

  vm.selectReceptionist = selectReceptionist;
  vm.validateReceptionForm = validateReceptionForm;
  vm.submitReceptionForm = submitReceptionForm;

  function selectReceptionist(idRecepcionist) {
    var i = 0, l = vm.receptionists.length;
    vm.reception.recepcionista = {};
    for (i; i < l; i += 1) {
      if (vm.receptionists[i].id_empleado == idRecepcionist)
      {
        vm.reception.recepcionista = vm.receptionists[i];
        break;
      }
    }
    return vm.reception.recepcionista;
  }

  function validateReceptionForm() {

  }

  function submitReceptionForm() {

  }
}

angular
  .module('siclabApp')
  .controller('ReceptionController',
    [
      'ReceptionistService', 'ReceptionService',
      ReceptionController
    ]
  );

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

  vm.temp_1 = 0;
  vm.temp_2 = 0;
  vm.temp_3 = 0;
  vm.temp = 0;
  vm.ph_1 = 0;
  vm.ph_2 = 0;
  vm.ph_3 = 0;
  vm.ph = 0;
  vm.cond_1 = 0;
  vm.cond_2 = 0;
  vm.cond_3 = 0;
  vm.cond = 0;
  vm.od_1 = 0;
  vm.od_2 = 0;
  vm.od_3 = 0;
  vm.od = 0;

  vm.tempAvg = tempAvg;
  vm.phAvg = phAvg;
  vm.condAvg = condAvg;
  vm.odAvg = odAvg;

  vm.selectCloudCover = selectCloudCover;
  vm.selectWindDirection = selectWindDirection;
  vm.selectWaveIntensity = selectWaveIntensity;
  vm.selectSamplingNorm = selectSamplingNorm;
  vm.selectPoint = selectPoint;

  vm.validateFieldSheetForm = validateFieldSheetForm;
  vm.submitFieldSheetForm = submitFieldSheetForm;

  function selectItemFromCollection(id, collection, field) {
    var i = 0, l = collection.length,
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
      vm.temp_1,
      vm.temp_2,
      vm.temp_3
    ]);
    return vm.temp;
  }

  function phAvg() {
    vm.ph = averageFromArray([
      vm.ph_1,
      vm.ph_2,
      vm.ph_3
    ]);
    return vm.ph;
  }

  function condAvg() {
    vm.cond = averageFromArray([
      vm.cond_1,
      vm.cond_2,
      vm.cond_3
    ]);
    return vm.cond;
  }

  function odAvg() {
    vm.od = averageFromArray([
      vm.od_1,
      vm.od_2,
      vm.od_3
    ]);
    return vm.od;
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

/**
 * @name CustodyController
 * @constructor
 * @desc Controla la vista para capturar las Hojas de custodia
 * @this {Object} $scope - Contenedor para el modelo, AngularJS
 * @param {Object} PreservationService - Proveedor de datos, Preservaciones
 * @param {Object} ExpirationService - Proveedor de datos, Vigencias
 * @param {Object} RequiredVolumeService - Proveedor de datos, Volúmenes requeridos
 * @param {Object} ContainerService - Proveedor de datos, Recipientes
 * @param {Object} CheckerService - Proveedor de datos, Responsables verificación
 * @param {Object} CustodyService - Proveedor de datos, Cadenas custodia
 */
function CustodyController(PreservationService, ExpirationService,
  RequiredVolumeService, ContainerService, CheckerService,
  CustodyService) {
  var vm = this;
  vm.preservations = PreservationService.query();
  vm.expirations = ExpirationService.query();
  vm.volumes = RequiredVolumeService.query();
  vm.containers = ContainerService.query();
  vm.checkers = CheckerService.query();
  vm.custody = CustodyService.query();

  vm.selectChecker = selectChecker;

  vm.validateCustodyForm = validateCustodyForm;
  vm.submitCustodyForm = submitCustodyForm;

  function selectItemFromCollection(id, collection, field) {
    var i = 0, l = collection.length,
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

  function selectChecker(idChecker) {
    selectItemFromCollection(
      idChecker,'id_responsable_verificacion', vm.checkers
    );
  }

  function validateCustodyForm() {

  }

  function submitCustodyForm () {

  }
}

angular
  .module('siclabApp')
  .controller('CustodyController',
    [
      'PreservationService', 'ExpirationService', 'RequiredVolumeService',
      'ContainerService', 'CheckerService', 'CustodyService',
      CustodyController
    ]
  );

/**
 * @name TaskAssignController
 * @constructor
 * @desc Controla la vista para capturar las Órdenes de trabajo
 * @this {Object} $scope - Contenedor para el modelo, AngularJS
 * @param {Object} ChemicalSupervisorService - Proveedor de datos, Supervisores físicoquimico
 * @param {Object} MetalSupervisorService - Proveedor de datos, Supervisores metales pesados
 * @param {Object} BioSupervisorService - Proveedor de datos, Supervisores microbiológico
 * @param {Object} TaskAssignService - Proveedor de datos, Órdenes trabajo
 */
function TaskAssignController(ChemicalSupervisorService,
  MetalSupervisorService, BioSupervisorService, TaskAssignService) {
  var vm = this;
  vm.chemicalSupervisors = ChemicalSupervisorService.query();
  vm.metalSupervisors = MetalSupervisorService.query();
  vm.bioSupervisors = BioSupervisorService.query();
  vm.taskAssign = TaskAssignService.query();

  vm.selectChemicalSupervisor = selectChemicalSupervisor;
  vm.selectMetalSupervisor = selectMetalSupervisor;
  vm.selectSupervisorBio = selectSupervisorBio;

  vm.validateTaskAssignForm = validateTaskAssignForm;
  vm.submitTaskAssignForm = submitTaskAssignForm;

  function selectItemFromCollection(id, collection, field) {
    var i = 0, l = collection.length,
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

  function selectChemicalSupervisor(idSup) {
    selectItemFromCollection(
      idSup,'id_empleado', vm.chemicalSupervisors
    );
  }

  function selectMetalSupervisor(idSup) {
    selectItemFromCollection(
      idSup,'id_empleado', vm.metalSupervisors
    );
  }

  function selectSupervisorBio(idSup) {
    selectItemFromCollection(
      idSup,'id_empleado', vm.bioSupervisors
    );
  }

  function validateTaskAssignForm() {

  }

  function submitTaskAssignForm () {

  }
}

angular
  .module('siclabApp')
  .controller('TaskAssignController',
    [
      'ChemicalSupervisorService', 'MetalSupervisorService',
      'BioSupervisorService', 'TaskAssignService',
      TaskAssignController
    ]
  );


/*
function Controller(jwtHelper) {
  var aToken = [
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9',
    '.eyJuYW1lIjoiQXV0aDAiLCJleHAiOjE0MTIyMzQ3MzB9'.
    '.ZJzxkw4DNohrdk209erOGyVhfZiAQTRLHMR0BuNUuBA'
  ].join('');
  var tokenPayload = jwtHelper.decodeToken(aToken);

  // check token expiration date
  var expireDate = jwtHelper.getTokenExpirationDate(aToken);
  // check if token is expired
  var isExpired = jwtHeler.isTokenExpipred(aToken);
}


angular
  .module('app', ['angular-jwt'])
  .controller('Controller',
    Controller
  );

angular
  .module('app', ['angular-jwt'])
  .config(
    function Config($httpProvider, jwtInterceptorProvider) {
      jwtInterceptorProvider.tokenGetter = function (jwtHelper, $http) {
        //get token from localStorage
        var jwt = localStorage.getItem('JWT');
        //get refresh_token from localStorage
        var refreshToken = localStorage.getItem('refresh_token');
        if (jwtHelper.isTokenExpired(jwt))
        {
          //This is a promise of a JWT id_token
          return $http({
            url: '/delegation',
            //This will not sen the JWT for this call
            skipAuthorization: true,
            //Set POST method
            method: 'POST',
            //refresh refresh_token
            refresh_token: refreshToken
          }).then(function(response) {
            //At the promise store token in localStorage
            localStorage.setItem('JWT', response.data.jwt);
            return jwt;
          });
        }
        else
        {
          //return token that is still valid
          return jwt;
        }
        //return token form localStorage
        return localStorage.getItem('JWT');
      };
      $httpProvider.interceptors.push('JWT');
    }
  )
  .controller('Controller',
    function Controller($http) {
      //if localStorage contains the id_token it will be sent in
      //the request
      //Authorization: Bearer [yourToken] will be sent
      //That token might be a new one which was got from the refresh_token
      $http({
        url: '/hi',
        method:'GET'
      });
    }
  );
*/
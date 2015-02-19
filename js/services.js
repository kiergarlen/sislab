/*
 * @name AnalysisListService
 * @constructor
 * @desc Proveedor de datos, consulta de Análisis
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function AnalysisListService($resource) {
  return $resource('models/analysis_list.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('AnalysisListService', ['$resource', AnalysisListService]);;
/*
 * @name AnalysisService
 * @constructor
 * @desc Proveedor de datos, selección de formato de captura de Análisis
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function AnalysisService($resource) {
  return $resource('models/analysis_select.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('AnalysisService', ['$resource', AnalysisService]);;
/*
 * @name BioSupervisorService
 * @constructor
 * @desc Proveedor de datos, Supervisores microbiológico
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function BioSupervisorService($resource) {
  return $resource('models/bio_supervisors.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('BioSupervisorService', ['$resource', BioSupervisorService]);;
/*
 * @name CheckerService
 * @constructor
 * @desc Proveedor de datos, Responsables verificación
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function CheckerService($resource) {
  return $resource('models/checkers.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('CheckerService', ['$resource', CheckerService]);;
/*
 * @name ChemicalSupervisorService
 * @constructor
 * @desc Proveedor de datos, Supervisores físicoquimico
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function ChemicalSupervisorService($resource) {
  return $resource('models/chemical_supervisors.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('ChemicalSupervisorService', ['$resource', ChemicalSupervisorService]);;
/*
 * @name CityService
 * @constructor
 * @desc Proveedor de datos, Localidades
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function CityService($resource) {
  return $resource('models/cities.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('CityService', ['$resource', CityService]);;
/*
 * @name ClientDetailService
 * @constructor
 * @desc Proveedor de datos, Detalle cliente
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function ClientDetailService($resource) {
  return $resource('models/clients/:clientId.json', {}, {
    query: {method:'GET', params:{clientId:'id_cliente'}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('ClientDetailService', ['$resource',  ClientDetailService]);
;
/*
 * @name ClientService
 * @constructor
 * @desc Proveedor de datos, Cliente
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function ClientService($resource) {
  return $resource('models/clients.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('ClientService', ['$resource', ClientService]);;
/*
 * @name CloudService
 * @constructor
 * @desc Proveedor de datos, Coberturas nubes
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function CloudService($resource) {
  return $resource('models/clouds.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('CloudService', ['$resource', CloudService]);;
/*
 * @name ContainerService
 * @constructor
 * @desc Proveedor de datos, Recipientes
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function ContainerService($resource) {
  return $resource('models/containers.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('ContainerService', ['$resource', ContainerService]);;
/*
 * @name ContainersListService
 * @constructor
 * @desc Proveedor de datos, lista Recipients
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function ContainersListService($resource) {
  return $resource('models/containers_list.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('ContainersListService', ['$resource', ContainersListService]);
;
/*
 * @name CoolerService
 * @constructor
 * @desc Proveedor de datos, Hieleras
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function CoolerService($resource) {
  return $resource('models/coolers.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('CoolerService', ['$resource', CoolerService]);;
/*
 * @name CustodyService
 * @constructor
 * @desc Proveedor de datos, Cadenas custodia
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function CustodyService($resource) {
  return $resource('models/custodies/100.json', {}, {
    query: {method:'GET', params:{}, isArray:false}
  });
}

angular
  .module('siclabApp')
  .factory('CustodyService', ['$resource', CustodyService]);;
/*
 * @name DepartmentService
 * @constructor
 * @desc Proveedor de datos, Áreas
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function DepartmentService($resource) {
  return $resource('models/areas.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('DepartmentService', ['$resource', DepartmentService]);;
/*
 * @name DepartmentsListService
 * @constructor
 * @desc Proveedor de datos, Áreas
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function DepartmentsListService($resource) {
  return $resource('models/deparments_list.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('DepartmentsListService', ['$resource', DepartmentsListService]);
;
/*
 * @name DistrictService
 * @constructor
 * @desc Proveedor de datos, Municipios
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function DistrictService($resource) {
  return $resource('models/districts.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('DistrictService', ['$resource', DistrictService]);;
/*
 * @name EmployeeService
 * @constructor
 * @desc Proveedor de datos, Empleados
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function EmployeeService($resource) {
  return $resource('models/empleados.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('EmployeeService', ['$resource', EmployeeService]);;
/*
 * @name EmployeesListService
 * @constructor
 * @desc Proveedor de datos, lista Empleados
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function EmployeesListService($resource) {
  return $resource('models/employees_list.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('EmployeesListService', ['$resource', EmployeesListService]);
;
/*
 * @name ExpirationService
 * @constructor
 * @desc Proveedor de datos, Vigencias
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function ExpirationService($resource) {
  return $resource('models/expirations.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('ExpirationService', ['$resource', ExpirationService]);;
/*
 * @name FieldParameterService
 * @constructor
 * @desc Proveedor de datos, Parámetros campo
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function FieldParameterService($resource) {
  return $resource('models/field_parameters.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('FieldParameterService', ['$resource', FieldParameterService]);;
/*
 * @name FieldSheetService
 * @constructor
 * @desc Proveedor de datos, Hojas campo
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function FieldSheetService($resource) {
  return $resource('models/field_sheets/1.json', {}, {
    query: {method:'GET', params:{}, isArray:false}
  });
}

angular
  .module('siclabApp')
  .factory('FieldSheetService', ['$resource', FieldSheetService]);;
/*
 * @name InstrumentsListService
 * @constructor
 * @desc Proveedor de datos, lista Equipos
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function InstrumentsListService($resource) {
  return $resource('models/intruments_list.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('InstrumentsListService', ['$resource', InstrumentsListService]);
;
/*
 * @name LoginService
 * @constructor
 * @desc Proveedor de datos, Login
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function LoginService($resource) {
  return $resource('models/login.json', {}, {
    query: {method:'GET', params:{}, isArray:false}
  });
}

angular
  .module('siclabApp')
  .factory('LoginService', ['$resource', LoginService]);;
/*
 * @name LogoutService
 * @constructor
 * @desc Proveedor de datos, Logout
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function LogoutService($resource) {
  return $resource('models/logout.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('LogoutService', ['$resource', LogoutService]);
;
/*
 * @name MaterialService
 * @constructor
 * @desc Proveedor de datos, Materiales
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function MaterialService($resource) {
  return $resource('models/materials.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('MaterialService', ['$resource', MaterialService]);;
/*
 * @name MatrixService
 * @constructor
 * @desc Proveedor de datos, Matrices
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function MatrixService($resource) {
  return $resource('models/matrices.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('MatrixService', ['$resource', MatrixService]);;
/*
 * @name MenuService
 * @constructor
 * @desc Proveedor de datos, Menú
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function MenuService($resource) {
  return $resource('models/menu.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('MenuService', ['$resource', MenuService]);;
/*
 * @name MetalSupervisorService
 * @constructor
 * @desc Proveedor de datos, Supervisores metales pesados
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function MetalSupervisorService($resource) {
  return $resource('models/metal_supervisors.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('MetalSupervisorService', ['$resource', MetalSupervisorService]);
;
/*
 * @name MethodsListService
 * @constructor
 * @desc Proveedor de datos, Métodos
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function MethodsListService($resource) {
  return $resource('models/methods.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('MethodsListService', ['$resource', MethodsListService]);;
/*
 * @name MethodsService
 * @constructor
 * @desc Proveedor de datos, Métodos
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function MethodsService($resource) {
  return $resource('models/methods.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('MethodsService', ['$resource', MethodsService]);;
/*
 * @name NormService
 * @constructor
 * @desc Proveedor de datos, Normas referencia
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function NormService($resource) {
  return $resource('models/normas.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('NormService', ['$resource', NormService]);;
/*
 * @name NormsListService
 * @constructor
 * @desc Proveedor de datos, lista Normas
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function NormsListService($resource) {
  return $resource('models/norms_list.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('NormsListService', ['$resource', NormsListService]);
;
/*
 * @name OrderService
 * @constructor
 * @desc Proveedor de datos, Orden muestreo
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function OrderService($resource) {
  return $resource('models/sampling/orders/1.json', {}, {
    query: {method:'GET', params:{}, isArray:false}
  });
}

angular
  .module('siclabApp')
  .factory('OrderService', ['$resource', OrderService]);;
/*
 * @name OrderSourceService
 * @constructor
 * @desc Proveedor de datos, Orígenes orden
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function OrderSourceService($resource) {
  return $resource('models/order_sources.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('OrderSourceService', ['$resource', OrderSourceService]);;
/*
 * @name ParameterService
 * @constructor
 * @desc Proveedor de datos, Parámetros análisis
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function ParameterService($resource) {
  return $resource('models/parameters.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('ParameterService', ['$resource', ParameterService]);;
/*
 * @name ChemicalSupervisorService
 * @constructor
 * @desc Proveedor de datos, Supervisores físicoquimico
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function ChemicalSupervisorService($resource) {
  return $resource('models/chemical_supervisors.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('ChemicalSupervisorService', ['$resource', ChemicalSupervisorService]);;
/*
 * @name PlanObjectivesService
 * @constructor
 * @desc Proveedor de datos, Objetivos plan
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function PlanObjectivesService($resource) {
  return $resource('models/plan_objectives.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('PlanObjectivesService', ['$resource', PlanObjectivesService]);
;
/*
 * @name PlanService
 * @constructor
 * @desc Proveedor de datos, Plan muestreo
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function PlanService($resource) {
  return $resource('models/sampling/plans/1.json', {}, {
    query: {method:'GET', params:{}, isArray:false}
  });
}

angular
  .module('siclabApp')
  .factory('PlanService', ['$resource', PlanService]);;
/*
 * @name PointKindsService
 * @constructor
 * @desc Proveedor de datos, tipos Punto
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function PointKindsService($resource) {
  return $resource('models/point_kinds.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('PointKindsService', ['$resource', PointKindsService]);
;
/*
 * @name PointService
 * @constructor
 * @desc Proveedor de datos, Puntos muestreo
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function PointService($resource) {
  return $resource('models/points.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('PointService', ['$resource', PointService]);;
/*
 * @name PointsListService
 * @constructor
 * @desc Proveedor de datos, lista Puntos
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function PointsListService($resource) {
  return $resource('models/points.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('PointsListService', ['$resource', PointsListService]);
;
/*
 * @name PreservationService
 * @constructor
 * @desc Proveedor de datos, Preservaciones
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function PreservationService($resource) {
  return $resource('models/preservations.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('PreservationService', ['$resource', PreservationService]);;
/*
 * @name PricesListService
 * @constructor
 * @desc Proveedor de datos, lista Precios
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function PricesListService($resource) {
  return $resource('models/prices_list.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('PricesListService', ['$resource', PricesListService]);
;
/*
 * @name ProfileService
 * @constructor
 * @desc Proveedor de datos, Perfil
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function ProfileService($resource) {
  return $resource('models/profile.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('ProfileService', ['$resource', ProfileService]);
;
/*
 * @name QuoteService
 * @constructor
 * @desc Proveedor de datos, Cotizaciones
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function QuoteService($resource) {
  return $resource('models/quotes/1.json', {}, {
    query: {method:'GET', params:{}, isArray:false}
  });
}

angular
  .module('siclabApp')
  .factory('QuoteService', ['$resource', QuoteService]);
;
/*
 * @name ReactivesListService
 * @constructor
 * @desc Proveedor de datos, lista Reactivos
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function ReactivesListService($resource) {
  return $resource('models/reactives_list.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('ReactivesListService', ['$resource', ReactivesListService]);
;
/*
 * @name ReceptionService
 * @constructor
 * @desc Proveedor de datos, Recepción
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function ReceptionService($resource) {
  return $resource('models/sampling/samples/1.json', {}, {
    query: {method:'GET', params:{}, isArray:false}
  });
}

angular
  .module('siclabApp')
  .factory('ReceptionService', ['$resource', ReceptionService]);;
/*
 * @name ReceptionistService
 * @constructor
 * @desc Proveedor de datos, Recepcionistas
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function ReceptionistService($resource) {
  return $resource('models/receptionists.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('ReceptionistService', ['$resource', ReceptionistService]);;
/*
 * @name ReferencesListService
 * @constructor
 * @desc Proveedor de datos, lista Referencias
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function ReferencesListService($resource) {
  return $resource('models/references_list.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('ReferencesListService', ['$resource', ReferencesListService]);
;
/*
 * @name ReportApprovalService
 * @constructor
 * @desc Proveedor de datos, validación Reporte
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function ReportApprovalService($resource) {
  return $resource('models/report.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('ReportApprovalService', ['$resource', ReportApprovalService]);
;
/*
 * @name ReportsListService
 * @constructor
 * @desc Proveedor de datos, lista Reportes
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function ReportsListService($resource) {
  return $resource('models/reports_list.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('ReportsListService', ['$resource', ReportsListService]);
;
/*
 * @name RequiredVolumeService
 * @constructor
 * @desc Proveedor de datos, Volúmenes requeridos
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function RequiredVolumeService($resource) {
  return $resource('models/volumes.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('RequiredVolumeService', ['$resource', RequiredVolumeService]);;
/*
 * @name SamplesListService
 * @constructor
 * @desc Proveedor de datos, lista Muestras
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function SamplesListService($resource) {
  return $resource('models/samples_list.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('SamplesListService', ['$resource', SamplesListService]);
;
/*
 * @name SamplingNormService
 * @constructor
 * @desc Proveedor de datos, Normas muestreo
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function SamplingNormService($resource) {
  return $resource('models/sampling_norms.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('SamplingNormService', ['$resource', SamplingNormService]);;
/*
 * @name SamplingSupervisorService
 * @constructor
 * @desc Proveedor de datos, Supervisores muestreo
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function SamplingSupervisorService($resource) {
  return $resource('models/sampling_supervisors.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('SamplingSupervisorService', ['$resource', SamplingSupervisorService]);;
/*
 * @name SamplingTypeService
 * @constructor
 * @desc Proveedor de datos, Tipo muestreo
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function SamplingTypeService($resource) {
  return $resource('models/sampling/types.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('SamplingTypeService', ['$resource', SamplingTypeService]);
;
/*
 * @name TaskAssignService
 * @constructor
 * @desc Proveedor de datos, Órdenes trabajo
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function TaskAssignService($resource) {
  return $resource('models/taskAssignments/1.json', {}, {
    query: {method:'GET', params:{}, isArray:false}
  });
}

angular
  .module('siclabApp')
  .factory('TaskAssignService', ['$resource', TaskAssignService]);;
/*
 * @name TaskService
 * @constructor
 * @desc Proveedor de datos, Bienvenida
 * @param {Object} $resource- Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function TaskService($resource){
  return $resource('models/tasks.json', {}, {
    query: {method:'GET', params:{}, isArray:false}
  });
}

angular
  .module('siclabApp')
  .factory('TaskService', ['$resource', TaskService]);;
/*
 * @name UserService
 * @constructor
 * @desc Proveedor de datos, Usuarios
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function UserService($resource) {
  return $resource('models/usuarios.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('UserService', ['$resource', UserService]);;
/*
 * @name WaveService
 * @constructor
 * @desc Proveedor de datos, Intensidades oleaje
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function WaveService($resource) {
  return $resource('models/waves.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('WaveService', ['$resource', WaveService]);;
/*
 * @name WindService
 * @constructor
 * @desc Proveedor de datos, Direcciones viento
 * @param {Object} $resource - Acceso a recursos HTTP, AngularJS
 * @return {Object} $resource - Acceso a recursos HTTP, según ruta y parámetros
 */
function WindService($resource) {
  return $resource('models/winds.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
}

angular
  .module('siclabApp')
  .factory('WindService', ['$resource', WindService]);
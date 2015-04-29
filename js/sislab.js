(function(){
  'use strict';
  // ANGULAR MODULE SETTER
  angular
    .module('sislabApp', [
      'ngRoute',
      'ngResource',
      'ngAnimate',
      'angular-jwt',
      'mgcrea.ngStrap'
    ]
  );

  // DATA API URL
  var API_BASE_URL = 'api/v1/';

  // config.js
  /**
   * @name config
   * @desc Configuración de AngularJS
   * @param {Object} $routeProvider - Proveedor, manejo de rutas de la applicación
   * @param {Object} $httpProvider - Proveedor, manejo de peticiones HTTP
   * @param {Object} jwtInterceptorProvider - Proveedor, intercepción de JWT
   */
  function config($routeProvider, $httpProvider, jwtInterceptorProvider,
    $collapseProvider) {
    $routeProvider
      .otherwise({
       redirectTo: '/sistema/login'
      }).
      when('/sistema/login', {
        templateUrl: 'partials/sistema/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      }).
      when('/main', {
        templateUrl: 'partials/sistema/tareas.html',
        controller: 'TaskListController',
        controllerAs: 'tasks'
      }).
      when('/estudio/estudio', {
        templateUrl: 'partials/estudio/estudios.html',
        controller: 'StudyListController',
        controllerAs: 'studies'
      }).
      when('/estudio/estudio/:studyId', {
        templateUrl: 'partials/estudio/estudio.html',
        controller: 'StudyController',
        controllerAs: 'study'
      }).
      when('/muestreo/solicitud', {
        templateUrl: 'partials/muestreo/solicitudes.html',
        controller: 'QuoteListController',
        controllerAs: 'quotes'
      }).
      when('/muestreo/solicitud/:quoteId', {
        templateUrl: 'partials/muestreo/solicitud.html',
        controller: 'QuoteController',
        controllerAs: 'quote'
      }).
      when('/muestreo/orden', {
        templateUrl: 'partials/muestreo/ordenes.html',
        controller: 'OrderListController',
        controllerAs: 'orders'
      }).
      when('/muestreo/orden/:orderId', {
        templateUrl: 'partials/muestreo/orden.html',
        controller: 'OrderController',
        controllerAs: 'order'
      }).
      when('/muestreo/plan', {
        templateUrl: 'partials/muestreo/planes.html',
        controller: 'PlanListController',
        controllerAs: 'plans'
      }).
      when('/muestreo/plan/:planId', {
        templateUrl: 'partials/muestreo/plan.html',
        controller: 'PlanController',
        controllerAs: 'plan'
      }).
      when('/recepcion/hoja', {
        templateUrl: 'partials/recepcion/hojas.html',
        controller: 'SheetListController',
        controllerAs: 'sheets'
      }).
      when('/recepcion/hoja/:sheetId', {
        templateUrl: 'partials/recepcion/hoja.html',
        controller: 'SheetController',
        controllerAs: 'sheet'
      }).
      when('/recepcion/recepcion', {
        templateUrl: 'partials/recepcion/recepciones.html',
        controller: 'ReceptionListController',
        controllerAs: 'receptions'
      }).
      when('/recepcion/recepcion/:receptionId', {
        templateUrl: 'partials/recepcion/recepcion.html',
        controller: 'ReceptionController',
        controllerAs: 'reception'
      }).
      when('/recepcion/custodia', {
        templateUrl: 'partials/recepcion/custodias.html',
        controller: 'CustodyListController',
        controllerAs: 'custodies'
      }).
      when('/recepcion/custodia/:custodyId', {
        templateUrl: 'partials/recepcion/custodia.html',
        controller: 'CustodyController',
        controllerAs: 'custody'
      }).
      when('/inventario/muestra', {
        templateUrl: 'partials/inventario/muestras.html',
        controller: 'SampleListController',
        controllerAs: 'samplesList'
      }).
      when('/inventario/equipo', {
        templateUrl: 'partials/inventario/equipos.html',
        controller: 'InstrumentListController',
        controllerAs: 'instrumentsList'
      }).
      when('/inventario/reactivo', {
        templateUrl: 'partials/inventario/reactivos.html',
        controller: 'ReactiveListController',
        controllerAs: 'reactivesList'
      }).
      when('/inventario/recipiente', {
        templateUrl: 'partials/inventario/recipientes.html',
        controller: 'ContainerListController',
        controllerAs: 'containersList'
      }).
      when('/analisis/analisis', {
        templateUrl: 'partials/analisis/consulta.html',
        controller: 'AnalysiListController',
        controllerAs: 'analysisList'
      }).
      when('/analisis/analisis/:analysisId', {
        templateUrl: 'partials/analisis/analisis.html',
        controller: 'AnalysisController',
        controllerAs: 'analysis'
      }).
      when('/reporte/reporte', {
        templateUrl: 'partials/reporte/reportes.html',
        controller: 'ReportListController',
        controllerAs: 'reportsList'
      }).
      when('/reporte/reporte/:reportId', {
        templateUrl: 'partials/reporte/reporte.html',
        controller: 'ReportController',
        controllerAs: 'report'
      }).
      when('/catalogo/punto', {
        templateUrl: 'partials/catalogo/puntos.html',
        controller: 'PointListController',
        controllerAs: 'pointsList'
      }).
      when('/catalogo/cliente', {
        templateUrl: 'partials/catalogo/clientes.html',
        controller: 'ClientListController',
        controllerAs: 'clients'
      }).
      when('/catalogo/cliente/:clientId', {
        templateUrl: 'partials/catalogo/cliente.html',
        controller: 'ClientDetailController',
        controllerAs: 'clientDetail'
      }).
      when('/catalogo/area', {
        templateUrl: 'partials/catalogo/areas.html',
        controller: 'DepartmentListController',
        controllerAs: 'departmentsList'
      }).
      when('/catalogo/empleado', {
        templateUrl: 'partials/catalogo/empleados.html',
        controller: 'EmployeeListController',
        controllerAs: 'employeesList'
      }).
      when('/catalogo/norma', {
        templateUrl: 'partials/catalogo/normas.html',
        controller: 'NormListController',
        controllerAs: 'normsList'
      }).
      when('/catalogo/referencia', {
        templateUrl: 'partials/catalogo/referencia.html',
        controller: 'ReferenceListController',
        controllerAs: 'referencesList'
      }).
      when('/catalogo/metodo', {
        templateUrl: 'partials/catalogo/metodos.html',
        controller: 'MethodListController',
        controllerAs: 'methodsList'
      }).
      when('/catalogo/precio', {
        templateUrl: 'partials/catalogo/precios.html',
        controller: 'PriceListController',
        controllerAs: 'pricesList'
      }).
      when('/sistema/usuario', {
        templateUrl: 'partials/sistema/usuarios.html',
        controller: 'UserListController',
        controllerAs: 'usersList'
      }).
      when('/sistema/perfil', {
        templateUrl: 'partials/sistema/perfil.html',
        controller: 'ProfileController',
        controllerAs: 'profile'
      }).
      when('/sistema/logout', {
        templateUrl: 'partials/sistema/logout.html',
        controller: 'LogoutController',
        controllerAs: 'logout'
      })
    ;
    angular.extend($collapseProvider.defaults, {
      startCollapsed: true
    });
  }
  angular
    .module('sislabApp')
    .config(
      [
        '$routeProvider', '$httpProvider', 'jwtInterceptorProvider',
        '$collapseProvider',
        config
      ]
    );

  // DIRECTIVES
  // sislabMenu.js
  /**
   * @name sislabMenu
   * @desc Directiva para menú principal
   */
  function sislabMenu() {
    return {
      restrict: 'EA',
      require: '^ngModel',
      templateUrl: 'partials/sistema/menu.html',
      controller: 'MenuController',
      controllerAs: 'menu'
    };
  }
  angular
    .module('sislabApp')
    .directive('sislabMenu', sislabMenu);

  // sislabBanner.js
  /**
   * @name sislabBanner
   * @desc Directiva para banner superior
   */
  function sislabBanner() {
    return {
      restrict: 'EA',
      templateUrl: 'partials/sistema/banner.html'
    };
  }
  angular
    .module('sislabApp')
    .directive('sislabBanner', sislabBanner);

  // sislabFooter.js
  /**
   * @name sislabFooter
   * @desc Directiva para pie de página
   */
  function sislabFooter() {
    return {
      restrict: 'EA',
      templateUrl: 'partials/sistema/footer.html'
    };
  }
  angular
    .module('sislabApp')
    .directive('sislabFooter', sislabFooter);

  // sislabBannerBottom.js
  /**
   * @name sislabBannerBottom
   * @desc Directiva para banner inferior
   */
  function sislabBannerBottom() {
    return {
      restrict: 'EA',
      templateUrl: 'partials/sistema/banner-bottom.html'
    };
  }
  angular
    .module('sislabApp')
    .directive('sislabBannerBottom', sislabBannerBottom);

  // SERVICES
  // ArrayUtilsService.js
  /**
   * @name ArrayUtilsService
   * @constructor
   * @desc Proveedor para manejo de arreglos
   * @return {ArrayUtilsService} ArrayUtils - Métodos para manejo de arreglos
   */
  function ArrayUtilsService() {
    var ArrayUtils = {};

    ArrayUtils.selectItemFromCollection = selectItemFromCollection;
    ArrayUtils.selectItemsFromCollection = selectItemsFromCollection;
    ArrayUtils.extractItemFromCollection = extractItemFromCollection;
    ArrayUtils.seItemsFromReference = seItemsFromReference;
    ArrayUtils.countSelectedItems = countSelectedItems;
    ArrayUtils.averageFromValues = averageFromValues;

    /**
     * @function selectItemFromCollection
     * @desc Obtiene un ítem de un Array, coincidiendo una propiedad y su valor
     * @param {Array} collection - Array de ítems a seleccionar
     * @param {String} field - Nombre de la propiedad a coincidir
     * @param {Object} value - Valor de la propiedad a coincidir
     * @return {Object} item - Ítem seleccionado
     */
    function selectItemFromCollection(collection, field, value) {
      var i = 0,
      l = collection.length,
      item = {};
      for (i = 0; i < l; i += 1) {
        if (collection[i][field] == value)
        {
          item = collection[i];
          break;
        }
      }
      return item;
    }

    /**
     * @function selectItemsFromCollection
     * @desc Obtiene los ítems de un Array, coincidiendo una propiedad y su valor
     * @param {Array} collection - Array de ítems a seleccionar
     * @param {String} field - Nombre de la propiedad a coincidir
     * @param {Object} value - Valor de la propiedad a coincidir
     * @return {Array} items - Array de ítems seleccionados
     */
    function selectItemsFromCollection(collection, field, value) {
      var i = 0,
      l = collection.length,
      items = [];
      for (i = 0; i < l; i += 1) {
        if (collection[i][field] == value)
        {
          items.push(collection[i]);
        }
      }
      return items;
    }

    /**
     * @function extractItemFromCollection
     * @desc Extrae un ítem de un Array, coincidiendo una propiedad y su valor
     * @param {Array} collection - Array de ítems a extraer
     * @param {String} field - Nombre de la propiedad a coincidir
     * @param {Object} value - Valor de la propiedad a coincidir
     * @return {Object} item - Item extraído
     */
    function extractItemFromCollection(collection, field, value) {
      var i = 0,
      l = collection.length,
      item = {};
      for (i = 0; i < l; i += 1) {
        if (collection[i][field] == value)
        {
          item = collection.splice(i, 1);
          break;
        }
      }
      return item;
    }

    /**
     * @function seItemsFromReference
     * @desc Cambia el valor de una propiedad de ítem de un Array, coincidiendo una propiedad y su valor desde otro Array
     * @param {Array} collection - Array de ítems a modificar
     * @param {Array} referenceCollection - Array de referencia
     * @param {String} matchField - Nombre de la propiedad a coincidir
     * @param {Array} fields - Nombres de las propiedades a cambiar
     * @return {Object} item - Ítem seleccionado
     */
    function seItemsFromReference(collection, referenceCollection, matchField, fields) {
      var i, l, j, m, k, n, field = '';
      l = collection.length;
      n = fields.length;
      for(i = 0; i < l; i += 1) {
        if (referenceCollection !== undefined)
        {
          m = referenceCollection.length;
          for (j = 0; j < m; j += 1) {
            if (collection[i][matchField] ==
              referenceCollection[j][matchField])
            {
              for (k = 0; k < n; k += 1) {
                field = fields[k];
                collection[i][field] = referenceCollection[j][field];
              }
            }
          }
        }
      }
      return collection;
    }

    /**
     * @function countSelectedItems
     * @desc Cuenta los objetos de un Array con valor true de la propiedad selected
     * @param {Array} collection - Array de ítems a extraer
     * @return {Number} count - Cantidad de objetos que cumplen la condición
     */
    function countSelectedItems(collection){
      var i, l, count = 0;
      if (!collection)
      {
        return 0;
      }
      l = collection.length;
      for (i = 0; i < l; i += 1) {
        if (collection[i].selected)
        {
          count += 1;
        }
      }
      return count;
    }

    /**
     * @function averageFromValues
     * @desc Calcula el promedio de los valores numéricos de un Array
     * @param {Array} collection - Array de valores a promediar
     * @return {Number} avg - Cantidad de objetos que cumplen la condición
     */
    function averageFromValues(collection) {
      var i = 0,
      l = collection.length,
      sum = 0,
      avg = 0;
      if (l > 0)
      {
        for (i = 0; i < l; i++) {
          sum += parseFloat(collection[i]);
        }
        avg = Math.round((sum / l) * 1000 * 1000) / (1000 * 1000);
      }
      return avg;
    }

    return ArrayUtils;
  }
  angular
    .module('sislabApp')
    .factory('ArrayUtilsService',
      [
        ArrayUtilsService
      ]
    );

  // DateUtilsService.js
  /**
   * @name DateUtilsService
   * @constructor
   * @desc Proveedor para manejo de fechas
   * @return {DateUtilsService} DateUtils - Métodos para manejo de fechas
   */
  function DateUtilsService() {
    var DateUtils = {};

    DateUtils.padNumber = padNumber;
    DateUtils.dateToISOString = dateToISOString;
    DateUtils.isValidDate = isValidDate;

    /**
     * @function padNumber
     * @desc Agrega ceros a un número, devuelve una cadena de la longitud dada
     * @param {Number} number - Número a procesar
     * @param {Number} plces - longitud mínima de la cadena
     * @return {Object} paddedNumber - cadena de la longitud dada
     */
    function padNumber(number, places) {
      var paddedNumber = String(number),
      i = 0,
      l = paddedNumber.length,
      padding = '';
      if (l < places)
      {
        l = places - l;
        for (i = 0; i < l; i += 1) {
          padding += '0';
        }
        return padding + '' + paddedNumber;
      }
      return paddedNumber;
    }

    /**
     * @function dateToISOString
     * @desc Convierte una fecha local a una cadena con formato ISO 8601
     * @param {Date} date - Fecha a convertir
     * @return {String} - Cadena de fecha con formato ISO 8601
     */
    function dateToISOString(date) {
      return [
        date.getFullYear(),
        '-',
        padNumber(date.getMonth() + 1, 2),
        '-',
        padNumber(date.getDate(), 2),
        'T',
        padNumber(date.getHours(), 2),
        ':',
        padNumber(date.getMinutes(), 2),
        ':',
        padNumber(date.getSeconds(), 2),
        '.',
        (date.getMilliseconds() / 1000).toFixed(3).slice(2, 5),
        (date.getTimezoneOffset() / 60 > -1) ? '+' : '-',
        padNumber(date.getTimezoneOffset() / 60, 2),
        ':00'
      ].join('');
    }

    /**
     * @function isValidDate
     * @desc Determina si la fecha dada es válida
     * @param {Date} date - Fecha a evaluar
     * @return {Boolean} - Resultado de la evaluación
     */
    function isValidDate(date) {
      if (Object.prototype.toString.call(date) !== '[object Date]')
      {
        return false;
      }
      return !isNaN(date.getTime());
    }

    return DateUtils;
  }
  angular
    .module('sislabApp')
    .factory('DateUtilsService',
      [
        DateUtilsService
      ]
    );

  // RestUtilsService.js
  /**
   * @name RestUtilsService
   * @constructor
   * @desc Proveedor para manejo de servicios REST
   * @return {RestUtilsService} RestUtils - Métodos para manejo de REST
   */
  function RestUtilsService($resource, $location) {
    var RestUtils = {};

    RestUtils.saveData = saveData;
    RestUtils.updateData = updateData;

    /**
     * @function saveData
     * @desc Envía los datos vía POST para generar un nuevo recurso en el servicio
     * @param {Object} service - Proveedor de datos a usar
     * @param {String} data - JSON a enviar al servicio
     * @param {String} returnPath - Ruta de la vista a desplegar, éxito
     * @param {String} itemIdName - Propiedad a usar como identificador del recurso
     */
    function saveData(service, data, returnPath, itemIdName) {
      service
        .save(JSON.stringify(data))
        .$promise
        .then(function success(response) {
          $location.path(returnPath);
          return response[itemIdName];
        }, function error(response) {
          if (response.status === 404)
          {
            return 'Recurso no encontrado';
          }
          else
          {
            return 'Error no especificado';
          }
        });
    }

    /**
     * @function updateData
     * @desc Envía los datos vía POST para actualizar un recurso en el servicio
     * @param {Object} service - Proveedor de datos a usar
     * @param {String} data - JSON a enviar al servicio
     * @param {String} returnPath - Ruta de la vista a desplegar, éxito
     * @param {String} itemIdName - Propiedad a usar como identificador del recurso
     */
    function updateData(service, data, returnPath, itemIdName) {
      service
        .update(JSON.stringify(data))
        .$promise
        .then(function success(response) {
          $location.path(returnPath + '/' + response[itemIdName]);
          return response[itemIdName];
        }, function error(response) {
          if (response.status === 404)
          {
            return 'Recurso no encontrado';
          }
          else
          {
            return 'Error no especificado';
          }
        });
    }

    return RestUtils;
  }
  angular
    .module('sislabApp')
    .factory('RestUtilsService',
      [
        '$resource', '$location',
        RestUtilsService
      ]
    );

  // TokenService.js
  /**
   * @name TokenService
   * @constructor
   * @desc Proveedor para manejo del token
   * @param {Object} $window - Acceso a Objeto Window [AngularJS]
   * @param {Object} jwtHelper - Acceso a utilerías de token [Angular-jwt]
   * @return {TokenService} Token - Métodos para manejo de token
   */
  function TokenService($window, $http, $location, jwtHelper) {
    var tokenKey = 'sislab-token',
    storage = $window.localStorage,
    cachedToken,
    Token = {};

    Token.authenticateUser = authenticateUser;
    Token.isAuthenticated = isAuthenticated;
    Token.setToken = setToken;
    Token.getToken = getToken;
    Token.clearToken = clearToken;
    Token.decodeToken = decodeToken;
    Token.getUserFromToken = getUserFromToken;

    /**
     * @function authenticateUser
     * @desc Envía los datos del usuario al servicio de autenticación
     * @param {String} username - Nombre de usuario
     * @param {String} password - Contraseña del usuario
     */
    function authenticateUser(username, password) {
      $http({
        url: API_BASE_URL + 'login',
        method: 'POST',
        data: {
          username: username,
          password: password
        }
      }).then(function success(response) {
        var token = response.data || null;
        setToken(token);
        $location.path('main');
      }, function error(response) {
        if (response.status === 404)
        {
          return 'Sin enlace al servidor';
        }
        else
        {
          return 'Error no especificado';
        }
      });
    }

    /**
     * @function isAuthenticated
     * @desc Indica si el usuario está autenticado, por la presencia del token
     * @return {Boolean} - Presencia del token
     */
    function isAuthenticated() {
      return !!getToken();
    }

    /**
     * @function setToken
     * @desc Almacena el token
     * @param {Object} token - Token de autenticación
     */
    function setToken(token) {
      cachedToken = token;
      storage.setItem(tokenKey, token);
    }

    /**
     * @function getToken
     * @desc Obtiene el token
     * @return {Object} cachedToken - Token de autenticación
     */
    function getToken() {
      if (!cachedToken)
      {
        cachedToken = storage.getItem(tokenKey);
      }
      return cachedToken;
    }

    /**
     * @function clearToken
     * @desc Elimina el token
     */
    function clearToken() {
      cachedToken = null;
      storage.removeItem(tokenKey);
    }

    /**
     * @function decodeToken
     * @desc Decodifica el token
     * @return {Object} - Token de autenticación, decodificado
     */
    function decodeToken() {
      var token = getToken();
      return token && jwtHelper.decodeToken(token);
    }

    /**
     * @function getUserFromToken
     * @desc Obtiene datos del usuario del token decodificado
     * @return {Object} userData - Datos del usuario
     */
    function getUserFromToken() {
      var decodedJwt,
      userData;
      if (isAuthenticated())
      {
        decodedJwt = decodeToken();
        userData = {
          name: decodedJwt.nam,
          id: decodedJwt.uid,
          level: decodedJwt.ulv
        };
      }
      return userData;
    }

    return Token;
  }
  angular
    .module('sislabApp')
    .factory('TokenService',
      [
        '$window', '$http', '$location', 'jwtHelper',
        TokenService
      ]
    );

  // ValidationService.js
  /**
   * @name ValidationService
   * @constructor
   * @desc Proveedor para manejo de validación
   * @param {Object} DateUtilsService - Proveedor para manejo de fechas
   * @return {ArrayUtilsService} ArrayUtils - Métodos para manejo de validación
   */
  function ValidationService(DateUtilsService) {
    var Validation = {};

    Validation.approveItem = approveItem;
    Validation.rejectItem = rejectItem;

    function approveItem(item, user) {
      item.id_status = 2;
      item.status = 'Validado';
      item.id_usuario_valida = user.id;
      item.motivo_rechaza = '';
      item.fecha_valida = DateUtilsService.dateToISOString(new Date()).slice(0,10);
    }

    function rejectItem(item, user) {
      item.id_status = 3;
      item.status = 'Rechazado';
      item.id_usuario_valida = user.id;
      item.fecha_rechaza = DateUtilsService.dateToISOString(new Date()).slice(0,10);
    }

    return Validation;
  }
  angular
    .module('sislabApp')
    .factory('ValidationService',
      [
        'DateUtilsService',
        ValidationService
      ]
    );

  // MenuService.js
  /**
   * @name MenuService
   * @constructor
   * @desc Proveedor de datos, Menú
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function MenuService($resource, TokenService) {
    return $resource(API_BASE_URL + 'menu', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('MenuService',
      [
        '$resource', 'TokenService',
        MenuService
      ]
    );

  // TaskService.js
  /**
   * @name TaskService
   * @constructor
   * @desc Proveedor de datos, Tareas
   * @param {Object} $resource- Acceso a recursos HTTP, AngularJS
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function TaskService($resource, TokenService) {
    return $resource(API_BASE_URL + 'tasks', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('TaskService',
      [
        '$resource', 'TokenService',
        TaskService
      ]
    );

  // StudyService.js
  /**
   * @name StudyService
   * @constructor
   * @desc Proveedor de datos, Estudios
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function StudyService($resource, TokenService) {
    return $resource(API_BASE_URL + 'studies/:studyId', {}, {
      query: {
        method: 'GET',
        params: {studyId: 'id_estudio'},
        isArray: false,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      },
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      },
      update: {
        method: 'POST',
        params: {studyId: 'id_estudio'},
        isArray: false,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      },
      save: {
        method: 'POST',
        params: {},
        isArray: false,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('StudyService',
      [
        '$resource', 'TokenService',
        StudyService
      ]
    );

  // QuoteService.js
  /**
   * @name QuoteService
   * @constructor
   * @desc Proveedor de datos, Solicitudes
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function QuoteService($resource, TokenService) {
    return $resource(API_BASE_URL + 'quotes/:quoteId', {}, {
      query: {
        method: 'GET',
        params: {quoteId:'id_solicitud'},
        isArray: false,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      },
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      },
      update: {
        method: 'POST',
        params: {quoteId:'id_solicitud'},
        isArray: false,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      },
      save: {
        method: 'POST',
        params: {},
        isArray: false,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('QuoteService',
    [
      '$resource', 'TokenService',
      QuoteService
    ]
   );

  // OrderService.js
  /**
   * @name OrderService
   * @constructor
   * @desc Proveedor de datos, Órdenes de muestreo
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function OrderService($resource, TokenService) {
    return $resource(API_BASE_URL + 'orders/:orderId', {}, {
      query: {
        method: 'GET',
        params: {orderId: 'id_orden'},
        isArray: false,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      },
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      },
      update: {
        method: 'POST',
        params: {orderId: 'id_orden'},
        isArray: false,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      },
      save: {
        method: 'POST',
        params: {},
        isArray: false,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('OrderService',
      [
        '$resource', 'TokenService',
        OrderService
      ]
    );

  // PlanService.js
  /**
   * @name PlanService
   * @constructor
   * @desc Proveedor de datos, Planes de muestreo
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function PlanService($resource, TokenService) {
    return $resource(API_BASE_URL + 'plans/:planId', {}, {
      query: {
        method: 'GET',
        params: {planId: 'id_plan'},
        isArray: false,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      },
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      },
      update: {
        method: 'POST',
        params: {planId: 'id_plan'},
        isArray: false,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      },
      save: {
        method: 'POST',
        params: {},
        isArray: false,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('PlanService',
      [
        '$resource', 'TokenService',
        PlanService
      ]
    );

  // SheetService.js
  /**
   * @name SheetService
   * @constructor
   * @desc  Proveedor de datos, Hojas de campo
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function SheetService($resource, TokenService) {
    return $resource(API_BASE_URL + 'sheets/:sheetId', {}, {
      query: {
        method: 'GET',
        params: {sheetId: 'id_hoja'},
        isArray: false,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      },
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      },
      update: {
        method: 'POST',
        params: {sheetId: 'id_hoja'},
        isArray: false,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      },
      save: {
        method: 'POST',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('SheetService',
      [
        '$resource', 'TokenService',
        SheetService
      ]
    );

  // ReceptionService.js
  /**
   * @name ReceptionService
   * @constructor
   * @desc Proveedor de datos, Recepciones de muestras
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function ReceptionService($resource, TokenService) {
    return $resource(API_BASE_URL + 'receptions/:receptionId', {}, {
      query: {
        method: 'GET',
        params: {receptionId: 'id_recepcion'},
        isArray: false,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      },
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      },
      update: {
        method: 'POST',
        params: {receptionId: 'id_recepcion'},
        isArray: false,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      },
      save: {
        method: 'POST',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('ReceptionService',
      [
        '$resource', 'TokenService',
        ReceptionService
      ]
    );

  // CustodyService.js
  /**
   * @name CustodyService
   * @constructor
   * @desc Proveedor de datos, Cadenas de custodia
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function CustodyService($resource, TokenService) {
    return $resource(API_BASE_URL + 'custodies/:custodyId', {}, {
      query: {
        method: 'GET',
        params: {custodyId: 'id_custodia'},
        isArray: false,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      },
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      },
      update: {
        method: 'POST',
        params: {custodyId: 'id_custodia'},
        isArray: false,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      },
      save: {
        method: 'POST',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('CustodyService',
      [
        '$resource', 'TokenService',
        CustodyService
      ]
    );

  // ClientService.js
  /**
   * @name ClientService
   * @constructor
   * @desc Proveedor de datos, Cliente
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function ClientService($resource, TokenService) {
    return $resource(API_BASE_URL + 'clients', {}, {
      query: {
        method: 'GET',
        params: {clientId: 'id_cliente'},
        isArray: false,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      },
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      },
      update: {
        method: 'POST',
        params: {clientId: 'id_cliente'},
        isArray: false,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      },
      save: {
        method: 'POST',
        params: {},
        isArray: false,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('ClientService',
      [
        '$resource', 'TokenService',
        ClientService
      ]
    );

  // PointService.js
  /**
   * @name PointService
   * @constructor
   * @desc Proveedor de datos, Puntos muestreo
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function PointService($resource, TokenService) {
    return $resource(API_BASE_URL + 'points', {}, {
      query: {
        method: 'GET',
        params: {pointId: 'id_punto'},
        isArray: false,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      },
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      },
      update: {
        method: 'POST',
        params: {pointId: 'id_punto'},
        isArray: false,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      },
      save: {
        method: 'POST',
        params: {},
        isArray: false,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('PointService',
      [
        '$resource', 'TokenService',
        PointService
      ]
    );

  // PointsByPackageService.js
  /**
   * @name PointsByPackageService
   * @constructor
   * @desc Proveedor de datos, Puntos de muestreo por aquete
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function PointsByPackageService($resource, TokenService) {
    return $resource(API_BASE_URL + 'points/package', {}, {
      get: {
        method: 'GET',
        params: {pointId: 'id_paquete_punto'},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('PointsByPackageService',
      [
        '$resource', 'TokenService',
        PointsByPackageService
      ]
    );

  // ParameterService.js
  /**
   * @name ParameterService
   * @constructor
   * @desc Proveedor de datos, Parámetros de análisis
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function ParameterService($resource, TokenService) {
    return $resource(API_BASE_URL + 'parameters', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('ParameterService',
      [
        '$resource', 'TokenService',
        ParameterService
      ]
    );

  // NormService.js
  /**
   * @name NormService
   * @constructor
   * @desc Proveedor de datos, Normas referencia
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function NormService($resource, TokenService) {
    return $resource(API_BASE_URL + 'norms', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('NormService',
      [
        '$resource', 'TokenService',
        NormService
      ]
    );

  // SamplingTypeService.js
  /**
   * @name SamplingTypeService
   * @constructor
   * @desc Proveedor de datos, Tipos de muestreo
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function SamplingTypeService($resource, TokenService) {
    return $resource(API_BASE_URL + 'sampling/types', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('SamplingTypeService',
      [
        '$resource', 'TokenService',
        SamplingTypeService
      ]
    );

  // OrderSourceService.js
  /**
   * @name OrderSourceService
   * @constructor
   * @desc Proveedor de datos, Orígenes de orden
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function OrderSourceService($resource, TokenService) {
    return $resource(API_BASE_URL + 'order/sources', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('OrderSourceService',
      [
        '$resource', 'TokenService',
        OrderSourceService
      ]
    );

  // MatrixService.js
  /**
   * @name MatrixService
   * @constructor
   * @desc Proveedor de datos, Matrices
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function MatrixService($resource, TokenService) {
    return $resource(API_BASE_URL + 'matrices', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('MatrixService',
      [
        '$resource', 'TokenService',
        MatrixService
      ]
    );

  // PointPackageService.js
  /**
   * @name PointPackageService
   * @constructor
   * @desc Proveedor de datos, Paquetes de puntos
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function PointPackageService($resource, TokenService) {
    return $resource(API_BASE_URL + 'points/packages', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('PointPackageService',
      [
        '$resource', 'TokenService',
        PointPackageService
      ]
    );

  // SamplingSupervisorService.js
  /**
   * @name SamplingSupervisorService
   * @constructor
   * @desc Proveedor de datos, Supervisores de muestreo
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function SamplingSupervisorService($resource, TokenService) {
    return $resource(API_BASE_URL + 'sampling/supervisors', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('SamplingSupervisorService',
      [
        '$resource', 'TokenService',
        SamplingSupervisorService
      ]
    );

  // PlanObjectivesService.js
  /**
   * @name PlanObjectivesService
   * @constructor
   * @desc Proveedor de datos, Objetivos plan
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function PlanObjectivesService($resource, TokenService) {
    return $resource(API_BASE_URL + 'plan/objectives', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('PlanObjectivesService',
      [
        '$resource', 'TokenService',
        PlanObjectivesService
      ]
    );

  // PointKindsService.js
  /**
   * @name PointKindsService
   * @constructor
   * @desc Proveedor de datos, tipos Punto
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function PointKindsService($resource, TokenService) {
    return $resource(API_BASE_URL + 'point/kinds', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('PointKindsService',
      [
        '$resource', 'TokenService',
        PointKindsService
      ]
    );

  // DistrictService.js
  /**
   * @name DistrictService
   * @constructor
   * @desc Proveedor de datos, Municipios
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function DistrictService($resource, TokenService) {
    return $resource(API_BASE_URL + 'districts', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('DistrictService',
      [
        '$resource', 'TokenService',
        DistrictService
      ]
    );

  // CityService.js
  /**
   * @name CityService
   * @constructor
   * @desc Proveedor de datos, Localidades
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function CityService($resource, TokenService) {
    return $resource(API_BASE_URL + 'districts/cities/:districtId', {}, {
      query: {
        method: 'GET',
        params: {districtId: 'id_municipio'},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('CityService',
      [
        '$resource', 'TokenService',
        CityService
      ]
    );

  // SamplingEmployeeService.js
  /**
   * @name SamplingEmployeeService
   * @constructor
   * @desc Proveedor de datos, Empleados muestreo
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function SamplingEmployeeService($resource, TokenService) {
    return $resource(API_BASE_URL + 'sampling/employees', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('SamplingEmployeeService',
      [
        '$resource', 'TokenService',
        SamplingEmployeeService
      ]
    );

  // PreservationService.js
  /**
   * @name PreservationService
   * @constructor
   * @desc Proveedor de datos, Preservaciones
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function PreservationService($resource, TokenService) {
    return $resource(API_BASE_URL + 'preservations', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('PreservationService',
      [
        '$resource', 'TokenService',
        PreservationService
      ]
    );

  // ContainerService.js
  /**
   * @name ContainerService
   * @constructor
   * @desc Proveedor de datos, Recipientes
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function ContainerService($resource, TokenService) {
    return $resource(API_BASE_URL + 'containers/kinds', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('ContainerService',
      [
        '$resource', 'TokenService',
        ContainerService
      ]
    );

  // ReactiveService.js
  /**
   * @name ReactiveService
   * @constructor
   * @desc Proveedor de datos, Reactivos
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function ReactiveService($resource, TokenService) {
    return $resource(API_BASE_URL + 'reactives', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('ReactiveService',
      [
        '$resource', 'TokenService',
        ReactiveService
      ]
    );

  // MaterialService.js
  /**
   * @name MaterialService
   * @constructor
   * @desc Proveedor de datos, Materiales
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function MaterialService($resource, TokenService) {
    return $resource(API_BASE_URL + 'materials', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('MaterialService',
      [
        '$resource', 'TokenService',
        MaterialService
      ]
    );

  // CoolerService.js
  /**
   * @name CoolerService
   * @constructor
   * @desc Proveedor de datos, Hieleras
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function CoolerService($resource, TokenService) {
    return $resource(API_BASE_URL + 'coolers', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('CoolerService',
      [
        '$resource', 'TokenService',
        CoolerService
      ]
    );

  // SamplingInstrumentService.js
  /**
   * @name SamplingInstrumentService
   * @constructor
   * @desc Proveedor de datos, Equipos de muestreo
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function SamplingInstrumentService($resource, TokenService) {
    return $resource(API_BASE_URL + 'instruments/sampling', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('SamplingInstrumentService',
      [
        '$resource', 'TokenService',
        SamplingInstrumentService
      ]
    );

  // FieldParameterService.js
  /**
   * @name FieldParameterService
   * @constructor
   * @desc Proveedor de datos, Parámetros campo
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function FieldParameterService($resource, TokenService) {
    return $resource(API_BASE_URL + 'parameters/field', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('FieldParameterService',
      [
        '$resource', 'TokenService',
        FieldParameterService
      ]
    );

  // ReceptionistService.js
  /**
   * @name ReceptionistService
   * @constructor
   * @desc Proveedor de datos, Recepcionistas
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function ReceptionistService($resource, TokenService) {
    return $resource(API_BASE_URL + 'receptionists', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('ReceptionistService',
      [
        '$resource', 'TokenService',
        ReceptionistService
      ]
    );

  // ExpirationService.js
  /**
   * @name ExpirationService
   * @constructor
   * @desc Proveedor de datos, Vigencias
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function ExpirationService($resource, TokenService) {
    return $resource(API_BASE_URL + 'expirations', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('ExpirationService',
      [
        '$resource', 'TokenService',
        ExpirationService
      ]
    );

  // RequiredVolumeService.js
  /**
   * @name RequiredVolumeService
   * @constructor
   * @desc Proveedor de datos, Volúmenes requeridos
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function RequiredVolumeService($resource, TokenService) {
    return $resource(API_BASE_URL + 'volumes', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('RequiredVolumeService',
      [
        '$resource', 'TokenService',
        RequiredVolumeService
      ]
    );

  // CheckerService.js
  /**
   * @name CheckerService
   * @constructor
   * @desc Proveedor de datos, Responsables verificación
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function CheckerService($resource, TokenService) {
    return $resource(API_BASE_URL + 'checkers', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('CheckerService',
      [
        '$resource', 'TokenService',
        CheckerService
      ]
    );

  // SamplesListService.js
  /**
   * @name SamplesListService
   * @constructor
   * @desc Proveedor de datos, Muestras
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function SamplesListService($resource, TokenService) {
    return $resource(API_BASE_URL + 'samples', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('SamplesListService',
      [
        '$resource', 'TokenService',
        SamplesListService
      ]
    );

  // InstrumentsListService.js
  /**
   * @name InstrumentsListService
   * @constructor
   * @desc Proveedor de datos, Equipos
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function InstrumentsListService($resource, TokenService) {
    return $resource(API_BASE_URL + 'instruments', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('InstrumentsListService',
      [
        '$resource', 'TokenService',
        InstrumentsListService
      ]
    );

  // ContainersListService.js
  /**
   * @name ContainersListService
   * @constructor
   * @desc Proveedor de datos, Recipientes
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function ContainersListService($resource, TokenService) {
    return $resource(API_BASE_URL + 'containers', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('ContainersListService',
      [
        '$resource', 'TokenService',
        ContainersListService
      ]
    );

  // AnalysisListService.js
  /**
   * @name AnalysisListService
   * @constructor
   * @desc Proveedor de datos, consulta de Análisis
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function AnalysisListService($resource, TokenService) {
    return $resource(API_BASE_URL + 'analysis', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('AnalysisListService',
      [
        '$resource', 'TokenService',
        AnalysisListService
      ]
    );

  // DepartmentService.js
  /**
   * @name DepartmentService
   * @constructor
   * @desc Proveedor de datos, Áreas
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function DepartmentService($resource, TokenService) {
    return $resource(API_BASE_URL + 'areas', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('DepartmentService',
      [
        '$resource', 'TokenService',
        DepartmentService
      ]
    );

  // AnalysisService.js
  /**
   * @name AnalysisService
   * @constructor
   * @desc Proveedor de datos, selección de formato de captura de Análisis
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function AnalysisService($resource, TokenService) {
    return $resource(API_BASE_URL + 'analysis/selections', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('AnalysisService',
      [
        '$resource', 'TokenService',
        AnalysisService
      ]
    );

  // ReportsListService.js
  /**
   * @name ReportsListService
   * @constructor
   * @desc Proveedor de datos, Reportes
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function ReportsListService($resource, TokenService) {
    return $resource(API_BASE_URL + 'reports', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('ReportsListService',
      [
        '$resource', 'TokenService',
        ReportsListService
      ]
    );

  // ReportService.js
  /**
   * @name ReportService
   * @constructor
   * @desc Proveedor de datos, Reporte
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function ReportService($resource, TokenService) {
    return $resource(API_BASE_URL + 'reports/:reportId', {}, {
      query: {
        method: 'GET',
        params: {reportId: 'id_reporte'},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('ReportService',
      [
        '$resource', 'TokenService',
        ReportService
      ]
    );

  // EmployeeService.js
  /**
   * @name EmployeeService
   * @constructor
   * @desc Proveedor de datos, Empleados
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function EmployeeService($resource, TokenService) {
    return $resource(API_BASE_URL + 'employees', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('EmployeeService',
      [
        '$resource', 'TokenService',
        EmployeeService
      ]
    );

  // NormsListService.js
  /**
   * @name NormsListService
   * @constructor
   * @desc Proveedor de datos, Normas
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function NormsListService($resource, TokenService) {
    return $resource(API_BASE_URL + 'norms', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('NormsListService',
      [
        '$resource', 'TokenService',
        NormsListService
      ]
    );

  // ReferencesListService.js
  /**
   * @name ReferencesListService
   * @constructor
   * @desc Proveedor de datos, Referencias
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function ReferencesListService($resource, TokenService) {
    return $resource(API_BASE_URL + 'references', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('ReferencesListService',
      [
        '$resource', 'TokenService',
        ReferencesListService
      ]
    );

  // MethodsListService.js
  /**
   * @name MethodsListService
   * @constructor
   * @desc Proveedor de datos, Métodos
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function MethodsListService($resource, TokenService) {
    return $resource(API_BASE_URL + 'methods', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('MethodsListService',
      [
        '$resource', 'TokenService',
        MethodsListService
      ]
    );

  // PricesListService.js
  /**
   * @name PricesListService
   * @constructor
   * @desc Proveedor de datos, Precios
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function PricesListService($resource, TokenService) {
    return $resource(API_BASE_URL + 'prices', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('PricesListService',
      [
        '$resource', 'TokenService',
        PricesListService
      ]
    );

  // UsersListService.js
  /**
   * @name UsersListService
   * @constructor
   * @desc Proveedor de datos, Usuarios
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function UsersListService($resource, TokenService) {
    return $resource(API_BASE_URL + 'users', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('UsersListService',
      [
        '$resource', 'TokenService',
        UsersListService
      ]
    );

  // UserProfileService.js
  /**
   * @name UserProfileService
   * @constructor
   * @desc Proveedor de datos, Perfil de usuario
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function UserProfileService($resource, TokenService) {
    return $resource(API_BASE_URL + 'users/:userId', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('UserProfileService',
      [
        '$resource', 'TokenService',
        UserProfileService
      ]
    );

  // CloudService.js
  /**
   * @name CloudService
   * @constructor
   * @desc Proveedor de datos, Coberturas nubes
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function CloudService($resource, TokenService) {
    return $resource(API_BASE_URL + 'clouds', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('CloudService',
      [
        '$resource', 'TokenService',
        CloudService
      ]
    );

  // WindService.js
  /**
   * @name WindService
   * @constructor
   * @desc Proveedor de datos, Direcciones viento
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function WindService($resource, TokenService) {
    return $resource(API_BASE_URL + 'winds', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('WindService',
      [
        '$resource', 'TokenService',
        WindService
      ]
    );

  // WaveService.js
  /**
   * @name WaveService
   * @constructor
   * @desc Proveedor de datos, Intensidades oleaje
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function WaveService($resource, TokenService) {
    return $resource(API_BASE_URL + 'waves', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('WaveService',
      [
        '$resource', 'TokenService',
        WaveService
      ]
    );

  // SamplingNormService.js
  /**
   * @name SamplingNormService
   * @constructor
   * @desc Proveedor de datos, Normas muestreo
   * @param {Object} $resource - Acceso a recursos HTTP [AngularJS]
   * @param {Object} TokenService - Proveedor de métodos para token
   * @return {Object} $resource - Acceso a recursos HTTP
   */
  function SamplingNormService($resource, TokenService) {
    return $resource(API_BASE_URL + 'sampling/norms', {}, {
      get: {
        method: 'GET',
        params: {},
        isArray: true,
        headers: {
          'Auth-Token': TokenService.getToken()
        }
      }
    });
  }
  angular
    .module('sislabApp')
    .factory('SamplingNormService',
      [
        '$resource', 'TokenService',
        SamplingNormService
      ]
    );

  //CONTROLLERS
  //LoginController.js
  /**
   * @name LoginController
   * @constructor
   * @desc Controla la vista para Login
   * @this {Object} $scope - Contenedor para el modelo [AngularJS]
   * @param {Object} $http - Manejo de peticiones HTTP [AngularJS]
   * @param {Object} $location - Manejo de URL [AngularJS]
   * @param {Object} TokenService - Proveedor para manejo del token
   */
  function LoginController($scope, TokenService) {
    var vm = this;
    vm.message = '';
    vm.user = {username: '', password: ''};
    vm.submitForm = submitForm;

    function submitForm() {
      vm.message = '';
      if (!$scope.loginForm.$valid)
      {
        vm.message = 'Ingrese usuario y/o contraseña';
        return;
      }
      vm.message = TokenService.authenticateUser(
        vm.user.username,
        vm.user.password
      );
    }
  }
  angular
    .module('sislabApp')
    .controller('LoginController',
      [
        '$scope', 'TokenService',
        LoginController
      ]
    );

  //MenuController.js
  /**
   * @name MenuController
   * @constructor
   * @desc Controla la directiva para el Menú principal
   * @this {Object} $scope - Contenedor para el modelo [AngularJS]
   * @param {Object} MenuService - Proveedor de datos, Menú
   */
  function MenuController(MenuService) {
    var vm = this;
    vm.menu = MenuService.get();
  }
  angular
    .module('sislabApp')
    .controller('MenuController',
      [
        'MenuService',
        MenuController
      ]
    );

  //TaskListController.js
  /**
   * @name TaskListController
   * @constructor
   * @desc Controla la vista para Tareas
   * @this {Object} $scope - Contenedor para el modelo [AngularJS]
   * @param {Object} TokenService - Proveedor para manejo del token
   * @param {Object} TaskService - Proveedor de datos, Tareas
   */
  function TaskListController(TokenService, TaskService) {
    var vm = this,
    userData;
    vm.userName = '';
    vm.tasks = {};
    if (TokenService.isAuthenticated())
    {
      userData = TokenService.getUserFromToken();
      vm.userName = userData.name;
      vm.tasks = TaskService.get(userData.id);
    }
  }
  angular
    .module('sislabApp')
    .controller('TaskListController',
      [
        'TokenService', 'TaskService',
        TaskListController
      ]
    );

  //StudyListController.js
  /**
   * @name StudyListController
   * @constructor
   * @desc Controla la vista para el listado de Estudios
   * @this {Object} $scope - Contenedor para el modelo [AngularJS]
   * @param {Object} $location - Manejo de URL [AngularJS]
   * @param {Object} StudyService - Proveedor de datos, Estudios
   */
  function StudyListController($location, StudyService) {
    var vm = this;
    vm.studies = StudyService.get();
    vm.addStudy = addStudy;
    vm.viewStudy = viewStudy;

    function addStudy() {
      $location.path('/estudio/estudio/0');
    }

    function viewStudy(id) {
      $location.path('/estudio/estudio/' + parseInt(id));
    }
  }
  angular
    .module('sislabApp')
    .controller('StudyListController',
      [
        '$location', 'StudyService',
        StudyListController
      ]
    );

  //StudyController.js
  /**
   * @name StudyController
   * @constructor
   * @desc Controla la vista para capturar un Estudio
   * @this {Object} $scope - Contenedor para el modelo [AngularJS]
   * @param {Object} $routeParams - Proveedor de parámetros de ruta [AngularJS]
   * @param {Object} TokenService - Proveedor para manejo del token
   * @param {Object} ValidationService - Proveedor para manejo de validación
   * @param {Object} RestUtilsService - Proveedor para manejo de servicios REST
   * @param {Object} ArrayUtilsService - Proveedor para manejo de arreglos
   * @param {Object} DateUtilsService - Proveedor para manejo de fechas
   * @param {Object} ClientService - Proveedor de datos, Clientes
   * @param {Object} MatrixService - Proveedor de datos, Matrices
   * @param {Object} SamplingTypeService - Proveedor de datos, Tipos de muestreo
   * @param {Object} NormService - Proveedor de datos, Normas
   * @param {Object} OrderSourceService - Proveedor de datos, Orígenes de orden
   * @param {Object} StudyService - Proveedor de datos, Estudios
   */
  function StudyController($scope, $routeParams, TokenService,
    ValidationService, RestUtilsService, ArrayUtilsService,
    DateUtilsService, ClientService, MatrixService,
    SamplingTypeService, NormService, OrderSourceService,
    StudyService) {
    var vm = this;
    vm.study = StudyService.query({studyId: $routeParams.studyId});
    vm.user = TokenService.getUserFromToken();
    vm.clients = ClientService.get();
    vm.matrices = MatrixService.get();
    vm.samplingTypes = SamplingTypeService.get();
    vm.norms = NormService.get();
    vm.orderSources = OrderSourceService.get();
    vm.message = '';
    vm.isDataSubmitted = false;
    vm.selectClient = selectClient;
    vm.getScope = getScope;
    vm.addQuote = addQuote;
    vm.removeQuote = removeQuote;
    vm.approveItem = approveItem;
    vm.rejectItem = rejectItem;
    vm.isFormValid = isFormValid;
    vm.submitForm = submitForm;

    function selectClient() {
      vm.study.cliente = ArrayUtilsService.selectItemFromCollection(
        vm.clients,
        'id_cliente',
        vm.study.id_cliente
      );
      return vm.study.cliente;
    }

    function getScope() {
      return vm;
    }

    function addQuote() {
      vm.study.solicitudes.push({
        'id_solicitud':vm.study.solicitudes.length + 1,
        'id_estudio':vm.study.id_estudio,
        'id_matriz':0,
        'cantidad_muestras':0,
        'id_tipo_muestreo':1,
        'id_norma':0
      });
    }

    function removeQuote(event) {
      var field = '$$hashKey',
      quoteRow = ArrayUtilsService.extractItemFromCollection(
        vm.study.solicitudes,
        field,
        event[field]
      );
    }

    function approveItem() {
      ValidationService.approveItem(vm.study, vm.user);
    }

    function rejectItem() {
      ValidationService.rejectItem(vm.study, vm.user);
    }

    function isQuoteListValid() {
      var i = 0,
      l = 0,
      quotes = [];
      if (vm.study.solicitudes && vm.study.solicitudes.length > 0)
      {
        quotes = vm.study.solicitudes;
        l = quotes.length;
        for (i = 0; i < l; i += 1) {
          if (quotes[i].id_matriz < 1)
          {
            vm.message += ' Seleccione una matriz, para la solicitud ';
            vm.message += '(Ver fila ' + (i + 1) + ')';
            return false;
          }
          if (isNaN(quotes[i].cantidad_muestras) || quotes[i].cantidad_muestras < 1)
          {
            vm.message += ' Ingrese cantidad de muestras, para la solicitud ';
            vm.message += '(Ver fila ' + (i + 1) + ')';
            return false;
          }
          if (quotes[i].id_tipo_muestreo < 1)
          {
            vm.message += ' Seleccione un tipo de muestreo, para la solicitud ';
            vm.message += '(Ver fila ' + (i + 1) + ')';
            return false;
          }
          if (quotes[i].id_norma < 1)
          {
            vm.message += ' Seleccione una norma, para la solicitud ';
            vm.message += '(Ver fila ' + (i + 1) + ')';
            return false;
          }
        }
      }
      else
      {
        vm.message += ' Agregue una solicitud ';
        return false;
      }
      return true;
    }

    function isFormValid() {
      vm.message = '';
      if (!DateUtilsService.isValidDate(new Date(vm.study.fecha)))
      {
        vm.message += ' Ingrese una fecha válida ';
        return false;
      }
      if (vm.study.id_cliente < 1)
      {
        vm.message += ' Seleccione un cliente ';
        return false;
      }
      if (!isQuoteListValid())
      {
        return isQuoteListValid();
      }
      if (vm.study.id_origen_orden < 1)
      {
        vm.message += ' Seleccione un medio de solicitud de muestreo ';
        return false;
      }
      if (vm.study.id_origen_orden == 1 || vm.study.id_origen_orden == 4)
      {
        if (vm.study.origen_descripcion.length < 1)
        {
          vm.message += ' Ingrese oficio o emergencia ';
          return false;
        }
      }
      if (vm.study.ubicacion.length < 1)
      {
        vm.message += ' Ingrese una ubicación ';
        return false;
      }
      if (vm.user.level < 3)
      {
        if (vm.study.id_status == 3 && vm.study.motivo_rechaza.length < 1)
        {
          vm.message += ' Ingrese el motivo de rechazo del Informe ';
          return false;
        }
      }
      return true;
    }

    function submitForm() {
      if (isFormValid() && !vm.isDataSubmitted)
      {
        vm.isDataSubmitted = true;
        if (vm.study.id_estudio > 0)
        {
          RestUtilsService
            .saveData(
              StudyService,
              vm.study,
              'estudio/estudio',
              'id_estudio'
            );
        }
        else
        {
          if (vm.user.level < 3 || vm.study.study.id_status < 2)
          {
            RestUtilsService
              .updateData(
                StudyService,
                vm.study,
                'estudio/estudio',
                'id_estudio'
              );
          }
        }
      }
    }
  }
  angular
    .module('sislabApp')
    .controller('StudyController',
      [
        '$scope', '$routeParams', 'TokenService',
        'ValidationService', 'RestUtilsService', 'ArrayUtilsService',
        'DateUtilsService', 'ClientService', 'MatrixService',
        'SamplingTypeService', 'NormService', 'OrderSourceService',
        'StudyService',
        StudyController
      ]
    );

  //QuoteListController.js
  /**
   * @name QuoteListController
   * @constructor
   * @desc Controla la vista para el listado de Solicitudes/Cotizaciones
   * @this {Object} $scope - Contenedor para el modelo [AngularJS]
   * @param {Object} $location - Manejo de URL [AngularJS]
   * @param {Object} QuoteService - Proveedor de datos, Solicitud
   */
  function QuoteListController($location, QuoteService) {
    var vm = this;
    vm.quotes = QuoteService.get();
    vm.viewQuote = viewQuote;

    function viewQuote(id) {
      var itemId = parseInt(id);
      $location.path('/muestreo/solicitud/' + itemId);
    }
  }
  angular
    .module('sislabApp')
    .controller('QuoteListController',
      [
        '$location', 'QuoteService',
        QuoteListController
      ]
    );

  // QuoteController.js
  /**
   * @name QuoteController
   * @constructor
   * @desc Controla la vista para capturar una Solicitud
   * @this {Object} $scope - Contenedor para el modelo [AngularJS]
   * @param {Object} $routeParams - Proveedor de parámetros de ruta [AngularJS]
   * @param {Object} TokenService - Proveedor para manejo del token
   * @param {Object} ValidationService - Proveedor para manejo de validación
   * @param {Object} RestUtilsService - Proveedor para manejo de servicios REST
   * @param {Object} ArrayUtilsService - Proveedor para manejo de arreglos
   * @param {Object} ParameterService - Proveedor de datos, Parámetros de análisis
   * @param {Object} QuoteService - Proveedor de datos, Solicitudes
   */
  function QuoteController($scope, $routeParams, TokenService,
    ValidationService, RestUtilsService, ArrayUtilsService,
    ParameterService, QuoteService) {
    var vm = this;
    vm.quote = QuoteService.query({quoteId: $routeParams.quoteId});
    vm.user = TokenService.getUserFromToken();
    vm.parameters = ParameterService.get();
    vm.totalCost = 0;
    vm.message = '';
    vm.isDataSubmitted = false;
    vm.totalParameter = totalParameter;
    vm.selectNormParameters = selectNormParameters;
    vm.approveItem = approveItem;
    vm.rejectItem = rejectItem;
    vm.isFormValid = isFormValid;
    vm.submitForm = submitForm;

    function totalParameter(){
      var i = 0, l = 0, t = 0;
      if (vm.parameters && vm.quote.cliente)
      {
        l = vm.parameters.length;
        for (i = 0; i < l; i += 1) {
          if (vm.parameters[i].selected)
          {
            t = t + parseInt(vm.parameters[i].precio, 10);
          }
        }
        t = t * vm.quote.cliente.tasa * vm.quote.cantidad_muestras;
        vm.totalCost = (Math.round(t * 100) / 100);
        vm.quote.total = vm.totalCost;
      }
      return vm.totalCost;
    }

    function selectNormParameters() {
      var i, l, j, m;
      l = vm.parameters.length;
      if (l > 0 && vm.quote.parametros)
      {
        for(i = 0; i < l; i += 1) {
          vm.parameters[i].selected = false;
          m = vm.quote.parametros.length;
          for (j = 0; j < m; j += 1) {
            if (vm.parameters[i].id_parametro == vm.quote.norma.parametros[j].id_parametro)
            {
              vm.parameters[i].selected = true;
              break;
            }
          }
        }
      }
    }

    function approveItem() {
      ValidationService.approveItem(vm.quote, vm.user);
    }

    function rejectItem() {
      ValidationService.rejectItem(vm.quote, vm.user);
    }

    function isFormValid() {
      vm.message = '';
      if (vm.quote.cuerpo_receptor.length > 0 && vm.quote.tipo_cuerpo.length < 1)
      {
        vm.message += ' Ingrese tipo de cuerpo receptor';
        return false;
      }
      if (vm.quote.cuerpo_receptor.length < 1 && vm.quote.tipo_cuerpo.length > 0)
      {
        vm.message += ' Ingrese cuerpo receptor';
        return false;
      }
      if (vm.user.level < 3)
      {
        if (vm.quote.id_status == 3 && vm.quote.motivo_rechaza.length < 1)
        {
          vm.message += ' Ingrese el motivo de rechazo de la Solicitud ';
          return false;
        }
      }
      return true;
    }

    function submitForm() {
      if (isFormValid() && !vm.isDataSubmitted)
      {
        vm.isDataSubmitted = true;
        if (vm.quote.id_solicitud > 0)
        {
          RestUtilsService
            .saveData(
              QuoteService,
              vm.quote,
              'muestreo/solicitud',
              'id_solicitud'
            );
        }
        else
        {
          if (vm.user.level < 3 || vm.quote.quote.id_status < 2)
          {
            RestUtilsService
              .updateData(
                QuoteService,
                vm.quote,
                'muestreo/solicitud',
                'id_solicitud'
              );
          }
        }
      }
    }
  }
  angular
    .module('sislabApp')
    .controller('QuoteController',
      [
        '$scope', '$routeParams', 'TokenService',
        'ValidationService', 'RestUtilsService', 'ArrayUtilsService',
        'ParameterService', 'QuoteService',
        QuoteController
      ]
    );

  //OrderListController.js
  /**
   * @name OrderListController
   * @constructor
   * @desc Controla la vista para el listado de Órdenes muestreo
   * @this {Object} $scope - Contenedor para el modelo [AngularJS]
   * @param {Object} $location - Manejo de URL [AngularJS]
   * @param {Object} OrderService - Proveedor de datos, Órdenes de muestreo
   */
  function OrderListController($location, OrderService) {
    var vm = this;
    vm.orders = OrderService.get();
    vm.viewOrder = viewOrder;

    function viewOrder(id) {
      $location.path('/muestreo/orden/' + parseInt(id));
    }
  }
  angular
    .module('sislabApp')
    .controller('OrderListController',
      [
        '$location', 'OrderService',
        OrderListController
      ]
    );

  // OrderController.js
  /**
   * @name OrderController
   * @constructor
   * @desc Controla la vista para capturar una Orden de muestreo
   * @this {Object} $scope - Contenedor para el modelo [AngularJS]
   * @param {Object} $routeParams - Proveedor de parámetros de ruta [AngularJS]
   * @param {Object} TokenService - Proveedor para manejo del token
   * @param {Object} ValidationService - Proveedor para manejo de validación
   * @param {Object} RestUtilsService - Proveedor para manejo de servicios REST
   * @param {Object} ArrayUtilsService - Proveedor para manejo de arreglos
   * @param {Object} DateUtilsService - Proveedor para manejo de fechas
   * @param {Object} PointPackageService - Proveedor de datos, Paquetes de puntos
   * @param {Object} SamplingSupervisorService - Proveedor de datos, Supervisores de muestreo
   * @param {Object} OrderService - Proveedor de datos, Órdenes de muestreo
   */
  function OrderController($scope, $routeParams, TokenService,
    ValidationService, RestUtilsService, ArrayUtilsService,
    DateUtilsService, PointPackageService, SamplingSupervisorService,
    OrderService) {
    var vm = this;
    vm.order = OrderService.query({orderId: $routeParams.orderId});
    vm.user = TokenService.getUserFromToken();
    vm.supervisors = SamplingSupervisorService.get();
    vm.packages = PointPackageService.get();
    vm.message = '';
    vm.isDataSubmitted = false;
    vm.getScope = getScope;
    vm.addPlan = addPlan;
    vm.removePlan = removePlan;
    vm.approveItem = approveItem;
    vm.rejectItem = rejectItem;
    vm.isFormValid = isFormValid;
    vm.submitForm = submitForm;

    function getScope() {
      return vm;
    }

    function addPlan() {
      vm.order.planes.push({
        'id_plan':vm.order.planes.length + 1,
        'id_estudio':vm.order.id_estudio,
        'id_orden':vm.order.id_orden,
        'id_paquete_puntos':0,
        'id_supervisor_muestreo':0,
        'id_status':0,
        'fecha_probable':'',
        'activo':1
      });
    }

    function removePlan(event) {
      var field = '$$hashKey',
      quoteRow = ArrayUtilsService.extractItemFromCollection(
        vm.order.planes,
        field,
        event[field]
      );
    }

    function approveItem() {
      ValidationService.approveItem(vm.order, vm.user);
    }

    function rejectItem() {
      ValidationService.rejectItem(vm.order, vm.user);
    }

    function isPlanListValid() {
      var i = 0,
      l = 0,
      plans = [];
      if (vm.order.planes && vm.order.planes.length > 0)
      {
        plans = vm.order.planes;
        l = plans.length;
        for (i = 0; i < l; i += 1) {
          if (plans[i].id_paquete_puntos < 1)
          {
            vm.message = ' Seleccione un Paquete de puntos ';
            vm.message += '(Ver fila ' + (i + 1) + ')';
            return false;
          }
          if (plans[i].id_supervisor_muestreo < 1)
          {
            vm.message = ' Seleccione un Responsable de muestreo ';
            vm.message += '(Ver fila ' + (i + 1) + ')';
            return false;
          }
          if (!DateUtilsService.isValidDate(new Date(plans[i].fecha_probable)))
          {
            vm.message = ' Ingrese fecha y hora válidas ';
            vm.message += '(Ver fila ' + (i + 1) + ')';
            return false;
          }
        }
      }
      else
      {
        vm.message += ' Agregue un plan ';
        return false;
      }
      return true;
    }

    function isFormValid() {
      vm.message = '';
      if (!isPlanListValid())
      {
        return isPlanListValid();
      }
      if (vm.user.level < 3)
      {
        if (vm.order.id_status == 3 && vm.order.motivo_rechaza.length < 1)
        {
          vm.message += ' Ingrese el motivo de rechazo del Informe ';
          return false;
        }
      }
      return true;
    }

    function submitForm() {
      if (isFormValid() && !vm.isDataSubmitted)
      {
        if (vm.order.id_orden > 0)
        {
          RestUtilsService
            .saveData(
              OrderService,
              vm.order,
              'muestreo/orden',
              'id_orden'
            );
        }
        else
        {
          if (vm.user.level < 3 || vm.order.order.id_status < 2)
          {
            RestUtilsService
              .updateData(
                OrderService,
                vm.order,
                'muestreo/orden',
                'id_orden'
              );
          }
        }
      }
    }
  }
  angular
    .module('sislabApp')
    .controller('OrderController',
      [
        '$scope', '$routeParams', 'TokenService',
        'ValidationService', 'RestUtilsService', 'ArrayUtilsService',
        'DateUtilsService', 'PointPackageService', 'SamplingSupervisorService',
        'OrderService',
        OrderController
      ]
    );

  //PlanListController.js
  /**
   * @name PlanListController
   * @constructor
   * @desc Controla la vista para el listado de Planes de muestreo
   * @this {Object} $scope - Contenedor para el modelo [AngularJS]
   * @param {Object} $location - Manejo de URL [AngularJS]
   * @param {Object} PlanService - Proveedor de datos, Planes de muestreo
   */
  function PlanListController($location, PlanService) {
    var vm = this;
    vm.plans = PlanService.get();
    vm.viewPlan = viewPlan;

    function viewPlan(id) {
      $location.path('/muestreo/plan/' + parseInt(id));
    }
  }
  angular
    .module('sislabApp')
    .controller('PlanListController',
      [
        '$location', 'PlanService',
        PlanListController
      ]
    );

  // PlanController.js
  /**
   * @name PlanController
   * @constructor
   * @desc Controla la vista para capturar un Plan de muestreo
   * @this {Object} $scope - Contenedor para el modelo [AngularJS]
   * @param {Object} $routeParams - Proveedor de parámetros de ruta [AngularJS]
   * @param {Object} TokenService - Proveedor para manejo del token
   * @param {Object} ValidationService - Proveedor para manejo de validación
   * @param {Object} RestUtilsService - Proveedor para manejo de servicios REST
   * @param {Object} ArrayUtilsService - Proveedor para manejo de arreglos
   * @param {Object} DateUtilsService - Proveedor para manejo de fechas
   * @param {Object} PlanObjectivesService - Proveedor de datos, Objetivos Plan de muestreo
   * @param {Object} DistrictService - Proveedor de datos, Municipios
   * @param {Object} CityService - Proveedor de datos, Localidades
   * @param {Object} SamplingEmployeeService - Proveedor de datos, Empleados muestreo
   * @param {Object} ContainerService - Proveedor de datos, Recipientes
   * @param {Object} ReactiveService - Proveedor de datos, Reactivos
   * @param {Object} MaterialService - Proveedor de datos, Material
   * @param {Object} CoolerService - Proveedor de datos, Hieleras
   * @param {Object} SamplingInstrumentService - Proveedor de datos, Equipos de muestreo
   * @param {Object} PlanService - Proveedor de datos, Plan de muestreo
   */
  function PlanController($scope,$routeParams,TokenService,
    ValidationService,RestUtilsService,ArrayUtilsService,
    DateUtilsService,PlanObjectivesService,DistrictService,
    CityService,SamplingEmployeeService,ContainerService,
    ReactiveService,MaterialService,CoolerService,
    SamplingInstrumentService,PlanService) {
    var vm = this;
    vm.plan = PlanService.query({planId: $routeParams.planId});
    vm.user = TokenService.getUserFromToken();
    vm.objectives = PlanObjectivesService.get();
    vm.instruments = SamplingInstrumentService.get();
    vm.cities = [];
    vm.districts = [];
    vm.samplingEmployees = SamplingEmployeeService.get();
    vm.containers = ContainerService.get();
    vm.reactives = ReactiveService.get();
    vm.materials = MaterialService.get();
    vm.coolers = CoolerService.get();
    vm.isInstrumentListLoaded = false;
    vm.isContainerListLoaded = false;
    vm.isReactiveListLoaded = false;
    vm.isMaterialListLoaded = false;
    vm.isCoolerListLoaded = false;
    vm.isDataSubmitted = false;
    vm.selectDistrict = selectDistrict;
    vm.selectInstruments = selectInstruments;
    vm.selectContainers = selectContainers;
    vm.selectReactives = selectReactives;
    vm.selectMaterials = selectMaterials;
    vm.selectCoolers = selectCoolers;
    vm.approveItem = approveItem;
    vm.rejectItem = rejectItem;
    vm.submitForm = submitForm;

    DistrictService.get()
      .$promise.then(function success(response) {
        vm.districts = response;
        if (vm.plan.id_municipio && vm.plan.id_municipio > 0)
        {
          ArrayUtilsService.selectItemFromCollection(
            vm.districts,
            'id_municipio',
            parseInt(vm.plan.id_municipio)
          );
        }
        CityService
          .query({districtId: vm.plan.id_municipio})
          .$promise
          .then(function success(response) {
            vm.cities = response;
            if (vm.plan.id_localidad && vm.plan.id_localidad > 0)
            {
              ArrayUtilsService.selectItemFromCollection(
                vm.cities,
                'id_localidad',
                parseInt(vm.plan.id_localidad)
              );
            }
          });
      });

    function selectDistrict() {
      vm.cities = CityService.query({districtId: parseInt(vm.plan.id_municipio)});
    }

    function selectInstruments() {
      var items = [];
      if (vm.instruments.length > 0 && vm.plan.equipos)
      {
        if (vm.plan.equipos.length > 0 && !vm.isInstrumentListLoaded)
        {
          ArrayUtilsService.seItemsFromReference(
            vm.instruments,
            vm.plan.equipos,
            'id_equipo',
            [
              'selected'
            ]
          );
          vm.isInstrumentListLoaded = true;
        }
        else
        {
          vm.plan.equipos = [];
          vm.plan.equipos = ArrayUtilsService.selectItemsFromCollection(
            vm.instruments,
            'selected',
            true
          ).slice();
        }
      }
    }

    function selectContainers() {
      var items = [];
      if (vm.containers.length > 0 && vm.plan.recipientes)
      {
        if (vm.plan.recipientes.length > 0 && !vm.isContainerListLoaded)
        {
          ArrayUtilsService.seItemsFromReference(
            vm.containers,
            vm.plan.recipientes,
            'id_clase_recipiente',
            [
              'selected',
              'id_plan',
              'cantidad'
            ]
          );
          vm.isContainerListLoaded = true;
        }
        else
        {
          vm.plan.recipientes = [];
          vm.plan.recipientes = ArrayUtilsService.selectItemsFromCollection(
            vm.containers,
            'selected',
            true
          ).slice();
        }
      }
    }

    function selectReactives() {
      var items = [];
      if (vm.reactives.length > 0 && vm.plan.reactivos)
      {
        if (vm.plan.reactivos.length > 0 && !vm.isReactiveListLoaded)
        {
          ArrayUtilsService.seItemsFromReference(
            vm.reactives,
            vm.plan.reactivos,
            'id_reactivo',
            [
              'selected',
              'id_plan',
              'lote',
              'cantidad'
            ]
          );
          vm.isReactiveListLoaded = true;
        }
        else
        {
          vm.plan.reactivos = [];
          vm.plan.reactivos = ArrayUtilsService.selectItemsFromCollection(
            vm.reactives,
            'selected',
            true
          ).slice();
        }
      }
    }

    function selectMaterials() {
      var items = [];
      if (vm.materials.length > 0 && vm.plan.materiales)
      {
        if (vm.plan.materiales.length > 0 && !vm.isMaterialListLoaded)
        {
          ArrayUtilsService.seItemsFromReference(
            vm.materials,
            vm.plan.materiales,
            'id_material',
            [
              'selected',
              'id_plan'
            ]
          );
          vm.isMaterialListLoaded = true;
        }
        else
        {
          vm.plan.materiales = [];
          vm.plan.materiales = ArrayUtilsService.selectItemsFromCollection(
            vm.materials,
            'selected',
            true
          ).slice();
        }
      }
    }

    function selectCoolers() {
      var items = [];
      if (vm.coolers.length > 0 && vm.plan.hieleras)
      {
        if (vm.plan.hieleras.length > 0 && !vm.isCoolerListLoaded)
        {
          ArrayUtilsService.seItemsFromReference(
            vm.coolers,
            vm.plan.hieleras,
            'id_hielera',
            [
              'selected',
              'id_plan'
            ]
          );
          vm.isCoolerListLoaded = true;
        }
        else
        {
          vm.plan.hieleras = [];
          vm.plan.hieleras = ArrayUtilsService.selectItemsFromCollection(
            vm.coolers,
            'selected',
            true
          ).slice();
        }
      }
    }

    function approveItem() {
      ValidationService.approveItem(vm.plan, vm.user);
    }

    function rejectItem() {
      ValidationService.rejectItem(vm.plan, vm.user);
    }

    function isInstrumentListValid() {
      if (vm.plan.id_responsable_calibracion < 1)
      {
        vm.message += ' Seleccione una Responsable de calibración ';
        return false;
      }
      if (!DateUtilsService.isValidDate(new Date(vm.plan.fecha_calibracion)))
      {
        vm.message += ' Ingrese una fecha válida de calibración ';
        return false;
      }
      if (vm.plan.equipos.length < 1)
      {
        vm.message += ' Seleccione al menos un equipo ';
        return false;
      }
      return true;
    }

    function isContainerListValid() {
      var i = 0,
      l = 0,
      containers = [];
      if (vm.plan.id_responsable_recipientes < 1)
      {
        vm.message += ' Seleccione una Responsable de preparación de recipientes ';
        return false;
      }
      if (vm.plan.recipientes && vm.plan.recipientes.length > 0)
      {
        containers = vm.plan.recipientes;
        l = containers.length;
        for (i = 0; i < l; i += 1) {
          if (isNaN(containers[i].cantidad) || containers[i].cantidad < 1)
          {
            vm.message += ' Ingrese cantidad de recipientes, para la preservación ';
            vm.message += '(Ver fila ' + (i + 1) + ')';
            return false;
          }
        }
      }
      else
      {
        vm.message += ' Seleccione un recipiente ';
        return false;
      }
      return true;
    }

    function isReactiveListValid() {
      var i = 0,
      l = 0,
      reactives = [];
      if (vm.plan.id_responsable_reactivos < 1)
      {
        vm.message += ' Seleccione una Responsable de reactivos ';
        return false;
      }
      if (vm.plan.reactivos && vm.plan.reactivos.length > 0)
      {
        reactives = vm.plan.reactivos;
        l = reactives.length;
        for (i = 0; i < l; i += 1) {
          if (isNaN(reactives[i].cantidad) || reactives[i].cantidad < 1)
          {
            vm.message += ' Ingrese cantidad, para el reactivo ';
            vm.message += '(Ver fila ' + (i + 1) + ')';
            return false;
          }
          if (isNaN(reactives[i].lote) || reactives[i].lote < 1)
          {
            vm.message += ' Ingrese lote, para el reactivo ';
            vm.message += '(Ver fila ' + (i + 1) + ')';
            return false;
          }
        }
      }
      else
      {
        vm.message += ' Seleccione un recipiente ';
        return false;
      }
      return true;
    }

    function isMaterialListValid() {
      var i = 0,
      l = 0,
      materials = [];
      if (vm.plan.id_responsable_material < 1)
      {
        vm.message += ' Seleccione una Responsable de preparación de material ';
        return false;
      }
      if (vm.plan.materiales.length < 1)
      {
        vm.message += ' Seleccione los materiales y equipos ';
        return false;
      }
      return true;
    }

    function isCoolerListValid() {
      var i = 0,
      l = 0,
      coolers = [];
      if (vm.plan.id_responsable_hieleras < 1)
      {
        vm.message += ' Seleccione una Responsable de hieleras ';
        return false;
      }
      if (vm.plan.hieleras.length < 1)
      {
        vm.message += ' Seleccione hieleras ';
        return false;
      }
      return true;
    }

    function isFormValid() {
      vm.message = '';
      if (vm.plan.id_objetivo_plan < 1)
      {
        vm.message += ' Seleccione un objetivo ';
        return false;
      }
      if (vm.plan.id_objetivo_plan == 5 && vm.plan.objetivo_otro.length < 1)
      {
        vm.message += ' Si selecciona otro objetivo debe ingresarlo ';
        return false;
      }
      if (vm.plan.calle.length < 1)
      {
        vm.message += ' Ingrese una calle o ubicación ';
        return false;
      }
      if (vm.plan.id_municipio < 1)
      {
        vm.message += ' Seleccione un municipio ';
        return false;
      }
      if (vm.plan.id_localidad < 1)
      {
        vm.message += ' Seleccione una localidad ';
        return false;
      }
      if (vm.plan.solicitud.id_tipo_muestreo > 1 && isNaN(vm.plab.frecuencia_muestreo))
      {
        vm.message += ' Seleccione una frecuencia de muestreo ';
        return false;
      }
      if (vm.plan.id_supervisor_entrega < 1)
      {
        vm.message += ' Seleccione un Responsable de muestreo ';
        return false;
      }
      if (vm.plan.id_ayudante_entrega < 1)
      {
        vm.message += ' Seleccione una Acompañante de muestreo ';
        return false;
      }
      if (vm.plan.id_supervisor_recolecion < 1)
      {
        vm.message += ' Seleccione un Responsable de recolección ';
        return false;
      }
      if (vm.plan.id_ayudante_recolecion < 1)
      {
        vm.message += ' Seleccione una Acompañante de recolección ';
        return false;
      }
      if (vm.plan.id_supervisor_registro < 1)
      {
        vm.message += ' Seleccione un Responsable de registro de resultados ';
        return false;
      }
      if (vm.plan.id_ayudante_registro < 1)
      {
        vm.message += ' Seleccione una Acompañante de registro de resultados ';
        return false;
      }
      if (!isInstrumentListValid)
      {
        return false;
      }
      if (!isContainerListValid)
      {
        return false;
      }
      if (!isReactiveListValid)
      {
        return false;
      }
      if (!isCoolerListValid)
      {
        return false;
      }
      if (vm.user.level < 3)
      {
        if (vm.plan.id_status == 3 && vm.plan.motivo_rechaza.length < 1)
        {
          vm.message += ' Ingrese el motivo de rechazo del Informe ';
          return false;
        }
      }
      return true;
    }

    function submitForm() {
      if (isFormValid() && !vm.isDataSubmitted)
      {
        console.log(vm.study);
        vm.isDataSubmitted = true;
        if (vm.plan.id_estudio > 0)
        {
          RestUtilsService
            .saveData(
              PlanService,
              vm.plan,
              'muestreo/plan',
              'id_plan'
            );
        }
        else
        {
          if (vm.user.level < 3 || vm.plan.plan.id_status < 2)
          {
            RestUtilsService
              .updateData(
                PlanService,
                vm.plan,
                'muestreo/plan',
                'id_plan'
              );
          }
        }
      }
    }
  }
  angular
    .module('sislabApp')
    .controller('PlanController',
      [
        '$scope','$routeParams','TokenService',
        'ValidationService','RestUtilsService','ArrayUtilsService',
        'DateUtilsService','PlanObjectivesService','DistrictService',
        'CityService','SamplingEmployeeService','ContainerService',
        'ReactiveService','MaterialService','CoolerService',
        'SamplingInstrumentService','PlanService',
        PlanController
      ]
    );

  //SheetListController.js
  /**
   * @name SheetListController
   * @constructor
   * @desc Controla la vista para el listado de Hojas de campo
   * @this {Object} $scope - Contenedor para el modelo [AngularJS]
   * @param {Object} $location - Manejo de URL [AngularJS]
   * @param {Object} SheetService - Proveedor de datos, Hoja de campo
   */
  function SheetListController($location, SheetService) {
    var vm = this;
    vm.sheets = SheetService.get();
    vm.viewFieldSheet = viewFieldSheet;

    function viewFieldSheet(id) {
      $location.path('/recepcion/hoja/' + parseInt(id));
    }
  }
  angular
    .module('sislabApp')
    .controller('SheetListController',
      [
        '$location', 'SheetService',
        SheetListController
      ]
    );

  // SheetController.js
  /**
   * @name SheetController
   * @constructor
   * @desc Controla la vista para capturar la hoja de campo
   * @this {Object} $scope - Contenedor para el modelo [AngularJS]
   * @param {Object} $routeParams - Proveedor de parámetros de ruta [AngularJS]
   * @param {Object} TokenService - Proveedor para manejo del token
   * @param {Object} ValidationService - Proveedor para manejo de validación
   * @param {Object} RestUtilsService - Proveedor para manejo de servicios REST
   * @param {Object} ArrayUtilsService - Proveedor para manejo de arreglos
   * @param {Object} DateUtilsService - Proveedor para manejo de fechas
   * @param {Object} CloudService - Proveedor de datos, Coberturas nubes
   * @param {Object} WindService - Proveedor de datos, Direcciones viento
   * @param {Object} WaveService - Proveedor de datos, Intensidades oleaje
   * @param {Object} SamplingNormService - Proveedor de datos, Normas muestreo
   * @param {Object} PreservationService - Proveedor de datos, Preservaciones
   * @param {Object} SheetService - Proveedor de datos, Hojas de campo
   */
  function SheetController($scope, $routeParams, TokenService,
    ValidationService, RestUtilsService, ArrayUtilsService,
    DateUtilsService, CloudService, WindService,
    WaveService, SamplingNormService, PreservationService,
    SheetService) {
    var vm = this;
    vm.user = TokenService.getUserFromToken();
    vm.sheet = SheetService.query({sheetId: $routeParams.sheetId});
    vm.cloudCovers = CloudService.get();
    vm.windDirections = WindService.get();
    vm.waveIntensities = WaveService.get();
    vm.samplingNorms = SamplingNormService.get();
    vm.preservations = PreservationService.get();
    //SheetService
    //  .query({sheetId: $routeParams.sheetId})
    //  .$promise
    //  .then(function success(response) {
    //    vm.sheet = response;
    //  });
    vm.isPreservationListLoaded = false;
    vm.isDataSubmitted = false;
    vm.selectPreservations = selectPreservations;
    vm.approveItem = approveItem;
    vm.rejectItem = rejectItem;
    vm.submitForm = submitForm;

    function selectPreservations() {
      var items = [];
      if (vm.preservations.length > 0 && vm.sheet.preservaciones)
      {
        if (vm.sheet.preservaciones.length > 0 && !vm.isPreservationListLoaded)
        {
          ArrayUtilsService.seItemsFromReference(
            vm.preservations,
            vm.sheet.preservaciones,
            'id_preservacion',
            [
              'selected'
            ]
          );
          vm.isPreservationListLoaded = true;
        }
        else
        {
          vm.sheet.preservaciones = [];
          vm.sheet.preservaciones = ArrayUtilsService
            .selectItemsFromCollection(
              vm.preservations,
              'selected',
              true
            ).slice();
        }
      }
    }

    function approveItem() {
      ValidationService.approveItem(vm.sheet, vm.user);
    }

    function rejectItem() {
      ValidationService.rejectItem(vm.sheet, vm.user);
    }

    function isResultListValid(sample, sampleResults) {
      var i = 0,
      l = 0,
      results = sampleResults.slice();
      l = results.length;
      for (i = 0; i < l; i += 1) {
        if (results[i].valor_texto.length > 0)
        {
          if (results[i].id_tipo_valor == 2 && results[i].valor_texto.length < 2)
          {
            vm.message += ' Ingrese un valor para el parámetro ';
            vm.message += results[i].parametro + ' ';
            vm.message += sample.punto + ' ';
            return false;
          }
          if (results[i].id_tipo_valor == 1 && isNaN(results[i].valor))
          {
            vm.message += ' Ingrese un valor numérico para el parámetro ';
            vm.message += results[i].parametro + ' ';
            vm.message += sample.punto + ' ';
            return false;
          }
        }
      }
      return true;
    }

    function isSampleListValid() {
      var i = 0,
      l = 0,
      samples = [];
      if (vm.sheet.muestras && vm.sheet.muestras.length > 0)
      {
        samples = vm.sheet.muestras;
        l = samples.length;
        for (i = 0; i < l; i += 1) {
          if (!DateUtilsService.isValidDate(new Date(samples[i].fecha_muestreo)))
          {
            vm.message += ' Ingrese una fecha/hora válida para el punto ';
            vm.message += samples[i].punto + ' ';
            return false;
          }
          isResultListValid(samples[i], samples[i].resultados);
        }
      }
      else
      {
        vm.message += ' Sin resultados ';
        return false;
      }
      return true;
    }

    function isFormValid() {
      vm.message = '';
      if (vm.sheet.id_metodo_muestreo < 1)
      {
        vm.message += ' Seleccione una Norma de referencia ';
        return false;
      }
      if (!DateUtilsService.isValidDate(new Date(vm.sheet.fecha_inicio)))
      {
        vm.message += ' Ingrese una fecha/hora de muestreo válida ';
        return false;
      }
      if (!isSampleListValid())
      {
        return false;
      }
      if (vm.sheet.id_nubes < 1)
      {
        vm.message += ' Seleccione una cobertura de nubes ';
        return false;
      }
      if (vm.sheet.id_direccion_corriente < 1)
      {
        vm.message += ' Seleccione una dirección de corriente ';
        return false;
      }
      if (vm.sheet.id_oleaje < 1)
      {
        vm.message += ' Seleccione una intensidad del oleaje ';
        return false;
      }
      if (vm.sheet.preservaciones.length < 1)
      {
        vm.message += ' Seleccione al menos un tipo de preservación ';
        return false;
      }
      if (vm.user.level < 3)
      {
        if (vm.sheet.id_status == 3 && vm.sheet.motivo_rechaza.length < 1)
        {
          vm.message += ' Ingrese el motivo de rechazo del Informe ';
          return false;
        }
      }
      return true;
    }

    function submitForm() {
      if (isFormValid() && !vm.isDataSubmitted)
      {
        vm.isDataSubmitted = true;
        if (vm.sheet.id_hoja < 1)
        {
          RestUtilsService
            .saveData(
              SheetService,
              vm.sheet,
              'recepcion/hoja',
              'id_hoja'
            );
        }
        else
        {
          if (vm.user.level < 3 || vm.sheet.sheet.id_status < 2)
          {
            RestUtilsService
              .updateData(
                SheetService,
                vm.sheet,
                'recepcion/hoja',
                'id_hoja'
              );
          }
        }
      }
    }
  }
  angular
    .module('sislabApp')
    .controller('SheetController',
      [
        '$scope', '$routeParams', 'TokenService',
        'ValidationService', 'RestUtilsService', 'ArrayUtilsService',
        'DateUtilsService', 'CloudService', 'WindService',
        'WaveService', 'SamplingNormService', 'PreservationService',
        'SheetService',
        SheetController
      ]
    );

  //ReceptionListController.js
  /**
   * @name ReceptionListController
   * @constructor
   * @desc Controla la vista para el listado de Recepciones
   * @this {Object} $scope - Contenedor para el modelo [AngularJS]
   * @param {Object} $location - Manejo de URL [AngularJS]
   * @param {Object} ReceptionService - Proveedor de datos, Recepción muestras
   */
  function ReceptionListController($location, ReceptionService) {
    var vm = this;
    vm.receptions = ReceptionService.get();
    vm.viewReception = viewReception;

    function viewReception(id) {
      $location.path('/recepcion/recepcion/' + parseInt(id));
    }
  }
  angular
    .module('sislabApp')
    .controller('ReceptionListController',
      [
        '$location', 'ReceptionService',
        ReceptionListController
      ]
    );

  // ReceptionController.js
  /**
   * @name ReceptionController
   * @constructor
   * @desc Controla la vista para capturar la recepción de muestras
   * @this {Object} $scope - Contenedor para el modelo [AngularJS]
   * @param {Object} $routeParams - Proveedor de parámetros de ruta [AngularJS]
   * @param {Object} TokenService - Proveedor para manejo del token
   * @param {Object} ValidationService - Proveedor para manejo de validación
   * @param {Object} RestUtilsService - Proveedor para manejo de servicios REST
   * @param {Object} ArrayUtilsService - Proveedor para manejo de arreglos
   * @param {Object} DateUtilsService - Proveedor para manejo de fechas
   * @param {Object} ReceptionistService - Proveedor de datos, Recepcionistas
   * @param {Object} ReceptionService - Proveedor de datos, Recepción muestras
   */
  function ReceptionController($scope, $routeParams, TokenService,
    ValidationService, RestUtilsService, ArrayUtilsService,
    DateUtilsService, ReceptionistService, ReceptionService) {
    var vm = this;
    vm.user = TokenService.getUserFromToken();
    vm.receptionists = ReceptionistService.get();
    vm.reception = ReceptionService.query({receptionId: $routeParams.sheetId});

    vm.selectReceptionist = selectReceptionist;
    vm.approveItem = approveItem;
    vm.rejectItem = rejectItem;
    vm.submitForm = submitForm;

    function selectReceptionist(idRecepcionist) {
      var i = 0, l = vm.receptionists.length;
      vm.reception.recepcionista = {};
      for (i = 0; i < l; i += 1) {
        if (vm.receptionists[i].id_empleado == idRecepcionist)
        {
          vm.reception.recepcionista = vm.receptionists[i];
          break;
        }
      }
      return vm.reception.recepcionista;
    }

    function validateForm() {

    }

    function submitReceptionForm() {
      //send to verification service
    }
  }
  angular
    .module('sislabApp')
    .controller('ReceptionController',
      [
        '$scope', '$routeParams', 'TokenService',
        'ValidationService', 'RestUtilsService', 'ArrayUtilsService',
        'DateUtilsService','ReceptionistService', 'ReceptionService',
        ReceptionController
      ]
    );

  // CustodyController.js
  /**
   * @name CustodyController
   * @constructor
   * @desc Controla la vista para capturar las Hojas de custodia
   * @this {Object} $scope - Contenedor para el modelo [AngularJS]
   * @param {Object} TokenService - Proveedor para manejo del token
   * @param {Object} ArrayUtilsService - Proveedor para manejo de arreglos
   * @param {Object} PreservationService - Proveedor de datos, Preservaciones
   * @param {Object} ExpirationService - Proveedor de datos, Vigencias
   * @param {Object} RequiredVolumeService - Proveedor de datos, Volúmenes requeridos
   * @param {Object} ContainerService - Proveedor de datos, Recipientes
   * @param {Object} CheckerService - Proveedor de datos, Responsables verificación
   * @param {Object} CustodyService - Proveedor de datos, Cadenas de custodia
   */
  function CustodyController($routeParams, TokenService, ArrayUtilsService,
    PreservationService, ExpirationService, RequiredVolumeService,
    ContainerService, CheckerService, CustodyService) {
    var vm = this;
    vm.user = TokenService.getUserFromToken();
    vm.preservations = PreservationService.get();
    vm.expirations = ExpirationService.get();
    vm.volumes = RequiredVolumeService.get();
    vm.containers = ContainerService.get();
    vm.checkers = CheckerService.get();
    vm.custody = CustodyService.query({custodyId: $routeParams.custodyId});

    vm.selectChecker = selectChecker;

    vm.validateCustodyForm = validateCustodyForm;
    vm.submitCustodyForm = submitCustodyForm;

    function selectChecker(idChecker) {
      ArrayUtilsService.selectItemFromCollection(
        vm.checkers,
        'id_responsable_verificacion',
        idChecker
      );
    }

    function validateCustodyForm() {

    }

    function submitCustodyForm () {

    }
  }
  angular
    .module('sislabApp')
    .controller('CustodyController',
      [
        '$routeParams', 'TokenService', 'ArrayUtilsService',
        'PreservationService', 'ExpirationService', 'RequiredVolumeService',
        'ContainerService', 'CheckerService', 'CustodyService',
        CustodyController
      ]
    );

  /**
   * @name CustodyListController
   * @constructor
   * @desc Controla la vista para el listado de Cadenas de custodia
   * @this {Object} $scope - Contenedor para el modelo [AngularJS]
   * @param {Object} $location - Manejo de URL [AngularJS]
   * @param {Object} CustodyService - Proveedor de datos, Cadenas de custodia
   */
  function CustodyListController($location, CustodyService) {
    var vm = this;
    vm.custodies = CustodyService.get();
    vm.viewCustody = viewCustody;

    function viewCustody(id) {
      $location.path('/recepcion/custodia/' + parseInt(id));
    }
  }
  angular
    .module('sislabApp')
    .controller('CustodyListController',
      [
        '$location', 'CustodyService',
        CustodyListController
      ]
    );

  //SampleListController.js
  /**
   * @name SampleListController
   * @constructor
   * @desc Controla la vista para el listado de Muestras
   * @this {Object} $scope - Contenedor para el modelo [AngularJS]
   * @param {Object} SampleService - Proveedor de datos, Muestras
   */
  function SampleListController(SampleService) {
    var vm = this;
    vm.pricesList = SampleService.get();
    vm.selectRow = selectRow;

    function selectRow() {

    }
  }
  angular
    .module('sislabApp')
    .controller('SampleListController',
      [
        'SampleService',
        SampleListController
      ]
    );

  //InstrumentListController.js
  /**
   * @name InstrumentListController
   * @constructor
   * @desc Controla la vista para el listado de Equipos
   * @this {Object} $scope - Contenedor para el modelo [AngularJS]
   * @param {Object} InstrumentService - Proveedor de datos, Equipos
   */
  function InstrumentListController(InstrumentService) {
    var vm = this;
    vm.clients = InstrumentService.get();
    vm.selectRow = selectRow;

    function selectRow() {

    }
  }
  angular
    .module('sislabApp')
    .controller('InstrumentListController',
      [
        'InstrumentService',
        InstrumentListController
      ]
    );

  //ReactiveListController.js
  /**
   * @name ReactiveListController
   * @constructor
   * @desc Controla la vista para el listado de Reactivos
   * @this {Object} $scope - Contenedor para el modelo [AngularJS]
   * @param {Object} ReactiveService - Proveedor de datos, Reactivos
   */
  function ReactiveListController(ReactiveService) {
    var vm = this;
    vm.pricesList = ReactiveService.get();
    vm.selectRow = selectRow;

    function selectRow() {

    }
  }
  angular
    .module('sislabApp')
    .controller('ReactiveListController',
      [
        'ReactiveService',
        ReactiveListController
      ]
    );

  //ContainerListController.js
  /**
   * @name ContainerListController
   * @constructor
   * @desc Controla la vista para el listado de Recipientes
   * @this {Object} $scope - Contenedor para el modelo [AngularJS]
   * @param {Object} ContainerService - Proveedor de datos, Recipientes
   */
  function ContainerListController(ContainerService) {
    var vm = this;
    vm.pricesList = ContainerService.get();
    vm.selectRow = selectRow;

    function selectRow() {

    }
  }
  angular
    .module('sislabApp')
    .controller('ContainerListController',
      [
        'ContainerService',
        ContainerListController
      ]
    );

  //AnalysiListController.js
  /**
   * @name AnalysiListController
   * @constructor
   * @desc Controla la vista para la búsqueda de Análisis
   * @this {Object} $scope - Contenedor para el modelo [AngularJS]
   * @param {Object} AnalysisService - Proveedor de datos, Análisis
   */
  function AnalysiListController(AnalysisService) {
    var vm = this;
    vm.analysisList = AnalysisService.get();

    vm.selectRow = selectRow;
    function selectRow() {
      //TODO send to details view
      console.log('clicked in row');
    }
  }
  angular
    .module('sislabApp')
    .controller('AnalysiListController',
      [
        'AnalysisService',
        AnalysiListController
      ]
    );

  //AnalysisController.js
  /**
   * @name AnalysisController
   * @constructor
   * @desc Controla la vista para seleccionar captura de Análisis
   * @this {Object} $scope - Contenedor para el modelo [AngularJS]
   * @param {Object} DepartmentService - Proveedor de datos, Áreas
   * @param {Object} ParameterService - Proveedor de datos, Parámetros
   * @param {Object} AnalysisService - Proveedor de datos, Análisis
   */
  function AnalysisController(DepartmentService, ParameterService,
    AnalysisService) {
    var vm = this;
    vm.areas = DepartmentService.get();
    vm.parameters = ParameterService.get();
    vm.analysis = AnalysisService.get();

    vm.selectArea = selectArea;
    vm.selectParameter = selectParameter;

    vm.validateAnalysisForm = validateAnalysisForm;
    vm.submitAnalysisForm = submitAnalysisForm;

    function selectArea() {

    }

    function selectParameter() {

    }

    function validateAnalysisForm() {

    }

    function submitAnalysisForm() {

    }
  }
  angular
    .module('sislabApp')
    .controller('AnalysisController',
      [
        'DepartmentService', 'ParameterService',
        'AnalysisService',
        AnalysisController
      ]
    );

  //ReportListController.js
  /**
   * @name ReportListController
   * @constructor
   * @desc Controla la vista para el listado de Reportes
   * @this {Object} $scope - Contenedor para el modelo [AngularJS]
   * @param {Object} ReportService - Proveedor de datos, Reportes
   */
  function ReportListController(ReportService) {
    var vm = this;
    vm.pricesList = ReportService.get();
    vm.selectRow = selectRow;

    function selectRow() {

    }
  }
  angular
    .module('sislabApp')
    .controller('ReportListController',
      [
        'ReportService',
        ReportListController
      ]
    );

  //ReportController.js
  /**
   * @name ReportController
   * @constructor
   * @desc Controla la vista para captura de Reporte
   * @this {Object} $scope - Contenedor para el modelo [AngularJS]
   * @param {Object} $routeParams - Proveedor de parámetros de ruta [AngularJS]
   * @param {Object} ReportService - Proveedor de datos, Reporte
   */
  function ReportController($routeParams, ReportService) {
    var vm = this;
    vm.report = ReportService.get();

    vm.validateReportForm = validateReportForm;
    vm.submitReportForm = submitReportForm;

    function validateReportForm() {

    }

    function submitReportForm() {

    }
  }
  angular
    .module('sislabApp')
    .controller('ReportController',
      [
        'ReportService',
        ReportController
      ]
    );

  //PointListController.js
  /**
   * @name PointListController
   * @constructor
   * @desc Controla la vista para el listado de Puntos
   * @this {Object} $scope - Contenedor para el modelo [AngularJS]
   * @param {Object} PointService - Proveedor de datos, Puntos
   */
  function PointListController(PointService) {
    var vm = this;
    vm.points = PointService.get();
    vm.selectRow = selectRow;

    function selectRow() {

    }
  }
  angular
    .module('sislabApp')
    .controller('PointListController',
      [
        'PointService',
        PointListController
      ]
    );

  //ClientListController.js
  /**
   * @name ClientListController
   * @constructor
   * @desc Controla la vista para el listado de Clientes
   * @this {Object} $scope - Contenedor para el modelo [AngularJS]
   * @param {Object} ClientService - Proveedor de datos, Cliente
   */
  function ClientListController(ClientService) {
    var vm = this;
    vm.clients = ClientService.get();
    vm.selectRow = selectRow;

    function selectRow(e) {
      var itemId = e.currentTarget.id.split('Id')[1];
      console.log(itemId);
    }
  }
  angular
    .module('sislabApp')
    .controller('ClientListController',
      [
        'ClientService',
        ClientListController
      ]
    );

  //DepartmentListController.js
  /**
   * @name DepartmentListController
   * @constructor
   * @desc Controla la vista para el listado de Áreas
   * @this {Object} $scope - Contenedor para el modelo [AngularJS]
   * @param {Object} DepartmentService - Proveedor de datos, Áreas
   */
  function DepartmentListController(DepartmentService) {
    var vm = this;
    vm.departments = DepartmentService.get();
  }
  angular
    .module('sislabApp')
    .controller('DepartmentListController',
      [
        'DepartmentService',
        DepartmentListController
      ]
    );

  //EmployeeListController.js
  /**
   * @name EmployeeListController
   * @constructor
   * @desc Controla la vista para el listado de Empleados
   * @this {Object} $scope - Contenedor para el modelo [AngularJS]
   * @param {Object} EmployeeService - Proveedor de datos, Empleados
   */
  function EmployeeListController(EmployeeService) {
    var vm = this;
    vm.employees = EmployeeService.get();
  }
  angular
    .module('sislabApp')
    .controller('EmployeeListController',
      [
        'EmployeeService',
        EmployeeListController
      ]
    );

  //NormListController.js
  /**
   * @name NormListController
   * @constructor
   * @desc Controla la vista para el listado de Normas
   * @this {Object} $scope - Contenedor para el modelo [AngularJS]
   * @param {Object} NormService - Proveedor de datos, Normas
   */
  function NormListController(NormService) {
    var vm = this;
    vm.clients = NormService.get();
    vm.selectRow = selectRow;

    function selectRow() {

    }
  }
  angular
    .module('sislabApp')
    .controller('NormListController',
      [
        'NormService',
        NormListController
      ]
    );

  //ReferenceListController.js
  /**
   * @name ReferenceListController
   * @constructor
   * @desc Controla la vista para el listado de Referencias
   * @this {Object} $scope - Contenedor para el modelo [AngularJS]
   * @param {Object} ReferenceService - Proveedor de datos, Referencias
   */
  function ReferenceListController(ReferenceService) {
    var vm = this;
    vm.ReferencesList = ReferenceService.get();
    vm.selectRow = selectRow;

    function selectRow() {

    }
  }
  angular
    .module('sislabApp')
    .controller('ReferenceListController',
      [
        'ReferenceService',
        ReferenceListController
      ]
    );

  //MethodListController.js
  /**
   * @name MethodListController
   * @constructor
   * @desc Controla la vista para la búsqueda de Métodos
   * @this {Object} $scope - Contenedor para el modelo [AngularJS]
   * @param {Object} MethodService - Proveedor de datos, Métodos
   */
  function MethodListController(MethodService) {
    var vm = this;
    vm.methodsList = MethodService.get();

    vm.selectRow = selectRow;
    function selectRow() {

    }
  }
  angular
    .module('sislabApp')
    .controller('MethodListController',
      [
        'MethodService',
        MethodListController
      ]
    );

  //PriceListController.js
  /**
   * @name PriceListController
   * @constructor
   * @desc Controla la vista para el listado de Precios
   * @this {Object} $scope - Contenedor para el modelo [AngularJS]
   * @param {Object} PriceService - Proveedor de datos, Precios
   */
  function PriceListController(PriceService) {
    var vm = this;
    vm.pricesList = PriceService.get();
    vm.selectRow = selectRow;

    function selectRow() {

    }
  }
  angular
    .module('sislabApp')
    .controller('PriceListController',
      [
        'PriceService',
        PriceListController
      ]
    );

  //UserListController.js
  /**
   * @name UserListController
   * @constructor
   * @desc Controla la vista para el listado de Usuarios
   * @this {Object} $scope - Contenedor para el modelo [AngularJS]
   * @param {Object} UserService - Proveedor de datos, Usuarios
   */
  function UserListController (UserService) {
    var vm = this;
    vm.users = UserService.get();
  }
  angular
    .module('sislabApp')
    .controller('UserListController',
      [
        'UserService',
        UserListController
      ]
    );

  //ProfileController.js
  /**
   * @name ProfileController
   * @constructor
   * @desc Controla la vista para Perfil
   * @this {Object} $scope - Contenedor para el modelo [AngularJS]
   * @param {Object} UserProfileService - Proveedor de datos, Perfil de usuario
   */
  function ProfileController(UserProfileService) {
    var vm = this;
    vm.profile = UserProfileService.get();
  }
  angular
    .module('sislabApp')
    .controller('ProfileController',
      [
        'UserProfileService',
        ProfileController
      ]
    );

  //LogoutController.js
  /**
   * @name LogoutController
   * @constructor
   * @desc Controla la vista para Logout
   * @this {Object} $scope - Contenedor para el modelo [AngularJS]
   * @param {Object} $location - Manejo de URL [AngularJS]
   * @param {Object} TokenService - Manejo de objeto Window [AngularJS]
   */
  function LogoutController($location, TokenService) {
    var vm = this;
    vm.logout = logout;

    function logout() {
      TokenService.clearToken();
      $location.path('sistema/login');
    }
  }
  angular
    .module('sislabApp')
    .controller('LogoutController',
      [
        '$location', 'TokenService',
        LogoutController
      ]
    );

  //ClientDetailController.js
  /**
   * @name ClientDetailController
   * @constructor
   * @desc Controla la vista para con el detalle de un Cliente
   * @this {Object} $scope - Contenedor para el modelo [AngularJS]
   * @param {Object} ClientService - Proveedor de datos, Clientes
   */
  function ClientDetailController($scope, ClientService) {
    var vm = this;
    vm.clientDetail = ClientService.get();
  }
  angular
    .module('sislabApp')
    .controller('ClientDetailController',
      [
        '$scope',
        'ClientService',
        ClientListController
      ]
    );
})();
<?php
//require_once('MsSqlPdoAdapter.php');
//require_once('ConnectionConstantsSiclab.php');

class DalSiclab
{
	protected static $_instance;
	const DB_DRIVER = "sqlsrv";
	const DB_HOST = "localhost";
	const DB_USER = "siclab";
	const DB_PASSWORD = "siclab@12#";
	const DB_DATA_BASE = "Siclab";

	public static function getInstance() {
		if (self::$_instance === null)
		{
			self::$_instance = new self();
		}
		return self::$_instance;
	}

	protected function __construct() {
		//MsSqlPdoAdapter::getInstance(array(self::DB_HOST, self::DB_USER, self::DB_PASSWORD, self::DB_DATA_BASE));
	}

	protected function __clone(){}

	public function getMenu($userId) {
		//$sql = "SELECT
		//		menu, submenu
		//	FROM
		//		menu
		//	WHERE
		//		id_usuario := $userId
		//	ORDER BY
		//		order";
		//return self::getAllRows($sql);
		$menu = '[]';
		if ($userId == 1)
		{
			$menu = '
				[
					{
						"id_menu":1,
						"orden":1,
						"url":"/#",
						"label":"Muestreo",
						"activo":1,
						"submenu":
						[
							{
								"id_submenu":1,
								"id_menu":1,
								"orden":1,
								"url":"/muestreo/solicitudes",
								"label":"Solicitud",
								"activo":1
							},
							{
								"id_submenu":2,
								"id_menu":1,
								"orden":2,
								"url":"/muestreo/orden",
								"label":"Orden Muestreo",
								"activo":1
							},
							{
								"id_submenu":3,
								"id_menu":1,
								"orden":3,
								"url":"/muestreo/plan",
								"label":"Plan Muestreo",
								"activo":1
							}
						]
					},
					{
						"id_menu":2,
						"orden":2,
						"url":"/#",
						"label":"Recepción",
						"activo":1,
						"submenu":
						[
							{
								"id_submenu":4,
								"id_menu":2,
								"orden":1,
								"url":"/recepcion/campo",
								"label":"Hoja Campo",
								"activo":1
							},
							{
								"id_submenu":5,
								"id_menu":2,
								"orden":1,
								"url":"/recepcion/muestra",
								"label":"Recepción Muestras",
								"activo":1
							},
							{
								"id_submenu":7,
								"id_menu":2,
								"orden":4,
								"url":"/recepcion/custodia",
								"label":"Cadena Custodia",
								"activo":1
							}
						]
					},
					{
						"id_menu":3,
						"orden":3,
						"url":"/#",
						"label":"Inventario",
						"activo":1,
						"submenu":
						[
							{
								"id_submenu":8,
								"id_menu":3,
								"orden":1,
								"url":"/inventario/muestras",
								"label":"Inventario Muestras",
								"activo":1
							},
							{
								"id_submenu":9,
								"id_menu":3,
								"orden":2,
								"url":"/inventario/equipos",
								"label":"Equipos",
								"activo":1
							},
							{
								"id_submenu":10,
								"id_menu":3,
								"orden":3,
								"url":"/inventario/reactivos",
								"label":"Reactivos",
								"activo":1
							},
							{
								"id_submenu":11,
								"id_menu":3,
								"orden":4,
								"url":"/inventario/recipientes",
								"label":"Recipientes",
								"activo":1
							}
						]
					},
					{
						"id_menu":4,
						"orden":4,
						"url":"/#",
						"label":"Análisis",
						"activo":1,
						"submenu":
						[
							{
								"id_submenu":12,
								"id_menu":4,
								"orden":1,
								"url":"/analisis/consulta",
								"label":"Consultar",
								"activo":1
							},
							{
								"id_submenu":13,
								"id_menu":4,
								"orden":2,
								"url":"/analisis/captura",
								"label":"Registrar",
								"activo":1
							}
						]
					},
					{
						"id_menu":5,
						"orden":5,
						"url":"/#",
						"label":"Reportes",
						"activo":1,
						"submenu":
						[
							{
								"id_submenu":14,
								"id_menu":5,
								"orden":1,
								"url":"/reporte/consulta",
								"label":"Consultar",
								"activo":1
							},
							{
								"id_submenu":15,
								"id_menu":5,
								"orden":2,
								"url":"/reporte/validar",
								"label":"Validar",
								"activo":1
							}
						]
					},
					{
						"id_menu":6,
						"orden":6,
						"url":"/#",
						"label":"Catálogos",
						"activo":1,
						"submenu":
						[
							{
								"id_submenu":16,
								"id_menu":6,
								"orden":1,
								"url":"/catalogo/puntos",
								"label":"Puntos Muestreo",
								"activo":1
							},
							{
								"id_submenu":17,
								"id_menu":6,
								"orden":2,
								"url":"/catalogo/clientes",
								"label":"Clientes",
								"activo":1
							},
							{
								"id_submenu":18,
								"id_menu":6,
								"orden":3,
								"url":"/catalogo/areas",
								"label":"Áreas",
								"activo":1
							},
							{
								"id_submenu":19,
								"id_menu":6,
								"orden":4,
								"url":"/catalogo/empleados",
								"label":"Empleados",
								"activo":1
							},
							{
								"id_submenu":20,
								"id_menu":6,
								"orden":5,
								"url":"/catalogo/normas",
								"label":"Normas",
								"activo":1
							},
							{
								"id_submenu":21,
								"id_menu":6,
								"orden":6,
								"url":"/catalogo/referencia",
								"label":"Valores Referencia",
								"activo":1
							},
							{
								"id_submenu":22,
								"id_menu":6,
								"orden":7,
								"url":"/catalogo/metodos",
								"label":"Métodos análisis",
								"activo":1
							},
							{
								"id_submenu":23,
								"id_menu":6,
								"orden":8,
								"url":"/catalogo/precios",
								"label":"Precio análisis",
								"activo":1
							}
						]
					},
					{
						"id_menu":7,
						"orden":7,
						"url":"/#",
						"label":"Administración",
						"activo":1,
						"submenu":
						[
							{
								"id_submenu":24,
								"id_menu":7,
								"orden":1,
								"url":"/sistema/usuarios",
								"label":"Usuarios",
								"activo":1
							},
							{
								"id_submenu":25,
								"id_menu":7,
								"orden":2,
								"url":"/sistema/perfil",
								"label":"Ver Perfil",
								"activo":1
							},
							{
								"id_submenu":26,
								"id_menu":7,
								"orden":3,
								"url":"/sistema/logout",
								"label":"Cerrar sesión",
								"activo":1
							}
						]
					}
				]
			';
		}
		else
		{
			$menu = '
				[
					{
						"id_menu":7,
						"orden":7,
						"url":"/#",
						"label":"Administración",
						"activo":1,
						"submenu":
						[
							{
								"id_submenu":26,
								"id_menu":7,
								"orden":3,
								"url":"/sistema/logout",
								"label":"Cerrar sesión",
								"activo":1
							}
						]
					}
				]
			';
		}
		return $menu;
	}

		public function getMenu($userId) {
		//$sql = "SELECT
		//		menu, submenu
		//	FROM
		//		menu
		//	WHERE
		//		id_usuario := $userId
		//	ORDER BY
		//		order";
		//return self::getAllRows($sql);
		$result = '[]';
		if ($userId == 1)
		{
			$result = '
				[
					{
						"id_tarea":1,
						"id_usuario":20,
						"id_area":5,
						"area":"Administrativo",
						"id_tipo":1,
						"tipo_tarea":"Solicitud",
						"validado":0,
						"fecha_captura":"2014-11-30",
						"usuario": {
							"id_usuario":20,
							"puesto":"Secretaria",
							"nombres":"Mirna María",
							"ap":"López",
							"am":"Román",
						}
					},
					{
						"id_tarea":2,
						"id_usuario":20,
						"id_area":5,
						"area":"Administrativo",
						"id_tipo":1,
						"tipo_tarea":"Solicitud",
						"validado":0,
						"fecha_captura":"2014-11-30",
						"usuario": {
							"id_usuario":20,
							"puesto":"Secretaria",
							"nombres":"Mirna María",
							"ap":"López",
							"am":"Román",
						}
					},
				]
			';
		}
		return $result;
	}

}
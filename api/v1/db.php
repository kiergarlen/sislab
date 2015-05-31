<?php
//DB FUNCTIONS

function getConnection() {
	try {
		// $dsn = "mysql:host=";
		// $dsn .= DB_HOST . ";";
		// $dsn .= "port=" . DB_PORT . ";";
		// $dsn .= "dbname=" . DB_DATA_BASE;
		$dsn = "sqlsrv:server=";
		$dsn .= DB_HOST . ";Database=";
		$dsn .= DB_DATA_BASE;

		$dbConnection = new PDO($dsn, DB_USER, DB_PASSWORD);
		$dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	} catch(PDOException $e) {
		//error_log($e->getMessage(), 3, '/var/tmp/php.log');
		//echo '{"error":{"text":'. $e->getMessage() .'}}';
		$output = '{"error":"' . $e->getMessage() . '"}';
	}
	return $dbConnection;
}

function getUsers() {
	$sql = "SELECT id_usuario, id_nivel, id_rol, id_area, id_puesto,
		interno, cea, laboratorio, supervisa, analiza, muestrea,
		nombres, apellido_paterno, apellido_materno, usr, pwd,
		fecha_captura, fecha_actualiza, ip_captura, ip_actualiza,
		host_captura, host_actualiza, activo
		FROM Usuario
		WHERE activo = 1";
	$db = getConnection();
	$stmt = $db->prepare($sql);
	$stmt->bindParam("userName", $userName);
	$stmt->bindParam("userPassword", $userPassword);
	$stmt->execute();
	$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
	$db = null;
	return $result;
}

function getUser($userId) {
	$sql = "SELECT id_usuario, id_nivel, id_rol, id_area, id_puesto,
		interno, cea, laboratorio, supervisa, analiza, muestrea, nombres,
		apellido_paterno, apellido_materno, usr, pwd, fecha_captura,
		fecha_actualiza, ip_captura, ip_actualiza,
		host_captura, host_actualiza, activo
		FROM Usuario
		WHERE activo = 1 AND id_usuario = :userId";
	$db = getConnection();
	$stmt = $db->prepare($sql);
	$stmt->bindParam("userId", $userId);
	$stmt->execute();
	$result = $stmt->fetchAll(PDO::FETCH_OBJ);
	$db = null;
	return $result;
}

function getUserByCredentials($userName, $userPassword) {
	$sql = "SELECT id_usuario, id_nivel, id_rol, id_area, id_puesto,
		interno, cea, laboratorio, supervisa, analiza, muestrea,
		nombres, apellido_paterno, apellido_materno, usr, pwd,
		fecha_captura, fecha_actualiza, ip_captura, ip_actualiza,
		host_captura, host_actualiza, activo
		FROM Usuario
		WHERE activo = 1 AND pwd = :userPassword AND usr = :userName";
	$db = getConnection();
	$stmt = $db->prepare($sql);
	$stmt->bindParam("userName", $userName);
	$stmt->bindParam("userPassword", $userPassword);
	$stmt->execute();
	$result = $stmt->fetchAll(PDO::FETCH_OBJ);
	$db = null;
	return $result;
}

function getMenu($userId) {
	$sql = "SELECT
		Menu.id_menu, Submenu.id_submenu, Menu.orden,
		Submenu.orden AS orden_submenu, Menu.menu,
		Submenu.menu AS submenu,Submenu.url
		FROM Usuario INNER JOIN
		Rol ON Usuario.id_rol = Rol.id_rol INNER JOIN
		RolSubmenu ON Rol.id_rol = RolSubmenu.id_rol INNER JOIN
		Submenu ON RolSubmenu.id_submenu = Submenu.id_submenu INNER JOIN
		Menu ON Submenu.id_menu = Menu.id_menu
		WHERE Usuario.activo = 1 AND Usuario.id_usuario = :userId
		ORDER BY Menu.id_menu, Menu.orden, orden_submenu";
	$db = getConnection();
	$stmt = $db->prepare($sql);
	$stmt->bindParam("userId", $userId);
	$stmt->execute();
	$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
	$db = null;
	return $result;
}

function getTasks($userId) {
	$result = '[]';
	// $sql = "SELECT * FROM Tarea WHERE activo = 1";
	// $db = getConnection();
	// $stmt = $db->prepare($sql);
	// $stmt->bindParam("userId", $userId);
	// $stmt->execute();
	// $result = json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
	return $result;
}

function getClients() {
	$sql = "SELECT id_cliente, id_estado, id_municipio,
		id_localidad, interno, cea, tasa, cliente, area,
		rfc, calle, numero, colonia, codigo_postal, telefono,
		fax, contacto, puesto_contacto, email, fecha_captura,
		fecha_actualiza, ip_captura, ip_actualiza, host_captura,
		host_actualiza, activo
		FROM Cliente
		WHERE activo = 1";
	$db = getConnection();
	$stmt = $db->prepare($sql);
	$stmt->execute();
	$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
	$db = null;
	return $result;
}

function getClient($clientId) {
	$sql = "SELECT id_cliente, id_estado, id_municipio,
		id_localidad, interno, cea, tasa, cliente, area,
		rfc, calle, numero, colonia, codigo_postal, telefono,
		fax, contacto, puesto_contacto, email, fecha_captura,
		fecha_actualiza, ip_captura, ip_actualiza, host_captura,
		host_actualiza, activo
		FROM Cliente
		WHERE activo = 1 AND id_cliente = :clientId";
	$db = getConnection();
	$stmt = $db->prepare($sql);
	$stmt->bindParam("clientId", $clientId);
	$stmt->execute();
	$result = $stmt->fetchAll(PDO::FETCH_OBJ);
	$db = null;
	return $result;
}

function getStudies() {
	$sql = "SELECT id_estudio, id_cliente, id_origen_orden,
		id_ubicacion, id_ejercicio, id_status, id_etapa,
		id_usuario_captura, id_usuario_valida, id_usuario_entrega,
		id_usuario_actualiza, oficio, folio, origen_descripcion,
		ubicacion, fecha, fecha_entrega, fecha_captura, fecha_valida,
		fecha_rechaza, ip_captura, ip_valida, ip_actualiza,
		host_captura, host_valida, host_actualiza, motivo_rechaza,
		activo
		FROM Estudio
		WHERE activo = 1";
	$db = getConnection();
	$stmt = $db->prepare($sql);
	$stmt->execute();
	$studies = $stmt->fetchAll(PDO::FETCH_ASSOC);
	$db = null;
	$i = 0;
	$l = count($studies);
	for ($i = 0; $i < $l; $i++) {
		$studies[$i]["cliente"] = getClient($studies[$i]['id_cliente'])[0];
		$studies[$i]["ordenes"] = getStudyOrders($studies[$i]['id_estudio']);
	}
	return $studies;
}

function getBlankStudy() {
	return array(
		"id_estudio" => 0, "id_cliente" => 0,
		"id_origen_orden" => 0, "id_ubicacion" => 1,
		"id_ejercicio" => 2015, "id_status" => 1,
		"id_etapa" => 1, "id_usuario_captura" => 0,
		"id_usuario_valida" => 0, "id_usuario_entrega" => 0,
		"id_usuario_actualiza" => 0, "oficio" => 0,
		"folio" => "", "origen_descripcion" => "",
		"ubicacion" => "", "fecha" => "",
		"fecha_entrega" => "", "fecha_captura" => "",
		"fecha_valida" => "", "fecha_rechaza" => "",
		"ip_captura" => "", "ip_valida" => "",
		"ip_actualiza" => "", "host_captura" => "",
		"host_valida" => "", "host_actualiza" => "",
		"motivo_rechaza" => "", "activo" => 1,
		"cliente" => array(
			"id_cliente" => 0, "id_estado" => 14,
			"id_municipio" => 14039, "id_localidad" => 140390001,
			"interno" => 0, "cea" => 0,
			"tasa" => 0, "cliente" => "",
			"area" => "", "rfc" => "",
			"calle" => "", "numero" => "",
			"colonia" => "", "codigo_postal" => "",
			"telefono" => "", "fax" => "",
			"contacto" => "", "puesto_contacto" => "",
			"email" => "", "fecha_captura" => "",
			"fecha_actualiza" => "", "ip_captura" => "",
			"ip_actualiza" => "", "host_captura" => "",
			"host_actualiza" => "", "activo" => 1
		),
		"ordenes" => array(
			array(
				"id_orden" => 0, "id_estudio" => 0,
				"id_cliente" => 0, "id_matriz" => 0,
				"id_tipo_muestreo" => 1, "id_norma" => 0,
				"id_cuerpo_receptor" => 5, "id_status" => 1,
				"id_usuario_captura" => 0, "id_usuario_valida" => 0,
				"id_usuario_actualiza" => 0, "cantidad_muestras" => 0,
				"costo_total" => 0, "cuerpo_receptor" => "",
				"tipo_cuerpo" => "", "fecha" => "",
				"fecha_entrega" => "", "fecha_captura" => "",
				"fecha_valida" => "", "fecha_actualiza" => "",
				"fecha_rechaza" => "", "ip_captura" => "",
				"ip_valida" => "", "ip_actualiza" => "",
				"host_captura" => "", "host_valida" => "",
				"host_actualiza" => "", "motivo_rechaza" => "",
				"comentarios" => "", "activo" => 1
			)
		)
	);
}

function getPlainStudy($studyId) {
	$sql = "SELECT id_estudio, id_cliente, id_origen_orden,
		id_ubicacion, id_ejercicio, id_status, id_etapa,
		id_usuario_captura, id_usuario_valida, id_usuario_entrega,
		id_usuario_actualiza, oficio, folio, origen_descripcion,
		ubicacion, fecha, fecha_entrega, fecha_captura, fecha_valida,
		fecha_rechaza, ip_captura, ip_valida, ip_actualiza,
		host_captura, host_valida, host_actualiza, motivo_rechaza,
		activo
		FROM Estudio
		WHERE activo = 1 AND id_estudio = :studyId";
	$db = getConnection();
	$stmt = $db->prepare($sql);
	$stmt->bindParam("studyId", $studyId);
	$stmt->execute();
	$study = (array) $stmt->fetchAll(PDO::FETCH_OBJ)[0];
	$db = null;
	return (object) $study;
}

function getStudy($studyId) {
	$study = getPlainStudy($studyId);
	$study->cliente = getClient($study->id_cliente);
	$study->ordenes = getStudyOrders($studyId);
	return $study;
}

function getLastStudyByYear($yearId) {
	$sql = "SELECT TOP (1) id_estudio, id_cliente, id_origen_orden,
		id_ubicacion, id_ejercicio, id_status, id_etapa,
		id_usuario_captura, id_usuario_valida, id_usuario_entrega,
		id_usuario_actualiza, oficio, folio, origen_descripcion,
		ubicacion, fecha, fecha_entrega, fecha_captura, fecha_valida,
		fecha_rechaza, ip_captura, ip_valida, ip_actualiza,
		host_captura, host_valida, host_actualiza, motivo_rechaza,
		activo
		FROM Estudio
		WHERE id_ejercicio = :yearId
		ORDER BY id_estudio DESC";
	$db = getConnection();
	$stmt = $db->prepare($sql);
	$stmt->bindParam("yearId", $yearId);
	$stmt->execute();
	$result = (array) $stmt->fetchAll(PDO::FETCH_OBJ)[0];
	$db = null;
	return (object) $result;
}

function insertStudy($insertData) {
	$sql = "INSERT INTO Estudio (id_cliente, id_origen_orden, id_ubicacion,
		id_ejercicio, id_status, id_etapa, id_usuario_captura,
		id_usuario_valida, id_usuario_entrega,
		id_usuario_actualiza, oficio, folio, origen_descripcion,
		ubicacion, fecha, fecha_entrega, fecha_captura,
		fecha_valida, fecha_rechaza, ip_captura, ip_valida,
		ip_actualiza, host_captura, host_valida, host_actualiza,
		motivo_rechaza, activo)
		VALUES (:id_cliente, :id_origen_orden, :id_ubicacion,
		:id_ejercicio, :id_status, :id_etapa, :id_usuario_captura,
		:id_usuario_valida, :id_usuario_entrega,
		:id_usuario_actualiza, :oficio, :folio, :origen_descripcion,
		:ubicacion, :fecha, :fecha_entrega, :fecha_captura,
		:fecha_valida, :fecha_rechaza, :ip_captura, :ip_valida,
		:ip_actualiza, :host_captura, :host_valida, :host_actualiza,
		:motivo_rechaza, :activo)";
	$db = getConnection();
	$stmt = $db->prepare($sql);
	$stmt->execute($insertData);
	$studyId = $db->lastInsertId();
	$db = null;
	return $studyId;
}

function updateStudy($updateData) {
	$sql = "UPDATE Estudio SET id_cliente = :id_cliente,
		id_origen_orden = :id_origen_orden, id_ubicacion = :id_ubicacion,
		id_ejercicio = :id_ejercicio, id_status = :id_status,
		id_etapa = :id_etapa, id_usuario_valida = :id_usuario_valida,
		id_usuario_entrega = :id_usuario_entrega,
		id_usuario_actualiza = :id_usuario_actualiza, oficio = :oficio,
		folio = :folio, origen_descripcion = :origen_descripcion,
		ubicacion = :ubicacion, fecha = :fecha,
		fecha_entrega = :fecha_entrega,
		fecha_valida = :fecha_valida, fecha_actualiza = :fecha_actualiza,
		fecha_rechaza = :fecha_rechaza, ip_valida = :ip_valida,
		ip_actualiza = :ip_actualiza, host_valida = :host_valida,
		host_actualiza = :host_actualiza, motivo_rechaza = :motivo_rechaza,
		activo = :activo
		WHERE id_estudio = :id_estudio";
	$db = getConnection();
	$stmt = $db->prepare($sql);
	$stmt->execute($updateData);
	$db = null;
	return $updateData["id_estudio"];
}

function getOrders() {
	$sql = "SELECT id_orden, id_estudio, id_cliente, id_matriz,
		id_tipo_muestreo, id_norma, id_cuerpo_receptor, id_status,
		id_usuario_captura, id_usuario_valida, id_usuario_actualiza,
		cantidad_muestras, costo_total, cuerpo_receptor, tipo_cuerpo,
		fecha, fecha_entrega, fecha_captura, fecha_valida,
		fecha_actualiza, fecha_rechaza, ip_captura, ip_valida,
		ip_actualiza, host_captura, host_valida, host_actualiza,
		motivo_rechaza, comentarios, activo
		FROM Orden
		WHERE activo = 1";
	$db = getConnection();
	$stmt = $db->prepare($sql);
	$stmt->execute();
	$orders = $stmt->fetchAll(PDO::FETCH_ASSOC);
	$db = null;
	$i = 0;
	$l = count($orders);
	for ($i = 0; $i < $l; $i++) {
		$orders[$i]["cliente"] = getClient($orders[$i]['id_cliente'])[0];
		$orders[$i]["estudio"] = getPlainStudy($orders[$i]['id_estudio']);
		$orders[$i]["planes"] = getPlansByOrder($orders[$i]['id_orden']);
	}
	return $orders;
}

function getPlainOrder($orderId) {
	$sql = "SELECT id_orden, id_estudio, id_cliente, id_matriz,
		id_tipo_muestreo, id_norma, id_cuerpo_receptor, id_status,
		id_usuario_captura, id_usuario_valida, id_usuario_actualiza,
		cantidad_muestras, costo_total, cuerpo_receptor, tipo_cuerpo,
		fecha, fecha_entrega, fecha_captura, fecha_valida,
		fecha_actualiza, fecha_rechaza, ip_captura, ip_valida,
		ip_actualiza, host_captura, host_valida, host_actualiza,
		motivo_rechaza, comentarios, activo
		FROM Orden
		WHERE activo = 1 AND id_orden = :orderId";
	$db = getConnection();
	$stmt = $db->prepare($sql);
	$stmt->bindParam("orderId", $orderId);
	$stmt->execute();
	$order = (array) $stmt->fetchAll(PDO::FETCH_OBJ)[0];
	$db = null;
	return (object) $order;
}

function getOrder($orderId) {
	$order = getPlainOrder($orderId);
	$order->cliente = getClient($order->id_cliente)[0];
	$order->estudio = getPlainStudy($order->id_estudio);
	if (count(getPlansByOrder($orderId)))
	{
		$order->planes = getPlansByOrder($orderId);
	}
	else
	{
		$order->planes = array(getBlankPlan());
	}
	return $order;
}

function getStudyOrders($studyId) {
	$sql = "SELECT id_orden, id_estudio, id_cliente, id_matriz,
		id_tipo_muestreo, id_norma, id_cuerpo_receptor, id_status,
		id_usuario_captura, id_usuario_valida, id_usuario_actualiza,
		cantidad_muestras, costo_total, cuerpo_receptor, tipo_cuerpo,
		fecha, fecha_entrega, fecha_captura, fecha_valida,
		fecha_actualiza, fecha_rechaza, ip_captura, ip_valida,
		ip_actualiza, host_captura, host_valida, host_actualiza,
		motivo_rechaza, comentarios, activo
		FROM Orden
		WHERE activo = 1 AND id_estudio = :studyId";
	$db = getConnection();
	$stmt = $db->prepare($sql);
	$stmt->bindParam("studyId", $studyId);
	$stmt->execute();
	$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
	$db = null;
	return $result;
}

function insertOrder($orderData) {
	$sql = "INSERT INTO Orden (id_estudio, id_cliente, id_matriz,
		id_tipo_muestreo, id_norma, id_cuerpo_receptor, id_status,
		id_usuario_captura, id_usuario_valida, id_usuario_actualiza,
		cantidad_muestras, costo_total, cuerpo_receptor,
		tipo_cuerpo, fecha, fecha_entrega, fecha_captura,
		fecha_valida, fecha_actualiza, fecha_rechaza,
		ip_captura, ip_valida, ip_actualiza, host_captura,
		host_valida, host_actualiza, motivo_rechaza,
		comentarios, activo)
		VALUES (:id_estudio, :id_cliente, :id_matriz,
		:id_tipo_muestreo, :id_norma, :id_cuerpo_receptor, :id_status,
		:id_usuario_captura, :id_usuario_valida, :id_usuario_actualiza,
		:cantidad_muestras, :costo_total, :cuerpo_receptor,
		:tipo_cuerpo, :fecha, :fecha_entrega, :fecha_captura,
		:fecha_valida, :fecha_actualiza, :fecha_rechaza,
		:ip_captura, :ip_valida, :ip_actualiza, :host_captura,
		:host_valida, :host_actualiza, :motivo_rechaza,
		:comentarios, :activo)";
	$db = getConnection();
	$stmt = $db->prepare($sql);
	$stmt->execute($orderData);
	$orderId = $db->lastInsertId();
	$db = null;
	return $orderId;
}

function updateOrder($updateData) {
	$sql = "UPDATE Orden SET
		id_estudio = :id_estudio, id_cliente = :id_cliente,
		id_matriz = :id_matriz, id_tipo_muestreo = :id_tipo_muestreo,
		id_norma = :id_norma, id_cuerpo_receptor = :id_cuerpo_receptor,
		id_status = :id_status, id_usuario_captura = :id_usuario_captura,
		id_usuario_valida = :id_usuario_valida,
		id_usuario_actualiza = :id_usuario_actualiza,
		cantidad_muestras = :cantidad_muestras, costo_total = :costo_total,
		cuerpo_receptor = :cuerpo_receptor, tipo_cuerpo = :tipo_cuerpo,
		fecha = :fecha, fecha_entrega = :fecha_entrega,
		fecha_captura = :fecha_captura, fecha_valida = :fecha_valida,
		fecha_actualiza = :fecha_actualiza, fecha_rechaza = :fecha_rechaza,
		ip_captura = :ip_captura, ip_valida = :ip_valida,
		ip_actualiza = :ip_actualiza, host_captura = :host_captura,
		host_valida = :host_valida, host_actualiza = :host_actualiza,
		motivo_rechaza = :motivo_rechaza, comentarios = :comentarios,
		activo = :activo
		WHERE id_orden = :id_orden";
	$db = getConnection();
	$stmt = $db->prepare($sql);
	$stmt->execute($updateData);
	$db = null;
	return $updateData["id_orden"];
}

function getOrderSources() {
	$sql = "SELECT *
		FROM OrigenOrden
		WHERE activo = 1";
	$db = getConnection();
	$stmt = $db->prepare($sql);
	$stmt->execute();
	$orderSources = $stmt->fetchAll(PDO::FETCH_ASSOC);
	$db = null;
	return $orderSources;
}

function getPlans() {
	$sql = "SELECT id_plan, id_estudio, id_orden, id_ubicacion,
			id_paquete, id_objetivo_plan, id_norma_muestreo,
			id_supervisor_muestreo, id_supervisor_entrega,
			id_supervisor_recoleccion, id_supervisor_registro,
			id_ayudante_entrega, id_ayudante_recoleccion,
			id_ayudante_registro, id_responsable_calibracion,
			id_responsable_recipientes, id_responsable_reactivos,
			id_responsable_material, id_responsable_hieleras, id_status,
			id_usuario_captura, id_usuario_valida, id_usuario_actualiza,
			fecha, fecha_probable, fecha_calibracion, fecha_captura,
			fecha_valida, fecha_actualiza, fecha_rechaza, ip_captura,
			ip_valida, ip_actualiza, host_captura, host_valida,
			host_actualiza, calle, numero, colonia, codigo_postal,
			telefono, contacto, email, comentarios_ubicacion,
			cantidad_puntos, cantidad_equipos, cantidad_recipientes,
			cantidad_reactivos, cantidad_hieleras, frecuencia,
			objetivo_otro, motivo_rechaza, comentarios, activo
		FROM [Plan]
		WHERE activo = 1";
	$db = getConnection();
	$stmt = $db->prepare($sql);
	$stmt->execute();
	$plans = $stmt->fetchAll(PDO::FETCH_ASSOC);
	$db = null;
	// $i = 0;
	// $l = count($studies);
	// for ($i = 0; $i < $l; $i++) {
	// 	$plans[$i]["cliente"] = getClient($clientId);
	// 	$plans[$i]["orden"] = getPlainOrder($orderId);
	// 	$plans[$i]["supervisor_muestreo"] = getSamplingSupervisor($supervisorId);
	// 	$plans[$i]["puntos"] = getPointsByPackage($packageId);
	// 	$plans[$i]["equipos"] = getEquipmentByPlan($planId);
	// 	$plans[$i]["recipientes"] = getContainersByPlan($planId);
	// 	$plans[$i]["reactivos"] = getReactivesByPlan($planId);
	// 	$plans[$i]["materiales"] = getMaterialsByPlan($planId);
	// 	$plans[$i]["hieleras"] = getCoolersByPlan($planId);
	// }
	return $plans;
}

function getBlankPlan() {
	return array(
		"id_plan" => 0, "id_estudio" => 0,
		"id_orden" => 0, "id_ubicacion" => 0,
		"id_paquete" => 0, "id_objetivo_plan" => 0,
		"id_norma_muestreo" => 0, "id_supervisor_muestreo" => 0,
		"id_supervisor_entrega" => 0, "id_supervisor_recoleccion" => 0,
		"id_supervisor_registro" => 0, "id_ayudante_entrega" => 0,
		"id_ayudante_recoleccion" => 0, "id_ayudante_registro" => 0,
		"id_responsable_calibracion" => 0,
		"id_responsable_recipientes" => 0,
		"id_responsable_reactivos" => 0, "id_responsable_material" => 0,
		"id_responsable_hieleras" => 0, "id_status" => 0,
		"id_usuario_captura" => 0, "id_usuario_valida" => 0,
		"id_usuario_actualiza" => 0, "fecha" => "",
		"fecha_probable" => "", "fecha_calibracion" => "",
		"fecha_captura" => "", "fecha_valida" => "",
		"fecha_actualiza" => "", "fecha_rechaza" => "",
		"ip_captura" => "", "ip_valida" => "",
		"ip_actualiza" => "", "host_captura" => "",
		"host_valida" => "", "host_actualiza" => "",
		"calle" => "", "numero" => "",
		"colonia" => "", "codigo_postal" => "",
		"telefono" => "", "contacto" => "",
		"email" => "", "comentarios_ubicacion" => "",
		"cantidad_puntos" => 0, "cantidad_equipos" => 0,
		"cantidad_recipientes" => 0, "cantidad_reactivos" => 0,
		"cantidad_hieleras" => 0, "frecuencia" => 0,
		"objetivo_otro" => "", "motivo_rechaza" => "",
		"comentarios" => "", "activo" => 1
	);
}

function getPlansByOrder($orderId) {
	$sql = "SELECT id_plan, id_estudio, id_orden, id_ubicacion,
			id_paquete, id_objetivo_plan, id_norma_muestreo,
			id_supervisor_muestreo, id_supervisor_entrega,
			id_supervisor_recoleccion, id_supervisor_registro,
			id_ayudante_entrega, id_ayudante_recoleccion,
			id_ayudante_registro, id_responsable_calibracion,
			id_responsable_recipientes, id_responsable_reactivos,
			id_responsable_material, id_responsable_hieleras, id_status,
			id_usuario_captura, id_usuario_valida, id_usuario_actualiza,
			fecha, fecha_probable, fecha_calibracion, fecha_captura,
			fecha_valida, fecha_actualiza, fecha_rechaza, ip_captura,
			ip_valida, ip_actualiza, host_captura, host_valida,
			host_actualiza, calle, numero, colonia, codigo_postal,
			telefono, contacto, email, comentarios_ubicacion,
			cantidad_puntos, cantidad_equipos, cantidad_recipientes,
			cantidad_reactivos, cantidad_hieleras, frecuencia,
			objetivo_otro, motivo_rechaza, comentarios, activo
		FROM [Plan]
		WHERE activo = 1 AND id_orden = :orderId";
	$db = getConnection();
	$stmt = $db->prepare($sql);
	$stmt->bindParam("orderId", $orderId);
	$stmt->execute();
	$plans = $stmt->fetchAll(PDO::FETCH_ASSOC);
	return $plans;
}

function getPlainPlan($planId) {
	$sql = "SELECT id_plan, id_estudio, id_orden, id_ubicacion,
			id_paquete, id_objetivo_plan, id_norma_muestreo,
			id_supervisor_muestreo, id_supervisor_entrega,
			id_supervisor_recoleccion, id_supervisor_registro,
			id_ayudante_entrega, id_ayudante_recoleccion,
			id_ayudante_registro, id_responsable_calibracion,
			id_responsable_recipientes, id_responsable_reactivos,
			id_responsable_material, id_responsable_hieleras, id_status,
			id_usuario_captura, id_usuario_valida, id_usuario_actualiza,
			fecha, fecha_probable, fecha_calibracion, fecha_captura,
			fecha_valida, fecha_actualiza, fecha_rechaza, ip_captura,
			ip_valida, ip_actualiza, host_captura, host_valida,
			host_actualiza, calle, numero, colonia, codigo_postal,
			telefono, contacto, email, comentarios_ubicacion,
			cantidad_puntos, cantidad_equipos, cantidad_recipientes,
			cantidad_reactivos, cantidad_hieleras, frecuencia,
			objetivo_otro, motivo_rechaza, comentarios, activo
		FROM [Plan]
		WHERE activo = 1 AND id_plan = :planId";
	$db = getConnection();
	$stmt = $db->prepare($sql);
	$stmt->execute();
	$plan = (array) $stmt->fetchAll(PDO::FETCH_OBJ)[0];
	return (object) $plan;
}

function getPlan($planId) {
	$plan = getPlainPlan($planId);
	// 	$plan->cliente = getClient($clientId);
	// 	$plan->orden = getPlainOrder($orderId);
	// 	$plan->supervisor_muestreo = getSamplingSupervisor($supervisorId);
	// 	$plan->puntos = getPointsByPackage($packageId);
	// 	$plan->equipos = getEquipmentByPlan($planId);
	// 	$plan->recipientes = getContainersByPlan($planId);
	// 	$plan->reactivos = getReactivesByPlan($planId);
	// 	$plan->materiales = getMaterialsByPlan($planId);
	// 	$plan->hieleras = getCoolersByPlan($planId);
	return $plan;
}


// function insertUser($requestData) {
// 	try {
// 		//$requestData = json_decode($payload);
// 		$insertData = array (
// 			"id_nivel" => $requestData->id_nivel,
// 			"id_rol" => $requestData->id_rol,
// 			"id_area" => $requestData->id_area,
// 			"id_puesto" => $requestData->id_puesto,
// 			"interno" => $requestData->interno,
// 			"cea" => $requestData->cea,
// 			"laboratorio" => $requestData->laboratorio,
// 			"supervisa" => $requestData->supervisa,
// 			"analiza" => $requestData->analiza,
// 			"muestrea" => $requestData->muestrea,
// 			"nombres" => utf8_decode($requestData->nombres),
// 			"apellido_paterno" => utf8_decode($requestData->apellido_paterno),
// 			"apellido_materno" => utf8_decode($requestData->apellido_materno),
// 			"usr" => $requestData->usr,
// 			"pwd" => $requestData->pwd,
// 			"fecha_captura" => $requestData->fecha_captura,
// 			"fecha_actualiza" => $requestData->fecha_actualiza,
// 			"ip_captura" => $requestData->ip_captura,
// 			"ip_actualiza" => $requestData->ip_actualiza,
// 			"host_captura" => $requestData->host_captura,
// 			"host_actualiza" => $requestData->host_actualiza,
// 			"activo" => $requestData->activo
// 		);
// 		$sql = "INSERT INTO Usuario
// 			( id_nivel, id_rol, id_area, id_puesto, interno, cea,
// 			 laboratorio, supervisa, analiza, muestrea, nombres,
// 			 apellido_paterno,
// 			 apellido_materno, usr, pwd, fecha_captura, fecha_actualiza,
// 			 ip_captura, ip_actualiza, host_captura, host_actualiza, activo)
// 			VALUES ( :id_nivel, :id_rol, :id_area, :id_puesto, :interno,
// 				:cea, :laboratorio, :supervisa, :analiza, :muestrea, :nombres,
// 				:apellido_paterno, :apellido_materno, :usr, :pwd,
// 				:fecha_captura,
// 				:fecha_actualiza, :ip_captura, :ip_actualiza, :host_captura,
// 				:host_actualiza, :activo
// 			)";
// 		$db = getConnection();
// 		$stmt = $db->prepare($sql);
// 		$stmt->execute($insertData);
// 		$userId = $db->lastInsertId();
// 		$db = null;
// 		return getUser($userId);
// 	} catch(PDOException $e) {
// 		//print_r($e->getMessage());
// 		return 0;
// 	}
// }

// function getUser($userId) {
// 	try {
// 		$sql = "SELECT id_usuario, id_nivel, id_rol, id_area, id_puesto,
// 			interno, cea, laboratorio, supervisa, analiza, muestrea, nombres,
// 			apellido_paterno, apellido_materno, usr, pwd, fecha_captura,
// 			fecha_actualiza, ip_captura, ip_actualiza,
// 			host_captura, host_actualiza, activo
// 			FROM Usuario
// 			WHERE id_usuario=:userId
// 		";
// 		$db = getConnection();
// 		$stmt = $db->prepare($sql);
// 		$stmt->bindParam("userId", $userId);
// 		$stmt->execute();
// 		$user = $stmt->fetch(PDO::FETCH_OBJ);
// 		$db = null;
// 		return $user;
// 	} catch(PDOException $e) {
// 		echo '{"error":{"text":'. $e->getMessage() .'}}';
// 	}
// }

/*
<?
$insertData = array(
      id_orden => $requestData["id_orden"],
      id_estudio => $requestData["id_estudio"],
      id_cliente => $requestData["id_cliente"],
      id_matriz => $requestData["id_matriz"],
      id_tipo_muestreo => $requestData["id_tipo_muestreo"],
      id_norma => $requestData["id_norma"],
      id_cuerpo_receptor => $requestData["id_cuerpo_receptor"],
      id_status => $requestData["id_status"],
      id_usuario_captura => $requestData["id_usuario_captura"],
      id_usuario_valida => $requestData["id_usuario_valida"],
      id_usuario_actualiza => $requestData["id_usuario_actualiza"],
      cantidad_muestras => $requestData["cantidad_muestras"],
      costo_total => $requestData["costo_total"],
      cuerpo_receptor => $requestData["cuerpo_receptor"],
      tipo_cuerpo => $requestData["tipo_cuerpo"],
      fecha => $requestData["fecha"],
      fecha_entrega => $requestData["fecha_entrega"],
      fecha_captura => $requestData["fecha_captura"],
      fecha_valida => $requestData["fecha_valida"],
      fecha_actualiza => $requestData["fecha_actualiza"],
      fecha_rechaza => $requestData["fecha_rechaza"],
      ip_captura => $requestData["ip_captura"],
      ip_valida => $requestData["ip_valida"],
      ip_actualiza => $requestData["ip_actualiza"],
      host_captura => $requestData["host_captura"],
      host_valida => $requestData["host_valida"],
      host_actualiza => $requestData["host_actualiza"],
      motivo_rechaza => $requestData["motivo_rechaza"],
      comentarios => $requestData["comentarios"],
      activo => $requestData["activo"],
);

      $sql = "UPDATE Orden SET
            id_estudio = :id_estudio, id_cliente = :id_cliente,
            id_matriz = :id_matriz, id_tipo_muestreo = :id_tipo_muestreo,
            id_norma = :id_norma, id_cuerpo_receptor = :id_cuerpo_receptor,
            id_status = :id_status, id_usuario_captura = :id_usuario_captura,
            id_usuario_valida = :id_usuario_valida,
            id_usuario_actualiza = :id_usuario_actualiza,
            cantidad_muestras = :cantidad_muestras,
            costo_total = :costo_total, cuerpo_receptor = :cuerpo_receptor,
            tipo_cuerpo = :tipo_cuerpo, fecha = :fecha,
            fecha_entrega = :fecha_entrega, fecha_captura = :fecha_captura,
            fecha_valida = :fecha_valida, fecha_actualiza = :fecha_actualiza,
            fecha_rechaza = :fecha_rechaza, ip_captura = :ip_captura,
            ip_valida = :ip_valida, ip_actualiza = :ip_actualiza,
            host_captura = :host_captura, host_valida = :host_valida,
            host_actualiza = :host_actualiza,
            motivo_rechaza = :motivo_rechaza, comentarios = :comentarios,
            activo = :activo
            WHERE id_orden = :id_orden";

*/
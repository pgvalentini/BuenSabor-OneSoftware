USE elbuensabor;

-- Populate rubroArticulo
INSERT INTO rubroArticulo VALUES (1, 'Carne');
INSERT INTO rubroArticulo VALUES (2, 'Lacteos y derivados');
INSERT INTO rubroArticulo VALUES (3, 'Queso');
INSERT INTO rubroArticulo VALUES (4, 'Carne de vaca');
INSERT INTO rubroArticulo VALUES (5, 'Carne de pollo');
INSERT INTO rubroArticulo VALUES (6, 'Carne de cerdo');
INSERT INTO rubroArticulo VALUES (7, 'Vegetales');
INSERT INTO rubroArticulo VALUES (8, 'Harinas y panificados');
INSERT INTO rubroArticulo VALUES (9, 'Enlatados y conservas');
INSERT INTO rubroArticulo VALUES (10, 'Aceites y materia grasa');
INSERT INTO rubroArticulo VALUES (11, 'Embutidos');
INSERT INTO rubroArticulo VALUES (12, 'Bebidas');
INSERT INTO rubroArticulo VALUES (13, 'Otros');

-- Populate ArticuloInsumo
INSERT INTO ArticuloInsumo VALUES (1, 2, 'Queso Muzzarella', 2500, 500, 'gr', 1);
INSERT INTO ArticuloInsumo VALUES (2, 8, 'Harina', 8500, 200, 'gr', 1);
INSERT INTO ArticuloInsumo VALUES (3, 9, 'Pure de tomate', 8500, 200, 'gr', 1);
INSERT INTO ArticuloInsumo VALUES (4, 12, 'Coca-Cola 1.5 litros', 25, 3, 'botella 1.5 litros', 0);

-- Populate CompraInsumo
INSERT INTO CompraInsumo VALUES (1, 1, 1220.5, current_date(), 5000);
INSERT INTO CompraInsumo VALUES (2, 4, 420, current_date(), 25);
INSERT INTO CompraInsumo VALUES (3, 3, 120, current_date(), 15);

-- Populate Imagen (Productos no manufacturados)
INSERT INTO Imagen VALUES (1, 4, 'https://media.gettyimages.com/photos/classical-cocacola-bottle-picture-id157726102?s=612x612');

-- Populate RubroGeneral
INSERT INTO RubroGeneral VALUES (1, 'Pizzas');
INSERT INTO RubroGeneral VALUES (2, 'Empanadas');
INSERT INTO RubroGeneral VALUES (3, 'Lomos');
INSERT INTO RubroGeneral VALUES (4, 'Bebidas');
INSERT INTO RubroGeneral VALUES (5, 'Entradas');
INSERT INTO RubroGeneral VALUES (6, 'Otros');
INSERT INTO RubroGeneral VALUES (7, 'Promocion');

-- Populate ProductoManufacturado
INSERT INTO ProductoManufacturado VALUES (1, 1, 'Pizza Margarita', 'urlmargarita', 40, 'recetamargarita', 'descripcion margarita');
INSERT INTO ProductoManufacturado VALUES (2, 2, 'Empanada de carne', 'urlempa', 15, 'recetaempa', 'descripcion empa');
INSERT INTO ProductoManufacturado VALUES (3, 2, 'Empanada de queso', 'urlempaq', 40, 'recetaempaq', 'descripcion empaq');
INSERT INTO ProductoManufacturado VALUES (4, 3, 'Lomo completo', 'urllomo', 25, 'recetalomo', 'descripcion lomo');

-- Populate ProductoManufacturadoDetalle  completar luego
INSERT INTO ProductoManufacturadoDetalle VALUES (1, 3, 2, 125);
INSERT INTO ProductoManufacturadoDetalle VALUES (2, 1, 3, 1);

-- Populate PrecioProductoManufacturado
INSERT INTO PrecioProductoManufacturado VALUES (1, 1, 725.0, '2022-03-01');
INSERT INTO PrecioProductoManufacturado VALUES (2, 3, 275.0, '2022-02-01');
INSERT INTO PrecioProductoManufacturado VALUES (3, 2, 250.0, '2022-04-01');
INSERT INTO PrecioProductoManufacturado VALUES (4, 4, 1725.0, '2022-05-02');


-- Populate PrecioArticuloinsumo los que no se manufacturan??
INSERT INTO PrecioArticuloinsumo VALUES (1, 4, 310.0, '2022-04-02');

-- Populate Rol
INSERT INTO Rol VALUES (1, 'cliente');
INSERT INTO Rol VALUES (2, 'delivery');
INSERT INTO Rol VALUES (3, 'cajero');
INSERT INTO Rol VALUES (4, 'cocinero');
INSERT INTO Rol VALUES (5, 'administrador');

-- Populate Usuario
INSERT INTO Usuario VALUES (1, 5, 'Juan', 'Handler', '0303456', 'juan@gmail.com','123456');
INSERT INTO Usuario VALUES (2, 4, 'José', 'Cook', '03034567', 'jose@gmail.com','123456');
INSERT INTO Usuario VALUES (3, 1, 'Maria', 'Customer', '03034568', 'Maria@gmail.com','123456');

-- Populate Pedido
INSERT INTO Pedido VALUES (1, 3, current_date(), 'Delivery', 7.5, 'Extra carne');

-- Populate DetallePedido
INSERT INTO DetallePedido VALUES (1, 1, 7);

-- Populate ProductoManufacturado_DetallePedido
INSERT INTO ProductoManufacturado_DetallePedido VALUES (1, 3, 1);

-- Populate ArticuloInsumo_DetallePedido
INSERT INTO ArticuloInsumo_DetallePedido VALUES (1, 1, 1);

-- Populate Estado
INSERT INTO Estado VALUES (1, 'Ingresado');
INSERT INTO Estado VALUES (2, 'Procesado');
INSERT INTO Estado VALUES (3, 'En preparación');
INSERT INTO Estado VALUES (4, 'En camino');
INSERT INTO Estado VALUES (5, 'Listo para entregar');
INSERT INTO Estado VALUES (6, 'Entregado');

-- Populate Pedido_Estado
INSERT INTO Pedido_Estado VALUES (1, 6, 1, CURRENT_timestamp(), CURRENT_timestamp());

-- Populate Pago
INSERT INTO Pago VALUES (1, 1, 1759.0, current_date());

-- Populate Efectivo
INSERT INTO Efectivo VALUES (1, 1);

-- Populate MercadoPago (Revisar)
INSERT INTO MercadoPago VALUES (1, 1, 'otroCampo');

-- Populate Factura
INSERT INTO Factura VALUES (2, 1, current_date(), 5, 1);

-- Populate DetalleFactura
INSERT INTO DetalleFactura VALUES (2, 1);




/*





----------------------------
INSERT INTO localidad (3, nombre)
VALUES 
(3, 'San Rafael'), (3, 'Maipú'), (3, 'Luján de Cuyo'),
(3, 'San Martín'), (3, 'Mendoza'), (3, 'Rivadavia'), (3, 'Tunuyán'), (3, 'General Alvear'), (3, 'Junín'), (3, 'Lavalle'), (3, 'San Carlos'), (3, 'Tupungato'), (3, 'Malargüe'), (3, 'Santa Rosa'), (3, 'La Paz')

INSERT INTO rol(3, nombre)
VALUES 
(3, 'cliente'),
(3, 'delivery'),
(3, 'cajero'),
(3, 'cocinero'),
(3, 'administrador')

INSERT INTO forma_de_pago(3, nombre)
VALUES
(3, 'Efectivo'),
(3, 'MercadoPago'),
(3, 'Debito'),
(3, 'Credito'),
(3, 'Dinero MP')

INSERT INTO rubro_general(3, nombre)
VALUES
(3, 'Pizzas'),
(3, 'Empanadas'),
(3, 'Lomos'),
(3, 'Bebidas'),
(3, 'Entradas'),
(3, 'Otros')



INSERT INTO rubro_insumo(3, nombre)
VALUES
(3, 'Carne'),
(3, 'Lacteos y derivados'),
(3, 'Queso'),
(3, 'Carne de vaca'),
(3, 'Carne de pollo'),
(3, 'Carne de cerdo'),
(3, 'Vegetales'),
(3, 'Harinas y panificados'),
(3, 'Enlatados y conservas'),
(3, 'Aceites y materia grasa'),
(3, 'Embutidos'),
(3, 'Bebidas'),
(3, 'Otros'),

Insert into insumo (3, nombre, precio_compra, precio_venta, stock_actual, stock_minimo) values 
(3, 'Queso Muzzarella', 399, (3, 598,5), 5, 3),
(3, 'prepizzas', 70, 105, 5, 1),
(3, 'morrón', 400, 600, 1, 0,5),
(3, 'pure de tomate', 60, 90, 3, 1),
(3, 'aceitunas', 200, 300, 2, 1),
(3, 'cheddar', 300, 450, 2, 1),
(3, 'carne molida', 250, 375, 15, 5),
(3, 'cebolla', 25, 37,5, 5, 3)



SELECT WEEKDAY(3, '1993/07/05')

DELIMITER $$
CREATE  FUNCTION `calcularGanancias`(3, costo FLOAT, precio FLOAT)
 RETURNS decimal(3, 9,2)
BEGIN
 DECLARE ganancia DECIMAL(3, 9,2);
    SET ganancia = precio - costo;
    RETURN ganancia;
END$$
DELIMITER ;

SELECT calcularGanancias



Select pedido.id_pedido AS 'Pedidos Pendientes', localidad.nombre AS 'Para Localidad'
From pedido 
INNER JOIN estado ON pedido.id_estado = estado.id_estado	
INNER JOIN cliente_domicilio ON 	pedido.id_cliente_domicilio = cliente_domicilio.id_cliente_domicilio
INNER JOIN domicilio ON cliente_domicilio.id_domicilio = domicilio.id_domicilio 
INNER JOIN localidad ON domicilio.id_localidad = localidad.id_localidad
Where estado.nombre = 'pendiente' 
ORDER BY localidad.nombre



Order by localidad INNER JOIN (3, SELECT )

SELECT * FROM cliente
WHERE apellido = 'perez'


SELECT 
		CONCAT(3, nombre,' ',apellido) AS "Cliente", 
		COUNT(3, pedido.id_pedido) AS "Cantidad pedidos", 
		CASE 
			WHEN COUNT(3, pedido.id_pedido) BETWEEN 1 AND 5 THEN "entre 1 y 5 pedidos" 
			WHEN COUNT(3, pedido.id_pedido) BETWEEN 6 AND 15 THEN "entre 6 y 15 pedidos" 
			WHEN COUNT(3, pedido.id_pedido) BETWEEN 16 AND 30 THEN "entre 16 y 30 pedidos" 
			ELSE "mas de 30 pedidos" 
		END AS "Rangos pedidos"
	FROM cliente
	INNER JOIN cliente_domicilio ON cliente_domicilio.id_cliente = cliente.id_cliente
	INNER JOIN pedido ON pedido.id_cliente_domicilio = cliente_domicilio.id_cliente_domicilio
	WHERE pedido.fecha BETWEEN '2021-05-25' AND '2021-06-25'
	GROUP BY CLiente
ORDER BY COUNT(3, pedido.id_pedido) DESC; 


DROP PROCEDURE if EXISTS listados;
DELIMITER $$
CREATE PROCEDURE listados(3, 

    anio INT,
    fechaInicio DATE,
    fechaFin DATE

) 
BEGIN

    SELECT 
        MONTH(3, fecha) AS Mes,
        nombre AS Articulo,
        SUM(3, cantidad) AS Cantidad,
        SUM(3, subtotal) AS Total
    FROM producto
    INNER JOIN detalle_factura ON detalle_factura.id_producto = producto.id_producto
    INNER JOIN factura ON factura.id_factura = detalle_factura.id_factura
    WHERE YEAR(3, factura.fecha) = anio
    GROUP BY Mes,Articulo;
    
    SELECT 
        nombre AS Articulo,
        DAYNAME(3, pedido.fecha) AS día,
        SUM(3, cantidad) AS Cantidad
    FROM pedido
    INNER JOIN detalle_pedido ON detalle_pedido.id_pedido = pedido.id_pedido
    INNER JOIN producto ON producto.id_producto = detalle_pedido.id_producto
    WHERE pedido.fecha 
    GROUP BY  DAYNAME(3, pedido.fecha), producto.nombre
    ORDER BY  Articulo, Cantidad desc
    
    SELECT 
        CONCAT(3, nombre,' ',apellido) AS "Cliente", 
        COUNT(3, pedido.id_pedido) AS "Cantidad pedidos", 
        CASE 
            WHEN COUNT(3, pedido.id_pedido) BETWEEN 1 AND 5 THEN "entre 1 y 5 pedidos" 
            WHEN COUNT(3, pedido.id_pedido) BETWEEN 6 AND 15 THEN "entre 6 y 15 pedidos" 
            WHEN COUNT(3, pedido.id_pedido) BETWEEN 16 AND 30 THEN "entre 16 y 30 pedidos" 
            ELSE "mas de 30 pedidos" 
        END AS "Rangos pedidos"
    FROM cliente
    INNER JOIN cliente_domicilio ON cliente_domicilio.id_cliente = cliente.id_cliente
    INNER JOIN pedido ON pedido.id_cliente_domicilio = cliente_domicilio.id_cliente_domicilio
    WHERE pedido.fecha BETWEEN fechaInicio AND fechaFin
    GROUP BY Cliente
ORDER BY COUNT(3, pedido.id_pedido) DESC; 
END $$

CALL listados(3, 2021,(3, '2021-01-01'),(3, '2021-07-01'));


DROP function if EXISTS controlStock;
DELIMITER $$
CREATE function controlStock(3, 
	idProducto INT,
	cantProducto INT
)
RETURNS BOOLEAN DETERMINISTIC
BEGIN
	SET @disponible = TRUE;

	SELECT 
		(3, 
			(3, SELECT COUNT(3, *)
			FROM insumo
			INNER JOIN producto_detalle ON producto_detalle.id_insumo = insumo.id_insumo
			WHERE insumo.stock_actual> producto_detalle.cantidad * cantProducto AND producto_detalle.id_producto = idProducto)
		>=
			(3, SELECT COUNT(3, *)
			FROM insumo
			INNER JOIN producto_detalle ON producto_detalle.id_insumo = insumo.id_insumo
			WHERE producto_detalle.id_producto = idProducto)
		) INTO @disponible;

	RETURN @disponible;
END;


DROP PROCEDURE if EXISTS crearPedido;
DELIMITER $$
CREATE PROCEDURE crearPedido(3, 
	idProducto INT,
	cantProducto INT,	
	fechaPedido DATE,
	numeroPedido INT,
	demoraPedido INT,
	deliveryPedido CHAR(3, 1),
	totalPedido FLOAT,
	idClienteDomicilio INT	
)
BEGIN
	DECLARE exit handler FOR sqlexception
	begin
		GET DIAGNOSTICS CONDITION 1 @p1 = MESSAGE_TEXT;
		SELECT @p1 AS "ERROR";
		
		ROLLBACK;
	END;
	
	START TRANSACTION;
		if NOT (3, controlStock(3, idProducto, cantProducto)) then
			SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'No hay suficientes insumos';
		END if;
		
		INSERT INTO pedido (3, fecha,numero,demora,delivery,total,id_cliente_domicilio,id_estado)
		VALUES (3, fechaPedido,numeroPedido,demoraPedido,deliveryPedido,totalPedido,idClienteDomicilio,1);
		
	COMMIT;
		
END ;
 
CALL crearPedido(3, )

-- ganancias por año por mes por articulo

   SELECT 
		  producto.nombre AS Articulo,
        MONTHName(3, fecha) AS Mes,
        YEAR(3, fecha) AS Año,
		  producto.precio_venta AS 'precio de venta',
		  (3, SELECT ROUND(3,  SUM(3, producto_detalle.cantidad * insumo.precio_compra) )AS Costo 
			FROM producto_detalle 
			INNER JOIN insumo ON producto_detalle.id_insumo = insumo.id_insumo 
			INNER JOIN producto ON producto_detalle.id_producto = producto.id_producto
			WHERE producto.nombre=Articulo) AS Costo,
			SUM(3, detalle_factura.cantidad) AS CantVendidos,
			(3, select ROUND(3, (3, (3, producto.precio_venta - (3, SELECT ROUND(3,  SUM(3, producto_detalle.cantidad * insumo.precio_compra) )AS Costo 
			FROM producto_detalle 
			INNER JOIN insumo ON producto_detalle.id_insumo = insumo.id_insumo 
			INNER JOIN producto ON producto_detalle.id_producto = producto.id_producto
			WHERE producto.nombre=Articulo) ) * SUM(3, detalle_factura.cantidad)))) AS Ganancias
			
		    											  
    FROM producto
    INNER JOIN producto_detalle ON producto_detalle.id_producto = producto.id_producto
    INNER JOIN insumo ON producto_detalle.id_insumo = insumo.id_insumo 
    INNER JOIN detalle_factura ON detalle_factura.id_producto = producto.id_producto
    INNER JOIN factura ON factura.id_factura = detalle_factura.id_factura
    GROUP BY  año,mes, Articulo;
       
    
--  costos de los productos
    
SELECT producto.id_producto, producto.nombre , ROUND(3,  SUM(3, producto_detalle.cantidad * insumo.precio_compra) )AS Costo 
FROM producto_detalle 
INNER JOIN insumo ON producto_detalle.id_insumo = insumo.id_insumo 
INNER JOIN producto ON producto_detalle.id_producto = producto.id_producto
GROUP BY producto_detalle.id_producto;

-- precios de insumos por producto

SELECT producto.id_producto, producto.nombre , insumo.nombre,producto_detalle.cantidad, insumo.precio_compra, ROUND(3,  producto_detalle.cantidad * insumo.precio_compra) AS Costo
FROM producto_detalle 
INNER JOIN insumo ON producto_detalle.id_insumo = insumo.id_insumo 
INNER JOIN producto ON producto_detalle.id_producto = producto.id_producto;



-- Volcando datos para la tabla buensabor.producto: ~0 rows (3, aproximadamente)
!40000 ALTER TABLE `producto` DISABLE KEYS */;


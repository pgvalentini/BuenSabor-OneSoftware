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




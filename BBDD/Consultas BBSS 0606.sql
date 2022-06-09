use elbuensabor;
-- Consultas
SELECT articuloinsumo.idArticuloInsumo, denominacion, 
(select max(precioArticuloInsumo) from precioarticuloinsumo) as ultimoprecio, imagen 
FROM articuloinsumo
JOIN Imagen ON Imagen.idArticuloInsumo=Articuloinsumo.idArticuloInsumo
JOIN precioarticuloinsumo ON precioArticuloInsumo.idArticuloInsumo = articuloinsumo.idArticuloInsumo
WHERE esInsumo = 0
AND Articuloinsumo.idArticuloInsumo NOT IN (
	select bajaarticuloinsumo.idArticuloInsumo from bajaarticuloinsumo);

-- "Saber todos los artículos manufacturados de la tabla ""ProductoManufacturado""
-- que no estén dados de baja. Ojo, también saber su precio (el último)."
SELECT denominacion, imagen, tiempococina, receta, descripcion, 
	(select max(precioproductomanufacturado) from precioproductomanufacturado )  as precio
FROM productomanufacturado pm
JOIN precioproductomanufacturado ppm
ON pm.idProductoManufacturado=ppm.idProductoManufacturado
WHERE pm.idProductoManufacturado 
NOT IN (
	SELECT idProductoManufacturado FROM bajaproductomanufacturado
);

/*"Saber todos los artículos manufacturados de la tabla ""ProductoManufacturado""
pero que sólo pertenezcan al RubroGeneral ""Promoción"" que no estén dados
de baja. Ojo, también saber su precio (el último)."*/

SELECT pm.denominacion, imagen, tiempococina, receta, descripcion, MAX(precioproductomanufacturado ) as precio
FROM productomanufacturado pm
JOIN precioproductomanufacturado ppm
ON pm.idProductoManufacturado=ppm.idProductoManufacturado
JOIN rubroGeneral rg
ON rg.idrubroGeneral = pm.idrubrogeneral
WHERE pm.idProductoManufacturado 
NOT IN (
	SELECT idProductoManufacturado FROM bajaproductomanufacturado
) AND rg.idRubroGeneral =7;

/*"Saber de un pedido, de la tabla ""Pedido"", además de los datos propios de la tabla,
cada uno de sus DetallePedido."*/

SELECT * FROM Pedido p 
JOIN detallePedido dp
ON p.idPedido= dp.idPedido
WHERE idPedido =1;

-- Saber el total de clientes registrados (ojo, campo Rol = "Cliente"
SELECT count(*) FROM usuario
JOIN Rol ON Usuario.idrol=rol.idrol
WHERE descripcion LIKE 'cliente';

-- Saber de un cliente en particular todas sus facturas.
SELECT idFactura, f.idpago, fechafactura, f.descuento, nroFactura FROM usuario u
JOIN Rol r ON U.idrol=r.idrol
JOIN Pedido p ON p.idusuario = u.idusuario
JOIN Pago pa ON p.idpedido = pa.idpedido
JOIN Factura f ON pa.idpago = f.idpago
WHERE u.idusuario = 1;

/*"Saber de un ""ProductoManufacturado"" en especial (cualquiera tomado como ejemplo)
Si de cada uno de sus ""ProductoManufacturadoDetalle"" hay stock para
realizarse o no. Ojo, verificar que no esté dado de baja."
*/

SELECT pm.denominacion, pm.receta FROM productoManufacturado pm
JOIN productomanufacturadodetalle pmd on pm.idproductomanufacturado= pmd.idproductomanufacturado
JOIN articuloinsumo ai on pmd.idarticuloinsumo= ai.idarticuloinsumo
WHERE stockactual>cantidad
AND ai.idarticuloinsumo=2;

-- "Saber todos los Rubro Articulo de la tabla ""RubroArticulo"" que no estén dados de baja"
SELECT * from rubroarticulo 
WHERE idrubroarticulo NOT IN (SELECT idrubroarticulo FROM BajaRubroarticulo);

-- "Saber todos los ArticuloInsumo de la tabla ""ArticuloInsumo"" que no estén dados debaja"
SELECT * from ArticuloInsumo 
WHERE idArticuloInsumo NOT IN (SELECT idArticuloInsumo FROM BajaArticuloInsumo );

-- "Saber todos los Rubro General de la tabla ""RubroGeneral"" que no estén dados de baja"
SELECT * from RubroGeneral 
WHERE idRubroGeneral NOT IN (SELECT idRubroGeneral FROM BajaRubroGeneral );
-- Active: 1697227371905@@localhost@5432@postgres
CREATE Table tbl_productos
(
    id SERIAL PRIMARY KEY,
    Nombre_producto VARCHAR (100),
    Descripcion_producto VARCHAR (200),
    Precio NUMERIC,
    Categoria_producto VARCHAR (100)
);

SELECT * FROM tbl_productos;

INSERT INTO tbl_productos (Nombre_producto, Descripcion_producto, Precio, Categoria_producto)
VALUES ('Camiseta', 'Camiseta de algodón de manga corta', 19.99, 'Ropa');

INSERT INTO tbl_productos (Nombre_producto, Descripcion_producto, Precio, Categoria_producto)
VALUES ('Zapatos', 'Zapatos de cuero para hombres', 49.99, 'Calzado');

INSERT INTO tbl_productos (Nombre_producto, Descripcion_producto, Precio, Categoria_producto)
VALUES ('Teléfono móvil', 'Teléfono inteligente con pantalla táctil', 299.99, 'Electrónica');
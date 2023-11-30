CREATE DATABASE IF NOT EXISTS gym;

USE gym;

CREATE TABLE vigilantes (
    id_vigilante INTEGER NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(128) NOT NULL,
    apellidos VARCHAR(255) NOT NULL,
    correo VARCHAR(255) NOT NULL,
    PRIMARY KEY (id_vigilante)
);

CREATE TABLE edificios (
    id_edificio INTEGER NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    PRIMARY KEY (id_edificio)
);

CREATE TABLE reporte_edificio (
    id_reporte_edificio INTEGER NOT NULL AUTO_INCREMENT,
    nota VARCHAR(255) NOT NULL,
    fecha DATE,
    hora TIME,
    fk_id_edificio INTEGER,
    FOREIGN KEY (fk_id_edificio) REFERENCES edificios(id_edificio),
    PRIMARY KEY (id_reporte_edificio)
);

CREATE TABLE reporte_ruta (
    id_reporte INTEGER NOT NULL AUTO_INCREMENT,
    fk_id_vigilante INTEGER,
    FOREIGN KEY (fk_id_vigilante) REFERENCES vigilantes(id_vigilante),
    PRIMARY KEY (id_reporte)
);

CREATE TABLE detalle_ruta (
    fk_id_reporte INTEGER,
    fk_id_reporte_edificio INTEGER,
    FOREIGN KEY (fk_id_reporte) REFERENCES reporte_ruta(id_reporte),
    FOREIGN KEY (fk_id_reporte_edificio) REFERENCES reporte_edificio(id_reporte_edificio)
);

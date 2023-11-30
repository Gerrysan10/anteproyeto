CREATE DATABASE IF NOT EXISTS gym;

USE gym;

-- Crear la tabla Usuarios
CREATE TABLE Usuarios (
    IDUsuario INT PRIMARY KEY,
    Nombre VARCHAR(50),
    Apellido VARCHAR(50),
    Correo VARCHAR(100),
    Contraseña VARCHAR(255),
    FechaNacimiento DATE,
);

-- Crear la tabla Rutinas
CREATE TABLE Rutinas (
    IDRutina INT PRIMARY KEY,
    Nombre VARCHAR(100),
    Descripcion TEXT,
    IDUsuario INT,
    FOREIGN KEY (IDUsuario) REFERENCES Usuarios(IDUsuario),
);

-- Crear la tabla Ejercicios
CREATE TABLE Ejercicios (
    IDEjercicio INT PRIMARY KEY,
    Nombre VARCHAR(100),
    GrupoMuscular VARCHAR(50),
    Descripcion TEXT,
    OtrosCamposDeEjercicio TEXT
);

-- Crear la tabla RutinasEjercicios
CREATE TABLE RutinasEjercicios (
    IDRutinaEjercicio INT PRIMARY KEY,
    IDRutina INT,
    IDEjercicio INT,
    Repeticiones INT,
    Peso FLOAT,
    FOREIGN KEY (IDRutina) REFERENCES Rutinas(IDRutina),
    FOREIGN KEY (IDEjercicio) REFERENCES Ejercicios(IDEjercicio)
);

-- Crear la tabla RegistroCorporal
CREATE TABLE RegistroCorporal (
    IDRegistro INT PRIMARY KEY,
    IDUsuario INT,
    Fecha DATE,
    Peso FLOAT,
    GrasaCorporal FLOAT,
    MedidaBrazo FLOAT,
    OtrasMedidas TEXT,
    FOREIGN KEY (IDUsuario) REFERENCES Usuarios(IDUsuario)
);

-- Crear la tabla ProgresoCargas
CREATE TABLE ProgresoCargas (
    IDProgreso INT PRIMARY KEY,
    IDUsuario INT,
    Fecha DATE,
    Repeticiones INT,
    Peso FLOAT,
    FOREIGN KEY (IDUsuario) REFERENCES Usuarios(IDUsuario)
);

-- Crear la tabla Comunidad
CREATE TABLE Comunidad (
    IDComunidad INT PRIMARY KEY,
    IDUsuario INT,
    Mensaje TEXT,
    FechaPublicacion DATETIME,
    FOREIGN KEY (IDUsuario) REFERENCES Usuarios(IDUsuario)
);


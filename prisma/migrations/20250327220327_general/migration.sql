-- CreateTable
CREATE TABLE "Iglesia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tabernaculo" TEXT NOT NULL,
    "pastor" TEXT,
    "correo" TEXT,
    "numero1" TEXT,
    "numero2" TEXT,
    "direccion" TEXT,
    "estado" TEXT,
    "nuestrocaminar" TEXT,
    "horarios" JSONB
);

-- CreateTable
CREATE TABLE "Mision" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mision" TEXT NOT NULL,
    "encargado" TEXT,
    "correo" TEXT,
    "numero1" TEXT,
    "numero2" TEXT,
    "direccion" TEXT,
    "iglesiaId" INTEGER NOT NULL,
    "estado" TEXT,
    "nuestrocaminar" TEXT,
    "horarios" JSONB,
    CONSTRAINT "Mision_iglesiaId_fkey" FOREIGN KEY ("iglesiaId") REFERENCES "Iglesia" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Actividad" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "iglesiaId" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "evento" INTEGER NOT NULL DEFAULT 0,
    "fecha" TEXT NOT NULL,
    CONSTRAINT "Actividad_iglesiaId_fkey" FOREIGN KEY ("iglesiaId") REFERENCES "Iglesia" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ContenidoActividad" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "actividadId" INTEGER NOT NULL,
    "txtContenido" TEXT NOT NULL,
    "galeria" TEXT NOT NULL,
    "portada" TEXT NOT NULL,
    "pieDeFoto" TEXT NOT NULL,
    "audio" TEXT NOT NULL,
    "video1" TEXT,
    "video2" TEXT,
    "redaccion" TEXT NOT NULL,
    "fotografia" TEXT NOT NULL,
    CONSTRAINT "ContenidoActividad_actividadId_fkey" FOREIGN KEY ("actividadId") REFERENCES "Actividad" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_username_key" ON "Admin"("username");

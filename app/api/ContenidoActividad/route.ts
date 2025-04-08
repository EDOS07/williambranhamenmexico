import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function ContenidoActividadGET() {
  try {
    const cotenido = await prisma.contenidoActividad.findMany();
    return NextResponse.json(cotenido);
  } catch (error) {
    console.error("Error al obtener cotenido:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}

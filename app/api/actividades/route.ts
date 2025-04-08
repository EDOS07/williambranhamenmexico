import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const actividades = await prisma.actividad.findMany();
    return NextResponse.json(actividades);
  } catch (error) {
    console.error("Error al obtener actividades:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}

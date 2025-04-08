import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// API para obtener todas las misiones
export async function GET() {
  try {
    const misiones = await prisma.mision.findMany();
    return NextResponse.json(misiones);
  } catch (error) {
    console.error("Error al obtener misiones:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}

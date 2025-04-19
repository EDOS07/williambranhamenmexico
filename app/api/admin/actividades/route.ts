import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const actividades = await prisma.actividad.findMany({
      include: {
        iglesia: true, // Opcional, si quieres los datos de la iglesia también
      },
    });
    return NextResponse.json(actividades);
  } catch (error) {
    console.error("Error al obtener actividades:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const nuevaActividad = await prisma.actividad.create({
      data: {
        iglesiaId: data.iglesiaId,
        titulo: data.titulo,
        evento: data.evento || 0,
        fecha: data.fecha,
      },
    });
    return NextResponse.json(nuevaActividad, { status: 201 });
  } catch (error) {
    console.error("Error al crear actividad:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const { id, ...data } = await req.json();

  if (!id || typeof id !== 'number') {
    return NextResponse.json({ error: "ID inválido" }, { status: 400 });
  }

  try {
    const actividadActualizada = await prisma.actividad.update({
      where: { id },
      data,
    });
    return NextResponse.json(actividadActualizada);
  } catch (error) {
    console.error("Error al actualizar actividad:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();

  if (!id || typeof id !== "number") {
    return NextResponse.json({ error: "ID inválido" }, { status: 400 });
  }

  try {
    await prisma.actividad.delete({
      where: { id },
    });
    return NextResponse.json({ message: "Actividad eliminada" });
  } catch (error) {
    console.error("Error al eliminar actividad:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Obtener todos los contenidos
export async function GET() {
  try {
    const contenidos = await prisma.contenidoActividad.findMany({
      include: {
        actividad: true, // Opcional, por si quieres datos de la actividad también
      },
    });
    return NextResponse.json(contenidos);
  } catch (error) {
    console.error("Error al obtener contenidos de actividades:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}

// Crear un nuevo contenido
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const nuevoContenido = await prisma.contenidoActividad.create({
      data: {
        actividadId: data.actividadId,
        txtContenido: data.txtContenido,
        galeria: data.galeria,
        portada: data.portada,
        pieDeFoto: data.pieDeFoto,
        audio: data.audio,
        video1: data.video1,
        video2: data.video2,
        redaccion: data.redaccion,
        fotografia: data.fotografia,
      },
    });
    return NextResponse.json(nuevoContenido, { status: 201 });
  } catch (error) {
    console.error("Error al crear contenido de actividad:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}

// Actualizar contenido existente
export async function PUT(req: NextRequest) {
  const { id, ...data } = await req.json();

  if (!id || typeof id !== "number") {
    return NextResponse.json({ error: "ID inválido" }, { status: 400 });
  }

  try {
    const contenidoActualizado = await prisma.contenidoActividad.update({
      where: { id },
      data,
    });
    return NextResponse.json(contenidoActualizado);
  } catch (error) {
    console.error("Error al actualizar contenido:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}

// Eliminar un contenido
export async function DELETE(req: NextRequest) {
  const { id } = await req.json();

  if (!id || typeof id !== "number") {
    return NextResponse.json({ error: "ID inválido" }, { status: 400 });
  }

  try {
    await prisma.contenidoActividad.delete({
      where: { id },
    });
    return NextResponse.json({ message: "Contenido eliminado" });
  } catch (error) {
    console.error("Error al eliminar contenido:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
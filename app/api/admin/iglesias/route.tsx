import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Obtener todas las Iglesias

export async function GET() {
  try {
    const iglesias = await prisma.iglesia.findMany();
    return NextResponse.json(iglesias);
  } catch (error) {
    console.error("Error al obtener iglesias:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}

// Crear una Iglesia

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const nuevaIglesia = await prisma.iglesia.create({
      data: {
        tabernaculo: data.tabernaculo,
        pastor: data.pastor,
        correo: data.correo,
        numero1: data.numero1,
        numero2: data.numero2,
        direccion: data.direccion,
        estado: data.estado,
        nuestrocaminar: data.nuestrocaminar,
        horarios: data.horarios,
      },
    });
    return NextResponse.json(nuevaIglesia, { status: 201 });
  } catch (error) {
    console.error("Error al crear iglesia:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}

// Actualizar una Iglesia

export async function PUT(req: NextRequest) {
  const { id, ...data } = await req.json();

  if (!id || typeof id !== 'number') {
    return NextResponse.json({ error: "ID inválido" }, { status: 400 });
  }

  try {
    const iglesiaActualizada = await prisma.iglesia.update({
      where: { id },
      data: data,
    });
    return NextResponse.json(iglesiaActualizada);
  } catch (error) {
    console.error("Error al actualizar iglesia:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}

// Eliminar una Iglesia

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  try {
    await prisma.iglesia.delete({
      where: { id },
    });
    return NextResponse.json({ message: "Iglesia eliminada" });
  } catch (error) {
    console.error("Error al eliminar iglesia:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}

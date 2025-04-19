import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Obtener todas las Misiones
export async function GET() {
  try {
    const misiones = await prisma.mision.findMany();
    return NextResponse.json(misiones);
  } catch (error) {
    console.error("Error al obtener misiones:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}

// Crear una Misión
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    if (!data.mision || !data.encargado || !data.iglesiaId) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
    }

    const nuevaMision = await prisma.mision.create({
      data: {
        mision: data.mision,
        encargado: data.encargado,
        correo: data.correo ?? null,
        numero1: data.numero1 ?? null,
        numero2: data.numero2 ?? null,
        direccion: data.direccion ?? null,
        iglesiaId: data.iglesiaId,
        estado: data.estado ?? null,
        nuestrocaminar: data.nuestrocaminar ?? null,
        horarios: data.horarios ?? null,
      },
    });

    return NextResponse.json(nuevaMision, { status: 201 });
  } catch (error) {
    console.error("Error al crear misión:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}

// Actualizar una Misión
export async function PUT(req: NextRequest) {
  try {
    const { id, ...data } = await req.json();

    if (!id || typeof id !== "number") {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 });
    }

    const misionActualizada = await prisma.mision.update({
      where: { id },
      data: {
        ...data,
      },
    });

    return NextResponse.json(misionActualizada);
  } catch (error: any) {
    console.error("Error al actualizar misión:", error);
    if (error.code === "P2025") {
      return NextResponse.json({ error: "Misión no encontrada" }, { status: 404 });
    }
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}

// Eliminar una Misión
export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    if (!id || typeof id !== "number") {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 });
    }

    await prisma.mision.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Misión eliminada" });
  } catch (error: any) {
    console.error("Error al eliminar misión:", error);
    if (error.code === "P2025") {
      return NextResponse.json({ error: "Misión no encontrada" }, { status: 404 });
    }
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}

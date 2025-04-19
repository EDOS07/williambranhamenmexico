// /app/api/admin/iglesias/route.ts

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

    if (!data.tabernaculo || !data.pastor || !data.direccion) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
    }

    const nuevaIglesia = await prisma.iglesia.create({
      data: {
        tabernaculo: data.tabernaculo,
        pastor: data.pastor,
        correo: data.correo ?? null,
        numero1: data.numero1 ?? null,
        numero2: data.numero2 ?? null,
        direccion: data.direccion,
        estado: data.estado ?? null,
        nuestrocaminar: data.nuestrocaminar ?? null,
        horarios: data.horarios ?? null,
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
  try {
    const { id, ...data } = await req.json();

    if (!id || typeof id !== "number") {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 });
    }

    const iglesia = await prisma.iglesia.update({
      where: { id },
      data: {
        ...data,
      },
    });

    return NextResponse.json(iglesia);
  } catch (error: any) {
    console.error("Error al actualizar iglesia:", error);
    if (error.code === "P2025") {
      return NextResponse.json({ error: "Iglesia no encontrada" }, { status: 404 });
    }
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}

// Eliminar una Iglesia
export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    if (!id || typeof id !== "number") {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 });
    }

    await prisma.iglesia.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Iglesia eliminada" });
  } catch (error: any) {
    console.error("Error al eliminar iglesia:", error);
    if (error.code === "P2025") {
      return NextResponse.json({ error: "Iglesia no encontrada" }, { status: 404 });
    }
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}

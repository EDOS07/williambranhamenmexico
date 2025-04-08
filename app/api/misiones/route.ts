import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const mision = searchParams.get("Mision");

  if (!mision) {
    return NextResponse.json({ error: "Falta el parámetro Misión" }, { status: 400 });
  }

  try {
    const misiones = await prisma.mision.findFirst({
      where: {
        mision
       },
    });

    if (!misiones) {
      return NextResponse.json({ error: "Misión no encontrada" }, { status: 404 });
    }

    return NextResponse.json(misiones);
  } catch (error) {
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}

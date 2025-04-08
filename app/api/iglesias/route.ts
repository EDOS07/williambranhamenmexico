import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const tabernaculo = searchParams.get("Tabernaculo");

  if (!tabernaculo) {
    return NextResponse.json({ error: "Falta el parámetro Tabernaculo" }, { status: 400 });
  }

  try {
    const iglesia = await prisma.iglesia.findFirst({
      where: {
        tabernaculo
      },
      select: {
        id: true,
        tabernaculo: true,
        pastor: true,
        correo: true,
        numero1: true,
        numero2: true,
        direccion: true,
        estado: true,
        nuestrocaminar: true,
        horarios: true,
      },
    });

    if (!iglesia) {
      return NextResponse.json({ error: "Iglesia no encontrada" }, { status: 404 });
    }

    return NextResponse.json(iglesia);
  } catch (error) {
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
// import { NextRequest, NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";

// export async function GET(req: NextRequest) {
//   const { searchParams } = new URL(req.url);
//   const tabernaculo = searchParams.get("Tabernaculo");

//   if (!tabernaculo) {
//     return NextResponse.json({ error: "Falta el parámetro Tabernaculo" }, { status: 400 });
//   }

//   try {
//     const iglesia = await prisma.iglesia.findFirst({
//       where: { tabernaculo },
//       select: {
//         id: true,
//         tabernaculo: true,
//         pastor: true,
//         correo: true,
//         numero1: true,
//         numero2: true,
//         direccion: true,
//         estado: true,
//         nuestrocaminar: true,
//         horarios: true,
//         actividades: { select: { id: true } },
//         misiones: { select: { id: true } },
//       },
//     });

//     if (!iglesia) {
//       return NextResponse.json({ error: "Iglesia no encontrada" }, { status: 404 });
//     }

//     return NextResponse.json(iglesia);
//   } catch (error) {
//     return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
//   }
// }

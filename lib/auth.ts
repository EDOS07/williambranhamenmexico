import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";  // Asegúrate de que bcrypt está instalado

export async function authenticateUser(username: string, password: string) {
  const user = await prisma.admin.findUnique({
    where: { username },
  });

  if (!user) return null; // Usuario no encontrado

  // Comparar la contraseña con el hash almacenado en la BD
  const isPasswordValid = await bcrypt.compare(password, user.password);

  return isPasswordValid ? user : null;
}

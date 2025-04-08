const { prisma } = require("../lib/prisma");
const bcrypt = require("bcryptjs");

async function createOrUpdateAdmin() {
    const username = "admin";
    const plainPassword = "admin123"; // Cambia la contraseña aquí

    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    const existingAdmin = await prisma.admin.findUnique({
        where: { username },
    });

    if (existingAdmin) {
        await prisma.admin.update({
            where: { username },
            data: { password: hashedPassword },
        });
        console.log("Contraseña actualizada correctamente");
    } else {
        await prisma.admin.create({
            data: {
                username,
                password: hashedPassword,
            },
        });
        console.log("Usuario admin creado correctamente");
    }
}

createOrUpdateAdmin()
    .catch(console.error)
    .finally(async () => {
        await prisma.$disconnect();
    });

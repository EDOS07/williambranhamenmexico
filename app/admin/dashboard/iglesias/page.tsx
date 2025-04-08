"use client";
import { useState, useEffect } from "react";
import Loading from "@/components/Loading";
import { Select } from "@heroui/react";



export default function Dashboard() {
    const [loading, setLoading] = useState(true);
    const [iglesias, setIglesias] = useState<any[]>([]);
    const [formDataIg, setFormDataIg] = useState({
        id: null,
        tabernaculo: "",
        pastor: "",
        correo: "",
        numero1: "",
        numero2: "",
        direccion: "",
        estado: "",
        nuestrocaminar: "",
        horarios: [
            {
                dia: "",
                hora: "",
            }
        ],
    });

    // Iglesia CRUD Logic

    // Cargar Iglesias
    useEffect(() => {
        fetch("/api/admin/iglesias")
            .then((res) => res.json())
            .then(setIglesias)
            .finally(() => setLoading(false));
    }, []);

    // Manejar cambios en el formulario Iglisia
    const handleChangeIg = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormDataIg({
            ...formDataIg,
            [e.target.name]: e.target.name === "horarios" ? JSON.parse(e.target.value) : e.target.value,
        });
    };

    // Crear Iglesia
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const method = formDataIg.id ? "PUT" : "POST";
        const url = formDataIg.id ? `/api/admin/iglesias/${formDataIg.id}` : "/api/admin/iglesias";

        try {
            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formDataIg,
                    horarios: Array.isArray(formDataIg.horarios) ? formDataIg.horarios : [], // Evitar errores si horarios es undefined
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                alert(`Error: ${errorData.error || "No se pudo guardar la iglesia"}`);
                return;
            }

            alert("Iglesia guardada exitosamente");

            // Recargar iglesias
            const updatedIglesias = await (await fetch("/api/admin/iglesias")).json();
            setIglesias(updatedIglesias);



            // Resetear formulario
            setFormDataIg({
                id: null,
                tabernaculo: "",
                pastor: "",
                correo: "",
                numero1: "",
                numero2: "",
                direccion: "",
                estado: "",
                nuestrocaminar: "",
                horarios: [{ dia: "", hora: "" }],
            });

        } catch (error) {
            console.error("Error al guardar iglesia:", error);
            alert("Ocurrió un error al guardar la iglesia. Intenta de nuevo.");
        }
    };


    // Editar Iglesia
    const handleEdit = (iglesia: any) => {
        setFormDataIg({
            id: iglesia.id,
            tabernaculo: iglesia.tabernaculo,
            pastor: iglesia.pastor,
            correo: iglesia.correo,
            numero1: iglesia.numero1,
            numero2: iglesia.numero2,
            direccion: iglesia.direccion,
            estado: iglesia.estado,
            nuestrocaminar: iglesia.nuestrocaminar,
            horarios: iglesia.horarios,
        });
    };

    // Eliminar Iglesia
    const handleDelete = async (id: number) => {
        try {
            const response = await fetch("/api/admin/iglesias", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });

            if (response.ok) {
                alert("Iglesia eliminada");
                // Recargar Iglesias
                const updatedIglesias = await (await fetch("/api/admin/iglesias")).json();
                setIglesias(updatedIglesias);
            }
        } catch (error) {
            console.error("Error al eliminar iglesia:", error);
        }
    };

    const handleHorarioChange = (index: number, field: "dia" | "hora", value: string) => {
        const newHorarios = [...formDataIg.horarios];
        newHorarios[index][field] = value;
        setFormDataIg({ ...formDataIg, horarios: newHorarios });
    };

    // Termina Iglesia CRUD Logic

    console.log();

    if (loading) return <Loading />;
    iglesias.map((iglesia) => { console.log(iglesia) });
    return (
        <>
            <div className="bg-black pt-48">
                {/* Tabla de Iglesias */}
                <div>
                    <h1 className="text-xl font-bold mb-4">Panel de Administración Iglesias</h1>
                    <table className="w-full border">
                        <thead>
                            <tr className="border">
                                <th className="border p-2">Id</th>
                                <th className="border p-2">Tabernáculo</th>
                                <th className="border p-2">Pastor</th>
                                <th className="border p-2">Correo</th>
                                <th className="border p-2">Número 1</th>
                                <th className="border p-2">Número 2</th>
                                <th className="border p-2">Dirección</th>
                                <th className="border p-2">Estado</th>
                                <th className="border p-2">Nuestro Caminar</th>
                                <th className="border p-2">Horarios</th>
                                <th className="border p-2">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {iglesias.map((iglesia) => (
                                <tr key={iglesia.id} className="border">
                                    <td className="border p-2">{iglesia.id}</td>
                                    <td className="border p-2">{iglesia.tabernaculo}</td>
                                    <td className="border p-2">{iglesia.pastor}</td>
                                    <td className="border p-2">{iglesia.correo}</td>
                                    <td className="border p-2">{iglesia.numero1}</td>
                                    <td className="border p-2">{iglesia.numero2}</td>
                                    <td className="border p-2">{iglesia.direccion}</td>
                                    <td className="border p-2">{iglesia.estado}</td>
                                    <td className="border p-2">{iglesia.nuestrocaminar}</td>
                                    <td className="border p-2">
                                        {iglesia.horarios.map((horario: { dia: string; hora: string }, index: number) => (
                                            <div key={index}>{horario.dia} - {horario.hora}</div>
                                        ))}
                                    </td>
                                    <td className="border p-2">
                                        <button
                                            className="bg-blue-500 text-white p-2 mr-2"
                                            onClick={() => handleEdit(iglesia)}
                                        >
                                            Editar
                                        </button>
                                        <button
                                            className="bg-red-500 text-white p-2"
                                            onClick={() => handleDelete(iglesia.id)}
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Formulario para Crear/Editar Iglesia */}
                <form onSubmit={handleSubmit} className="mb-10 p-4">
                    <h2 className="text-2xl mb-4">{formDataIg.id ? "Editar Iglesia" : "Crear Iglesia"}</h2>
                    <input
                        type="text"
                        name="tabernaculo"
                        value={formDataIg.tabernaculo}
                        onChange={handleChangeIg}
                        placeholder="Tabernáculo"
                        className="p-2 mb-2 w-full font-bold bg-white text-black"
                        required
                    />
                    <input
                        type="text"
                        name="pastor"
                        value={formDataIg.pastor}
                        onChange={handleChangeIg}
                        placeholder="Pastor"
                        className="p-2 mb-2 w-full font-bold bg-white text-black"
                    />
                    <input
                        type="email"
                        name="correo"
                        value={formDataIg.correo}
                        onChange={handleChangeIg}
                        placeholder="Correo"
                        className="p-2 mb-2 w-full font-bold bg-white text-black"
                    />
                    <input
                        type="text"
                        name="numero1"
                        value={formDataIg.numero1}
                        onChange={handleChangeIg}
                        placeholder="Número 1"
                        className="p-2 mb-2 w-full font-bold bg-white text-black"
                    />
                    <input
                        type="text"
                        name="numero2"
                        value={formDataIg.numero2}
                        onChange={handleChangeIg}
                        placeholder="Número 2"
                        className="p-2 mb-2 w-full font-bold bg-white text-black"
                    />
                    <input
                        type="text"
                        name="direccion"
                        value={formDataIg.direccion}
                        onChange={handleChangeIg}
                        placeholder="Dirección"
                        className="p-2 mb-2 w-full font-bold bg-white text-black"
                    />
                    <input
                        type="text"
                        name="estado"
                        value={formDataIg.estado}
                        onChange={handleChangeIg}
                        placeholder="Estado"
                        className="p-2 mb-2 w-full font-bold bg-white text-black"
                    />
                    <input
                        type="text"
                        name="nuestrocaminar"
                        value={formDataIg.nuestrocaminar}
                        onChange={handleChangeIg}
                        placeholder="Nuestro Caminar"
                        className="p-2 mb-2 w-full font-bold bg-white text-black"
                    />
                    <div className="mb-2">
                        <label className="font-bold">Horarios:</label>
                        {formDataIg.horarios.map((horario, index) => (
                            <div key={index} className="flex gap-2 mb-2">
                                <input
                                    type="text"
                                    placeholder="Día"
                                    value={horario.dia}
                                    onChange={(e) => handleHorarioChange(index, "dia", e.target.value)}
                                    className="p-2 w-1/2 font-bold bg-white text-black"
                                />
                                <input
                                    type="text"
                                    placeholder="Hora"
                                    value={horario.hora}
                                    onChange={(e) => handleHorarioChange(index, "hora", e.target.value)}
                                    className="p-2 w-1/2 font-bold bg-white text-black"
                                />
                            </div>
                        ))}
                    </div>
                    <button type="submit" className="p-2 bg-blue-500 text-white">
                        {formDataIg.id ? "Actualizar" : "Crear"} Iglesia
                    </button>
                </form>
            </div>
        </>
    );
}
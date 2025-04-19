"use client";
import { useState, useEffect } from "react";
import Loading from "@/components/Loading";

interface Horario {
    dia: string;
    hora: string;
}

interface MisionFormData {
    id: number | null;
    mision: string;
    encargado: string;
    correo: string;
    numero1: string;
    numero2: string;
    direccion: string;
    iglesiaId: number | null;
    estado: string;
    nuestrocaminar: string;
    horarios: Horario[];
}

export default function MisionesDashboard() {
    const [loading, setLoading] = useState(true);
    const [iglesias, setIglesias] = useState<any[]>([]);
    const [misiones, setMisiones] = useState<any[]>([]);
    const [formData, setFormData] = useState<MisionFormData>({
        id: null,
        mision: "",
        encargado: "",
        correo: "",
        numero1: "",
        numero2: "",
        direccion: "",
        iglesiaId: null,
        estado: "",
        nuestrocaminar: "",
        horarios: [{ dia: "", hora: "" }],
    });

    useEffect(() => {
        fetch("/api/admin/misiones")
            .then((res) => res.json())
            .then(setMisiones)
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        fetch("/api/admin/iglesias")
            .then((res) => res.json())
            .then(setIglesias)
            .catch((err) => console.error("Error al cargar iglesias:", err));
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const method = formData.id ? "PUT" : "POST";

        try {
            const res = await fetch("/api/admin/misiones", {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                const error = await res.json();
                alert("Error: " + (error.error || "No se pudo guardar la misión"));
                return;
            }

            alert("Misión guardada correctamente");
            const updated = await fetch("/api/admin/misiones").then((r) => r.json());
            setMisiones(updated);
            setFormData({
                id: null,
                mision: "",
                encargado: "",
                correo: "",
                numero1: "",
                numero2: "",
                direccion: "",
                iglesiaId: null,
                estado: "",
                nuestrocaminar: "",
                horarios: [{ dia: "", hora: "" }],
            });
        } catch (error) {
            console.error("Error al guardar misión:", error);
        }
    };

    const handleEdit = (mision: any) => {
        setFormData({
            ...mision,
            iglesiaId: mision.iglesiaId ?? null,
        });
    };

    const handleDelete = async (id: number) => {
        if (!confirm("¿Seguro que deseas eliminar esta misión?")) return;
        try {
            await fetch("/api/admin/misiones", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id }),
            });
            const updated = await fetch("/api/admin/misiones").then((r) => r.json());
            setMisiones(updated);
        } catch (error) {
            console.error("Error al eliminar misión:", error);
        }
    };

    const handleHorarioChange = (index: number, field: "dia" | "hora", value: string) => {
        const newHorarios = [...formData.horarios];
        newHorarios[index][field] = value;
        setFormData({ ...formData, horarios: newHorarios });
    };

    if (loading) return <Loading />;

    return (
        <div className="text-black p-4">
            <h1 className="text-2xl font-bold mb-4">Panel de Misiones</h1>

            {/* Tabla */}
            <table className="w-full border mb-6">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">ID</th>
                        <th className="border p-2">Misión</th>
                        <th className="border p-2">Encargado</th>
                        <th className="border p-2">Correo</th>
                        <th className="border p-2">Numero1</th>
                        <th className="border p-2">Numero2</th>
                        <th className="border p-2">Dirección</th>
                        <th className="border p-2">IglesiaId</th>
                        <th className="border p-2">Estado</th>
                        <th className="border p-2">NuestroCaminar</th>
                        <th className="border p-2">Horarios</th>
                        <th className="border p-2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {misiones.map((mision) => (
                        <tr key={mision.id}>
                            <td className="border p-2">{mision.id}</td>
                            <td className="border p-2">{mision.mision}</td>
                            <td className="border p-2">{mision.encargado}</td>
                            <td className="border p-2">{mision.correo}</td>
                            <td className="border p-2">{mision.numero1}</td>
                            <td className="border p-2">{mision.numero2}</td>
                            <td className="border p-2">{mision.direccion}</td>
                            <td className="border p-2">{mision.iglesiaId}</td>
                            <td className="border p-2">{mision.estado}</td>
                            <td className="border p-2">{mision.nuestrocaminar}</td>
                            <td className="border p-2">
                                {mision.horarios.map((horario: Horario, index: number) => (
                                    <div key={index}>{horario.dia} - {horario.hora}</div>
                                ))}
                            </td>
                            <td className="border p-2">
                                <button className="text-blue-600 mr-2" onClick={() => handleEdit(mision)}>Editar</button>
                                <button className="text-red-600" onClick={() => handleDelete(mision.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
                <h2 className="text-xl mb-4">{formData.id ? "Editar" : "Crear"} Misión</h2>
                <input type="text" name="mision" value={formData.mision} onChange={handleChange} placeholder="Misión" className="p-2 mb-2 w-full border" required />
                <input type="text" name="encargado" value={formData.encargado} onChange={handleChange} placeholder="Encargado" className="p-2 mb-2 w-full border" />
                <input type="text" name="correo" value={formData.correo} onChange={handleChange} placeholder="Correo" className="p-2 mb-2 w-full border" />
                <input type="text" name="numero1" value={formData.numero1} onChange={handleChange} placeholder="Numero1" className="p-2 mb-2 w-full border" />
                <input type="text" name="numero2" value={formData.numero2} onChange={handleChange} placeholder="Numero2" className="p-2 mb-2 w-full border" />
                <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} placeholder="Dirección" className="p-2 mb-2 w-full border" />

                <label className="font-bold">Iglesia:</label>
                <select
                    name="iglesiaId"
                    value={formData.iglesiaId?.toString() ?? ""}
                    onChange={(e) => setFormData((prev) => ({ ...prev, iglesiaId: parseInt(e.target.value) }))}
                    className="p-2 mb-2 w-full border"
                    required
                >
                    <option value="">Selecciona una iglesia</option>
                    {iglesias.map((iglesia) => (
                        <option key={iglesia.id} value={iglesia.id}>{iglesia.tabernaculo}</option>
                    ))}
                </select>

                <input type="text" name="estado" value={formData.estado} onChange={handleChange} placeholder="Estado" className="p-2 mb-2 w-full border" />
                <input type="text" name="nuestrocaminar" value={formData.nuestrocaminar} onChange={handleChange} placeholder="Nuestro Caminar" className="p-2 mb-2 w-full border" />

                <div className="mb-2">
                    <label className="font-bold">Horarios:</label>
                    {formData.horarios.map((horario, index) => (
                        <div key={index} className="flex gap-2 mb-2">
                            <input type="text" placeholder="Día" value={horario.dia} onChange={(e) => handleHorarioChange(index, "dia", e.target.value)} className="p-2 w-1/2 bg-white text-black" />
                            <input type="text" placeholder="Hora" value={horario.hora} onChange={(e) => handleHorarioChange(index, "hora", e.target.value)} className="p-2 w-1/2 bg-white text-black" />
                        </div>
                    ))}
                </div>

                <button type="submit" className="p-2 bg-blue-500 text-white">
                    {formData.id ? "Actualizar" : "Crear"} Misión
                </button>
            </form>
        </div>
    );
}

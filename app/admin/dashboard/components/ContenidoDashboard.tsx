"use client";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";

// Interfaces
interface Actividad {
    id: number;
    iglesiaId: number;
    titulo: string;
    evento: number;
    fecha: string;
}

interface ContenidoActividad {
    id: number | null;
    actividadId: number;
    txtContenido: string;
    galeria: string;
    portada: string;
    pieDeFoto: string;
    audio: string;
    video1?: string;
    video2?: string;
    redaccion: string;
    fotografia: string;
}

export default function ActividadesDashboard() {
    const [loading, setLoading] = useState(true);
    const [actividades, setActividades] = useState<Actividad[]>([]);
    const [contenidos, setContenidos] = useState<ContenidoActividad[]>([]);
    const [formData, setFormData] = useState<ContenidoActividad>({
        id: null,
        actividadId: 0,
        txtContenido: "",
        galeria: "",
        portada: "",
        pieDeFoto: "",
        audio: "",
        video1: "",
        video2: "",
        redaccion: "",
        fotografia: "",
    });

    // Cargar actividades y contenidos
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [acts, conts] = await Promise.all([
                    fetch("/api/admin/actividades").then((res) => res.json()),
                    fetch("/api/admin/contenidoActividad").then((res) => res.json()),
                ]);

                setActividades(acts);
                setContenidos(conts);

                // Relacionar con la última actividad
                if (acts.length > 0) {
                    const lastActividadId = acts[acts.length - 1].id;
                    setFormData((prev) => ({
                        ...prev,
                        actividadId: lastActividadId,
                    }));
                }
            } catch (error) {
                console.error("Error al cargar datos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/admin/contenidoactividades", {
                method: formData.id ? "PUT" : "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Error al guardar contenido");

            alert("Contenido guardado correctamente");

            // Reset y recarga
            setFormData({
                id: null,
                actividadId: actividades[actividades.length - 1].id,
                txtContenido: "",
                galeria: "",
                portada: "",
                pieDeFoto: "",
                audio: "",
                video1: "",
                video2: "",
                redaccion: "",
                fotografia: "",
            });

            const updatedCont = await fetch("/api/admin/contenidoactividades").then((res) => res.json());
            setContenidos(updatedCont);
        } catch (err) {
            console.error(err);
            alert("Error al guardar el contenido");
        }
    };

    const handleEdit = (contenido: ContenidoActividad) => {
        setFormData({ ...contenido });
    };

    const handleDelete = async (id: number) => {
        try {
            const res = await fetch("/api/admin/contenidoactividades", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id }),
            });

            if (!res.ok) throw new Error();

            alert("Contenido eliminado");

            const updated = await fetch("/api/admin/contenidoactividades").then((r) => r.json());
            setContenidos(updated);
        } catch (err) {
            console.error(err);
        }
    };

    if (loading) return <Loading />;

    return (
        <div className="text-black">
            <h1 className="text-xl font-bold mb-4">Dashboard Actividades</h1>

            {/* Tabla de contenidos */}
            <table className="w-full border mb-10">
                <thead>
                    <tr className="border bg-gray-100">
                        <th className="p-2 border">ID</th>
                        <th className="p-2 border">Actividad ID</th>
                        <th className="p-2 border">Contenido</th>
                        <th className="p-2 border">Galería</th>
                        <th className="p-2 border">Portada</th>
                        <th className="p-2 border">Pie de Foto</th>
                        <th className="p-2 border">Audio</th>
                        <th className="p-2 border">Video 1</th>
                        <th className="p-2 border">Video 2</th>
                        <th className="p-2 border">Redacción</th>
                        <th className="p-2 border">Fotografía</th>
                        <th className="p-2 border">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {contenidos.map((contenido) => (
                        <tr key={contenido.id} className="border">
                            <td className="border p-2">{contenido.id}</td>
                            <td className="border p-2">{contenido.actividadId}</td>
                            <td className="border p-2">{contenido.txtContenido}</td>
                            <td className="border p-2">{contenido.galeria}</td>
                            <td className="border p-2">{contenido.portada}</td>
                            <td className="border p-2">{contenido.pieDeFoto}</td>
                            <td className="border p-2">{contenido.audio}</td>
                            <td className="border p-2">{contenido.video1}</td>
                            <td className="border p-2">{contenido.video2}</td>
                            <td className="border p-2">{contenido.redaccion}</td>
                            <td className="border p-2">{contenido.fotografia}</td>
                            <td className="border p-2">
                                <button className="text-blue-500 px-2 mr-2" onClick={() => handleEdit(contenido)}>
                                    Editar
                                </button>
                                <button className="text-red-500 px-2" onClick={() => handleDelete(contenido.id!)}>
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded mb-10">
                <h2 className="text-2xl mb-4">{formData.id ? "Editar" : "Crear"} Contenido</h2>
                <p className="text-sm mb-4">Relacionado con Actividad ID: <strong>{formData.actividadId}</strong></p>

                <textarea name="txtContenido" value={formData.txtContenido} onChange={handleChange} placeholder="Texto del contenido" className="p-2 mb-2 w-full border" required />
                <input type="text" name="galeria" value={formData.galeria} onChange={handleChange} placeholder="Galería" className="p-2 mb-2 w-full border" />
                <input type="text" name="portada" value={formData.portada} onChange={handleChange} placeholder="Portada" className="p-2 mb-2 w-full border" />
                <input type="text" name="pieDeFoto" value={formData.pieDeFoto} onChange={handleChange} placeholder="Pie de Foto" className="p-2 mb-2 w-full border" />
                <input type="text" name="audio" value={formData.audio} onChange={handleChange} placeholder="Audio" className="p-2 mb-2 w-full border" />
                <input type="text" name="video1" value={formData.video1} onChange={handleChange} placeholder="Video 1" className="p-2 mb-2 w-full border" />
                <input type="text" name="video2" value={formData.video2} onChange={handleChange} placeholder="Video 2" className="p-2 mb-2 w-full border" />
                <input type="text" name="redaccion" value={formData.redaccion} onChange={handleChange} placeholder="Redacción" className="p-2 mb-2 w-full border" />
                <input type="text" name="fotografia" value={formData.fotografia} onChange={handleChange} placeholder="Fotografía" className="p-2 mb-4 w-full border" />

                <button type="submit" className="bg-green-500 text-white px-4 py-2">
                    {formData.id ? "Actualizar" : "Crear"} Contenido
                </button>
            </form>
        </div>
    );
}

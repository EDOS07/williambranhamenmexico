"use client";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";

// Interfaces
interface Iglesia {
  id: number;
  tabernaculo: string;
}

interface Actividad {
  id: number | null;
  iglesiaId: number;
  titulo: string;
  evento: number; // 0 o 1
  fecha: string;
}

export default function ActividadesDashboard() {
  const [loading, setLoading] = useState(true);
  const [actividades, setActividades] = useState<Actividad[]>([]);
  const [iglesias, setIglesias] = useState<Iglesia[]>([]);
  const [formData, setFormData] = useState<Actividad>({
    id: null,
    iglesiaId: 0,
    titulo: "",
    evento: 0,
    fecha: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const [actividadesRes, iglesiasRes] = await Promise.all([
        fetch("/api/admin/actividades"),
        fetch("/api/admin/iglesias"),
      ]);
      const actividadesData = await actividadesRes.json();
      const iglesiasData = await iglesiasRes.json();
      setActividades(actividadesData);
      setIglesias(iglesiasData);
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? (checked ? 1 : 0) : value;
    setFormData({
      ...formData,
      [name]: name === "iglesiaId" ? Number(newValue) : newValue,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = formData.id ? "PUT" : "POST";
    const url = formData.id
      ? `/api/admin/actividades?id=${formData.id}`
      : "/api/admin/actividades";

    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Actividad guardada correctamente.");
      const data = await (await fetch("/api/admin/actividades")).json();
      setActividades(data);
      setFormData({ id: null, iglesiaId: 0, titulo: "", evento: 0, fecha: "" });
    } else {
      alert("Error al guardar la actividad.");
    }
  };

  const handleEdit = (actividad: Actividad) => {
    setFormData(actividad);
  };

  const handleDelete = async (id: number) => {
    const res = await fetch("/api/admin/actividades", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    if (res.ok) {
      alert("Actividad eliminada.");
      const data = await (await fetch("/api/admin/actividades")).json();
      setActividades(data);
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="text-black">
      <h1 className="text-xl font-bold mb-4">Panel de Administración de Actividades</h1>

      {/* Tabla de actividades */}
      <table className="w-full border mb-10">
        <thead>
          <tr className="border">
            <th className="border p-2">ID</th>
            <th className="border p-2">Título</th>
            <th className="border p-2">Fecha</th>
            <th className="border p-2">Iglesia</th>
            <th className="border p-2">Evento</th>
            <th className="border p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {actividades.map((act) => {
            const iglesia = iglesias.find((i) => i.id === act.iglesiaId);
            return (
              <tr key={act.id} className="border">
                <td className="border p-2">{act.id}</td>
                <td className="border p-2">{act.titulo}</td>
                <td className="border p-2">{act.fecha}</td>
                <td className="border p-2">{iglesia?.tabernaculo || "Desconocida"}</td>
                <td className="border p-2">{act.evento ? "Sí" : "No"}</td>
                <td className="border p-2">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 mr-2"
                    onClick={() => handleEdit(act)}
                  >
                    Editar
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1"
                    onClick={() => handleDelete(act.id!)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="p-4">
        <h2 className="text-2xl mb-4">{formData.id ? "Editar" : "Crear"} Actividad</h2>

        <select
          name="iglesiaId"
          value={formData.iglesiaId}
          onChange={handleChange}
          className="w-full p-2 mb-2 bg-white font-bold"
          required
        >
          <option value="">Seleccione una iglesia</option>
          {iglesias.map((iglesia) => (
            <option key={iglesia.id} value={iglesia.id}>
              {iglesia.tabernaculo}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="titulo"
          placeholder="Título"
          value={formData.titulo}
          onChange={handleChange}
          className="w-full p-2 mb-2 font-bold bg-white"
          required
        />

        <input
          type="date"
          name="fecha"
          value={formData.fecha}
          onChange={handleChange}
          className="w-full p-2 mb-2 font-bold bg-white"
          required
        />

        <label className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            name="evento"
            checked={formData.evento === 1}
            onChange={handleChange}
          />
          ¿Es un evento?
        </label>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          {formData.id ? "Actualizar" : "Crear"} Actividad
        </button>
      </form>
    </div>
  );
}

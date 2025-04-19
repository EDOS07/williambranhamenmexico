"use client";
import { Link } from "@heroui/react";
import { useState, useEffect } from "react";
import Loading from "@/components/Loading";
import { Select } from "@heroui/react";


import IglesiasDashboard from "@/app/admin/dashboard/components/IglesiasDashboard";
import MisionesDashboard from "@/app/admin/dashboard/components/MisionesDashboard";
import ActividadesDashboard from "@/app/admin/dashboard/components/ActividadesDashboard";
import ContenidoDashboard from "@/app/admin/dashboard/components/ContenidoDashboard";
import UsuariosDashboard from "@/app/admin/dashboard/components/UsuariosDashboard";


import { GoHome, GoHomeFill } from "react-icons/go";

export default function Dashboard() {
  // const [loading, setLoading] = useState(true);

  // const [misiones, setMisiones] = useState<any[]>([]);


  // const [formDataM, setFormDataM] = useState({
  //   id: null,
  //   mision: "",
  //   encargado: "",
  //   correo: "",
  //   numero1: "",
  //   numero2: "",
  //   direccion: "",
  //   iglesiaId: "",
  //   estado: "",
  //   nuestrocaminar: "",
  //   horarios: [
  //     {
  //       dia: "",
  //       hora: "",
  //     }
  //   ],
  // });



  // // Cargar Misiones

  // useEffect(() => {
  //   fetch("/api/admin/misiones")
  //     .then((res) => res.json())
  //     .then(setMisiones)
  //     .finally(() => setLoading(false));
  // }, []);

  // const handleChangeM = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormDataM({
  //     ...formDataM,
  //     [e.target.name]: e.target.name === "horarios" ? JSON.parse(e.target.value) : e.target.value,
  //   });
  // }

  // // Recargar Mision
  // const updatedMision = await(await fetch("/api/admin/misiones")).json();
  // setIglesias(updatedMision);

  // // Termina Misiones CRUD Logic

  // if (loading) return <Loading />;
  // iglesias.map((iglesia) => { console.log(iglesia) });


  const [activeSection, setActiveSection] = useState("iglesias");

  const renderSection = () => {
    switch (activeSection) {
      case "iglesias":
        return <IglesiasDashboard />;
      case "misiones":
        return <MisionesDashboard />;
      case "actividades":
        return <ActividadesDashboard />;
      case "contenido":
        return <ContenidoDashboard />;
      case "usuarios":
        return <UsuariosDashboard />;
      default:
        return <div>Selecciona una sección</div>;
    }
  };

  return (
    <>

      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md">
          <div className="p-6 text-xl font-bold text-blue-600">Dashboard WBMX </div>
          <nav className="flex flex-col gap-2 p-4">
            <button
              onClick={() => setActiveSection("iglesias")}
              className="text-gray-700 hover:bg-blue-100 px-4 py-2 rounded text-left"
            >
              Iglesias
            </button>
            <button
              onClick={() => setActiveSection("misiones")}
              className="text-gray-700 hover:bg-blue-100 px-4 py-2 rounded text-left"
            >
              Misiones
            </button>
            <button
              onClick={() => setActiveSection("actividades")}
              className="text-gray-700 hover:bg-blue-100 px-4 py-2 rounded text-left"
            >
              Actividades
            </button>
            <button
              onClick={() => setActiveSection("contenido")}
              className="text-gray-700 hover:bg-blue-100 px-4 py-2 rounded text-left"
            >
              Contenido de las actividades
            </button>
            <button
              onClick={() => setActiveSection("usuarios")}
              className="text-gray-700 hover:bg-blue-100 px-4 py-2 rounded text-left"
            >
              Usuarios
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="flex bg-white shadow px-6 py-4">
            <h1 className="text-2xl font-semibold text-gray-800">Panel de Control</h1>
            <Link href="/">
              <GoHome />
            </Link>
          </header>

          {/* Dashboard content */}
          <main className="p-6 overflow-auto">{renderSection()}</main>
        </div>
      </div >

    </>
  );
}



// Tabla de Misiones
//         <div className="pt-4">
//           <h1 className="text-xl font-bold mb-4">Panel de Administración Misiones</h1>
//           <table className="w-full border">
//             <thead>
//               <tr className="border">
//                 <th className="border p-2">Id</th>
//                 <th className="border p-2">Misión</th>
//                 <th className="border p-2">Encargado</th>
//                 <th className="border p-2">Correo</th>
//                 <th className="border p-2">Numero1</th>
//                 <th className="border p-2">Numero2</th>
//                 <th className="border p-2">Dirreción</th>
//                 <th className="border p-2">IglesiaId</th>
//                 <th className="border p-2">Estado</th>
//                 <th className="border p-2">Nuestro Caminar</th>
//                 <th className="border p-2">Horarios</th>
//                 <th className="border p-2">Acciones</th>
//               </tr>
//             </thead>
//             <tbody>
//               {misiones.map((mision: any) => (
//                 <tr key={mision.id} className="border">
//                   <td className="border p-2">{mision.id}</td>
//                   <td className="border p-2">{mision.mision}</td>
//                   <td className="border p-2">{mision.encargado}</td>
//                   <td className="border p-2">{mision.correo}</td>
//                   <td className="border p-2">{mision.numero1}</td>
//                   <td className="border p-2">{mision.numero2}</td>
//                   <td className="border p-2">{mision.direccion}</td>
//                   <td className="border p-2">{mision.iglesiaId}</td>
//                   <td className="border p-2">{mision.estado}</td>
//                   <td className="border p-2">{mision.nuestrocaminar}</td>
//                   <td className="border p-2">
//                     {mision.horarios.map((horario: { dia: string; hora: string }, index: number) => (
//                       <div key={index}>{horario.dia} - {horario.hora}</div>
//                     ))}
//                   </td>
//                   <td className="border p-2">
//                     <button
//                       className="bg-blue-500 text-white p-2 mr-2"
//                       onClick={() => handleEdit(mision)}
//                     >
//                       Editar
//                     </button>
//                     <button
//                       className="bg-red-500 text-white p-2"
//                       onClick={() => handleDelete(mision.id)}
//                     >
//                       Eliminar
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         {/* Formulario para Crear/Editar Mision */}
//         <form onSubmit={handleSubmit} className="mb-10 p-4 bg-black">
//           <h2 className="text-2xl mb-4">{formDataM.id ? "Editar Misión" : "Crear Misión"}</h2>
//           <input
//             type="text"
//             name="Mision"
//             value={formDataM.mision}
//             onChange={handleChangeIg}
//             placeholder="Misión"
//             className="p-2 mb-2 w-full font-bold text-black"
//             required
//           />
//           <input
//             type="text"
//             name="pastor"
//             value={formDataM.encargado}
//             onChange={handleChangeIg}
//             placeholder="Encargado"
//             className="p-2 mb-2 w-full font-bold text-black"
//           />
//           <input
//             type="email"
//             name="correo"
//             value={formDataM.correo}
//             onChange={handleChangeIg}
//             placeholder="Correo"
//             className="p-2 mb-2 w-full font-bold text-black"
//           />
//           <input
//             type="text"
//             name="numero1"
//             value={formDataM.numero1}
//             onChange={handleChangeIg}
//             placeholder="Número 1"
//             className="p-2 mb-2 w-full font-bold text-black"
//           />
//           <input
//             type="text"
//             name="numero2"
//             value={formDataM.numero2}
//             onChange={handleChangeIg}
//             placeholder="Número 2"
//             className="p-2 mb-2 w-full font-bold text-black"
//           />
//           <input
//             type="text"
//             name="direccion"
//             value={formDataM.direccion}
//             onChange={handleChangeIg}
//             placeholder="Dirección"
//             className="p-2 mb-2 w-full font-bold text-black"
//           />

//           {/* Iglesias Id */}

//           <label >Iglesia que estara acargo de la Misión: </label>
//           <Select
//             className="p-2 mb-2 w-full font-bold text-black"
//             id="cars"
//             name="iglesiaId"
//             // value={formDataM.iglesiaId}
//             onChange={handleChangeM}
//           // defaultValue="Iglesia"
//           >
//             {/* <option value="Iglesia" selected disabled>Iglesia</option> */}
//             {iglesias.map((iglesia) => (
//               <option key={iglesia.id} value={iglesia.id}>{iglesia.tabernaculo}</option>
//             ))}
//           </Select>

//           <input
//             type="text"
//             name="estado"
//             value={formDataM.estado}
//             onChange={handleChangeIg}
//             placeholder="Estado"
//             className="p-2 mb-2 w-full font-bold text-black"
//           />
//           <input
//             type="text"
//             name="nuestrocaminar"
//             value={formDataM.nuestrocaminar}
//             onChange={handleChangeIg}
//             placeholder="Nuestro Caminar"
//             className="p-2 mb-2 w-full font-bold text-black"
//           />
//           <div className="mb-2">
//             <label className="font-bold">Horarios:</label>
//             {formDataM.horarios.map((horario, index) => (
//               <div key={index} className="flex gap-2 mb-2">
//                 <input
//                   type="text"
//                   placeholder="Día"
//                   value={horario.dia}
//                   onChange={(e) => handleHorarioChange(index, "dia", e.target.value)}
//                   className="p-2 w-1/2 font-bold text-black"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Hora"
//                   value={horario.hora}
//                   onChange={(e) => handleHorarioChange(index, "hora", e.target.value)}
//                   className="p-2 w-1/2 font-bold text-black"
//                 />
//               </div>
//             ))}
//           </div>
//           <button type="submit" className="p-2 bg-blue-500 text-white">
//             {formDataM.id ? "Actualizar" : "Crear"} Misión
//           </button>
//         </form>
//       </div>
"use client";
import { useState, useEffect } from "react";
import Loading from "@/components/Loading";
import { Select } from "@heroui/react";

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

  return (
    <>
      
      <h1>Bienvenido al Dashboard</h1>
        
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
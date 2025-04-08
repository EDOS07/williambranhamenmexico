'use client'
import ButtonWBMX from "@/components/ButtonWBMX";
import Footer from "@/components/Footer";
import MainMenu from "@/components/MainMenu";
import VideoButtom from "@/components/VideoButtom";
import { useSearchParams } from 'next/navigation'
import { Link } from "@heroui/react";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";


export default function MisionPage() {

    const searchParams = useSearchParams();
    const mision = searchParams.get("Mision");
    const [misiones, setMisiones] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!mision) return;

        const fetchMision = async () => {
            try {
                console.log(`Buscando Misión: ${mision}`);
                const res = await fetch(`/api/misiones?Mision=${encodeURIComponent(mision)}`);
                const data = await res.json();
                console.log("Respuesta de la API:", data);
                setMisiones(data);
            } catch (error) {
                console.error("Error al obtener la misión", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMision();
    }, [mision]);

    if (loading) return <Loading />;
    if (!misiones || misiones.error) return <p>No se encontró la Misión</p>;

    return (
        <div className="bg-white">
            <div style={{
                backgroundImage: `url("/img/misiones/${misiones.mision}.jpg")`,
                backgroundPosition: "-100px 0px",
                backgroundSize: "cover",
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 85%)'
            }} className="h-[60rem] flex flex-col bg-LightBlue justify-center">
                {/* bg-DarkBlueOpacity bg-LightBlue*/}
                <div className="w-full h-full bg-DarkBlueOpacity">
                    <div className="m-96 w-96">
                        <h3 className="font-black text-[46px] leading-none text-center">{misiones.mision}</h3>
                        <p className="font-black text-center text-[19px]">Establecimiento 09 septiembre 2012</p>
                    </div>
                </div>
            </div>
            <div className="mb-10 grid grid-cols-2 justify-center">
                <div className="flex flex-col items-center text-blue-900">
                    <div className="flex flex-col items-center mb-10 ">
                        <h3>contacto</h3>
                        <p className="font-bold">{misiones.encargado}</p>
                        <p>telefono</p>
                        <p>{misiones.numero1}</p>
                    </div>
                    <div className="flex flex-col items-center mb-10">
                        <h3>Ubicacion</h3>
                        <p>{misiones.direccion}</p>
                    </div>
                    <div className="flex flex-col items-center mb-10">
                        <h3>horario</h3>
                        <p className="font-bold">martes, jueves</p>
                        <p>18:00 hr.</p>
                        <p className="font-bold">domingo</p>
                        <p>09:00hr. escuela dominical</p>
                        <p>10:00hr. Servicio General</p>
                    </div>

                </div>
                <div className="flex flex-col items-center">
                    <div className="h-96 w-96 flex flex-col items-center justify-center bg-blue-900 rounded-full font-bold text-6xl">
                        <Link className="text-center mb-8" href="">últimas actividades</Link>
                        <Link href="">galeria</Link>
                    </div>
                    <div>
                        <ButtonWBMX label="1" text="a 1OO Años (Cápsula Informativa)" colortext="text-blue-900" />
                        <ButtonWBMX label="2" text="a 1OO Años (Cápsula Informativa)" colortext="text-blue-900" />
                        <ButtonWBMX label="3" text="a 1OO Años (Cápsula Informativa)" colortext="text-blue-900" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="my-10 grid grid-cols-2 w-4/5">
                    <div className="flex flex-col items-center">
                        <h3 className="font-black text-3xl text-bluetxt">Nuestro Caminar</h3>
                        <p className="text-black capitalize">por Hno. {misiones.encargado}</p>
                    </div>
                    <div className="flex">
                        <VideoButtom></VideoButtom>
                        <VideoButtom></VideoButtom>
                    </div>
                </div>
                <div className="mb-20 w-4/5 flex flex-col justify-center text-bluetxt">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                        viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                        commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Quis ipsu
                    </p>
                    <br />
                    <p>
                        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                        facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                        gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ipsum dolor
                        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis. ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>
                </div>
                <p className="rounded-full bg-blue-900">v</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="mb-10 font-black text-6xl text-bluetxt">escríbenos</p>
                <MainMenu ColorNames="text-bluetxt" colorSection="text-bluetxt" />
                <Footer />
            </div>
        </div>
    );
}

// "use client";

// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function IglesiaPage() {
//   const searchParams = useSearchParams();
//   const tabernaculo = searchParams.get("Tabernaculo");
//   const [iglesia, setIglesia] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!tabernaculo) return;

//     const fetchIglesia = async () => {
//       try {
//         console.log(`Buscando iglesia: ${tabernaculo}`);
//         const res = await fetch(`/api/iglesias?Tabernaculo=${encodeURIComponent(tabernaculo)}`);
//         const data = await res.json();
//         console.log("Respuesta de la API:", data);
//         setIglesia(data);
//       } catch (error) {
//         console.error("Error al obtener la iglesia", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchIglesia();
//   }, [tabernaculo]);

//   if (loading) return <p>Cargando...</p>;
//   if (!iglesia || iglesia.error) return <p>No se encontró la iglesia</p>;

//   return (
//     <div className="bg-black m-64">
//       <h1>{iglesia.tabernaculo}</h1>
//       <p>Pastor: {iglesia.pastor}</p>
//       <p>Correo: {iglesia.correo}</p>
//       <p>Teléfono: {iglesia.numero1}</p>
//       <p>Dirección: {iglesia.direccion}</p>
//       <p>Estado: {iglesia.estado}</p>
//     </div>
//   );
// }

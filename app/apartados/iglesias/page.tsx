import Footer from "@/components/Footer"
import MainMenu from "@/components/MainMenu"
import { Link } from "@heroui/react";
import { prisma } from "@/lib/prisma";


export default async function Page() {
    const misiones = await prisma.mision.findMany();
    const iglesias = await prisma.iglesia.findMany();

    return (
        <div className="bg-backgroundBlue">
            <div className="pt-64">
                <div className="flex flex-col items-center">
                    <h3 className="font-bold text-3xl">efesios 2:20-22</h3>
                    <p className="w-2/3 text-center">
                        Edificados sobre el fundamento de los apóstoles y profetas,
                        <strong> siendo la principal piedra del ángulo Jesucristo mismo, en quien todo el edificio,
                            bien coordinado, va creciendo para ser un templo santo en el Señor; </strong>
                        en quien vosotros también sois juntamente edificados para morada de Dios en el Espíritu.
                    </p>
                </div>

                <p className=" mt-8 flex justify-center uppercase text-xl"> te invitamos a conocernos </p>

                <div className="flex justify-center mb-12">
                    <h3 className="font-bold text-5xl">
                        iglesias y misiones
                    </h3>
                </div>

                <div className="grid grid-cols-3">
                    <div className="flex flex-col items-center uppercase font-black text-4xl text-center">
                        <p>baja california</p>
                        <>
                            {
                                iglesias
                                    .filter((iglesia: any) => iglesia.estado === "Baja California")
                                    .map((iglesia: any) => (
                                        <Link className="font-normal text-xs" href={`./iglesias/iglesia?Tabernaculo=${iglesia.tabernaculo}`} key={iglesia.id}>{iglesia.tabernaculo}</Link>
                                    ))
                            }
                        </>
                    </div>
                    <div className="flex flex-col items-center uppercase font-black text-4xl text-center">
                        <p>cdmx</p>
                        <>
                            {
                                iglesias
                                    .filter((iglesia: any) => iglesia.estado === "CDMX")
                                    .map((iglesia: any) => (
                                        <Link className="font-normal text-xs" href={`./iglesias/iglesia?Tabernaculo=${iglesia.tabernaculo}`} key={iglesia.id}>{iglesia.tabernaculo}</Link>
                                    ))
                            }
                        </>
                    </div>
                    <div className="flex flex-col items-center uppercase font-black text-4xl text-center">
                        <p>coahuila</p>
                        <>
                            {
                                iglesias
                                    .filter((iglesia: any) => iglesia.estado === "Coahuila")
                                    .map((iglesia: any) => (
                                        <Link className="font-normal text-xs" href={`./iglesias/iglesia?Tabernaculo=${iglesia.tabernaculo}`} key={iglesia.id}>{iglesia.tabernaculo}</Link>
                                    ))
                            }
                        </>
                    </div>
                    <div className="flex flex-col items-center uppercase font-black text-4xl text-center">
                        <p>chiapas</p>
                        {
                            iglesias
                                .filter((iglesia: any) => iglesia.estado === "Chiapas")
                                .map((iglesia: any) => (
                                    <Link className="font-normal text-xs" href={`./iglesias/iglesia?Tabernaculo=${iglesia.tabernaculo}`} key={iglesia.id}>{iglesia.tabernaculo}</Link>
                                ))
                        }
                        {
                            misiones
                                .filter((mision: any) => mision.estado === "Chiapas")
                                .map((mision: any) => (
                                    <Link className="font-normal text-xs" href={`./iglesias/mision?Mision=${mision.mision}`} key={mision.id}>{mision.mision}</Link>
                                ))
                        }

                    </div>
                    <div className="flex flex-col items-center uppercase font-black text-4xl text-center">
                        <p>estado de méxico</p>
                        <>
                            {
                                iglesias
                                    .filter((iglesia: any) => iglesia.estado === "Estado de México")
                                    .map((iglesia: any) => (
                                        <Link className="font-normal text-xs" href={`./iglesias/iglesia?Tabernaculo=${iglesia.tabernaculo}`} key={iglesia.id}>{iglesia.tabernaculo}</Link>
                                    ))
                            }
                        </>
                    </div>
                    <div className="flex flex-col items-center uppercase font-black text-4xl text-center">
                        <p>guerrero</p>
                        <>
                            {
                                iglesias
                                    .filter((iglesia: any) => iglesia.estado === "Guerrero")
                                    .map((iglesia: any) => (
                                        <Link className="font-normal text-xs" href={`./iglesias/iglesia?Tabernaculo=${iglesia.tabernaculo}`} key={iglesia.id}>{iglesia.tabernaculo}</Link>
                                    ))
                            }
                        </>
                        <>
                            {
                                misiones
                                    .filter((mision: any) => mision.estado === "Guerrero")
                                    .map((mision: any) => (
                                        <Link className="font-normal text-xs" href={`./iglesias/mision?Mision=${mision.mision}`} key={mision.id}>{mision.mision}</Link>
                                    ))
                            }
                        </>
                    </div>
                    <div className="flex flex-col items-center uppercase font-black text-4xl text-center">
                        <p>hidalgo</p>
                        <>
                            {
                                iglesias
                                    .filter((iglesia: any) => iglesia.estado === "Hidalgo")
                                    .map((iglesia: any) => (
                                        <Link className="font-normal text-xs" href={`./iglesias/iglesia?Tabernaculo=${iglesia.tabernaculo}`} key={iglesia.id}>{iglesia.tabernaculo}</Link>
                                    ))
                            }
                        </>
                        <>
                            {
                                misiones
                                    .filter((mision: any) => mision.estado === "Hidalgo")
                                    .map((mision: any) => (
                                        <Link className="font-normal text-xs" href={`./iglesias/mision?Mision=${mision.mision}`} key={mision.id}>{mision.mision}</Link>
                                    ))
                            }
                        </>
                    </div>
                    <div className="flex flex-col items-center uppercase font-black text-4xl text-center">
                        <p>michoacán</p>
                        <>
                            {
                                iglesias
                                    .filter((iglesia: any) => iglesia.estado === "Michoacán")
                                    .map((iglesia: any) => (
                                        <Link className="font-normal text-xs" href={`./iglesias/iglesia?Tabernaculo=${iglesia.tabernaculo}`} key={iglesia.id}>{iglesia.tabernaculo}</Link>
                                    ))
                            }
                        </>
                        <>
                            {
                                misiones
                                    .filter((mision: any) => mision.estado === "Michoacán")
                                    .map((mision: any) => (
                                        <Link className="font-normal text-xs" href={`./iglesias/mision?Mision=${mision.mision}`} key={mision.id}>{mision.mision}</Link>
                                    ))
                            }
                        </>
                    </div>
                    <div className="flex flex-col items-center uppercase font-black text-4xl text-center">
                        <p>morelos</p>
                        <>
                            {
                                iglesias
                                    .filter((iglesia: any) => iglesia.estado === "Morelos")
                                    .map((iglesia: any) => (
                                        <Link className="font-normal text-xs" href={`./iglesias/iglesia?Tabernaculo=${iglesia.tabernaculo}`} key={iglesia.id}>{iglesia.tabernaculo}</Link>
                                    ))
                            }
                        </>
                        <>
                            {
                                misiones
                                    .filter((mision: any) => mision.estado === "Morelos")
                                    .map((mision: any) => (
                                        <Link className="font-normal text-xs" href={`./iglesias/mision?Mision=${mision.mision}`} key={mision.id}>{mision.mision}</Link>
                                    ))
                            }
                        </>
                    </div>
                    <div className="flex flex-col items-center uppercase font-black text-4xl text-center">
                        <p>nuevo león</p>
                        <>
                            {
                                iglesias
                                    .filter((iglesia: any) => iglesia.estado === "Nuevo León")
                                    .map((iglesia: any) => (
                                        <Link className="font-normal text-xs" href={`./iglesias/iglesia?Tabernaculo=${iglesia.tabernaculo}`} key={iglesia.id}>{iglesia.tabernaculo}</Link>
                                    ))
                            }
                        </>
                        <>
                            {
                                misiones
                                    .filter((mision: any) => mision.estado === "Nuevo León")
                                    .map((mision: any) => (
                                        <Link className="font-normal text-xs" href={`./iglesias/mision?Mision=${mision.mision}`} key={mision.id}>{mision.mision}</Link>
                                    ))
                            }
                        </>
                    </div>
                    <div className="flex flex-col items-center uppercase font-black text-4xl text-center">
                        <p>Oaxaca</p>
                        <>
                            {
                                iglesias
                                    .filter((iglesia: any) => iglesia.estado === "Oaxaca")
                                    .map((iglesia: any) => (
                                        <Link className="font-normal text-xs" href={`./iglesias/iglesia?Tabernaculo=${iglesia.tabernaculo}`} key={iglesia.id}>{iglesia.tabernaculo}</Link>
                                    ))
                            }
                        </>
                        <>
                            {
                                misiones
                                    .filter((mision: any) => mision.estado === "Oaxaca")
                                    .map((mision: any) => (
                                        <Link className="font-normal text-xs" href={`./iglesias/mision?Mision=${mision.mision}`} key={mision.id}>{mision.mision}</Link>
                                    ))
                            }
                        </>
                    </div>
                    <div className="flex flex-col items-center uppercase font-black text-4xl text-center">
                        <p>puebla</p>
                        <>
                            {
                                iglesias
                                    .filter((iglesia: any) => iglesia.estado === "Puebla")
                                    .map((iglesia: any) => (
                                        <Link className="font-normal text-xs" href={`./iglesias/iglesia?Tabernaculo=${iglesia.tabernaculo}`} key={iglesia.id}>{iglesia.tabernaculo}</Link>
                                    ))
                            }
                        </>
                        <>
                            {
                                misiones
                                    .filter((mision: any) => mision.estado === "Puebla")
                                    .map((mision: any) => (
                                        <Link className="font-normal text-xs" href={`./iglesias/mision?Mision=${mision.mision}`} key={mision.id}>{mision.mision}</Link>
                                    ))
                            }
                        </>
                    </div>
                    <div className="mt-14 col-span-3 flex justify-center gap-96">
                        <div className="flex flex-col items-center uppercase font-black text-4xl text-center">
                            <p>querétaro</p>
                            <>
                                {
                                    iglesias
                                        .filter((iglesia: any) => iglesia.estado === "Querétaro")
                                        .map((iglesia: any) => (
                                            <Link className="font-normal text-xs" href={`./iglesias/iglesia?Tabernaculo=${iglesia.tabernaculo}`} key={iglesia.id}>{iglesia.tabernaculo}</Link>
                                        ))
                                }
                            </>
                            <>
                                {
                                    misiones
                                        .filter((mision: any) => mision.estado === "Querétaro")
                                        .map((mision: any) => (
                                            <Link className="font-normal text-xs" href={`./iglesias/mision?Mision=${mision.mision}`} key={mision.id}>{mision.mision}</Link>
                                        ))
                                }
                            </>
                        </div>
                        <div className="flex flex-col items-center uppercase font-black text-4xl text-center">
                            <p>veracruz</p>
                            <>
                                {
                                    iglesias
                                        .filter((iglesia: any) => iglesia.estado === "Veracruz")
                                        .map((iglesia: any) => (
                                            <Link className="font-normal text-xs" href={`./iglesias/iglesia?Tabernaculo=${iglesia.tabernaculo}`} key={iglesia.id}>{iglesia.tabernaculo}</Link>
                                        ))
                                }
                            </>
                            <>
                                {
                                    misiones
                                        .filter((mision: any) => mision.estado === "Veracruz")
                                        .map((mision: any) => (
                                            <Link className="font-normal text-xs" href={`./iglesias/mision?Mision=${mision.mision}`} key={mision.id}>{mision.mision}</Link>
                                        ))
                                }
                            </>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white flex flex-col items-center" style={{ clipPath: 'polygon(0% 0%, 100% 15%, 100% 100%, 0% 100%)' }}>
                <p className="mt-24 text-blue-950 text-center w-[29%]">nosotros, como también <span className="font-black">las iglesias hermanas </span>de este
                    tabernáculo, <span className="text-bluetxt font-black">estamos esforzándonos por traer a nuestro pueblo </span><span className="font-black">a un mejor
                        compañerismo con Cristo.</span>
                </p>
                <p className="text-blue-950 uppercase text-xl">
                    Ése es nuestro propósito
                </p>
                <p className="text-blue-950">
                    59-1216 - ¿Qué Es El Espíritu Santo?

                </p>
                <p className="text-blue-950">
                    Rev. William Marrion Branham
                </p>
                <p className="my-10 font-black text-6xl text-bluetxt">
                    escríbenos
                </p>
                <MainMenu colorSection="1" ColorNames="1" />
            </div>
            <div>
                <Footer />
            </div>

        </div>
    )
}   
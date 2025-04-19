'use client'
import Image from 'next/image'
import { Link } from "@heroui/react";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence, } from 'framer-motion';
import { FaChevronRight, FaChevronLeft  } from 'react-icons/fa';
import HoverImage from "@/components/HoverImagen";

// Slides Principal

const slides = [
    { src: '/img/prueba.jpg', label: 'Quien es WMB', href: 'menuPrincipal/QuienEsWMB' },
    { src: '/slider/slide2.jpg', label: 'Isaías 54', href: 'menuPrincipal/isaias54' },
    { src: '/slider/slide3.jpg', label: 'WBMX', href: 'menuPrincipal/WBMX' },
    { src: '/slider/slide4.jpg', label: 'La Nube', href: 'menuPrincipal/laNube' },
    { src: '/slider/slide5.jpg', label: 'Ministerio Apostoico', href: 'menuPrincipal/ministerioApostolico' },
];

// Notas al dia slider arreglo provisional

const eventos = [
    {
        id: 1,
        ciudad: "CDMX",
        fechas: ["06, 07 y 08", "sept."],
        imagen: "/img/prueba.jpg",
        numero: "04",
    },
    {
        id: 2,
        ciudad: "Guadalajara",
        fechas: ["15, 16 y 17", "oct."],
        imagen: "/img/prueba_2.jpg",
        numero: "05",
    },
    {
        id: 3,
        ciudad: "Monterrey",
        fechas: ["21, 22 y 23", "nov."],
        imagen: "/img/prueba_3.jpg",
        numero: "06",
    },
    {
        id: 4,
        ciudad: "Saltillo",
        fechas: ["21, 22 y 23", "nov."],
        imagen: "/img/prueba_4.jpg",
        numero: "06",
    },
    {
        id: 5,
        ciudad: "Chiapas",
        fechas: ["21, 22 y 23", "nov."],
        imagen: "/img/prueba_5.jpg",
        numero: "06",
    },
    {
        id: 6,
        ciudad: "Veracruz",
        fechas: ["21, 22 y 23", "nov."],
        imagen: "/img/prueba_6.jpg",
        numero: "06",
    },
    {
        id: 7,
        ciudad: "Michocan",
        fechas: ["21, 22 y 23", "nov."],
        imagen: "/img/prueba_7.jpg",
        numero: "06",
    }
]

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 300 : -300,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        x: direction < 0 ? 300 : -300,
        opacity: 0,
    }),
}

export default function Page() {


    // Slides Principal

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % slides.length);
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    // Notas al dia slider

    const [[notaIndex, direction], setNotaIndex] = useState<[number, number]>([0, 0])
    const [notaClicked, setNotaClicked] = useState(false)

    const next = () => {
        setNotaClicked(true)
        setNotaIndex(([prev]) => [(prev + 1) % eventos.length, 1])
    }

    const prev = () => {
        setNotaClicked(true)
        setNotaIndex(([prev]) => [(prev - 1 + eventos.length) % eventos.length, -1])
    }

    useEffect(() => {
        if (notaClicked) return
        const timer = setInterval(() => {
            setNotaIndex(([prev]) => [(prev + 1) % eventos.length, 1])
        }, 5000)
        return () => clearInterval(timer)
    }, [notaClicked])

    const notaActual = eventos[notaIndex]


    return (
        <>
            <div className="relative h-[55rem]  overflow-hidden">
                {/* Imagen Slider con transición */}
                <div className="absolute inset-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={slides[index].src}
                            className="absolute inset-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <Image
                                src={slides[index].src}
                                alt={slides[index].label}
                                fill
                                priority
                                className="object-cover"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Fondo oscuro para contraste */}
                <div className="absolute inset-0 bg-black/40 z-0" />

                {/* Contenido sobre la imagen */}
                <div className="relative top-96 z-10 flex flex-col items-center text-center w-3/4 gap-2 mx-auto">
                    <h1 className="text-white text-[45px]/[2.5rem] font-bold">William Branham en México</h1>
                    <p className="mb-5 text-white tracking-[.70em] text-xl">La simiente está viva</p>
                    <p className="ml-6 text-white text-[45px]/[17px] tracking-[.75em] font-normal uppercase">Bienvenidos</p>

                    <nav className="w-2/3 grid grid-rows-2 grid-flow-col justify-between font-thin text-white text-base py-8 gap-2">
                        {slides.map((item, i) => (
                            <motion.div
                                key={item.href}
                                className={`transition-colors duration-500 ${i === index ? 'text-yellow-300 font-semibold' : 'text-white'
                                    }`}
                                animate={i === index ? { scale: 1.1 } : { scale: 1 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <Link href={item.href}>{item.label}</Link>
                            </motion.div>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Apartados  */}

            <div className='h-[58rem]'>
                <div className='h-16'></div>
                <div className="flex items-center flex-col mb-12 h-48 text-black">
                    <p>Despojándonos Para Despegar</p>
                    <h1 className="text-2xl uppercase"><strong>Hebreos 12</strong></h1>
                    <p className="text-center px-96">Por tanto, nosotros también, teniendo en derredor nuestro tan grande nube de testigos, despojémonos de todo
                        peso y del pecado que nos asedia, y corramos con paciencia la carrera que tenemos por delante, 2
                        <strong> puestos los ojos en Jesús, el autor y consumador de la fe, el cual por el gozo puesto delante de él sufrió la cruz,</strong>
                        menospreciando el oprobio, y se sentó a la diestra del trono de Dios.</p>
                </div>

                <main style={{
                    backgroundImage: `url("/img/Apartados.jpg")`,
                    backgroundPosition: "0px -210px",
                    backgroundSize: "cover",
                    clipPath: 'polygon(0% 0%, 100% 15%, 100% 100%, 0% 100%)'
                }} className="grid grid-cols-4 h-[40rem] divide-x-4 divide-black">

                    <div className="relative group flex items-center justify-center overflow-hidden" >
                        <HoverImage imageUrl="/img/apartados/iglesias.jpg" directionURL="apartados/iglesias" txtUrl="iglesias" txt="efesios 2:20-22" />
                    </div>

                    <div className="relative group flex items-center justify-center overflow-hidden">
                        <HoverImage imageUrl="/img/apartados/CMRRadio.jpg" directionURL="apartados/CMR" txtUrl="CMR Radio" txt="la voz de la simiente" />
                    </div>

                    <div className="relative group flex items-center justify-center overflow-hidden">
                        <HoverImage imageUrl="/img/apartados/EspacioNaranja.jpg" directionURL="apartados/espacioNaranja" txtUrl="espacio naranja" txt="jóvenes en movimiento" />
                    </div>

                    <div className="relative group flex items-center justify-center overflow-hidden">
                        <HoverImage imageUrl="/img/apartados/PequeñosGuerreros.jpg" directionURL="apartados/pequenosGuerreros" txtUrl="pequeños guerreros" txt="como uno de ellos" />
                    </div>

                </main>
            </div>

            {/* Al dia */}

            <div className='h-[60rem] flex flex-col items-center'>
                <div className='h-48'></div>
                <h2 className="w-9/12 h-32 font-bold text-[4.5rem] text-sky-600">notas al día</h2>

                <div className="relative w-full h-96 mb-14 overflow-hidden">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={notaActual.id}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.4 }}
                            className="absolute w-full h-full"
                        >
                            <Image
                                src={notaActual.imagen}
                                alt={notaActual.ciudad}
                                fill
                                className="object-cover"
                            />

                            <div className="absolute flex flex-col top-32 left-52 text-white">
                                <p className="font-bold text-4xl text-center">{notaActual.ciudad}</p>
                                <p className="font-bold text-4xl text-center">{notaActual.fechas[0]}</p>
                                <p className="font-bold text-4xl text-end">{notaActual.fechas[1]}</p>
                            </div>
                            <div className='absolute -bottom-10 right-40 text-white'>
                                <p className="font-bold text-8xl">{notaActual.numero}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Botones */}
                    <button onClick={prev} className="absolute left-10 top-1/2 transform -translate-y-1/2 text-white text-4xl z-10">
                        <FaChevronLeft />
                    </button>
                    <button onClick={next} className="absolute right-10 top-1/2 transform -translate-y-1/2 text-white text-4xl z-10">
                        <FaChevronRight />
                    </button>
                </div>

                <div className='w-4/5 flex flex-col'>
                    <h2 className="font-bold text-3xl text-sky-600">Pláticas de Asentamiento</h2>
                    <p className='text-sky-600'>
                        Han transcurrido 2,444 días de aquel 31 de diciembre de 2017 en donde el Espíritu Santo a través del Ministerio Apostólico de nuestro amado Hno. Alfredo González
                        Domínguez hiciera una solemne advertencia; <strong className='text-black'>checar nuestras bases. Estamos a punto de cerrar un ciclo de 7 años que dentro de la numerología de Dios el siete se refiere
                            a un número completo.</strong> Una cuenta regresiva que tan solo cuenta ya con menos de cien días para concluir este glorioso año 2024.
                    </p>
                    <Link href='#' className="font-black text-end text-2xl text-sky-600">...</Link>
                </div>
            </div>

            {/* Section magazine */}

            <div className="h-[60rem] text-center">
                <div style={{ backgroundImage: `url("/img/prueba_2.jpg")`, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 80%)' }} className="mt-6 w-full h-[40rem] flex flex-col justify-center">
                    <h2 className="font-black text-4xl mb-6">juntos somos + fuertes</h2>
                    <p className=" px-72">Por tanto, nosotros también, teniendo en derredor nuestro tan grande nube de testigos,
                        despojémonos de todo peso y del pecado que nos asedia, y corramos con paciencia la carrera que tenemos por delante,
                        <strong>puestos los ojos en Jesús, el autor y consumador de la fe, el cual por el gozo puesto delante de él sufrió la cruz, </strong>
                        menospreciando el oprobio, y se sentó a la diestra del trono de Dios.
                    </p>
                </div>
                <div>
                    <h2 className="font-bold text-4xl text-sky-800" >magazine wbmx</h2>
                    <p className="font-black text-6xl text-sky-600">escríbenos</p>
                </div>
            </div>
        </>
    )
}
'use client'
import { Link } from "@heroui/react";

interface Colortext {
    colorSection?: string;
    ColorNames?: string;
}

export default function MainMenu({ colorSection, ColorNames }: Colortext) {
    return <div className={`mb-12 w-9/12 pb-5 flex flex-col items-center ${colorSection ? "text-bluetxt" : "text-white"}`}>
        <hr className={`h-1 w-4/5 text-lg ${ColorNames ? "bg-bluetxt" : "bg-white"} `} />
        <div className="mt-12 grid grid-cols-6 grid-flow-col w-4/5">
            <div className="flex items-center">
                <h2 className="font-extrabold text-4xl">wbmx</h2>
            </div>
            <div className="flex flex-col items-end">
                <h2 className={`${colorSection ? "text-black" : "text-white"} `}>solo creer</h2>
                <Link className="my-3" href="/menuPrincipal/QuienEsWMB">¿quien es WMB?</Link>
                <Link className="" href="/menuPrincipal/isaias54">Isaías 54</Link>
                <Link className="mb-3" href="/menuPrincipal/WBMX">WBMX</Link>
                <Link className="mb-3" href="/menuPrincipal/laNube">La Nube</Link>
                <Link className="" href="/menuPrincipal/ministerioApostolico">Ministerio Apostoico</Link>
            </div>
            <div className="flex flex-col items-end">
                <h2 className={`${colorSection ? "text-black" : "text-white"} `}>WB en México</h2>
                <Link className="my-3" href="/menuPrincipal/QuienEsWMB">Iglesias</Link>
                <Link className="" href="/menuPrincipal/QuienEsWMB">CMR Radio</Link>
                <Link className="mb-3" href="/menuPrincipal/QuienEsWMB">espacio naraja</Link>
                <Link className="" href="/menuPrincipal/QuienEsWMB">pequeños guerreros</Link>
            </div>
            <div className="flex flex-col items-end">
                <h2 className={`${colorSection ? "text-black" : "text-white"} `}>la simiente esta viva</h2>
                <Link className="my-3" href="/menuPrincipal/QuienEsWMB">eventos</Link>
                <Link className="" href="/menuPrincipal/QuienEsWMB">el granero WBMX</Link>
            </div>
            <div className="flex flex-col items-end">
                <h2 className={`${colorSection ? "text-black" : "text-white"} `}>media WBMX</h2>
                <Link className="my-3" href="/menuPrincipal/QuienEsWMB">en vivo</Link>
                <Link className="" href="/menuPrincipal/QuienEsWMB">alabanza y adoración</Link>
                <Link className="mb-3" href="/menuPrincipal/QuienEsWMB">podcast</Link>
                <Link className="" href="/menuPrincipal/QuienEsWMB">app wbmx</Link>
            </div>
            <div className="flex flex-col items-end">
                <h2 className={`${colorSection ? "text-black" : "text-white"} `}>todo es posible</h2>
                <Link className="my-3" href="/menuPrincipal/QuienEsWMB">tarjeta de oración</Link>
                <Link className="" href="/menuPrincipal/QuienEsWMB">acción de gracias</Link>
                <Link className="" href="/menuPrincipal/QuienEsWMB">testimonios</Link>
            </div>
        </div>
    </div>
}
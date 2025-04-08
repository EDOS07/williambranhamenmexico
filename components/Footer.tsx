'use client'
import { Button, Link } from "@heroui/react";
import { FaFacebookSquare, FaYoutube, FaSpotify, FaInstagram } from "react-icons/fa";

export default function Footer() {

    return (
        <>
            <div>
            <div className="w-full h-14 flex flex-col  items-center justify-center">
                <div className="flex mb-2">
                    <Button
                        as={Link}
                        href="https://www.youtube.com/@WMBenMexico"
                        isIconOnly
                        variant="light"
                    >
                        <div className="w-8 h-4 mb-1 text-white hover:text-red-400">VoR</div>
                    </Button>
                    <Button
                        as={Link}
                        href="https://www.youtube.com/@WMBenMexico"
                        isIconOnly
                        variant="light"
                    >
                        <FaYoutube className="w-8 h-4 text-white hover:text-red-400" />
                    </Button>
                    <Button
                        as={Link}
                        href="https://www.facebook.com/williambranhamenmexico"
                        isIconOnly
                        variant="light"
                    >
                        <FaFacebookSquare className="w-8 h-4 text-white hover:text-blue-400" />
                    </Button>
                    <Button
                        as={Link}
                        href="https://open.spotify.com/show/4o9HDhI4gMOvydgTNupVNj?si=70294af36dc44b18"
                        isIconOnly
                        variant="light"
                    >
                        <FaSpotify className="w-8 h-4 text-white hover:text-[#44cf5b9f]" />
                    </Button>
                    <Button
                        as={Link}
                        href="https://www.instagram.com/wbenmexico?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        isIconOnly
                        variant="light"
                    >
                        <FaInstagram className="w-8 h-4 text-white hover:text-[#cf44a5a2]" />
                    </Button>
                </div>
                <p className="text-center">Derechos Reservados <strong>Centro Misionero de Restauración</strong>.  AViso de Privacidad.</p>
            </div>
        </div>
        </>
    )
}
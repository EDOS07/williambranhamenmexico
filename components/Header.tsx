'use client';
import { Link } from "@heroui/react";
import DropDownProfile from "@/components/DropDownProfile";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


export default function Header() {

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Ocultar por PATH

  const pathname = usePathname();
  const hideHeaderRoutes = ["/admin", "/admin/dashboard"];

  if (hideHeaderRoutes.includes(pathname)) return null;

  // Ocultar por scroll

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scroll hacia abajo
        setShowHeader(false);
      } else {
        // Scroll hacia arriba
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 w-full flex items-center justify-between pr-12 pl-12 z-[100] transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <Link className="m-10" href="/">
        <img src="/img/WBMX_ONLY.png" />
      </Link>

      <div className="flex gap-3 items-center">
        <DropDownProfile
          nameSections={[
            {
              name: 'La Simiente es viva',
              key: 4,
              section: [
                { label: 'eventos', key: 1, href: '/section1' },
                { label: 'biblioteca WBMX', key: 2, href: '/section2' },
              ],
            },
          ]}
        />
        <DropDownProfile
          nameSections={[
            {
              name: 'Media WBMX',
              key: 5,
              section: [
                { label: 'en vivo', key: 1, href: '/section1' },
                { label: 'alabanza & adoración', key: 2, href: '/section2' },
                { label: 'podcast', key: 3, href: '/section3' },
              ],
            },
          ]}
        />
        <DropDownProfile
          nameSections={[
            {
              name: 'Todo es Posible',
              key: 6,
              section: [
                { label: 'tarjeta de adoración', key: 1, href: '/section1' },
                { label: 'acción de gracias', key: 2, href: '/section2' },
                { label: 'testimonio', key: 3, href: '/section3' },
              ],
            },
          ]}
        />
      </div>
    </header>
  )
}
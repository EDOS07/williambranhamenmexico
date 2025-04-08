// components/SliderMenu.tsx
'use client';

import { useEffect, useState } from 'react';
import styles from './SliderMenu.module.css'; // puedes usar CSS Modules o Tailwind

const botonesSlide = ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho'];

export default function SliderMenu() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % botonesSlide.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="navigation" className={styles.navigation}>
      {botonesSlide.map((name, index) => (
        <div
          key={name}
          className={`${styles.boton} ${current === index ? styles.active : styles.inactive}`}
        >
          <a>
            <div className={`contenedorSlide${index + 1}`}>Botón {name}</div>
          </a>
        </div>
      ))}
    </div>
  );
}

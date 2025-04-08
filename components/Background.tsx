import Image from 'next/image'
import prueba from '../public/img/prueba.jpg'

export default function Background() {
    return (
        <div className="absolute inset-0 -z-10">
            <Image
                alt="Mountains"
                src={prueba}
                placeholder="blur"
                quality={100}
                fill
                sizes="100vw"
                style={{
                    objectFit: 'cover',
                }}
            />
        </div >
    );
}
import Image from 'next/image';


export default function Page() {
    return (
        <div >
            <div className='pt-64 flex flex-col justify-center content-center items-center'>
                {/* <Image
                width={1280}
                height={720}
                src="/img/apartados/CMR_LaVozDeLaSimiente.jpg" alt='CMR'
            /> */}

                <iframe
                    src="https://castbox.fm/app/castbox/player/id3726484?v=8.22.11&autoplay=0"
                />

                <iframe
                    src="https://playerssl.radioonlinehd.com/sh2/8063/"
                />

                <iframe className='rounded-xl' src="https://open.spotify.com/embed/episode/2QCQbiLQk0h31T6LrJFMC5?utm_source=generator"
                    width="100%" height="352"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"></iframe>

            </div>
        </div>
    );
}
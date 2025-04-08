import Link from "next/link";

interface HoverImageProps {
    imageUrl: string;
    directionURL?: string;
    txtUrl?: string;
    txt?: string;
}


export default function HoverImage({ imageUrl, txtUrl, txt, directionURL }: HoverImageProps) {
    return (
        <>            
            <div
                style={{ backgroundImage: `url(${imageUrl})` }}
                className="hidden group-hover:block absolute top-0 left-0 w-full h-full bg-cover bg-center"
            >                
            </div>           
            <div className="relative z-10">
                <Link href={directionURL || "#"} className="relative font-black text-4xl text-center top-36 hover:text-slate-950">
                    {txtUrl}

                    <p className="font-normal text-base">{txt}</p>
                </Link>
            </div>
        </>
    );
};
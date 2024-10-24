import Image from "next/image";


export default async function OffersBanner() {
    return (
        <div className="w-full pl-5 pr-5 h-1/2">
            <div className="block md:hidden">
                <Image src = "/images/banners/free-gift-banner.jpeg" alt="banner" width={0} height={0} sizes="100vw" className="w-full object-cover h-auto"/>
            </div>
            <div className="hidden md:block">
                <Image src = "/images/banners/free-gift-banner.jpeg" alt="banner" width={0} height={0} sizes="100vw" className="w-full"/>
            </div>
        </div>
    );
}
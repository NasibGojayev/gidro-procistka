"use client";

import dynamic from "next/dynamic";

const ContactMap = dynamic(() => import("./ContactMap"), {
    loading: () => <div className="w-full h-[400px] bg-[#252525] animate-pulse rounded-xl mb-8"></div>,
    ssr: false
});

export default function MapWrapper() {
    return <ContactMap />;
}

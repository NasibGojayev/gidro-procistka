import { homePageData } from "@/content/pages";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Наши сотрудники | ГидроРобот",
    description: "Команда профессиональных сантехников компании ГидроРобот."
};

export default function StaffPage() {
    const { team } = homePageData;

    return (
        <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6">{team.title}</h3>

            {/* Staff Grid */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {team.members.map((member, index) => (
                    <li key={index} className="bg-[#252525] border border-[#333] rounded-xl overflow-hidden hover:border-gray-600 transition-colors group">
                        {/* Avatar Placeholder / Image */}
                        <div className="aspect-[3/4] relative bg-[#333]">
                            {member.photo ? (
                                <Image
                                    src={member.photo}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-500">
                                    No Photo
                                </div>
                            )}
                        </div>

                        {/* Info */}
                        <div className="p-4">
                            <div className="text-xl font-bold mb-1">{member.name}</div>
                            <div className="text-sm text-gray-400 leading-snug">{member.role}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

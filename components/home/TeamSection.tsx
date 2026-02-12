import { homePageData } from "@/content/pages";
import { User } from "lucide-react";

export function TeamSection() {
    const { team } = homePageData;

    return (
        <div className="main-team bg-[#f9f9f9] padding-default py-16 font-sans">
            <div className="container mx-auto px-4 md:px-6">
                <div className="row mb-12">
                    <div className="col-xs-12 col-md-8">
                        <h2 className="text-3xl font-bold text-primary">Наши специалисты</h2>
                    </div>
                </div>

                <div className="row row-equal peoples grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {team.members.map((member, index) => (
                        <div key={index} className="col-xs-12 col-sm-4 col-md-4 col-lg-3">
                            <div className="people bg-white shadow-sm hover:shadow-md transition-shadow h-full pb-4">
                                {/* Photo using background-image as requested */}
                                <div
                                    className="people--photo h-[260px] bg-center bg-cover mb-4"
                                    style={{ backgroundImage: `url('${member.photo}')` }}
                                />

                                <div className="people--name text-center mb-2">
                                    <span className="text-xl font-bold text-gray-800 border-b-2 border-transparent hover:border-primary transition-colors cursor-default">
                                        {member.name}
                                    </span>
                                </div>

                                <div className="people--info text-center text-gray-600 text-sm px-4">
                                    {member.role}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

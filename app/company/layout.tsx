import { CompanySidebar } from "@/components/company/CompanySidebar";
import { CompanyHeader } from "@/components/company/CompanyHeader";

export default function CompanyLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-h-screen bg-[#1c1c1c] text-white pt-32 pb-20">
            <div className="container mx-auto px-4 md:px-6">
                <CompanyHeader />

                <div className="flex flex-col lg:flex-row">
                    <CompanySidebar />
                    <section className="flex-1">
                        {children}
                    </section>
                </div>
            </div>
        </main>
    );
}

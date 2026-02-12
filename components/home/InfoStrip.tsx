import { Button } from "@/components/ui/button";

export function InfoStrip() {
    return (
        <section className="main-info mt-12 mb-12 bg-white font-sans border-t border-b border-gray-100 py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="col-xs-12 col-md-12 text-center md:text-left">
                        <p className="text-lg text-gray-700">
                            Остались вопросы? Наши специалисты дежурят каждый день, без выходных и праздников.
                            <Button
                                className="ml-4 bg-primary hover:bg-primary/90 text-white font-bold uppercase text-xs h-8 px-4 rounded-[2px]"
                                asChild
                            >
                                <a href="/contact">Оставить заявку</a>
                            </Button>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

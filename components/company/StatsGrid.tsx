export function StatsGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#252525] p-6 rounded-xl border border-[#333] text-center">
                <div className="text-4xl font-bold text-primary mb-2">136</div>
                <div className="text-gray-400 text-sm">Выездов за последний месяц</div>
            </div>
            <div className="bg-[#252525] p-6 rounded-xl border border-[#333] text-center">
                <div className="text-4xl font-bold text-primary mb-2">10000+</div>
                <div className="text-gray-400 text-sm">Довольных клиентов</div>
            </div>
            <div className="bg-[#252525] p-6 rounded-xl border border-[#333] text-center">
                <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                <div className="text-gray-400 text-sm">Выездов по Уфе</div>
            </div>
        </div>
    );
}

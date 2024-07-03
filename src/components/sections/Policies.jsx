import { ShieldCheck, Truck, Undo2, UserRound } from 'lucide-react';

const Policies = () => {
    return (
        <div className="container">
            <div className="grid grid-cols-4 gap-5">
                <div className="flex p-6 transition-transform duration-150 cursor-pointer gap-x-4 bg-slate-100 rounded-2xl hover:shadow-sm hover:-translate-y-2">
                    <div className="flex items-center justify-center">
                        <Truck size={64} strokeWidth={0.8} />
                    </div>
                    <div>
                        <h3 className="text-lg font-medium">
                            Shipping Worldwide
                        </h3>
                        <p className="mt-2 text-sm leading-5 text-slate-600">
                            Free shipping on all US order or order above $100
                        </p>
                    </div>
                </div>

                <div className="flex p-6 transition-transform duration-150 cursor-pointer gap-x-4 bg-slate-100 rounded-2xl hover:shadow-sm hover:-translate-y-2">
                    <div className="flex items-center justify-center">
                        <Undo2 size={64} strokeWidth={0.8} />
                    </div>
                    <div>
                        <h3 className="text-lg font-medium">14 Days Return</h3>
                        <p className="mt-2 text-sm leading-5 text-slate-600">
                            Simply return it within 30 days for an exchange.
                        </p>
                    </div>
                </div>

                <div className="flex p-6 transition-transform duration-150 cursor-pointer gap-x-4 bg-slate-100 rounded-2xl hover:shadow-sm hover:-translate-y-2">
                    <div className="flex items-center justify-center">
                        <ShieldCheck size={64} strokeWidth={0.8} />
                    </div>
                    <div>
                        <h3 className="text-lg font-medium">
                            Security Payment
                        </h3>
                        <p className="mt-2 text-sm leading-5 text-slate-600">
                            We ensure secure payment with PEV
                        </p>
                    </div>
                </div>

                <div className="flex p-6 transition-transform duration-150 cursor-pointer gap-x-4 bg-slate-100 rounded-2xl hover:shadow-sm hover:-translate-y-2">
                    <div className="flex items-center justify-center">
                        <UserRound size={64} strokeWidth={0.8} />
                    </div>
                    <div>
                        <h3 className="text-lg font-medium">24/7 Support</h3>
                        <p className="mt-2 text-sm leading-5 text-slate-600">
                            Contact us 24 hours a day, 7 days
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Policies;

import { useEffect } from 'react';

const Product = () => {
    useEffect(() => {}, []);

    return (
        <div className="container product-detail">
            <div className="w-full">
                <h1 className="text-emerald-800">Product detail</h1>
            </div>
            <div className="flex gap-6">
                <div className="basis-1/2 bg-slate-400">left side</div>
                <div className="basis-1/2 bg-zinc-700">right side</div>
            </div>
        </div>
    );
};

export default Product;

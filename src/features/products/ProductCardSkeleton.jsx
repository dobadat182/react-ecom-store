import { Skeleton } from '@/components/ui/skeleton';

const ProductCard = () => {
    return (
        <div className="skeleton-product-card">
            <Skeleton className="block overflow-hidden h-52 product-card--top md:h-80 bg-slate-100 rounded-2xl" />
            <div className="mt-4 md:mt-5 product-card-body">
                <Skeleton className="h-3 md:h-4 w-[80%]" />

                <div className="mt-3 md:mt-3 product__price">
                    <Skeleton className="h-3.5 md:h-4 w-[60%]" />
                </div>

                <div className="product-card-footer">
                    <button className="w-full px-4 py-2 mt-5 text-xs font-medium rounded-md md:text-sm bg-slate-950 text-slate-50">
                        Mua ngay
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

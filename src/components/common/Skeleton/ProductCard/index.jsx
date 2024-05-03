import { Skeleton } from '@/components/ui/skeleton';

const index = () => {
    return (
        <div className="skeleton-product-card">
            <Skeleton className="h-[319px] w-full rounded-xl" />
            <div className="mt-5 product-card-body">
                <Skeleton className="h-4 w-[250px]" />

                <div className="mt-3 product__price">
                    <Skeleton className="h-4 w-[200px]" />
                </div>

                <div className="mt-1 product-card-footer">
                    <button className="w-full px-4 py-2 mt-5 text-sm font-medium rounded-md bg-slate-950 text-slate-50">
                        Mua ngay
                    </button>
                </div>
            </div>
        </div>
    );
};

export default index;

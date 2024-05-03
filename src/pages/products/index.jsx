import { ProductCard } from '@/components';
import { SkeletonProductCart } from '@/components/common/Skeleton';
import { Button } from '@/components/ui/button';

const index = () => {
    return (
        <div className="container px-5 shop-page">
            <div className="row">
                <h1 className="mb-10 text-4xl font-extrabold tracking-tight text-center mt-14 scroll-m-20 lg:text-5xl">
                    Shop
                </h1>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-8 md:gap-y-10">
                    <SkeletonProductCart />
                    {[...Array(11)].map((x, i) => (
                        <ProductCard key={i} />
                    ))}
                </div>

                <div className="flex items-center justify-center m-10">
                    <Button variant="outline">Xem thêm</Button>
                </div>
            </div>
        </div>
    );
};

export default index;

import { Breadcrumb } from '@/components/ui/breadcrumb';
import { ProductCard } from '../../components';

const index = () => {
    return (
        <div className="container mt-20 page-shop">
            <Breadcrumb />

            <div className="row">
                <h1 className="text-4xl font-extrabold tracking-tight text-center mb-14 scroll-m-20 lg:text-5xl">
                    Shop
                </h1>
                <div className="grid grid-cols-4 gap-5">
                    {[...Array(8)].map((x, i) => (
                        <ProductCard key={i} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default index;

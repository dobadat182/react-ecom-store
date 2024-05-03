import { ProductCard } from '../..';
import { Link } from 'react-router-dom';

const index = () => {
    return (
        <section>
            <div className="container">
                <div className="mb-8 heading">
                    <h2 className="text-3xl font-semibold text-center uppercase ">
                        {'Sản phẩm nổi bật' || 'Title Section'}
                    </h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
                    {[...Array(8)].map((x, i) => (
                        <ProductCard key={i} />
                    ))}
                </div>

                <div className="flex justify-center">
                    <Link
                        to="/shop"
                        className="inline-block px-20 py-2 mx-auto mt-12 text-sm font-medium rounded-full bg-slate-950 text-slate-50"
                    >
                        Mua ngay
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default index;

import { ProductCard } from '../../components';

const index = () => {
    return (
        <div className="container">
            <div className="row">
                <h1>Shop</h1>
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

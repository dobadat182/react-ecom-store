import styled from 'styled-components';

const ProductCard = styled.div``;

const index = () => {
    return (
        <ProductCard className="product-card">
            <a className="block overflow-hidden product-card--top h-80 bg-slate-50 rounded-2xl"></a>
            <div className="mt-3 product-card-body">
                <a href="#" className="block text-lg font-medium">
                    Nutrabolics Hydropure
                </a>

                <div className="mt-1 product__price">
                    <span className="text-base font-medium product__price--regular">
                        1.750.000đ
                    </span>
                    <del className="ml-2 text-sm product__price--sale text-slate-400">
                        2.050.000đ
                    </del>
                </div>

                <div className="product-card-footer">
                    <button className="w-full px-4 py-2 mt-5 text-sm font-medium rounded-md bg-slate-950 text-slate-50">
                        Mua ngay
                    </button>
                </div>
            </div>
        </ProductCard>
    );
};

export default index;

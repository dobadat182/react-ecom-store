import styled from 'styled-components';

const ProductCard = styled.div``;

const index = () => {
    return (
        <ProductCard className="product-card">
            <a className="block overflow-hidden h-52 product-card--top md:h-80 bg-slate-50 rounded-2xl"></a>
            <div className="mt-3 product-card-body">
                <a href="#" className="block text-sm font-normal md:text-lg">
                    Nutrabolics Hydropure
                </a>

                <div className="mt-1 product__price">
                    <span className="text-sm font-normal md:text-base product__price--regular">
                        1.750.000đ
                    </span>
                    <del className="ml-1 text-xs font-normal md:ml-2 md:text-sm product__price--sale text-slate-400">
                        2.050.000đ
                    </del>
                </div>

                <div className="product-card-footer">
                    <button className="w-full px-4 py-2 mt-3.5 text-xs font-medium rounded-md md:mt-5 md:text-sm bg-slate-950 text-slate-50">
                        Mua ngay
                    </button>
                </div>
            </div>
        </ProductCard>
    );
};

export default index;

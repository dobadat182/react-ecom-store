import styled from 'styled-components';

const Card = styled.div``;

const ProductCard = (props) => {
    const { id, title, price, category, description, image } = props;
    return (
        <Card className="product-card">
            {/* bg-slate-50 */}
            <a
                href=""
                className="block overflow-hidden border shadow-sm h-52 product-card--top md:h-80 rounded-2xl border-slate-200"
            >
                <img className="object-cover w-full h-full" src={image} />
            </a>
            <div className="mt-3 product-card-body">
                <a
                    href="#"
                    className="text-sm font-normal md:text-lg line-clamp-2 min-h-14"
                >
                    {title}
                </a>

                <div className="mt-1 product__price">
                    <span className="text-sm font-normal md:text-base product__price--regular">
                        {price} $
                    </span>
                    <del className="ml-1 text-xs font-normal md:ml-2 md:text-sm product__price--sale text-slate-400">
                        {/* 2.050.000đ */}
                    </del>
                </div>

                <div className="product-card-footer">
                    <button className="w-full px-4 py-2 mt-3.5 text-xs font-medium rounded-md md:mt-5 md:text-sm bg-slate-950 text-slate-50 hover:bg-transparent hover:text-zinc-950 transition-all hover:border hover:border-zinc-950 ">
                        Mua ngay
                    </button>
                </div>
            </div>
        </Card>
    );
};

export default ProductCard;

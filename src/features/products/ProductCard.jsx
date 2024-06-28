import { ShoppingBag } from 'lucide-react';
import styled from 'styled-components';

const Card = styled.div``;

const ProductCard = (props) => {
    const { id, title, price, category, description, image } = props;
    return (
        <Card className="product-card">
            {/* bg-slate-50 */}
            <a
                href=""
                className="relative block overflow-hidden border shadow-sm h-52 product-card--top md:h-80 rounded-2xl border-slate-200"
            >
                <img className="object-cover w-full h-full" src={image} />
                <button className="absolute bottom-0 right-0 p-2 m-3 text-xs rounded-xl bg-slate-950 text-slate-50">
                    <ShoppingBag />
                </button>
            </a>
            <div className="mt-3 product-card-body">
                <a className="text-xl font-semibold tracking-tight scroll-m-20 min-h-14">
                    {title}
                </a>

                <p className="leading-7 [&:not(:first-child)]:mt-6 line-clamp-2	">
                    {description}
                </p>
                <div className="mt-1 product__price">
                    <span className="text-2xl font-semibold tracking-tight scroll-m-20">
                        {price} $
                    </span>
                    <del className="ml-1 text-2xl font-semibold tracking-tight scroll-m-20 text-slate-400">
                        {/* 2.050.000đ */}
                    </del>
                </div>

                {/* <div className="product-card-footer">
                    <button className="w-full px-4 py-2 mt-3.5 text-xs font-medium rounded-md md:mt-5 md:text-sm bg-slate-950 text-slate-50 hover:bg-transparent hover:text-zinc-950 transition-all hover:border hover:border-zinc-950 ">
                        Buy now
                    </button>
                </div> */}
            </div>
        </Card>
    );
};

export default ProductCard;

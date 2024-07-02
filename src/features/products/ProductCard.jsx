import { ShoppingBasket } from 'lucide-react';
import styled from 'styled-components';

const Card = styled.div`
    .product-thumbnail {
        &:hover {
            img {
                transition: all 0.3s ease-in-out;
                &:nth-child(1) {
                    opacity: 0;
                }
                &:nth-child(2) {
                    opacity: 1;
                }
            }
        }
    }
`;

const ImageThumbnail = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        left: 0;
        top: 0;

        &:nth-child(2) {
            opacity: 0;
        }
    }
`;

const ProductCard = ({ id, images, title, price, description }) => {
    return (
        <Card className="product-card" data-id={id}>
            {/* bg-slate-50 */}
            <a
                href=""
                className="relative block overflow-hidden border shadow-sm product-thumbnail h-52 product-card--top md:h-80 rounded-2xl border-slate-200"
            >
                <ImageThumbnail>
                    <img src={images[0]} />
                    <img src={images[1]} />
                </ImageThumbnail>

                <button className="absolute bottom-0 right-0 p-2 m-3 text-xs transition-transform duration-300 bg-blue-700 rounded-xl text-slate-50 hover:-translate-y-1">
                    <ShoppingBasket className="w-5 h-5" />
                </button>
            </a>
            <div className="mt-5 product-card-body">
                <a className="text-xl font-semibold tracking-tight scroll-m-20 min-h-14">
                    {title}
                </a>

                <p className="mt-2 text-sm leading-5 line-clamp-2 ">
                    {description}
                </p>
                <div className="mt-3 product__price">
                    <span className="text-lg font-semibold tracking-tight scroll-m-20">
                        $ {price}
                    </span>
                    {/* <del className="ml-2 text-base font-medium tracking-tight scroll-m-20 text-slate-400">
                        $300
                    </del> */}
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

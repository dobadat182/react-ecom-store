import styled from 'styled-components';
import { ShoppingBasket, ShoppingCart } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { addToCart, selectItemQuantity } from '../cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const Card = styled.div``;

const CardThumbnail = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

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

const ProductCard = (props) => {
    const { id, images, title, price, description } = props;

    function currencyFormat(num) {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
    const dispatch = useDispatch();

    const addToCartHandler = (e) => {
        e.preventDefault();
        dispatch(addToCart(props));
    };
    // Sử dụng selector để lấy số lượng sản phẩm trong giỏ hàng
    const quantity = useSelector((state) => selectItemQuantity(state, id));

    return (
        <Card className="product-card" data-id={id}>
            <Link
                to={`/product-detail/${id}`}
                className="relative block overflow-hidden border shadow-sm bg-slate-100 product-thumbnail h-52 product-card--top md:h-80 rounded-2xl border-slate-200"
            >
                {images[0] && images[1] ? (
                    <CardThumbnail>
                        <LazyLoadImage alt="" src={images[0]} />
                        <LazyLoadImage alt="" src={images[1]} />
                    </CardThumbnail>
                ) : (
                    <LazyLoadImage
                        className="transition-transform duration-300 hover:-translate-y-1"
                        alt=""
                        src={images[0]}
                    />
                )}
                <div className="absolute bottom-0 right-0 flex flex-col items-center">
                    <button
                        type="button"
                        onClick={addToCartHandler}
                        className="relative p-2 m-3 text-xs transition-transform duration-300 bg-blue-600 rounded-xl text-slate-50 hover:-translate-y-1"
                    >
                        <ShoppingCart className="w-5 h-5" />
                        {quantity > 0 && (
                            <span className="absolute w-5 h-5 flex items-center justify-center text-xs bg-red-500 rounded-full -top-2.5 left-6 text-red-50">
                                {quantity}
                            </span>
                        )}
                    </button>
                </div>
            </Link>
            <div className="mt-5 product-card-body">
                <Link
                    to={`/product-detail/${id}`}
                    className="text-xl font-semibold tracking-tight transition-all duration-300 scroll-m-20 min-h-14 hover:text-blue-700"
                >
                    {title}
                </Link>

                <p className="mt-2 text-sm leading-5 line-clamp-2 ">
                    {description}
                </p>
                <div className="mt-3 product__price">
                    <span className="text-lg font-semibold tracking-tight scroll-m-20">
                        {currencyFormat(price)}
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

import { removeFromCart } from '@/features/cart/cartSlice';
import { Minus, Plus, X } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const CartItem = (props) => {
    const dispatch = useDispatch();
    const { id, images, title, price, description } = props.item;
    console.log(images);

    console.log(props);
    return (
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                <Link
                    to={`/product-detail/${id}`}
                    className="relative block overflow-hidden border shadow-sm shrink-0 md:order-1 bg-slate-100 product-thumbnail h-52 product-card--top md:h-80 rounded-2xl border-slate-200"
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
                </Link>

                {/* Change quantity */}
                <label htmlFor="counter-input" className="sr-only">
                    Choose quantity:
                </label>
                <div className="flex items-center justify-between md:order-3 md:justify-end">
                    <div className="flex items-center">
                        <button
                            type="button"
                            id="decrement-button"
                            data-input-counter-decrement="counter-input"
                            className="inline-flex items-center justify-center w-5 h-5 bg-gray-100 border border-gray-300 rounded-md shrink-0 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                        >
                            <Minus />
                        </button>
                        <input
                            type="text"
                            id="counter-input"
                            data-input-counter
                            className="w-10 text-sm font-medium text-center text-gray-900 bg-transparent border-0 shrink-0 focus:outline-none focus:ring-0 dark:text-white"
                            placeholder=""
                            required
                        />
                        <button
                            type="button"
                            id="increment-button"
                            data-input-counter-increment="counter-input"
                            className="inline-flex items-center justify-center w-5 h-5 bg-gray-100 border border-gray-300 rounded-md shrink-0 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                        >
                            <Plus />
                        </button>
                    </div>
                    <div className="text-end md:order-4 md:w-32">
                        <p className="text-base font-bold text-gray-900 dark:text-white">
                            $ {price.toFixed(2)}
                        </p>
                    </div>
                </div>

                <div className="flex-1 w-full min-w-0 space-y-4 md:order-2 md:max-w-md">
                    <a
                        href="#"
                        className="text-base font-medium text-gray-900 hover:underline dark:text-white"
                    >
                        {title}
                    </a>

                    <div className="flex items-center gap-4">
                        <button
                            type="button"
                            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                        >
                            <svg
                                className="me-1.5 h-5 w-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                                />
                            </svg>
                            Add to Favorites
                        </button>

                        <button
                            onClick={() => dispatch(removeFromCart(id))}
                            type="button"
                            className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                        >
                            <X />
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;

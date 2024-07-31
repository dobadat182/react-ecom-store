import CartItem from '@/components/common/cart/CartItem';
import { Button } from '@/components/ui/button';
import { clearCart } from '@/features/cart/cartSlice';
import { ArrowBigLeft, ChevronsRight, Trash } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import emptyCartImage from '../assets/images/empty-cart.png';
import { Link } from 'react-router-dom';
import CustomersAlsoBought from '@/components/sections/CustomersAlsoBought';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <section className="py-8 antialiased bg-white dark:bg-gray-900 md:py-16">
            <div className="h-full max-w-screen-xl px-4 mx-auto 2xl:px-0">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                        Shopping Cart ({totalQuantity})
                    </h2>

                    <Button
                        onClick={handleClearCart}
                        variant="outline"
                        className="p-4 text-base"
                    >
                        <Trash className="w-5" />
                    </Button>
                </div>

                <div className="mt-6 min-h-[calc(100vh-300px)] sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                    {cartItems.length === 0 ? (
                        <div className="flex flex-col items-center justify-center w-full gap-y-5">
                            <img
                                className="max-w-96"
                                src={emptyCartImage}
                                alt=""
                            />

                            <p className="text-3xl font-bold text-center">
                                Your Cart is Empty
                            </p>
                            <Link to="/shop" className="underline">
                                Continue Shopping <ChevronsRight />
                            </Link>
                        </div>
                    ) : (
                        <>
                            <div className="flex-none w-full mx-auto lg:max-w-2xl xl:max-w-4xl">
                                <div className="space-y-6">
                                    {cartItems.map((item) => (
                                        <CartItem key={item.id} item={item} />
                                    ))}
                                </div>

                                <CustomersAlsoBought />
                            </div>

                            <div className="flex-1 max-w-4xl mx-auto mt-6 space-y-6 lg:mt-0 lg:w-full">
                                <div className="p-4 space-y-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                                    <p className="text-xl font-semibold text-gray-900 dark:text-white">
                                        Order summary
                                    </p>

                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <dl className="flex items-center justify-between gap-4">
                                                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                                                    Original price
                                                </dt>
                                                <dd className="text-base font-medium text-gray-900 dark:text-white">
                                                    $7,592.00
                                                </dd>
                                            </dl>

                                            <dl className="flex items-center justify-between gap-4">
                                                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                                                    Savings
                                                </dt>
                                                <dd className="text-base font-medium text-green-600">
                                                    -$299.00
                                                </dd>
                                            </dl>

                                            <dl className="flex items-center justify-between gap-4">
                                                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                                                    Store Pickup
                                                </dt>
                                                <dd className="text-base font-medium text-gray-900 dark:text-white">
                                                    $99
                                                </dd>
                                            </dl>

                                            <dl className="flex items-center justify-between gap-4">
                                                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                                                    Tax
                                                </dt>
                                                <dd className="text-base font-medium text-gray-900 dark:text-white">
                                                    $799
                                                </dd>
                                            </dl>
                                        </div>

                                        <dl className="flex items-center justify-between gap-4 pt-2 border-t border-gray-200 dark:border-gray-700">
                                            <dt className="text-base font-bold text-gray-900 dark:text-white">
                                                Total
                                            </dt>
                                            <dd className="text-base font-bold text-gray-900 dark:text-white">
                                                {totalAmount !== 0 &&
                                                totalAmount > 0
                                                    ? totalAmount.toFixed(2)
                                                    : 0}
                                            </dd>
                                        </dl>
                                    </div>

                                    <a
                                        href="#"
                                        className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    >
                                        Proceed to Checkout
                                    </a>

                                    <div className="flex items-center justify-center gap-2">
                                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                            {' '}
                                            or{' '}
                                        </span>
                                        <a
                                            href="#"
                                            title=""
                                            className="inline-flex items-center gap-2 text-sm font-medium underline text-primary-700 hover:no-underline dark:text-primary-500"
                                        >
                                            Continue Shopping
                                            <svg
                                                className="w-5 h-5"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19 12H5m14 0-4 4m4-4-4-4"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                <div className="p-4 space-y-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                                    <form className="space-y-4">
                                        <div>
                                            <label
                                                htmlFor="voucher"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                {' '}
                                                Do you have a voucher or gift
                                                card?{' '}
                                            </label>
                                            <input
                                                type="text"
                                                id="voucher"
                                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                                placeholder=""
                                                required
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                        >
                                            Apply Code
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Cart;

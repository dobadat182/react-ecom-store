import { selectTotalQuantity } from '@/features/cart/cartSlice';
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/clerk-react';
import { Menu, ShoppingCart } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const totalQuantity = useSelector(selectTotalQuantity);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`${isSticky ? 'fixed' : ''} top-0 z-20 w-full bg-white border-b border-gray-200 dark:bg-gray-900 start-0 dark:border-gray-600`}
        >
            <div className="container flex flex-wrap items-center justify-between p-4 mx-auto">
                <Link
                    href="/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <svg
                        height="40"
                        width="40"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0.43 1064 928.69"
                    >
                        <linearGradient
                            id="a"
                            x1="0%"
                            x2="99.999%"
                            y1="49.999%"
                            y2="49.999%"
                        >
                            <stop offset=".03" stopColor="#4079d8" />
                            <stop offset="1" stopColor="#4989f5" />
                        </linearGradient>
                        <g fill="none" fillRule="evenodd">
                            <g fillRule="nonzero">
                                <rect
                                    fill="#4989f5"
                                    height="696.14"
                                    rx="36.88"
                                    width="931"
                                    x="53.45"
                                    y="232.98"
                                />
                                <path
                                    d="M936.81 227.75H100.06c-25.92 0-46.09 200.6-46.09 226.52L512.2 929.12h424.61c26-.071 47.059-21.13 47.13-47.13V274.87c-.077-25.996-21.134-47.049-47.13-47.12z"
                                    fill="url(#a)"
                                />
                                <path
                                    d="M266.03 349.56h266V.44H305.86z"
                                    fill="#3c4ba6"
                                />
                                <path
                                    d="M798.03 349.56h-266V.44H758.2zM984.45 66.62l.33 1.19c-.08-.42-.24-.81-.33-1.19z"
                                    fill="#7babf7"
                                />
                                <path
                                    d="M984.78 67.8l-.33-1.19C976.017 27.993 941.837.455 902.31.43H758.2L798 349.56h266z"
                                    fill="#3f51b5"
                                />
                                <path
                                    d="M79.61 66.62l-.33 1.19c.08-.42.24-.81.33-1.19z"
                                    fill="#7babf7"
                                />
                                <path
                                    d="M79.27 67.8l.33-1.19C88.033 27.993 122.213.455 161.74.43h144.12L266 349.56H0z"
                                    fill="#7babf7"
                                />
                            </g>
                            <path
                                d="M266.48 349.47c0 73.412-59.513 132.925-132.925 132.925S.63 422.882.63 349.47z"
                                fill="#709be0"
                            />
                            <path
                                d="M532.33 349.47c0 73.412-59.513 132.925-132.925 132.925S266.48 422.882 266.48 349.47z"
                                fill="#3c4ba6"
                            />
                            <path
                                d="M798.18 349.47c0 73.412-59.513 132.925-132.925 132.925S532.33 422.882 532.33 349.47z"
                                fill="#709be0"
                            />
                            <path
                                d="M1064 349.47c0 73.412-59.513 132.925-132.925 132.925S798.15 422.882 798.15 349.47z"
                                fill="#3c4ba6"
                            />
                            <path
                                d="M931.08 709.6c-.47-6.33-1.25-12.11-2.36-19.49h-145c0 20.28 0 42.41-.08 62.7h84a73.05 73.05 0 0 1-30.75 46.89s0-.35-.06-.36a88 88 0 0 1-34 13.27 99.85 99.85 0 0 1-36.79-.16 91.9 91.9 0 0 1-34.31-14.87 95.72 95.72 0 0 1-33.73-43.1c-.52-1.35-1-2.71-1.49-4.09v-.15l.13-.1a93 93 0 0 1-.05-59.84A96.27 96.27 0 0 1 718.9 654c23.587-24.399 58.829-33.576 91.32-23.78a83 83 0 0 1 33.23 19.56l28.34-28.34c5-5.05 10.19-9.94 15-15.16a149.78 149.78 0 0 0-49.64-30.74 156.08 156.08 0 0 0-103.83-.91c-1.173.4-2.34.817-3.5 1.25A155.18 155.18 0 0 0 646 651a152.61 152.61 0 0 0-13.42 38.78c-16.052 79.772 32.623 158.294 111.21 179.4 25.69 6.88 53 6.71 78.89.83a139.88 139.88 0 0 0 63.14-32.81c18.64-17.15 32-40 39-64.27a179 179 0 0 0 6.26-63.33z"
                                fill="#fff"
                                fillRule="nonzero"
                            />
                        </g>
                    </svg>

                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                </Link>

                <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
                    <div className="flex gap-x-8">
                        <Link
                            to="/cart"
                            className="flex items-center justify-center bg-white"
                        >
                            <div className="relative scale-75">
                                <ShoppingCart
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-8 h-8 text-gray-600"
                                />

                                {totalQuantity > 0 && (
                                    <span className="absolute -top-2 left-5 rounded-full bg-red-500 p-0.5 px-2 text-sm text-red-50">
                                        {totalQuantity}
                                    </span>
                                )}
                            </div>
                        </Link>

                        <div className="hidden md:block">
                            <SignedOut>
                                <SignInButton className="px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" />
                            </SignedOut>
                            <SignedIn className="px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <UserButton />
                            </SignedIn>
                        </div>
                    </div>
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Menu className="w-5 h-5" />
                    </button>
                </div>
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-2 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `${isActive ? 'font-semibold text-blue-700 bg-gray-100' : ''} block px-4 transition py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:text-blue-700`
                                }
                                aria-current="page"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/shop"
                                className={({ isActive }) =>
                                    `${isActive ? 'font-semibold text-blue-700 bg-gray-100' : ''} block px-4 transition py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:text-blue-700`
                                }
                                aria-current="page"
                            >
                                Shop
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/cart"
                                className={({ isActive }) =>
                                    `${isActive ? 'font-semibold text-blue-700 bg-gray-100' : ''} block px-4 transition py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:text-blue-700`
                                }
                                aria-current="page"
                            >
                                Cart
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

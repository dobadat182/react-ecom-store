const CartSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={`fixed top-0 right-0 h-screen w-64 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            {' '}
            <div className="flex items-center justify-center h-20 border-b border-gray-600">
                <h1 className="text-2xl font-bold">My App</h1>
            </div>
            <nav className="flex flex-col mt-4">
                <a
                    href="#home"
                    className="flex items-center px-4 py-2 hover:bg-gray-700"
                >
                    <span className="text-lg">Home</span>
                </a>
                <a
                    href="#services"
                    className="flex items-center px-4 py-2 hover:bg-gray-700"
                >
                    <span className="text-lg">Services</span>
                </a>
                <a
                    href="#about"
                    className="flex items-center px-4 py-2 hover:bg-gray-700"
                >
                    <span className="text-lg">About</span>
                </a>
                <a
                    href="#contact"
                    className="flex items-center px-4 py-2 hover:bg-gray-700"
                >
                    <span className="text-lg">Contact</span>
                </a>
            </nav>
        </div>
    );
};

export default CartSidebar;

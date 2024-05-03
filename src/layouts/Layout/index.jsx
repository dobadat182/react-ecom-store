const index = ({ children }) => {
    return (
        <div className="flex flex-col max-w-2xl min-h-screen px-4 pt-8 pb-16 mx-auto">
            <div className="flex-grow">
                <main className="py-16 my-0">{children}</main>
            </div>
        </div>
    );
};

export default index;

import Navbar from '@/components/common/Navbar';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <Navbar />
            <main className="relative w-full h-full ">
                <Outlet /> {/* Đây là nơi các route con sẽ được render */}
                <div className="absolute top-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-50"></div>
            </main>
        </>
    );
}

export default Layout;

import Routers from './Routers/Routers';
import { Navbar } from './layouts';

function App() {
    return (
        <>
            <Navbar />
            <main className="relative w-full h-full ">
                <Routers />
                <div className="absolute top-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-50"></div>
            </main>
        </>
    );
}

export default App;

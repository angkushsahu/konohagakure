import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import Loading from "components/common/loading/page";
import routing from "components/routing/routes";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const App = () => {
    return (
        <main className="root">
            <Suspense fallback={<Loading />}>
                <RouterProvider router={routing} />
            </Suspense>
        </main>
    );
};

export default App;

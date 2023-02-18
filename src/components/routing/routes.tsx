import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import * as Components from "./lazyImports";

const routing = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route path="/" element={<Components.Home />} />
            <Route path="/anime" element={<Components.Search />} />
            <Route path="*" element={<Components.Error />} />
        </Route>
    )
);

export default routing;

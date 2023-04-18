import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import HoatDongProvider from "./contexts/hoatDongContext";
import Layout from "./Layout";
import Information from "./pages/Information";
import DoiTac from "./pages/DoiTac";
import PageNotFound from "./pages/PageNotFound";
import "./App.css";

function App() {
    return (
        <HoatDongProvider>
            <Router>
                <Layout>
                    <div className="App overflow-hidden">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/trangchu" element={<Home />} />
                            <Route path="/doitac" element={<DoiTac />} />
                            <Route path="/tintuc" element={<Information />} />
                            <Route path="*" element={<PageNotFound />} />
                        </Routes>
                    </div>
                </Layout>
            </Router>
        </HoatDongProvider>
    );
}

export default App;

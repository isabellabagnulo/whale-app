import { Routes, Route } from "react-router-dom";

import { Add } from "./pages/Add";
import { Book } from "./pages/Book";
import { Books } from "./pages/Books";
import { Footer } from "./components/Footer/Footer";
import { Header } from './components/Header/Header'
import { Location } from "./pages/Location";
import { Locations } from "./pages/Locations"
import { MyMap } from "./pages/MyMap";

import './App.css'

export const App = () => {
    return (
        <>
            <Header />
            <Routes>

                <Route path="/" element={<Books />} />
                <Route path="/book/:id" element={<Book />} />
                <Route path="/location/:id" element={<Location />} />
                <Route path="/locations" element={<Locations />} />
                <Route path="/map" element={<MyMap />} />
                <Route path="/add" element={<Add />} />

            </Routes>
            <Footer />
        </>
    )
}
import { Route, Routes } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";

import Layout from "./components/Layout/Layout";
function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<AllMeetups />}></Route>
                <Route path="/New-meetup" element={<NewMeetup />}></Route>
                <Route path="/Favorites" element={<Favorites />}></Route>
            </Routes>
        </Layout>
    );
}

export default App;

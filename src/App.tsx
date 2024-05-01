import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import AllMovies from "./pages/AllMovies";
import Showtime from "./pages/Showtime";
import SelectSeat from "./pages/SelectSeat";
import Payment from "./pages/Payment";
import Tickets from "./pages/users/Tickets";
import ViewTicket from "./pages/users/ViewTicket";
import Login from "./pages/Login";

import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        
          <Route path="/all" element={<AllMovies />} />
          <Route path="/movie/:id" element={<Showtime />} />
          <Route path="/user/tickets" element={<Tickets />} />
          <Route path="/user/tickets/:id" element={<ViewTicket />} />
        </Route>
        <Route
          path="/movie/:id/:day/:time/selectSeat"
          element={<SelectSeat />}
        />
        <Route path="/movie/:id/:day/:time/selectSeat/payment" element={<Payment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

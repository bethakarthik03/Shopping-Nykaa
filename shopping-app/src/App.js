// import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/Authcontent";
import { WishlistProvider } from "./components/WishlistContext";
import { CartlistProvider } from "./components/CartlistContext.jsx";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Fpassword from "./components/Fpassword";
import ResetPassword from "./components/ResetPassword";
import Styli from "./components/Styli";
import Campus from "./components/Campus.jsx";
import Garage from "./components/Garage.jsx";
import Googlelogin from "./components/Googlelogin.jsx";
import Puma from "./components/Puma.jsx";
import Wishlist from "./components/Wishlist.jsx";
import Cart from "./components/Cart.jsx";
import WomenMabish from "./components/WomenMabish.jsx";
import WomenStylum from "./components/WomenStylum.jsx";
import WomenLibas from "./components/WomenLibas.jsx";
import WomenChaabra from "./components/WomenChaabra.jsx";
import KidsAj from "./components/KidsAj.jsx";
import KidsBitiya from "./components/KidsBitiya.jsx";
import KidsKisah from "./components/KidsKisah.jsx";
import KidsStylo from "./components/KidsStylo.jsx";
import BagsStyli from "./components/BagsStyli.jsx";
import BagsTommy from "./components/BagsTommy.jsx";
import BagsZouk from "./components/BagsZouk.jsx";
import BagsMouchi from "./components/BagsMouchi.jsx";
import ShoesCampus from "./components/ShoesCampus.jsx";
import ShoesPuma from "./components/ShoesPuma.jsx";
import ShoesRedTape from "./components/ShoesRedTape.jsx";
import ShoesReebok from "./components/ShoesReebok.jsx";
import Checkout from "./components/Checkout.jsx";
import OrderConfirmation from "./components/OrderConfirmation.jsx";
import Orders from "./components/Orders.jsx";
import Babydress from "./components/Babydress.jsx";
import Jeans from "./components/Jeans.jsx";
import Dress from "./components/Dress.jsx";
import Ethnicwear from "./components/Ethnicwear.jsx";
import Formalwear from "./components/Formalwear.jsx";
import Kidswear from "./components/Kidswear.jsx";
import Lipbalm from "./components/Lipbalm.jsx";
import Perfume from "./components/Perfume.jsx";
import Sareewear from "./components/Sareewear.jsx";
import Shampoo from "./components/Shampoo.jsx";
import Sunscreen from "./components/Sunscreen.jsx";
import Tshirts from "./components/T-shirts.jsx";
import Trackpants from "./components/Trackpants.jsx";
import Westernwear from "./components/Westernwear.jsx";
import Childboywear from "./components/Childboywear.jsx";
import Childdress from "./components/Childdress.jsx";
import Footwearwomen from "./components/Footwearwomen.jsx";
import Formalshoes from "./components/Formalshoes.jsx";
import Casualwear from "./components/Casualwear.jsx";

import Shorts from "./components/Shorts.jsx";
import Runningshoes from "./components/Runningshoes.jsx";
import Heels from "./components/Heels.jsx";
import ProductDetails from "./components/ProductDetails.jsx";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <WishlistProvider>
          <CartlistProvider>
            <Router>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} />
                <Route path="/fpassword" element={<Fpassword />} />
                <Route path="/rpassword" element={<ResetPassword />} />
                <Route path="/google-login" element={<Googlelogin />} />
                <Route path="/styli" element={<Styli />} />
                <Route path="/campus" element={<Campus />} />
                <Route path="/garage" element={<Garage />} />
                <Route path="/puma" element={<Puma />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/mabish" element={<WomenMabish />} />
                <Route path="/stylum" element={<WomenStylum />} />
                <Route path="/libas" element={<WomenLibas />} />
                <Route path="/chaabra" element={<WomenChaabra />} />
                <Route path="/kidsaj" element={<KidsAj />} />
                <Route path="/kidsbitiya" element={<KidsBitiya />} />
                <Route path="/kidskisah" element={<KidsKisah />} />
                <Route path="/kidsstylo" element={<KidsStylo />} />
                <Route path="/bagsstyli" element={<BagsStyli />} />
                <Route path="/bagstommy" element={<BagsTommy />} />
                <Route path="/bagszouk" element={<BagsZouk />} />
                <Route path="/bagsmouchi" element={<BagsMouchi />} />
                <Route path="/shoescampus" element={<ShoesCampus />} />
                <Route path="/shoespuma" element={<ShoesPuma />} />
                <Route path="/shoesredtape" element={<ShoesRedTape />} />
                <Route path="/shoesreebok" element={<ShoesReebok />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-confirmation" element={<OrderConfirmation />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/babydress" element={<Babydress />} />
                <Route path="/jeans" element={<Jeans />} />
                <Route path="/shorts" element={<Shorts />} />
                <Route path="/dress" element={<Dress />} />
                <Route path="/ethnicwear" element={<Ethnicwear />} />
                <Route path="/formalwear" element={<Formalwear />} />
                <Route path="/kidswear" element={<Kidswear />} />
                <Route path="/lipbalm" element={<Lipbalm />} />
                <Route path="/perfume" element={<Perfume />} />
                <Route path="/sareewear" element={<Sareewear />} />
                <Route path="/shampoo" element={<Shampoo />} />
                <Route path="/sunscreen" element={<Sunscreen />} />
                <Route path="/t-shirts" element={<Tshirts />} />
                <Route path="/trackpants" element={<Trackpants />} />
                <Route path="/casualwear" element={<Casualwear />} />
                <Route path="/westernwear" element={<Westernwear />} />
                <Route path="/childboywear" element={<Childboywear />} />
                <Route path="/childdress" element={<Childdress />} />
                <Route path="/womenfootwear" element={<Footwearwomen />} />
                <Route path="/formalshoes" element={<Formalshoes />} />
                <Route path="/runningshoes" element={<Runningshoes />} />
                <Route path="/heels" element={<Heels />} />
                <Route path="/product/:id" element={<ProductDetails />} />
              </Routes>
            </Router>
          </CartlistProvider>
        </WishlistProvider>
      </AuthProvider>
    </div>
  );
}

export default App;

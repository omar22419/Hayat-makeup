import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import AllProducts from "./pages/AllProducts/AllProducts";
import Categories from "./pages/Categories/Categories.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";
import OrderSuccess from "./pages/OrderSuccess/OrderSuccess.jsx";
import TermsAndConditions from "./pages/Terms/TermsAndConditions.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy.jsx";
import ShippingPolicy from "./pages/ShippingPolicy/ShippingPolicy.jsx";
import Wishlist from "./pages/Wishlist/Wishlist.jsx";
import NewArrivals from "./pages/NewArrivals/NewArrivals.jsx";
import BestSellers from "./pages/BestSellers/BestSellers.jsx";
import Offers from "./pages/Offers/Offers.jsx";
import LegalPolicies from "./pages/LegalPolicies/LegalPolicies.jsx";
import MakeupGuide from "./pages/MakeupGuide/MakeupGuide";
import ProductComparison from "./pages/ProductComparison/ProductComparison.jsx";
import Packages from "./pages/Packages/Packages.jsx";
import ReturnPolicy from "./pages/ReturnPolicy/ReturnPolicyCard.jsx";
import Notifications from "./pages/notifications/Notifications.jsx";
import Looks from "./pages/Looks/Looks";
import Magazine from "./pages/Magazine/Magazine.jsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import SkinQuiz from "./pages/SkinQuiz/SkinQuiz.jsx";
import ShopByColor from "./pages/ShopByColor/ShopByColor.jsx";
import About from "./pages/About/About.jsx";
import Reviews from "./pages/Reviews/Reviews";
import SkinType from "./pages/SkinType/SkinType.jsx";
import Account from "./pages/Account/Account.jsx";
import Search from "./pages/Search/Search.jsx";
import FAQ from "./pages/FAQ/FAQ.jsx";
import TrackOrder from "./pages/TrackOrder/TrackOrder.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/best-sellers" element={<BestSellers />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/makeup-guide" element={<MakeupGuide />} />
        <Route path="/legal-policies" element={<LegalPolicies />} />
        <Route path="/product-comparison" element={<ProductComparison />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/return-policy" element={<ReturnPolicy />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/looks" element={<Looks />} />
        <Route path="/magazine" element={<Magazine />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skin-quiz" element={<SkinQuiz />} />
        <Route path="/shop-by-color" element={<ShopByColor />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/skin-type" element={<SkinType />} />
        <Route path="/account" element={<Account />} />
        <Route path="/search" element={<Search />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/track-order" element={<TrackOrder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

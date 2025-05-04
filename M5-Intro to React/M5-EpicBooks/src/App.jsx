import { ProductsProvider } from "./components/contexts/ProductsContext";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import { ThemeProvider } from "./components/contexts/ThemeContext";
import MyFooter from "./components/myfooter/MyFooter";
import Welcome from "./components/welcome/Welcome";
import MyNav from "./components/mynav/MyNav";

const App = () => {
  return (
    <PrimeReactProvider>
      <ThemeProvider>
        <ProductsProvider>
          <MyNav />
          <Welcome />
          <MyFooter />
        </ProductsProvider>
      </ThemeProvider>
    </PrimeReactProvider>
  );
};

export default App;

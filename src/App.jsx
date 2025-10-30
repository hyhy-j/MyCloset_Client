import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Intro from "./pages/Intro";
import MainLayout from "./layouts/MainLayout";
import Category from "./pages/Category";
import CategoryBasic from "./pages/CategoryBasic";
import ProductDetail from "./pages/ProductDetail";

const Wrapper = styled.div`
  width: min(393px, 100%);
  min-height: 100dvh;
  margin: 0 auto;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3),
    0 8px 10px -6px rgba(0, 0, 0, 0.3);

  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  } /* Chrome/Safari */
  scrollbar-width: none; /* Firefox */
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route element={<MainLayout />}>
            <Route path="/category" element={<Category />} />
            <Route path="/category/basic" element={<CategoryBasic />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";
import CategoryGrid from "../components/CategoryGrid";

const Page = styled.main`
  min-height: 100dvh;
  background: #fff;
  padding: calc(14px + env(safe-area-inset-top)) 16px 70px; /* 하단바 공간 확보 */
  color: #111;
`;

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
  align-items: center;
  margin-bottom: 14px;
`;

const Search = styled.button`
  height: 38px;
  border-radius: 12px;
  border: 1px solid #eee;
  background: #f7f7f7;
  text-align: left;
  padding: 0 12px;
  font-size: 12px;
  color: #9a9a9a;
  cursor: pointer;
`;

const IconRow = styled.div`
  display: flex;
  gap: 12px;
`;
const IconBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
    display: block;
  }
`;

const RowBetween = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 20px 2px 5px;
  gap: 5px;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Chip = styled.span`
  font-size: 8px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 6px;
  color: #111;
  background: ${({ $tone }) => ($tone === "basic" ? "#94c55c" : "#d17fd9")};
  border: 1px solid rgba(0, 0, 0, 0.06);
`;

const SectionTitle = styled.p`
  margin: 0;
  font-size: 15px;
  letter-spacing: 0.5px;
  font-weight: 600;
`;

const HScroll = styled.div`
  display: flex;
  gap: 12px;
  padding-bottom: 6px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CATEGORIES = [
  "ALL",
  "OUTER",
  "TOP",
  "PANTS",
  "SKIRT",
  "DRESS",
  "BAG",
  "SHOES",
];

const BASIC = [
  {
    imageName: "basic1",
    brand: "ORDINARY HOLIDAY",
    name: "오프숄더 데미지 니트 [KHAKI]",
  },
  { imageName: "basic2", brand: "카비시", name: "PLUR LOGO HOODIE BLACK" },
  {
    imageName: "basic3",
    brand: "바운더리",
    name: "원턱 백 포인트 패치 스웨트팬츠 [브라운]",
  },
  {
    imageName: "basic4",
    brand: "노아이고",
    name: "NOI1640 나일론 셔링 후드베스트 (라이트그레이)",
  },
  {
    imageName: "basic5",
    brand: "스탠드오일",
    name: "Melly Bag · 멜리백",
  },
  {
    imageName: "basic6",
    brand: "커스텀어클락",
    name: "루즈핏 플레어 데님 팬츠 블루",
  },
  {
    imageName: "basic7",
    brand: "노이아고",
    name: "NOI1640 나일론 셔링 후드베스트 (라이트그레이)",
  },
  {
    imageName: "basic8",
    brand: "스탠드오일",
    name: "Melly Bag · 멜리백",
  },
  {
    imageName: "basic9",
    brand: "ami",
    name: "(Unisex) Intarsia Adc Cardigan - Black/Red",
  },
];

const CategoryBasic = () => {
  const [active, setActive] = useState("ALL");
  const navigate = useNavigate();

  return (
    <Page>
      {/* 헤더(간단 버전) */}
      <Header>
        <Search>어떤 옷을 찾으시나요?</Search>
        <IconRow>
          <IconBtn>
            <img src="/images/notice.png" alt="" />
          </IconBtn>
          <IconBtn>
            <img src="/images/shoppingBag.png" alt="" />
          </IconBtn>
        </IconRow>
      </Header>

      {/* 카테고리 탭 */}
      <CategoryGrid
        items={CATEGORIES}
        value={active}
        onChange={setActive}
        columns={4}
        fullBleed
      />

      {/* BASIC 섹션 */}
      <RowBetween>
        <Left>
          <Chip $tone="basic">Basic</Chip>
          <Chip $tone="premium">Premium</Chip>
        </Left>
        <SectionTitle>Basic</SectionTitle>
      </RowBetween>
      <HScroll>
        {BASIC.map((it) => (
          <ProductCard
            key={it.imageName}
            {...it}
            onClick={() => navigate(`/product/${1}`)}
          />
        ))}
      </HScroll>
    </Page>
  );
};

export default CategoryBasic;

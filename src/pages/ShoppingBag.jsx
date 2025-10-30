// src/pages/ShoppingBag.jsx
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function ShoppingBag() {
  const navigate = useNavigate();
  const items = [
    {
      id: "basic1",
      thumb: "/images/products/basic1.png",
      brand: "ORDINARY HOLIDAY",
      name: "오프숄더 데미지 니트 [KHAKI]",
      tag: "멤버십 대여",
    },
    {
      id: "premium4",
      thumb: "/images/products/premium4.png",
      brand: "Sandro",
      name: "자켓",
      tag: "멤버십 대여",
    },
  ];

  return (
    <Page>
      <TopBar>
        {/* 좌측 자리는 비워서 제목이 정확히 가운데 오도록 */}
        <LeftSlot aria-hidden />
        <Title>장바구니</Title>
        <IconRow>
          <IconBtn aria-label="알림">
            <img src="/images/notice.png" alt="" />
          </IconBtn>
          <IconBtn
            aria-label="장바구니"
            onClick={() => navigate("/home/shoppingbag")}
          >
            <img src="/images/shoppingBag.png" alt="" />
          </IconBtn>
        </IconRow>
      </TopBar>

      {/* 여백 넉넉히 */}
      <Content>
        {/* 옷들 리스트 */}
        <List>
          {items.map((it) => (
            <>
              <Item key={it.id}>
                <Thumb src={it.thumb} alt={it.name} />
                <Info>
                  <Brand>{it.brand}</Brand>
                  <Name>{it.name}</Name>
                  <Tag>멤버십 대여</Tag>
                </Info>
              </Item>
              <Divider />
            </>
          ))}
        </List>

        {/* 요약 (구분선 없이) */}
        <Summary>
          <Row>
            <LeftText>멤버십 대여 의류</LeftText>
            <RightText>2 건</RightText>
          </Row>
          <Row>
            <LeftText>단건 결제</LeftText>
            <RightText>0 원</RightText>
          </Row>
        </Summary>
      </Content>

      {/* 하단 고정 CTA (확실히 보이도록 z-index/폭/패딩 확보) */}
      <BottomBar>
        <CTA>대여 신청하기</CTA>
      </BottomBar>
    </Page>
  );
}

/* ================= styles ================= */

const Divider = styled.div`
  height: 1px;
  background: #ededed; /* 연한 회색 실선 */
  margin: 3px 0; /* 위아래 여백 */
`;

const Page = styled.main`
  min-height: 100dvh;
  background: #fff;
  color: #111;
  padding: calc(14px + env(safe-area-inset-top)) 16px 0px;
`;

const TopBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: calc(18px + env(safe-area-inset-top)) 10px 30px;
  position: relative;
`;

const LeftSlot = styled.div`
  width: 48px; /* 오른쪽 아이콘 폭과 맞춤 */
  height: 24px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 0.2px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%); /* 화면 딱 중앙 */
`;

const IconRow = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;
const IconBtn = styled.button`
  border: 0;
  background: none;
  padding: 0;
  cursor: pointer;
  img {
    width: 20px;
    height: 20px;
    display: block;
  }
`;

const Content = styled.div`
  padding: 0 18px; /* 양옆 여백 늘림 */
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px; /* 아이템 사이 구분선 없이 간격만 */
`;

const Item = styled.article`
  display: flex;
  align-items: flex-start;
  gap: 14px;
`;

const Thumb = styled.img`
  /* ✅ 세로로 더 길게 (3:4 비율 느낌) */
  width: 104px;
  height: 135px;
  border-radius: 12px;
  object-fit: cover;
  background: #f3f3f3;
  flex: 0 0 auto;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
  padding-top: 4px;
`;

const Brand = styled.p`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.2px;
  margin: 0;
`;

const Name = styled.p`
  margin-top: 0;
  font-size: 13px;
  color: #565555;
  margin-bottom: 10px;
`;

const Tag = styled.span`
  align-self: flex-start;
  background: #2d2626;
  color: #fff;
  border-radius: 10px;
  padding: 7px 12px;
  font-size: 12px;
  font-weight: 500;
`;

/* 요약 */
const Summary = styled.section`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftText = styled.span`
  font-size: 16px;
  color: #222;
  font-weight: 600;
`;

const RightText = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

/* 하단 CTA */
const BottomBar = styled.div`
  position: fixed;
  left: 50%;
  bottom: 90px;
  transform: translateX(-50%);
  width: 393px;
  background: #fff;
  padding: 12px 18px calc(12px + env(safe-area-inset-bottom));
  box-sizing: border-box;
  z-index: 20; /* 충분히 높게 */
  display: flex;
`;

const CTA = styled.button`
  flex: 1 1 auto;
  height: 54px;
  border: 0;
  border-radius: 28px;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  background: linear-gradient(180deg, #222 0%, #111 100%);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.22);
  cursor: pointer;
`;

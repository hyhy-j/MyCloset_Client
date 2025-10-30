import React, { useState } from "react";
import styled from "styled-components";
import bg from "/images/background.png";
import deliver from "/images/deliver.png";

const Wrap = styled.main`
  min-height: 100dvh;
  background: url(${bg}) center / cover no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  justify-content: center;
  padding: 0 24px 20px;
`;

const Glass = styled.div`
  width: min(393px, 100%);
  padding: 0 18px;
  position: relative;
`;

const Brand = styled.div`
  font-family: "NeurimboGothic", "Pretendard", "Noto Sans KR", sans-serif; /* 느림보 고딕 */
  font-size: 22px;
  margin-bottom: 10px;
`;

const H1 = styled.h1`
  margin: 0 0 50px;
  font-size: 23px;
  font-weight: 800;
  letter-spacing: 1px;
`;

const Cards = styled.div`
  display: grid;
  gap: 18px;
  margin: 8px 0 18px;
`;

const Card = styled.button`
  width: 100%;
  border: 0;
  cursor: pointer;
  color: #fff;
  border-radius: 18px;
  padding: 22px 18px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  text-align: center;
  margin-bottom: 10px;

  /* ✅ 선택 시 플랜에 따른 글로우 색 */
  box-shadow: ${({ $active, $variant }) =>
    $active
      ? $variant === "basic"
        ? `0 0 0 2px ${GREEN}, 0 0 22px 4px ${GREEN_GLOW}`
        : `0 0 0 2px ${PURPLE}, 0 0 22px 4px ${PURPLE_GLOW}`
      : "0 0 0 1px rgba(255,255,255,.08)"};

  transition: box-shadow 0.15s ease, transform 0.1s ease;
  &:active {
    transform: translateY(1px);
  }
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 8px;

  /* ✅ 선택된 카드일 때만 색 변경 (Basic=초록, Premium=보라) */
  color: ${({ $active, $variant }) =>
    $active ? ($variant === "basic" ? GREEN : PURPLE) : "#ffffff"};
`;

const Desc = styled.p`
  margin: 0 0 8px;
  font-size: 13px;
  line-height: 1.6;
  opacity: 0.9;
  color: #a5a2a2;
`;

const Plus = styled.div`
  margin: 0px auto 8px;
  font-size: 20px;
  display: grid;
  place-items: center;
  background: none;
  font-weight: 500;
  color: #a5a2a2;
`;

const Perk = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  opacity: 0.95;
  color: #a5a2a2;
  img {
    width: 16px;
    height: 16px;
    display: block;
    filter: invert(1);
  }
`;

const Price = styled.div`
  margin-top: 12px;
  font-size: 14px;
  opacity: 0.95;
  span {
    font-size: 14px;
    font-weight: 700;
  }
`;

const CTA = styled.button`
  margin-top: 30px;
  display: block;
  width: 100%;
  height: 52px;
  border-radius: 30px;
  border: 0;
  color: #fff;
  font-size: 16px;
  font-weight: 800;
  background: linear-gradient(180deg, #222, #111);
  box-shadow: 0 0px 10px 4px rgba(107, 81, 81, 0.8);
  cursor: pointer;

  &:disabled {
    opacity: 0.45;
    box-shadow: none;
    cursor: not-allowed;
  }
`;

const Recommend = styled.img`
  display: block;
  position: absolute;
  width: 60px;
  top: 341px;
  left: 10px;
  z-index: 100;
`;

const GREEN = "rgba(67, 219, 92, 1)";
const GREEN_GLOW = "rgba(67, 219, 92, .35)";
const PURPLE = "rgba(168, 117, 255, 1)";
const PURPLE_GLOW = "rgba(168, 117, 255, .35)";

const Membership = () => {
  const [plan, setPlan] = useState(null); // 'basic' | 'premium' | null
  const disabled = !plan;

  const onPay = () => {
    if (!plan) return;
    // TODO: 결제 플로우 연결
    alert(`${plan === "basic" ? "Basic" : "Premium"} 결제 진행`);
  };

  return (
    <Wrap>
      <Glass>
        <Brand>WeCloset</Brand>
        <H1>멤버십 구매</H1>

        <Cards role="radiogroup" aria-label="멤버십 선택">
          <Card
            role="radio"
            aria-checked={plan === "basic"}
            $active={plan === "basic"}
            $variant="basic"
            onClick={() => setPlan("basic")}
          >
            <Title $active={plan === "basic"} $variant="basic">
              Basic
            </Title>
            <Desc>
              월 최대 4벌 대여 가능
              <br />
              (베이직 라인)
            </Desc>
            <Plus>＋</Plus>
            <Perk>
              <img src={deliver} alt="" /> 무료 배송
            </Perk>
            <Price>
              월 <span>29,900</span>원
            </Price>
          </Card>
          <Recommend src="/images/recommend.png" alt="recommend" />
          <Card
            role="radio"
            aria-checked={plan === "premium"}
            $active={plan === "premium"}
            $variant="premium"
            onClick={() => setPlan("premium")}
          >
            <Title $active={plan === "premium"} $variant="premium">
              Premium
            </Title>
            <Desc>
              월 최대 6벌 대여 가능
              <br />
              (프리미엄 4벌 + 베이직 2벌)
            </Desc>
            <Plus>＋</Plus>
            <Perk>
              <img src={deliver} alt="" /> 무료 배송
            </Perk>
            <Price>
              월 <span>69,900</span>원
            </Price>
          </Card>
        </Cards>

        <CTA
          type="button"
          disabled={disabled}
          aria-disabled={disabled}
          onClick={onPay}
        >
          결제하기
        </CTA>
      </Glass>
    </Wrap>
  );
};

export default Membership;

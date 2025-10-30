import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import background from "/images/background.png";

const IntroContainer = styled.div`
  background: url(${background}) center / cover no-repeat;
  min-height: 100dvh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: calc(16px + env(safe-area-inset-top)) 24px
    calc(80px + env(safe-area-inset-bottom));
  color: #fff;
  text-align: center;
`;

const Subtitle = styled.p`
  margin: 0 0 8px;
  font-size: 20px;
  line-height: 1.4;
  font-family: "Pretendard", "Noto Sans KR", sans-serif;
  opacity: 0.9;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
`;

const Title = styled.h1`
  margin: 0;
  font-family: "NeurimboGothic", "Pretendard", "Noto Sans KR", sans-serif;
  font-weight: 400;
  font-size: 55px;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.55);
`;

const Intro = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const t = setTimeout(() => {
      navigate("/category", { replace: true });
    }, 3000);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <IntroContainer>
      <Subtitle>오늘의 나를 바꾸는 옷장</Subtitle>
      <Title>WeCloset</Title>
    </IntroContainer>
  );
};

export default Intro;

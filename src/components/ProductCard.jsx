// src/components/ProductCard.jsx
import React from "react";
import styled from "styled-components";

/**
 * @param {string} imageName  예: "basic1", "premium2"
 * @param {string} brand      예: "ORDINARY HOLIDAY"
 * @param {string} name       예: "오프숄더 리미티 니트 [KHAKI]"
 * @param {string} ext        이미지 확장자 (기본 'jpg') — png면 'png'로 전달
 * @param {ReactNode} chip    선택: <Chip>Premium</Chip> 같은 배지 JSX
 */
export default function ProductCard({ imageName, brand, name, ext = "png" }) {
  const src = `/images/products/${imageName}.${ext}`;
  return (
    <Card role="article" aria-label={`${brand} ${name}`}>
      <Thumb>
        <img src={src} alt={`${brand} ${name}`} loading="lazy" />
      </Thumb>
      <Meta>
        <Brand>{brand}</Brand>
        <Name>{name}</Name>
      </Meta>
    </Card>
  );
}

/* styles */
const Card = styled.article`
  min-width: 108px;
  max-width: 108px;
`;

const Thumb = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 3/4;
  border-radius: 12px;
  overflow: hidden;
  background: #f2f2f2;

  img {
    width: 108px;
    height: 150px;
    display: block;
  }
`;

const ChipWrap = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  display: flex;
  gap: 6px;
`;

const Meta = styled.div`
  padding: 8px 2px 0;
`;

const Brand = styled.div`
  font-size: 10px;
  color: black;
  margin-bottom: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Name = styled.div`
  font-size: 10px;
  color: #565555;
  font-weight: 400;
  line-height: 1.35;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

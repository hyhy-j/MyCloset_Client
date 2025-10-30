// src/components/BottomNav.jsx
import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavBar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: min(393px, 100%);
  height: 64px;
  padding-bottom: env(safe-area-inset-bottom);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border-top: 1px solid rgba(0, 0, 0, 0.08);

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  z-index: 100;
`;

const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: ${({ $active }) => ($active ? "#111" : "#888")};
  font-size: 12px;
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  text-decoration: none;
  padding: 6px 0;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  display: block;
`;

const Label = styled.span`
  line-height: 1;
`;

const TABS = [
  {
    to: "/home",
    label: "홈",
    icon: "/icons/home.png",
    iconActive: "/icons/home_fill.png",
  },
  {
    to: "/category",
    label: "카테고리",
    icon: "/icons/category.png",
    iconActive: "/icons/category_fill.png",
  },
  {
    to: "/closet",
    label: "내 옷장",
    icon: "/icons/closet.png",
    iconActive: "/icons/closet_fill.png",
  },
  {
    to: "/wishlist",
    label: "위시리스트",
    icon: "/icons/wish.png",
    iconActive: "/icons/wish_fill.png",
  },
  {
    to: "/my",
    label: "마이",
    icon: "/icons/my.png",
    iconActive: "/icons/my_fill.png",
  },
];

export default function BottomNav() {
  return (
    <NavBar role="navigation" aria-label="하단 내비게이션">
      {TABS.map(({ to, label, icon, iconActive, end }) => (
        <NavLink to={to} end={end} key={to} style={{ textDecoration: "none" }}>
          {({ isActive }) => (
            <ItemWrap
              $active={isActive}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon
                src={isActive ? iconActive : icon}
                alt={`${label} 아이콘`}
              />
              <Label>{label}</Label>
            </ItemWrap>
          )}
        </NavLink>
      ))}
    </NavBar>
  );
}

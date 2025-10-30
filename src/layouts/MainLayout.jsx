// src/layouts/MainLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "../components/BottomNav";

export default function MainLayout() {
  return (
    <>
      {/* 페이지 본문 */}
      <Outlet />

      {/* 모든 메인 페이지에서 고정 하단바 */}
      <BottomNav />
    </>
  );
}

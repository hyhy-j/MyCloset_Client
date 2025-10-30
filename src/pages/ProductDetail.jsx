import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import detail1 from "/images/products/basic1Detail.png";
import lock from "/images/lock.png";

const Page = styled.main`
  position: relative;
  min-height: 100dvh;
  background: #fff;
  padding-bottom: 92px; /* 하단 CTA 공간 확보 */
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 14px 8px;
`;

const Back = styled.button`
  background: none;
  border: 0;
  font-size: 20px;
  cursor: pointer;
`;

const RightIcons = styled.div`
  display: flex;
  gap: 10px;
`;
const IconButton = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  img {
    width: 20px;
    height: 20px;
    display: block;
  }
`;
const Picture = styled.img`
  margin-top: 10px;
  width: 393px;
  height: 431px;
  border-radius: 6px;
  display: block;
  background: #f2f2f2;
`;

const TitleBox = styled.div`
  padding: 12px 14px 6px;
`;
const Brand = styled.p`
  margin: 0 0 6px;
  font-size: 16px;
  letter-spacing: 0.2px;
  font-weight: 600;
`;
const Name = styled.p`
  margin: 0;
  font-size: 14px;
  color: #555;
`;

const InfoCard = styled.section`
  margin: 12px 0;
  padding: 12px 14px;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  background: #fff;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const HowToText = styled.span`
  font-size: 12px;
`;
const Check = styled.span`
  font-size: 16px;
  line-height: 1;
  transform: translateY(-1px);
`;
const Ship = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #333;
  font-size: 10px;
  img {
    width: 13px;
    height: 13px;
    display: block;
  }
`;
const Badge = styled.span`
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 8px;
  font-weight: 600;
  color: #111;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: ${({ tone }) => (tone === "basic" ? "#94c55c" : "#d17fd9")};
`;
const Pill = styled.span`
  font-size: 10px;
  padding: 5px 8px;
  border-radius: 2px;
  background: #3e3535;
  color: white;
`;

const Divider = styled.hr`
  border: 0;
  height: 1px;
  background: #eee;
  margin: 10px 0;
`;

const PriceRow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 5px 0;
  &:not(:first-child) {
    margin-top: 5px;
  }
`;
const Price = styled.div`
  font-weight: 600;
  font-size: 12px;
`;

const Tabs = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 12px;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  background: #f6f6f6;
`;
const TabButton = styled.button`
  height: 44px;
  border: 0;
  background: ${({ $active }) => ($active ? "#fff" : "transparent")};
  font-weight: ${({ $active }) => ($active ? 700 : 500)};
  color: #111;
  cursor: pointer;
  border-right: 1px solid #e6e6e6;
  &:last-child {
    border-right: none;
  }
  font-size: 12px;
`;
const TabPanel = styled.section`
  min-height: 120px;
  padding: 14px;
`;

const BottomBar = styled.div`
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 393px;
  padding: 10px 12px calc(10px + env(safe-area-inset-bottom));
  background: #fff;
  border-top: 1px solid #e8e8e8;
  display: grid;
  grid-template-columns: 60px 1fr;
  gap: 10px;
  align-items: center;
  z-index: 60;
  box-sizing: border-box;
`;
const Wish = styled.button`
  height: 48px;
  background: none;
  border: none;
  display: grid;
  place-items: center;
  gap: 4px;
  grid-template-rows: auto auto;
  img {
    width: 25px;
    height: 25px;
    display: block;
    cursor: pointer;
  }
  small {
    font-size: 11px;
    color: #444;
  }
`;
const CTA = styled.button`
  height: 48px;
  border-radius: 12px;
  border: 0;
  cursor: pointer;
  background: linear-gradient(180deg, #222, #111);
  color: #fff;
  font-size: 16px;
  font-weight: 700;
`;

const Sheet = styled.div`
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 393px;
  background: #fff;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  box-shadow: 0 -10px 24px rgba(0, 0, 0, 0.2);
  z-index: 50; /* ✅ BottomBar(60)보다 낮게 */
  padding: 12px 14px 88px; /* ✅ 하단 CTA만큼 여유 (겹침 방지) */
  box-sizing: border-box;
`;

const Dim = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 40;
`;

const Toast = styled.div`
  position: fixed;
  left: 50%;
  top: 48%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 3px 14px;
  min-width: 260px;
  background: #262020;
  color: #fff;
  border-radius: 5px;
  z-index: 70;
  font-size: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.22);
`;
const GoCart = styled.p`
  border-bottom: 1px solid white;
  background: none;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
`;

const Handle = styled.div`
  width: 34px;
  height: 4px;
  border-radius: 999px;
  background: #ddd;
  margin: 4px auto 10px;
`;
const SheetSection = styled.div`
  padding: 5px 0;
`;

const OptionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 8px 2px;
  &:not(:first-child) {
    margin-top: 10px;
  }
`;

const CheckBox = styled.label`
  position: relative;
  width: 18px;
  height: 18px;
  display: inline-block;

  input {
    position: absolute;
    inset: 0;
    opacity: 0;
  }

  .box {
    width: 18px;
    height: 18px;
    border: 2px solid #222;
    border-radius: 4px;
    display: inline-flex; /* 가운데 정렬 */
    align-items: center;
    justify-content: center;
    background: #fff;
  }

  input:checked + .box {
    background: linear-gradient(#222, #111);
    border-color: #111;
  }
  input:checked + .box::after {
    content: "✓";
    color: #fff;
    font-weight: 500;
    font-size: 13px; /* 상자 높이에 맞춤 */
    line-height: 1;
  }
`;

const Label = styled.span`
  margin-left: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #222;
  display: inline-flex; /* 텍스트 자체도 중앙 */
  align-items: center;
  line-height: 18px; /* 상자(18px)와 동일 */
`;

const Dots = styled.span`
  flex: 1; /* ✅ 남는 공간 전부 차지 */
  border-bottom: 1.5px dotted #cfcfcf;
  height: 0; /* 라인만 보이도록 */
  margin: 0 8px;
  transform: translateY(1px); /* 살짝 내려서 시각적 중앙 */
`;

const PriceStrong = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #111;
`;

const CheckLabelContainer = styled.div`
  display: inline-flex;
  align-items: center; /* 컨테이너 레벨 정렬 */
  gap: 8px;
`;

/* Pill/Divider 재사용 OK */

const ProductDetail = () => {
  const [tab, setTab] = useState("desc"); // 'desc' | 'review' | 'qna'
  const navigate = useNavigate();

  // 컴포넌트 최상단 내부에 추가
  const [sheetOpen, setSheetOpen] = useState(false); // 바텀시트 열림
  const [toastOpen, setToastOpen] = useState(false); // 상단 토스트
  const [opts, setOpts] = useState({
    membership: true,
    rent4: false,
    rent7: true,
  });

  // 기존 toggle 대신 '단일 선택' 전용
  const selectOnly = (key) =>
    setOpts({ membership: false, rent4: false, rent7: false, [key]: true });

  // 바텀시트에서 "장바구니에 담기" 클릭
  const addToCart = () => {
    setSheetOpen(false);
    setToastOpen(true);
    // 2.2초 후 토스트 자동 닫힘
    setTimeout(() => setToastOpen(false), 2200);
  };

  return (
    <Page>
      {/* 상단 헤더 */}
      <TopBar>
        <Back onClick={() => navigate(-1)} aria-label="뒤로가기">
          ←
        </Back>
        <RightIcons>
          <IconButton aria-label="알림">
            <img src="/images/notice.png" alt="" />
          </IconButton>
          <IconButton aria-label="장바구니">
            <img src="/images/shoppingBag.png" alt="" />
          </IconButton>
        </RightIcons>
      </TopBar>

      {/* 상품 이미지 */}
      <Picture src={detail1} alt={`상세 이미지1`} />

      {/* 상품 타이틀 */}
      <TitleBox>
        <Brand>ORDINARY HOLIDAY</Brand>
        <Name>오프숄더 데미지 니트 [KHAKI]</Name>
      </TitleBox>

      {/* 안내 박스 1: 멤버십/등급/무료배송 */}
      <InfoCard>
        <Row>
          <Left>
            <Check>✓</Check>
            <HowToText>멤버십으로 대여</HowToText>
            <Badge tone="basic">Basic</Badge>
            <Badge tone="premium">Premium</Badge>
          </Left>
          <Ship>
            <img src="/images/deliver.png" alt="" />
            <span>무료배송</span>
          </Ship>
        </Row>
        <Divider />
        {/* 안내 박스 2: 단건 결제 + 요금 */}
        <Row>
          <Left>
            <Pill>단건 결제</Pill>
            <Ship>
              <img src="/images/deliver.png" alt="" />
              <span>3000원 (5만원 이상 무료 배송)</span>
            </Ship>
          </Left>
        </Row>
        <PriceRow>
          <Left>
            <Check>✓</Check>
            <HowToText>4일 대여</HowToText>
          </Left>
          <Price>9,000 원</Price>
        </PriceRow>
        <PriceRow>
          <Left>
            <Check>✓</Check>
            <HowToText>7일 대여</HowToText>
          </Left>
          <Price>12,000 원</Price>
        </PriceRow>
      </InfoCard>

      {/* 탭 */}
      <Tabs>
        <TabButton $active={tab === "desc"} onClick={() => setTab("desc")}>
          제품소개
        </TabButton>
        <TabButton $active={tab === "review"} onClick={() => setTab("review")}>
          사용후기
        </TabButton>
        <TabButton $active={tab === "qna"} onClick={() => setTab("qna")}>
          Q&amp;A
        </TabButton>
      </Tabs>

      {/* 탭 콘텐츠 (콘텐츠는 나중에 너가 채워넣기) */}
      <TabPanel>
        {tab === "desc" && (
          <DescSection>
            <EngTitle>OFF-SHOULDER DAMAGE KNITWEAR, KHAKI</EngTitle>
            <KorTitle>오프숄더 데미지 니트</KorTitle>
            <DescText>
              경쾌한 워싱의 데미지와 슬림 워싱으로
              <br />
              빈티지한 무드가 강조된 오프숄더 니트입니다.
              <br />
              각진 디테일로 트렌디한 핏을 완성하며,
              <br />
              쉽게 늘어나지 않는 밀도 높은 소재를 사용하여
              <br />
              내구성이 돋보입니다.
            </DescText>

            {/* 착용 이미지들 */}
            <DescImage
              src="/images/products/basic1Detail2.png"
              alt="front view"
            />
            <DescImage
              src="/images/products/basic1Detail3.png"
              alt="side view"
            />
            <DescImage
              src="/images/products/basic1Detail4.png"
              alt="back view"
            />
          </DescSection>
        )}
        {tab === "review" && (
          <ReviewSection>
            <ReviewHeader>
              <p>후기(3)</p>
              <Stars aria-label="평균 4점">
                <i>★</i>
                <i>★</i>
                <i>★</i>
                <i>★</i>
                <i className="off">★</i>
              </Stars>
            </ReviewHeader>

            {/* 포토 리뷰 썸네일 그리드 */}
            <PhotoGrid>
              {Array.from({ length: 6 }).map((_, i) => (
                <Thumb key={i}>
                  <img
                    src="/images/products/basic1Detail2.png"
                    alt={`포토리뷰 ${i + 1}`}
                  />
                </Thumb>
              ))}
            </PhotoGrid>

            {/* 텍스트 리뷰 리스트 */}
            <ReviewList>
              <ReviewItem>
                <Stars>
                  <i>★</i>
                  <i>★</i>
                  <i>★</i>
                  <i>★</i>
                  <i>★</i>
                </Stars>
                <User>closet*****</User>
                <Content>
                  멤버십으로 이런 좋은 옷을 입어볼 수 있다니! 최고입니다.
                </Content>
              </ReviewItem>

              <Divider />

              <ReviewItem>
                <Stars>
                  <i>★</i>
                  <i>★</i>
                  <i>★</i>
                  <i>★</i>
                  <i className="off">★</i>
                </Stars>
                <User>ljhljh****</User>
                <Content>
                  평소에 잘 안 입던 스타일인데 이번에 도전해봤네요!!
                </Content>
              </ReviewItem>

              <Divider />

              <ReviewItem>
                <Stars>
                  <i>★</i>
                  <i>★</i>
                  <i>★</i>
                  <i>★</i>
                  <i>★</i>
                </Stars>
                <User>seo**</User>
                <Content>
                  세탁이 잘 되어서 배달 왔습니다. 믿고 입을 수 있겠어요.
                </Content>
              </ReviewItem>
            </ReviewList>
          </ReviewSection>
        )}
        {tab === "qna" && (
          <QnaSection>
            <QnaHeader>
              <p>Q&amp;A (5)</p>
            </QnaHeader>

            {/* 1. 공개글 예시 */}
            <QnaItem>
              <Meta>
                <Cat>[배송 문의]</Cat>
                <User>closet*****</User>
              </Meta>
              <Question>
                일주일 전 대여했는데, 배달이 언제쯤 시작될까요?
              </Question>
            </QnaItem>

            <Divider />

            {/* 2. 비밀글 + 답변 완료 */}
            <QnaItem>
              <Meta>
                <Cat>[상품 문의]</Cat>
                <User>ljhljh****</User>
                <Status>답변 완료</Status>
              </Meta>
              <Secret>
                <Lock src={lock} alt="lock" />
                비밀글입니다.
              </Secret>
            </QnaItem>

            <Divider />

            <QnaItem>
              <Meta>
                <Cat>[세탁 문의]</Cat>
                <User>seo**</User>
                <Status>답변 완료</Status>
              </Meta>
              <Secret>
                <Lock src={lock} alt="lock" />
                비밀글입니다.
              </Secret>
            </QnaItem>

            <Divider />

            <QnaItem>
              <Meta>
                <Cat>[세탁 문의]</Cat>
                <User>sleep*******</User>
                <Status>답변 완료</Status>
              </Meta>
              <Secret>
                <Lock src={lock} alt="lock" />
                비밀글입니다.
              </Secret>
            </QnaItem>

            <Divider />

            <QnaItem>
              <Meta>
                <Cat>[배송 문의]</Cat>
                <User>ha**</User>
                <Status>답변 완료</Status>
              </Meta>
              <Secret>
                <Lock src={lock} alt="lock" />
                비밀글입니다.
              </Secret>
            </QnaItem>
          </QnaSection>
        )}
      </TabPanel>

      {/* 하단 고정 바 */}
      <BottomBar>
        <Wish>
          <img src="/icons/wish.png" alt="" />
          <small>386</small>
        </Wish>
        <CTA onClick={sheetOpen ? addToCart : () => setSheetOpen(true)}>
          {sheetOpen ? "장바구니에 담기" : "대여 신청하기"}
        </CTA>
      </BottomBar>
      {/* 상품 이미지 아래 어딘가에 위치 */}
      {toastOpen && (
        <Toast role="status" aria-live="polite">
          <span>장바구니에 상품을 담았어요</span>
          <GoCart onClick={() => navigate("/cart")}>바로가기</GoCart>
        </Toast>
      )}
      {/* 바텀시트 */}
      {sheetOpen && (
        <>
          <Dim onClick={() => setSheetOpen(false)} />
          <Sheet role="dialog" aria-modal="true">
            <Handle />
            <SheetSection>
              <OptionRow>
                <CheckLabelContainer>
                  <CheckBox>
                    <input
                      type="checkbox"
                      checked={opts.membership}
                      onChange={() => selectOnly("membership")}
                    />
                    <span className="box" />
                  </CheckBox>
                  <Label>멤버십으로 대여</Label>
                </CheckLabelContainer>
              </OptionRow>
            </SheetSection>

            <Divider />

            <SheetSection>
              <Pill>단건 결제</Pill>

              <OptionRow>
                <CheckLabelContainer>
                  <CheckBox>
                    <input
                      type="checkbox"
                      checked={opts.rent4}
                      onChange={() => selectOnly("rent4")}
                    />
                    <span className="box" />
                  </CheckBox>
                  <Label>4일 대여</Label>
                </CheckLabelContainer>
                <Dots aria-hidden="true" />
                <PriceStrong>9,000 원</PriceStrong>
              </OptionRow>

              <OptionRow>
                <CheckLabelContainer>
                  <CheckBox>
                    <input
                      type="checkbox"
                      checked={opts.rent7}
                      onChange={() => selectOnly("rent7")}
                    />
                    <span className="box" />
                  </CheckBox>
                  <Label>7일 대여</Label>
                </CheckLabelContainer>
                <Dots aria-hidden="true" />
                <PriceStrong>12,000 원</PriceStrong>
              </OptionRow>
            </SheetSection>
          </Sheet>
        </>
      )}
    </Page>
  );
};

// 상세 정보 섹션
const DescSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #111;
  font-size: 14px;
  line-height: 1.6;
  letter-spacing: 0.2px;
`;

const EngTitle = styled.p`
  font-size: 10px;
  color: #555;
  margin: 0 0 4px;
`;

const KorTitle = styled.h3`
  font-size: 15px;
  font-weight: 700;
  margin: 0 0 8px;
`;

const DescText = styled.p`
  font-size: 12px;
  color: #444;
  margin: 0 0 18px;
  white-space: pre-line;
`;

const DescImage = styled.img`
  width: 100%;
  margin-bottom: 16px;
  background: #f5f5f5;
`;

/* ── 후기 섹션 ─────────────────────────── */
const ReviewSection = styled.div`
  padding: 0 0 5px;
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: -5px 0 0px;
  p {
    font-size: 16px;
    font-weight: 500;
  }
`;

const Stars = styled.div`
  display: inline-flex;
  gap: 2px;
  font-size: 16px;
  line-height: 1;
  i {
    color: #ffb400;
    font-style: normal;
  }
  .off {
    color: #d6d6d6;
  }
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin: 6px 0 14px;
`;

const Thumb = styled.div`
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  overflow: hidden;
  background: #f2f2f2;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const ReviewList = styled.div`
  background: #fff;
`;

const ReviewItem = styled.div`
  padding: 12px 4px 10px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  column-gap: 8px;
  row-gap: 6px;

  ${Stars} {
    grid-column: 1 / 2;
  }
  /* 유저명과 내용 줄바꿈 정렬 */
`;

const Content = styled.p`
  grid-column: 1 / 3;
  margin: 0;
  font-size: 13px;
  color: #333;
  line-height: 1.5;
`;

/* 기존 Divider 재사용 */

/* ── Q&A 섹션 ─────────────────────────── */
const QnaSection = styled.div`
  padding: 0 0 5px;
`;
const QnaHeader = styled.div`
  margin: -5px 0 0px;
  p {
    font-size: 16px;
    font-weight: 500;
  }
`;
const QnaItem = styled.div`
  padding: 11px 2px;
`;
const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;
const Cat = styled.span`
  font-size: 12px;
  color: #111;
  font-weight: 600;
`;
const User = styled.span`
  font-size: 12px;
  color: #777;
`;
const Status = styled.span`
  margin-left: auto;
  font-size: 9px;
  color: #fff;
  background: #565555;
  padding: 2.5px 8px;
  border-radius: 2px;
  font-weight: 300;
`;
const Question = styled.p`
  margin: 0;
  font-size: 13px;
  color: #333;
  line-height: 1.5;
`;
const Secret = styled.p`
  margin: 0;
  font-size: 13px;
  color: #333;
  display: flex;
  align-items: center;
  gap: 6px;
`;
const Lock = styled.img``;

export default ProductDetail;

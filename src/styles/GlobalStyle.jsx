import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/PretendardVariable.ttf') format('truetype-variations'),
         url('/fonts/PretendardVariable.ttf') format('truetype');
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'NeurimboGothic';
    src: url('/fonts/neurimboGothicRegular.otf') format('opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* 전역 기본 폰트만 Pretendard로 */
  body {
    font-family: 'Pretendard', system-ui, -apple-system, 'Segoe UI',
                 Roboto, 'Noto Sans KR', sans-serif;
  }
`;

export default GlobalStyle;

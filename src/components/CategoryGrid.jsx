// src/components/CategoryGrid.jsx
import React from "react";
import styled from "styled-components";

/** props
 * items: string[]
 * value: string
 * onChange: (next: string) => void
 * columns?: number        // 기본 4
 * fullBleed?: boolean     // 부모 패딩 있어도 좌우 꽉 채우기
 */
export default function CategoryGrid({
  items,
  value,
  onChange,
  columns = 4,
  fullBleed = false,
}) {
  return (
    <Grid
      role="grid"
      $cols={columns}
      $fullBleed={fullBleed}
      aria-label="카테고리 선택"
    >
      {items.map((label) => {
        const id = `cat-${label}`;
        const active = value === label;
        return (
          <Cell role="row" key={label}>
            <Radio
              type="radio"
              id={id}
              name="category"
              value={label}
              checked={active}
              onChange={() => onChange(label)}
            />
            <Label
              role="gridcell"
              htmlFor={id}
              aria-selected={active}
              $active={active}
            >
              {label}
            </Label>
          </Cell>
        );
      })}
    </Grid>
  );
}

/* ───── styles: 참조 순서 중요! Cell → Label → Grid ───── */

const Cell = styled.div`
  position: relative;
`;

const Radio = styled.input`
  position: absolute;
  inset: 0;
  opacity: 0;
  pointer-events: none;
`;

const Label = styled.label`
  display: grid;
  place-items: center;
  height: 30px;
  font-size: 11px;
  cursor: pointer;

  /* 상태: 텍스트 불투명도만 변경 (배경 변화 없음) */
  color: ${({ $active }) => ($active ? "#111" : "rgba(17,17,17,0.5)")};
  font-weight: 500;

  &:focus-visible {
    outline: 2px solid #111;
    outline-offset: -2px;
  }
`;

const Grid = styled.div`
  width: ${({ $fullBleed }) => ($fullBleed ? "393px" : "100%")};
  ${({ $fullBleed }) =>
    $fullBleed &&
    `
    margin-left: calc(50% - 196.5px);
    margin-right: calc(50% - 196.5px);
  `}
  display: grid;
  grid-template-columns: repeat(${({ $cols }) => $cols}, 1fr);
  background: #fff;

  /* 내부 구분선만 (바깥 보더 없음) */
  ${Cell} ${Label} {
    border-right: 1px solid #e9e9e9;
    border-bottom: 1px solid #e9e9e9;
  }

  /* 마지막 열 우측선 제거 */
  ${Cell}:nth-child(${({ $cols }) => `${$cols}n`}) ${Label} {
    border-right: none;
  }

  /* 마지막 행 하단선 제거 */
  ${Cell}:nth-last-child(-n + ${({ $cols }) => $cols}) ${Label} {
    border-bottom: none;
  }
`;

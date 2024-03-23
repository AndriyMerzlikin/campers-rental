import styled from "styled-components";

export const CardContainer = styled.div`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 20px;
  padding: 24px;
  width: 888px;
  height: 358px;
  margin-bottom: 32px;
  display: flex;
  gap: 24px;
`;

export const CarImg = styled.img`
  border-radius: 10px;
  width: 290px;
  height: 310px;
`;

export const CardInfoBox = styled.div`
  width: 526px;
  height: 310px;
`;

//title box info

export const TitleInfoBox = styled.div`
  width: 526px;
  height: 62px;
`;

export const TitleInfoLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: ${(p) => p.theme.colors.black};
`;

export const CardPrice = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: ${(p) => p.theme.colors.black};
`;

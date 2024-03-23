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
  margin-bottom: 24px;
`;

export const TitleInfoLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
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

// reviews box

export const ReviewsInfoBox = styled.div`
  /* width: 267px; */
  height: 24px;
  display: flex;
  gap: 16px;
`;

export const ReviewsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ReviewsLink = styled.a`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: ${(p) => p.theme.colors.black};
`;

export const LocationBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const LocationText = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${(p) => p.theme.colors.black};
`;

// text descriotion

export const DescriptionText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${(p) => p.theme.colors.grey};
  overflow: hidden;
  white-space: nowrap; /* Запобігає переносу тексту */
  text-overflow: ellipsis;
`;

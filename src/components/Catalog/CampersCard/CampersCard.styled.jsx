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
  object-fit: cover;
  object-position: center;
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

export const PriceBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const CardPrice = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: ${(p) => p.theme.colors.black};
`;

export const HeartBtn = styled.button`
  border: none;
  background: none;
`;

export const HeartSvg = styled.svg`
  fill: ${(p) => (p.isClicked ? p.theme.colors.red : "#fff")};
  stroke: ${(p) => (p.isClicked ? p.theme.colors.red : "#101828")};

  &:hover {
    fill: ${(p) => p.theme.colors.red};
    stroke: ${(p) => p.theme.colors.red};
  }
`;

// reviews box

export const ReviewsInfoBox = styled.div`
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
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 24px;
`;

// options

export const OptionsList = styled.ul`
  width: 526px;
  height: 96px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 8px;
  margin-bottom: 24px;
`;

export const OptionsItem = styled.li`
  border-radius: 100px;
  padding: 12px 18px;
  background: ${(p) => p.theme.colors.lightGrey};
  display: flex;
  gap: 8px;
  height: 44px;
`;

export const Optionstext = styled.li`
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  color: ${(p) => p.theme.colors.black};
`;

// button

export const ShowMoreBtn = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #fff;

  border: none;
  border-radius: 200px;
  padding: 16px 40px;
  width: 166px;
  height: 56px;
  background: ${(p) => p.theme.colors.red};
  transition: ${(p) => p.theme.transition};

  &:hover {
    background-color: #d84343;
  }
`;

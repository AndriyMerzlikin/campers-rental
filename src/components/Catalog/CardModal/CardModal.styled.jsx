import styled from "styled-components";

export const ModalContainer = styled.div`
  position: relative;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  border: none;
  width: 32px;
  height: 32px;
  cursor: pointer;
  font-size: 16px;
`;

// info
export const InfoContainer = styled.div`
  margin-bottom: 24px;
`;

export const CardTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: ${(p) => p.theme.colors.black};
  margin-bottom: 8px;
`;

// reviews

export const ReviewsInfoBox = styled.div`
  height: 24px;
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
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

// price

export const CardPrice = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: ${(p) => p.theme.colors.black};
`;

// img

export const ImgList = styled.ul`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`;

export const CarImg = styled.img`
  border-radius: 10px;
  width: 290px;
  height: 310px;
  object-fit: cover;
  object-position: center;
`;

// descr

export const DescriptionText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${(p) => p.theme.colors.grey};
  margin-bottom: 44px;
`;

// info

export const InformList = styled.ul`
  display: flex;
  gap: 40px;
  max-width: 216px;
`;

export const InformItem = styled.li`
  position: relative;
`;

export const InfoMenuBtn = styled.button`
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  color: ${(p) => p.theme.colors.black};
  border: none;
  background-color: transparent;
`;

export const RedLine = styled.hr`
  position: absolute;
  top: 36px;
  width: 100%;
  border: none;
  border-top: 5px solid ${(p) => p.theme.colors.red};
`;

export const HorizontalLine = styled.hr`
  border: none;
  border-top: 1px solid rgba(16, 24, 40, 0.1);
  width: 100%;
  margin: 20px 0;
`;

export const InformBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

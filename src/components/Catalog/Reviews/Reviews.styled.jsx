import styled from "styled-components";

export const ReviewerItem = styled.li`
  width: 430px;
  height: auto;
  margin-bottom: 24px;
`;

export const ReviewerNameBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 172px;
  height: 60px;
  margin-bottom: 16px;
`;

export const CircleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  width: 60px;
  height: 60px;
  background-color: ${(p) => p.theme.colors.lightGrey};
`;

export const FirstLetterText = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: ${(p) => p.theme.colors.red};
`;

export const NameText = styled.h4`
  font-weight: 600;
  font-size: 18px;
  line-height: 133%;
  color: ${(p) => p.theme.colors.black};
  margin-bottom: 4px;
`;

export const ReviewerText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${(p) => p.theme.colors.grey};
`;

export const IconsWrapper = styled.div`
  display: flex;
`;

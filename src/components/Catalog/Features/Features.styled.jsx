import styled from "styled-components";

export const FeaturesContainer = styled.div`
  width: 430px;
  height: 530px;
`;

export const OptionsList = styled.ul`
  width: 430px;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 8px;
  margin-bottom: 44px;
`;

export const OptionsItem = styled.li`
  border-radius: 100px;
  padding: 12px 18px;
  background: ${(p) => p.theme.colors.lightGrey};
  display: flex;
  gap: 8px;
  height: 44px;
`;

export const Optionstext = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  color: ${(p) => p.theme.colors.black};
`;

// vehicle details

export const HorizontalLine = styled.hr`
  width: 430px;
  border: none;
  border-top: 1px solid rgba(16, 24, 40, 0.1);
  margin-bottom: 14px;
`;

export const DetailsItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
`;

export const DetailsTitle = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  color: ${(p) => p.theme.colors.black};
`;

export const DetailsName = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 133%;
  text-align: center;
  color: ${(p) => p.theme.colors.black};
`;

export const DetailsValue = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 133%;
  text-align: center;
  color: ${(p) => p.theme.colors.black};
`;

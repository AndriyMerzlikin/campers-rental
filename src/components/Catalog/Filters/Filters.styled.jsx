import styled from "styled-components";

export const LocationForm = styled.form`
  width: 360px;
  height: 88px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
`;

export const LocationLabel = styled.label`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: rgba(16, 24, 40, 0.6);
`;

export const LocationInput = styled.input`
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: rgba(16, 24, 40, 0.6);

  border-radius: 10px;
  border: none;
  padding: 18px 18px 18px 18px;
  width: 360px;
  height: 56px;
  background: ${(p) => p.theme.colors.veryLightGrey};
`;

export const FiltersText = styled.h4`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  width: 48px;
  color: ${(p) => p.theme.colors.grey};
  margin-bottom: 14px;
`;

export const EquipmentFilterBox = styled.div`
  /* border: 1px solid black; */
  width: 360px;
  height: 270px;
  margin-bottom: 32px;
`;

export const FilterTitle = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  color: ${(p) => p.theme.colors.black};
`;

export const HorizontalLine = styled.hr`
  border: none;
  border-top: 1px solid rgba(16, 24, 40, 0.1);
  width: 100%;
  margin: 20px 0;
`;

export const TypeFilterBox = styled.div`
  width: 360px;
  height: 167px;
  margin-bottom: 64px;
`;

export const Filterlist = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 8px;
`;

export const FilterItem = styled.li`
  width: 114px;
  height: 95px;
`;

export const FilterButton = styled.button`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  background-color: #fff;
  width: 100%;
  height: 100%;
`;

export const SearchBtn = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #fff;

  border: none;
  border-radius: 200px;
  padding: 16px 60px;
  width: 173px;
  height: 56px;
  background: ${(p) => p.theme.colors.red};
  transition: ${(p) => p.theme.transition};

  &:hover {
    background-color: #d84343;
  }
`;

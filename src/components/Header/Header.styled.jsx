import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  padding-left: 64px;
  padding-right: 64px;
  /* left: 50%;
  transform: translateX(-50%); */
  width: 100%;
  height: 84px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
  background-color: ${(p) => p.theme.colors.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderBox = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 16px;
`;

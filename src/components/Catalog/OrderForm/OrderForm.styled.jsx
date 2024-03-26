import { Form as FormikForm, Field as FormikField, ErrorMessage } from "formik";
import styled from "styled-components";

export const FormContainer = styled.div`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 24px;
  width: 448px;
  height: 532px;
`;

export const FormTitle = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  color: ${(p) => p.theme.colors.black};
  margin-bottom: 8px;
`;

export const FormDescr = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${(p) => p.theme.colors.grey};
  margin-bottom: 24px;
`;

// form

export const Form = styled(FormikForm)``;

export const Field = styled(FormikField)`
  border: none;
  border-radius: 10px;
  padding: ${(p) =>
    p.placeholder === "Comment" ? "18px 18px 76px 18px" : "18px"};
  width: 400px;
  height: ${(p) => (p.placeholder === "Comment" ? "114px" : "56px")};
  background: ${(p) => p.theme.colors.veryLightGrey};
  margin-bottom: ${(p) => (p.placeholder === "Comment" ? "24px" : "14px")};
`;

export const Errormsg = styled(ErrorMessage)`
  /* position: relative;
  z-index: -10;
  top: -30px; */
  color: red;
  font-size: 12px;
`;

export const SubmitBtn = styled.button`
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

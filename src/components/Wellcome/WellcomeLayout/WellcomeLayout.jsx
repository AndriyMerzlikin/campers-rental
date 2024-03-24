import { BgImgHolder } from "./WellcomeLayout.styled";

// eslint-disable-next-line react/prop-types
export const ProductsLayout = ({ children }) => {
  return (
    <>
      <BgImgHolder>{children}</BgImgHolder>
    </>
  );
};

import {
  CarImg,
  CardContainer,
  CardInfoBox,
  CardPrice,
  CardTitle,
  TitleInfoBox,
  TitleInfoLine,
} from "./CampersCard.styled";

// eslint-disable-next-line react/prop-types
export const CampersCard = ({ value: { name, gallery, price } }) => {
  return (
    <CardContainer>
      <CarImg src={gallery[0]} alt="car" />
      <CardInfoBox>
        <TitleInfoBox>
          <TitleInfoLine>
            <CardTitle>{name}</CardTitle>
            <CardPrice>{price}</CardPrice>
          </TitleInfoLine>
        </TitleInfoBox>
      </CardInfoBox>
    </CardContainer>
  );
};

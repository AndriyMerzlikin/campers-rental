import sprite from "../../../assets/sprite.svg";
import {
  CarImg,
  CardContainer,
  CardInfoBox,
  CardPrice,
  CardTitle,
  DescriptionText,
  LocationBox,
  LocationText,
  ReviewsBox,
  ReviewsInfoBox,
  ReviewsLink,
  TitleInfoBox,
  TitleInfoLine,
} from "./CampersCard.styled";

// eslint-disable-next-line react/prop-types
export const CampersCard = ({
  // eslint-disable-next-line react/prop-types
  value: { name, gallery, price, location, reviews, rating, description },
}) => {
  return (
    <CardContainer>
      <CarImg src={gallery[0]} alt="car" />
      <CardInfoBox>
        <TitleInfoBox>
          <TitleInfoLine>
            <CardTitle>{name}</CardTitle>
            <CardPrice>{price}</CardPrice>
          </TitleInfoLine>
          <ReviewsInfoBox>
            <ReviewsBox>
              <svg width="16px" height="16px">
                <use xlinkHref={sprite + "#star"} />
              </svg>
              <ReviewsLink href="#">
                <p>
                  <span>{rating}</span>({reviews.length} Reviews)
                </p>
              </ReviewsLink>
            </ReviewsBox>
            <LocationBox>
              <svg width="16px" height="16px">
                <use xlinkHref={sprite + "#map-pin"} />
              </svg>
              <LocationText>{location}</LocationText>
            </LocationBox>
          </ReviewsInfoBox>
        </TitleInfoBox>

        <DescriptionText>{description}</DescriptionText>
      </CardInfoBox>
    </CardContainer>
  );
};

import sprite from "../../../assets/sprite.svg";
import {
  CarImg,
  CardPrice,
  CardTitle,
  CloseBtn,
  DescriptionText,
  HorizontalLine,
  ImgList,
  InfoContainer,
  InformList,
  LocationBox,
  LocationText,
  ModalContainer,
  ReviewsBox,
  ReviewsInfoBox,
  ReviewsLink,
} from "./CardModal.styled";

// eslint-disable-next-line react/prop-types
const CardModal = ({ closeModal, value }) => {
  // eslint-disable-next-line react/prop-types
  const { name, rating, reviews, location, price, gallery, description } =
    value;
  return (
    <ModalContainer>
      <InfoContainer>
        <CardTitle>{name}</CardTitle>

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
        <CardPrice>€{price}.00</CardPrice>
      </InfoContainer>

      <div>
        <ImgList>
          <li>
            <CarImg src={gallery[0]} alt="car1" />
          </li>
          <li>
            <CarImg src={gallery[1]} alt="car2" />
          </li>
          <li>
            <CarImg src={gallery[2]} alt="car3" />
          </li>
        </ImgList>
        <DescriptionText>{description}</DescriptionText>

        <div>
          <InformList>
            <li>
              <button>Features</button>
            </li>
            <li>
              <button>Reviews</button>
            </li>
          </InformList>
          <HorizontalLine />
        </div>
      </div>
      <CloseBtn onClick={closeModal}>
        <svg width="32px" height="32px">
          <use xlinkHref={sprite + "#cross"} />
        </svg>
      </CloseBtn>
    </ModalContainer>
  );
};

export default CardModal;

/* eslint-disable react/prop-types */
import { useState } from "react";
import sprite from "../../../assets/sprite.svg";
import { Features } from "../Features/Features";
import { Reviews } from "../Reviews/Reviews";
import {
  CarImg,
  CardPrice,
  CardTitle,
  CloseBtn,
  DescriptionText,
  HorizontalLine,
  ImgList,
  InfoContainer,
  InfoMenuBtn,
  InformBox,
  InformItem,
  InformList,
  LocationBox,
  LocationText,
  ModalContainer,
  RedLine,
  ReviewsBox,
  ReviewsInfoBox,
  ReviewsLink,
} from "./CardModal.styled";
import { OrderForm } from "../OrderForm/OrderForm";

// eslint-disable-next-line react/prop-types
const CardModal = ({ closeModal, value }) => {
  // eslint-disable-next-line react/prop-types
  const { name, rating, reviews, location, price, gallery, description } =
    value;

  const [showFeatures, setShowFeatures] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [showRedLine, setShowRedLine] = useState(false);
  const [clickedButton, setClickedButton] = useState(null);

  const handleFeaturesClick = () => {
    setShowOrderForm(true);
    setShowRedLine(true);
    setShowFeatures(true);
    setShowReviews(false);
    setClickedButton("Features");
  };

  const handleReviewsClick = () => {
    setShowOrderForm(true);
    setShowRedLine(true);
    setShowReviews(true);
    setShowFeatures(false);
    setClickedButton("Reviews");
  };

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
            <InformItem>
              <InfoMenuBtn onClick={handleFeaturesClick}>Features</InfoMenuBtn>
              {clickedButton === "Features" && showRedLine && <RedLine />}
            </InformItem>
            <InformItem>
              <InfoMenuBtn onClick={handleReviewsClick}>Reviews</InfoMenuBtn>
              {clickedButton === "Reviews" && showRedLine && <RedLine />}
            </InformItem>
          </InformList>
          <HorizontalLine />
          <InformBox>
            {showFeatures && <Features value={value} />}
            {showReviews && <Reviews value={value} />}
            {showOrderForm && <OrderForm />}
          </InformBox>
          {/* <OrderForm /> */}
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

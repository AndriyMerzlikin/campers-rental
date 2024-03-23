/* eslint-disable react/prop-types */
import { useState } from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");

import sprite from "../../../assets/sprite.svg";
import {
  CarImg,
  CardContainer,
  CardInfoBox,
  CardPrice,
  CardTitle,
  DescriptionText,
  HeartBtn,
  HeartSvg,
  LocationBox,
  LocationText,
  OptionsItem,
  OptionsList,
  Optionstext,
  PriceBox,
  ReviewsBox,
  ReviewsInfoBox,
  ReviewsLink,
  ShowMoreBtn,
  TitleInfoBox,
  TitleInfoLine,
} from "./CampersCard.styled";
import CardModal from "../CardModal/CardModal";

// eslint-disable-next-line react/prop-types
export const CampersCard = ({
  // eslint-disable-next-line react/prop-types
  value: {
    name,
    gallery,
    price,
    location,
    reviews,
    rating,
    description,
    adults,
    details,
    engine,
    transmission,
  },
}) => {
  //   const [isClicked, setIsClicked] = useState(false);

  //   const handleHeartClick = () => {
  //     setIsClicked(!isClicked);
  //   };

  // modal

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <CardContainer>
      <CarImg src={gallery[0]} alt="car" />
      <CardInfoBox>
        <TitleInfoBox>
          <TitleInfoLine>
            <CardTitle>{name}</CardTitle>
            <PriceBox>
              <CardPrice>€{price}.00</CardPrice>
              <HeartBtn>
                <HeartSvg width="24px" height="24px">
                  <use xlinkHref={sprite + "#heart"} />
                </HeartSvg>
              </HeartBtn>
            </PriceBox>
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

        <OptionsList>
          <OptionsItem>
            <svg width="20px" height="20px">
              <use xlinkHref={sprite + "#adults"} />
            </svg>
            <Optionstext>{adults} adults</Optionstext>
          </OptionsItem>
          <OptionsItem>
            <svg width="20px" height="20px">
              <use xlinkHref={sprite + "#automatic"} />
            </svg>
            <Optionstext>{transmission}</Optionstext>
          </OptionsItem>
          <OptionsItem>
            <svg width="20px" height="20px">
              <use xlinkHref={sprite + "#patrol"} />
            </svg>
            <Optionstext>{engine}</Optionstext>
          </OptionsItem>
          <OptionsItem>
            <svg width="20px" height="20px">
              <use xlinkHref={sprite + "#kitchen"} />
            </svg>
            <Optionstext>Kitchen</Optionstext>
          </OptionsItem>
          <OptionsItem>
            <svg width="20px" height="20px">
              <use xlinkHref={sprite + "#debs"} />
            </svg>
            <Optionstext>{details.beds} beds</Optionstext>
          </OptionsItem>
          <OptionsItem>
            <svg width="20px" height="20px">
              <use xlinkHref={sprite + "#ac"} />
            </svg>
            <Optionstext>AC</Optionstext>
          </OptionsItem>
        </OptionsList>
        <ShowMoreBtn onClick={openModal}>Show more</ShowMoreBtn>
      </CardInfoBox>

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
      >
        <CardModal closeModal={closeModal} />
      </Modal>
    </CardContainer>
  );
};

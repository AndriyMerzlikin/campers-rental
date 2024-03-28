/* eslint-disable react/prop-types */
import { useState } from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");
import { PiWind } from "react-icons/pi";

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
  // modal

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
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
            <PiWind size="20" />
            <Optionstext>AC</Optionstext>
          </OptionsItem>
        </OptionsList>
        <ShowMoreBtn onClick={openModal}>Show more</ShowMoreBtn>
      </CardInfoBox>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(7, 18, 19, 0.4)",
          },
          content: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: "none",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "20px",
            outline: "none",
            padding: "40px",
            width: "982px",
            height: "720px",
            maxWidth: "80%",
            maxHeight: "80%",
          },
        }}
      >
        <CardModal
          closeModal={closeModal}
          value={{
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
          }}
        />
      </Modal>
    </CardContainer>
  );
};

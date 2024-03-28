/* eslint-disable react/prop-types */
import {
  DetailsItem,
  DetailsName,
  DetailsTitle,
  DetailsValue,
  FeaturesContainer,
  HorizontalLine,
  OptionsItem,
  OptionsList,
  Optionstext,
} from "./Features.styled";
import sprite from "../../../assets/sprite.svg";
import { PiWind } from "react-icons/pi";

// eslint-disable-next-line react/prop-types
export const Features = ({ value }) => {
  // eslint-disable-next-line react/prop-types
  const {
    adults,
    details,
    engine,
    transmission,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  } = value;
  console.log(value);
  return (
    <FeaturesContainer>
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
          <PiWind size="20" />
          <Optionstext>AC</Optionstext>
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
            <use xlinkHref={sprite + "#conditioner"} />
          </svg>
          <Optionstext>{details.airConditioner} air conditioner</Optionstext>
        </OptionsItem>
        <OptionsItem>
          <svg width="20px" height="20px">
            <use xlinkHref={sprite + "#cd"} />
          </svg>
          <Optionstext>CD</Optionstext>
        </OptionsItem>
        <OptionsItem>
          <svg width="20px" height="20px">
            <use xlinkHref={sprite + "#radio"} />
          </svg>
          <Optionstext>Radio</Optionstext>
        </OptionsItem>
        <OptionsItem>
          <svg width="20px" height="20px">
            <use xlinkHref={sprite + "#hob"} />
          </svg>
          <Optionstext>{details.hob} hob</Optionstext>
        </OptionsItem>
      </OptionsList>

      <div>
        <DetailsTitle>Vehicle details</DetailsTitle>
        <HorizontalLine />
        <ul>
          <DetailsItem>
            <DetailsName>Form</DetailsName>
            <DetailsValue>{form}</DetailsValue>
          </DetailsItem>
          <DetailsItem>
            <DetailsName>Length</DetailsName>
            <DetailsValue>{length}</DetailsValue>
          </DetailsItem>
          <DetailsItem>
            <DetailsName>Width</DetailsName>
            <DetailsValue>{width}</DetailsValue>
          </DetailsItem>
          <DetailsItem>
            <DetailsName>Height</DetailsName>
            <DetailsValue>{height}</DetailsValue>
          </DetailsItem>
          <DetailsItem>
            <DetailsName>Tank</DetailsName>
            <DetailsValue>{tank}</DetailsValue>
          </DetailsItem>
          <DetailsItem>
            <DetailsName>Consumption</DetailsName>
            <DetailsValue>{consumption}</DetailsValue>
          </DetailsItem>
        </ul>
      </div>
    </FeaturesContainer>
  );
};

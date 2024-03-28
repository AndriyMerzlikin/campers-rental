/* eslint-disable react/prop-types */
import {
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
  const { adults, details, engine, transmission } = value;

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
        <h3>Vehicle details</h3>
        <HorizontalLine />
        <ul>
          <li>
            <p>Form</p>
            <span></span>
          </li>
          <li>
            <p>Length</p>
            <span></span>
          </li>
          <li>
            <p>Width</p>
            <span></span>
          </li>
          <li>
            <p>Height</p>
            <span></span>
          </li>
          <li>
            <p>Tank</p>
            <span></span>
          </li>
          <li>
            <p>Consumption</p>
            <span></span>
          </li>
        </ul>
      </div>
    </FeaturesContainer>
  );
};

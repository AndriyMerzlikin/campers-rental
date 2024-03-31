import { useDispatch } from "react-redux";
import { getAllCampers } from "../../../redux/operations";
import { PiWind } from "react-icons/pi";
import sprite from "../../../assets/sprite.svg";
import {
  CheckboxCntnr,
  CheckboxInput,
  CheckboxLabel,
  CheckboxText,
  EquipmentFilterBox,
  FilterItem,
  FilterTitle,
  Filterlist,
  FiltersText,
  HorizontalLine,
  LocationForm,
  LocationInput,
  LocationLabel,
  LocationSvg,
  RadioCntnr,
  RadioInput,
  RadioLabel,
  RadioText,
  SearchBtn,
  TypeFilterBox,
} from "./Filters.styled";
import { useEffect, useState } from "react";

export const Filters = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCampers());
  }, [dispatch]);

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div>
      <LocationForm>
        <LocationLabel>Location</LocationLabel>
        <LocationInput
          type="text"
          id="location"
          name="location"
          placeholder="City"
        />
        <LocationSvg width="18px" height="20px">
          <use xlinkHref={sprite + "#grey-map-pin"} />
        </LocationSvg>
      </LocationForm>

      <FiltersText>Filters</FiltersText>
      <EquipmentFilterBox>
        <FilterTitle>Vehicle equipment</FilterTitle>
        <HorizontalLine />
        <Filterlist>
          <FilterItem>
            {/* <FilterButton>1</FilterButton> */}
            <CheckboxLabel>
              <CheckboxInput type="checkbox" onChange={handleChange} />
              <CheckboxCntnr checked={isChecked}>
                <PiWind size="32" />
                <CheckboxText>AC</CheckboxText>
                {/* <svg width="32px" height="32px">
                  <use xlinkHref={sprite + "#conditioner"} />
                </svg> */}
              </CheckboxCntnr>
            </CheckboxLabel>
          </FilterItem>
          <FilterItem>
            {/* <FilterButton>2</FilterButton> */}
            <CheckboxLabel>
              <CheckboxInput type="checkbox" onChange={handleChange} />
              <CheckboxCntnr checked={isChecked}>
                <svg width="32px" height="32px">
                  <use xlinkHref={sprite + "#automatic"} />
                </svg>
                <CheckboxText>Automatic</CheckboxText>
              </CheckboxCntnr>
            </CheckboxLabel>
          </FilterItem>
          <FilterItem>
            {/* <FilterButton>3</FilterButton> */}
            <CheckboxLabel>
              <CheckboxInput type="checkbox" onChange={handleChange} />
              <CheckboxCntnr checked={isChecked}>
                <svg width="32px" height="32px">
                  <use xlinkHref={sprite + "#kitchen"} />
                </svg>
                <CheckboxText>Kitchen</CheckboxText>
              </CheckboxCntnr>
            </CheckboxLabel>
          </FilterItem>
          <FilterItem>
            {/* <FilterButton>4</FilterButton> */}
            <CheckboxLabel>
              <CheckboxInput type="checkbox" onChange={handleChange} />
              <CheckboxCntnr checked={isChecked}>
                <svg width="32px" height="32px">
                  <use xlinkHref={sprite + "#tv"} />
                </svg>
                <CheckboxText>TV</CheckboxText>
              </CheckboxCntnr>
            </CheckboxLabel>
          </FilterItem>
          <FilterItem>
            {/* <FilterButton>5</FilterButton> */}
            <CheckboxLabel>
              <CheckboxInput type="checkbox" onChange={handleChange} />
              <CheckboxCntnr checked={isChecked}>
                <svg width="32px" height="32px">
                  <use xlinkHref={sprite + "#shower"} />
                </svg>
                <CheckboxText>Shower/WC</CheckboxText>
              </CheckboxCntnr>
            </CheckboxLabel>
          </FilterItem>
        </Filterlist>
      </EquipmentFilterBox>
      <TypeFilterBox>
        <FilterTitle>Vehicle type</FilterTitle>
        <HorizontalLine />
        <Filterlist>
          <FilterItem>
            {/* <FilterButton>1</FilterButton> */}
            <RadioLabel>
              <RadioInput type="radio" name="radio" />
              <RadioCntnr>
                <svg width="40px" height="28px">
                  <use xlinkHref={sprite + "#radio-van"} />
                </svg>
                <RadioText>Van</RadioText>
              </RadioCntnr>
            </RadioLabel>
          </FilterItem>
          <FilterItem>
            {/* <FilterButton>2</FilterButton> */}
            <RadioLabel>
              <RadioInput type="radio" name="radio" />
              <RadioCntnr>
                <svg width="40px" height="28px">
                  <use xlinkHref={sprite + "#radio-integrated"} />
                </svg>
                <RadioText>Fully Integrated</RadioText>
              </RadioCntnr>
            </RadioLabel>
          </FilterItem>
          <FilterItem>
            {/* <FilterButton>3</FilterButton> */}
            <RadioLabel>
              <RadioInput type="radio" name="radio" />
              <RadioCntnr>
                <svg width="40px" height="28px">
                  <use xlinkHref={sprite + "#radio-alcove"} />
                </svg>
                <RadioText>Alcove</RadioText>
              </RadioCntnr>
            </RadioLabel>
          </FilterItem>
        </Filterlist>
      </TypeFilterBox>
      <SearchBtn>Search</SearchBtn>
    </div>
  );
};

import {
  EquipmentFilterBox,
  FilterButton,
  FilterItem,
  FilterTitle,
  Filterlist,
  FiltersText,
  HorizontalLine,
  LocationForm,
  LocationInput,
  LocationLabel,
  SearchBtn,
  TypeFilterBox,
} from "./Filters.styled";

export const Filters = () => {
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
      </LocationForm>

      <FiltersText>Filters</FiltersText>
      <EquipmentFilterBox>
        <FilterTitle>Vehicle equipment</FilterTitle>
        <HorizontalLine />
        <Filterlist>
          <FilterItem>
            <FilterButton>1</FilterButton>
          </FilterItem>
          <FilterItem>
            <FilterButton>2</FilterButton>
          </FilterItem>
          <FilterItem>
            <FilterButton>3</FilterButton>
          </FilterItem>
          <FilterItem>
            <FilterButton>4</FilterButton>
          </FilterItem>
          <FilterItem>
            <FilterButton>5</FilterButton>
          </FilterItem>
        </Filterlist>
      </EquipmentFilterBox>
      <TypeFilterBox>
        <FilterTitle>Vehicle type</FilterTitle>
        <HorizontalLine />
        <Filterlist>
          <FilterItem>
            <FilterButton>1</FilterButton>
          </FilterItem>
          <FilterItem>
            <FilterButton>2</FilterButton>
          </FilterItem>
          <FilterItem>
            <FilterButton>3</FilterButton>
          </FilterItem>
        </Filterlist>
      </TypeFilterBox>
      <SearchBtn>Search</SearchBtn>
    </div>
  );
};

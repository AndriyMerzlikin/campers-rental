import { CampersList } from "./CampersList/CampersList";
import { CatalogContainer } from "./Catalog.styled";
import { Filters } from "./Filters/Filters";

export const Catalog = () => {
  return (
    <CatalogContainer>
      <Filters />
      <CampersList />
    </CatalogContainer>
  );
};

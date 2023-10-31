
// import css from './CardContainer.module.css';
import PaginationComponent from 'components/Pagination/Pagination';
import ContainerPlaceholder from './ContainerPlaceholder';

const CardContainer = props => {
  return (
    <>
      <ContainerPlaceholder />
      <PaginationComponent />
    </>
  );
};

export default CardContainer;

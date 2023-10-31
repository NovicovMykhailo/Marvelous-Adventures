import css from './CardContainer.module.css';

const ContainerPlaceholder = props => {
  return (
    <div className={css.placeholder}>
      <p className={css.text}>Try looking for something else..</p>
    </div>
  );
};

export default ContainerPlaceholder;

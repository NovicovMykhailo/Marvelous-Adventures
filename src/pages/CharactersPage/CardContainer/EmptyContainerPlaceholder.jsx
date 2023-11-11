import css from './CardContainer.module.css';

const EmptyContainerPlaceholder = () => {
  return (
    <div className={css.placeholder}>
      <p className={css.text}>Try looking for something else..</p>
    </div>
  );
};

export default EmptyContainerPlaceholder;

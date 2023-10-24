import { getImage } from 'helpers/imageConverter';

const ComicsCard = ({ card, openModal }) => {

  const { title, thumbnail, creators, id } = card;

  const authors = creators.items.filter(author => author.role === 'writer');

  return (
    <li key={id} style={style.flex} onClick={() => openModal(id)}>
      <p>{title}</p>
      <p>{authors.map(author => author.name).join(', ')}</p>
      <img src={getImage(thumbnail)} alt="character" />
    </li>
  );
};

export default ComicsCard;

const style = {
  div: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    fontSize: 24,
    color: '#010101',
    gap: '24px',
  },
  flex: {
    flexGrow: '400px',
    maxWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '24px',
  },
};

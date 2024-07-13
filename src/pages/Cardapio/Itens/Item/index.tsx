import styles from './Item.module.scss';
import { useNavigate } from 'react-router-dom';
import { Prato } from 'types/Prato';
import { TagsPrato } from 'components/tagsPrato';

type Props = Prato;

export default function Item(props: Props) {
  const navigate = useNavigate();

  const { title, description, photo, id } = props;
  return (
    <div className={styles.item} onClick={() => navigate(`/prato/${id}`)} >
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2> {title} </h2>
          <p> {description} </p>
        </div>
        <TagsPrato {...props} />
      </div>
    </div>
  );
}
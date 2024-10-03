import { useAppSelector } from "../../hooks/redux";
import { ICharacter } from "../../types/ICharacter";
import styles from './View.module.css'
export const View = () => {
  const characters: ICharacter[] = useAppSelector(
    (state) => state.apiSlice.characters
  );

  return (
    <section>
      <div className={styles.containerSection}>
        <h2>Lista de caracteres</h2>
      </div>
      <div className={styles.containerList}>
        {characters.map((el, index) => (
          <div className={styles.cardCharacter} key={index}>
            <p>{el.name}</p>
            <img src={`${el.image}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

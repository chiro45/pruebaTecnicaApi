import { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { setCharacters } from "../../redux/slices/apiSlice";
import { View } from "../View/View";

import styles from "./Page.module.css";

export const Page = () => {
  const dispatch = useAppDispatch();

  const [valueInput, setValueInput] = useState("");

  const fetchingData = async (nameIn: string) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?name=${nameIn}`
    );
    const data = await response.json();
    dispatch(setCharacters(data.results));
  };

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValueInput(value);
  };

  useEffect(() => {
    fetchingData(valueInput);
  }, [valueInput]);

  return (
    <div className={styles.containerApp}>
      <section className={styles.containerSearch}>
        <h1>Muestra los resultados de la api</h1>
        <input
          placeholder="Ingrese un personaje"
          type="text"
          value={valueInput}
          onChange={handleChangeInput}
        />
      </section>
      <View />
    </div>
  );
};

import { useState } from "react";
import { useDataContext } from "../context/Context";
import style from "./Filter.module.css"
export const Filter = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };
  const { filterByDate, setAnimeTitle, FilterParams, updatePage } = useDataContext();
  const [title, setTitle] = useState("");

  function dateHandler(e: React.ChangeEvent<HTMLInputElement>) {
    filterByDate(e.currentTarget.value);
  }
  function titleHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.currentTarget.value);
  }
  function setTitleHandler(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.code === "Enter") {
      setAnimeTitle(title);
      setTitle("");
      updatePage("1");
    }
  }
  function setFilter(e: React.ChangeEvent<HTMLSelectElement>) {
    switch (e.currentTarget.value) {
      case "start_date":
        FilterParams("start_date");
        break;
      case "title":
        FilterParams("title");
        break;
    }
    handleChange(e);
  }
  return (
    <div className={style.filter}>
      <input type="date" onChange={dateHandler} />
      <input
        type="text"
        placeholder="Введите название"
        onChange={titleHandler}
        value={title}
        onKeyDown={setTitleHandler}
      />

      <select name="" id="options" onChange={setFilter} value={selectedOption}>
        <option value="" disabled>
          выберите сортировку
        </option>
        <option value="start_date">По дате</option>
        <option value="title">По Алфавиту</option>
      </select>
    </div>
  );
};

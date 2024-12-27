import axios from "axios";
import "./App.css";
import { useEffect } from "react";
import { Table } from "./components/table/Table";
import { Pagination } from "./components/pagination/Pagination";
import { useDataContext } from "./components/context/Context";
import { Filter } from "./components/filter/Filter";
import { Data } from "./types/types";
function App() {
  const { page, title, setListItems, list, filterDate, pagData, filterParams } =useDataContext();
  
    
    
  useEffect(() => {
    axios
      .get(
        `https://api.jikan.moe/v4/anime?page=${page}&start_date=${filterDate}&q=${title}&order_by=${filterParams}`
      )
      .then((res) => res.data)
      .then((res: Data) => {
        console.log(res)
        setListItems(res.data);
        pagData(res.pagination);
      });
  }, [page, filterDate, title,filterParams]);

  return (
    <div>
      {list ? (
        <div>
          <Filter />
          <Table list={list} />
          <Pagination />
        </div>
      ) : (
        "Ошибка загрузки данных"
      )}
    </div>
  );
}

export default App;

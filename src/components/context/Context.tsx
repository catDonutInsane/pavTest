import { createContext, useContext, useState, FC, ReactNode } from "react";
import { Root, Pagination , DataContextType, FilterParamsI } from "../../types/types";

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: FC<{ children: ReactNode }> = ({ children }) => {

  const [page, setPage] = useState("1");
  const [list, setList] = useState<Root[]>();
  const [title, setTitle] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [paginationData, setPaginationData] = useState<Pagination>();
const [filterParams, setFilterParams] = useState("")

  const updatePage = (newData: string) => {
    setPage(newData);
  };

  const setListItems = (res: Root[]) => {
    setList(res);
  };
  const setAnimeTitle = (text: string) => {
    setTitle(text);
  };
  const filterByDate = (date: string) => {
    setFilterDate(date);
  };
  const pagData = (value: Pagination) => {
    setPaginationData(value);
  };
const FilterParams = (params:string) =>{
  setFilterParams(params)
}
  return (
    <DataContext.Provider
      value={{
        page,
        title,
        updatePage,
        pagData,
        paginationData,
        list,
        filterDate,
        setListItems,
        filterByDate,
        setAnimeTitle,
        filterParams,
        FilterParams
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export const useDataContext = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("oops!");
  }
  return context;
};

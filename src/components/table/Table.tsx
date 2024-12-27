import { FC } from "react";
import { Root } from "../../types/types";
import style from "./Table.module.css"
export const Table: FC<{list:Root[]|undefined}> = ({list}) => {
   
   
  return (
    <table>
      <thead>
        <tr >
          <th className={style.table_head_id}>id</th>
          <th className={style.table_head_title}>Название</th>
          <th className={style.table_head_title}>Рейтинг</th>
          <th className={style.table_head_date}>Начало показа</th>
        </tr>
      </thead>
      <tbody>
        {list?.length!==0?list?.map((item:Root) => <tr key={Math.floor(Math.random()*100000 +1)}>
            <td className={style.table_content}>{item.mal_id}</td>
            <td className={style.table_content}>{item.title}</td>
            <td className={style.table_content}>{item.rating}</td>
            <td className={style.table_content}>{new Date(item.aired.from).toDateString()}</td>
        </tr>):"There is no data"}
       
    </tbody>
    </table>
  );
};

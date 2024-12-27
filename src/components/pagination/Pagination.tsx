import style from "./Pagination.module.css";
import { useDataContext } from "../context/Context";

export const Pagination = () => {
  const { updatePage, page, paginationData } = useDataContext();
  return (
    <div className={style.pag}>
      <div className={style.pag_btns}>
        <div
          className={style.pag_button}
          onClick={() =>
            page && +page > 1
              ? updatePage(String(+page - 1))
              : console.log("oops")
          }
        >
          Предыдущая
        </div>
        {page} из {paginationData?.last_visible_page}
        <div
          className={style.pag_button}
          onClick={() =>
            page && +page < paginationData!.last_visible_page
              ? updatePage(String(+page + 1))
              : console.log("oops")
          }
        >
          Следующая
        </div>
      </div>
    </div>
  );
};

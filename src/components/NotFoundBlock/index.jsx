import style from "../../styles/_NotFound.module.scss";

const index = () => {
  return (
    <div className={style.block}>
      <h1>Страница не найдена 🙁</h1>
      <p>К сожалению данная страница отсутствует в нашем интернет-магазине</p>
    </div>
  );
};

export default index;

import { useEffect, useState } from "react";
import { getTodos } from "./api";

function Todo() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    getTodos({
      page: page,
      limit: 10,
      sort: "name",
      _order: "ASC"
    })
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        PREV
      </button>
      <button disabled>{page}</button>
      <button onClick={() => setPage(page + 1)}>NEXT</button>
    </div>
  );
}
export default Todo;

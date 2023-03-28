import axios from "axios";
export function getTodos(params = {}) {
  return axios.get("https://jsonplaceholder.typicode.com/todos", {
    params: {
      _page: params.page,
      _limit: params.limit,
      _sort: params.sort,
      _order: params._order
    }
  });
}

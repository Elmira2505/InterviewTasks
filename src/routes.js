import Counter from "./components/react/counter/create/Counter";
import CreateAxiosRealExample from "./components/react/fetch/axios/create/RealExample/CreateAxiosRealExample";
import FixAxiosRealExample from "./components/react/fetch/axios/fix/RealExample/FixAxiosRealExample";
import AnswerAxiosRealExample from "./components/react/fetch/axios/create/RealExample/answer/AnswerAxiosRealExample";
const routes = [
  {
    path: "/counter",
    name: "Counter",
    element: <Counter />,
  },
  // {
  //   path: "/XMLrequest",
  //   element: <XMLrequest />,
  //   name: "XMLrequest",
  // },
  {
    path: "/Axios-Create",
    name: "Fetch Axios-Create",
    element: <CreateAxiosRealExample />,
  },
  {
    path: "/Axios-Fix",
    name: "Fetch Axios-Fix",
    element: <FixAxiosRealExample />,
  },
  {
    path: "/Axios-Answer",
    name: "Fetch Axios-Answer",
    element: <AnswerAxiosRealExample />,
  },
];

export default routes;

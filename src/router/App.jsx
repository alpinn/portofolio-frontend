import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { axiosRequest } from "../configs/api";

const App = () => {
  const submit = async () => {
    try {
      const response = await axiosRequest("GET", `login/user/`);
      if (response.status === 200) {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <h1
          style={{ color: "#abc" }}
          className="text-center"
          onScroll={submit}
        >
          Welcome
        </h1>
      </div>
    </>
  );
};

export default App;

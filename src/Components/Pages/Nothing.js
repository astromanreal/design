import { Link } from "react-router-dom";
import AllCards from "../Codepen/AllCards";

export default function Nothing() {
  return (
    <>
      <AllCards />
      <div className="my-container center-404">
        <h1>You lost your orbit!!</h1>
        <h2>The page is not ready yet..</h2>
        <Link to="/">Go to Home page again!!!</Link>
      </div>
    </>
  );
}

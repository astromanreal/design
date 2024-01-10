import {
  Recommended,
  SingleQuotes,
  Singlearticle,
  Singledetails,
  Singlegrid,
  Singlehero,
  Singlethree,
  Singletitles,
  Timeline,
} from "./Singleitems";
import "./Singlepage.css";

export default function Singlepage() {
  return (
    <>
      <Singlehero />
      <Singletitles />
      <Singledetails />
      <Singlearticle />
      <Singlegrid />
      <Singlethree />

      <div className="my-container">
        <Timeline />
        <SingleQuotes />
        <h1>Recommended mission </h1>
        <Recommended />
      </div>
    </>
  );
}

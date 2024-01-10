import { Carbon, Introxbox } from "../Items/Intro";
import carbonimg from "../Image/black_hole.jpg";
import boximg from "../Image/neubula.jpg";
import Parall from "../Items/Parall";
import Show from "../Experimental/Show";



export default function Home() {
  return (
    <>
  
      <Parall />
      <Show/>

      <div className="my-container">
 
        <Introxbox
          title="Xbox Game Pass Ultimate"
          body="Xbox Game Pass Ultimate Xbox Live Gold and over 100 high-quality
   console and PC games. Play together with friends and discover your
   next favorite game."
          button="All Contents"
          link="special"
          img={boximg}
        />
       

        <Carbon
          header="Recent blogs"
          desc="Microsoft will be carbon negative by 2030 and by 2050 we will remove
           all carbon the company has emitted since it was founded in 1975"
          button="All blogs"
          link="blog"
          imge={carbonimg}
        />
      
      </div>
    </>
  );
}

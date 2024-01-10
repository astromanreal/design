
import { Seriescard } from "../Cards/Maincards";
import futureMission from "../Data/Future";

export default function Series() {
  return (
    <>
       <h1 className="ripple-title">Playlist</h1>
    <div className="my-container one-flex">
 

        {futureMission.map((e) => {
          return (
            <div>
              <Seriescard title={e.name} />
            </div>
          );
        })}
      </div>
    </>
  );
}

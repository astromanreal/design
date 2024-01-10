import "./Missionpage.css";

export default function Missionpage() {
  return (
    <>
      <div className="conveytabs">
        <input id="tab1" type="radio" name="tabs" checked />
        <label for="tab1">Envira</label>

        <input id="tab2" type="radio" name="tabs" />
        <label for="tab2">Snapchat</label>

        <input id="tab3" type="radio" name="tabs" />
        <label for="tab3">Map</label>

        <input id="tab4" type="radio" name="tabs" />
        <label for="tab4">Heart</label>

        <input id="tab5" type="radio" name="tabs" />
        <label for="tab5">Ticket</label>

        <section id="content1"> CONTENT HERE </section>
        <section id="content2"> CONTENT GOES </section>
        <section id="content3"> CONT</section>
        <section id="content4"> CONTEN HERE </section>
        <section id="content5"> CONT GOES HERE </section>
      </div>
    </>
  );
}

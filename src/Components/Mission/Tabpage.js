import "./Tabpage.css";

export default function Tabpage() {
  return (
    <>
      <div class="cctabs">
        <input checked id="one" name="tabs" type="radio" />
        <label for="one">
          <i class="fa fa-pencil-square-o"></i> Content
        </label>
        <input id="two" name="tabs" type="radio" value="Two" />
        <label for="two">
          <i class="fa fa-magic"></i> Services
        </label>
        <input id="three" name="tabs" type="radio" />
        <label for="three">
          <i class="fa fa-plus-square"></i> Forms
        </label>
        <input id="four" name="tabs" type="radio" />
        <label for="four">
          <i class="fa fa-envelope"></i> Contact
        </label>
        <div class="panels">
          <div class="panel">YOUR CONTENT GO HERE</div>
          <div class="panel">YOUR CONTENT GO HERE</div>
          <div class="panel">
            <form id="cc-contact" action="" method="post">
              <input
                placeholder="your name"
                type="text"
                tabindex="1"
                autofocus
              />
              <input
                placeholder="Email Address"
                type="email"
                tabindex="2"
                required
              />
              <input
                placeholder="Phone Number"
                type="tel"
                tabindex="3"
                required
              />
              <input placeholder="Webite" type="text" tabindex="4" required />
              <textarea
                placeholder="Type your Message Here...."
                tabindex="5"
                required
              ></textarea>
              <button
                name="submit"
                type="submit"
                id="contact-submit"
                data-submit="...Sending"
              >
                Submit
              </button>
            </form>
          </div>
          <div class="panel">YOUR CONTENT GO HERE</div>
        </div>
      </div>
    </>
  );
}

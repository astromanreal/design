import "./Sidenav.css";

export default function Sidenav() {
  return <></>;
}

export function LeftSidenav() {
  return (
    <>
      <div class="left-sidenav">
        <div class="left-nav">
          <div class="left-icon fa fa-home"></div>
          <div class="left-description">TELOS 2015</div>
        </div>
        <div class="left-nav">
          <div class="left-icon fa fa-cog"></div>
          <div class="left-description">Discount for Toppers</div>
        </div>
        <div class="left-nav">
          <div class="left-icon fa fa-check-square"></div>
          <div class="left-description">Registration</div>
        </div>
        <div class="left-nav">
          <div class="left-icon fa fa-code"></div>
          <div class="left-description">Events</div>
        </div>
        <div class="left-nav">
          <div class="left-icon fa fa-list-ul"></div>
          <div class="left-description">List of CRs</div>
        </div>
        <div class="left-nav">
          <div class="left-icon fa fa-user"></div>
          <div class="left-description">TELOS 2014 Toppers</div>
        </div>
        <div class="left-nav">
          <div class="left-icon fa fa-phone"></div>
          <div class="left-description">Contact Us</div>
        </div>
      </div>
    </>
  );
}

export function RightSidenav() {
  return (
    <>
      <div class="right-sidenav right">
        <div class="right-nav">
          <div class="right-icon fa fa-home"></div>
          <div class="right-description">Home</div>
        </div>
        <div class="right-nav">
          <div class="right-icon fa fa-database"></div>
          <div class="right-description">About</div>
        </div>
        <div class="right-nav right-active">
          <div class="right-icon fa fa-users"></div>
          <div class="right-description">Clients</div>
        </div>
      </div>
    </>
  );
}

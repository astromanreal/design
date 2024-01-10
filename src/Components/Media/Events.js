
export default function Events() {
  return (
   <>
   <main>
  
      <div class="content">
        <div class="main-content">
          <h2>Upcoming events</h2>
          <div class="links">
            <ul class="selected"><li><a href="#">All</a></li></ul>
            <ul><li><a href="#">Today</a></li></ul>
            <ul><li><a href="#">This Week</a></li></ul>
            <ul><li><a href="#">June</a></li></ul>
            <ul><li><a href="#">July</a></li></ul>
          </div>
          <div class="conferences">
            
           <Oneevent/>
           <Oneevent/>
           <Oneevent/>
           <Oneevent/>
           <Oneevent/>
      </div>
          </div>
        <div class="side-content">
          <h3>Discover more events</h3>
          <div class="departments">
            <div class="department">
              <h5><i class="fas fa-cube"></i>Rocket launches..</h5>
              <p>Historical, current and predictive views of business operations.</p>
            </div>
            <div class="department">
              <h5><i class="fas fa-shopping-cart"></i>Mission fly-by</h5>
              <p>Systems, goods and services, small and large scale.</p>
            </div>
            <div class="department">
              <h5><i class="fas fa-user-friends"></i>Eays on Asteroid</h5>
              <p>About people who make up the workforce of an organisation.</p>
            </div>
            <div class="department">
              <h5><i class="fas fa-shopping-basket"></i>Space Station</h5>
              <p>Human-to-human and human-to-computer interactions.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
   </>
  )
}



export function Oneevent() {
  return (
    <>
    <div class="conference">
              <div class="time">Mon, 22 - Fri, 26 Jun 2020 <span> . </span>Bergen</div>
              <h5>International Conference on Tests and Proofs (TAP)</h5>
            </div>
    </>
  )
}

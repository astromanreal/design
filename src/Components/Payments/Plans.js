import "./Plans.css"

export default function Plans() {
  return (
    <>
<form class="plan-chooser">
  <div class="plan-header">
  <span class="plan-title">Choose your plan</span>
  <p class="plan-desc">Amet minim mollit non deserunt ullamco est sit .</p>
  </div>
  <div class="plan-option">
      <input value="free" id="free" name="plan" type="radio"/>
    <label for="free">
      <div class="plan-info">
      <span class="plan-cost">$0</span>
      <span class="plan-name">Try Free</span>
      </div>
    </label>
  </div>
  <div class="plan-option">
      <input value="monthly" id="monthly" name="plan" type="radio"/>
    <label for="monthly">
      <div class="plan-info">
      <span class="plan-cost">$29/month</span>
      <span class="plan-name">Monthly plan</span>
      </div>
    </label>
  </div>
  <div class="plan-option">
      <input value="annual" id="annual" name="plan" type="radio"/>
    <label for="annual">
       <div class="plan-info">
      <span class="plan-cost">$19/month</span>
      <span class="plan-name">$228 billed in a year</span>
      </div>
      <span class="plan-reduction"> Save 20% </span>
    </label>
  </div>
            <a href="#" title="" class="plan-choose-btn"> Start </a>

</form>


    </>
  )
}

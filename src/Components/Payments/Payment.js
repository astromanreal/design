import Plans from "./Plans";
import "./Payment.css";

export default function Payment() {
  return (
    <>
      <div className="Page-flex-center">
        <Plans />
        <Priceing />
      </div>
    </>
  );
}

export function Priceing() {
  return (
    <>
      <div class="price_cards_wrapper">
        <div class="pricing_card">
          <div class="price_details">
            <h2 class="price_title">Free Plan</h2>
            <p class="plan_description">
              Short card description - couple of rows, not more
            </p>
            <p class="price">$0</p>
            <p class="price_description">per user/per month</p>
          </div>
          <div class="price_cta">
            <p>CURRENT PLAN</p>
          </div>
        </div>

        <div class="pricing_card">
          <div class="price_details">
            <h2 class="price_title">Plus Plan</h2>
            <p class="plan_description">
              Short card description - couple of rows, not more
            </p>
            <p class="price">$14</p>
            <p class="price_description">per user/per month</p>
          </div>
          <div class="price_cta">
            <button>Buy now</button>
          </div>
        </div>

        <div class="pricing_card">
          <div class="price_details">
            <h2 class="price_title">Pro Plan</h2>
            <p class="plan_description">
              Short card description - couple of rows, not more
            </p>
            <p class="price">$50</p>
            <p class="price_description">per user/per month</p>
          </div>
          <div class="price_cta">
            <p>Unavailable now</p>
          </div>
        </div>
      </div>
    </>
  );
}

export function Pricing2() {
  return (
    <>
      
      <h1>Plans & Pricing</h1>

      <div class="package-container">
        <div class="packages">
          <h1>Basic</h1>
          <h2 class="text1">$9.99</h2>
          <h2 class="text2">$119.99</h2>
          <ul class="list">
            <li class="first">2000 Subscribers</li>
            <li>12,000 Emails/month</li>
            <li>Multi-User Accounts</li>
            <li>Email Support</li>
          </ul>
          <a href="#" class="button button1">
            Start Now
          </a>
        </div>
        <div class="packages">
          <h1>Professional</h1>
          <h2 class="text1">$19.99</h2>
          <h2 class="text2">$239.99</h2>
          <ul class="list">
            <li class="first">Basic +</li>
            <li>Landing Pages</li>
            <li>Pop-up Forms</li>
            <li>Premium Support</li>
          </ul>
          <a href="#" class="button button2">
            Start Now
          </a>
        </div>
        <div class="packages">
          <h1>Master</h1>
          <h2 class="text1">$29.99</h2>
          <h2 class="text2">$359.99</h2>
          <ul class="list">
            <li class="first">Professional +</li>
            <li>Marketing Automation</li>
            <li>Instagram Ads</li>
            <li>Facebook Ads</li>
          </ul>
          <a href="#" class="button button3">
            Start Now
          </a>
        </div>
      </div>
    </>
  );
}

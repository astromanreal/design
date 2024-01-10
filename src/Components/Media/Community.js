import { Link } from "react-router-dom";


export default function Community() {
  return (
    <>
      <div class="com-container">
        <div class="com-content">
          <div class="trending-creators">
            <div class="com-header">Trending Creators</div>
            <div class="com-profiles">
              <Trendingcreator Name="Nasa" Follower="2200" />
              <Trendingcreator Name="Mars" Follower="1800"/>
              <Trendingcreator Name="SpaceX" Follower="1600"/>
              <Trendingcreator Name="Artemis" Follower="1400"/>
              <Trendingcreator Name="Moon" Follower="1200"/>
              <Trendingcreator Name="Isro" Follower="1200"/>
            </div>
          </div>

          <div class="account-details">
            <div class="premium-account">
              <div class="com-header">Premium Account</div>
              <div class="premium-content">
                <div>The best experience with monthly coins.</div>
                <span class="com-btn">
                 <Link to="/pricing">Try now</Link>
                </span>
              </div>
            </div>
            <div class="com-post">
              <div class="com-header">Post</div>
              <p>
                The best posts from all. Come here to see new posts rising and
                be part of the conversation.
              </p>
              <div class="com-btn highlighted">Create Post</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Trendingcreator({ Name, Follower }) {
  return (
    <>
      <div class="com-profile">
        <img
          src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <div class="profile-details">
          <div class="com-profile-name">{Name}</div>
          <div class="followers-count">{Follower} Followers</div>
        </div>
        <Link to="*" className="com-btn">Join</Link>
      </div>
    </>
  );
}

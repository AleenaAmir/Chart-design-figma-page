import "./ExplorButton.css";
function ExploreButton() {
  return (
    <>
      <div id="container">
        <button class="learn-more">
          <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
          </span>
          <span class="button-text">Explore page</span>
        </button>
      </div>
    </>
  );
}

export default ExploreButton;

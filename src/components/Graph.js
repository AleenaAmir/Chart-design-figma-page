import "./graph.css";
function Graph() {
  return (
    <section
      class="bar-graph bar-graph-horizontal bar-graph-one"
      id="body-graph"
    >
      <div class="bar-one">
        <span class="year"></span>
        <div class="bar" data-percentage="">
          <p class="para-one">80%</p>
        </div>
      </div>
      <div class="bar-two">
        <span class="year"></span>
        <div class="bar" data-percentage="">
          <p class="para-two">30%</p>
        </div>
      </div>
      <div class="bar-three">
        <span class="year"></span>
        <div class="bar" data-percentage="">
          <p class="para-three">100%</p>
        </div>
      </div>
      <div class="bar-four">
        <span class="year"></span>
        <div class="bar" data-percentage="">
          <p class="para-four">75%</p>
        </div>
      </div>
    </section>
  );
}

export default Graph;

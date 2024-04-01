import "./Progress_Bar.css";

function ProgressBar() {
  return (
    <div className="container">
      <h2 className="title-text">SKILLSET</h2>
      <div className="skill-box">
        <span className="title">HTML</span>
        <div className="skill-bar">
          <span className="skill-per html">
            <span className="percentage">90%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="title">CSS</span>
        <div className="skill-bar">
          <span className="skill-per css">
            <span className="percentage">90%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="title">Javascript</span>
        <div className="skill-bar">
          <span className="skill-per javascript">
            <span className="percentage">90%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="title">Tailwindcss</span>
        <div className="skill-bar">
          <span className="skill-per tailwindcss">
            <span className="percentage">85%</span>
          </span>
        </div>
      </div>


      <div className="skill-box">
        <span className="title">Node Js</span>
        <div className="skill-bar">
          <span className="skill-per nodejs">
            <span className="percentage">75%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="title">React JS</span>
        <div className="skill-bar">
          <span className="skill-per reactjs">
            <span className="percentage">80%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="title">Figma</span>
        <div className="skill-bar">
          <span className="skill-per figma">
            <span className="percentage">70%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="title">Version Control</span>
        <div className="skill-bar">
          <span className="skill-per version-control">
            <span className="percentage">85%</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;

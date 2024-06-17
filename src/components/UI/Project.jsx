import data from "../../data/projects.json"
export default function Project() {
  return (

    <div className="project-card">

      {data.map((project, index)=> {

        return ( // CANT this BE an IMPLICIT RETURN change this so this project comp returns this only and the portfolio page returns the code above instead and passes these {} as props to this comp
          <div className="single-project" key={index} > {/* Each child in a list should have a unique "key" prop. */}
            <a href={project.link}>
              <img src={project.src} alt="project image"></img>
            </a>
            <a className="github-link" href={project.repo}>GitHub Repository</a>
          </div>
        )

      })}

    </div>
  );
}

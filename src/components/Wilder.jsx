import avatar from "../assets/avatar.png";
import Skill from "./Skill";

const Wilder = ({ wilderInfos, onDeleteButtonClicked }) => (
  <article className="card">
    <img src={avatar} alt="Jane Doe Profile" />
    <h3>{wilderInfos.name}</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
    <h4>Wild Skills</h4>
    <ul className="skills">
      {wilderInfos.skills.map((skill) => (
        <Skill
          key={skill.title}
          skillName={skill.name}
          skillRating={skill.votes}
        />
      ))}
    </ul>
    <button onClick={onDeleteButtonClicked}>Supprimer</button>
  </article>
);

export default Wilder;

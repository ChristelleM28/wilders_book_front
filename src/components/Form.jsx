import {useState} from "react";
import "./form.css";

function Form({handleAddWilder}) {
    const [name, setName] = useState("");
    const [skill, setSkill] = useState("");

    const handleNameChanged = (e) => {
      setName(e.target.value);
    }

    const handleSkillChanged = (e) => {
      setSkill(e.target.value);
    }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddWilder(name);
      }}
    >
      <h2>Formulaire</h2>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" value={name} onChange={handleNameChanged} />
      <br />

      <label htmlFor="description">Description</label>
      <input
        type="text"
        // value={description}
      />
      <br />
      <label>Skill</label>
      <input
        type="text"
        value={skill}
        onChange={handleSkillChanged}
        //autre méthode
        // onChange={(e) => setSkill(e.target.value)}
      />
      <br />
      <label>Avatar</label>
      <input
        type="file"
        // value={avatar}
      />
      <br />
      <button 
      //autre méthode
      // onClick={(e) => handleAddWilder(e, name, skill)}
      >
              Add Wilder
      </button>
    </form>
  );
}

export default Form;

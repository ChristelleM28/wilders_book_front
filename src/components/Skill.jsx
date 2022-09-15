function Skill({ skillName, skillRating }) {

  return (
    <div>
      <li>
        {skillName}
        {/* s'il y a un vote j'affiche le skill sinon vide */}
        skillRating ? <span className="votes">{skillRating}</span> : <div></div>
      </li>
    </div>
  );
}

export default Skill;

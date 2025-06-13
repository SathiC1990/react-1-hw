import styles from "./ourCrew.module.css";
import crewMembers from "./crewMembers";

const OurCrew = () => {
  return (
    <div className={styles.crewSection}>
      <p>
        Meet the passionate individuals whose unique skills combine to make our
        mission possible.
      </p>
      <div className={styles.crewMembers}>
        {crewMembers.map((member) => (
          <div key={member.name} className={styles.crewMember}>
            <img src={member.image} alt={`${member.name}, ${member.role}`} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCrew;

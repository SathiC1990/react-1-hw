import styles from "./ourCrew.module.css"; // Adjust the path as necessary

const crewMembers = [
  {
    name: "Sarah Vega",
    role: "Captain",
    image: "/crew/image-mark-shuttleworth.png",
    description:
      "A former NASA astronaut with over 15 years of experience, Captain Vega leads our missions with unparalleled expertise and a passion for space exploration.",
  },
  {
    name: "Dr. Leo Redding",
    role: "Chief Astrophysicist",
    image: "/crew/image-douglas-hurley.png",
    description:
      "Dr. Redding, is a renowned scientist who has contributed to major space discoveries. He ensures that every journey is as educational as it is exhilarating.",
  },
  {
    name: "Hana Lee",
    role: "Chief Engineer",
    image: "/crew/image-victor-glover.webp",
    description:
      "Hana Lee, is a renowned scientist who has contributed to major space discoveries. She ensures that every journey is as educational as it is exhilarating.",
  },
  {
    name: "Alex Santos",
    role: "Mission Specialist",
    image: "/crew/image-anousheh-ansari.webp",
    description:
      "As a mission specialist, Alex’s job is to ensure that every aspect of the journey runs smoothly. With a background in both science and adventure tourism, Alex is the perfect guide for our space travelers.",
  },
  {
    name: "Maya Patel",
    role: "Crew Member",
    image: "/crew/image-mark-shuttleworth.webp",
    description:
      "Maya brings a unique blend of technical skills and customer service experience to the team. She’s always ready to assist with any needs and to make sure every traveler has an unforgettable experience.",
  },
];

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

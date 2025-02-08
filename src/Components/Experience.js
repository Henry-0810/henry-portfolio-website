import styles from "../CssStuff/Experience.module.css";

const Experience = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Internship Experience</h1>

      <section className={styles.section}>
        <h2 className={styles.heading}>Software Engineer Intern</h2>
        <p className={styles.company}>
          January 2024 – August 2024 | JRI-America, Kerry, Ireland
        </p>
        <img
          className={styles.image}
          src="/images/department-work.jpg"
          alt="Department Work"
        />

        <h3 className={styles.subheading}>Department Work</h3>
        <ul className={styles.list}>
          <li>
            Led 8 file transfer projects using IBM WebSphere MQ, Ant Script, and
            Unix, ensuring seamless financial data transactions.
          </li>
          <li>
            Applied Agile methodologies (Kanban) to meet SDLC objectives,
            delivering projects on time and aligned with client needs.
          </li>
          <li>
            Resolved 2 critical production issues in under 48 hours, ensuring
            system uptime and service continuity.
          </li>
          <li>
            Conducted code reviews and unit testing (JUnit) to ensure
            high-quality, maintainable code.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Intern Project: Connecting-Kerry</h2>
        <p className={styles.company}>May 2024 – August 2024</p>
        <img
          className={styles.image}
          src="/images/intern-project.jpg"
          alt="Intern Project"
        />

        <h3 className={styles.subheading}>Building a Volunteer Platform</h3>
        <ul className={styles.list}>
          <li>
            Led a team of 5 in building a volunteer management platform using
            React, Node.js, and PostgreSQL.
          </li>
          <li>
            Increased community engagement by 30% by streamlining the volunteer
            matching process.
          </li>
          <li>
            Implemented CI/CD pipelines and secure Firebase authentication,
            reducing development time by 30%.
          </li>
          <li>
            Applied Agile methodologies with two-week sprints to ensure smooth
            development and adaptability.
          </li>
        </ul>
        <a
          className={styles.link}
          href="https://lnkd.in/eXaTwwwi"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Live Project
        </a>
      </section>
    </div>
  );
};

export default Experience;

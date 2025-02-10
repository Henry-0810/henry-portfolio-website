import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "../CssStuff/Experience.module.css";

const images = [
  "https://i.imgur.com/Zv3XNSF.jpg",
  "https://i.imgur.com/oWvrbsA.jpg",
  "https://i.imgur.com/Mq9hDJA.jpg",
];

const Experience = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Software Engineer Intern</h2>
      <p className={styles.company}>
        JRI-America (A Division of Sumitomo Mitsui Banking Corporation), Kerry,
        Ireland <br />
        <strong>January 2024 – August 2024</strong>
      </p>

      <div className={styles.card}>
        <h3 className={styles.sectionTitle}>Department Work</h3>
        <ul className={styles.list}>
          <li>
            ➡️ Developed <strong>8</strong> file transfer projects using IBM
            WebSphere MQ, Ant Script, and Unix, successfully deploying{" "}
            <strong>100%</strong> of them into production by the end of my
            internship.
          </li>
          <li>
            ➡️ Applied Agile methodologies (<strong>Jira Board</strong>) and
            collaborated with cross-functional teams to ensure on-time project
            delivery.
          </li>
          <li>
            ➡️ Resolved <strong>2 critical production issues</strong> within{" "}
            <strong>48 hours</strong>.
          </li>
          <li>
            ➡️ Conducted <strong>code reviews</strong> and unit testing for
            maintainability.
          </li>
        </ul>
        <p className={styles.skillsLearned}>
          <strong>Skills Learned:</strong> Bash, Linux, Java, IBM MQ, IBM
          Websphere MQ, Ant Script, ServiceNow, Perforce/GitHub, UrbanCode
          Deploy, Regex, Collaboration, Communication
        </p>
        <p className={styles.projectLink}>
          <a
            href="https://www.linkedin.com/posts/henry-pan-mun-li_softwaredevelopment-internship-teamwork-activity-7239356620617527297-tyF4?utm_source=share&utm_medium=member_desktop"
            target="_blank"
            rel="noopener noreferrer"
          >
            👆 LinkedIn Post
          </a>
        </p>
      </div>

      <hr className={styles.divider} />

      <div className={styles.card}>
        <h3 className={styles.sectionTitle}>
          Intern Project: Connecting-Kerry
        </h3>
        <p className={styles.techStack}>
          💻 <strong>Tech Stack:</strong> React.js, Express.js, Node.js,
          PostgreSQL, REST APIs
        </p>
        <p className={styles.description}>
          Led a team of 5 to develop a{" "}
          <strong>volunteer management platform</strong> that increased
          community engagement. Implemented <strong>CI/CD pipelines</strong> and
          secure Firebase (GCP) authentication, reducing development time by{" "}
          <strong>30%</strong>.
        </p>
        <p className={styles.projectLink}>
          <a
            href="https://connectingkerry.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            👆 Live Project Link
          </a>
        </p>
        {/* Swiper Image Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className={styles.carousel}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Screenshot ${index + 1}`}
                className={styles.image}
                onClick={() => setSelectedImage(img)}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Lightbox Popup */}
        {selectedImage && (
          <div
            className={styles.lightbox}
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Enlarged View"
              className={styles.lightboxImage}
            />
          </div>
        )}
      </div>

      <hr className={styles.divider} />
    </div>
  );
};

export default Experience;

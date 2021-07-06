import React from "react"
import styled from "styled-components"
import SectionTitle from "../components/sectionTitle"
import TabbedContent from "../components/tabbedContent"
import Link from "../components/link"

const BulletPoints = styled.ul`
  padding-left: 0px;
  list-style: none;
`;

const Bullet = styled.li`
  padding-bottom: 5px;
  padding-left: 20px;
  position: relative;

  ::before {
    font-family: "FontAwesome";
    content: '\f054';
    color: ${props => props.theme.accent};
    position: absolute;
    left: 0px;
  }
`;

const ExperienceItem = (role, company, link, date, bullets) => (<>
  <h5>{role}, <Link href={link}>{company}</Link></h5>
  <p>{date}</p>
  <BulletPoints>
    {bullets.map((bullet, idx) => <Bullet key={idx}>{bullet}</Bullet>)}
  </BulletPoints>
</>);

export default function ExperienceSection() {
  const juni = ExperienceItem("Instructor", "Juni Learning", "https://junilearning.com/", "September 2020 - July 2021",
    ["Executed one-on-one Computer Science lesson plans for students ages 8-18, while adapting to student needs and interests",
      "Debugged student code in Java, Python, JavaScript, and HTML/CSS",
      "Maintained records for each student and communicated progress to parents"
    ]);

  const ta = ExperienceItem("Teaching Assistant", "Cornell CIS", "https://cis.cornell.edu/", "October 2018 - December 2020",
    ["Tutored students on effective programming practices in Java, OCaml, and Python",
      "Received two awards for dedication to helping students",
      "Held frequent office hours, graded written and programming assignments, and coordinated projects",
      "Helped refactor courses for a virtual format during COVID-19",
      "Courses: Object-Oriented Data Structures Honors (CS 2112), Foundations of Artificial Intelligence (CS 4700), and Functional Programming (CS 3110)"
    ]);

  const facebook = ExperienceItem("Software Engineering Intern", "Facebook", "https://www.facebook.com/careers/", "June - August 2019, June - August 2020",
    ["2020: Full-stack web development on the Marketplace ML Foundations team",
      "Created a series of internal UI tools to empower logging interactions on Facebook Marketplace",
      "Optimized interaction logging logic to reduce errors and redundancy",
      "2019: Full-stack web development on the Integrity Review Platform team",
      "Implemented a web app using PHP and React to provide feedback to content reviewers"
    ]);

  const aurora = ExperienceItem("Software Engineering Intern", "Aurora Flight Sciences", "https://www.aurora.aero/", "June - August 2018",
    ["Created user interfaces in Java to pilot and communicate with an unmanned aircraft",
      "Pioneered the use of a new UI framework, COMC2, within the company for simulating an aircraft dashboard",
      "Created documentation and trained other employees on the framework"
    ]);

  const tabs = {
    "Juni Learning": juni,
    "Cornell CIS": ta,
    "Facebook": facebook,
    "Aurora": aurora,
  };

  return (
    <>
      {SectionTitle("Experience")}
      <br></br>
      <TabbedContent {...{ tabs }} />
    </>
  )
}
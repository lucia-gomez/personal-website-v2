import { li, ul } from "../../style/blogStyle"

import Link from "../link"
import React from "react"
import TabbedContent from "../tabbedContent"
import styled from "styled-components"

const BulletPoints = styled.ul`
  ${ul}
  ul {
    padding-left: 30px;
  }
`
const Bullet = styled.li`
  ${li}
`

export function makeBulletPoints(bullets) {
  return (
    <BulletPoints key={bullets}>
      {bullets.map((bullet, idx) => {
        if (typeof bullet === "string")
          return <Bullet key={idx}> {bullet}</Bullet>
        else return makeBulletPoints(bullet)
      })}
    </BulletPoints>
  )
}

const ExperienceItem = (role, company, link, date, bullets) => (
  <>
    <h5>
      {role}, <Link href={link}>{company}</Link>
    </h5>
    <p>{date}</p>
    {makeBulletPoints(bullets)}
  </>
)

export default function ExperienceSection() {
  const juni = ExperienceItem(
    "Instructor",
    "Juni Learning",
    "https://junilearning.com/",
    "Feb 2022 - May 2022, September 2020 - July 2021",
    [
      "2022: Content Creator",
      [
        "Part-time contractor to create short, asynchronous courses",
        "Brainstormed and wrote curricula for courses on GitHub, React, and Intro to Linguistics until the contractor program was terminated",
      ],
      "2021: Instructor",
      [
        "Executed one-on-one Computer Science lesson plans for students ages 8-18, while adapting to student needs and interests",
        "Debugged student code in Java, Python, JavaScript, and HTML/CSS",
        "Maintained records for each student and communicated progress to parents",
      ],
    ]
  )

  const ta = ExperienceItem(
    "Teaching Assistant",
    "Cornell CIS",
    "https://cis.cornell.edu/",
    "October 2018 - December 2020",
    [
      "Tutored students on effective programming practices in Java, OCaml, and Python",
      "Received two awards for dedication to helping students",
      "Held frequent office hours, graded written and programming assignments, and coordinated projects",
      "Helped refactor courses for a virtual format during COVID-19",
      "Courses: Object-Oriented Data Structures Honors (CS 2112), Foundations of Artificial Intelligence (CS 4700), and Functional Programming (CS 3110)",
    ]
  )

  const meta = ExperienceItem(
    "Senior Software Engineer",
    "Meta",
    "https://www.metacareers.com/",
    "Aug 2021 - Aug 2023, June - Aug 2020, June - Aug 2019",
    [
      "2023: SWE working on full-stack software for system level user experiences on AR glasses",
      "2020 (internship): Full-stack web development on the Marketplace ML Foundations team",
      [
        "Created a series of internal UI tools to empower logging interactions on Facebook Marketplace",
        "Optimized interaction logging logic to reduce errors and redundancy",
      ],
      "2019 (internship): Full-stack web development on the Integrity Review Platform team",
      [
        "Implemented a web app using PHP and React to provide feedback to content reviewers",
      ],
    ]
  )

  const aurora = ExperienceItem(
    "Software Engineering Intern",
    "Aurora Flight Sciences",
    "https://www.aurora.aero/",
    "June - August 2018",
    [
      "Created user interfaces in Java to pilot and communicate with an unmanned aircraft",
      "Pioneered the use of a new UI framework, COMC2, within the company for simulating an aircraft dashboard",
      "Created documentation and trained other employees on the framework",
    ]
  )

  const cudap = ExperienceItem(
    "President",
    "Cornell University Deaf Awareness Project",
    "https://cornell.campusgroups.com/cudap/home/",
    "June 2019 - August 2020",
    [
      "Successfully advocated for the creation of American Sign Language classes at Cornell",
      "Planned events to educate about Deaf culture, ASL, and accessibility",
      "Responsibilities included creating agendas and leading weekly board meetings, longterm goalsetting, budget management, and collaboration with community agencies",
    ]
  )

  const nyu = ExperienceItem(
    "Graduate Student",
    "NYU Tisch, Interactive Telecommunications Program",
    "https://itp.nyu.edu/itp/",
    "Sept 2023 - present",
    [
      "Web Developer",
      [
        "Launched a room reservation system for the NYU Media Commons",
        "Working with React, Material UI, Next.js, Firestore, Google App Engine, Google Calendar + Gmail APIs",
      ],
      "Coding Lab Mentor",
      [
        "Holding weekly office hours to provide programming advice",
        "Working as a general resource for my peers with all levels of programming experience",
      ],
      "Graduate Assistant",
      [
        "Graduate teaching assistant for an NYU IMA class, ReCode",
        "Helping undergraduate students learn about HTML/CSS, vanilla Javascript, and APIs",
      ],
    ]
  )

  const deeplocal = ExperienceItem(
    "Creative Technology Intern",
    "Deeplocal",
    "https://www.deeplocal.com/",
    "May - Aug 2024",
    [
      "Earned 224.7M+ in reach for White Claw brand via bespoke, high-tech coolers for sweepstakes and ad campaign",
      "Owned full-stack web app, motion graphics, custom firmware, and Twilio API integration for White Claw coolers",
      "Developed communication protocol between web app, Raspberry Pi, and Particle microcontrollers",
      "Gauged feasibility of client asks via rapid prototyping product design: CAD, 3D printing, custom electronics",
      "Brainstormed digital and physical interactive experiences to pitch to clients",
    ]
  )

  const sygma = ExperienceItem(
    "UX Engineering Intern",
    "Sygma",
    "https://www.sygmahq.com/",
    "Jan 2025 - present",
    [
      "Full-stack web development at a startup, building program management tools to accelerate hardware development with AI",
      "Integrated custom Gantt chart UI to visualize hardware development lifecycle",
      "Tech stack: Apollo, Next.js, React, Typescript, GraphQL, Django, Strawberry",
    ]
  )

  const tabs = {
    Sygma: sygma,
    Deeplocal: deeplocal,
    NYU: nyu,
    Meta: meta,
    "Juni Learning": juni,
    "Cornell CIS": ta,
    CUDAP: cudap,
    Aurora: aurora,
  }

  return <TabbedContent {...{ tabs }} />
}

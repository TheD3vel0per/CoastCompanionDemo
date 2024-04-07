import React from 'react';
import styles from './styles.module.css';
import Chip from '@mui/material/Chip';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';
import Link from '@mui/material/Link';
import { courseTeam, developmentTeam } from "../../people";
import { TeamPictureSlideshow } from '../TeamPictureSlideshow';

const ProfileCard = ({ name, pictureLink, roles, websiteLink, linkedInLink }) => {

  if (name === undefined || name === null || name === "") {
    name = "Backbencher";
  }

  if (pictureLink === undefined || pictureLink === null || pictureLink === "") {
    pictureLink = "/CoastCompanionDemo/img/backbenchers-logo.png";
  }

  let chips = <>{<Chip label="Backbencher" sx={{ color: "var(--ifm-color-primary-light)" }} />}</>;
  if (!roles || roles.lengh === 0) {
  } else {
    chips = <>{
      roles.map((role) => (
        <Chip key={role} label={role} size="small" className={styles.roleChip} sx={{ color: "var(--black-or-white)" }} />
      ))
    }
    </>
  }

  if (websiteLink === undefined || websiteLink === null || websiteLink === "") {
    websiteLink = false;
  }

  if (linkedInLink === undefined || linkedInLink === null || linkedInLink === "") {
    linkedInLink = false;
  }

  return (
    <div className={styles.profileCard}>
      <div className={styles.profileImageContainer}>
        <img src={pictureLink} alt={"Profile Image for " + name} className={styles.profileImage} />
      </div>
      <h3 className={styles.name}>{name}</h3>
      <div className={styles.roleContainer}>
        {chips}
      </div>
      <div className={styles.linksContainer}>
        {websiteLink && (<Link href={websiteLink} color="inherit" target="_blank"> <LinkIcon /> </Link>)}
        {linkedInLink && (<Link href={linkedInLink} color="inherit" target="_blank"> <LinkedInIcon /> </Link>)}
      </div>
    </div>
  );
}

const TeamProfileCards = () => {
  return (<>
    <div className={styles.profileAreaContainer}>

      <h2>One Team. One Dream. One Chatbot.</h2>

      <div className={styles.bbCard}>
        <div className={styles.bbSlides}>
          <TeamPictureSlideshow props={"30%"} />
        </div>
        <div className={styles.sponsorDescriptionContainer}>
          <div style={{display: "block", gap: 0, justifyContent: "right"}}>
            <p className={styles.bbPrefix}>About the</p>
            <p className={styles.bbName}>Team Backbenchers</p>
          </div>
          <p className={styles.bbDescription}>We don't just dream about developing a compliance-oriented, secure, scalable chatbot, <span style={{fontSize: "1.15em", color: "var(--ifm-color-primary)"}}>we built one.</span> </p>
          <p className={styles.bbDescriptionThree}>Through Coast Companion, we deliver compliance-oriented, secure, and scalable real solutions to financial challenges, ensuring every interaction is personalized and protected. It's about empowering members to make informed decisions for a better life, backed by a chatbot designed with their security and evolving needs in mind.</p>
        </div>
      </div>

      <h2>Sponsor</h2>
      <div className={styles.sponsorCard}>
        <div className={styles.coastLogoContainer}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/Coast_Capital_Savings_logo.svg" alt="Coast Capital Savings Logo" className={styles.coastLogo} />
        </div>
        <div className={styles.sponsorDescriptionContainer}>
          <p className={styles.representativeName}>Representative: Jason Hikida</p>
          <p className={styles.sponsorDescription}>As the sponsor of this project, Coast Capital aims to leverage data, analytics, and AI/ML technologies to improve member experience and accelerate their vision to unlock financial oppertunities that positivley impact people and communities.</p>
        </div>
      </div>
      <h2>Course Team</h2>
      <div className={styles.profileCardContainer}>
        {courseTeam.map((person) => (
          <ProfileCard key={person.name} {...person} />))
        }
      </div>
      <h2>Development Team</h2>
      <div className={styles.profileCardContainer}>
        {developmentTeam.map((person) => (
          <ProfileCard key={person.name} {...person} />))
        }
      </div>
    </div></>
  );
}

export default TeamProfileCards;
import React from 'react';
import styles from './styles.module.css';
import Chip from '@mui/material/Chip';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';
import Link from '@mui/material/Link';
import { courseTeam, developmentTeam } from "../../people";

const ProfileCard = ({ name, pictureLink, roles, websiteLink, linkedInLink }) => {

  if (name === undefined || name === null || name === "") {
    name = "Backbencher";
  }

  if (pictureLink === undefined || pictureLink === null || pictureLink === "") {
    pictureLink = "/CoastCompanion/img/ubc-logo.png";
  }

  let chips = <>{<Chip label="Backbencher" sx={{color: "var(--ifm-color-primary-light)"}}/>}</>;
  if (!roles || roles.lengh === 0) {
  } else {
    chips = <>{
      roles.map((role) => (
        <Chip key={role} label={role} className={styles.roleChip} sx={{color: "var(--black-or-white)"}} />
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
      <h3>{name}</h3>
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
      <h2>Sponsor</h2>
      <div className={styles.sponsorCard}>
        <div className={styles.coastLogoContainer}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/Coast_Capital_Savings_logo.svg" alt="Coast Capital Savings Logo" className={styles.coastLogo} />
        </div>
        <div className={styles.sponsorDescriptionContainer}>
          <p className={styles.representativeName}>Representative: Jason Hikida</p>
          <p className={styles.sponsorDescription}>As the sponsor of this project, Coast Capital aims to leverage data, analytics, and AI/ML technologies to improve the member experience and accelerate their vision to unlock financial oppertunities that positivley impact people and communities.</p>
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
import React from 'react';
import styles from './styles.module.css';
import { courseTeam, developmentTeam } from "../../people";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

export const TeamPictureSlideshow = (props) => {
  const [firstImgLoaded, setFirstImgLoaded] = React.useState(false);

  var items = ["/CoastCompanionDemo/img/team/scream-toad.gif",
    "/CoastCompanionDemo/img/team/scream-toad.gif",
    "/CoastCompanionDemo/img/team/scream-toad.gif",
    "/CoastCompanionDemo/img/team/scream-toad.gif",
    "/CoastCompanionDemo/img/team/scream-toad.gif",
    "/CoastCompanionDemo/img/team/scream-toad.gif",
    "/CoastCompanionDemo/img/team/scream-toad.gif"]




  return (
    <>
      <img
        src={items[0]}
        onLoad={() => setFirstImgLoaded(true)}
        style={{ display: "none" }}
      />
      {firstImgLoaded &&
        <Carousel
          animation={"slide"}
          indicators={false}>
          {
            items.map((item, i) => <Item key={i} imgLink={item} imgHeight={props.imgHeight} />)
          }
        </Carousel>}
    </>
  )
}

function Item(props) {
  return (
    <>
      <img src={props.imgLink} style={{ margin: 0, padding: 0, height: "30%" }} alt='Backbenchers Logo' />
      <img src='/CoastCompanionDemo/img/backbenchers-logo-small.png' style={{ position: 'absolute', bottom: "5%", right: "2.5%", width: "10%", filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))", margin: 0, padding: 0 }} alt="Backbenchers Logo" />
    </>
  )
}
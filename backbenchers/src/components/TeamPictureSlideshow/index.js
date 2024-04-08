import React from 'react';
import styles from './styles.module.css';
import { courseTeam, developmentTeam } from "../../people";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

export const TeamPictureSlideshow = (props) => {

  var items = ["/CoastCompanionDemo/img/team/1.jpg",
  "/CoastCompanionDemo/img/team/2.jpg",
  "/CoastCompanionDemo/img/team/3.jpg",
  "/CoastCompanionDemo/img/team/4.jpg",
  "/CoastCompanionDemo/img/team/6.jpg",
  "/CoastCompanionDemo/img/team/7.jpg",
  "/CoastCompanionDemo/img/team/9.jpg",
  "/CoastCompanionDemo/img/team/10.jpg",
  "/CoastCompanionDemo/img/team/11.jpg",
  "/CoastCompanionDemo/img/team/12.jpg",
  "/CoastCompanionDemo/img/team/13.jpg",
  "/CoastCompanionDemo/img/team/14.jpg",
  "/CoastCompanionDemo/img/team/15.jpg",
  "/CoastCompanionDemo/img/team/16.jpg",
  "/CoastCompanionDemo/img/team/17.jpg",
  "/CoastCompanionDemo/img/team/18.jpg",
  "/CoastCompanionDemo/img/team/19.jpg",
  "/CoastCompanionDemo/img/team/20.jpg",
  "/CoastCompanionDemo/img/team/21.jpg",
  "/CoastCompanionDemo/img/team/22.jpg",
  "/CoastCompanionDemo/img/team/23.jpg"]

  return (
    <>
        <Carousel
          animation={"slide"}
          indicators={false}
          interval={1500}>
          {
            items.map((item, i) => <Item key={i} imgLink={item} imgHeight={props.imgHeight} />)
          }
        </Carousel>
    </>
  )
}

function Item(props) {
  return (
    <>
      <img src={props.imgLink} style={{ margin: 0, padding: 0, width: "100%" }} alt='Backbenchers Logo' />
      <img src='/CoastCompanionDemo/img/backbenchers-logo-small.png' style={{ position: 'absolute', bottom: "5%", right: "2.5%", width: "10%", filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))", margin: 0, padding: 0 }} alt="Backbenchers Logo" />
    </>
  )
}
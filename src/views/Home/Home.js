import React, { Fragment } from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
import Face from '@material-ui/icons/Face';
import Chat from '@material-ui/icons/Chat';
import Build from '@material-ui/icons/Build';
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import CustomTabs from 'components/CustomTabs/CustomTabs.js';

import styles from 'assets/jss/material-kit-react/views/componentsSections/tabsStyle.js';
import NavBar from 'components/DrivingKing/NavBar';

//==notification===============================================
import Check from '@material-ui/icons/Check';
import Warning from '@material-ui/icons/Warning';
// core components
import SnackbarContent from 'components/Snackbar/SnackbarContent.js';
import Clearfix from 'components/Clearfix/Clearfix.js';

//=============================================================

//==image====================================================
import styles2 from 'assets/jss/material-kit-react/views/componentsSections/typographyStyle.js';

import image from 'assets/img/faces/avatar.jpg';

//============================================================

//==carousel==================================================
import styles3 from 'assets/jss/material-kit-react/views/componentsSections/carouselStyle.js';

import Carousel from 'react-slick';
// @material-ui/core components
import LocationOn from '@material-ui/icons/LocationOn';

import Card from 'components/Card/Card.js';

import image1 from 'assets/img/bg.jpg';
import image2 from 'assets/img/bg2.jpg';
import image3 from 'assets/img/bg3.jpg';
//=============================================================
//==button==================================================
import Button from 'components/CustomButtons/Button.js';
import styles4 from 'assets/jss/material-kit-react/views/componentsSections/basicsStyle.js';
import Favorite from '@material-ui/icons/Favorite';

//==========================================================
//==custom input==================================================
import CustomInput from 'components/CustomInput/CustomInput.js';
import styles5 from 'assets/jss/material-kit-react/views/componentsSections/basicsStyle.js';
import InputAdornment from '@material-ui/core/InputAdornment';
import People from '@material-ui/icons/People';
//==========================================================

const useStyles = makeStyles(styles);
const useStyles_image = makeStyles(styles2);
const useStyles_carousel = makeStyles(styles3);
const useStyles_button = makeStyles(styles4);
const useStyles_custom_input = makeStyles(styles5);
export default function ProfilePage(props) {
  const classes = useStyles();
  const classes_image = useStyles_image();
  const classes_carousel = useStyles_carousel();
  const classes_button = useStyles_button();
  const classes_custom_input = useStyles_custom_input();
  const carousel_settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <Fragment>
      <NavBar />
      <div id="nav-tabs">
        <h3>Navigation Tabs</h3>
        <GridContainer justify="center">
          <GridItem xs={4} sm={12} md={8}>
            <h3>
              <small>드라이빙 피드</small>
            </h3>
            <CustomTabs
              headerColor="primary"
              tabs={[
                {
                  tabName: 'Profile',
                  tabIcon: Face,
                  tabContent: (
                    <p className={classes_image.textCenter}>
                      <div id="images">
                        <div className={classes_image.title}>
                          <h2>Images</h2>
                        </div>
                        <br />
                        <GridContainer>
                          <GridItem
                            xs={8}
                            sm={12}
                            className={classes_image.marginLeft}
                          >
                            <h4>B_Rain</h4>
                            <img
                              src={image}
                              alt="..."
                              className={
                                classes_image.imgRaised +
                                ' ' +
                                classes_image.imgRoundedCircle +
                                ' ' +
                                classes_image.imgFluid
                              }
                            />
                          </GridItem>
                          <GridItem
                            xs={8}
                            sm={12}
                            className={classes_image.marginLeft}
                          >
                            <h4>운전 점수 :</h4>
                            <h4>4시간 8분 :</h4>
                          </GridItem>
                        </GridContainer>
                        <GridContainer />
                      </div>
                      술한잔 했습니다.. 영화가 잘 안될수도 있습니다.. 드라이빙
                      코스로 강릉찍고 오니 역시 자전거보다는 자동차인것
                      같습니다.
                      <div>
                        <GridContainer>
                          <GridItem xs={1} sm={0} md={4} lg={1}>
                            <Button justIcon round color="primary">
                              <Favorite className={classes_button.icons} />
                            </Button>
                          </GridItem>
                          <GridItem xs={2} sm={0} md={4} lg={3}>
                            <CustomInput
                              labelText="댓글적기"
                              id="material"
                              formControlProps={{
                                fullWidth: true,
                              }}
                              inputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <People />
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </GridItem>
                        </GridContainer>
                      </div>
                    </p>
                  ),
                },
                {
                  tabName: 'Messages',
                  tabIcon: Chat,
                  tabContent: (
                    <p className={classes.textCenter}>
                      I think that’s a responsibility that I have, to push
                      possibilities, to show people, this is the level that
                      things could be at. I will be the leader of a company that
                      ends up being worth billions of dollars, because I got the
                      answers. I understand culture. I am the nucleus. I think
                      that’s a responsibility that I have, to push
                      possibilities, to show people, this is the level that
                      things could be at.
                    </p>
                  ),
                },
                {
                  tabName: 'Settings',
                  tabIcon: Build,
                  tabContent: (
                    <p className={classes.textCenter}>
                      think that’s a responsibility that I have, to push
                      possibilities, to show people, this is the level that
                      things could be at. So when you get something that has the
                      name Kanye West on it, it’s supposed to be pushing the
                      furthest possibilities. I will be the leader of a company
                      that ends up being worth billions of dollars, because I
                      got the answers. I understand culture. I am the nucleus.
                    </p>
                  ),
                },
              ]}
            />
          </GridItem>
          <GridItem xs={12} sm={10} md={5}>
            <SnackbarContent
              message={
                <span>
                  <b>Driving Assist:</b> {"'"}최근 급출발 횟수가 전주 대비
                  15%증가했습니다. 명상이 필요합니다
                </span>
              }
              close
              color="info"
              icon="info_outline"
            />
            <SnackbarContent
              message={
                <span>
                  <b>Level Up:</b> 차선 중앙 유지 수치가 전주 대비 25%
                  증가했습니다.exp+1
                </span>
              }
              close
              color="success"
              icon="info_outline"
            />
            <SnackbarContent
              message={
                <span>
                  <b>Level Up:</b> 차선 중앙 유지 수치가 전주 대비 25%
                  증가했습니다.exp+1
                </span>
              }
              close
              color="success"
              icon="info_outline"
            />
          </GridItem>
          <GridItem>
            <div className={classes_carousel.section}>
              <div className={classes_carousel.container}>
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={12}
                    md={80}
                    className={classes_carousel.marginAuto}
                  >
                    <Card carousel>
                      <Carousel {...carousel_settings}>
                        <div>
                          <img
                            src={image1}
                            alt="First slide"
                            className="slick-image"
                          />
                          <div className="slick-caption">
                            <h4>
                              <LocationOn className="slick-icons" />
                              Yellowstone National Park, United States
                            </h4>
                          </div>
                        </div>
                        <div>
                          <img
                            src={image2}
                            alt="Second slide"
                            className="slick-image"
                          />
                          <div className="slick-caption">
                            <h4>
                              <LocationOn className="slick-icons" />
                              여친과 강릉갈때 필요한건 정력? No! 운전경력? Yes!
                            </h4>
                          </div>
                        </div>
                        <div>
                          <img
                            src={image3}
                            alt="Third slide"
                            className="slick-image"
                          />
                          <div className="slick-caption">
                            <h4>
                              <LocationOn className="slick-icons" />
                              힐링하는 드라이빙 코스 best10
                            </h4>
                          </div>
                        </div>
                      </Carousel>
                    </Card>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </Fragment>
  );
}

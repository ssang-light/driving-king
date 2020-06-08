/* global kakao */
import React, { Fragment, useEffect } from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import ThumbUp from '@material-ui/icons/ThumbUp';
import Map from '@material-ui/icons/Map';
import DriveEta from '@material-ui/icons/DriveEta';
// core components
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import Button from 'components/CustomButtons/Button.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import NavPills from 'components/NavPills/NavPills.js';
import Parallax from 'components/Parallax/Parallax.js';
import CustomLinearProgress from 'components/CustomLinearProgress/CustomLinearProgress.js';

import profile from 'assets/img/faces/younho9.jpg';

import sm5 from 'assets/img/cars/sm5.png';
import studio2 from 'assets/img/examples/studio-2.jpg';
import studio3 from 'assets/img/examples/studio-3.jpg';
import studio4 from 'assets/img/examples/studio-4.jpg';
import studio5 from 'assets/img/examples/studio-5.jpg';
import work1 from 'assets/img/examples/olu-eletu.jpg';
import work2 from 'assets/img/examples/clem-onojeghuo.jpg';
import work3 from 'assets/img/examples/cynthia-del-rio.jpg';
import work4 from 'assets/img/examples/mariya-georgieva.jpg';
import work5 from 'assets/img/examples/clem-onojegaw.jpg';
import carMarkerImage from 'assets/img/car-marker.png';

import styles from 'assets/jss/material-kit-react/views/profilePage.js';
import NavBar from 'components/DrivingKing/NavBar';
import Badge from 'components/Badge/Badge.js';
import Positions from './positions.json';
import './Map.css';

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  useEffect(() => {
    const script = document.createElement('script');
    const API_KEY = process.env.REACT_APP_KAKAOMAP_API_KEY;
    script.type = 'text/javascript';
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${API_KEY}&libraries=services,clusterer,drawing&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        let el = document.getElementById('map');
        let map = new kakao.maps.Map(el, {
          center: new kakao.maps.Coords(523951.25, 1085073.75),
          level: 12,
        });

        let markers = [];

        let imageSrc = carMarkerImage;
        let imageSize = new kakao.maps.Size(30, 30);
        let imageOption = { offset: new kakao.maps.Point(15, 0) };
        let markerImage = new kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption,
        );

        for (const position of Positions.positions) {
          markers.push(
            new kakao.maps.Marker({
              position: new kakao.maps.LatLng(position.lat, position.lng),
              image: markerImage,
            }),
          );
        }

        for (const marker of markers) {
          marker.setMap(map);
        }
      });
    };
  });

  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid,
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <Fragment>
      <NavBar />
      <Parallax small filter image={require('assets/img/profile-bg.jpg')} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>추연호</h3>
                    <h6>운전경력 : 6년</h6>
                    <h6>지역: 경기</h6>
                    <h6>면허 취득일 : 2014. 12. 24 </h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className={'fab fa-twitter'} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={'fab fa-instagram'} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={'fab fa-facebook'} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}></div>
            <div id="progress">
              <GridContainer>
                <GridItem xs={6} sm={6} md={6} lg={6} justify="center">
                  <div className={classes.title}>
                    <h3>나의 운전 점수</h3>
                  </div>
                  <div>총점 : 75</div>
                  <CustomLinearProgress
                    variant="determinate"
                    color="success"
                    value={75}
                    style={{ width: '100%', display: 'inline-block' }}
                  />
                  <div>차선 침범 점수 : 30</div>
                  <CustomLinearProgress
                    variant="determinate"
                    color="warning"
                    value={30}
                    style={{ width: '100%', display: 'inline-block' }}
                  />
                  <div>과속 점수 : 25</div>
                  <CustomLinearProgress
                    variant="determinate"
                    color="danger"
                    value={25}
                    style={{ width: '100%', display: 'inline-block' }}
                  />
                </GridItem>
                {/* </GridContainer> */}
                <GridContainer justify="left">
                  <div className={classes.title}>
                    <h3>나의 운전 등급</h3>
                    <GridItem xs={6} sm={6} md={6} lg={6}>
                      {/* <Button>일반</Button> */}
                      {/* <Button color="primary">1년 무사고</Button> */}
                      {/* <Button color="info">2년 무사고</Button> */}
                      <Button color="success" size="lg">
                        {' '}
                        3년 무사고{' '}
                      </Button>
                      {/* <Button color="warning">5년 무사고</Button> */}
                      {/* <Button color="danger">10년 무사고</Button> */}
                      {/* <Button color="rose">Rose</Button> */}
                    </GridItem>
                  </div>
                </GridContainer>
              </GridContainer>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: '운전 차량',
                      tabIcon: DriveEta,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={sm5}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio2}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio5}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio4}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: '지역 숙련도',
                      tabIcon: Map,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={12}>
                            <div id="map"></div>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: '즐겨찾는 코스',
                      tabIcon: ThumbUp,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={sm5}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

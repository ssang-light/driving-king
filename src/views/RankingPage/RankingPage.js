import React, { Fragment } from 'react';
import NavBar from 'components/DrivingKing/NavBar';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import Public from '@material-ui/icons/Public';
import Map from '@material-ui/icons/Map';
import LocationCity from '@material-ui/icons/LocationCity';
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

import styles from 'assets/jss/material-kit-react/views/profilePage.js';
import Badge from 'components/Badge/Badge.js';

const useStyles = makeStyles(styles);

export default function RankingPage(props) {
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
            <GridContainer justify="center">
              <GridItem
                xs={12}
                sm={12}
                md={12}
                lg={12}
                className={classes.navWrapper}
              >
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: '경기도 랭킹',
                      tabIcon: LocationCity,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4} lg={12}>
                            <div className={classes.title}>
                              <h3>경기도 운전 랭킹</h3>
                            </div>
                            <div>1. 경주현  98점</div>
                            <div>2. 추연호  75점</div>
                            <div>3. 박효성  72점</div>
                            <div>4. 김덕배  67점</div>
                            <div>5. 홍시덕  54점</div>
                        

                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: '전국 랭킹',
                      tabIcon: Public,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <div className={classes.title}>
                              <h3>전국 운전 랭킹</h3>
                            </div>
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

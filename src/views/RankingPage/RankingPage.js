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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import ho from 'assets/img/faces/younho9.jpg';
import hyo from 'assets/img/faces/hyo.JPG';
import ju from 'assets/img/faces/ju.jpeg';
import song from 'assets/img/faces/송강호.jpg';
import jo from 'assets/img/faces/조정석.jpg';
import jose from 'assets/img/faces/조세호.png';

import sm5 from 'assets/img/cars/sm5.png';

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
                          <GridItem xs={6} sm={6} md={6} lg={6}>
                            <List className={classes.root}>
                              <ListItem alignItems="center">
                                <ListItemAvatar>
                                  <Avatar alt="추연호" src={ho} />
                                </ListItemAvatar>
                                <ListItemText
                                  primary="1등. 점수 : 98점"
                                  secondary={
                                    <React.Fragment>
                                      <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                      >
                                        추연호
                                      </Typography>
                                      {' 요즘 세상 운전은 기본이죠.'}
                                    </React.Fragment>
                                  }
                                />
                              </ListItem>
                              <Divider variant="inset" component="li" />
                              <ListItem alignItems="center">
                                <ListItemAvatar>
                                  <Avatar alt="박효성" src={hyo} />
                                </ListItemAvatar>
                                <ListItemText
                                  primary="2등. 점수 : 82점"
                                  secondary={
                                    <React.Fragment>
                                      <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                      >
                                        박효성
                                      </Typography>
                                      {' 안전운전이 제일이죠..!'}
                                    </React.Fragment>
                                  }
                                />
                              </ListItem>
                              <Divider variant="inset" component="li" />
                              <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                  <Avatar alt="경주현" src={ju} />
                                </ListItemAvatar>
                                <ListItemText
                                  primary="3등. 점수 : 73점"
                                  secondary={
                                    <React.Fragment>
                                      <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                      >
                                        경주현
                                      </Typography>
                                      {' 안전의 소중함을 알아야해요! '}
                                    </React.Fragment>
                                  }
                                />
                              </ListItem>
                              <Divider variant="inset" component="li" />
                              <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                  <Avatar alt="송강호" src={song} />
                                </ListItemAvatar>
                                <ListItemText
                                  primary="4등. 점수 : 69점"
                                  secondary={
                                    <React.Fragment>
                                      <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                      >
                                        송강호
                                      </Typography>
                                      {' 택시운전은 안전이 필수죠! '}
                                    </React.Fragment>
                                  }
                                />
                              </ListItem>
                              <Divider variant="inset" component="li" />
                              <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                  <Avatar alt="조정석" src={jo} />
                                </ListItemAvatar>
                                <ListItemText
                                  primary="5등. 점수 : 66점"
                                  secondary={
                                    <React.Fragment>
                                      <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                      >
                                        조정석
                                      </Typography>
                                      {' 너두 운전 할 수 있어! '}
                                    </React.Fragment>
                                  }
                                />
                              </ListItem>
                              <Divider variant="inset" component="li" />
                              <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                  <Avatar
                                    alt="조세호"
                                    className={classes.large}
                                    src={jose}
                                  />
                                </ListItemAvatar>
                                <ListItemText
                                  primary="6등. 점수 : 55점"
                                  secondary={
                                    <React.Fragment>
                                      <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                      >
                                        조세호
                                      </Typography>
                                      {' 조금더 분발하겠습니다! '}
                                    </React.Fragment>
                                  }
                                />
                              </ListItem>
                            </List>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: '전국 랭킹',
                      tabIcon: Public,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={6} sm={6} md={6} lg={6}>
                            <List className={classes.root}>
                              <ListItem alignItems="center">
                                <ListItemAvatar>
                                  <Avatar alt="추연호" src={ho} />
                                </ListItemAvatar>
                                <ListItemText
                                  primary="1등. 점수 : 98점"
                                  secondary={
                                    <React.Fragment>
                                      <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                      >
                                        추연호
                                      </Typography>
                                      {' 요즘 세상 운전은 기본이죠.'}
                                    </React.Fragment>
                                  }
                                />
                              </ListItem>
                              <Divider variant="inset" component="li" />
                              <ListItem alignItems="center">
                                <ListItemAvatar>
                                  <Avatar alt="박효성" src={hyo} />
                                </ListItemAvatar>
                                <ListItemText
                                  primary="2등. 점수 : 82점"
                                  secondary={
                                    <React.Fragment>
                                      <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                      >
                                        박효성
                                      </Typography>
                                      {' 안전운전이 제일이죠..!'}
                                    </React.Fragment>
                                  }
                                />
                              </ListItem>
                              <Divider variant="inset" component="li" />
                              <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                  <Avatar alt="경주현" src={ju} />
                                </ListItemAvatar>
                                <ListItemText
                                  primary="3등. 점수 : 73점"
                                  secondary={
                                    <React.Fragment>
                                      <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                      >
                                        경주현
                                      </Typography>
                                      {' 안전의 소중함을 알아야해요! '}
                                    </React.Fragment>
                                  }
                                />
                              </ListItem>
                              <Divider variant="inset" component="li" />
                              <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                  <Avatar alt="송강호" src={song} />
                                </ListItemAvatar>
                                <ListItemText
                                  primary="4등. 점수 : 69점"
                                  secondary={
                                    <React.Fragment>
                                      <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                      >
                                        송강호
                                      </Typography>
                                      {' 택시운전은 안전이 필수죠! '}
                                    </React.Fragment>
                                  }
                                />
                              </ListItem>
                              <Divider variant="inset" component="li" />
                              <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                  <Avatar alt="조정석" src={jo} />
                                </ListItemAvatar>
                                <ListItemText
                                  primary="5등. 점수 : 66점"
                                  secondary={
                                    <React.Fragment>
                                      <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                      >
                                        조정석
                                      </Typography>
                                      {' 너두 운전 할 수 있어! '}
                                    </React.Fragment>
                                  }
                                />
                              </ListItem>
                              <Divider variant="inset" component="li" />
                              <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                  <Avatar
                                    alt="조세호"
                                    className={classes.large}
                                    src={jose}
                                  />
                                </ListItemAvatar>
                                <ListItemText
                                  primary="6등. 점수 : 55점"
                                  secondary={
                                    <React.Fragment>
                                      <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                      >
                                        조세호
                                      </Typography>
                                      {' 조금더 분발하겠습니다! '}
                                    </React.Fragment>
                                  }
                                />
                              </ListItem>
                            </List>
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

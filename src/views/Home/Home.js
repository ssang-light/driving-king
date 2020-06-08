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
//==image===============================================
import img1 from 'assets/img/feed_course/img1.png';
import img2 from 'assets/img/feed_course/img2.png';
import img3 from 'assets/img/feed_course/img3.png';
//=============================================================

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
import f1 from 'assets/img/faces/younho9.jpg';
import f2 from 'assets/img/faces/marc.jpg';
import f3 from 'assets/img/faces/kendall.jpg';
import classNames from 'classnames';

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
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid,
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
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
        <GridContainer justify="center">
          <GridItem xs={4} sm={12} md={8}>
            <h3>
              <small>Driving Feed</small>
            </h3>
            <CustomTabs
              headerColor="primary"
              tabs={[
                {
                  tabName: 'Drive Feed',
                  tabIcon: Face,
                  tabContent: (
                    <p className={classes_image.textCenter}>
                      <div id="images">
                        <GridContainer>
                          <GridItem
                            xs={8}
                            sm={12}
                            className={classes_image.marginLeft}
                          >
                            <h4>B_Rain</h4>
                            <img
                              width="50px"
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
                            <h4>누적 운전시간 : 152 h</h4>

                            <h4>피드 운전시간 :3h 32m </h4>
                          </GridItem>
                        </GridContainer>
                        <GridContainer />
                      </div>
                      술한잔 했습니다.. 영화가 잘 안될수도 있습니다.. 드라이빙
                      코스로 강릉찍고 오니 역시 자전거보다는 자동차인것
                      같습니다.
                      <div>
                        <div>
                          <GridContainer justify="left">
                            <GridItem xs={12} sm={12} md={8}>
                              <Button color="success">서울</Button>
                              <Button>→</Button>
                              <Button>→</Button>
                              <Button>→</Button>
                              <Button>→</Button>
                              <Button>→</Button>
                              <Button color="warning">강릉</Button>
                            </GridItem>
                          </GridContainer>
                        </div>
                        <GridContainer>
                          <GridItem xs={1} sm={0} md={4} lg={1}>
                            <Button justIcon round color="rose">
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
                  tabName: 'Driving Route',
                  tabIcon: Chat,
                  tabContent: (
                    <GridItem>
                      양양 지나면서 구도로 달리는 것도 좋은 드라이브 코스가 많을
                      것 같지만 너무 피곤해서 그냥 빠른길로 갔습니다.
                      <GridItem xs={0} sm={0} md={0}>
                        <img
                          width="1050px"
                          alt="..."
                          src={img1}
                          className={navImageClasses}
                        />
                      </GridItem>
                      <div>
                        <GridContainer>
                          <GridItem xs={1} sm={0} md={4} lg={1}>
                            <Button justIcon round color="rose">
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
                    </GridItem>
                  ),
                },
              ]}
            />
            {/*feed2  */}
            <CustomTabs
              headerColor="primary"
              tabs={[
                {
                  tabName: 'Drive Feed',
                  tabIcon: Face,
                  tabContent: (
                    <p className={classes_image.textCenter}>
                      <div id="images">
                        <GridContainer>
                          <GridItem
                            xs={8}
                            sm={12}
                            className={classes_image.marginLeft}
                          >
                            <h4>박효성(Parking Park)</h4>
                            <img
                              width="50px"
                              src={f2}
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
                            <h4>누적 운전시간 : 76 h</h4>

                            <h4>피드 운전시간 :2h 32m </h4>
                          </GridItem>
                        </GridContainer>
                        <GridContainer />
                      </div>
                      서울역에서 잠실 넘어간 뒤 팔당댐으로 가는 코스 은근
                      괜찮습니다. 새벽에 음악틀고 드라이빙하기에 딱입니다.
                      <div>
                        <div>
                          <GridContainer justify="left">
                            <GridItem xs={12} sm={12} md={8}>
                              <Button color="success">서울역</Button>
                              <Button>→</Button>
                              <Button>→</Button>
                              <Button color="primary">잠실 새내역</Button>
                              <Button>→</Button>
                              <Button>→</Button>
                              <Button color="warning">팔당댐</Button>
                            </GridItem>
                          </GridContainer>
                        </div>
                        <GridContainer>
                          <GridItem xs={1} sm={0} md={4} lg={1}>
                            <Button justIcon round color="rose">
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
                  tabName: 'Driving Route',
                  tabIcon: Chat,
                  tabContent: (
                    <GridItem>
                      팔당댐 근처에 물회 맛집 있습니다. 기가 막힙니다. 댓글
                      주시면 알려드릴게요
                      <GridItem xs={0} sm={0} md={0}>
                        <img
                          width="1050px"
                          alt="..."
                          src={img2}
                          className={navImageClasses}
                        />
                      </GridItem>
                      <div>
                        <GridContainer>
                          <GridItem xs={1} sm={0} md={4} lg={1}>
                            <Button justIcon round color="rose">
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
                    </GridItem>
                  ),
                },
              ]}
            />
            {/* feed3 */}
            <CustomTabs
              headerColor="primary"
              tabs={[
                {
                  tabName: 'Drive Feed',
                  tabIcon: Face,
                  tabContent: (
                    <p className={classes_image.textCenter}>
                      <div id="images">
                        <GridContainer>
                          <GridItem
                            xs={8}
                            sm={12}
                            className={classes_image.marginLeft}
                          >
                            <h4>younho9</h4>
                            <img
                              width="50px"
                              src={f3}
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
                            <h4>누적 운전시간 : 98h</h4>

                            <h4>피드 운전시간 :2h 22m </h4>
                          </GridItem>
                        </GridContainer>
                        <GridContainer />
                      </div>
                      안양에서 출발해서 서울 양양고속도로 가기 전에 북한강변
                      쪽으로 빠지는게 빠릅니다. 차도 없고 한적해서 힐링 드라이브
                      가능합니다. 남이섬 갈때는 고양 고속도로는 별로입니다.
                      고양으로 꺾으면 미워할고양
                      <div>
                        <div>
                          <GridContainer justify="left">
                            <GridItem xs={12} sm={12} md={8}>
                              <Button color="success">안양역</Button>
                              <Button>→</Button>
                              <Button>→</Button>
                              <Button color="primary">북한강 휴게소</Button>
                              <Button>→</Button>
                              <Button>→</Button>
                              <Button color="warning">남이섬</Button>
                            </GridItem>
                          </GridContainer>
                        </div>
                        <GridContainer>
                          <GridItem xs={1} sm={0} md={4} lg={1}>
                            <Button justIcon round color="rose">
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
                  tabName: 'Driving Route',
                  tabIcon: Chat,
                  tabContent: (
                    <GridItem>
                      상처를 치료해줄 사람어디 없나 가만히 나두다간 끊임없이
                      덧나 사랑도 사람도 남이섬에서 만납시다
                      <GridItem xs={0} sm={0} md={0}>
                        <img
                          width="1050px"
                          alt="..."
                          src={img3}
                          className={navImageClasses}
                        />
                      </GridItem>
                      <div>
                        <GridContainer>
                          <GridItem xs={1} sm={0} md={4} lg={1}>
                            <Button justIcon round color="rose">
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
                    </GridItem>
                  ),
                },
              ]}
            />
            {/* feed4 */}
            <CustomTabs
              headerColor="primary"
              tabs={[
                {
                  tabName: 'Drive Feed',
                  tabIcon: Face,
                  tabContent: (
                    <p className={classes_image.textCenter}>
                      <div id="images">
                        <GridContainer>
                          <GridItem
                            xs={8}
                            sm={12}
                            className={classes_image.marginLeft}
                          >
                            <h4>B_Rain</h4>
                            <img
                              width="50px"
                              src={f1}
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
                            <h4>누적 운전시간 : 152 h</h4>

                            <h4>피드 운전시간 :3h 32m </h4>
                          </GridItem>
                        </GridContainer>
                        <GridContainer />
                      </div>
                      새차를 180개월 할부로 샀습니다. 오래오래 살아야겠습니다.
                      <div>
                        <div>
                          <GridContainer justify="left">
                            <GridItem xs={12} sm={12} md={8}>
                              <Button color="success">서울</Button>
                              <Button>→</Button>
                              <Button>→</Button>
                              <Button>→</Button>
                              <Button>→</Button>
                              <Button>→</Button>
                              <Button color="warning">정동진</Button>
                            </GridItem>
                          </GridContainer>
                        </div>
                        <GridContainer>
                          <GridItem xs={1} sm={0} md={4} lg={1}>
                            <Button justIcon round color="rose">
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
                  tabName: 'Driving Route',
                  tabIcon: Chat,
                  tabContent: (
                    <GridItem>
                      양양 지나면서 구도로 달리는 것도 좋은 드라이브 코스가 많을
                      것 같지만 너무 피곤해서 그냥 빠른길로 갔습니다.
                      <GridItem xs={0} sm={0} md={0}>
                        <img
                          width="1050px"
                          alt="..."
                          src={img1}
                          className={navImageClasses}
                        />
                      </GridItem>
                      <div>
                        <GridContainer>
                          <GridItem xs={1} sm={0} md={4} lg={1}>
                            <Button justIcon round color="rose">
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
                    </GridItem>
                  ),
                },
              ]}
            />
          </GridItem>
          <GridContainer>
            <GridItem xs={10} sm={5} md={12}>
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
          </GridContainer>
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
                              여친과 강릉갈때 필요한건 운전경력? Yes!
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

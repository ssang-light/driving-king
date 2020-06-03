import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// @material-ui/icons
// core components
import Header from 'components/Header/Header.js';
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.js';
import Button from 'components/CustomButtons/Button.js';

import profileImage from 'assets/img/faces/younho9.jpg';

import styles from 'assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(styles);

export default function NavBar(props) {
  const classes = useStyles();
  return (
    <Header
      brand="운전왕"
      color="dark"
      leftLinks={
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            <Button
              component={Link}
              to="/analysis"
              className={classes.navLink}
              color="transparent"
            >
              나의 운전 습관
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              component={Link}
              to="/ranking"
              className={classes.navLink}
              color="transparent"
            >
              운전자 랭킹
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              component={Link}
              to="/difficulty"
              className={classes.navLink}
              color="transparent"
            >
              운전 난이도
            </Button>
          </ListItem>
        </List>
      }
      rightLinks={
        <ListItem className={classes.listItem}>
          <CustomDropdown
            left
            caret={false}
            hoverColor="black"
            dropdownHeader="Dropdown Header"
            buttonText={
              <img src={profileImage} className={classes.img} alt="profile" />
            }
            buttonProps={{
              className: classes.navLink + ' ' + classes.imageDropdownButton,
              color: 'transparent',
            }}
            dropdownList={['Me', 'Settings and other stuff', 'Sign out']}
          />
        </ListItem>
      }
    />
  );
}

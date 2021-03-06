import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import { spacing, typography } from 'material-ui/styles';
import { cyan600 } from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import Avatar from 'material-ui/Avatar';

const LeftDrawer = (props) => {
  const { navDrawerOpen, handleChangeNavDrawer } = props;

  const styles = {
    logo: {
      cursor: 'pointer',
      fontSize: 22,
      color: typography.textFullWhite,
      lineHeight: `${spacing.desktopKeylineIncrement}px`,
      fontWeight: typography.fontWeightLight,
      backgroundColor: cyan600,
      paddingLeft: 85,
      height: 64,
    },
    menuDivider: {
      background: '#eee',
      fontSize: 12,
      fontWeight: 600,
      padding: '8px 16px',
    },
    menuItem: {
      color: '#4c4c4c',
      fontSize: 14,
      fontWeight: '600',
    },
    avatar: {
      div: {
        padding: '15px 0 20px 15px',
        backgroundImage: `url(${require('../Images/material_bg.png')})`,
        height: 145,
        backgroundSize: 'cover',
      },
      icon: {
        float: 'left',
        display: 'block',
        marginRight: 15,
        boxShadow: '0px 0px 0px 4px rgba(0,0,0,0.2)',
      },
      username: {
        marginTop: 80,
        display: 'block',
        color: 'white',
        fontWeight: 600,
        fontSize: 14,
      },
      email: {
        display: 'block',
        color: 'white',
        fontWeight: 300,
        fontSize: 14,
      },
    },
  };

  return (
    <Drawer
      open={navDrawerOpen}
      width={280}
    >
      {/* <div style={styles.logo}>LIFETIME</div> */}
      <div style={styles.avatar.div}>
        <Avatar
          src="https://www.wnmlive.com/images/Default-Profile.jpg"
          size={60}
          style={styles.avatar.icon}
        />
        <span style={styles.avatar.username}>{props.username}</span>
        <span style={styles.avatar.email}>administrator@mail.com</span>
      </div>
      <div>
        {/* <div style={styles.menuDivider}>MAIN NAVIGATION</div> */}
        {/* <Menu> */}
        {props.menus.map((menu, index) =>
          (<MenuItem
            key={Math.random()}
            style={styles.menuItem}
            primaryText={menu.text}
            leftIcon={menu.icon}
            onClick={handleChangeNavDrawer}
            containerElement={<Link to={menu.link} />}
          />),
        )}
        {/* </Menu> */}
      </div>
    </Drawer>
  );
};

LeftDrawer.propTypes = {
  navDrawerOpen: PropTypes.bool.isRequired,
  handleChangeNavDrawer: PropTypes.func.isRequired,
  menus: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
};

export default LeftDrawer;

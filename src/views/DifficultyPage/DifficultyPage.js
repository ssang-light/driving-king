/* global kakao */
import React, { Fragment, Component } from 'react';
import NavBar from 'components/DrivingKing/NavBar';
import './Map.css';

export default class DifficultyPage extends Component {
  componentDidMount() {
    const script = document.createElement('script');
    const API_KEY = process.env.REACT_APP_KAKAOMAP_API_KEY;
    script.type = 'text/javascript';
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${API_KEY}&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        let el = document.getElementById('map');
        let map = new kakao.maps.Map(el, {
          center: new kakao.maps.Coords(523951.25, 1085073.75),
        });
      });
    };
  }

  render() {
    return (
      <Fragment>
        <NavBar />
        <div id="map"></div>
      </Fragment>
    );
  }
}

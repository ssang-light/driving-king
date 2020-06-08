/* global kakao */
import React, { Fragment, useEffect } from 'react';
import NavBar from 'components/DrivingKing/NavBar';
import Positions from './positions.json';
import './Map.css';

export default function DifficultyPage() {
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
          level: 14,
        });

        let markers = [];

        for (const position of Positions.positions) {
          markers.push(
            new kakao.maps.Marker({
              position: new kakao.maps.LatLng(position.lat, position.lng),
            }),
          );
        }

        var clusterer = new kakao.maps.MarkerClusterer({
          map: map,
          markers: markers,
          averageCenter: true,
          minLevel: 0,
          disableClickZoom: true,
          texts: getTexts,
          styles: [
            {
              // calculator 각 사이 값 마다 적용될 스타일을 지정한다
              width: '30px',
              height: '30px',
              background: 'rgba(51, 204, 255, .8)',
              borderRadius: '15px',
              color: '#000',
              textAlign: 'center',
              fontWeight: 'bold',
              lineHeight: '31px',
            },
            {
              width: '40px',
              height: '40px',
              background: 'rgba(255, 153, 0, .8)',
              borderRadius: '20px',
              color: '#000',
              textAlign: 'center',
              fontWeight: 'bold',
              lineHeight: '41px',
            },
            {
              width: '50px',
              height: '50px',
              background: 'rgba(255, 51, 204, .8)',
              borderRadius: '25px',
              color: '#000',
              textAlign: 'center',
              fontWeight: 'bold',
              lineHeight: '51px',
            },
            {
              width: '60px',
              height: '60px',
              background: 'rgba(255, 80, 80, .8)',
              borderRadius: '30px',
              color: '#000',
              textAlign: 'center',
              fontWeight: 'bold',
              lineHeight: '61px',
            },
          ],
        });

        function getTexts(count) {
          // 한 클러스터 객체가 포함하는 마커의 개수에 따라 다른 텍스트 값을 표시합니다
          if (count < 10) {
            return '65';
          } else if (count < 30) {
            return '78';
          } else if (count < 50) {
            return '85';
          } else {
            return '94';
          }
        }
      });
    };
  });

  return (
    <Fragment>
      <NavBar />
      <div id="map"></div>
    </Fragment>
  );
}

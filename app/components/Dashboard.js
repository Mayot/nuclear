import React, { Component } from 'react';

import Heading from './Heading';
import PitchforkReviewMini from './PitchforkReviewMini';

import styles from './Dashboard.css';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.dashboard_container}>
        <Heading
          text={'Best new music'}
        />
        {
          this.props.bestNewAlbums.map((el, i) => {
            return (
              <PitchforkReviewMini
                album={el}
              />
            )
          })
        }
      </div>
    );
  }

}

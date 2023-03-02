import React from 'react';
import { RoadmapComponent } from '../../components/Roadmaps/Roadmap';
import './RoadmapPage.css';

export function RoadmapPage(props) {
  return (
    <div>
      <RoadmapComponent inLearningList={props.location.state.inLearningList}/>
    </div>
  );
}

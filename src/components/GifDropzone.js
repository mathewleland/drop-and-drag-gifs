import React, {Component, PropTypes} from 'react';
import DraggableTypes from '../constants/DraggableTypes';
import {DropTarget} from 'react-dnd';

import './GifDropzone.scss';

// Decorate component with DropTarget functionality
// See react-dnd docs: http://gaearon.github.io/react-dnd/docs-overview.html
@DropTarget(DraggableTypes.GIF, { // implement DropTarget interface
  drop(props, monitor, component) {
    const item = monitor.getItem();
    console.log('Dropped', item);
    console.log(item.playingUrl);
    console.log(component);
    component.setState({ imgSrc: item.playingUrl });
    // component.setState({ imgSrc: props.playingUrl })
    // TODO update state so the dropped gif is displayed here
    // Hint: you have access to props (like maybe callbacks?) passed in from above
  }
}, function registerWithDnD(connect, monitor) {
  return { // These props are injected into our component
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  };
})
export default class GifDropzone extends Component {
  constructor() {
    super()

    this.state = {
      imgSrc: false
    }
  }
  static propTypes = {
    src: PropTypes.string,
    playingUrl: PropTypes.string,
    // Injected by React DnD:
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired
  };

  render() {
    const { connectDropTarget, isOver, canDrop, src } = this.props;
    const overlayStyles = {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: 'rgba(255, 255, 255, .5)',
    };
    let dropMessage = this.props.canDrop && !this.state.imgSrc ? <h2>Drop here!</h2> : '';

    return connectDropTarget(
      <div className="GifDropzone" style={{ position: 'relative' }} >

        <div style={isOver && canDrop ? overlayStyles : { display: 'none'}}></div>
        { this.state.imgSrc ? <img src={this.state.imgSrc} /> : null  }
        {dropMessage}
      </div>
    );
  }
}

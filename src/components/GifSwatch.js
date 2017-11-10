import React, {Component, PropTypes} from 'react';
import {DragSource} from 'react-dnd';
import DraggableTypes from '../constants/DraggableTypes';

// Decorate component with DragSource functionality
// See react-dnd docs: http://gaearon.github.io/react-dnd/docs-overview.html
@DragSource(DraggableTypes.GIF, { // implement DragSource interface
  beginDrag(props, monitor, component) {
    // return data that identifies this draggable
    const item = { id: props.id, playingUrl: props.playingUrl };
    console.log('Dragging', item);
    return item;
  }
}, function registerWithDnD(connect, monitor) {
  return { // These props are injected into our component
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
  };
})
export default class GifSwatch extends Component {

  constructor() {
    super()

    this.state = {
      hover: false
    }

    this.changeHover = this.changeHover.bind(this);
  }
  static propTypes = {
    thumbnailUrl: PropTypes.string.isRequired,
    // Injected by React DnD:
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  };

  changeHover(bool) {
    this.setState({ hover: bool})
  }

  // TODO run GIF on hover
  render() {
    const { isDragging, connectDragSource, thumbnailUrl, previewUrl } = this.props;

    const draggingStyles = {
      opacity: .5,
      background: '#6B45C9',
      zIndex: 2
    };

    const styles = {
      padding: 5,
      width: '100%',
      background: 'black',
      ...(isDragging ? draggingStyles : {})
    }

    let imageSrc = this.state.hover ? this.props.previewUrl : this.props.thumbnailUrl;

    return connectDragSource(
      <div className='gifswatch' style={styles}>
        <img
          src={ imageSrc }
          style={{width: '100%'}}
          onMouseEnter={() => this.changeHover(true)}
          onMouseLeave={() => this.changeHover(false)}
        />
      </div>
    );
  }
}

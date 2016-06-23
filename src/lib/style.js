import {
  TOP,
  RIGHT,
  DOWN,
  LEFT
} from './directionType'

function getTopStyle() {
  return {
    position: 'absolute',
    bottom: '100%',
    left: '50%',
    'marginLeft': '-20px'
  } 
} 

function getRightStyle() {
  return {
    position: 'absolute',
    top: '-5px',
    left: '105%',
  }
} 

function getLeftStyle() {
  return {
    position: 'absolute',
    top: '-5px',
    right: '105%'
  }
} 

function getDownStyle() {
  return {
    position: 'absolute',
    zIndex: '1',
    top: '100%',
    left: '50%',
    marginLeft: '-60px'
  }
} 


export function initDirection(d) {
  switch(d) {
    case TOP:
      return hoverComponentWrap(getTopStyle())
      break
    case DOWN:
      return hoverComponentWrap(getDownStyle())
      break
    case LEFT:
      return hoverComponentWrap(getLeftStyle())
      break
    case RIGHT:
      return hoverComponentWrap(getRightStyle())
      break
    default:
      return hoverComponentWrap(getRightStyle())
      break
  }
}

export function hoverComponentWrap(d) {
  return {
      hoverComponent: d
  }
}

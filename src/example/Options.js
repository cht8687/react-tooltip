export const optionsRight = {
  direction: 'Right',
  followCursor: true,
  shiftX: 20,
  shiftY: 0
}

export const optionsTop = {
  direction: 'Top',
  followCursor: false,
  shiftX: 20,
  shiftY: 0
}

export const tooltip1 = {
  hoverComponent: 'I am the awesome tooltip 1!',
  trigger: 'awesome tooltip1'
};

export const tooltip2 = {
  hoverComponent: 'I am the awesome tooltip 2!',
  trigger: 'awesome tooltip2'
};  

export const tooltip1styles = {
  trigger: {
    background: 'rgb(142, 147, 247)',
    width: '200px',
    marginLeft: '5px'
  },

  hoverComponent: {
    height: '25px',
    overflowY: 'auto',
    width: '300px',
    background: '#cccccc',
    display: 'none',
    position: 'absolute'
  }
};

export const tooltip2styles = {
  trigger: {
    background: 'rgb(58, 98, 247)',
    width: '250px',
    marginLeft: '5px'
  },

  hoverComponent: {
    height: '25px',
    overflowY: 'auto',
    width: '250px',
    borderRadius: '15px',
    background: 'rgb(216, 226, 99)',
    display: 'none',
    position: 'absolute',
    padding: '5px'
  }
};
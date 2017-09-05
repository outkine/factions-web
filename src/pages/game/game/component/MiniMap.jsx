import { connect } from 'react-redux'
import React from 'react'

import { MINIMAP_BLOCK_COLOR } from '../constants.js'
import GuiComponent from './GuiComponent.jsx'
import MiniMap from '../class/gui/MiniMap.js'

class Component extends GuiComponent {
  constructor (props) {
    super(props)
    this.object = new MiniMap(this.props.size, 1)
    this.blockWidth = this.props.size[0] / window.GRID_WIDTH
  }

  componentWillReceiveProps (nextProps) {
    this.object.changeMarkerCoords(nextProps.coords)
    this.draw()
  }

  render () {
    return (
      <div style={{width: this.props.size[0], height: this.props.size[1]}} className={this.props.className}>
        <canvas style={{position: 'absolute'}} ref={this.backgroundInit} />
        <canvas ref={this.initCanvas}></canvas>
      </div>
    )
  }

  backgroundInit = (canvas) => {
    canvas.width = this.props.size[0]
    canvas.height = this.props.size[1]
    this.ctx = canvas.getContext('2d')
    this.generateBackground(JSON.parse(window.grid))
  }

  generateBackground = (grid) => {
    this.ctx.fillStyle = MINIMAP_BLOCK_COLOR
    for (let x = 0; x < window.GRID_WIDTH; x++) {
      for (let y = 0; y < window.GRID_HEIGHT; y++) {
        if (grid[x][y] === 'block') {
          this.ctx.fillRect(x * this.blockWidth, y * this.blockWidth, this.blockWidth, this.blockWidth)
        }
      }
    }
  }
}

function mapStateToProps (state) {
  return {
    coords: state.coords.slice()
  }
}

export default connect(mapStateToProps)(Component)

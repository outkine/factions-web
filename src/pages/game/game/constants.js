// let gridWidth = (typeof window !== 'undefined') ? window.GRID_WIDTH : 0
// let gridHeight = (typeof window !== 'undefined') ? window.GRID_HEIGHT : 0

let gridWidth = 0
let gridHeight = 0
let width = 0
let height = 0
let elementWidth = 0

if (typeof window !== 'undefined') {
  gridWidth = window.GRID_WIDTH
  gridHeight = window.GRID_HEIGHT
  width = window.innerWidth
  height = window.innerHeight
  elementWidth = width / 16 >> 0
}

export const
  SCALE_FACTOR = 3,
  REAL_BLOCK_WIDTH = 16,
  BLOCK_WIDTH = REAL_BLOCK_WIDTH * SCALE_FACTOR,
  BLOCK_SIZE = [BLOCK_WIDTH, BLOCK_WIDTH],

  // WIDTH = (typeof window !== 'undefined') ? window.GRID_HEIGHT * BLOCK_WIDTH : null,
  // HEIGHT = (typeof window !== 'undefined') ? window.GRID_WIDTH * BLOCK_WIDTH : null,
  WIDTH = gridWidth * BLOCK_WIDTH,
  HEIGHT = gridHeight * BLOCK_WIDTH,

  UPDATE_WAIT = 33,

  /// ARROW KEYS
  // KEY_RIGHT = 39,
  // KEY_LEFT = 37,
  // KEY_UP = 38,
  // KEY_DOWN = 40,

  /// WASD
  KEY_RIGHT = 68,
  KEY_LEFT = 65,
  KEY_UP = 87,
  KEY_DOWN = 83,
  KEY_RELOAD = 82,

  // GRID_COLOR = '#8e8e8e',
  ELEMENT_OUTLINE_COLOR = '#bababa',
  ELEMENT_BACKGROUND_COLOR = '#e0e0e0',
  ELEMENT_OFFSET = 25,
  GUI_MARGIN = 50,

  HEALTH_BAR_SIZE = [elementWidth, 300],
  HEALTH_BAR_COLOR = '#966f6f',

  PLAYER_SPEED = 10,
  DIAGONAL_PLAYER_SPEED = PLAYER_SPEED / Math.sqrt(2),
  PLAYER_HEALTH = 10,

  MINIMAP_SIZE = [elementWidth, elementWidth],
  MINIMAP_PLAYER_COLOR = '#4a6782',
  MINIMAP_MARKER_WIDTH = 10,
  MINIMAP_BLOCK_COLOR = '#bababa',


  BLOCK_OUTLINE_WIDTH = 1,

  // BLOCK_COLOR = '#C0B283',
  // BLOCK_OUTLINE_COLOR = '#373737',
  // FLOOR_COLOR = '#dcd0c0',

  BLOCK_COLOR = '#6d7993',
  BLOCK_OUTLINE_COLOR = '#8A93A8',
  FLOOR_COLOR = '#efefef',
  TREE_COLOR = '#44846a',
  TREE_OUTLINE = '#62bc97',

  BULLET_BAR_GAP = SCALE_FACTOR,
  BULLET_BAR_BULLET_OUTLINE = '#C0B283',
  BULLET_BAR_BULLET_COLOR = '#DCD0C0',
  BULLET_BAR_SIZE = [elementWidth, 300],

  CURSOR_AIMING = 'url(media/aiming.gif), auto',
  CURSOR_RELOADING = ['url(media/reloading1.gif), auto', 'url(media/reloading2.gif), auto', 'url(media/reloading3.gif), auto', 'url(media/reloading4.gif), auto'],

  // FONT = '10px sans-serif',
  LEADERBOARD_ROW_HEIGHT = 15,
  LEADERBOARD_ROW_NUMBER = 10,
  LEADERBOARD_ROW_PADDING = 10,
  LEADERBOARD_PADDING = 10,
  LEADERBOARD_SIZE = [elementWidth, (LEADERBOARD_ROW_HEIGHT + LEADERBOARD_ROW_PADDING) * LEADERBOARD_ROW_NUMBER - LEADERBOARD_ROW_PADDING + LEADERBOARD_PADDING],

  FONT_SIZE = 15,
  FONT = `${FONT_SIZE}px Montserrat`,
  OPPONENT_OFFSET = -3 * SCALE_FACTOR,
  OPPONENT_HEALTH_BAR_SIZE = [20 * SCALE_FACTOR, 3 * SCALE_FACTOR],
  OPPONENT_BACKGROUND_SIZE = [OPPONENT_HEALTH_BAR_SIZE[0], FONT_SIZE + OPPONENT_HEALTH_BAR_SIZE[1] + SCALE_FACTOR * 2],
  OPPONENT_BACKGROUND_OFFSET = OPPONENT_OFFSET - OPPONENT_BACKGROUND_SIZE[1],
  OPPONENT_HEALTH_BAR_OFFSET = OPPONENT_OFFSET - OPPONENT_HEALTH_BAR_SIZE[1] + SCALE_FACTOR,
  OPPONENT_TEXT_OFFSET = FONT_SIZE + SCALE_FACTOR

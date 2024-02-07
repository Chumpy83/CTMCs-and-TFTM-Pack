/*onEvent('block.right_click', event => {
  if (event.item.id == 'tfc:torch')// && event.level.dimension() != 'minecraft:overworld')
  event.cancel()
}
)*/
/*onEvent('block.place', event => {
  if (event.item == 'tfc:torch')
  //if (event.level.minecraftLevel.dimension == 'agape:moon_surface') {
    event.level.minecraftLevel.destroyBlock(event.block.pos, false);
    event.block.set('tfc:dead_torch');
  }
})*/
onEvent('block.place', event => {
  if (event.block == 'tfc:torch' && event.level.dimension == 'agape:moon_surface')
  event.block.set('tfc:dead_torch');
})
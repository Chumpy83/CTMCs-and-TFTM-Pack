// priority: 0
onEvent('jei.hide.items', e=> [
    e.hide('minecraft:stone')
])
onEvent('jei.remove.recipes', e=> [
    e.remove('minecraft:stone')
])
console.info('Hello, World! (You will see this line every time client resources reload)')
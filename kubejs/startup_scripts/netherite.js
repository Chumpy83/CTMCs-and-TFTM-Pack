// priority: 0

console.info('adding metals is hard!')

onEvent('item.registry', event =>
{   event.create('metal/axe/netherite', 'axe').tier('titanium').attackDamageBonus(6).speed(4.0).maxDamage(4100.0).maxStackSize(1).displayName('Netherite Axe').parentModel('item/metal/axe/netherite').texture('item/metal/axe/netherite')
})
onEvent('item.registry', event =>
{   event.create('metal/axe_head/netherite').maxStackSize(64).displayName('Netherite Axe Head').parentModel('item/metal/axe_head/netherite').texture('item/metal/axe_head/netherite')
})
onEvent('item.registry', event =>
{   event.create('kubejs:metal/ingot/netherite').displayName('Netherite Ingot').parentModel('item/metal/ingot/netherite').texture('item/metal/ingot/netherite').maxStackSize(16)
})
onEvent('item.registry', event =>
{   event.create('metal/double_ingot/netherite').displayName('Netherite Double Ingot').parentModel('item/metal/double_ingot/netherite').texture('item/metal/double_ingot/netherite').maxStackSize(4)
})
onEvent('item.registry', event =>
{   event.create('metal/sheet/netherite').maxStackSize(16).displayName('Netherite Sheet').parentModel('item/metal/sheet/netherite').texture('item/metal/sheet/netherite')
})
onEvent('item.registry', event =>
{   event.create('metal/double_sheet/netherite').maxStackSize(4).displayName('Netherite Double Sheet').parentModel('item/metal/double_sheet/netherite').texture('item/metal/double_sheet/netherite')
})
onEvent('item.registry', event =>
{   event.create('metal/rod/netherite').maxStackSize(64).displayName('Netherite Rod').parentModel('item/metal/rod/netherite').texture('item/metal/rod/netherite')
})
onEvent('item.registry', event =>
{   event.create('metal/shield/netherite').maxStackSize(1).displayName('Netherite Shield').parentModel('item/metal/shield/netherite').texture('item/metal/shield/netherite')
})
onEvent('item.registry', event =>
{   event.create('metal/boots/netherite', 'boots').tier('netherite').maxDamage(4100.0).maxStackSize(1).displayName('Netherite Boots').parentModel('item/metal/boots/netherite').texture('item/metal/boots/netherite')
})
onEvent('item.registry', event =>
{   event.create('metal/chestplate/netherite', 'chestplate').tier('netherite').maxDamage(4100.0).maxStackSize(1).displayName('Netherite Chestplate').parentModel('item/metal/chestplate/netherite').texture('item/metal/chestplate/netherite')
})
onEvent('item.registry', event =>
{   event.create('metal/chisel/netherite', 'tfc:chisel').tier('titanium').attackDamageBonus(2).speed(4.0).maxDamage(4100.0).maxStackSize(1).displayName('Netherite Chisel').parentModel('item/metal/chisel/netherite').texture('item/metal/chisel/netherite').tier('netherite')
})
onEvent('item.registry', event =>
{   event.create('metal/chisel_head/netherite').maxStackSize(64).displayName('Netherite Chisel Head').parentModel('item/metal/chisel_head/netherite').texture('item/metal/chisel_head/netherite')
})
onEvent('item.registry', event =>
{   event.create('metal/fish_hook/netherite').maxStackSize(64).displayName('Netherite Fish Hook').parentModel('item/metal/fish_hook/netherite').texture('item/metal/fish_hook/netherite')
})
onEvent('item.registry', event =>
{   event.create('metal/fishing_rod/netherite').maxStackSize(1).displayName('Netherite Fishing Rod').parentModel('item/metal/fishing_rod/netherite').texture('item/metal/fishing_rod/netherite')
})
onEvent('item.registry', event =>
{   event.create('metal/greaves/netherite', 'leggings').tier('netherite').maxDamage(4100.0).maxStackSize(1).displayName('Netherite Greaves').parentModel('item/metal/greaves/netherite').texture('item/metal/greaves/netherite').tier('netherite')
})
onEvent('item.registry', event =>
{   event.create('metal/hammer/netherite', 'tfc:tool').hammer().tier('titanium').maxDamage(4100.0).attackDamageBonus(6).speed(4.0).maxStackSize(1).displayName('Netherite Hammer').parentModel('item/metal/hammer/netherite').texture('item/metal/hammer/netherite')
})
onEvent('item.registry', event =>
{   event.create('metal/hammer_head/netherite').maxStackSize(1).displayName('Netherite Hammer Head').parentModel('item/metal/hammer_head/netherite').texture('item/metal/hammer_head/netherite')
})
onEvent('item.registry', event =>
{   event.create('metal/helmet/netherite', 'helmet').tier('titanium').maxDamage(4100.0).maxStackSize(1).displayName('Netherite Helmet').parentModel('item/metal/helmet/netherite').texture('item/metal/helmet/netherite')
})
onEvent('item.registry', event =>
{   event.create('metal/hoe/netherite', 'tfc:hoe').tier('titanium').maxDamage(4100.0).attackDamageBonus(5).speed(4.0).maxStackSize(1).displayName('Netherite Hoe').parentModel('item/metal/hoe/netherite').texture('item/metal/hoe/netherite')
})
onEvent('item.registry', event =>
{   event.create('metal/hoe_head/netherite').maxStackSize(64).displayName('Netherite Hoe Head').parentModel('item/metal/hoe_head/netherite').texture('item/metal/hoe_head/netherite')
})
onEvent('item.registry', event =>
{   event.create('metal/javelin/netherite', 'tfc:javelin').tier('netherite').maxDamage(4100.0).attackDamageBonus(6).speed(4.0).maxStackSize(1).displayName('Netherite Javelin')/*.parentModel('item/metal/javelin/netherite').texture('item/metal/javelin/netherite')*/
})
onEvent('item.registry', event =>
{   event.create('metal/javelin_head/netherite').maxStackSize(64).displayName('Netherite Javelin Head').parentModel('item/metal/javelin_head/netherite').texture('item/metal/javelin_head/netherite')
})
onEvent('item.registry', event =>
{   event.create('metal/knife/netherite', 'tfc:tool').knife().tier('titanium').maxDamage(4100.0).attackDamageBonus(2.5).speed(4.0).maxStackSize(1).displayName('Netherite Knife').parentModel('item/metal/knife/netherite').texture('item/metal/knife/netherite')
})
onEvent('item.registry', event =>
{   event.create('metal/knife_blade/netherite').maxStackSize(64).displayName('Netherite Knife Blade').parentModel('item/metal/knife_blade/netherite').texture('item/metal/knife_blade/netherite')
})
onEvent('item.registry', event =>
{   event.create('metal/mace/netherite', 'tfc:mace').tier('titanium').maxDamage(4100.0).attackDamageBonus(6).speed(4.0).maxStackSize(1).displayName('Netherite Mace').parentModel('item/metal/mace/netherite').texture('item/metal/mace/netherite')
})
onEvent('item.registry', event =>
{   event.create('metal/mace_head/netherite').maxStackSize(64).displayName('Netherite Mace Head').parentModel('item/metal/mace_head/netherite').texture('item/metal/mace_head/netherite')
})
onEvent('item.registry', event =>
{   event.create('metal/pickaxe/netherite', 'pickaxe').tier('titanium').maxDamage(4100.0).attackDamageBonus(6).speed(4.0).maxStackSize(1).displayName('Netherite Pickaxe').parentModel('item/metal/pickaxe/netherite').texture('item/metal/pickaxe/netherite')
})
onEvent('item.registry', event =>
{   event.create('metal/pickaxe_head/netherite').maxStackSize(64).displayName('Netherite Pickaxe Head').parentModel('item/metal/pickaxe_head/netherite').texture('item/metal/pickaxe_head/netherite')
})
onEvent('item.registry', event =>
{   event.create('metal/propick/netherite', 'tfc:propick').tier('titanium').maxDamage(4100.0).attackDamageBonus(2).speed(4.0).maxStackSize(1).displayName('Netherite ProPick').parentModel('item/metal/propick/netherite').texture('item/metal/propick/netherite')
})
onEvent('item.registry', event =>
{   event.create('metal/propick_head/netherite').maxStackSize(64).displayName('Netherite ProPick Head').parentModel('item/metal/propick_head/netherite').texture('item/metal/propick_head/netherite')
})
onEvent('item.registry', event =>
{   event.create('metal/saw/netherite', 'tfc:tool').tier('titanium').maxDamage(4100.0).attackDamageBonus(4).speed(4.0).maxStackSize(1).displayName('Netherite Saw').parentModel('item/metal/saw/netherite').texture('item/metal/saw/netherite')
})
onEvent('item.registry', event =>
{   event.create('metal/saw_blade/netherite').maxStackSize(64).displayName('Netherite Saw Blade').parentModel('item/metal/saw_blade/netherite').texture('item/metal/saw_blade/netherite')
})
onEvent('item.registry', event =>
{   event.create('metal/scythe/netherite', 'tfc:scythe').tier('titanium').maxDamage(4100.0).attackDamageBonus(3.5).speed(4.0).maxStackSize(1).displayName('Netherite Scythe').parentModel('item/metal/scythe/netherite').texture('item/metal/scythe/netherite')
})
onEvent('item.registry', event =>
{   event.create('metal/scythe_blade/netherite').maxStackSize(64).displayName('Netherite Scythe Blade').parentModel('item/metal/scythe_blade/netherite').texture('item/metal/scythe_blade/netherite')
})
onEvent('item.registry', event =>
{   event.create('metal/shears/netherite').maxStackSize(1).displayName('Netherite Shears').maxDamage(4100.0).parentModel('item/metal/shears/netherite').texture('item/metal/shears/netherite')
})
onEvent('item.registry', event =>
{   event.create('metal/shovel/netherite', 'shovel').tier('titanium').maxDamage(4100.0).attackDamageBonus(6).speed(4.0).maxStackSize(1).displayName('Netherite Shovel').parentModel('item/metal/shovel/netherite').texture('item/metal/shovel/netherite')
})
onEvent('item.registry', event =>
{   event.create('metal/shovel_head/netherite').maxStackSize(64).displayName('Netherite Shovel Head').parentModel('item/metal/shovel_head/netherite').texture('item/metal/shovel_head/netherite')
})
onEvent('item.registry', event =>
{   event.create('metal/sword/netherite', 'sword').tier('titanium').maxDamage(4100.0).attackDamageBonus(6).speed(4.0).maxStackSize(1).displayName('Netherite Sword').parentModel('item/metal/sword/netherite').texture('item/metal/sword/netherite')
})
onEvent('item.registry', event =>
{   event.create('metal/sword_blade/netherite').maxStackSize(64).displayName('Netherite Sword Blade').parentModel('item/metal/sword_blade/netherite').texture('item/metal/sword_blade/netherite')
})
onEvent('item.registry', event =>
{   event.create('metal/tuyere/netherite').maxStackSize(1).displayName('Netherite Tuyere').parentModel('item/metal/tuyere/netherite').texture('item/metal/tuyere/netherite')
})
onEvent('item.registry', event =>
{   event.create('metal/unfinished_boots/netherite').maxStackSize(1).displayName('Netherite Unfinished Boots').parentModel('item/metal/unfinished_boots/netherite').texture('item/metal/unfinished_boots/netherite')
})
onEvent('item.registry', event =>
{   event.create('metal/unfinished_greaves/netherite').maxStackSize(1).displayName('Netherite Unfinished Greaves').parentModel('item/metal/unfinished_greaves/netherite').texture('item/metal/unfinished_greaves/netherite')
})
onEvent('item.registry', event =>
{   event.create('metal/unfinished_helmet/netherite').maxStackSize(1).displayName('Netherite Unfinished Helmet').parentModel('item/metal/unfinished_helmet/netherite').texture('item/metal/unfinished_helmet/netherite')
})
onEvent('item.registry', event =>
{   event.create('metal/unfinished_chestplate/netherite').maxStackSize(1).displayName('Netherite Unfinished Chestplate').parentModel('item/metal/unfinished_chestplate/netherite').texture('item/metal/unfinished_chestplate/netherite')
})
/*onEvent('block.registry', event =>
{   event.create('metal/chain/netherite').maxStackSize(1).displayName('Netherite Chain').model('block/metal/chain/netherite').textureAll('block/metal/chain/netherite')
})
onEvent('block.registry', event =>
{   event.create('metal/lamp/netherite').maxStackSize(1).displayName('Netherite Lamp').setBlockstateJson('metal/lamp/netherite')
})
onEvent('block.registry', event =>
{   event.create('metal/trapdoor/netherite').maxStackSize(1).displayName('Netherite Trapdoor').setBlockstateJson('metal/trapdoor/netherite')
})
onEvent('block.registry', event => {
    event.create('metal/anvil/netherite').hardness(2.0).maxStackSize(1).displayName('Netherite Anvil').model('block/metal/anvil/netherite').textureAll('block/metal/anvil/netherite')
})*/
onEvent('fluid.registry', event => 
    {
        event.create('metal/netherite')
        .stillTexture('minecraft:block/lava_still')
        .flowingTexture('minecraft:block/lava_flow')
        .color(0x31292a)
        .displayName('Molten Netherite')
        .noBlock()
    })
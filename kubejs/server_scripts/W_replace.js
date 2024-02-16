// priority: 10
//remove and re add recipes for plates, the volumes of metal were wrong due to mod interaction
settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true
onEvent('recipes', event => {
	const tfcMetals = [
		"bismuth", "bismuth_bronze", "black_bronze", "brass", "bronze", "copper", "gold", "nickel", "rose_gold", "silver",
		"tin", "zinc", "sterling_silver", "wrought_iron", "cast_iron", "steel", "black_steel", "blue_steel", "red_steel"]
	const metallumMetals = [	
		"andesite_alloy", "antimony", "alnico", "aluminum", "boron", "beryllium", "beryllium_copper", "blutonium",
		"constantan", "cobalt", "compressed_iron", "electrum", "platinum", "enderium", "ferroboron", "florentine_bronze",
		"graphite", "invar", "iridium", "lead", "lumium", "mithril", "nickel_silver", "osmium", "osmiridium", "pewter",
		"solder", "thorium", "titanium", "tungsten", "tungsten_steel", "uranium" ]
	const firmaMetals = [	
		"chromium", "stainless_steel"
	]
	const tfcTemps = [270, 985, 1070, 930, 950, 1080, 1060, 1453, 960, 961, 230, 420, 950, 1535, 1535, 1540, 1485, 1540, 1540]
	const metallumTemps = ["520", "630", "1500", "660", "2070", "1200", "1500", "1500", "1200", "1500", "1535", "1200", "1730", "1700",
	"3000", "400", "500", "1450", "2490", "328", "1500", "940", "1450", "3025", "1500", "1500", "400", "1750", "1700", "3400", "3690", "1100"]
	const firmaTemps = ["1250", "1540"]
	tfcMetals.forEach(i => {
		event.remove({ input: 'tfc_metalwork:metal/plate/' + i, type: 'tfc:heating' }) })
	tfcMetals.forEach(i => {
		event.remove({ input: 'tfc_metalwork:metal/large_plate/' + i, type: 'tfc:heating' }) })
	metallumMetals.forEach(i => {
		event.remove({ input: 'tfc_metalwork:metal/plate/' + i, type: 'tfc:heating' }) })
	metallumMetals.forEach(i => {
		event.remove({ input: 'tfc_metalwork:metal/large_plate/' + i, type: 'tfc:heating' }) })
	firmaMetals.forEach(i => {
		event.remove({ input: 'tfc_metalwork:metal/plate/' + i, type: 'tfc:heating' }) })
	firmaMetals.forEach(i => {
		event.remove({ input: 'tfc_metalwork:metal/large_plate/' + i, type: 'tfc:heating' }) })
	tfcMetals.forEach((metal, i) => {
		  const temp = tfcTemps[i];
		  event.recipes.tfc.heating(Fluid.of('tfc:metal/' + metal, 100),'tfc_metalwork:metal/plate/' + metal, temp) })
	tfcMetals.forEach((metal, i) => {
		const temp = tfcTemps[i];
		event.recipes.tfc.heating(Fluid.of('tfc:metal/' + metal, 200),'tfc_metalwork:metal/large_plate/' + metal, temp) })
	metallumMetals.forEach((metal, i) => {
		const temp = metallumTemps[i];
		event.recipes.tfc.heating(Fluid.of('tfc_metallum:metal/' + metal, 100),'tfc_metalwork:metal/plate/' + metal, temp) })
	metallumMetals.forEach((metal, i) => {
		const temp = metallumTemps[i];
		event.recipes.tfc.heating(Fluid.of('tfc_metallum:metal/' + metal, 200),'tfc_metalwork:metal/large_plate/' + metal, temp) })	
	firmaMetals.forEach((metal, i) => {
		const temp = firmaTemps[i];
		event.recipes.tfc.heating(Fluid.of('firmalife:metal/' + metal, 100),'tfc_metalwork:metal/plate/' + metal, temp) })
	firmaMetals.forEach((metal, i) => {
		const temp =firmaTemps[i];
		event.recipes.tfc.heating(Fluid.of('firmalife:metal/' + metal, 200),'tfc_metalwork:metal/large_plate/' + metal, temp) })		
	})
	/*onEvent('recipes', event => {
		event.tfcReplaceBlockInput('tfc:aggregate', /minecraft:\_concrete_powder/)
	})*/
onEvent('recipes', event => {
	// mods
	event.replaceInput({mod: 'immersiveposts'}, 'minecraft:stone_bricks', '#tfc:rock/bricks')
	event.replaceInput({mod: 'firmalife'}, 'minecraft:glass', '#forge:glass_panes/colorless')
	event.replaceInput({mod: 'create'}, 'minecraft:smooth_stone', '#forge:smooth_stone')
	//general shaped
    event.replaceInput({type: 'minecraft:crafting_shaped'}, 'immersiveengineering:lantern', 'tfc:metal/lamp/copper')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:torch', 'tfc:torch')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:kelp', 'tfc:plant/leafy_kelp')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:smooth_stone_slab', '#forge:smooth_stone_slab')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:cake', 'tfc:cake')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:glass_pane', '#forge:glass_panes/colorless')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:glass', '#forge:glass/colorless')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:shears', '#tfc:shears')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:stone_button', '#minecraft:buttons')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:stone', '#tfc:rock/raw')
	//event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:furnace', 'minecraft:blast_furnace')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:chest', '#forge:chests')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:wheat', 'tfc:food/wheat')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:chain', 'tfc:metal/chain/wrought_iron')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:dried_kelp', 'tfc:food/dried_kelp')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:iron_ingot', '#forge:ingots/iron')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:gold_ingot', '#forge:ingots/gold')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:copper_ingot', '#forge:ingots/copper')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:copper_block', 'tfc_metalwork:metal/block/copper')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:barrel', '#tfcbarrels:barrels')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:sand', '#forge:sand')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:fishing_rod', '#forge:fishing_rods')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:cocoa_beans', 'firmalife:food/cocoa_beans')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:composter', 'tfc:composter')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'mekanism:dust_charcoal', 'tfc:powder/charcoal')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'create:zinc_ingot', '#forge:ingots/zinc')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:iron_block', 'tfc_metalwork:metal/block/wrought_iron')
	event.replaceInput({mod: 'createindustry'}, 'createindustry:steel_block', 'tfc_metalwork:metal/block/steel')
	event.replaceInput({id: 'create_electric_stonks:reinforced_redstone_resonance_generator'}, 'tfc:gem/diamond', 'kubejs:metal/ingot/netherite')
	event.replaceInput({id: 'create_electric_stonks:reinforced_motor'}, 'tfc:gem/diamond', 'kubejs:metal/ingot/netherite')
	event.replaceInput({id: 'create_electric_stonks:reinforced_heavy_motor'}, 'tfc:gem/diamond', 'kubejs:metal/ingot/netherite')
	event.replaceInput({mod: 'createindustry'}, 'create:limestone', 'tfc:rock/gravel/limestone')
	event.replaceInput({mod: 'createindustry'}, 'minecraft:gravel', '#forge:gravel')
	event.replaceInput({mod: 'createindustry'}, 'minecraft:sand', '#forge:sand')
	event.replaceInput({mod: 'createindustry'}, 'createindustry:cement', 'createindustry:limesand')
	event.replaceInput({mod: 'createindustry'}, 'minecraft:clay_ball', Fluid.of('minecraft:water', 500))
	event.replaceInput({mod: 'railways'}, 'minecraft:acacia_slab', 'tfc:wood/planks/acacia_slab')
	event.replaceInput({mod: 'railways'}, 'minecraft:birch_slab', 'tfc:wood/planks/birch_slab')
	event.replaceInput({mod: 'railways'}, 'minecraft:oak_slab', 'tfc:wood/planks/oak_slab')
	event.replaceInput({mod: 'railways'}, 'minecraft:spruce_slab', 'tfc:wood/planks/spruce_slab')
	event.replaceInput({mod: 'create'}, 'minecraft:acacia_planks', 'tfc:wood/planks/acacia')
	event.replaceInput({mod: 'create'}, 'minecraft:birch_planks', 'tfc:wood/planks/birch')
	event.replaceInput({mod: 'create'}, 'minecraft:oak_planks', 'tfc:wood/planks/oak')
	event.replaceInput({mod: 'create'}, 'minecraft:spruce_planks', 'tfc:wood/planks/spruce')
	event.replaceInput({mod: 'railways', output: 'railways:conductor_whistle'}, 'minecraft:copper_ingot', 'create:brass_nugget'),
	event.replaceInput({output: 'create:rope_pulley'}, '#forge:wool', 'immersiveengineering:wirecoil_structure_rope')
	event.replaceInput({mod: 'create_things_and_misc'}, 'minecraft:oak_planks', 'tfc:wood/planks/oak')
	event.replaceInput({mod: 'create_things_and_misc'}, 'minecraft:acacia_planks', 'tfc:wood/planks/acacia')
	event.replaceInput({mod: 'create_things_and_misc'}, 'minecraft:spruce_planks', 'tfc:wood/planks/spruce')
	event.replaceInput({mod: 'create_things_and_misc'}, 'minecraft:birch_planks', 'tfc:wood/planks/birch')
	event.replaceInput({output: 'controlengineering:punched_tape'}, '#forge:slimeballs', 'tfc:glue')
	event.replaceInput({mod: 'astikorcarts'}, '#forge:rods', 'create:')
	event.replaceInput({mod: 'supercircuitmaker'}, 'minecraft:deepslate', 'immersiveengineering:steel_plate')
	// general shapeless
	event.replaceInput({type: 'minecraft:crafting_shapeless'}, 'minecraft:glass_pane', '#forge:glass_panes/colorless')
	event.replaceInput({type: 'minecraft:crafting_shapeless'}, 'minecraft:stone', '#tfc:rock/raw')
	event.replaceInput({type: 'minecraft:crafting_shapeless'}, 'minecraft:sand', '#forge:sand')
	event.replaceInput({type: 'minecraft:crafting_shapeless'}, 'minecraft:fishing_rod', '#forge:fishing_rods')
	//replace output
	event.replaceOutput({}, 'minecraft:gold_ingot', 'tfc:metal/ingot/gold')
	event.replaceOutput({}, 'minecraft:copper_ingot', 'tfc:metal/ingot/copper')
	event.replaceOutput({id: 'tfc:heating/glass_from_shards'}, 'minecraft:glass', 'tfc:metal/glass')
	event.replaceOutput({id: 'tfc:heating/glass_from_sand'}, 'minecraft:glass', 'tfc:metal/glass')
	//replace input
	event.replaceInput({}, 'minecraft:slime_ball', 'tfc:glue')
	event.replaceInput({}, 'minecraft:slime_block', 'afc:rubber_bar')
	event.replaceInput({output: 'create:mechanical_drill'}, '#forge:ingots/iron', 'immersiveengineering:drillhead_steel')
	event.replaceInput({output: 'create:mechanical_saw'}, '#forge:ingots/iron', 'tfc:metal/saw_blade/wrought_iron')
	event.replaceInput({output: 'create:mechanical_harvester'}, '#forge:plates/iron', 'tfc:metal/scythe_blade/wrought_iron')
	event.replaceInput({output: 'create:mechanical_plough'}, '#forge:plates/iron', 'tfc:metal/hoe_head/wrought_iron')
	event.replaceInput({output: 'create:cart_assembler'}, 'minecraft:redstone', 'pneumaticcraft:printed_circuit_board')
	event.replaceInput({output: 'agricraft:seed_analyzer'}, 'minecraft:stone_slab', '#create:sleepers')
	event.replaceInput({output: 'create:crafting/kinetics/framed_glass_trapdoor'}, 'create:framed_glass', 'create:framed_glass_pane')
	event.replaceInput({output: 'agricraft:agricraft/magnifying_glass'}, 'minecraft:glass_pane', 'kubejs:lens_clear')
	})

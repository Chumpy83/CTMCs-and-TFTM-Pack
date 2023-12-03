// priority: 10
onEvent('recipes', event => {
    // remove all recipes for type
	event.remove({type: 'minecraft:campfire_cooking'})
	event.remove({type: 'minecraft:smelting'})
	// other mods
//	event.remove({output: ['#forge:sheets'], mod: 'tfc_ie_addon'})
//	event.remove({output: ['#forge:rods'], mod: 'tfc_ie_addon'})
//	event.remove({output: ['#forge:dyes'], mod: 'tfc_ie_addon'})
//	event.remove({output: ['#forge:dyes'], mod: 'create'})
//	event.remove({output: ['#forge:dyes'], mod: 'farmersdelight'})
//	event.remove({output: ['#forge:rods'], mod: 'immersiveengineering'})
	// other mods recipe type
//	event.remove({output: ['#forge:dusts'], type: 'immersiveengineering:hammer_crushing'})
//	event.remove({output: ['#forge:storage_blocks'], type: 'immersiveengineering:metal_press'})
//	event.remove({output: ['#forge:wires'], type: 'immersiveengineering:metal_press'})
	event.remove({output: ['#forge:ingots', '#forge:nuggets', '#minecraft:coals', '#forge:gems'], type: 'minecraft:smelting'})
	event.remove({output: ['minecraft:iron_ingot'], input: 'minecraft:iron_block'})
	event.remove({output: ['#forge:ingots', '#forge:nuggets', '#minecraft:coals', '#forge:gems'], type: 'minecraft:blasting'})
	event.remove({output: ['#forge:meats'], type: 'minecraft:smoking'})
	event.remove({output: ['minecraft:stick'], input: '#minecraft:planks'})
	event.remove({output: ['minecraft:slime_block']})
	event.remove({mod: 'create', output: ['create:belt_connector', 'create:dough', 'create:blaze_cake_base', 'create:blaze_cake', 'create:super_glue']})
	event.remove({mod: 'minecraft', output: ['minecraft:dried_kelp_block']})
	event.remove({mod: 'railways', output: ['railways:track_crimson', 'railways:track_dark_oak', 'railways:track_jungle', 'railways:track_warped', 'railways:track_blackstone' ]})
	event.remove({mod: 'createchunkloading', output: ['createchunkloading:chunk_loader']})
	event.remove({mod: 'create', output: ['minecraft:slime_ball']})
	event.remove({mod: 'computercraft', output: ['computercraft:computer_normal', 'computercraft:computer:advanced']})
	event.remove({mod: 'create', output: ['create:gantry_carriage']})
	// remove for type
	event.remove({output: [
		'minecraft:stone', 'minecraft:granite',
		'industrializedcreate:raw_leather_sheet',
		'industrializedcreate:tanned_leather_sheet',
		'industrializedcreate:leather_sheet',
		'industrializedcreate:withered_totem',
		'industrializedcreate:imbued_withered_totem',
		'industrializedcreate:compressed_cobblestone',
		'industrializedcreate:double_compressed_cobblestone',
		'industrializedcreate:triple_compressed_cobblestone',
		'industrializedcreate:quadruple_compressed_cobblestone',
		'industrializedcreate:penta_compressed_cobblestone',
		'industrializedcreate:sextuple_compressed_cobblestone',
		'industrializedcreate:ultimate_compressed_cobblestone',
		'create_things_and_misc:mending_rune',
		'create_things_and_misc:copper_knife',
		'create_things_and_misc:zinc_knife',
		'create_things_and_misc:brass_knife',
		'#forge:storage_blocks',
		'#minecraft:coals',
//		'minecraft:bone_meal',
//		'minecraft:white_carpet',
		'minecraft:white_bed',
//		'minecraft:sugar',
//		'minecraft:paper',
//		'minecraft:string',
		'minecraft:snow',
		'#minecraft:wool',
		'#tfc:colored_bed',
		'#tfc:colored_shulker_boxes',
		'#tfc:colored_concrete_powder',
		'create_enchantment_industry'
		], type: 'minecraft:crafting_shapeless'})
	event.remove({output: [
		'#forge:colored_sleeping_bag',
		'#forge:colored_hammock',
		'#forge:storage_blocks',
		'minecraft:white_terracotta',
//		'#forge:glass',
//		'#tfc:colored_bed',
//		'#tfc:colored_carpet',
//		'#tfc:colored_terracotta',
//		'#tfc:colored_stained_glass_pane'
	], type: 'minecraft:crafting_shaped'})
	// remove all recipes
	event.remove({output: [
		'immersiveengineering:pickaxe_steel',
		'immersiveengineering:shovel_steel',
		'immersiveengineering:axe_steel',
		'immersiveengineering:hoe_steel',
		'immersiveengineering:sword_steel',
		'immersiveengineering:armor_steel_feet',
		'immersiveengineering:armor_steel_legs',
		'immersiveengineering:armor_steel_chest',
		'immersiveengineering:armor_steel_head',
//		'immersiveengineering:plate_silver',
//		'immersiveengineering:plate_gold',
//		'immersiveengineering:plate_steel',
//		'immersiveengineering:plate_copper',
//		'immersiveengineering:plate_nickel',
		'tinyredstone:silicon',
		'tinyredstone:silicon_compound',
		'create_sa:copper_helmet',
		'create_sa:copper_chestplate',
		'create_sa:copper_leggings',
		'create_sa:copper_boots',
		'create_sa:copper_pickaxe',
		'create_sa:copper_axe',
		'create_sa:copper_sword',
		'create_sa:copper_shovel',
		'create_sa:copper_hoe',
		'create_sa:zinc_pickaxe',
		'create_sa:zinc_axe',
		'create_sa:zinc_sword',
		'create_sa:zinc_shovel',
		'create_sa:zinc_hoe',
		'create:zinc_ingot',
		'create:bar_of_chocolate',
		'create_sa:brass_pickaxe',
		'create_sa:brass_axe',
		'create_sa:brass_sword',
		'create_sa:brass_shovel',
		'create_sa:brass_hoe',
		'createsifter:andesite_mesh',
		'createsifter:zinc_mesh',
		'exnihilosequentia:cooked_silkworm',
		'exnihilosequentia:beehive_frame',
		'exnihilosequentia:raw_lead',
		'exnihilosequentia:andesite_pebble',
		'exnihilosequentia:basalt_pebble',
		'exnihilosequentia:blackstone_pebble',
		'exnihilosequentia:diorite_pebble',
		'exnihilosequentia:granite_pebble',
		'exnihilosequentia:stone_pebble',
		'exnihilosequentia:acacia_sieve',
		'exnihilosequentia:oak_sieve',
		'exnihilosequentia:dark_oak_sieve',
		'exnihilosequentia:jungle_sieve',
		'exnihilosequentia:spruce_sieve',
		'exnihilosequentia:crimson_sieve',
		'exnihilosequentia:warped_sieve',
		'exnihilosequentia:diamond_hammer',
		'exnihilosequentia:golden_hammer',
		'exnihilosequentia:wooden_hammer',
		'exnihilosequentia:andesite_crook',
		'exnihilosequentia:bone_crook',
		'exnihilosequentia:diamond_crook',
		'exnihilosequentia:diorite_crook',
		'exnihilosequentia:gold_crook',
		'exnihilosequentia:granite_crook',
		'exnihilosequentia:stone_crook',
		'exnihilosequentia:acacia_crucible',
		'exnihilosequentia:birch_crucible',
		'exnihilosequentia:dark_oak_crucible',
		'exnihilosequentia:jungle_crucible',
		'exnihilosequentia:spruce_crucible',
		'exnihilosequentia:crimson_crucible',
		'exnihilosequentia:warped_crucible',
		'exnihilosequentia:acacia_barrel',
		'exnihilosequentia:birch_barrel',
		'exnihilosequentia:dark_oak_barrel',
		'exnihilosequentia:jungle_barrel',
		'exnihilosequentia:spruce_barrel',
		'exnihilosequentia:crimson_barrel',
		'exnihilosequentia:warped_barrel',
		'exnihilosequentia:oak_barrel',
		'immersiveengineering:lantern',
		'minecraft:beehive',
		'minecraft:lantern',
		'minecraft:soul_lantern',
		'minecraft:torch',
		'minecraft:oak_planks',
		'minecraft:spruce_planks',
		'minecraft:birch_planks',
		'minecraft:jungle_planks',
		'minecraft:acacia_planks',
		'minecraft:dark_oak_planks',
		'minecraft:oak_slab',
		'minecraft:spruce_slab',
		'minecraft:birch_slab',
		'minecraft:jungle_slab',
		'minecraft:acacia_slab',
		'minecraft:dark_oak_slab',
		'minecraft:mushroom_stew',
		'minecraft:cocoa_beans',
		'minecraft:stonecutter',
		'minecraft:dried_kelp',
		'minecraft:bread',
		'minecraft:cake',
		'minecraft:smooth_stone_slab',
		'create:rose_quartz',
		'minecraft:gold_ingot',
		'minecraft:copper_ingot',
		//'tfc:food/barley_dough',
		//'tfc:food/maize_dough',
		//'tfc:food/oat_dough',
		//'tfc:food/rice_dough',
		//'tfc:food/rye_dough',
		//'tfc:food/wheat_dough',
		'#forge:tools/netherite', '#forge:armor/netherite', 'minecraft:chainmail_helmet', 'minecraft:chainmail_chestplate', 'minecraft:chainmail_leggings', 
		'minecraft:chainmail_boots', 'createindustry:steel_block', 'createindustry:steel_ingot', 'createindustry:aluminum_block', 'createindustry:coal_coke_block',
		'createindustry:coal_coke',
		'excompressum:compressed_dust', 'excompressum:compressed_cobblestone', 'excompressum:compressed_gravel', 'excompressum:compressed_sand', 'excompressum:compressed_dirt',
		'excompressum:compressed_flint', 'excompressum:compressed_nether_gravel', 'excompressum:compressed_ender_gravel', 'excompressum:compressed_soul_sand',
		'excompressum:compressed_netherrack', 'excompressum:compressed_end_stone', 'excompressum:compressed_diorite', 'excompressum:compressed_granite', 
		'excompressum:compressed_andesite', 'excompressum:compressed_crushed_andsite', 'excompressum:compressed_crushed_diorite', 'excompressum:compressed_crushed_granite',
		'excompressum:auto_compressed_hammer', 'excompressum:compressed_hammer_wood', 'excompressum:compressed_hammer_stone', 'excompressum:compressed_hammer_iron',
		'excompressum:compressed_hammer_gold', 'excompressum:compressed_hammer_diamond', 'excompressum:compressed_hammer_netherite',
		'create:crushed_iron_ore', 'create:crushed_gold_ore', 'create:crushed_copper_ore', 'create:crushed_zinc_ore', 'create:crushed_osmium_ore',
		'create:crushed_platinum_ore', 'create:crushed_lead_ore', 'create:crushed_silver_ore', 'create:crushed_tin_ore', 'create:crushed_aluminum_ore',
		'create:crushed_nickel_ore', 'create:crushed_uranium_ore', 'create:wheat_flour', 'create:sweet_roll', 'create:chocolate_glazed_berries',
		'create:honeyed_apple'
	]})
	event.remove({input: ['minecraft:mutton', 'minecraft:porkchop', 'minecraft:beef', 'minecraft:chicken'], type: 'minecraft:smoking'})
	event.remove({input: ['minecraft:mutton', 'minecraft:porkchop', 'minecraft:beef', 'minecraft:chicken'], type: 'minecraft:crafting_shaped'})
	event.remove({input: 'afc:rubber_bar', output: 'minecraft:slime_ball' })
})
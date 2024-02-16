priority: 10
settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true
onEvent('recipes', event => {
    // remove all recipes for type
	event.remove({type: 'minecraft:campfire_cooking'})
	event.remove({type: 'minecraft:smelting'})
	event.remove({input: '#minecraft:planks', output: '#minecraft:beds'})
	event.remove({input: '#forge:ingots/copper', output: 'create:copper_backtank'})
	event.remove({output: 'create:diving_helmet'})
	event.remove({output: ['#forge:ingots', '#forge:nuggets', '#minecraft:coals', '#forge:gems'], type: 'minecraft:smelting'})
	event.remove({output: ['minecraft:iron_ingot'], input: 'minecraft:iron_block'})
	event.remove({output: ['#forge:ingots', '#forge:nuggets', '#minecraft:coals', '#forge:gems'], type: 'minecraft:blasting'})
	event.remove({output: ['#forge:meats'], type: 'minecraft:smoking'})
	event.remove({output: ['minecraft:stick'], input: '#minecraft:planks'})
	event.remove({output: ['minecraft:slime_block']})
	event.remove({mod: 'create', output: ['create:belt_connector', 'create:dough', 'create:blaze_cake_base', 'create:blaze_cake', 'create:super_glue']})
	event.remove({output: ['create_things_and_misc:glue_packaging']}) 
	event.remove({mod: 'minecraft', output: ['minecraft:dried_kelp_block']})
	event.remove({mod: 'railways', output: ['railways:track_crimson', 'railways:track_dark_oak', 'railways:track_jungle', 'railways:track_warped', 'railways:track_blackstone' ]})
	event.remove({mod: 'createchunkloading', output: ['createchunkloading:chunk_loader']})
	event.remove({mod: 'create', output: ['minecraft:slime_ball']})
	event.remove({mod: 'exnihilosequentia'})
	event.remove({mod: 'exoticbirds'})
	event.remove({mod: 'industrialforegoing'})
	event.remove({output: 'computercraft:computer_normal'}) 
	event.remove({output: 'computercraft:computer_advanced'})
	event.remove({output: ['create:gantry_carriage']})
	event.remove({output: ['#tfc:colored_concrete_powder']})
	event.remove({output: ['#forge:concrete_powders']})
	event.remove({id: 'create:crafting/appliances/copper_diving_boots'})
	event.remove({id: 'immersiveposts:has_gold_rod'})
	event.remove({id: 'immersiveposts:has_copper_rod'})
	event.remove({id: 'immersiveposts:has_lead_rod'})
	event.remove({id: 'immersiveposts:has_silver_rod'})
	event.remove({id: 'immersiveposts:has_nickel_rod'})
	event.remove({id: 'immersiveposts:has_constantan_rod'})
	event.remove({id: 'immersiveposts:has_electrum_rod'})
	event.remove({id: 'immersiveposts:has_uranium_rod'})
	event.remove({id: 'minecraft:observer'})
	event.remove({id: 'create:milling/saddle'})
	event.remove({id: 'create:crushing/leather_horse_armor'})
	event.remove({id: 'farmersdelight:cutting/leather_horse_armor'})
	event.remove({id: 'farmersdelight:cutting/leather_leggings'})
	event.remove({id: 'farmersdelight:cutting/leather_chestplate'})
	event.remove({id: 'farmersdelight:cutting/leather_boots'})
	event.remove({id: 'farmersdelight:cutting/leather_helmet'})
	event.remove({id: 'farmersdelight:cutting/leather_saddle'})
	event.remove({id: 'immersiveengineering:crafting/reinforced_crate'})
	event.remove({id: 'immersiveengineering:crafting/heavy_engineering'})
	event.remove({id: 'immersiveengineering:crafting/light_engineering'})
	event.remove({id: 'immersiveengineering:crafting/component_iron'})
	event.remove({id: 'immersiveengineering:crafting/component_steel'})
	event.remove({id: 'immersiveengineering:crafting/blastfurnace_preheater'})
	event.remove({id: 'tfc:crafting/vanilla/redstone/observer'})
	event.remove({id: 'minecraft:netherite_ingot'})
	event.remove({id: 'immersiveengineering:mixer/concrete'})
	event.remove({id: 'computercraft:pocket_computer_normal'})
	event.remove({id: 'computercraft:pocket_computer_advanced'})
	event.remove({id: 'computercraft:pocket_computer_advanced_upgrade'})
	event.remove({id: 'computercraft:turtle_normal'})
	event.remove({id: 'computercraft:turtle_advanced'})
	event.remove({id: 'computercraft:turtle_advanced_upgrade'})
	event.remove({id: 'computercraft:speaker'})
	event.remove({id: 'computercraft:disk_drive'})
	event.remove({id: 'computercraft:printer'})
	event.remove({id: 'computercraft:monitor_normal'})
	event.remove({id: 'computercraft:monitor_advanced'})
	event.remove({id: 'computercraft:wireless_modem_normal'})
	event.remove({id: 'computercraft:wireless_modem_advanced'})
	event.remove({id: 'computercraft:wired_modem'})
	event.remove({id: 'compactmachines:wall'})
	event.remove({id: 'compactmachines:machine_tiny'})
	event.remove({id: 'compactmachines:machine_small'})
	event.remove({id: 'compactmachines:machine_normal'})
	event.remove({id: 'compactmachines:machine_large'})
	event.remove({id: 'compactmachines:machine_giant'})
	event.remove({id: 'compactmachines:machine_maximum'})	
	event.remove({id: 'createsifter:sifting/sand_andesite_mesh'})
	event.remove({id: 'createsifter:sifting/sand_string_mesh'})
	event.remove({id: 'createsifter:sifting/gravel_andesite_mesh'})
	event.remove({id: 'createsifter:sifting/dirt_strig_mesh_waterlogged'})
	event.remove({id: 'createsifter:sifting/sand_zinc_mesh'})
	event.remove({id: 'createsifter:sifting/gravel_zinc_mesh'})
	event.remove({id: 'createsifter:sifting/sand_brass_mesh'})
	event.remove({id: 'createsifter:sifting/gravel_brass_mesh'})
	event.remove({id: 'quark:building/crafting/stone_lamp'})
	event.remove({id: 'quark:building/crafting/stone_brick_lamp'})
	event.remove({id: 'quark:building/crafting/thatch'})
	event.remove({id: 'quark:oddities/crafting/crate'})
	event.remove({id: 'quark:oddities/crafting/pipe'})
	event.remove({id: 'quark:automation/crafting/feeding_trough'})
	event.remove({id: 'quark:automation/crafting/chute'})
	event.remove({id: 'quark:mobs/crafting/golden_frog_leg'})
	event.remove({id: 'weather2:sand_layer'})
	event.remove({mod: 'alchemistry', output: 'alchemistry:atomizer'})
	event.remove({mod: 'alchemistry', output:  'alchemistry:compactor'})
	event.remove({mod: 'alchemistry', output:  'alchemistry:combiner'})
	event.remove({mod: 'alchemistry', output:  'alchemistry:dissolver'})
	event.remove({mod: 'alchemistry', output:  'alchemistry:liquifier'})
	event.remove({mod: 'alchemistry', output:  'alchemistry:fission_chamber_controller'})
	event.remove({mod: 'alchemistry', output:  'alchemistry:fusion_chamber_controller'})
	event.remove({mod: 'alchemistry', output:  'alchemistry:reactor_energy'})
})
onEvent('recipes', event => {
	event.remove({output: ['minecolonies:blockhutlumberjack']})
	event.remove({output: ['minecolonies:blockhutminer']})
	event.remove({output: ['minecolonies:blockhutfarmer']})
	event.remove({output: ['minecolonies:blockhutbaker']})
	event.remove({id: ['minecolonies:blockhutfarmerstone']})
	event.remove({id: ['minecolonies:blockhutdeliverymaniron']})
	event.remove({id: ['minecolonies:blockhutlumberjackstone']})
	event.remove({id: ['minecolonies:blockhutminerstone']})
	event.remove({id: ['minecolonies:blockhutcowboy']})
	event.remove({id: ['minecolonies:blockhutswineherder']})
	event.remove({id: ['minecolonies:blockhutcrusher']})
	event.remove({id: ['engineersdecor:small_lab_furnace_recipe']})
	event.remove({id: ['engineersdecor:factory_dropper_recipe']})
	event.remove({id: ['engineersdecor:factory_placer_recipe']})
	event.remove({id: ['engineersdecor:small_block_breaker_recipe']})
	event.remove({id: ['engineersdecor:factory_hopper']})
	event.remove({id: ['engineersdecor:small_mineral_smelter_recipe']})
	event.remove({id: ['engineersdecor:small_freezer_recipe']})
	event.remove({id: ['engineersdecor:small_solar_panel_recipe']})
	event.remove({id: ['engineersdecor:small_milking_machine_recipe']})
	event.remove({id: ['engineersdecor:small_tree_cutter_recipe']})
	event.remove({mod: 'vs_eureka', input: ['minecraft:gold_ingot']})
	event.remove({mod: 'vs_eureka', input: ['tfc:metal/ingot/gold']})
	event.remove({mod: 'vs_eureka', input: ['minecraft:blast_furnace']})
	event.remove({id: ['vs_eureka:balloon']})
	event.remove({id: ['vs_eureka:engine']})
	event.remove({id: ['vs_eureka:oak_ship_helm']}) 
	event.remove({id: ['vs_eureka:spruce_ship_helm']})
	event.remove({id: ['vs_eureka:birch_ship_helm']}) 
	event.remove({id: ['vs_eureka:acacia_ship_helm']})
})
onEvent('recipes', event => {

	event.remove({mod: 'buildinggadgets', output:  'buildinggadgets:gadget_building'})
	event.remove({mod: 'buildinggadgets', output:  'buildinggadgets:gadget_exchanging'})
	event.remove({mod: 'buildinggadgets', output:  'buildinggadgets:gadget_copy_paste'})
	event.remove({mod: 'buildinggadgets', output:  'buildinggadgets:gadget_destruction'})
	const woods = ['dark_oak', 'jungle', 'warped', 'crimson', 'mangrove']
	woods.forEach(wood => {event.remove({mod: 'create_things_and_misc', output:  'create_things_and_misc:'+wood+'_sail'})	})
	// remove for type
	event.remove({output: [
		'minecraft:ancient_debris',
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
		'minecraft:snow'
		]})
	
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
	event.remove({input: 'minecraft:ancient_debris'})
	event.remove({mod: ['minecraft', 'create', /*'immersiveengineering',*/ 'thermal', 'mekanism', 'agape_space'], tag: 'forge:raw_materials'})
	const concColors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black']
	concColors.forEach(color => {
	event.remove({output: ['minecraft:' + color + '_concrete_powder']})
	event.remove({id: ['tfc:barrel/dye/' + color + '_concrete_powder']})
	event.remove({id: ['minecolonies:concretemixer_custom/' + color + '_concrete_powder']})
	event.remove({id: 'quark:tools/crafting/runes/'+color+'_rune_from_corundum'})
	})
	event.remove({id: 'quark:tools/crafting/runes/rainbow_rune'})
})

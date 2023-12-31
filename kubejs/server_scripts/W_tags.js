// priority: 10

// ======= BLOCKS
onEvent('tags.blocks', event => {
	event.add('forge:immovable', [
		'tfc:charcoal_forge',
		'firmalife:mixing_bowl',
		'firmalife:iron_composter',
		"tfc:drying_bricks/silt",
		"tfc:drying_bricks/silty_loam",
		"tfc:drying_bricks/sandy_loam",
		"tfc:drying_bricks/loam",
		"tfc:ingot_pile",
		"tfc:firepit",
		"tfc:pot",
		"tfc:composter",
		"tfc:grill",
		"tfc:bloomery",
		"tfc:bloom",
		"tfc:molten",
		"tfc:charcoal_forge",
		"#tfc:wild_fruits",
		"#tfc:anvils",
		"#tfc:sluices"
	]) })

// ========== ENTITY TYPE
// ========= ITEMS
onEvent('tags.items', event => {
	event.add('tfc:huge_very_heavy', [
		'create:water_wheel',
		'create:crushing_wheel',
		'create:mechanical_press',
		'create:mechanical_mixer',
		'create:mechanical_drill',
		'create:mechanical_saw',
		'create:mechanical_harvester',
		'create:mechanical_plough',
		'create:mechanical_arm',
		'create:deployer',
		'create:flywheel',
		'immersiveengineering:windmill',
		'immersiveengineering:watermill',
		'immersiveengineering:fluid_pump',
		'immersiveengineering:blastfurnace_preheater',
		'immersiveengineering:sample_drill',
		'immersiveengineering:cloche',
		'immersiveengineering:steel_post',
		'immersiveengineering:alu_post',
		'immersiveengineering:transformer',
		'immersiveengineering:transformer_hv',
		'immersiveengineering:treated_post',
		'immersivepetroleum:speedboat'/*,
		'kubejs:stack_treated_wood',
		'kubejs:big_stack_treated_wood',
		'kubejs:canoe',
		'kubejs:press_head',
		'kubejs:hardened_press_head'*/
	]),
		event.add('tfc:very_large_heavy', [
			'create:cart_assembler',
			'create:basin',
			'create:empty_blaze_burner',
			'create:blaze_burner',
			'create:fluid_tank',
			'create:hose_pulley',
			'create:item_drain',
			'create:spout',
			'create:portable_fluid_interface',
			'create:portable_storage_interface',
			'create:gantry_carriage',
			'create:windmill_bearing',
			'create:mechanical_bearing',
			'create:rotation_speed_controller',
			'create:andesite_funnel',
			'create:brass_funnel',
			'create:brass_tunnel',
			'create:andesite_tunnel',
			'create:display_board',
			'createsifter:sifter',
			//'createindustrialchemistry:kinetic_electrolyzer',
			//'createindustrialchemistry:mechanical_cooler',
			'minecraft:minecart',
			'minecraft:chest_minecart',
			'minecraft:furnace_minecart',
			'minecraft:tnt_minecart',
			'minecraft:hopper_minecart',
			'immersiveengineering:minecart_woodencrate',
			'immersiveengineering:minecart_woodenbarrel',
			'immersiveengineering:minecart_metalbarrel',
			'immersiveengineering:minecart_reinforcedcrate',
			'supplementaries:dispenser_minecart',
			'railways:benchcart',
			'railways:jukeboxcart'
		]),
		//tfc physics-effected blocks
	event.add('tfc:can_landslide', ['agape_space:moon_soil', 'agape_space:dark_soil', 'agape_space:red_soil', 'agape_space:scorched_soil', 'agape_space:sulfuric_soil',
		'agape_space:radiant_soil'])
	event.add('tfc:can_collapse', ['#forge:ores', 'agape_space:moon_soil', 'agape_space:dark_soil', 'agape_space:red_soil', 'agape_space:scorched_soil', 'agape_space:sulfuric_soil',
	'agape_space:radiant_soil']),
	event.add('tfc:can_start_collapse', []),
	event.add('tfc:can_trigger_collapse', []),
		//tfc compostables
	event.add('tfc:compost_greens_low', [])
	event.add('tfc:compost_greens_high', [])
	event.add('tfc:compost_browns_low', ['tfc:straw'])
	event.add('tfc:compost_browns_high', [])
	event.add('forge:eggs', [
		'exoticbirds:mystery_egg'
	]),

	event.add('minecolonies:compostable', [
		'exoticbirds:mystery_egg'
	]),
	event.add('firmalife:foods/heatable', [
		'chemlib:zinc_sulfide_dust',
		'exnihilosequentia:silkworm',
		'minecraft:porkchop',
		'minecraft:mutton',
		'minecraft:chicken',
		'minecraft:beef',
		'tfc:food/potato',
		'exoticbirds:mystery_egg',
		'exoticbirds:raw_birdmeat'
	]),
	event.add('tfc:chicken_food', ['exnihilosequentia:silkworm']),
	event.add('tfc:quai_food', ['exnihilosequentia:silkworm']),
	event.add('tfc:duck_food', ['exnihilosequentia:silkworm']),
	event.add('firmalife:usable_in_stovetop_soup', [
		'exoticbirds:mystery_egg'
	]),
	event.add('tfc:foods', [
		'create:sweet_roll',
		'create:chocolate_glazed_berries',
		'create:honeyed_apple',
		'createaddition:chocolate_cake',
		'createaddition:honey_cake',
		'createaddition:cake_base',
		'createaddition:cake_base_baked',
		'pneumaticcraft:sourdough_bread',
		'pneumaticcraft:chips',
		'pneumaticcraft:cod_n_chips',
		'pneumaticcraft:salmon_tempura',
		'exoticbirds:cooked_birdmeat'
	]),
	event.add('tfc:foods/meats', [
		'minecraft:beef',
		'exoticbirds:raw_birdmeat'
	]),
	event.add('tfc:foods/raw_meats', [
		'minecraft:beef',
		'exoticbirds:raw_birdmeat'
	]),
	event.add('tfc:foods/cooked_meats', [
	]),
	event.add('tfc:foods/usable_in_soup', [
	]),
	event.add('tfc:foods/usable_in_sandwich', [
	]),
	event.add('tfc:foods/usable_in_salad', [
	]),
	event.add('firmalife:foods/pizza_ingredients', [
	]),
	event.add('tfc:foods/can_be_salted', [
		'minecraft:mutton',
		'minecraft:porkchop',
		'minecraft:beef',
		'minecraft:chicken',
		'exoticbirds:raw_birdmeat'
	]),
	event.add('tfc:foods/can_be_hung', [
		'minecraft:mutton',
		'minecraft:porkchop',
		'minecraft:beef',
		'minecraft:chicken',
		'exoticbirds:raw_birdmeat'
	]),
	event.add('tfc:small_ore_pieces', ['chemlib:zinc_sulfide_dust'
	]),
	event.add('forge:pollution_blocks', [
		'tfc:grass/silt',
		'tfc:grass/loam',
		'tfc:grass/sandy_loam',
		'tfc:grass/silty_loam',
		'tfc:dirt/silt',
		'tfc:dirt/loam',
		'tfc:dirt/sandy_loam',
		'tfc:dirt/silty_loam',
		'tfc:clay/silt',
		'tfc:clay/loam',
		'tfc:clay/sandy_loam',
		'tfc:clay/silty_loam',
		'tfc:clay_grass/silt',
		'tfc:clay_grass/loam',
		'tfc:clay_grass/sandy_loam',
		'tfc:clay_grass/silty_loam'
	]),
	event.add('minecraft:leaves', [
		'tfc:plant/cherry_leaves',
		'tfc:plant/green_apple_leaves',
		'tfc:plant/lemon_leaves',
		'tfc:plant/olive_leaves',
		'tfc:plant/orange_leaves',
		'tfc:plant/peach_leaves',
		'tfc:plant/plum_leaves',
		'tfc:plant/red_apple_leaves'
	]),
	event.add('minecraft:dirt', [
		'tfc:grass/silt',
		'tfc:grass/loam',
		'tfc:grass/sandy_loam',
		'tfc:grass/silty_loam',
		'tfc:clay/silt',
		'tfc:clay/loam',
		'tfc:clay/sandy_loam',
		'tfc:clay/silty_loam',
		'tfc:clay_grass/silt',
		'tfc:clay_grass/loam',
		'tfc:clay_grass/sandy_loam',
		'tfc:clay_grass/silty_loam'
	]),
	event.add('tfc:pileable_ingots', [
		'minecraft:iron_ingot',
		'minecraft:netherite_ingot',
		'immersiveengineering:ingot_hop_graphite',
		'pneumaticcraft:ingot_iron_compressed'
	]),
	event.add('forge:seed_tree', [
	]),
	event.add('tfc:usable_on_tool_rack', [
		'firmalife:peel',
		'create:wrench',
		'minecraft:shears',
		'minecraft:lead',
		'minecraft:crossbow',
		'minecraft:trident',
		'minecraft:flint_and_steel',
		'minecraft:spyglass',
		'exnihilosequentia:wooden_crook',
		'exnihilosequentia:iron_crook',
		'exnihilosequentia:iron_hammer',
		'exnihilosequentia:netherite_hammer',
		'exnihilosequentia:stone_hammer',
		'immersiveengineering:hammer',
		'immersiveengineering:wirecutter',
		'immersiveengineering:screwdriver',
		'immersiveengineering:chemthrower',
		'immersiveengineering:railgun',
		'mcwroofs:roofing_hammer'
	]),
	event.add('tfc:plant/green', [
		'tfc:plant/bluegrass',
		'tfc:plant/bromegrass',
		'tfc:plant/fountain_grass',
		'tfc:plant/manatee_grass',
		'tfc:plant/orchard_grass',
		'tfc:plant/ryegrass',
		'tfc:plant/scutch_grass',
		'tfc:plant/timothy_grass',
		'tfc:plant/raddia_grass',
		'tfc:plant/arrowhead',
		'tfc:plant/coontail',
		'tfc:plant/duckweed',
		'tfc:plant/field_horsetail',
		'tfc:plant/gutweed',
		'tfc:plant/king_fern',
		'tfc:plant/lady_fern',
		'tfc:plant/licorice_fern',
		'tfc:plant/moss',
		'tfc:plant/ostrich_fern',
		'tfc:plant/pistia',
		'tfc:plant/sago',
		'tfc:plant/switchgrass',
		'tfc:plant/sword_fern',
		'tfc:plant/tall_fescue_grass',
		'tfc:plant/toquilla_palm',
		'tfc:plant/water_lily',
		'tfc:plant/water_taro',
		'tfc:plant/leafy_kelp'
	]),
	event.add('tfc:plant/red', [
		'tfc:plant/anthurium',
		'tfc:plant/blood_lily',
		'tfc:plant/butterfly_milkweed',
		'tfc:plant/guzmania',
		'tfc:plant/heliconia',
		'tfc:plant/kangaroo_paw',
		'tfc:plant/poppy',
		'tfc:plant/rose',
		'tfc:plant/vriesea',
		'tfc:plant/snapdragon_red',
		'tfc:plant/tropical_milkweed',
		'tfc:plant/tulip_red'
	]),
	event.add('tfc:plant/white', [
		'tfc:plant/houstonia',
		'tfc:plant/meads_milkweed',
		'tfc:plant/oxeye_daisy',
		'tfc:plant/primrose',
		'tfc:plant/sacred_datura',
		'tfc:plant/snapdragon_white',
		'tfc:plant/trillium',
		'tfc:plant/tulip_white',
		'tfc:plant/yucca'
	]),
	event.add('tfc:tea_leaves', [
		'tfc:plant/labrador_tea',
		'tfc:plant/hibiscus'
	]),
	event.add('tfc:gem_powders/slot', [
		'tfc:powder/amethyst',
		'tfc:powder/opal',
		'tfc:powder/ruby',
		'tfc:powder/sapphire',
		'tfc:powder/topaz'
	]),
	event.add('tfc:corals', [
		'tfc:coral/tube_coral_fan',
		'tfc:coral/brain_coral_fan',
		'tfc:coral/bubble_coral_fan',
		'tfc:coral/fire_coral_fan',
		'tfc:coral/horn_coral_fan',
		'tfc:coral/tube_dead_coral_fan',
		'tfc:coral/brain_dead_coral_fan',
		'tfc:coral/bubble_dead_coral_fan',
		'tfc:coral/fire_dead_coral_fan',
		'tfc:coral/horn_dead_coral_fan',
		'tfc:coral/tube_coral',
		'tfc:coral/brain_coral',
		'tfc:coral/bubble_coral',
		'tfc:coral/fire_coral',
		'tfc:coral/horn_coral',
		'tfc:coral/tube_dead_coral',
		'tfc:coral/brain_dead_coral',
		'tfc:coral/bubble_dead_coral',
		'tfc:coral/fire_dead_coral',
		'tfc:coral/horn_dead_coral'
	]),
	event.add('tfc:dead_corals', [
		'tfc:coral/tube_dead_coral_fan',
		'tfc:coral/brain_dead_coral_fan',
		'tfc:coral/bubble_dead_coral_fan',
		'tfc:coral/fire_dead_coral_fan',
		'tfc:coral/horn_dead_coral_fan',
		'tfc:coral/tube_dead_coral',
		'tfc:coral/brain_dead_coral',
		'tfc:coral/bubble_dead_coral',
		'tfc:coral/fire_dead_coral',
		'tfc:coral/horn_dead_coral'
	]),
	event.add('tfc:corals/blue', ['tfc:coral/tube_coral_fan','tfc:coral/tube_coral']),
	event.add('tfc:corals/pink', ['tfc:coral/brain_coral_fan','tfc:coral/brain_coral']),
	event.add('tfc:corals/purple', ['tfc:coral/bubble_coral_fan','tfc:coral/bubble_coral']),
	event.add('tfc:corals/red', ['tfc:coral/fire_coral_fan','tfc:coral/fire_coral']),
	event.add('tfc:corals/yellow', ['tfc:coral/horn_coral_fan','tfc:coral/horn_coral']),
	event.add('tfc:firepit_fuel', ['tfc:stick_bunch', '#forge:rods/wooden']),
	event.add('tfc:forge_fuel',['minecraft:coal_block', 'minecraft:blaze_powder'])
	event.add('tfc:metal_item', ['chemlib:zinc_sulfide_dust'])
	event.add('minecraft:coals', ['minecraft:blaze_powder']),
	event.add('forge:magma_block', ['minecraft:magma_block', 'tfc:rock/magma/granite', 'tfc:rock/magma/diorite', 'tfc:rock/magma/gabbro', 'tfc:rock/magma/rhyolite', 'tfc:rock/magma/basalt', 'tfc:rock/magma/andesite', 'tfc:rock/magma/dacite']),
	event.add('forge:farmlands', ['tfc:farmland/silt', 'tfc:farmland/loam', 'tfc:farmland/sandy_loam', 'tfc:farmland/silty_loam']),
	event.add('forge:axes/stone', ['tfc:stone/axe/igneous_extrusive', 'tfc:stone/axe/igneous_intrusive', 'tfc:stone/axe/metamorphic', 'tfc:stone/axe/sedimentary']),
	event.add('forge:hoes/stone', ['tfc:stone/hoe/igneous_extrusive', 'tfc:stone/hoe/igneous_intrusive', 'tfc:stone/hoe/metamorphic', 'tfc:stone/hoe/sedimentary']),
	event.add('forge:javelins/stone', ['tfc:stone/javelin/igneous_extrusive', 'tfc:stone/javelin/igneous_intrusive', 'tfc:stone/javelin/metamorphic', 'tfc:stone/javelin/sedimentary']),
	event.add('forge:hammers/stone', ['tfc:stone/hammer/igneous_extrusive', 'tfc:stone/hammer/igneous_intrusive', 'tfc:stone/hammer/metamorphic', 'tfc:stone/hammer/sedimentary']),
	event.add('forge:knifes/stone', ['tfc:stone/knife/igneous_extrusive', 'tfc:stone/knife/igneous_intrusive', 'tfc:stone/knife/metamorphic', 'tfc:stone/knife/sedimentary']),
	event.add('forge:shovels/stone', ['tfc:stone/shovel/igneous_extrusive', 'tfc:stone/shovel/igneous_intrusive', 'tfc:stone/shovel/metamorphic', 'tfc:stone/shovel/sedimentary']),
	event.add('tfc:metal/pickaxe_head/first_metal', ['tfc:metal/pickaxe_head/copper', 'tfc:metal/pickaxe_head/bismuth_bronze', 'tfc:metal/pickaxe_head/black_bronze', 'tfc:metal/pickaxe_head/bronze']),
	event.add('forge:tools/knives', '#tfc:knives')
	event.add('tfc:sandwich_bread', 'pneumaticcraft:sourdough_bread')
	event.add('forge:shovels/stone', ['tfc:stone/shovel/igneous_extrusive', 'tfc:stone/shovel/igneous_intrusive', 'tfc:stone/shovel/metamorphic', 'tfc:stone/shovel/sedimentary']),
	event.add('tfc:lamp_fuel', ['tfc:bucket/tallow', 'tfc:bucket/olive_oil', 'immersiveengineering:creosote_bucket']),
	event.add('tfc:stripped_logs', ['tfc:wood/stripped_log/acacia','tfc:wood/stripped_log/ash','tfc:wood/stripped_log/aspen','tfc:wood/stripped_log/birch','tfc:wood/stripped_log/blackwood','tfc:wood/stripped_log/chestnut','tfc:wood/stripped_log/douglas_fir','tfc:wood/stripped_log/hickory','tfc:wood/stripped_log/kapok','tfc:wood/stripped_log/maple','tfc:wood/stripped_log/oak','tfc:wood/stripped_log/palm','tfc:wood/stripped_log/pine','tfc:wood/stripped_log/rosewood','tfc:wood/stripped_log/sequoia','tfc:wood/stripped_log/spruce','tfc:wood/stripped_log/sycamore','tfc:wood/stripped_log/white_cedar','tfc:wood/stripped_log/willow']),
	event.add('tfc:planks', ['tfc:wood/planks/acacia','tfc:wood/planks/ash','tfc:wood/planks/aspen','tfc:wood/planks/birch','tfc:wood/planks/blackwood','tfc:wood/planks/chestnut','tfc:wood/planks/douglas_fir','tfc:wood/planks/hickory','tfc:wood/planks/kapok','tfc:wood/planks/maple','tfc:wood/planks/oak','tfc:wood/planks/palm','tfc:wood/planks/pine','tfc:wood/planks/rosewood','tfc:wood/planks/sequoia','tfc:wood/planks/spruce','tfc:wood/planks/sycamore','tfc:wood/planks/white_cedar','tfc:wood/planks/willow']),
	//event.add('tfc:tree_saplings', ['tfc:wood/sapling/acacia','tfc:wood/sapling/ash','tfc:wood/sapling/aspen','tfc:wood/sapling/birch','tfc:wood/sapling/blackwood','tfc:wood/sapling/chestnut','tfc:wood/sapling/douglas_fir','tfc:wood/sapling/hickory','tfc:wood/sapling/kapok','tfc:wood/sapling/maple','tfc:wood/sapling/oak','tfc:wood/sapling/palm','tfc:wood/sapling/pine','tfc:wood/sapling/rosewood','tfc:wood/sapling/sequoia','tfc:wood/sapling/spruce','tfc:wood/sapling/sycamore','tfc:wood/sapling/white_cedar','tfc:wood/sapling/willow']),
	event.add('forge:arrow_head', ['minecraft:iron_nugget', 'minecraft:flint', '#forge:nuggets/silver','#forge:nuggets/tin','#forge:nuggets/zinc','#forge:nuggets/copper']),
	event.add('tfc:drink_items', ['tfc:ceramic/jug', 'waterflasks:leather_flask', 'waterflasks:iron_flask', 'firmalife:hollow_shell']),
	event.add('forge:sandstone', ['tfc:raw_sandstone/yellow', 'tfc:smooth_sandstone/yellow', 'tfc:cut_sandstone/yellow', 'tfc:raw_sandstone/red', 'tfc:smooth_sandstone/red', 'tfc:cut_sandstone/red']),
	event.add('forge:ingots/iron', ['tfc:metal/ingot/wrought_iron', 'tfc:metal/ingot/cast_iron', 'tfc:metal/ingot/pig_iron']),
	event.add('forge:nuggets/andesite_alloy', ['#forge:nuggets/iron', '#forge:nuggets/zinc', '#forge:nuggets/tin']),
	event.add('forge:dirt', ['#tfc:dirt', '#minecraft:dirt']),
	event.add('forge:wax', ['firmalife:beeswax']),
	event.add('forge:wax/beeswax', ['firmalife:beeswax']),
	event.add('forge:oil_seeds', ['tfc:seeds/melon', 'tfc:seeds/pumpkin', 'tfc:seeds/jute', 'tfc:seeds/squash', 'tfc:seeds/beet', 'tfc:seeds/carrot', 'tfc:seeds/cabbage', 'tfc:seeds/rice', 'tfc:seeds/wheat', 'tfc:seeds/maize', 'tfc:seeds/rye', 'tfc:seeds/oat', 'tfc:seeds/barley', 'immersiveengineering:seed']),
/*	event.add('forge:double_sheets/compressed_iron', ['kubejs:compressed_double_sheet']),
	event.add('forge:double_sheets', ['kubejs:compressed_double_sheet']),
	event.add('forge:sheets/compressed_iron', ['kubejs:compressed_sheet']),
	event.add('forge:sheets', ['kubejs:compressed_sheet']),
	event.add('forge:wires/compressed_iron', ['kubejs:compressed_wire']),
	event.add('forge:wires', ['kubejs:compressed_wire']),
	event.add('forge:double_ingots/compressed_iron', ['kubejs:compressed_double_ingot']),
	event.add('forge:double_ingots', ['kubejs:compressed_double_ingot']),
	event.add('forge:ingots', ['refinedstorage:quartz_enriched_iron']),
	event.add('forge:ingots/allbronze', ['tfc:metal/ingot/bronze', 'tfc:metal/ingot/bismuth_bronze', 'tfc:metal/ingot/black_bronze']),
	event.add('forge:ingots/glass', ['kubejs:primitive_glass_pane']),
	event.add('forge:glass_panes', ['kubejs:primitive_glass_pane']),
	*/
	event.add('forge:ingots/andesite_alloy', ['create:andesite_alloy']),
	event.add('forge:rock_andesite_alloy', ['tfc:rock/loose/andesite']),
	event.add('forge:rods', [
		'immersiveposts:stick_lead',
		'immersiveposts:stick_constantan',
		'immersiveposts:stick_electrum',
		'immersiveposts:stick_uranium',
		'immersiveengineering:stick_aluminum'
	]),
	event.add('forge:rods/iron', ['tfc:metal/rod/wrought_iron']),
//	event.add('forge:rods/compressed_iron', ['kubejs:compressed_rod']),
	event.add('forge:plates', [
		//'kubejs:compressed_sheet',
		'tfc:metal/sheet/rose_gold',
		'tfc:metal/sheet/zinc',
		'tfc:metal/sheet/brass',
		'tfc:metal/sheet/bronze',
		'tfc:metal/sheet/tin'
	]),
//	event.add('forge:plates/compressed_iron', ['kubejs:compressed_sheet']),
	event.add('forge:plates/iron', ['tfc:metal/sheet/wrought_iron']),
	event.add('forge:plates/steel', ['tfc:metal/sheet/steel']),
	event.add('forge:plates/gold', ['tfc:metal/sheet/gold']),
	event.add('forge:plates/rose_gold', ['tfc:metal/sheet/rose_gold']),
	event.add('forge:plates/copper', ['tfc:metal/sheet/copper']),
	event.add('forge:plates/brass', ['tfc:metal/sheet/brass']),
	event.add('forge:plates/bronze', ['tfc:metal/sheet/bronze']),
	event.add('forge:plates/nickel', ['tfc:metal/sheet/nickel']),
	event.add('forge:plates/silver', ['tfc:metal/sheet/silver']),
	event.add('forge:plates/steel', ['tfc:metal/sheet/steel']),
	event.add('forge:plates/tin', ['tfc:metal/sheet/tin']),
	event.add('forge:plates/zinc', ['tfc:metal/sheet/zinc']),
	event.add('forge:plates/cast_iron', ['tfc:metal/sheet/cast_iron']),
	event.add('forge:plates/sterling_silver', ['tfc:metal/sheet/sterling_silver']),
	event.add('forge:plates/blue_steel', ['tfc:metal/sheet/blue_steel']),
	event.add('forge:plates/red_steel', ['tfc:metal/sheet/red_steel']),
	event.add('forge:plates/black_steel', ['tfc:metal/sheet/black_steel']),
	event.add('forge:plates/electrum', ['tfc_ie_addon:metal/sheet/electrum']),
	event.add('forge:plates/constantan', ['tfc_ie_addon:metal/sheet/constantan']),
	event.add('forge:plates/aluminum', ['tfc_ie_addon:metal/sheet/aluminum']),
	event.add('forge:plates/uranium', ['tfc_ie_addon:metal/sheet/uranium']),
	event.add('forge:plates/lead', ['tfc_ie_addon:metal/sheet/lead']),
	event.add('forge:cloth', ['tfc:silk_cloth', 'tfc:burlap_cloth','tfc:wool_cloth']),
	event.add('forge:dusts/charcoal', ['tfc:powder/charcoal']),
	event.add('forge:dusts/sulfur', ['tfc:powder/sulfur']),
	event.add('forge:glue', ['tfc:glue', 'create:super_glue']),
	event.add('forge:bicoals', ['tfc:ore/bituminous_coal', 'minecraft:coal']),
//	event.add('forge:raw_materials', ['kubejs:raw_platinum']),
//	event.add('forge:raw_materials/platinum', ['kubejs:raw_platinum'])
	event.add('forge:tallow_source', ['tfc:blubber', 'minecraft:rotten_flesh'])
	event.add('forge:supports', ['tfc:wood/support/acacia', 'tfc:wood/support/ash', 'tfc:wood/support/aspen', 'tfc:wood/support/birch', 'tfc:wood/support/blackwood', 'tfc:wood/support/chestnut', 'tfc:wood/support/douglas_fir', 'tfc:wood/support/hickory', 'tfc:wood/support/kapok', 'tfc:wood/support/maple', 'tfc:wood/support/oak', 'tfc:wood/support/palm', 'tfc:wood/support/acacia', 'tfc:wood/support/pine', 'tfc:wood/support/rosewood', 'tfc:wood/support/sequoia', 'tfc:wood/support/spruce', 'tfc:wood/support/sycamore', 'tfc:wood/support/white_cedar', 'tfc:wood/support/willow'])
	event.add('forge:tools/knives', '#tfc:knives')
	event.add('forge:axes', '#tfc:axes')
	event.add('forge:berries', ['tfc:food/cranberry', 'tfc:food/bunchberry', 'tfc:food/strawberry', 'tfc:food/raspberry', 'tfc:food/wintergreen_berry', 'tfc:food/blackberry', 'tfc:food/blueberry'])
	event.add('forge:apples', ['tfc:food/green_apple', 'tfc:food/red_apple'])
	event.add('forge:sugar_source', ['tfc:food/beet', 'tfc:food/sugarcane', 'minecraft:sugar_cane'])
	event.add('forge:sugar', 'minecraft:sugar')
	event.add('forge:flour/wheat', '#tfc:foods/flour')
//	event.add('forge:treated_wood', 'firmalife:treated_wood')
	event.add('forge:small_cogwheel', 'create:cogwheel')
	event.add('forge:large_cogwheel', 'create:large_cogwheel')
	event.add('forge:dusts/salt', 'tfc:powder/salt')
	event.add('forge:dusts/saltpeter', 'tfc:powder/saltpeter')
	event.add('forge:honey_jar', ['firmalife:honey_jar', 'minecraft:honey_bottle'])
	event.add('forge:raw_honey', ['firmalife:raw_honey', 'minecraft:honeycomb'])
	event.add('forge:ethanol_source', ['tfc:food/beet', 'tfc:food/potato', 'tfc:food/cranberry', 'tfc:food/blackberry', 'tfc:food/blueberry', 'tfc:food/bunchberry', 'tfc:food/raspberry', 'tfc:food/green_apple', 'tfc:food/red_apple', 'tfc:food/sugarcane'])
	event.add('forge:barrels', '#tfcbarrels:barrels')
	event.add('forge:barrels/wooden', '#tfcbarrels:barrels')
	event.add('tfc:small_fishing_bait', ['exnihilosequentia:silkworm'])
	event.add('forge:head_hardened_steel', ['tfc:metal/double_ingot/blue_steel','tfc:metal/double_ingot/red_steel'])
	const tfcStoneTypes = [
		"granite",
		"diorite",
		"gabbro",
		"shale",
		"claystone",
		"limestone",
		"conglomerate",
		"dolomite",
		"chert",
		"chalk",
		"rhyolite",
		"basalt",
		"andesite",
		"dacite",
		"quartzite",
		"slate",
		"phyllite",
		"schist",
		"gneiss",
		"marble"
	]
	tfcStoneTypes.forEach(i => {
		event.add('create:sleepers', ['tfc:rock/raw/' + i + '_slab']);
		event.add('create:sleepers', ['tfc:rock/smooth/' + i + '_slab']);
	})

	// ==========  REMOVE
	event.remove('forge:dusts/coal_coke', ['tfc:powder/graphite'])
	event.remove('forge:ingots/andesite_alloy', 'create:andesite_alloy')
/*	event.removeAllTagsFrom(
		'pneumaticcraft:oil',
		'pneumaticcraft:diesel',
		'pneumaticcraft:kerosene',
		'pneumaticcraft:gasoline',
		'pneumaticcraft:lubricant',
		'pneumaticcraft:ethanol',
		'immersiveengineering:dust_sulfur',
		//'createindustrialchemistry:diamond_dusts',
		//'createindustrialchemistry:coal_dusts',
		//'createindustrialchemistry:nickel',
		//'createindustrialchemistry:zinc_dusts',
		//'createindustrialchemistry:copper_dusts',
		//'createindustrialchemistry:iron_dusts',
		//'createindustrialchemistry:aluminium',
		'create:brass_ingot',
		'create:brass_sheet',
		'create:copper_sheet',
		'create:iron_sheet',
		'create:golden_sheet',
		'create:zinc_ingot',
		'create:wheat_flour',
		'createaddition:electrum_ingot',
		'createaddition:electrum_nugget',
		'createaddition:electrum_sheet',
		'createaddition:electrum_wire',
		'createaddition:electrum_rod',
		'createaddition:brass_rod',
		'createaddition:copper_rod',
		'createaddition:iron_rod',
		'createaddition:gold_rod',
		'createaddition:zinc_sheet',
		'exnihilosequentia:copper_nugget',
		'exnihilosequentia:zinc_ingot',
		'exnihilosequentia:lead_ingot',
		'exnihilosequentia:silver_ingot',
		'exnihilosequentia:nickel_ingot',
		'exnihilosequentia:tin_ingot',
		'exnihilosequentia:platinum_ingot',
		'exnihilosequentia:aluminum_ingot',
		'exnihilosequentia:uranium_ingot',
		'exnihilosequentia:raw_lead',
		'exnihilosequentia:raw_silver',
		'exnihilosequentia:raw_nickel',
		'exnihilosequentia:raw_tin',
		'exnihilosequentia:raw_platinum',
		'exnihilosequentia:raw_aluminum',
		'exnihilosequentia:raw_uranium',
		'exnihilosequentia:raw_zinc',
		'immersiveengineering:plate_aluminum',
		'immersiveengineering:plate_lead',
		'immersiveengineering:plate_uranium',
		'immersiveengineering:plate_constantan',
		'immersiveengineering:plate_electrum',
		'immersiveengineering:plate_iron',
		'immersiveengineering:plate_gold',
		'immersiveengineering:plate_silver',
		'immersiveengineering:ingot_nickel',
		'immersiveengineering:ingot_silver',
		'immersiveengineering:ingot_steel',
		'immersiveengineering:dust_steel',
		'immersiveengineering:dust_gold',
		'immersiveengineering:dust_iron',
		'immersiveengineering:dust_lead',
		'immersiveengineering:dust_uranium',
		'immersiveengineering:plate_steel',
		'immersiveengineering:plate_nickel',
		'immersiveengineering:stick_steel',
		'immersiveengineering:stick_iron',
		'immersiveengineering:stick_stick',
		'immersiveengineering:nugget_copper',
		'immersiveengineering:dust_copper',
		'immersiveengineering:dust_saltpeter',
		'immersiveengineering:wire_copper',
		'immersiveengineering:plate_copper',
		'immersiveposts:stick_copper',
		'immersiveposts:stick_gold',
		'immersiveposts:stick_silver',
		'immersiveposts:stick_nickel',
		'minecraft:copper_ingot',
		'minecraft:chest',
//		'minecraft:glass',
//		'minecraft:glass_pane',
		'minecraft:gold_ingot',
		'pneumaticcraft:wheat_flour',
		'tinycoal:tinycoal',
		'tinycoal:tinycharcoal'
	)*/
})
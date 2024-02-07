// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

//Add crafter recipes
onEvent('server.datapack.last', event => {
	console.log('datapack last event triggered')
	event.addJson('tfc:crafterrecipes/farmer/daub.json',
	{
		"type": "recipe",
		"crafter": "farmer_custom",
		"inputs": [
		  {"item": "tfc:straw"},
		  {"tag": "minecraft:dirt"},
		  {"item": "minecraft:clay_ball",}
		],
		"result": "tfc:wattle/unstained",
		"count": 2,
		"intermediate": "minecraft:air"
	  })
	})
onEvent('item.tags', event => {
	event.add('forge:sapling', ['tfc:wood/sapling/acacia', 'tfc:wood/sapling/ash',		'tfc:wood/sapling/aspen',		'tfc:wood/sapling/birch',
		'tfc:wood/sapling/blackwood',
		'tfc:wood/sapling/chestnut',
		'tfc:wood/sapling/douglas_fir',
		'tfc:wood/sapling/hickory',
		'tfc:wood/sapling/kapok',
		'tfc:wood/sapling/maple',
		'tfc:wood/sapling/oak',
		'tfc:wood/sapling/palm',
		'tfc:wood/sapling/pine',
		'tfc:wood/sapling/rosewood',
		'tfc:wood/sapling/sequoia',
		'tfc:wood/sapling/spruce',
		'tfc:wood/sapling/sycamore',
		'tfc:wood/sapling/white_cedar',
		'tfc:wood/sapling/willow'
	])
//tags adding, making tfc dirt usable by minecolonies farmers, thatch beds usable in schematics as citizen beds,
	event.add('forge:dirt', [
		'tfc:dirt/loam',
		'tfc:dirt/silt',
		'tfc:dirt/silty_loam',
		'tfc:dirt/sandy_loam'
	])
//makes thatch beds usable by villagers if they're in a schematic
	event.add('minecraft:beds', 'tfc:thatch_bed')
//makes seeds usable by minecolonies farms
	event.add('forge:seeds', [
		'tfc:seeds/barley', 'tfc:seeds/maize', 'tfc:seeds/oat', 'tfc:seeds/rice', 'tfc:seeds/rye',
		'tfc:seeds/wheat', 'tfc:seeds/beet', 'tfc:seeds/cabbage', 'tfc:seeds/carrot', 'tfc:seeds/garlic',
		'tfc:seeds/onion', 'tfc:seeds/potato', 'tfc:seeds/pumpkin', 'tfc:seeds/green_bean', 'tfc:seeds/soybean',
		'tfc:seeds/sugarcane', 'tfc:seeds/tomato', 'tfc:seeds/squash', 'tfc:seeds/jute', 'tfc:seeds/papyrus',
		'tfc:seeds/melon'
	])
})
onEvent('recipes', e => {
	// 2x slabs -> 1x plank through shaped crafting
	e.forEachRecipe({ type: 'minecraft:crafting_shaped', output: '#minecraft:slabs' }, r => {
	  e.shaped(r.inputItems[0], ['S', 'S'], { S: Item.of(r.outputItems[0].id) })
	})
  
	// 1x stair -> 1x plank through stonecutting
	e.forEachRecipe({ type: 'minecraft:crafting_shaped', output: '#minecraft:stairs' }, r => {
		e.recipes.tfc.extra_products_shaped_crafting(r.inputItems[0],(e.recipes.tfc.extra_products_shaped_crafting(r.inputItems[0],e.shaped(r.inputItems[0], ['SS', 'SS'], { S: Item.of(r.outputItems[0].id) })
	)))
	})  })
onEvent('recipes', event => {
	const replacements = [
		{ mod: 'minecolonies', input: 'minecraft:iron_ingot', replace: '#forge:ingots' },
		{ input: 'minecraft:egg', replace: '#forge:eggs' },
		{ input: 'minecraft:iron_sword', replace: '#forge:swords' },
		{ input: 'minecraft:dirt', replace: '#minecraft:dirt' },
		{ mod: 'minecolonies', input: 'minecraft:string', replace: '#forge:string' },
		{ mod: 'minecolonies', input: 'minecraft:beef', replace: 'tfc:food/beef' },
		{ mod: 'minecolonies', input: 'minecraft:cobblestone', replace: '#forge:cobblestone' },
		{ mod: 'structurize', input: 'minecraft:cobblestone', replace: '#forge:cobblestone' },
		{ mod: 'domum_ornamentum', input: 'minecraft:stone_slab', replace: '#minecraft:slabs' },
		{ mod: 'domum_ornamentum', input: 'minecraft:iron_ingot', replace: '#forge:ingots' },
		{ mod: 'minecolonies', input: 'minecraft:poppy', replace: '#minecraft:flowers' },
		{ mod: 'minecolonies', input: 'minecraft:carrot', replace: '#tfc:foods/vegetables' },
		{ mod: 'minecolonies', input: 'minecraft:apple', replace: '#tfc:foods/fruits' },
		{ mod: 'minecolonies', input: 'minecraft:diamond', replace: '#forge:gems' },
		{ mod: 'minecolonies', input: 'minecraft:porkchop', replace: 'tfc:food/pork' },
		{ mod: 'minecolonies', input: 'minecraft:rabbit', replace: 'tfc:food/rabbit' },
		{ mod: 'minecolonies', input: 'minecraft:iron_nugget', replace: '#forge:nuggets' },
		{ mod: 'minecolonies', input: 'minecraft:cactus', replace: 'tfc:seeds/jute' },
		{ mod: 'minecolonies', input: 'minecraft:stone', replace: '#forge:stone' },
		{ mod: 'minecolonies', input: 'minecraft:torch', replace: 'tfc:torch' },
		{ mod: 'minecolonies', input: 'minecraft:barrel', replace: '#tfc:barrels' },
		{ mod: 'minecolonies', input: 'minecraft:stone_bricks', replace: '#forge:stone_bricks' }
	]
})
//items removed, all to be added back later except for the enchanter - all done because force-changing recipes with items in them are tricky, 
//easier to remove and re add with new recipe
onEvent('recipes', event => {
	event.remove({ id: 'minecolonies:blockhutfisherman', mod: 'minecolonies'}),
	event.remove({ id: 'minecolonies:blockhutbeekeeper', mod: 'minecolonies'})
	event.remove({ id: 'minecolonies:blockhutblacksmith', mod: 'minecolonies'}),
	event.remove({ id: 'minecolonies:blockhutbarracks', mod: 'minecolonies'}),
	event.remove({ id: 'minecolonies:blockhutcombatacademy', mod: 'minecolonies'}),
	event.remove({ id: 'minecolonies:blockhutlumberjack', mod: 'minecolonies'}),
	event.remove({ id: 'minecolonies:blockhutminer', mod: 'minecolonies'}),
	event.remove({ id: 'minecolonies:blockhutfarmer', mod: 'minecolonies'}),
	event.remove({ id: 'minecolonies:blockhutminer', mod: 'minecolonies'}),
	event.remove({ id: 'minecolonies:blockhutfarmer', mod: 'minecolonies'}),
	event.remove({ id: 'minecolonies:blockhuttavern', mod: 'minecolonies'}),
	event.remove({ id: 'minecolonies:blockhutsmeltery', mod: 'minecolonies'}),
	event.remove({ id: 'minecolonies:simplequarry', mod: 'minecolonies'}),
	event.remove({ id: 'minecolonies:mediumquarry', mod: 'minecolonies'}),
	event.remove({ id: 'minecolonies:blockhutsawmill', mod: 'minecolonies'}),
	event.remove({ id: 'minecolonies:blockhutshepherd', mod: 'minecolonies'}),
	event.remove({ id: 'minecolonies:blockhutenchanter', mod: 'minecolonies'}),
	event.remove({ id: 'minecolonies:barrel_block', mod: 'minecolonies'}),
	event.remove({ id: 'minecraft:brewing_stand'}),
	event.remove({ id: 'minecraft:iron_bars'}),
	event.remove({ id: 'minecraft:blast_furnace'}),
	event.remove({ id: 'create:super_glue'}),
	event.remove({ mod: 'create', id: 'create:copper_backtank'})
}
)

onEvent('recipes', event => {
	const gem = ['amethyst', 'diamond', 'emerald', 'lapis_lazuli', 'opal', 'pyrite', 'ruby', 'sapphire', 'topaz']
	gem.forEach(g => {
		event.recipes.tfc.damage_inputs_shapeless_crafting(event.shapeless('tfc:gem/'+g, [
			'tfc:ore/'+g,
			'#tfc:hammers',
			'#tfc:chisels']
			))}),
	event.recipes.tfc.alloy('tfc_metallum:andesite_alloy', [
		['tfc_ie_addon:lead', 0.6, 0.7],
		['tfc:zinc', 0.15, 0.25],
		['tfc:nickel', 0.15, 0.25]
	]),
	event.recipes.tfc.damage_inputs_shapeless_crafting(event.shapeless('kubejs:limesand', [
		'tfc:rock/gravel/limestone',
		'#tfc:hammers']
	)),
	event.recipes.tfc.damage_inputs_shapeless_crafting(event.shapeless('2x tfc:powder/flux', [
		'tfc:calcite',
		'#tfc:hammers']
	)),      
	event.recipes.tfc.damage_inputs_shapeless_crafting(event.shapeless('4x create:andesite_alloy', [
		'tfc_metallum:metal/ingot/andesite_alloy',
		'#tfc:hammers',
		'#tfc:chisels']
	)),
	event.recipes.tfc.damage_inputs_shapeless_crafting(event.shapeless('4x minecraft:netherite_scrap', [
		'kubejs:metal/ingot/netherite',
		'#tfc:hammers',
		'#tfc:chisels']
	)),
	event.recipes.tfc.damage_inputs_shaped_crafting('minecraft:dried_kelp_block', [
		'SHS',
		'SSS',
		'SSS'
	], {
		S: 'tfc:food/dried_kelp',
		H: '#tfc:hammers'
	})
	event.recipes.tfc.damage_inputs_shaped_crafting('create:belt_connector', [
		' H ',
		'SSS',
		'SSS'
	  ], {
		S: 'tfc:food/dried_kelp',
		H: '#tfc:hammers'
	  })
	event.shaped(
		Item.of('create:super_glue',1),
		[  'GP',
		   'NG'],
			{ 
				P: 'tfc:metal/sheet/tin',
				N: 'chemlib:tin_nugget',
				G: 'tfc:glue'
			}
		),
	event.shaped(
		Item.of('create_things_and_misc:glue_packaging',1),
		[' P',
		 'N '],
		{ 
				P: 'tfc:metal/sheet/tin',
				N: 'chemlib:tin_nugget'
				}
			),
////////					  
    event.shaped(
		Item.of('createchunkloading:chunk_loader',1),
	[  	'RGR',
	   	'GHG',
		'RGR'],
		{ 
	  		R: 'tfc:metal/rod/red_steel',
	  		H: '#forge:heads',
	  		G: '#forge:glass_panes'
		}
	),	
	event.shaped(
		Item.of('createchunkloading:chunk_loader',1),
	[  	'RGR',
	   	'GCG',
		'RGR'],
		{ 
	  		R: 'tfc:metal/rod/red_steel',
	  		C: 'computercraft:computer_advanced',
	  		G: '#forge:glass_panes'
		}
	),	
	event.shaped(
		Item.of('minecraft:fishing_rod',1),
		[  '  W',
	       ' WS',
		   'W S'],
		{ 
		  W: '#forge:rods/wooden',
	      S: '#forge:string'
		}
	),
	event.shaped(
		Item.of('minecolonies:blockhutsmeltery',1),
		[  'XLX',
	       'DDD',
		   'XXX'],
		{ 
		  X: '#minecraft:planks',
	      L: 'structurize:sceptergold',
		  D: '#tfc:vessels'
		}
	),	
	event.shaped(
		Item.of('minecolonies:blockhuttavern',1),
		[  'XLX',
	       'DDD',
		   'XXX'],
		{ 
		  X: '#minecraft:planks',
	      L: 'structurize:sceptergold',
		  D: '#tfc:barrels'
		}
	),	
	event.shaped(
		Item.of('minecolonies:blockhutcrusher',1),
		[  'XLX',
	       'DDD',
		   'XXX'],
		{ 
		  X: '#minecraft:planks',
	      L: 'structurize:sceptergold',
		  D: '#forge:ingots'
		}
	),	
	event.shaped(
		Item.of('minecolonies:blockhutsawmill',1),
		[  'XLX',
	       'XDX',
		   'XXX'],
		{ 
		  X: '#minecraft:planks',
	      L: 'structurize:sceptergold',
		  D: '#forge:saws'
		}
	),	
	event.shaped(
		Item.of('minecolonies:blockhutswineherder',1),
		[  'XLX',
	       'XDX',
		   'XXX'],
		{ 
		  X: '#minecraft:planks',
	      L: 'structurize:sceptergold',
		  D: '#tfc:mud'
		}
	),	
	event.shaped(
		Item.of('minecolonies:blockhutcowboy',1),
		[  'XLX',
	       'XDX',
		   'XXX'],
		{ 
		  X: '#minecraft:planks',
	      L: 'structurize:sceptergold',
		  D: 'minecraft:hay_block'
		}
	),	
	event.shaped(
		Item.of('minecolonies:blockhutblacksmith',1),
		[  'XLX',
	       'XDX',
		   'XXX'],
		{ 
		  X: '#minecraft:planks',
	      L: 'structurize:sceptergold',
		  D: '#forge:hammers'
		}
	),	
	event.shaped(
		Item.of('minecolonies:blockhutfisherman',1),
		[  'XLX',
	       'XDX',
		   'XXX'],
		{ 
		  X: '#minecraft:planks',
	      L: 'structurize:sceptergold',
		  D: '#forge:fishing_rods'
		}
	),	
	event.shaped(
		Item.of('minecolonies:blockhutbarracks',1),
		[  'XLX',
	       'XDX',
		   'XXX'],
		{ 
		  X: '#minecraft:planks',
	      L: 'structurize:sceptergold',
		  D: 'minecraft:armor_stand'
		}
	),
	event.shaped(
		Item.of('minecolonies:blockhutcombatacademy',1),
		[  'XLX',
	       'DDD',
		   'XXX'],
		{ 
		  X: '#minecraft:planks',
	      L: 'structurize:sceptergold',
		  D: '#forge:swords'
		}
	)
})
onEvent('recipes', event => {
	event.shaped(
		Item.of('minecolonies:blockhutlumberjack',2),
		[  'XLX',
	       'XDX',
		   'XXX'],
		{ 
		  X: '#minecraft:planks',
	      L: 'structurize:sceptergold',
		  D: '#forge:axes'
		}
	),
	event.shaped(
		Item.of('minecolonies:blockhutminer',2),
		[  'XLX',
	       'XDX',
		   'XXX'],
		{ 
		  X: '#minecraft:planks',
	      L: 'structurize:sceptergold',
		  D: '#forge:pickaxes'
		}
	),	
	event.shaped(
		Item.of('minecolonies:simplequarry',2),
		[  'XLX',
	       'XDX',
		   'XBX'],
		{ 
		  X: '#minecraft:planks',
	      L: 'structurize:sceptergold',
		  D: '#forge:pickaxes',
		  B: '#tfc:barrels'
		}
	),
	event.shaped(
		Item.of('minecolonies:mediumquarry',1),
		[  'XLX',
	       'XDX',
		   'BXB'],
		{ 
		  X: '#minecraft:planks',
	      L: 'structurize:sceptergold',
		  D: '#forge:pickaxes',
		  B: '#tfc:barrels'
		}
	),
	event.shaped(
		Item.of('minecolonies:blockhutfarmer',2),
		[  'XLX',
	       'XDX',
		   'XXX'],
		{ 
		  X: '#minecraft:planks',
	      L: 'structurize:sceptergold',
		  D: '#forge:hoes'
		}
	),  
	event.shaped(
		Item.of('minecolonies:blockhutshepherd',1),
		[  'XLX',
	       'XDX',
		   'XXX'],
		{ 
		  X: '#minecraft:planks',
	      L: 'structurize:sceptergold',
		  D: '#forge:shears'
		}
	),
	event.shaped(
		Item.of('minecolonies:blockhutfarmer',2),
		[  'XLX',
	       'XDX',
		   'XXX'],
		{ 
		  X: '#minecraft:planks',
	      L: 'structurize:sceptergold',
		  D: '#forge:hoes'
		}
	),
	event.shaped(
		Item.of('minecolonies:blockhutbaker'),
		[  'XLX',
	       'XDX',
		   'XXX'],
		{ 
		  X: '#minecraft:planks',
	      L: 'structurize:sceptergold',
		  D: '#tfc:foods/grains'
		}
	),
	event.shaped(
		Item.of('minecolonies:blockhutbeekeeper'),
		[  'XLX',
	       'XDX',
		   'XXX'],
		{ 
		  X: '#minecraft:planks',
	      L: 'structurize:sceptergold',
		  D: 'firmalife:beehive'
		}
	),
	event.shaped(
		Item.of('minecraft:book',1),
		[  'XX ',
	       'XS ',
		   '   '],
		{ 
		  X: 'minecraft:paper',
		  S: '#forge:leather'
		}
	), 
	event.shaped(
		Item.of('minecraft:blast_furnace',1),
		[  'XXX',
	       'XDX',
		   'SSS'],
		{ 
		  X: '#tfc:rock/bricks',
	      D: 'minecraft:furnace',
		  S: '#tfc:rock/smooth'
		}
	), 
	event.shaped(
		Item.of('minecolonies:barrel_block',1),
		[  'X X',
	       'XDX',
		   'XSX'],
		{ 
		  X: '#minecraft:planks',
	      D: 'structurize:sceptergold',
		  S: '#minecraft:slabs'
		}
	),  
	event.shaped(
		Item.of('minecraft:brewing_stand',1),
		[  '   ',
	       ' R ',
		   ' P '],
		{ 
		  R: 'tfc:metal/rod/wrought_iron',
	      P: 'tfc:metal/sheet/wrought_iron',
		}
	),
	event.shaped(
		Item.of('structurize:sceptergold',1),
		[  '  D',
	       ' X ',
		   'X  '],
		{ 
			X: '#forge:rods/wooden',
			D: '#forge:cobblestone'
		}
	),
	event.shaped(
		Item.of('minecraft:campfire',1),
		[  ' S ',
	       'SGS',
		   'LLL'],
		{ 
			L: '#minecraft:logs',
			S: '#forge:rods/wooden',
			G: 'minecraft:charcoal'
		}
	),
	event.shaped(
		Item.of('tfc:firepit',1),
		[  'GSG',
	       'SGS',
		   'LLL'],
		{ 
			L: '#minecraft:logs',
			S: '#forge:rods/wooden',
			G: 'tfc:straw'
		}
	),
	event.shaped(
		Item.of('tfc:pot',1),
		[  '   ',
	       ' P ',
		   ' F '],
		{ 
			F: 'tfc:firepit',
			P: 'tfc:ceramic/pot',
		}
	),
	event.shaped(
		Item.of('computercraft:computer_advanced',1),
		[  'SSS',
	       'SCS',
		   'SPS'],
		{ 
			S: 'immersiveengineering:plate_electrum',
			C: 'computercraft:computer_normal',
			P: 'ae2:advanced_card',
		}
	)
	event.shaped(
		Item.of('create:copper_backtank',1),
		[  'APA',
	       'S S',
		   ' S '],
		{ 
			S: 'tfc:metal/sheet/copper',
			A: 'create:andesite_alloy',
			P: 'tfc_metalwork:metal/plate/copper',
		}
	)
	event.shaped(
		Item.of('computercraft:computer_normal',1),
		[  'SSS',
	       'SCS',
		   'SPS'],
		{ 
			S: 'tfc_metalwork:metal/plate/wrought_iron',
			C: 'pneumaticcraft:printed_circuit_board',
			P: 'minecraft:glass_pane',
		}
	)
	event.shaped(
		Item.of('computercraft:pocket_computer_normal',1),
		[  'SSS',
	       'SCS',
		   'SPS'],
		{ 
			S: 'pneumaticcraft:plastic',
			C: 'pneumaticcraft:printed_circuit_board',
			P: 'minecraft:glass_pane',
		}
	)
	event.shaped(
		Item.of('computercraft:pocket_computer_advanced',1),
		[  'SSS',
	       'SCS',
		   'SPS'],
		{ 
			S: 'immersiveengineering:plate_electrum',
			C: 'computercraft:pocket_computer_normal',
			P: 'ae2:advanced_card',
		}
	)
	event.shaped(
		Item.of('computercraft:turtle_normal',1),
		[  'RPR',
	       'SCD',
		   'RJR'],
		{ 
			S: '#forge:chests',
			C: 'computercraft:computer_normal',
			D: 'create:deployer',
			J: 'mekanism:jetpack',
			R: 'tfc_metallum:metal/rod/titanium',
			P: 'tfc_metalwork:metal/plate/titanium'
		}
	)
	event.shaped(
		Item.of('computercraft:turtle_advanced',1),
		[  'RPR',
	       'PTP',
		   'RCR'],
		{ 
			T: 'computercraft:turtle_normal',
			C: 'computercraft:computer_advanced',
			R: 'kubejs:metal/rod/netherite',
			P: 'kubejs:metal/sheet/netherite'
		}
	)
	event.shaped(
		Item.of('computercraft:turtle_advanced',1),
		[  'RPR',
	       'SCD',
		   'RJR'],
		{ 
			S: '#forge:chests',
			C: 'computercraft:computer_advanced',
			D: 'create:deployer',
			J: 'mekanism:jetpack',
			R: 'kubejs:metal/rod/netherite',
			P: 'kubejs:metal/sheet/netherite'
		}
	)
	event.shaped(
		Item.of('computercraft:speaker',1),
		[  'SSS',
	       'SNS',
		   'SRS'],
		{ 
			S: 'tfc_metalwork:metal/plate/wrought_iron',
			N: 'minecraft:note_block',
			R: 'minecraft:redstone'
		}
	)
	event.shaped(
		Item.of('computercraft:disk_drive',1),
		[  'SSS',
	       'SNS',
		   'SRS'],
		{ 
			S: 'tfc_metalwork:metal/plate/wrought_iron',
			N: 'mekanism:basic_control_circuit',
			R: 'minecraft:redstone'
		}
	)
	event.shaped(
		Item.of('computercraft:printer',1),
		[  'SSS',
	       'CTM',
		   'YNB'],
		{ 
			S: 'tfc_metalwork:metal/plate/wrought_iron',
			C: 'minecraft:cyan_dye',
			T: 'create:fluid_tank',
			M: 'minecraft:magenta_dye',
			Y: 'minecraft:yellow_dye',
			N: 'mekanism:basic_control_circuit',
			B: 'minecraft:black_dye'
		}
	)
	event.shaped(
		Item.of('computercraft:monitor_normal',1),
		[  'RSR',
	       'SPS',
		   'RDR'],
		{ 
			S: 'tfc_metalwork:metal/plate/wrought_iron',
			R: 'tfc:metal/rod/wrought_iron',
			D: 'minecraft:redstone',
			P: 'minecraft:glass_pane'
		}
	)
	event.shaped(
		Item.of('computercraft:monitor_advanced',1),
		[  'RSR',
	       'SPS',
		   'RSR'],
		{ 
			S: 'immersiveengineering:plate_electrum',
			R: 'tfc_metallum:metal/rod/electrum',
			P: 'minecraft:glass_pane'
		}
	)
	event.shaped(
		Item.of('computercraft:wireless_modem_normal',1),
		[  ' R ',
	       'SCS',
		   ' S '],
		{ 
			S: 'tfc_metalwork:metal/plate/wrought_iron',
			R: 'tfc:metal/rod/copper',
			C: 'ae2:basic_card',
		}
	)
	event.shaped(
		Item.of('computercraft:wireless_modem_advanced',1),
		[  ' R ',
	       'SPS',
		   ' S '],
		{ 
			S: 'immersiveengineering:plate_electrum',
			R: 'ae2:wireless_receiver',
			P: 'ae2:advanced_card',
		}
	)
	event.shaped(
		Item.of('computercraft:wired_modem',1),
		[  ' S ',
	       'SRS',
		   ' S '],
		{ 
			S: 'immersiveengineering:plate_electrum',
			R: 'tfc:metal/rod/copper'
		}
	)
	event.shaped(
		Item.of('create:gantry_carriage',1),
		[  ' S ',
	       'RCR',
		   ' G '],
		{ 
			S: '#minecraft:wooden_slabs',
			C: 'create:andesite_casing',
			G: 'create:cogwheel',
			R: 'tfc:metal/rod/wrought_iron',
		}
	)
	//alchemistry tweaks
	event.shaped(
		Item.of('alchemistry:atomizer',1),
		[  'RSR',
	       'TCS',
		   'RSR'],
		{ 
			S: 'kubejs:metal/sheet/netherite',
			C: 'ae2:annihilation_core',
			T: 'create:fluid_tank',
			R: 'kubejs:metal/rod/netherite',
		}
	)
	event.shaped(
		Item.of('alchemistry:compactor',1),
		[  'RSR',
	       'TCS',
		   'RSR'],
		{ 
			S: 'kubejs:metal/sheet/netherite',
			C: 'ae2:formation_core',
			T: 'create:fluid_tank',
			R: 'kubejs:metal/rod/netherite'
		}
	)
	event.shaped(
		Item.of('alchemistry:combiner',1),
		[  'RSR',
	       'CTC',
		   'RSR'],
		{ 
			S: 'kubejs:metal/sheet/netherite',
			C: 'ae2:formation_core',
			T: 'create:fluid_tank',
			R: 'kubejs:metal/rod/netherite'
		}
	)
	event.shaped(
		Item.of('alchemistry:dissolver',1),
		[  'RSR',
	       'CTC',
		   'RSR'],
		{ 
			S: 'kubejs:metal/sheet/netherite',
			C: 'ae2:annihilation_core',
			T: 'create:fluid_tank',
			R: 'kubejs:metal/rod/netherite'
		}
	)
	event.shaped(
		Item.of('alchemistry:liquifier',1),
		[  'RSR',
	       'TCT',
		   'RSR'],
		{ 
			S: 'kubejs:metal/sheet/netherite',
			C: 'ae2:formation_core',
			T: 'create:fluid_tank',
			R: 'kubejs:metal/rod/netherite'
		}
	)
	event.shaped(
		Item.of('alchemistry:fission_chamber_controller',1),
		[  'RSR',
	       'GCP',
		   'RSR'],
		{ 
			G: 'alchemistry:reactor_glass',
			C: 'ae2:annihilation_core',
			P: 'agape_space:shard_power',
			R: 'kubejs:metal/rod/netherite',
			S: 'alchemistry:reactor_casing'
		}
	)
	event.shaped(
		Item.of('alchemistry:fusion_chamber_controller',1),
		[  'RSR',
	       'GCP',
		   'RSR'],
		{ 
			G: 'alchemistry:reactor_glass',
			C: 'ae2:formation_core',
			P: 'agape_space:shard_power',
			R: 'kubejs:metal/rod/netherite',
			S: 'alchemistry:reactor_casing'
		}
	)
	event.shaped(
		Item.of('alchemistry:reactor_energy',1),
		[  'RSR',
	       'SPS',
		   'RSR'],
		{ 
			P: 'immersiveengineering:connector_hv',
			R: 'kubejs:metal/rod/netherite',
			S: 'alchemistry:reactor_casing'
		}
	)
	event.shaped(
		Item.of('buildinggadgets:gadget_building',1),
		[  'RWR',
	       'CPC',
		   'RSR'],
		{ 
			W: 'ae2:wireless_receiver',
			R: 'tfc_metallum:metal/rod/aluminum',
			P: 'ae2:logic_processor',
			C: 'ae2:formation_core',
			S: 'tfc_metallum:metal/sheet/aluminum'
		}
	)
	event.shaped(
		Item.of('buildinggadgets:gadget_exchanging',1),
		[  'RWR',
	       'DPC',
		   'RSR'],
		{ 
			W: 'ae2:wireless_receiver',
			R: 'tfc_metallum:metal/rod/aluminum',
			P: 'ae2:logic_processor',
			C: 'ae2:formation_core',
			D: 'ae2:annihilation_core',
			S: 'tfc_metallum:metal/sheet/aluminum'
		}
	)
	event.shaped(
		Item.of('buildinggadgets:gadget_destruction',1),
		[  'RWR',
	       'DPD',
		   'RSR'],
		{ 
			W: 'ae2:wireless_receiver',
			R: 'tfc_metallum:metal/rod/aluminum',
			P: 'ae2:logic_processor',
			D: 'ae2:annihilation_core',
			S: 'tfc_metallum:metal/sheet/aluminum'
		}
	)
	event.shaped(
		Item.of('buildinggadgets:gadget_copy_paste',1),
		[  'RWR',
	       'CPC',
		   'RMR'],
		{ 
			W: 'ae2:wireless_receiver',
			R: 'tfc_metallum:metal/rod/aluminum',
			P: 'ae2:logic_processor',
			C: 'ae2:formation_core',
			M: 'ae2:memory_card'
		}
	)
	event.shaped(
		Item.of('compactmachines:wall',1),
		[  'NNN',
	       'NEN',
		   'NNN'],
		{ 
			N: 'minecraft:netherite_block',
			E: 'minecraft:ender_eye'
		}
	)
	event.shaped(
		Item.of('compactmachines:machine_tiny',1),
		[  'NNN',
	       'NEN',
		   'NNN'],
		{ 
			N: 'compactmachines:wall',
			E: 'minecraft:nether_star'
		}
	)
	event.shaped(
		Item.of('compactmachines:machine_small',1),
		[  'NNN',
	       'NEN',
		   'NNN'],
		{ 
			N: 'compactmachines:wall',
			E: 'compactmachines:machine_tiny'
		}
	)
	event.shaped(
		Item.of('compactmachines:machine_normal',1),
		[  'NNN',
	       'NEN',
		   'NNN'],
		{ 
			N: 'compactmachines:wall',
			E: 'compactmachines:machine_small'
		}
	)
	event.shaped(
		Item.of('compactmachines:machine_large',1),
		[  'NNN',
	       'NEN',
		   'NNN'],
		{ 
			N: 'compactmachines:wall',
			E: 'compactmachines:machine_normal'
		}
	)
	event.shaped(
		Item.of('compactmachines:machine_giant',1),
		[  'NNN',
	       'NEN',
		   'NNN'],
		{ 
			N: 'compactmachines:wall',
			E: 'compactmachines:machine_large'
		}
	)
	event.shaped(
		Item.of('compactmachines:machine_maximum',1),
		[  'NNN',
	       'NEN',
		   'NNN'],
		{ 
			N: 'compactmachines:wall',
			E: 'compactmachines:machine_giant'
		}
	)
	event.shaped(
		Item.of('compactmachines:machine_maximum',1),
		[  'NNN',
	       'NEN',
		   'NNN'],
		{ 
			N: 'compactmachines:wall',
			E: 'compactmachines:machine_giant'
		}
	)
	event.shaped(
		Item.of('vs_eureka:engine',1),
		[  'RTR',
	       'CFC',
		   'RPR'],
		{ 
			R: 'tfc:metal/rod/steel', 
			T: 'tfc:metal/tuyere/steel',
			F: 'create:propeller',
			C: 'immersiveengineering:component_steel',
			P: 'tfc_metalwork:metal/plate/steel'
		}
	)
	const wHelm = ["oak", "spruce", "birch", "acacia"]
	wHelm.forEach(wood => {event.recipes.tfc.damage_inputs_shaped_crafting(
		event.shaped(
		Item.of('vs_eureka:'+wood+'_ship_helm',1),
			['HT ',
	         'CFC',
		     'RSR'],
		{ 
			R: 'immersiveengineering:wirecoil_structure_rope', 
			T: 'create:shaft',
			H: '#tfc:hammers',
			F: 'astikorcarts:wheel/'+wood,
			C: 'create:wooden_bracket',
			S: 'tfc:wood/planks/'+wood+'_slab'
		}
	))})
	event.shaped(
		Item.of('vs_eureka:balloon',1),
		[  ' M ',
		   'MGM',
		   ' M '],
		{ 
			M: 'minecraft:leather', 
			G: 'tfc:glue'
		}
	)
	event.shaped(
		Item.of('vs_eureka:balloon',1),
		[  'MMM',
		   'MGM',
		   'MMM'],
		{ 
			M: 'minecraft:paper', 
			G: 'tfc:glue'
		}
	),
	event.shaped('minecraft:observer', [
		'RPR',
		'BCW',
		'RLR'
	], {
		R: 'tfc_metallum:metal/rod/andesite_alloy',
		P: 'tfc_metalwork:metal/plate/andesite_alloy',
		B: 'mekanism:energy_tablet',
		C: 'ae2:logic_processor',
		W: 'rosia:copper_wire',
		L: '#forge:lens'
	})
	event.shaped('minecraft:nether_star', [
		' L ',
		'PEC',
		' R '
	], {
		E: 'minecraft:ender_eye',
		L: 'agape_space:shard_living',
		P: 'agape_space:shard_power',
		C: 'agape_space:shard_cold',
		R: 'agape_space:shard_radiant'
	})
	event.shaped('exnihilosequentia:wooden_crook', [
		' SS',
		'  S',
		'  S'
	], {
		S: '#forge:rods/wooden'
	})
	event.shaped('exoticbirds:bird_book', [
		'SSS',
		'SBS',
		'SSS'
	], {
		S: '#forge:feathers',
		B: 'minecraft:book'
	})
	event.shaped('exoticbirds:nest', [
		'S S',
		' S ',
		'   '
	], {
		S: '#forge:rods/wooden'
	})
	event.shaped('exoticbirds:ambrosia', [
		'SB ',
		'H  ',
		'   '
	], {
		S: '#forge:fruits',
		B: '#forge:fruits/berries',
		H: '#forge:honey'
	})
	event.shaped('exoticbirds:egg_incubator', [
		'RLR',
		'SNS',
		'RBR'
	], {
		R: 'tfc:metal/rod/wrought_iron',
		S: 'tfc:metal/sheet/wrought_iron',
		L: '#forge:glass_panes',
		N: 'exoticbirds:nest',
		B: 'immersiveengineering:furnace_heater'
	})
	event.shaped('exoticbirds:egg_identifier', [
		'RLR',
		'S S',
		'RBR'
	], {
		R: 'tfc:metal/rod/wrought_iron',
		S: 'tfc:metal/sheet/wrought_iron',
		L: '#forge:lens',
		B: 'minecraft:redstone_lamp'
	})
	event.shaped('exoticbirds:acacia_birdcage', [
		' B ',
		'BSB',
		'PPP'
	], {
		B: 'minecraft:iron_bars',
		S: '#forge:rods/wooden',
		P: 'tfc:wood/planks/acacia_slab'
	})
	event.shaped('exoticbirds:birch_birdcage', [
		' B ',
		'BSB',
		'PPP'
	], {
		B: 'minecraft:iron_bars',
		S: '#forge:rods/wooden',
		P: 'tfc:wood/planks/birch_slab'
	})
	event.shaped('exoticbirds:oak_birdcage', [
		' B ',
		'BSB',
		'PPP'
	], {
		B: 'minecraft:iron_bars',
		S: '#forge:rods/wooden',
		P: 'tfc:wood/planks/oak_slab'
	})
	event.shaped('exoticbirds:spruce_birdcage', [
		' B ',
		'BSB',
		'PPP'
	], {
		B: 'minecraft:iron_bars',
		S: '#forge:rods/wooden',
		P: 'tfc:wood/planks/spruce_slab'
	})
	event.shaped('exoticbirds:iron_birdcage', [
		' B ',
		'BSB',
		'PPP'
	], {
		B: 'minecraft:iron_bars',
		S: '#forge:rods/wooden',
		P: 'tfc_metalwork:metal/plate/wrought_iron'
	})
	event.shaped('exoticbirds:gold_birdcage', [
		' B ',
		'BSB',
		'PPP'
	], {
		B: 'createdeco:gold_bars',
		S: '#forge:rods/wooden',
		P: 'tfc_metalwork:metal/plate/gold'
	})
		event.recipes.tfc.damage_inputs_shapeless_crafting(
			'kubejs:metal/bolt/bolt_wrought_iron',['kubejs:metal/bolt/wrought_iron','#forge:files'])
		event.recipes.tfc.damage_inputs_shapeless_crafting(
			'kubejs:metal/bolt/bolt_steel',['kubejs:metal/bolt/steel','#forge:files'])
		event.recipes.tfc.damage_inputs_shapeless_crafting(
			'kubejs:metal/bolt/steel',['immersiveengineering:stick_steel','#tfc:saw2'])
		event.recipes.tfc.damage_inputs_shapeless_crafting(
			'kubejs:metal/bolt/wrought_iron',['immersiveengineering:stick_iron','#tfc:saw2'])
	})
	
	//new shapeless recipes
	//recipe for leaf blocks for all tfc types
onEvent('recipes', event => {
	const woodTypes = ['acacia', 'ash', 'aspen', 'birch', 'blackwood', 'chestnut', 'douglas_fir', 'hickory', 'kapok', 'maple', 'oak', 'palm', 'pine', 'rosewood', 'sequoia', 'spruce', 'sycamore', 'white_cedar', 'willow'];
	const AFC = ["eucalyptus", "mahogany", "baobab", "hevea", "tualang", "teak", "cypress", "fig", "umbrella_thorn_acacia", "gum_arabic", "acacia_koa", 
		"black_ash", "evergreen_ash", "quaking_aspen", "paper_birch", "mulga_blackwood", "mpingo_blackwood", "mountain_fir", "balsam_fir", "bitternut_hickory", 
		"scrub_hickory", "red_silk_cotton", "sugar_maple", "bigleaf_maple", "weeping_maple", "black_oak", "live_oak", "stone_pine", "red_pine", "tamarack", 
		"shisham_rosewood", "giant_rosewood", "coast_redwood", "coast_spruce", "sitka_spruce", "black_spruce", "atlas_cedar", "corkscrew_willow", "weeping_willow", 
		"rainbow_eucalyptus", "mountain_ash", "rubber_fig", "redcedar", "weeping_cypress", "bald_cypress", "sapele_mahogany", "small_leaf_mahogany"]
	const first8AFC = AFC.slice(0, 8);
	const slicedAFC = AFC.slice(8);
	AFC.forEach(i => {event.shapeless(Item.of('afc:wood/leaves/' + i,1), ['3x afc:wood/sapling/' + i])})
	slicedAFC.forEach(i => {event.recipes.tfc.damage_inputs_shapeless_crafting(
		'minecraft:stick',['afc:wood/sapling/' + i,'#tfc:knives'])})
	woodTypes.forEach(type => {
			event.shapeless(Item.of('tfc:wood/leaves/' + type, 1), ['3x tfc:wood/sapling/' + type]);
		});
	woodTypes.forEach(W => {
		event.shaped(
			Item.of('tfc:wood/boat/' + W),
			['   ',
	        'W W',
		    'WWW'],
			{ 
			W: 'tfc:wood/planks/' + W,
			}
		)
		event.recipes.tfc.damage_inputs_shapeless_crafting(
			'kubejs:taproot',['tfc:plant/yucca','#tfc:knives'])
		event.recipes.tfc.damage_inputs_shapeless_crafting(
			'kubejs:taproot',['tfc:plant/sagebrush','#tfc:knives'])
		})
//sapling to stick recipe - wattle&daub are very big stick consumers, and I have disabled planks to sticks recipe
	woodTypes.forEach(type => {
		event.recipes.tfc.extra_products_shapeless_crafting('tfc:wood/fallen_leaves/' + type, event.recipes.tfc.damage_inputs_shapeless_crafting(
			'minecraft:stick', ['tfc:wood/sapling/' + type, '#tfc:knives']));
		});

	event.recipes.tfc.extra_products_shapeless_crafting('afc:wood/fallen_leaves/eucalyptus',event.recipes.tfc.damage_inputs_shapeless_crafting(
			'minecraft:stick',['afc:wood/sapling/eucalyptus','#tfc:knives']))	
	event.recipes.tfc.extra_products_shapeless_crafting('afc:wood/fallen_leaves/mahogany',event.recipes.tfc.damage_inputs_shapeless_crafting(
			'minecraft:stick',['afc:wood/sapling/mahogany','#tfc:knives']))	
	event.recipes.tfc.extra_products_shapeless_crafting('afc:wood/fallen_leaves/baobab',event.recipes.tfc.damage_inputs_shapeless_crafting(
			'minecraft:stick',['afc:wood/sapling/baobab','#tfc:knives']))	
	event.recipes.tfc.extra_products_shapeless_crafting('afc:wood/fallen_leaves/hevea',event.recipes.tfc.damage_inputs_shapeless_crafting(
			'minecraft:stick',['afc:wood/sapling/hevea','#tfc:knives']))	
	event.recipes.tfc.extra_products_shapeless_crafting('afc:wood/fallen_leaves/tualang',event.recipes.tfc.damage_inputs_shapeless_crafting(
			'minecraft:stick',['afc:wood/sapling/tualang','#tfc:knives']))	
	event.recipes.tfc.extra_products_shapeless_crafting('afc:wood/fallen_leaves/teak',event.recipes.tfc.damage_inputs_shapeless_crafting(
			'minecraft:stick',['afc:wood/sapling/teak','#tfc:knives']))	
	event.recipes.tfc.extra_products_shapeless_crafting('afc:wood/fallen_leaves/cypress',event.recipes.tfc.damage_inputs_shapeless_crafting(
			'minecraft:stick',['afc:wood/sapling/cypress','#tfc:knives']))	
	event.recipes.tfc.extra_products_shapeless_crafting('afc:wood/fallen_leaves/fig',event.recipes.tfc.damage_inputs_shapeless_crafting(
			'minecraft:stick',['afc:wood/sapling/fig','#tfc:knives']))	
	first8AFC.forEach(i => {
		event.custom({type: 'create:cutting', ingredients: [Ingredient.of('afc:wood/stripped_log/' + i).toJson()],
			results: [Item.of('afc:wood/lumber/' + i, 8), Item.of('immersiveengineering:dust_wood').withChance(0.25)], processingTime: 50})
		event.custom({type: 'create:cutting', ingredients: [Ingredient.of('afc:wood/log/' + i).toJson()],
			results: [Item.of('afc:wood/stripped_log/' + i, 1)], processingTime: 50}) })
	first8AFC.forEach(i => {
		event.custom({type: 'create:cutting', ingredients: [Ingredient.of('afc:wood/stripped_wood/' + i).toJson()],
			results: [Item.of('afc:wood/lumber/' + i, 8), Item.of('immersiveengineering:dust_wood').withChance(0.25)], processingTime: 50})
		event.custom({type: 'create:cutting', ingredients: [Ingredient.of('afc:wood/wood/' + i).toJson()],
			results: [Item.of('afc:wood/stripped_wood/' + i, 1)], processingTime: 50}) })
	woodTypes.forEach(i => {
		event.custom({type: 'create:cutting', ingredients: [Ingredient.of('tfc:wood/stripped_log/' + i).toJson()],
			results: [Item.of('tfc:wood/lumber/' + i, 8), Item.of('immersiveengineering:dust_wood').withChance(0.25)], processingTime: 50})
		event.custom({type: 'create:cutting', ingredients: [Ingredient.of('tfc:wood/log/' + i).toJson()],
			results: [Item.of('tfc:wood/stripped_log/' + i, 1)], processingTime: 50}) })
	woodTypes.forEach(i => {
		event.custom({type: 'create:cutting', ingredients: [Ingredient.of('tfc:wood/stripped_wood/' + i).toJson()],
			results: [Item.of('tfc:wood/lumber/' + i, 8), Item.of('immersiveengineering:dust_wood').withChance(0.25)], processingTime: 50})
		event.custom({type: 'create:cutting', ingredients: [Ingredient.of('tfc:wood/wood/' + i).toJson()],
			results: [Item.of('tfc:wood/stripped_wood/' + i, 1)], processingTime: 50}) })
	})
onEvent('recipes', event => {
	event.shapeless(Item.of('create:crafting_blueprint',1), ['minecraft:painting', '#tfc:workbenches']),  				
	event.shapeless(Item.of('chemlib:zinc_sulfide_dust', 1), ['#forge:dusts/zinc', '#forge:dusts/zinc', '#forge:dusts/sulfur', '#forge:dusts/sulfur']),
	event.recipes.tfc.heating(Item.of('minecraft:glowstone_dust'), ('chemlib:zinc_sulfide_dust'), 300)  	
	event.shapeless(Item.of('minecraft:blaze_powder', 2), ['#forge:dusts/iron', '#forge:dusts/iron', '#forge:dusts/iron', '#forge:dusts/aluminum'])
	//soil builder
	const nonSoil = ["moon_soil", "dark_soil", "red_soil", "scorched_soil", 'europa_sediment', 'titan_sludge']
	nonSoil.forEach(i => {
	event.shapeless(Item.of('tfc:dirt/loam', 4), [Item.of('agape_space:'+ i),Item.of('agape_space:'+ i),Item.of('agape_space:'+ i),
	'minecraft:clay','minecraft:clay','minecraft:clay','#forge:sand', '#forge:sand', 'tfc:compost'])
	event.shapeless(Item.of('tfc:dirt/silty_loam', 4), [Item.of('agape_space:'+ i),Item.of('agape_space:'+ i),Item.of('agape_space:'+ i),
	'minecraft:clay','minecraft:clay','#forge:sand','#forge:sand', '#forge:sand', 'tfc:compost'])
	event.shapeless(Item.of('tfc:dirt/sandy_loam', 4), [Item.of('agape_space:'+ i),Item.of('agape_space:'+ i),Item.of('agape_space:'+ i),
	'minecraft:clay','#forge:sand','#forge:sand','#forge:sand', '#forge:sand', 'tfc:compost'])
	event.shapeless(Item.of('tfc:dirt/silt', 4), [Item.of('agape_space:'+ i),Item.of('agape_space:'+ i),Item.of('agape_space:'+ i),
	'minecraft:clay','minecraft:clay','minecraft:clay','minecraft:clay', '#forge:sand', 'tfc:compost'])
	})
	event.shapeless('create:copper_diving_helmet', ['minecraft:glass_pane', 'tfc:metal/helmet/copper', 'minecraft:leather', 'tfc:glue'])
	event.shapeless('kubejs:rootball', ['kubejs:taproot', 'kubejs:taproot', 'kubejs:taproot', 'kubejs:taproot'])
	event.shapeless(
		Item.of('minecraft:anvil',1),
		[ 
		'tfc:metal/anvil/wrought_iron'
		]
	)
	event.shapeless(
		Item.of('tfc:metal/anvil/wrought_iron',1),
		[ 
		'minecraft:anvil'
		]
	)
	event.shapeless(
		Item.of('kubejs:snow_jug',1),
		[ 
		'tfc:ceramic/jug',
		'minecraft:snowball', 'minecraft:snowball', 'minecraft:snowball', 'minecraft:snowball'
		]
	)
	event.shapeless(
		Item.of('kubejs:snow_jug',1),
		[ 
		'tfc:ceramic/jug',
		'minecraft:snow_block'
		]
	)
	event.shapeless(
		Item.of(Item.of('tfc:ceramic/jug', '{fluid:{Amount:100,FluidName:"minecraft:water"}}'),1),
		[ 
		'kubejs:snow_jug',
		'tfc:torch'
		]	
	)
	event.shapeless(
		Item.of(Item.of('tfc:ceramic/jug', '{fluid:{Amount:100,FluidName:"minecraft:water"}}'),1),
		[ 
		'#tfc:rock_knapping', 'tfc:ceramic/jug', 'kubejs:rootball', 'kubejs:rootball'
		]	
	)
	event.shapeless(
		Item.of('tfc:wattle/unstained',1),
		[ 
			'tfc:wattle',
			'tfc:daub',
			'minecraft:stick',
			'minecraft:stick',
			'minecraft:stick',
			'minecraft:stick'
		]
	  )
	  event.shapeless(Item.of('minecraft:beehive',1), ['firmalife:beehive'])
	  event.shapeless(Item.of('firmalife:beehive',1), ['minecraft:beehive'])
	event.recipes.tfc.heating(Item.of('exoticbirds:cooked_birdmeat'.copyFood(),1), Ingredient.notRotten('exoticbirds:raw_birdmeat').copyHeat(), 200)
	event.recipes.tfc.heating(Item.of('tfc:ceramic/jug', '{fluid:{Amount:100,FluidName:minecraft:water"}}'), Ingredient('kubejs:snow_jug').copyHeat(), 25) 
	event.recipes.tfc.heating(Item.of('tfc:ceramic/jug'), Ingredient(Item.of('tfc:ceramic/jug', '{fluid:{Amount:100,FluidName:minecraft:water"}}')).copyHeat(), 100)   
	event.recipes.tfc.heating(Fluid.of('minecraft:water',25), Ingredient('minecraft:snow_block'), 100)  
	event.recipes.tfc.heating(Fluid.of('minecraft:water',6.25), Ingredient('minecraft:snowball'), 100)   
	event.recipes.tfc.heating(Fluid.of('tfc_metallum:andesite_alloy',25), Ingredient('create:andesite_alloy'), 200)  
	event.recipes.tfc.casting(Item.of('tfc:ceramic/jug', '{fluid:{Amount:100,FluidName:"minecraft:water"}}'), 'tfc:jug', FluidStackIngredient.of('water'), 1.0) 
	event.recipes.tfc.casting(Item.of('tfc:ceramic/jug', '{fluid:{Amount:100,FluidName:"minecraft:water"}}'), 'tfc:jug', FluidStackIngredient.of('minecraft:water'), 1.0) 
})
//container tweaks - not working?
onEvent('tfc.limit_container_size', event => {
    event.limitContainerSize('sophisticatedbackpacks:backpack', 'large')
})
//make non TFC food into tfc-style
/*onEvent('server.datapack.first', event => {
	event.addTFCFoodItem('exoticbirds:raw_birdmeat', e =>{
		e.protein(1.5); e.decayModifier(2)
	})
	event.addTFCFoodItem('exoticbirds:cooked_birdmeat', e =>{
		e.protein(2.5); e.saturation(2); e.hunger(6); e.decayModifier(1)
	})
})*/
onEvent('recipes', event => {
	//Create Mixer Recipes
	event.recipes.create.mixing(Item.of(Fluid.of('sliceanddice:fertilizer',250)),[
		'tfc:compost', Fluid.water(250) ])
	event.recipes.create.mixing(Item.of(Fluid.of('sliceanddice:fertilizer',250)),[
		'minecolonies:compost', Fluid.water(250) ])
	event.recipes.create.mixing(Item.of(Fluid.of('sliceanddice:fertilizer',500)),[
		'immersiveengineering:fertilizer', Fluid.water(500) ])
	const concColors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black']
	concColors.forEach(color => {
		event.recipes.tfc.barrel_instant(
			Item.of('minecraft:' + color + '_concrete'),
			'#minecolonies:concrete',
			Fluid.of('tfc:' + color + '_dye', 10))
		event.recipes.tfc.barrel_instant(
			Item.of('minecraft:' + color + '_concrete'),
			'#minecolonies:concrete_powder',
			Fluid.of('tfc:' + color + '_dye', 10))
		event.shapeless(
			Item.of('8x minecraft:' + color + '_concrete_powder'),
			['8x #minecolonies:concrete_powder',
			'minecraft:' + color + '_dye'])
		event.shaped('exoticbirds:'+color+'_birdhouse', [
			'DP ',
			'PNP',
			' S '
			], {
				D: 'minecraft:'+color+'_dye',
				N: 'exoticbirds:nest',
				S: '#minecraft:wooden_slabs',
				P: '#tfc:lumber'
			})		
	})	
	event.recipes.create.mixing(Item.of('minecraft:light_gray_concrete_powder',2),[
		'#forge:sand',
		'#forge:gravel',
		Item.of('tfc:powder/flux')
	])
	//Create Crusher Recipes
	event.recipes.createCrushing([
		'kubejs:limesand'
	], 'tfc:rock/gravel/limestone')
	event.recipes.createCrushing([
		'industrializedcreate:coal_dust'
	], 'tfc:ore/bituminous_coal')
	event.recipes.createCrushing([
		'industrializedcreate:coal_dust'
	], 'tfc:ore/lignite')
	event.recipes.createCrushing([
		'exnihilosequentia:dust'
	], '#forge:sand')
	event.custom({type: 'create:crushing', ingredients: [Ingredient.of('firmalife:ore/poor_chromite').toJson()],
		results: [Item.of('firmalife:ore/small_chromite', 2), Item.of('firmalife:ore/small_chromite').withChance(0.16)], processingTime: 250,
	  })
	event.custom({type: 'create:crushing', ingredients: [Ingredient.of('firmalife:ore/normal_chromite').toJson()],
		results: [Item.of('firmalife:ore/small_chromite', 3), Item.of('firmalife:ore/small_chromite').withChance(0.33)], processingTime: 250,
	})
	event.custom({type: 'create:crushing', ingredients: [Ingredient.of('firmalife:ore/rich_chromite').toJson()],
		results: [Item.of('firmalife:ore/small_chromite', 4), Item.of('firmalife:ore/small_chromite').withChance(0.66)], processingTime: 250,
	  }) 
	const tfcOre = [
		"native_copper", "native_gold", "native_silver", "hematite", "cassiterite", "bismuthinite", "garnierite", "malachite",
		"magnetite", "limonite", "sphalerite", "tetrahedrite"]
	const tfcMetOre = [
		"bauxite", "bertrandite", "cobaltite", "kernite", "galena", "monazite", "native_osmium", "native_iridium", "native_platinum", 
		"rutile", "stibnite", "uraninite", "wolframite"]
	const IEOre = [
		"aluminum", "lead", "uranium"]
	const tfcWoodTypes = [
		"ash", "aspen", "blackwood", "chestnut", "douglas_fir", "hickory","kapok", "maple", "palm", "pine", "rosewood", "sequoia", 
		"sycamore", "white_cedar", "willow"
	]
    tfcOre.forEach(i => {
        event.custom({type: 'create:crushing', ingredients: [Ingredient.of('tfc:ore/poor_' + i).toJson()],
	        results: [Item.of('tfc:ore/small_' + i, 2), Item.of('tfc:ore/small_' + i).withChance(0.16)], processingTime: 250})
        event.custom({type: 'create:crushing', ingredients: [Ingredient.of('tfc:ore/normal_' + i).toJson()],
	        results: [Item.of('tfc:ore/small_' + i, 3), Item.of('tfc:ore/small_' + i).withChance(0.33)], processingTime: 250})
        event.custom({type: 'create:crushing', ingredients: [Ingredient.of('tfc:ore/rich_' + i).toJson()],
	        results: [Item.of('tfc:ore/small_' + i, 4), Item.of('tfc:ore/small_' + i).withChance(0.66)], processingTime: 250}) 
    })
	tfcMetOre.forEach(i => {
        event.custom({type: 'create:crushing', ingredients: [Ingredient.of('tfc_metallum:ore/poor_' + i).toJson()],
	        results: [Item.of('tfc_metallum:ore/small_' + i, 2), Item.of('tfc_metallum:ore/small_' + i).withChance(0.16)], processingTime: 250})
        event.custom({type: 'create:crushing', ingredients: [Ingredient.of('tfc_metallum:ore/normal_' + i).toJson()],
	        results: [Item.of('tfc_metallum:ore/small_' + i, 3), Item.of('tfc_metallum:ore/small_' + i).withChance(0.33)], processingTime: 250})
        event.custom({type: 'create:crushing', ingredients: [Ingredient.of('tfc_metallum:ore/rich_' + i).toJson()],
	        results: [Item.of('tfc_metallum:ore/small_' + i, 4), Item.of('tfc_metallum:ore/small_' + i).withChance(0.66)], processingTime: 250}) 
    })
	IEOre.forEach(i => {
        event.custom({type: 'create:crushing', ingredients: [Ingredient.of('tfc_ie_addon:ore/poor_' + i).toJson()],
	        results: [Item.of('tfc_ie_addon:ore/small_' + i, 2), Item.of('tfc_ie_addon:ore/small_' + i).withChance(0.16)], processingTime: 250})
        event.custom({type: 'create:crushing', ingredients: [Ingredient.of('tfc_ie_addon:ore/normal_' + i).toJson()],
	        results: [Item.of('tfc_ie_addon:ore/small_' + i, 3), Item.of('tfc_ie_addon:ore/small_' + i).withChance(0.33)], processingTime: 250})
        event.custom({type: 'create:crushing', ingredients: [Ingredient.of('tfc_ie_addon:ore/rich_' + i).toJson()],
	        results: [Item.of('tfc_ie_addon:ore/small_' + i, 4), Item.of('tfc_ie_addon:ore/small_' + i).withChance(0.66)], processingTime: 250}) 
    })
	event.recipes.create.crushing('4x tfc:powder/kaolinite', 'tfc:ore/kaolinite')
	event.recipes.create.crushing('4x tfc:powder/graphite', 'tfc:ore/graphite')
	event.recipes.create.crushing('4x tfc:powder/sulfur', 'tfc:ore/sulfur')
	event.recipes.create.crushing('8x minecraft:redstone', 'tfc:ore/cinnabar')
	event.recipes.create.crushing('8x minecraft:redstone', 'tfc:ore/cryolite')
	event.recipes.create.crushing('4x tfc:powder/saltpeter', 'tfc:ore/saltpeter')
	event.recipes.create.crushing('4x tfc:powder/sylvite', 'tfc:ore/sylvite')
	event.recipes.create.crushing('6x tfc:powder/flux', 'tfc:ore/borax')
	event.recipes.create.crushing('4x tfc:powder/salt', 'tfc:ore/halite')
	event.recipes.createsifterSifting([Item.of('tfc:ore/small_native_copper').withChance(0.01).toJson(),Item.of('tfc:ore/small_native_gold').withChance(0.01).toJson(),Item.of('tfc:ore/small_hematite').withChance(0.01).toJson(),Item.of('tfc:ore/small_native_silver').withChance(0.01).toJson(),Item.of('tfc:ore/small_cassiterite').withChance(0.01).toJson(),Item.of('tfc:ore/small_bismuthinite').withChance(0.01).toJson(),Item.of('tfc:ore/small_garnierite').withChance(0.01).toJson(),Item.of('tfc:ore/small_malachite').withChance(0.01).toJson(),Item.of('tfc:ore/small_magnetite').withChance(0.01).toJson(),Item.of('tfc:ore/small_limonite').withChance(0.01).toJson(),Item.of('tfc:ore/small_sphalerite').withChance(0.01).toJson(),Item.of('tfc:ore/small_tetrahedrite').withChance(0.01).toJson(),Item.of('tfc_metallum:ore/small_bauxite').withChance(0.01).toJson()], ['#tfc:rock/gravel','createsifter:andesite_mesh'])
	const stone = ["granite", "diorite", "gabbro", "shale", "claystone", "limestone", "conglomerate", "dolomite", "chert", "chalk", "rhyolite", "basalt", "andesite", "dacite", "quartzite", "slate", "phyllite", "schist", "gneiss", "marble"]
	const ore = ["native_copper", "native_gold", "native_silver", "cassiterite"]
	const mesh = ["andesite", "zinc", "brass"]
// Create Sifting Recipes
	stone.forEach(rock => {
		ore.forEach(i => {
			mesh.forEach(m => {
				event.recipes.createsifterSifting([Item.of('tfc:ore/small_' + i).withChance(0.33), Item.of('tfc:rock/loose/' + rock).withChance(0.33)], ['tfc:deposit/' + i + '/' + rock, 'createsifter:' + m + '_mesh'])
			})
		})
	})
	global.gBlock = ['agape_space:moon_soil', 'agape_space:dark_soil', 'agape_space:red_soil', 'agape_space:scorched_soil', 'agape_space:sulfuric_soil', 'agape_space:radiant_soil', 'agape_space:europa_sediment', 'agape_space:titan_sludge']
	onEvent('tags.blocks', event => {
		global.gBlock.forEach(i => {
			event.add('tfc:can_landslide', i)
		})
	})
})
	onEvent('recipes', event => {
		global.gBlock.forEach(i => {
			event.recipes.tfc.landslide(i, i)
		})
	})

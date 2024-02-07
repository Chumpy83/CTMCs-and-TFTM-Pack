//priority: 700
/**
 *
 * @param {Internal.LootModificationForgeEventJS} lootEvent
 */
const setLoot = (lootEvent) => {
  lootEvent
    .addLootTypeModifier(LootType.CHEST)
    .removeLoot(Item.of("minecraft:bucket"))
  lootEvent
    .addLootTypeModifier(LootType.CHEST)
    .removeLoot(Item.of("minecraft:bread"))
  lootEvent
    .addLootTypeModifier(LootType.CHEST)
    .removeLoot(Item.of("minecraft:fishing_rod").ignoreNBT())
  lootEvent
    .addLootTypeModifier(LootType.FISHING)
    .removeLoot(Item.of("minecraft:fishing_rod").ignoreNBT())

  lootEvent
    .addLootTypeModifier(LootType.CHEST)
    .removeLoot(Item.of("minecraft:anvil"))
  lootEvent
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:copper_ingot", "tfc:metal/ingot/copper")
  lootEvent
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:gold_ingot", "tfc:metal/ingot/gold")
  lootEvent
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:iron_ingot", "tfc:metal/ingot/wrought_iron")
  lootEvent
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:diamond", "tfc:gem/diamond")
  lootEvent
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:emerald", "tfc:gem/emerald")
  lootEvent
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:lapis_lazuli", "tfc:gem/lapis_lazuli")
  lootEvent
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:enchanting_table", "tfc:gem/diamond")
  lootEvent
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:carrot", "tfc:food/carrot", true)
  lootEvent
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:potato", "tfc:food/potato", true)
  lootEvent
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:wheat", "tfc:food/wheat", true)
  lootEvent
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:pumpkin", "tfc:pumpkin", true)
  lootEvent
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:beetroot_seeds", "tfc:seeds/beet", true)
  lootEvent
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:melon_seeds", "tfc:seeds/melon", true)
  lootEvent
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:pumpkin_seeds", "tfc:seeds/pumpkin", true)
  lootEvent
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:dead_bush", "tfc:plant/dead_bush", true)

  lootEvent
    .addEntityLootModifier("minecraft:zombie")
    .replaceLoot(
      Item.of("minecraft:iron_ingot"),
      "tfc:metal/shovel/wrought_iron"
    )
  lootEvent
    .addEntityLootModifier("minecraft:husk")
    .replaceLoot(
      Item.of("minecraft:iron_ingot"),
      "tfc:metal/shovel/wrought_iron"
    )
  lootEvent
    .addEntityLootModifier("minecraft:drowned")
    .replaceLoot(Item.of("minecraft:copper_ingot"), "tfc:metal/shovel/copper")

  lootEvent
    .addLootTypeModifier(LootType.ENTITY)
    .replaceLoot("minecraft:potato", "tfc:food/potato", true)
  lootEvent
    .addLootTypeModifier(LootType.ENTITY)
    .replaceLoot("minecraft:carrot", "tfc:food/carrot", true)

  lootEvent
    .addEntityLootModifier("minecraft:evoker")
    .replaceLoot("minecraft:emerald", "tfc:gem/emerald")
  lootEvent
    .addLootTypeModifier(LootType.CHEST)
    .removeLoot(Item.of("minecraft:lava_bucket"))
  lootEvent
    .addLootTypeModifier(LootType.CHEST)
    .removeLoot(Item.of("minecraft:water_bucket"))
  lootEvent
    .addLootTypeModifier(LootType.CHEST)
    .removeLoot(Item.of("minecraft:powder_snow_bucket"))
  lootEvent
    .addLootTypeModifier(LootType.CHEST)
    .removeLoot(Item.of("minecraft:cooked_porkchop"))
  lootEvent
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:porkchop", "tfc:food/pork", true)
  lootEvent
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:mutton", "tfc:food/mutton", true)
  lootEvent
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:beef", "tfc:food/beef", true)
  lootEvent
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:chicken", "tfc:food/chicken", true)
  lootEvent
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:rabbit", "tfc:food/rabbit", true)
  lootEvent
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:rabbit_hide", "tfc:small_raw_hide", true)
  lootEvent
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:barrel", "tfcbarrels:wood/barrel/oak")
  lootEvent
    .addEntityLootModifier("minecraft:hoglin")
    .replaceLoot("minecraft:porkchop", "tfc:food/pork", true)
  lootEvent
    .addEntityLootModifier("minecraft:hoglin")
    .replaceLoot("minecraft:cooked_porkchop", "tfc:food/cooked_pork", true)
  lootEvent
    .addEntityLootModifier("minecraft:hoglin")
    .replaceLoot("minecraft:leather", "tfc:large_raw_hide")
}
onEvent('block.loot_tables', event=> {
	event.addBlock('tfc_ie_addon:mineral/quartz_cluster', table => {
		table.addPool(pool => {
			pool.rolls = 1
			pool.addItem('create:rose_quartz',1)
			pool.addItem('tfc_ie_addon:mineral/quartz_shard',4)
			})
		})
	event.addBlock('tfc_ie_addon:mineral/quartz_block', table => {
		table.addPool(pool => {
			pool.rolls = 1
			pool.addItem('tfc_ie_addon:mineral/quartz_block',1)
			})
		})	
	event.addBlock('tfc_ie_addon:mineral/budding_quartz', table => {
		table.addPool(pool => {
			pool.rolls = 1
			pool.addItem('tfc_ie_addon:mineral/quartz_block',1)
			})
		})	
  event.addSimpleBlock('tfc:calcite')
	})
/*  onEvent("lootjs", (event) => {
    event.addBlockLootModifier("tfc:block/calcite").addLoot("tfc:calcite")
    event.addBlockLootModifier("tfc:block/calcite_tip").addLoot("tfc:calcite")
})*/
onEvent('lootjs', e => {
	e.addBlockLootModifier('#minecraft:leaves')
	  .removeLoot('exnihilosequentia:silkworm')
	  
	e.addBlockLootModifier('#minecraft:leaves')
	  .matchMainHand(Item.of("exnihilosequentia:wooden_crook").ignoreNBT())
	  .randomChance(0.05)
	  .addLoot('exnihilosequentia:silkworm')
  e.addBlockLootModifier('#minecraft:dirt')
  .randomChance(0.01)
  .addLoot('kubejs:earthworm')
  })		
const ironOres = ["minecraft:iron_ore", "minecraft:deepslate_iron_ore"]
ironOres.forEach(ore => {
  onEvent('block.loot_tables', event=> {
    event.addBlock(ore, table => {
      table.addPool(pool => {
        pool.rolls = 1
        pool.addItem('tfc:ore/poor_magnetite',1)
        pool.addItem('tfc:ore/normal_magnetite',1)
        pool.addItem('tfc:ore/rich_magnetite',1)
        pool.addItem('tfc:ore/poor_hematite',1)
        pool.addItem('tfc:ore/normal_hematite',1)
        pool.addItem('tfc:ore/rich_hematite',1)
        })
      })
    })
  })
const coalOres = ["minecraft:coal_ore", "minecraft:deepslate_coal_ore"]
coalOres.forEach(ore => {
  onEvent('block.loot_tables', event=> {
    event.addBlock(ore, table => {
      table.addPool(pool => {
        pool.rolls = 1
        pool.addItem('chemlib:carbon_dust',1)
        })
      })
    })
  })
const copperOres = ["minecraft:copper_ore", "minecraft:deepslate_copper_ore"]
copperOres.forEach(ore => {
  onEvent('block.loot_tables', event=> {
    event.addBlock(ore, table => {
      table.addPool(pool => {
        pool.rolls = 1
        pool.addItem('tfc:ore/poor_native_copper',1)
        pool.addItem('tfc:ore/normal_native_copper',1)
        pool.addItem('tfc:ore/rich_native_copper',1)
        })
      })
    })
  })
const goldOres = ["minecraft:gold_ore", "minecraft:deepslate_gold_ore", "minecraft:nether_gold_ore"]
goldOres.forEach(ore => {
  onEvent('block.loot_tables', event=> {
    event.addBlock(ore, table => {
      table.addPool(pool => {
        pool.rolls = 1
        pool.addItem('tfc:ore/poor_native_gold',1)
        pool.addItem('tfc:ore/normal_native_gold',1)
        pool.addItem('tfc:ore/rich_native_gold',1)
        })
      })
    })
  })  
const redOres = ["minecraft:redstone_ore", "minecraft:deepslate_redstone_ore"]
redOres.forEach(ore => {
  onEvent('block.loot_tables', event=> {
    event.addBlock(ore, table => {
      table.addPool(pool => {
        pool.rolls = 1
        pool.addItem('tfc:ore/cinnabar',1)
        })
      })
    })
  })  
const emeraldOres = ["minecraft:emerald_ore", "minecraft:deepslate_emerald_ore"]
emeraldOres.forEach(ore => {
  onEvent('block.loot_tables', event=> {
    event.addBlock(ore, table => {
      table.addPool(pool => {
        pool.rolls = 1
        pool.addItem('tfc:ore/emerald',1)
        })
      })
    })
  }) 
const lapisOres = ["minecraft:lapis_ore", "minecraft:deepslate_lapis_ore"]
lapisOres.forEach(ore => {
  onEvent('block.loot_tables', event=> {
    event.addBlock(ore, table => {
      table.addPool(pool => {
        pool.rolls = 1
        pool.addItem('tfc:ore/lapis_lazuli',1)
        })
      })
    })
  }) 
const diamondOres = ["minecraft:diamond_ore", "minecraft:deepslate_diamond_ore"]
diamondOres.forEach(ore => {
  onEvent('block.loot_tables', event=> {
    event.addBlock(ore, table => {
      table.addPool(pool => {
        pool.rolls = 1
        pool.addItem('tfc:ore/diamond',1)
        })
      })
    })
  }) 
const zincOres = ["create:zinc_ore", "create:deepslate_zinc_ore"]
zincOres.forEach(ore => {
  onEvent('block.loot_tables', event=> {
    event.addBlock(ore, table => {
      table.addPool(pool => {
        pool.rolls = 1
        pool.addItem('tfc:ore/poor_sphalerite',1)
        pool.addItem('tfc:ore/normal_sphalerite',1)
        pool.addItem('tfc:ore/rich_sphalerite',1)
        })
      })
    })
  }) 
const aluminumOres = ["immersiveengineering:ore_aluminum", "immersiveengineering:deepslate_ore_aluminum", "createindustry:bauxite", "agape_space:aluminum_ore"]
aluminumOres.forEach(ore => {
  onEvent('block.loot_tables', event=> {
    event.addBlock(ore, table => {
      table.addPool(pool => {
        pool.rolls = 1
        pool.addItem('tfc_metallum:ore/poor_bauxite',1)
        pool.addItem('tfc_metallum:ore/normal_bauxite',1)
        pool.addItem('tfc_metallum:ore/rich_bauxite',1)
        })
      })
    })
  }) 
const leadOres = ["immersiveengineering:ore_lead", "immersiveengineering:deepslate_ore_lead", "thermal:lead_ore", "thermal:deepslate_lead_ore", "mekanism:lead_ore", "mekanism:deepslate_lead_ore"]
leadOres.forEach(ore => {
  onEvent('block.loot_tables', event=> {
    event.addBlock(ore, table => {
      table.addPool(pool => {
        pool.rolls = 1
        pool.addItem('tfc_metallum:ore/poor_galena',1)
        pool.addItem('tfc_metallum:ore/normal_galena',1)
        pool.addItem('tfc_metallum:ore/rich_galena',1)
        pool.addItem('tfc_ie_addon:ore/poor_lead',1)
        pool.addItem('tfc_ie_addon:ore/normal_lead',1)
        pool.addItem('tfc_ie_addon:ore/rich_lead',1)
        })
      })
    })
  }) 
const tinOres = ["thermal:tin_ore", "thermal:deepslate_tin_ore", "mekanism:tin_ore", "mekanism:deepslate_tin_ore"]
tinOres.forEach(ore => {
  onEvent('block.loot_tables', event=> {
    event.addBlock(ore, table => {
      table.addPool(pool => {
        pool.rolls = 1
        pool.addItem('tfc:ore/poor_cassiterite',1)
        pool.addItem('tfc:ore/normal_cassiterite',1)
        pool.addItem('tfc:ore/rich_cassiterite',1)
        })
      })
    })
  }) 
const osmiumOres = ["mekanism:osmium_ore", "mekanism:deepslate_osmium_ore"]
osmiumOres.forEach(ore => {
  onEvent('block.loot_tables', event=> {
    event.addBlock(ore, table => {
      table.addPool(pool => {
        pool.rolls = 1
        pool.addItem('tfc_metallum:ore/poor_native_osmium',1)
        pool.addItem('tfc_metallum:ore/normal_native_osmium',1)
        pool.addItem('tfc_metallum:ore/rich_native_osmium',1)
        })
      })
    })
  }) 
const silverOres = ["immersiveengineering:ore_silver", "immersiveengineering:deepslate_ore_silver", "thermal:silver_ore", "thermal:deepslate_silver_ore"]
silverOres.forEach(ore => {
  onEvent('block.loot_tables', event=> {
    event.addBlock(ore, table => {
      table.addPool(pool => {
        pool.rolls = 1
        pool.addItem('tfc_ie_addon:ore/poor_native_silver',1)
        pool.addItem('tfc_ie_addon:ore/normal_native_silver',1)
        pool.addItem('tfc_ie_addon:ore/rich_native_silver',1)
        })
      })
    })
  }) 
const nickelOres = ["immersiveengineering:ore_nickel", "immersiveengineering:deepslate_ore_nickel", "thermal:nickel_ore", "thermal:deepslate_nickel_ore"]
nickelOres.forEach(ore => {
  onEvent('block.loot_tables', event=> {
    event.addBlock(ore, table => {
      table.addPool(pool => {
        pool.rolls = 1
        pool.addItem('tfc_ie_addon:ore/poor_garnierite',1)
        pool.addItem('tfc_ie_addon:ore/normal_garnierite',1)
        pool.addItem('tfc_ie_addon:ore/rich_garnierite',1)
        })
      })
    })
  }) 
const uraniumOres = ["immersiveengineering:ore_uranium", "immersiveengineering:deepslate_ore_uranium", "mekanism:uranium_ore", "mekanism:deepslate_uranium_ore"]
nickelOres.forEach(ore => {
  onEvent('block.loot_tables', event=> {
    event.addBlock(ore, table => {
      table.addPool(pool => {
        pool.rolls = 1
        pool.addItem('tfc_metallum:ore/poor_uraninite',1)
        pool.addItem('tfc_metallum:ore/normal_uraninite',1)
        pool.addItem('tfc_metallum:ore/rich_uraninite',1)
        })
      })
    })
  }) 
  onEvent('block.loot_tables', event=> {
    event.addBlock('agape_space:titanium_ore', table => {
      table.addPool(pool => {
        pool.rolls = 1
        pool.addItem('tfc_metallum:ore/poor_rutile',1)
        pool.addItem('tfc_metallum:ore/normal_rutile',1)
        pool.addItem('tfc_metallum:ore/rich_rutile',1)
        })
      })
    })

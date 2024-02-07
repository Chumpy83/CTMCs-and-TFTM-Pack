// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event =>
{
    
    event.create('raw_emu').displayName('Raw Emu').parentModel('kubejs:item/venisonraw').texture('kubejs:item/venison_raw').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('cooked_emu').displayName('Cooked Emu').parentModel('kubejs:item/venisoncooked').texture('kubejs:item/venison_cooked').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('raw_birdmeat').displayName('Raw Birdmeat').parentModel('kubejs:item/venisonraw').texture('kubejs:item/chicken_raw').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('cooked_birdmeat').displayName('Cooked Birdmeat').parentModel('kubejs:item/venisoncooked').texture('kubejs:item/chicken_cooked').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('raw_primate').displayName('Raw Primate').parentModel('kubejs:item/venisonraw').texture('kubejs:item/venison_raw').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('cooked_primate').displayName('Cooked Primate').parentModel('kubejs:item/venisoncooked').texture('kubejs:item/venison_cooked').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('raw_snake').displayName('Raw Snake').parentModel('kubejs:item/eel_meat_raw').texture('kubejs:item/eel_meat_raw').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('cooked_snake').displayName('Cooked Snake').parentModel('kubejs:item/eel_meat_cooked').texture('kubejs:item/eel_meat_cooked').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('raw_shark').displayName('Raw Shark').parentModel('kubejs:item/venisonraw').texture('kubejs:item/venison_raw').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('cooked_shark').displayName('Cooked Shark').parentModel('kubejs:item/venisoncooked').texture('kubejs:item/venison_cooked').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('raw_raccoon').displayName('Raw Raccoon').parentModel('kubejs:item/venisonraw').texture('kubejs:item/venison_raw').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('cooked_raccoon').displayName('Cooked Raccoon').parentModel('kubejs:item/venisoncooked').texture('kubejs:item/venison_cooked').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('raw_anteater').displayName('Raw Anteater').parentModel('kubejs:item/venisonraw').texture('kubejs:item/venison_raw').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('cooked_anteater').displayName('Cooked Anteater').parentModel('kubejs:item/venisoncooked').texture('kubejs:item/venison_cooked').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('raw_badger').displayName('Raw Badger').parentModel('kubejs:item/venisonraw').texture('kubejs:item/venison_raw').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('cooked_badger').displayName('Cooked Badger').parentModel('kubejs:item/venisoncooked').texture('kubejs:item/venison_cooked').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('raw_seal').displayName('Raw Seal').parentModel('kubejs:item/venisonraw').texture('kubejs:item/venison_raw').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('cooked_seal').displayName('Cooked Seal').parentModel('kubejs:item/venisoncooked').texture('kubejs:item/venison_cooked').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('raw_walrus').displayName('Raw Walrus').parentModel('kubejs:item/venisonraw').texture('kubejs:item/venison_raw').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('cooked_walrus').displayName('Cooked Walrus').parentModel('kubejs:item/venisoncooked').texture('kubejs:item/venison_cooked').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('raw_elephant').displayName('Raw Elephant').parentModel('kubejs:item/venisonraw').texture('kubejs:item/venison_raw').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('cooked_elephant').displayName('Cooked Elephant').parentModel('kubejs:item/venisoncooked').texture('kubejs:item/venison_cooked').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('raw_bison').displayName('Raw Bison').parentModel('kubejs:item/venisonraw').texture('kubejs:item/venison_raw').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('cooked_bison').displayName('Cooked Bison').parentModel('kubejs:item/venisoncooked').texture('kubejs:item/venison_cooked').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('raw_flying_fish').displayName('Raw Flying Fish').parentModel('kubejs:item/crab_meat_raw').texture('kubejs:item/crab_meat_raw').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('cooked_flying_fish').displayName('Cooked Flying Fish').parentModel('kubejs:item/crab_meat_cooked').texture('kubejs:item/crab_meat_cooked').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('raw_rhino').displayName('Raw Rhino').parentModel('kubejs:item/venisonraw').texture('kubejs:item/venison_raw').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('cooked_rhino').displayName('Cooked Rhino').parentModel('kubejs:item/venisoncooked').texture('kubejs:item/venison_cooked').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('raw_giraffe').displayName('Raw Giraffe').parentModel('kubejs:item/venisonraw').texture('kubejs:item/venison_raw').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('cooked_giraffe').displayName('Cooked Giraffe').parentModel('kubejs:item/venisoncooked').texture('kubejs:item/venison_cooked').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('raw_hippo').displayName('Raw Hippo').parentModel('kubejs:item/venisonraw').texture('kubejs:item/venison_raw').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('cooked_hippo').displayName('Cooked Hippo').parentModel('kubejs:item/venisoncooked').texture('kubejs:item/venison_cooked').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('raw_coyote').displayName('Raw Coyote').parentModel('kubejs:item/venisonraw').texture('kubejs:item/venison_raw').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('cooked_coyote').displayName('Cooked Coyote').parentModel('kubejs:item/venisoncooked').texture('kubejs:item/venison_cooked').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('raw_barracuda').displayName('Raw Barracuda').parentModel('kubejs:item/crab_meat_raw').texture('kubejs:item/crab_meat_raw').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('cooked_barracuda').displayName('Cooked Barracuda').parentModel('kubejs:item/crab_meat_cooked').texture('kubejs:item/crab_meat_cooked').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('raw_piranha').displayName('Raw Piranha').parentModel('kubejs:item/crab_meat_raw').texture('kubejs:item/crab_meat_raw').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('cooked_piranha').displayName('Cooked Piranha').parentModel('kubejs:item/crab_meat_cooked').texture('kubejs:item/crab_meat_cooked').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('raw_reptile').displayName('Raw Reptile').parentModel('kubejs:item/venisonraw').texture('kubejs:item/chicken_raw').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('cooked_reptile').displayName('Cooked Reptile').parentModel('kubejs:item/venisoncooked').texture('kubejs:item/chicken_cooked').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('raw_whale').displayName('Raw Whale').parentModel('kubejs:item/venisonraw').texture('kubejs:item/venison_raw').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('cooked_whale').displayName('Cooked Whale').parentModel('kubejs:item/venisoncooked').texture('kubejs:item/venison_cooked').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('raw_grilled_cheese').displayName('Uncooked Grilled Cheese').parentModel('kubejs:item/grilledcheeseitem').texture('kubejs:item/grilledcheeseitem').food(food => {
        food
            .hunger(4)
            .saturation(1)
            .alwaysEdible(false)
    })
        event.create('cooked_grilled_cheese').displayName('Grilled Cheese').parentModel('kubejs:item/grilledcheeseitem').texture('kubejs:item/grilled_cheese').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('marshmallow').displayName('Marshmallow').parentModel('kubejs:item/marshmellowsitem').texture('kubejs:item/marshmellowsitem').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('baked_potato').displayName('Baked Potato').parentModel('kubejs:item/bakedpotatoitem').texture('kubejs:item/bakedpotatoitem').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('chocolate_cookie_dough').displayName('Chocolate Chip Cookie Dough').parentModel('kubejs:item/doughitem').texture('kubejs:item/cookie_dough_chocolate').food(food => {
        food
            .hunger(4)
            .saturation(1)
            .alwaysEdible(false)
    })
    event.create('berry_cookie_dough').displayName('Sweet Berry Cookie Dough').parentModel('kubejs:item/doughitem').texture('kubejs:item/cookie_dough_berry').food(food => {
        food
            .hunger(4)
            .saturation(1)
            .alwaysEdible(false)
    })
    event.create('honey_cookie_dough').displayName('Honey Cookie Dough').parentModel('kubejs:item/doughitem').texture('kubejs:item/cookie_dough_honey').food(food => {
        food
            .hunger(4)
            .saturation(1)
            .alwaysEdible(false)
    })
    event.create('cookie_dough').displayName('Cookie Dough').parentModel('kubejs:item/doughitem').texture('kubejs:item/cookie_dough').food(food => {
        food
            .hunger(4)
            .saturation(1)
            .alwaysEdible(false)
    })
    event.create('pasta').displayName('Pasta').parentModel('kubejs:item/raw_pasta').texture('kubejs:item/pasta').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('raw_dumplings').displayName('Raw Dumplings').parentModel('kubejs:item/dumplings').texture('kubejs:item/raw_dumplings').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('raw_crab_rangoon').displayName('Raw Crab Rangoon').parentModel('kubejs:item/crab_rangoon').texture('kubejs:item/raw_crab_rangoon').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('cooked_ham').displayName('Cooked Ham').parentModel('kubejs:item/ham').texture('kubejs:item/cooked_ham').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('matcha_ice_cream').displayName('Matcha Ice Cream').parentModel('kubejs:item/vanilla_ice_cream').texture('kubejs:item/matcha_ice_cream').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .alwaysEdible(false)
    })
    event.create('raw_honey_glazed_ham').displayName('Uncooked Honey Glazed Ham').parentModel('kubejs:item/ham').texture('kubejs:item/ham')
    event.create('raw_shepherds_pie').displayName('Uncooked Shepherds Pie').parentModel('kubejs:item/shepherds_pie').texture('kubejs:item/raw_shepherds_pie')
    event.create('raw_stuffed_pumpkin').displayName('Uncooked Stuffed Pumpkin').parentModel('kubejs:item/stuffed_pumpkin').texture('kubejs:item/stuffed_pumpkin')
    event.create('raw_roast_chicken').displayName('Uncooked Roasted Chicken').parentModel('kubejs:item/roast_chicken').texture('kubejs:item/raw_roast_chicken')
    event.create('raw_pasta').displayName('Raw Pasta').parentModel('kubejs:item/raw_pasta').texture('kubejs:item/raw_pasta')
    event.create('earthworm').displayName('Earthworm').parentModel('kubejs:item/earthworm').texture('kubejs:item/earthworm')
    event.create('taproot').displayName('Taproot').parentModel('kubejs:item/ediblerootitem').texture('kubejs:item/ediblerootitem')
    event.create('rootball').displayName('Root Ball').parentModel('kubejs:item/rootball').texture('kubejs:item/rootball')
    event.create('grub').displayName('Grub').parentModel('kubejs:item/silkworm').texture('kubejs:item/silkworm')
    event.create('snow_jug').displayName('Ceramic Jug Of Snow').parentModel('tfc:item/ceramic/jug').texture('tfc:item/ceramic/jug_empty').maxStackSize(1).tooltip("A jug full of snow - combine with a torch to melt the snow inside.").maxStackSize(1)
    event.create('metal/file_head/wrought_iron').displayName('Wrought Iron File Head').parentModel('item/metal/file_head/wrought_iron').texture('item/metal/file_head/wrought_iron').maxStackSize(1)
    event.create('metal/file_head/steel').displayName('Steel File Head').parentModel('item/metal/file_head/steel').texture('item/metal/file_head/steel').maxStackSize(1)
    event.create('metal/file_head/black_steel').displayName('Black Steel File Head').parentModel('item/metal/file_head/black_steel').texture('item/metal/file_head/black_steel').maxStackSize(1)
    event.create('metal/file_head/red_steel').displayName('Red Steel File Head').parentModel('item/metal/file_head/red_steel').texture('item/metal/file_head/red_steel').maxStackSize(1)
    event.create('metal/file_head/blue_steel').displayName('Blue Steel File Head').parentModel('item/metal/file_head/blue_steel').texture('item/metal/file_head/blue_steel').maxStackSize(1)
    event.create('metal/file/wrought_iron').displayName('Wrought Iron File').parentModel('item/metal/file/wrought_iron').texture('item/metal/file/wrought_iron').maxStackSize(1)
    event.create('metal/file/steel').displayName('Steel File').parentModel('item/metal/file/steel').texture('item/metal/file/steel').maxStackSize(1)
    event.create('metal/file/black_steel').displayName('Black Steel File').parentModel('item/metal/file/black_steel').texture('item/metal/file/black_steel').maxStackSize(1)
    event.create('metal/file/red_steel').displayName('Red Steel File').parentModel('item/metal/file/red_steel').texture('item/metal/file/red_steel').maxStackSize(1)
    event.create('metal/file/blue_steel').displayName('Blue Steel File').parentModel('item/metal/file/blue_steel').texture('item/metal/file/blue_steel').maxStackSize(1)
    event.create('metal/bolt/wrought_iron').displayName('Small Wrought Iron Stick').parentModel('item/metal/bolt/wrought_iron').texture('item/metal/bolt/wrought_iron').maxStackSize(32)
    event.create('metal/bolt/steel').displayName('Small Steel Bolt Stick').parentModel('item/metal/bolt/steel').texture('item/metal/bolt/steel').maxStackSize(32)
    event.create('metal/bolt/bolt_wrought_iron').displayName('Wrought Iron bolt').parentModel('item/metal/bolt/bolt_wrought_iron').texture('item/metal/bolt/bolt_wrought_iron').maxStackSize(32)
    event.create('metal/bolt/bolt_steel').displayName('Steel bolt').parentModel('item/metal/bolt/bolt_steel').texture('item/metal/bolt/bolt_steel').maxStackSize(32)
    /*
    event.create('acacia_birdcage').displayName('Acacia Birdcage').parentModel('kubejs:item/ash_birdcage').maxStackSize(1)
    event.create('ash_birdcage').displayName('Ash Birdcage').parentModel('kubejs:item/ash_birdcage').texture('kubejs:item/ash_birdcage').maxStackSize(1)
    event.create('aspen_birdcage').displayName('Aspen Birdcage').parentModel('kubejs:item/aspen_birdcage').texture('kubejs:item/aspen_birdcage').maxStackSize(1)
    event.create('birch_birdcage').displayName('Birch Birdcage').parentModel('kubejs:item/birch_birdcage').texture('kubejs:item/birch_birdcage').maxStackSize(1)
    event.create('blackwood_birdcage').displayName('Blackwood Birdcage').parentModel('kubejs:item/blackwood_birdcage').texture('kubejs:item/blackwood_birdcage').maxStackSize(1)
    event.create('chestnut_birdcage').displayName('Chestnut Birdcage').parentModel('kubejs:item/chestnut_birdcage').texture('kubejs:item/chestnut_birdcage').maxStackSize(1)
    event.create('douglas_fir_birdcage').displayName('Douglas Fir Birdcage').parentModel('kubejs:item/douglas_fir_birdcage').texture('kubejs:item/douglas_fir_birdcage').maxStackSize(1)
    event.create('hickory_birdcage').displayName('Hickory Birdcage').parentModel('kubejs:item/hickory_birdcage').texture('kubejs:item/hickory_birdcage').maxStackSize(1)
    event.create('kapok_birdcage').displayName('Kapok Birdcage').parentModel('kubejs:item/kapok_birdcage').texture('kubejs:item/kapok_birdcage').maxStackSize(1)
    event.create('maple_birdcage').displayName('Maple Birdcage').parentModel('kubejs:item/maple_birdcage').texture('kubejs:item/maple_birdcage').maxStackSize(1)
    event.create('oak_birdcage').displayName('Oak Birdcage').parentModel('kubejs:item/oak_birdcage').texture('kubejs:item/oak_birdcage').maxStackSize(1)
    event.create('palm_birdcage').displayName('Palm Birdcage').parentModel('kubejs:item/palm_birdcage').texture('kubejs:item/palm_birdcage').maxStackSize(1)
    event.create('pine_birdcage').displayName('Pine Birdcage').parentModel('kubejs:item/pine_birdcage').texture('kubejs:item/pine_birdcage').maxStackSize(1)
    event.create('rosewood_birdcage').displayName('Rosewood Birdcage').parentModel('kubejs:item/rosewood_birdcage').texture('kubejs:item/rosewood_birdcage').maxStackSize(1)
    event.create('sequoia_birdcage').displayName('Sequoia Birdcage').parentModel('kubejs:item/sequoia_birdcage').texture('kubejs:item/sequoia_birdcage').maxStackSize(1)
    event.create('spruce_birdcage').displayName('Spruce Birdcage').parentModel('kubejs:item/spruce_birdcage').texture('kubejs:item/spruce_birdcage').maxStackSize(1)
    event.create('sycamore_birdcage').displayName('Sycamore Birdcage').parentModel('kubejs:item/sycamore_birdcage').texture('kubejs:item/sycamore_birdcage').maxStackSize(1)
    event.create('white_cedar_birdcage').displayName('White Cedar Birdcage').parentModel('kubejs:item/white_cedar_birdcage').texture('kubejs:item/white_cedar_birdcage').maxStackSize(1)
    event.create('willow_birdcage').displayName('Willow Birdcage').parentModel('kubejs:item/willow_birdcage').texture('kubejs:item/willow_birdcage').maxStackSize(1)
    event.create('eucalyptus_birdcage').displayName('Eucalyptus Birdcage').parentModel('kubejs:item/eucalyptus_birdcage').texture('kubejs:item/eucalyptus_birdcage').maxStackSize(1)
    event.create('mahogany_birdcage').displayName('Mahogany Birdcage').parentModel('kubejs:item/mahogany_birdcage').texture('kubejs:item/mahogany_birdcage').maxStackSize(1)
    event.create('baobab_birdcage').displayName('Baobab Birdcage').parentModel('kubejs:item/baobab_birdcage').texture('kubejs:item/baobab_birdcage').maxStackSize(1)
    event.create('hevea_birdcage').displayName('Hevea Birdcage').parentModel('kubejs:item/hevea_birdcage').texture('kubejs:item/hevea_birdcage').maxStackSize(1)
    event.create('tualang_birdcage').displayName('Tualang Birdcage').parentModel('kubejs:item/tualang_birdcage').texture('kubejs:item/tualang_birdcage').maxStackSize(1)
    event.create('teak_birdcage').displayName('Teak Birdcage').parentModel('kubejs:item/teak_birdcage').texture('kubejs:item/teak_birdcage').maxStackSize(1)
    event.create('cypress_birdcage').displayName('Cypress Birdcage').parentModel('kubejs:item/cypress_birdcage').texture('kubejs:item/cypress_birdcage').maxStackSize(1)
    event.create('fig_birdcage').displayName('Fig Birdcage').parentModel('kubejs:item/fig_birdcage').texture('kubejs:item/fig_birdcage').maxStackSize(1)
    */
})
    onEvent('tfc.data', event => {
        //adding fertilizer values to other composts/fertilizers
        event.addTFCFertilizer('thermal:phytogro', 'n=0.25, p=0.5, k=0.25')
        event.addTFCFertilizer('minecolonies:compost', 'n=0.4, p=0.2, k=0.4')

})    
    onEvent('block.registry', event => {
        event.create('limesand').material('sand').hardness(1.0).displayName('Limesand').tagBlock('minecraft:mineable/shovel')
	    // Register new blocks here
	    // event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})
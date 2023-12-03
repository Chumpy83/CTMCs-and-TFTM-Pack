// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
//	event.create('raw_game').displayName('Raw Game').parentModel('kubejs:item/venisonraw').texture('kubejs:item/venison_raw').food(food => {food.hunger(4).saturation(0)})
//	event.create('cooked_game').displayName('Cooked Game').parentModel('kubejs:item/venisoncooked').texture('kubejs:item/venison_cooked').parentModel('kubejs:item/venisonraw').texture('kubejs:item/venison_raw').food(food => {food.hunger(4).saturation(2)})
//	event.create('raw_fish').displayName('Raw Fish').parentModel('kubejs:item/crab_meat_raw').texture('kubejs:item/crab_meat_raw').parentModel('kubejs:item/venisonraw').texture('kubejs:item/venison_raw').food(food => {food.hunger(4).saturation(0)})
//	event.create('cooked_fish').displayName('Cooked Fish').parentModel('kubejs:item/crab_meat_cooked').texture('kubejs:item/crab_meat_cooked').parentModel('kubejs:item/venisonraw').texture('kubejs:item/venison_raw').food(food => {food.hunger(4).saturation(1)})
})
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
    event.create('grub').displayName('Grub').parentModel('kubejs:item/silkworm').texture('kubejs:item/silkworm')
})
onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})
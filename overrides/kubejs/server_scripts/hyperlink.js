ServerEvents.tags("item", event => {
    const vanillaArmorIds = [
        'minecraft:leather_helmet',
        'minecraft:leather_chestplate',
        'minecraft:leather_leggings',
        'minecraft:leather_boots',

        'minecraft:iron_helmet',
        'minecraft:iron_chestplate',
        'minecraft:iron_leggings',
        'minecraft:iron_boots',

        'minecraft:golden_helmet',
        'minecraft:golden_chestplate',
        'minecraft:golden_leggings',
        'minecraft:golden_boots',

        'minecraft:diamond_helmet',
        'minecraft:diamond_chestplate',
        'minecraft:diamond_leggings',
        'minecraft:diamond_boots',

        'minecraft:turtle_helmet'
    ]
    event.remove("hyperdaimc:essence/battle", vanillaArmorIds)
})

ServerEvents.recipes(event => {
    event.remove({output:"hyperdaimc:game_orb"})

    event.custom({
        "type": "hyperdaimc:shapeless_desk",
        "minecraft": true,
        "result": {
            "item": "hyperdaimc:game_orb"
        },
        "values": [
            "hyperdaimc:god_sigil",
            "hyperdaimc:chemical_max",
            "hyperdaimc:soul",
            "hyperdaimc:fumetsu_left_skull",
            "hyperdaimc:fumetsu_skull",
            "hyperdaimc:fumetsu_right_skull",
            "hyperdaimc:bug_star",
            "hyperdaimc:bug_star_zwei",
            "hyperdaimc:bug_star_drei",
            "#hyperdaimc:gists",
            "#ticex:cores",
            "#l2hostility:trait_item",
            "goety_revelation:ascension_halo",
        ]
    })
})
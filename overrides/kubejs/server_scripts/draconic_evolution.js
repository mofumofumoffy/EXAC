ServerEvents.recipes(event => {
    event.remove({output:"draconicevolution:wyvern_chestpiece"})
    event.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
            "item": "alchemical_power:t5_panakeia_chestplate"
        },
        "ingredients": [
            {
            "item": "draconicevolution:draconium_core"
            },
            {
            "tag": "forge:ingots/draconium"
            },
            {
            "tag": "forge:ingots/draconium"
            },
            {
            "item": "draconicevolution:basic_relay_crystal"
            },
            {
            "item": "draconicevolution:wyvern_energy_core"
            },
            {
            "item": "draconicevolution:basic_relay_crystal"
            }
        ],
        "result": {
            "item": "draconicevolution:wyvern_chestpiece"
        },
        "tier": "WYVERN",
        "total_energy": 8000000
    })
})
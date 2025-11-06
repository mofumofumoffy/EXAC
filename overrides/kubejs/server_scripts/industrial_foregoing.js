ServerEvents.recipes(event => {
    event.remove({output:"industrialforegoing:infinity_nuke"})

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
            "item": "minecraft:tnt"
            },
            {
            "item": "minecraft:tnt"
            },
            {
            "item": "minecraft:tnt"
            },
            {
            "item": "minecraft:tnt"
            },
            {
            "item": "industrialforegoing:range_addon11"
            },
            {
            "item": "minecraft:diamond_block"
            },
            {
            "item": "avaritia:infinity_catalyst"
            },
            {
            "item": "avaritia:infinity_catalyst"
            }
        ],
        "inputFluid": "{Amount:2000,FluidName:\"industrialforegoing:ether_gas\"}",
        "output": {
            "count": 1,
            "item": "industrialforegoing:infinity_nuke",
            "nbt": "{CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:\"biofuel\"},Selected:\"POOR\",Special:0b}"
        },
        "processingTime": 400
    })
})
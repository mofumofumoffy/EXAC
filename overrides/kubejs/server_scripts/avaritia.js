ServerEvents.recipes(event => {
    event.remove({output:"avaritia:infinity_catalyst"})

    event.custom({
    "type": "avaritia:infinity_catalyst",
    "category": "misc",
    "group": "eternal_singularity",
    "ingredients": [
        {
            "item": "minecraft:bedrock"
        },
        {
            "item": "avaritia:crystal_matrix_ingot"
        },
        {
            "item": "avaritia:neutron_ingot"
        },
        {
            "item": "avaritia:cosmic_meatballs"
        },
        {
            "item": "avaritia:ultimate_stew"
        },
        {
            "item": "avaritia:endest_pearl"
        },
        {
            "item": "avaritia:record_fragment"
        },
        {
            "item": "avaritia:eternal_singularity"
        },
        {
            "item": "draconicevolution:chaos_shard"
        },
        {
            "item": "ticex:reconstruction_core"
        },
        {
            "item": "alchemical_power:t6_panakeia"
        }
    ]
    })
})
ServerEvents.recipes(event => {
    event.remove({output:"mekanism:mekasuit_helmet"})
    event.remove({output:"mekanism:mekasuit_bodyarmor"})
    event.remove({output:"mekanism:mekasuit_pants"})
    event.remove({output:"mekanism:mekasuit_boots"})
    event.remove({output:"mekanism:creative_bin"})

    event.shaped({
        "category": "equipment",
        "key": {
            "#": {
            "item": "alchemical_power:t5_panakeia_helmet"
            },
            "A": {
            "item": "mekanism:pellet_polonium"
            },
            "C": {
            "tag": "forge:circuits/ultimate"
            },
            "E": {
            "item": "mekanism:basic_induction_cell"
            },
            "P": {
            "item": "mekanism:hdpe_sheet"
            }
        },
        "pattern": [
            "PCP",
            "P#P",
            "AEA"
        ],
        "result": {
            "item": "mekanism:mekasuit_helmet"
        }
    })

    event.shaped({
        "category": "equipment",
        "key": {
            "#": {
            "item": "alchemical_power:t5_panakeia_chestplate"
            },
            "A": {
            "item": "mekanism:pellet_polonium"
            },
            "C": {
            "tag": "forge:circuits/ultimate"
            },
            "E": {
            "item": "mekanism:basic_induction_cell"
            },
            "P": {
            "item": "mekanism:hdpe_sheet"
            }
        },
        "pattern": [
            "PCP",
            "P#P",
            "AEA"
        ],
        "result": {
            "item": "mekanism:mekasuit_bodyarmor"
        }
    })

    event.shaped({
        "category": "equipment",
        "key": {
            "#": {
            "item": "alchemical_power:t5_panakeia_leggings"
            },
            "A": {
            "item": "mekanism:pellet_polonium"
            },
            "C": {
            "tag": "forge:circuits/ultimate"
            },
            "E": {
            "item": "mekanism:basic_induction_cell"
            },
            "P": {
            "item": "mekanism:hdpe_sheet"
            }
        },
        "pattern": [
            "PCP",
            "P#P",
            "AEA"
        ],
        "result": {
            "item": "mekanism:mekasuit_pants"
        }
    })

    event.shaped({
        "category": "equipment",
        "key": {
            "#": {
            "item": "alchemical_power:t5_panakeia_boots"
            },
            "A": {
            "item": "mekanism:pellet_polonium"
            },
            "C": {
            "tag": "forge:circuits/ultimate"
            },
            "E": {
            "item": "mekanism:basic_induction_cell"
            },
            "P": {
            "item": "mekanism:hdpe_sheet"
            }
        },
        "pattern": [
            "PCP",
            "P#P",
            "AEA"
        ],
        "result": {
            "item": "mekanism:mekasuit_boots"
        }
    })
})
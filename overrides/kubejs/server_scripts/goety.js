ServerEvents.recipes(event => {
    event.remove({id:"goety_revelation:summon_apollyon"})

    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:summon",
        "activation_item": {
            "item": "goety_revelation:broken_halo"
        },
        "craftType": "sabbath",
        "entity_to_summon": "goety_revelation:summon_apollyon",
        "soulCost": 666,
        "duration": 10,
        "ingredients": [
            {
            "item": "goety:heart_of_the_night"
            },
            {
            "item": "alchemical_power:singularity"
            },
            {
            "item": "goety:forbidden_scroll"
            },
            {
            "item": "twilightforest:lamp_of_cinders"
            },
            {
            "item": "fantasy_ending:wither_factor"
            },
            {
            "item": "goety:unholy_blood"
            },
            {
            "item": "goety:shadow_essence"
            },
            {
            "item": "goety:soul_ruby"
            },
            {
            "item": "goety:infernal_tome"
            },
            {
            "tag": "goety:witches_hat"
            },
            {
            "item": "goety:crone_hat"
            },
            {
            "item": "goety:warlock_sash"
            }
        ],
        "result": {
            "item": "goety:jei_dummy/none"
        }
    })
})
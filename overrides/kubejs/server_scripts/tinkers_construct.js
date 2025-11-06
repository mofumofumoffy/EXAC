ServerEvents.recipes(event => {
    event.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "item": "twilightforest:knightmetal_ingot"
        },
        "cast_consumed": true,
        "cooling_time": 83,
        "fluid": {
            "amount": 150,
            "tag": "forge:molten_antimatter"
        },
        "result": "tinkers_advanced:neutronite_ingot"
    })

    event.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "item": "tinkers_advanced:neutronite_ingot"
        },
        "cast_consumed": true,
        "cooling_time": 83,
        "fluid": {
            "amount": 150,
            "tag": "forge:molten_reconstruction_core"
        },
        "result": "tconstruct:knightslime_ingot"
    })
})
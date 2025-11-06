ServerEvents.recipes(event => {
    event.remove({output:"fantasy_ending:wither_factor"})

    event.shaped({
		"pattern": [
		  "ABA",
		  "CDC",
		  "ABA"
		],
		"key": {
		  "A": {
			"item": "minecraft:golden_apple"
		  },
		  "B": {
			"item": "minecraft:echo_shard"
		  },
		  "C": {
			"item": "minecraft:netherite_ingot"
		  },
		  "D": {
			"item": "avaritia:infinity_catalyst"
		  }
		},
		"result": {
		  "item": "fantasy_ending:wither_factor"
		}
	})
})
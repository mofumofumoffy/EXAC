// priority: 0
ServerEvents.recipes(event => {
	event.remove({output:'projectexpansion:transmutation_interface'})
	event.remove({output:"projecte:dm_axe"})
	event.remove({output:"projecte:dm_pick"})
	event.remove({output:"projecte:dm_shovel"})
	event.remove({output:"projecte:dm_sword"})
	event.remove({output:"projecte:dm_hoe"})
	event.remove({output:"projecte:dm_helmet"})
	event.remove({output:"projecte:dm_chestplate"})
	event.remove({output:"projecte:dm_leggings"})
	event.remove({output:"projecte:dm_boots"})

	event.remove({output:"alchemical_power:t4_panakeia_shovel"})

	event.shaped({
		"pattern": [
		  "AA ",
		  "AB ",
		  " C "
		],
		"key": {
		  "A": {
			"item": "projecte:dark_matter"
		  },
		  "B": {
			"item": "alchemical_power:t4_panakeia_axe"
		  },
		  "C": {
			"item": "minecraft:diamond"
		  }
		},
		"result": {
		  "item": "projecte:dm_axe"
		}
	})

	event.shaped({
		"pattern": [
		  "AAA",
		  " B ",
		  " C "
		],
		"key": {
		  "A": {
			"item": "projecte:dark_matter"
		  },
		  "B": {
			"item": "alchemical_power:t4_panakeia_pickaxe"
		  },
		  "C": {
			"item": "minecraft:diamond"
		  }
		},
		"result": {
		  "item": "projecte:dm_pick"
		}
	})

	event.shaped({
		"pattern": [
		  " A ",
		  " B ",
		  " C "
		],
		"key": {
		  "A": {
			"item": "projecte:dark_matter"
		  },
		  "B": {
			"item": "alchemical_power:t4_panakeia_shovel"
		  },
		  "C": {
			"item": "minecraft:diamond"
		  }
		},
		"result": {
		  "item": "projecte:dm_shovel"
		}
	})

	event.shaped({
		"pattern": [
		  " A ",
		  " A ",
		  " B "
		],
		"key": {
		  "A": {
			"item": "projecte:dark_matter"
		  },
		  "B": {
			"item": "alchemical_power:t4_panakeia_sword"
		  }
		},
		"result": {
		  "item": "projecte:dm_sword"
		}
	})

	event.shaped({
		"pattern": [
		  "AA ",
		  " B ",
		  " C "
		],
		"key": {
		  "A": {
			"item": "projecte:dark_matter"
		  },
		  "B": {
			"item": "alchemical_power:t4_panakeia_hoe"
		  },
		  "C": {
			"item": "minecraft:diamond"
		  }
		},
		"result": {
		  "item": "projecte:dm_hoe"
		}
	})

	event.shaped({
		"pattern": [
		  "AAA",
		  "ABA",
		  "   "
		],
		"key": {
		  "A": {
			"item": "projecte:dark_matter"
		  },
		  "B": {
			"item": "alchemical_power:t4_panakeia_helmet"
		  }
		},
		"result": {
		  "item": "projecte:dm_helmet"
		}
	})

	event.shaped({
		"pattern": [
		  "ABA",
		  "AAA",
		  "AAA"
		],
		"key": {
		  "A": {
			"item": "projecte:dark_matter"
		  },
		  "B": {
			"item": "alchemical_power:t4_panakeia_chestplate"
		  }
		},
		"result": {
		  "item": "projecte:dm_chestplate"
		}
	})

	event.shaped({
		"pattern": [
		  "AAA",
		  "ABA",
		  "A A"
		],
		"key": {
		  "A": {
			"item": "projecte:dark_matter"
		  },
		  "B": {
			"item": "alchemical_power:t4_panakeia_leggings"
		  }
		},
		"result": {
		  "item": "projecte:dm_leggings"
		}
	})

	event.shaped({
		"pattern": [
		  "A A",
		  "ABA",
		  "   "
		],
		"key": {
		  "A": {
			"item": "projecte:dark_matter"
		  },
		  "B": {
			"item": "alchemical_power:t4_panakeia_boots"
		  }
		},
		"result": {
		  "item": "projecte:dm_boots"
		}
	})
})
ServerEvents.recipes(event => {

  const craftingRecipeIds = [
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

  const smithingRecipeIds = [
    'minecraft:netherite_helmet_smithing',
    'minecraft:netherite_chestplate_smithing',
    'minecraft:netherite_leggings_smithing',
    'minecraft:netherite_boots_smithing'
  ]

  craftingRecipeIds.forEach(id => {
    event.remove({ id: id })
  })

  smithingRecipeIds.forEach(id => {
    event.remove({ id: id })
  })
})
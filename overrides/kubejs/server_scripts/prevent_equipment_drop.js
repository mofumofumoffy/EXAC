LootJS.modifiers(event => {
    event.addLootTypeModifier(LootType.ENTITY, LootType.ADVANCEMENT_ENTITY)
    .removeLoot(ItemFilter.TOOL)
    .removeLoot(ItemFilter.WEAPON)
    .removeLoot(ItemFilter.ARMOR)
})
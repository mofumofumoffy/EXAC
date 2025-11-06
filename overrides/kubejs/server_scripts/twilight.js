PlayerEvents.advancement(event => {
  let adv = event.advancement.id().toString();

  if (adv === "twilightforest:progress_naga") {
    event.player.tell(`The spell doesn't seem to be breaking. It looks like we have no choice but to continue.`);
    event.player.revokeAdvancement(adv);
  }
});

ServerEvents.tags("item", (event) => {
    event.removeAll("twilightforest:portal/activator");
    event.add("twilightforest:portal/activator", "industrialforegoing:infinity_nuke");
});
PlayerEvents.loggedIn(event => {
    const player = event.getPlayer()
    const playerData = player.persistentData
    const levelData = event.server.persistentData

    if (!levelData.getBoolean("void_started")){
        player.runCommand(`gamerule keepInventory true`)
        player.runCommand(`gamerule doImmediateRespawn true`)
        player.runCommand(`gamerule fallDamage false`)
        levelData.putBoolean("void_started", true)
    }

    
})
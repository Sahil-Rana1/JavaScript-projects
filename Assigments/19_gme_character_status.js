// Q19. Write a game character status system: Health (dead/critical/low/healthy), Mana, Stamina all interact to
// determine available actions.

function character_status(health,mana,stamina){
    let status
    if(health==0){
        status = "Dead ! NO actions available !"
        return `${status}`
    }else if(health>=1 && health<=20){
        status ="Critical !"
    }else if(health>=21 && health<=60){
        status ="low !"
    }else if(health>=61 && health<=100){
        status ="Healthy"
    }
    
    // mana
    let manaStatus
    if(mana=="high"){
        manaStatus="Can cast strong attcaks !"
    }else if(mana=="medium"){
        manaStatus="Can cast basic sells !"
    }else{
        manaStatus="NO magic or very limited spells !"
    }
    


    // Stemina
    let staminaStatus
    if(stamina=="high"){
        staminaStatus="can run, attack, dodge!"
    }else if(mana=="medium"){
        staminaStatus="normal attacks only !"
    }else{
        staminaStatus="very limited movement!"
    }
    
    let result = status + manaStatus + staminaStatus
    return result
    
}

console.log(character_status(0, "high", "high")); 
console.log(character_status(15, "medium", "low"));
console.log(character_status(70, "high", "high"));
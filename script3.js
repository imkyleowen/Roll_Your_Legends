document.getElementById('spinbutton3').addEventListener('click', spinSlot);

function spinSlot() {
    const images = [
       'Runes/ArcaneComet.png',
       'Runes/Conqueror.png',
       'Runes/DarkHarvest.png',
       'Runes/DarkHarvest.png',
       'Runes/Electrocute.png',
       'Runes/FirstStrike.png',
       'Runes/FleetFootwork.png',
       'Runes/GlacialAugment.png',
       'Runes/GraspOfTheUndying.png',
       'Runes/Guardian.png',
       'Runes/HailOfBlades.png',
       'Runes/LethalTempoTemp.png',
       'Runes/PhaseRush.png',
       'Runes/PressTheAttack.png',
       'Runes/SummonAery.png',
       'Runes/UnsealedSpellbook.png',
       'Runes/VeteranAftershock.png'

    ];
    
    const randomIndex = Math.floor(Math.random() * images.length);

    
    const slotImage = document.getElementById('slotsss').querySelector('img');
    slotImage.src = images[randomIndex];

}

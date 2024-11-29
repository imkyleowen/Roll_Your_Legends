document.getElementById('spinButton').addEventListener('click', spinSlots);

function spinSlots() {
    const images = [
        'items/Abyssal_Mask.png',
        'items/Anathemas_Chain.png',
        'items/Archangels_Staff.png',
        'items/Ardent_Censer.png',
        'items/Axiom_Arc.png',
        'items/Banshees_Veil.png',
        'items/Black_Cleaver.png',
        'items/Blackfire_Torch.png',
        'items/Blade_Of_The_Ruined_King.png',
        'items/Bloodthirster.png',
        'items/Celestial_Opposition.png',
        'items/Chainpunk_Chainsword.png',
        'items/Cosmic_Drive.png',
        'items/Cryptbloom.png',
        'items/Dawncore.png',
        'items/Dead_Mans_Plate.png',
        'items/Dream_Maker.png',
        'items/Death_Dance.png',
        'items/Echoes_Of_Helia.png',
        'items/Eclpise.png',
        'items/Edge_Of_Night.png',
        'items/Essence_Reaver.png',
        'items/Experimental_Hexplate.png',
        'items/Fimbulwinter.png',
        'items/Force_Of_Nature.png',
        'items/Guardian_Angel.png',
        'items/Guinsoos_Rageblade.png',
        'items/Heartsteel.png',
        'items/Hextech_Rocketblade.png',
        'items/Hollow_Radiance.png',
        'items/Horizon_Focus.png',
        'items/Hubris.png',
        'items/Hullbreaker.png',
        'items/Iceborn_Gauntlet.png',
        'items/Immortal_Shieldbow.png',
        'items/Imperial_Mandate.png',
        'items/Infinity_Edge.png',
        'items/JakSho,_The_Protean.png',
        'items/Kaenic_Rookern.png',
        'items/Knights_Vow.png',
        'items/Kraken_Slayer.png',
        'items/Liandrys_Torment.png',
        'items/Lich_Bane.png',
        'items/Locket_Of_The_Iron_Solari.png',
        'items/Lord_Dominiks_Regards.png',
        'items/Ludens_Companion.png',
        'items/Malignance.png',
        'items/Manamune.png',
        'items/Maw_Of_Malmortius.png',
        'items/Mejais_Souleater.png',
        'items/Mercurial_Scimitar.png',
        'items/Mikaels_Blessing.png',
        'items/Moonstone_Renewer.png',
        'items/Morellonomicon.png',
        'items/Mortal_Reminder.png',
        'items/Nashors_Tooth.png',
        'items/Navoris_Flickerblade.png',
        'items/Opportunity.png',
        'items/Overlords_Bloodmail.png',
        'items/Phantom_Dancer.png',
        'items/Profane_Hydra.png',
        'items/Rabadons_Deathcap.png',
        'items/Randuins_Omen.png',
        'items/Rapid_Firecannon.png',
        'items/Ravenous_Hydra.png',
        'items/Redemption.png',
        'items/Riftmaker.png',
        'items/Rod_Of_Ages.png',
        'items/Runaans_Hurricane.png',
        'items/Rylais_Crystal_Scepter.png',
        'items/Serpents_Fang.png',
        'items/Seryldas_Grudge.png',
        'items/Shadowflame.png',
        'items/Shurelyas_Battlesong.png',
        'items/Spear_Of_Shojin.png',
        'items/Spirit_Visage.png',
        'items/Staff_Of_Flowing_Water.png',
        'items/Statikk_Shiv.png',
        'items/Steraks_Gage.png',
        'items/Stormsurge.png',
        'items/Stridebreaker.png',
        'items/Sundered_Sky.png',
        'items/Sunfire_Aegis.png',
        'items/Terminus.png',
        'items/The_Collector.png',
        'items/Thornmail.png',
        'items/Titanic_Hydra.png',
        'items/Trinity_Force.png',
        'items/Umbral_Glaive.png',
        'items/Uneding_Despair.png',
        'items/Void_Staff.png',
        'items/Voltaic_Cyclosword.png',
        'items/Warmogs_Armor.png',
        'items/Wits_end.png',
        'items/Youmuus_Ghostblade.png',
        'items/Yun_Tal_Wildarrows.png',
        'items/Zekes_Convergence.png',
        'items/Zhonyas_Hourglass.png',

    ];

    const slotIds = ['slot1', 'slot2', 'slot3', 'slot4', 'slot5', 'slot6'];
    const usedImages = [];


    slotIds.forEach(slotId => {
        
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * images.length);
        } while (usedImages.includes(randomIndex));

       
        usedImages.push(randomIndex);

        
        const slotImage = document.getElementById(slotId).querySelector('img');
        slotImage.src = images[randomIndex];
    });
}


document.getElementById('spinbutton2').addEventListener('click', spinSlot);

function spinSlot() {
    const images = [
        'Roles/Bottom_Lane.jpg',
        'Roles/Jungle.jpg',
        'Roles/Mid_Lane.jpg',
        'Roles/Support.jpg',
        'Roles/Top_Lane.jpg'

    ];
    
    const randomIndex = Math.floor(Math.random() * images.length);

    
    const slotImage = document.getElementById('slotss').querySelector('img');
    slotImage.src = images[randomIndex];

}

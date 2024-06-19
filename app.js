document.addEventListener('DOMContentLoaded', () => {
    const superLikeBtn = document.getElementById('super-like');
    const likeBtn = document.getElementById('like');
    const passBtn = document.getElementById('pass');
    const profileCard = document.getElementById('profile-card');
    const results = document.getElementById('results');
    const superLikedResults = document.getElementById('super-liked-results').querySelector('.results-list');
    const likedResults = document.getElementById('liked-results').querySelector('.results-list');
    const passedResults = document.getElementById('passed-results').querySelector('.results-list');
    const resetButton = document.getElementById('reset-button');
    const infoIcon = document.getElementById('info-icon');
    const infoPopup = document.getElementById('info-popup');
    const closePopup = document.getElementById('close-popup');
    const profilePic = document.getElementById('profile-pic');
    const profileName = document.getElementById('profile-name');
    const startButton = document.getElementById('start-button');
    const startScreen = document.getElementById('start-screen');
    const header = document.getElementById('header');
    const profileCardContainer = document.getElementById('profile-card-container');

    let currentProfileIndex = 0;

    const profiles = [
{ name: "Adu Awiti", picture: "screenshots/pic1.png", link: "instagram.com" },
{ name: "Ahmad Abu Mousa", picture: "screenshots/pic2.png", link: "instagram.com" },
{ name: "Ahmad Javed", picture: "screenshots/pic3.png", link: "instagram.com" },
{ name: "Ahmed Nasser", picture: "screenshots/pic4.png", link: "instagram.com" },
{ name: "Ahmed Rafik Larek", picture: "screenshots/pic5.png", link: "instagram.com" },
{ name: "Ahmed Rami Chettah", picture: "screenshots/pic6.png", link: "instagram.com" },
{ name: "Ahsan Shafi", picture: "screenshots/pic7.png", link: "instagram.com" },
{ name: "Aidyn Onggar", picture: "screenshots/pic8.png", link: "instagram.com" },
{ name: "Ak Ram", picture: "screenshots/pic9.png", link: "instagram.com" },
{ name: "Akar Ibrahim", picture: "screenshots/pic10.png", link: "instagram.com" },
{ name: "Akbota Assainova", picture: "screenshots/pic11.png", link: "instagram.com" },
{ name: "Akira K.", picture: "screenshots/pic12.png", link: "instagram.com" },
{ name: "Akram Assaoui", picture: "screenshots/pic13.png", link: "instagram.com" },
{ name: "Alanis Smaha Cordeiro", picture: "screenshots/pic14.png", link: "instagram.com" },
{ name: "Alejandra Solano", picture: "screenshots/pic15.png", link: "instagram.com" },
{ name: "Aleksa Majstorović", picture: "screenshots/pic16.png", link: "instagram.com" },
{ name: "Aleksander Knutsen", picture: "screenshots/pic17.png", link: "instagram.com" },
{ name: "Alessandro Dutto", picture: "screenshots/pic18.png", link: "instagram.com" },
{ name: "Alex Garzon", picture: "screenshots/pic19.png", link: "instagram.com" },
{ name: "Alexandra Alfaro", picture: "screenshots/pic20.png", link: "instagram.com" },
{ name: "Alexandra Fallas", picture: "screenshots/pic21.png", link: "instagram.com" },
{ name: "Ali Rahwanji", picture: "screenshots/pic22.png", link: "instagram.com" },
{ name: "Alina Mehmeti", picture: "screenshots/pic23.png", link: "instagram.com" },
{ name: "Alua Karimova", picture: "screenshots/pic24.png", link: "instagram.com" },
{ name: "Amdjed Ellili", picture: "screenshots/pic25.png", link: "instagram.com" },
{ name: "Amina Wissame Hadjeris", picture: "screenshots/pic26.png", link: "instagram.com" },
{ name: "Amir Ghemired", picture: "screenshots/pic27.png", link: "instagram.com" },
{ name: "Amnam Hussain", picture: "screenshots/pic28.png", link: "instagram.com" },
{ name: "Ana Laura Gamboa Aguilar", picture: "screenshots/pic29.png", link: "instagram.com" },
{ name: "Anastasia Mavrova", picture: "screenshots/pic30.png", link: "instagram.com" },
{ name: "Anastasija Aleksic", picture: "screenshots/pic31.png", link: "instagram.com" },
{ name: "Angelina Schwarz", picture: "screenshots/pic32.png", link: "instagram.com" },
{ name: "Antonella  Zanabria", picture: "screenshots/pic33.png", link: "instagram.com" },
{ name: "Arina Liutskanova", picture: "screenshots/pic34.png", link: "instagram.com" },
{ name: "Arselane Toufik Seridi", picture: "screenshots/pic35.png", link: "instagram.com" },
{ name: "Aruzhan Yerbolatovaa", picture: "screenshots/pic36.png", link: "instagram.com" },
{ name: "Asama Farman", picture: "screenshots/pic37.png", link: "instagram.com" },
{ name: "Asel Talantbek kyzy", picture: "screenshots/pic38.png", link: "instagram.com" },
{ name: "athar radwan", picture: "screenshots/pic39.png", link: "instagram.com" },
{ name: "Aya malak Lelafi.jpeg", picture: "screenshots/pic40.png", link: "instagram.com" },
{ name: "Ayaulym Kondybaeva", picture: "screenshots/pic41.png", link: "instagram.com" },
{ name: "Ayesha Khan", picture: "screenshots/pic42.png", link: "instagram.com" },
{ name: "Babak Feiz", picture: "screenshots/pic43.png", link: "instagram.com" },
{ name: "Balázs Komáromi", picture: "screenshots/pic44.png", link: "instagram.com" },
{ name: "Bambou Vert", picture: "screenshots/pic45.png", link: "instagram.com" },
{ name: "Bedalia Abdelkader", picture: "screenshots/pic46.png", link: "instagram.com" },
{ name: "Bilal Mansoor", picture: "screenshots/pic47.png", link: "instagram.com" },
{ name: "Bouichou Said", picture: "screenshots/pic48.png", link: "instagram.com" },
{ name: "Brahim Beyamin", picture: "screenshots/pic49.png", link: "instagram.com" },
{ name: "Casanovas Barraso Vicenç", picture: "screenshots/pic50.png", link: "instagram.com" },
{ name: "Ceasar Njuguna", picture: "screenshots/pic51.png", link: "instagram.com" },
{ name: "Chimuka Singuwa", picture: "screenshots/pic52.png", link: "instagram.com" },
{ name: "Csenge Pap", picture: "screenshots/pic53.png", link: "instagram.com" },
{ name: "Dania Makki", picture: "screenshots/pic54.png", link: "instagram.com" },
{ name: "Danny Martinez Ramirez", picture: "screenshots/pic55.png", link: "instagram.com" },
{ name: "Dilay Veziroğlu", picture: "screenshots/pic56.png", link: "instagram.com" },
{ name: "Dominik Weikelsdorfer", picture: "screenshots/pic57.png", link: "instagram.com" },
{ name: "Einas Alaajib", picture: "screenshots/pic58.png", link: "instagram.com" },
{ name: "Elvira Grekova", picture: "screenshots/pic59.png", link: "instagram.com" },
{ name: "Emalika Ayomani Munasinghe Arachchilage", picture: "screenshots/pic60.png", link: "instagram.com" },
{ name: "Emilija Simo", picture: "screenshots/pic61.png", link: "instagram.com" },
{ name: "Emma Aguirre Reyes", picture: "screenshots/pic62.png", link: "instagram.com" },
{ name: "Erblina Krasniqi", picture: "screenshots/pic63.png", link: "instagram.com" },
{ name: "Eren Caredar", picture: "screenshots/pic64.png", link: "instagram.com" },
{ name: "Esfira", picture: "screenshots/pic65.png", link: "instagram.com" },
{ name: "Esmiralda Mamedova", picture: "screenshots/pic66.png", link: "instagram.com" },
{ name: "Evanthia Kokkinidou", picture: "screenshots/pic67.png", link: "instagram.com" },
{ name: "Fahad Khan", picture: "screenshots/pic68.png", link: "instagram.com" },
{ name: "Farah Boudoua", picture: "screenshots/pic69.png", link: "instagram.com" },
{ name: "Felipe Ritchie", picture: "screenshots/pic70.png", link: "instagram.com" },
{ name: "Feriel Hadj Sadok", picture: "screenshots/pic71.png", link: "instagram.com" },
{ name: "Francesco Acciaro", picture: "screenshots/pic72.png", link: "instagram.com" },
{ name: "Gabriela Mihova", picture: "screenshots/pic73.png", link: "instagram.com" },
{ name: "Ganjina", picture: "screenshots/pic74.png", link: "instagram.com" },
{ name: "Genta Parduzi", picture: "screenshots/pic75.png", link: "instagram.com" },
{ name: "Gisela Pereira", picture: "screenshots/pic76.png", link: "instagram.com" },
{ name: "Gokhan Sen", picture: "screenshots/pic77.png", link: "instagram.com" },
{ name: "Gülüzar Sevik", picture: "screenshots/pic78.png", link: "instagram.com" },
{ name: "Hadil Hani", picture: "screenshots/pic79.png", link: "instagram.com" },
{ name: "Hagen Mueller", picture: "screenshots/pic80.png", link: "instagram.com" },
{ name: "Hazha Abdulrahman", picture: "screenshots/pic81.png", link: "instagram.com" },
{ name: "Helen Abdullah", picture: "screenshots/pic82.png", link: "instagram.com" },
{ name: "Hilal Beydemir", picture: "screenshots/pic83.png", link: "instagram.com" },
{ name: "Hitesh", picture: "screenshots/pic84.png", link: "instagram.com" },
{ name: "Homam Alfaris", picture: "screenshots/pic85.png", link: "instagram.com" },
{ name: "Ilich Miguel Aguirre Idrovo", picture: "screenshots/pic86.png", link: "instagram.com" },
{ name: "Iman Hassen", picture: "screenshots/pic87.png", link: "instagram.com" },
{ name: "Irving De Leon", picture: "screenshots/pic88.png", link: "instagram.com" },
{ name: "Isaac Dominguez", picture: "screenshots/pic89.png", link: "instagram.com" },
{ name: "Ivan Khomyk", picture: "screenshots/pic90.png", link: "instagram.com" },
{ name: "Jamie Born", picture: "screenshots/pic91.png", link: "instagram.com" },
{ name: "Jennyfer Maoreno Navarrete", picture: "screenshots/pic92.png", link: "instagram.com" },
{ name: "Jimmy Mok", picture: "screenshots/pic93.png", link: "instagram.com" },
{ name: "Joshua ASARE", picture: "screenshots/pic94.png", link: "instagram.com" },
{ name: "Josip Maradin", picture: "screenshots/pic95.png", link: "instagram.com" },
{ name: "Kabeer", picture: "screenshots/pic96.png", link: "instagram.com" },
{ name: "Katarina Nastić", picture: "screenshots/pic97.png", link: "instagram.com" },
{ name: "Kejsida Ponari", picture: "screenshots/pic98.png", link: "instagram.com" },
{ name: "Khafiz Khader", picture: "screenshots/pic99.png", link: "instagram.com" },
{ name: "Kirubel Afrassa", picture: "screenshots/pic100.png", link: "instagram.com" },
{ name: "komronbek alisherov", picture: "screenshots/pic101.png", link: "instagram.com" },
{ name: "labib rkr", picture: "screenshots/pic102.png", link: "instagram.com" },
{ name: "Lanin Muhsin", picture: "screenshots/pic103.png", link: "instagram.com" },
{ name: "Lirije Maqastena", picture: "screenshots/pic104.png", link: "instagram.com" },
{ name: "Lizeth Correa", picture: "screenshots/pic105.png", link: "instagram.com" },
{ name: "Ljubica Stojanović", picture: "screenshots/pic106.png", link: "instagram.com" },
{ name: "Lorenzo Ferrante", picture: "screenshots/pic107.png", link: "instagram.com" },
{ name: "Mahdi Sedira", picture: "screenshots/pic108.png", link: "instagram.com" },
{ name: "Mahmoud Ishag", picture: "screenshots/pic109.png", link: "instagram.com" },
{ name: "Malek Mlayah", picture: "screenshots/pic110.png", link: "instagram.com" },
{ name: "Malek Naoui", picture: "screenshots/pic111.png", link: "instagram.com" },
{ name: "Manar Ieghezad", picture: "screenshots/pic112.png", link: "instagram.com" },
{ name: "Manel Ats", picture: "screenshots/pic113.png", link: "instagram.com" },
{ name: "Mariam Yechy", picture: "screenshots/pic114.png", link: "instagram.com" },
{ name: "Marianna Malaireu", picture: "screenshots/pic115.png", link: "instagram.com" },
{ name: "Marijana Nedeljković", picture: "screenshots/pic116.png", link: "instagram.com" },
{ name: "Marina Delagrammatika", picture: "screenshots/pic117.png", link: "instagram.com" },
{ name: "Marisca Glack", picture: "screenshots/pic118.png", link: "instagram.com" },
{ name: "Martha Dimou", picture: "screenshots/pic119.png", link: "instagram.com" },
{ name: "Masa", picture: "screenshots/pic120.png", link: "instagram.com" },
{ name: "Md Shahidul Islam", picture: "screenshots/pic121.png", link: "instagram.com" },
{ name: "Mehroj Islomov", picture: "screenshots/pic122.png", link: "instagram.com" },
{ name: "Mekhmed Saadakeev", picture: "screenshots/pic123.png", link: "instagram.com" },
{ name: "Merna Atef", picture: "screenshots/pic124.png", link: "instagram.com" },
{ name: "Mert Bayça", picture: "screenshots/pic125.png", link: "instagram.com" },
{ name: "Merzouk Farah", picture: "screenshots/pic126.png", link: "instagram.com" },
{ name: "Milica Stanikic", picture: "screenshots/pic127.png", link: "instagram.com" },
{ name: "Miran Hama-khan", picture: "screenshots/pic128.png", link: "instagram.com" },
{ name: "Miranda Gonzalez Wicky", picture: "screenshots/pic129.png", link: "instagram.com" },
{ name: "Mohamed Ali KAOUACH", picture: "screenshots/pic130.png", link: "instagram.com" },
{ name: "Mohamed Dellali", picture: "screenshots/pic131.png", link: "instagram.com" },
{ name: "Mohamed jlidi", picture: "screenshots/pic132.png", link: "instagram.com" },
{ name: "Mohamed Lamine Chekor", picture: "screenshots/pic133.png", link: "instagram.com" },
{ name: "Mohamed Souhil", picture: "screenshots/pic134.png", link: "instagram.com" },
{ name: "Muhammad Asif Khan", picture: "screenshots/pic135.png", link: "instagram.com" },
{ name: "Mujtaba Ahadyar", picture: "screenshots/pic136.png", link: "instagram.com" },
{ name: "Murathan Özsoy", picture: "screenshots/pic137.png", link: "instagram.com" },
{ name: "Nabeel Mohammed Abdul-Mumin", picture: "screenshots/pic138.png", link: "instagram.com" },
{ name: "Nada Lylia Mehdi", picture: "screenshots/pic139.png", link: "instagram.com" },
{ name: "Nathaly Martinez", picture: "screenshots/pic140.png", link: "instagram.com" },
{ name: "Nigora Baymuminova", picture: "screenshots/pic141.png", link: "instagram.com" },
{ name: "Nuray Kazhibekova", picture: "screenshots/pic142.png", link: "instagram.com" },
{ name: "Oleksandra Kosenko", picture: "screenshots/pic143.png", link: "instagram.com" },
{ name: "Ouertani Fatma", picture: "screenshots/pic144.png", link: "instagram.com" },
{ name: "Oussama Daâs.jpeg", picture: "screenshots/pic145.png", link: "instagram.com" },
{ name: "Paula Karolina Rodriguez Parga", picture: "screenshots/pic146.png", link: "instagram.com" },
{ name: "Perizat Urazmetova", picture: "screenshots/pic147.png", link: "instagram.com" },
{ name: "Quyen Nguyen", picture: "screenshots/pic148.png", link: "instagram.com" },
{ name: "Rajdeep Dehne", picture: "screenshots/pic149.png", link: "instagram.com" },
{ name: "Ramsha Munir.jpeg", picture: "screenshots/pic150.png", link: "instagram.com" },
{ name: "Rania Aouida", picture: "screenshots/pic151.png", link: "instagram.com" },
{ name: "Rozh Ares", picture: "screenshots/pic152.png", link: "instagram.com" },
{ name: "Ruth Sarpong", picture: "screenshots/pic153.png", link: "instagram.com" },
{ name: "Ruzimad Ehsoni", picture: "screenshots/pic154.png", link: "instagram.com" },
{ name: "Saidobid Saidov", picture: "screenshots/pic155.png", link: "instagram.com" },
{ name: "Saif Eddine", picture: "screenshots/pic156.png", link: "instagram.com" },
{ name: "Salman Ahmed Khan", picture: "screenshots/pic157.png", link: "instagram.com" },
{ name: "Saman Baig", picture: "screenshots/pic158.png", link: "instagram.com" },
{ name: "Samuel Brafi", picture: "screenshots/pic159.png", link: "instagram.com" },
{ name: "Sara Zouari", picture: "screenshots/pic160.png", link: "instagram.com" },
{ name: "Sebastian Garzon", picture: "screenshots/pic161.png", link: "instagram.com" },
{ name: "Seifaldeen Mashhady", picture: "screenshots/pic162.png", link: "instagram.com" },
{ name: "shafira widya", picture: "screenshots/pic163.png", link: "instagram.com" },
{ name: "Shakhruz Tolibov", picture: "screenshots/pic164.png", link: "instagram.com" },
{ name: "Sherif Yakoub", picture: "screenshots/pic165.png", link: "instagram.com" },
{ name: "Siyovush Nuriddinzoda", picture: "screenshots/pic166.png", link: "instagram.com" },
{ name: "Skander Othmani", picture: "screenshots/pic167.png", link: "instagram.com" },
{ name: "Sofija Boskovic", picture: "screenshots/pic168.png", link: "instagram.com" },
{ name: "Tamirat Lakew", picture: "screenshots/pic169.png", link: "instagram.com" },
{ name: "tarlan hasanli", picture: "screenshots/pic170.png", link: "instagram.com" },
{ name: "Teodora Vukanac", picture: "screenshots/pic171.png", link: "instagram.com" },
{ name: "Thanawit Karnjanapinyoying", picture: "screenshots/pic172.png", link: "instagram.com" },
{ name: "Theodora Siettou", picture: "screenshots/pic173.png", link: "instagram.com" },
{ name: "Umar Khalid", picture: "screenshots/pic174.png", link: "instagram.com" },
{ name: "Ümithan Güldemir", picture: "screenshots/pic175.png", link: "instagram.com" },
{ name: "Uros Petronijevic", picture: "screenshots/pic176.png", link: "instagram.com" },
{ name: "Usama Saleem", picture: "screenshots/pic177.png", link: "instagram.com" },
{ name: "Vasiliki Marinaki", picture: "screenshots/pic178.png", link: "instagram.com" },
{ name: "Vivienne Botter", picture: "screenshots/pic179.png", link: "instagram.com" },
{ name: "Vladan Markišić", picture: "screenshots/pic180.png", link: "instagram.com" },
{ name: "Wafaa Taleb", picture: "screenshots/pic181.png", link: "instagram.com" },
{ name: "Wassim Loudini", picture: "screenshots/pic182.png", link: "instagram.com" },
{ name: "Yasmina Draissi", picture: "screenshots/pic183.png", link: "instagram.com" },
{ name: "Yavuz Ulas Orhan", picture: "screenshots/pic184.png", link: "instagram.com" },
{ name: "YeabsiraYetagessu", picture: "screenshots/pic185.png", link: "instagram.com" },
{ name: "Yigit Bakir", picture: "screenshots/pic186.png", link: "instagram.com" },
{ name: "Younis Ebaid", picture: "screenshots/pic187.png", link: "instagram.com" },
{ name: "Youssef Bouguerba", picture: "screenshots/pic188.png", link: "instagram.com" },
{ name: "Youssef Idoudbib", picture: "screenshots/pic189.png", link: "instagram.com" },
{ name: "Zeynep Arslan", picture: "screenshots/pic190.png", link: "instagram.com" },
{ name: "Zhansaya Sabitova", picture: "screenshots/pic191.png", link: "instagram.com" },
{ name: "Zhulia Omar", picture: "screenshots/pic192.png", link: "instagram.com" },


        // Add more profiles here
    ];

    // Function to shuffle an array (Fisher-Yates algorithm)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Shuffle the profiles array before the game starts
    shuffleArray(profiles);

    function loadProfile() {
        if (currentProfileIndex >= profiles.length) {
            displayResults();
            return;
        }

        const currentProfile = profiles[currentProfileIndex];
        profilePic.src = currentProfile.picture;
        profileName.textContent = currentProfile.name;

        profilePic.style.transform = 'scale(0)'; // Initial scale down

        profilePic.onload = () => {
            profilePic.style.transform = 'scale(1)';
            setTimeout(() => {
                profileCard.style.display = 'block';
                profileCard.classList.add('fadeIn');
            }, 10); 
        };
    }

    function handleAction(action, animationClass) {
        profileCard.classList.add(animationClass);
        profileCard.classList.remove('fadeIn');

        setTimeout(() => {
            profileCard.classList.remove(animationClass);
            if (action === 'super-like') {
                superLikedResults.innerHTML += `<li>${profiles[currentProfileIndex].name}</li>`;
            } else if (action === 'like') {
                likedResults.innerHTML += `<li>${profiles[currentProfileIndex].name}</li>`;
            } else {
                passedResults.innerHTML += `<li>${profiles[currentProfileIndex].name}</li>`;
            }
            currentProfileIndex++;
            loadProfile();
        }, 1000); // Adjust animation duration as needed
    }

    function displayResults() {
        profileCardContainer.style.display = 'none';
        results.style.display = 'block';
        results.classList.add('fadeIn');
    }

    superLikeBtn.addEventListener('click', () => handleAction('super-like', 'flash'));
    likeBtn.addEventListener('click', () => handleAction('like', 'swipeRight'));
    passBtn.addEventListener('click', () => handleAction('pass', 'swipeLeft'));

    resetButton.addEventListener('click', () => {
        results.style.display = 'none';
        superLikedResults.innerHTML = '';
        likedResults.innerHTML = '';
        passedResults.innerHTML = '';
        currentProfileIndex = 0;
        profileCardContainer.style.display = 'block'; // Show profile card again
        shuffleArray(profiles); // Reshuffle profiles on reset
        loadProfile();
    });

    infoIcon.addEventListener('click', () => {
        infoPopup.style.display = 'block';
    });

    closePopup.addEventListener('click', () => {
        infoPopup.style.display = 'none';
    });

    const viewProfileButton = document.getElementById('view-profile');
    viewProfileButton.addEventListener('click', () => {
        window.open(profiles[currentProfileIndex].link, '_blank');
    });

    startButton.addEventListener('click', () => {
        startScreen.style.display = 'none';
        header.style.display = 'block';
        profileCardContainer.style.display = 'block'; 
        loadProfile(); 
    });
});

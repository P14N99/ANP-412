var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoicDE0eW4iLCJhIjoiY2xoYTNldmxhMDk2ODNrbnFtMTd6cDlpbiJ9.o1zvSmHu8UJab3L0ifF5Ng',
    showMarkers: true,
    markerColor: '#3FB1CE',

    inset: true,
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'Beijing Landmarks',
    subtitle: 'The focus is on Beijing ancient architecture and exploring its history',
    chapters: [
        {
            id: 'my-story-chapter-1',
            alignment: 'left',
            hidden: false,
            title: 'Forbidden City',
            description: 'A royal palace of the Ming and Qing Dynasties of China, it was completed in 1420 and 24 emperors lived here. The Forbidden City in Beijing is 961 meters long from north to south and 753 meters wide from east to west, surrounded by walls 10 meters high on all sides and a moat 52 meters wide outside the city. The Beijing Forbidden City is one of the largest and best-preserved wooden structures of ancient architecture in the world.',
            location: {
                center: [116.39073, 39.91567],
                zoom: 15.81,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'my-story-chapter-2',
            alignment: 'right',
            hidden: false,
            title: 'Yuanmingyuan',
            description: 'Yuanmingyuan, a large royal garden of the Qing Dynasty in China, covers an area of more than 350 hectares, including a water surface area of about 140 hectares, consisting of Yuanmingyuan, Qichunyuan and Changchunyuan, while Yuanmingyuan is the largest, so it is collectively called Yuanmingyuan. The destruction of Yuanmingyuan was based on the invasion, during which a large number of antiquities were lost, the landscape, and most of the gardens were burned down, and only after the founding of the Peoples Republic of China was there an opportunity to preserve them.',
            location: {
                center: [116.30391, 40.00017],
                zoom: 16.30,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'my-story-chapter-3',
            alignment: 'left',
            hidden: false,
            title: 'Tiananmen Square',
            description: 'Tiananmen Square was the main gate of the imperial city of Beijing during the Ming and Qing dynasties, and was built in 1417, the 15th year of Yongle in the Ming Dynasty. Its total height is 34.7 meters. On October 1, 1949, the founding ceremony of the Peoples Republic of China was held here, so it is of great importance to China, and the annual army parade starts from Tiananmen Square.',
            location: {
                center: [116.39132, 39.90467],
                zoom: 16.76,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'my-story-chapter-4',
            alignment: 'right',
            hidden: false,
            title: 'Badaling Great Wall',
            description: 'The Badaling Great Wall, located at the northern entrance of the ancient Guangu Road in the Jundu Mountains of Beijing Yanqing District, is an important part of the Great Wall of China, a great defensive project of ancient China, which was built to defend against the Xiongnu and to make the Central Plains a stable source of food from invasion. It is also one of the wonders of the world and an important historical review for the Chinese.',
            location: {
                center: [116.00904, 40.35598],
                zoom: 14.94,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
        }
    ]
};
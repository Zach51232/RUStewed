import cookiemnm from "../imgs/cookiemnm.jpg";
import caesarSalad from "../imgs/salad.jpg";
import salads from "../imgs/salads.jpg"
import cake from "../imgs/cake.jpg"

const recipes = [
    {
        id: 1,
        title: 'M&M Cookie Ice cream',
        image: cookiemnm,
        description: 'AmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sandwhich',
        author: 'Zach',
        location:[
            'CollegeAve',
            'Busch',
            'Livingston'
        ],
        likes: 10
    },
    {
        id: 2,
        title: 'Caesar Salad',
        image: caesarSalad,
        description: 'AmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sandwhich',
        author: 'Zach',
        location:[
            'Busch',
            'Busch',
            'Livingston'
        ],
        likes: 10
    },
    {
        id: 3,
        title: 'Nice salad',
        image: salads,
        description: 'AmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sandwhich',
        author: 'Zach',
        location:[
            'Busch'
        ],
        likes: 10
    },
    {
        id: 4,
        title: 'amazing cake',
        image: cake,
        description: 'AmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sandwhich',
        author: 'Zach',
        location:[
            'CollegeAve',
            'CookDouglass'
        ],
        likes: 10
    },
    {
        id: 5,
        title: 'M&M Cookie Ice cream',
        image: cookiemnm,
        description: 'AmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sandwhich',
        author: 'Zach',
        location:[
            'Busch',
            'Busch',
            'Livingston'
        ],
        likes: 10
    },
    {
        id: 6,
        title: 'M&M Cookie Ice cream',
        image: cookiemnm,
        description: 'AmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sandwhich',
        author: 'Zach',
        location:[
            'Busch',
            'Busch',
            'Livingston'
        ],
        likes: 10
    },
    {
        id: 7,
        title: 'M&M Cookie Ice cream',
        image: cookiemnm,
        description: 'AmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazingAmazing sandwhich',
        author: 'Zach',
        location:[
            'Busch',
            'Busch',
            'Livingston'
        ],
        likes: 10
    },

];

export default recipes;
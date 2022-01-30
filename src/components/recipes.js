import cookiemnm from "../imgs/cookiemnm.jpg";
import caesarSalad from "../imgs/salad.jpg";
import greeksalad from '../imgs/greeksalad.jpg'
import rootbeerfloat from '../imgs/rootbeerfloat.jpg'
import proteintoast from '../imgs/proteintoast.jpg'
import trailmix from '../imgs/trailmix.jpg'
import redpanini from '../imgs/redpanini.jpeg'
import pbtoast from '../imgs/pbtoast.jpg'
import sadpasta from '../imgs/sadpasta.jpg'
import waffle from '../imgs/waffle.jpg'

const recipes = [
    {
        id: 1,
        title: 'Solid Greek Salad',
        image: greeksalad,
        description: 'Tomato slices, Cucumber, Red onion, olives, oil, vinegar',
        author: 'Scarlet Knight',
        location: [
            'Busch',
            'CollegeAve',
            'CookDouglass',
            'Livingston'
        ],
        likes: 10
    },
    {
        id: 2,
        title: 'Root Beer Float',
        image: rootbeerfloat,
        description: 'Put vanilla ice cream or vanilla soft serve into the bottom of a dining hall cup. Then take it to the drink station & fill the cup with root beer until you get that nice foam at the top.',
        author: 'Scarlet Knight',
        location: [
            'Busch',
            'CollegeAve',
            'CookDouglass',
            'Livingston'
        ],
        likes: 10
    },
    {
        id: 3,
        title: 'Protein Toast',
        image: proteintoast,
        description: 'Take a slice of sourdough bread. Toast it lightly. Coat the bread with hummus. Then if Livi has bean salad at the deli bar that day, put bean salad on the toast. Then top with shredded or feta cheese if you like.',
        author: 'Scarlet Knight',
        location: [
            'Livingston'
        ],
        likes: 10
    },
    {
        id: 4,
        title: 'Trail Mix',
        image: trailmix,
        description: 'Take the nuts, m&m, chocolates chips, craisins or raisins and some fruits mix together, Ziploc it and take it home.',
        author: 'Scarlet Knight',
        location: [
            'Livingston'
        ],
        likes: 10
    },
    {
        id: 5,
        title: 'Crunchy Roasted Pepper Panini',
        image: redpanini,
        description: 'Rip a tortilla (by the fruit) in half and spread with hummus (health bar) on one side. Place roasted peppers and tortilla chips (if available at health bar) on the hummus. Add onions and whatever else youd like (salad bar). Put in panini press. Then drizzle chipotle mayo or your condiment of choice on the inside.',
        author: 'Scarlet Knight',
        location: [
            'Livingston'
        ],
        likes: 10
    },
    {
        id: 6,
        title: 'Peanut butter toast with banana and honey',
        image: pbtoast,
        description: 'During breakfast, take a slice of bread (my favorite is rye!) and toast it. Now take a banana and slice. Assemble like an open face sandwich, putting peanut butter on the bread, then the banana slices, and drizzle honey on top! This can also be done with Nutella and banana.',
        author: 'Scarlet Knight',
        location: [
            'Busch',
            'CollegeAve',
            'CookDouglass',
            'Livingston'
        ],
        likes: 10
    },
    {
        id: 7,
        title: 'Sad Pasta™ Plus',
        image: sadpasta,
        description: 'On days where theres simply nothing that you like and dont want to wait in line, dont resort to the Sad Pasta™ with the Sad Sauce™. Instead, take the Sad Pasta™ and combine it with olive oil from the salad section (and maybe add some other stuff if youre into that). Afterwards, go ahead and add some cheese or other toppings if you want.',
        author: 'Scarlet Knight',
        location: [
            'Busch'
        ],
        likes: 10
    },
    {
        id: 8,
        title: 'Nutella Waffles',
        image: waffle,
        description: 'Find the waffle station, spray iron with non-stick spray, fill cup with waffle batter and pour into iron (You can also fill half the cup and pour into one side if you arent feeling a whole waffle), flip and wait for it to beep.',
        author: 'Scarlet Knight',
        location: [
            'Busch',
            'CollegeAve',
            'CookDouglass',
            'Livingston'
        ],
        likes: 10
    },
    {
        id: 9,
        title: 'Caesar Meat Salad',
        image: caesarSalad,
        description: 'Take lettuce, cheese, and croutons and sprinkle with Caesar dressing from salad bar, top with meat from sandwhiches at the sandwhich bar.',
        author: 'Scarlet Knight',
        location: [
            'Busch',
            'CollegeAve',
            'CookDouglass',
            'Livingston'
        ],
        likes: 10
    },
    {
        id: 10,
        title: 'M&M Ice cream sandwhich',
        image: cookiemnm,
        description: 'Take 2 sugar cookies from dessert line, vanilla soft serve between them and drop m&ms on it.',
        author: 'Scarlet Knight',
        location: [
            'Busch',
            'CollegeAve',
            'CookDouglass',
            'Livingston'
        ],
        likes: 10
    },
    

];

export default recipes;
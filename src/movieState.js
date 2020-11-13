import athlete from '../img/athlete-small.png'
import theracer from '../img/theracer-small.png'
import goodtimes from '../img/goodtimes-small.png'
import athlete2 from './img/athlete2.png'
import goodtimes2 from './img/good-times2.png'
import theracer2 from './img/the-racer2.png'

export const MovieState = () => {
return[
    {
    title:'The Athlete',
    mainImg: athlete,
    secondaryImg: athlete2,
    url: '/work/the-athlete',
    awards:[
         {
             title: 'Truly a masterpiece',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, impedit!'
         },
         {
            title: 'Fresh Look on a brutal sport.',
           description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, impedit!'
        },
        {
            title: `It's okay.`,
           description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, impedit!'
        }
     ]
    },
    {
        title:'Good Times',
        mainImg: goodtimes,
        secondaryImg: goodtimes2,
        url: '/work/good-times',
        awards:[
             {
                 title: 'Truly a masterpiece',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, impedit!'
             },
             {
                title: 'Fresh Look on a brutal sport.',
               description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, impedit!'
            },
            {
                title: `It's okay.`,
               description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, impedit!'
            }
         ]
        },
        {
            title:'The racer',
            mainImg: theracer,
            secondaryImg: theracer2,
            url: '/work/the-racer',
            awards:[
                 {
                     title: 'Truly a masterpiece',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, impedit!'
                 },
                 {
                    title: 'Fresh Look on a brutal sport.',
                   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, impedit!'
                },
                {
                    title: `It's okay.`,
                   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, impedit!'
                }
             ]
            },
]
}

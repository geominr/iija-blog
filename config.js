var config = {
    accessToken: 'pk.eyJ1IjoiYmx1ZWNvbmR1aXQtcmFhbmFuIiwiYSI6ImNrcDQ1dmI5cTA3YWgyeHQ4eTgya3RkbmMifQ.Yy7t6IfU4KV2QTGhl91PZA',
    style: 'mapbox://styles/blueconduit-raanan/cl3uawu86002l16o3wjz045l6',
    alignment: 'left',
    toptitle: 'BlueConduit | Data Science Blog | June 2022',
    title: "How far will the IIJA go toward eradicating lead pipes?",
    byline: 'By Raanan Gurewitsch and Sheela Lal',
    description: "<p>At the end of 2021, the United States government made an historic investment in the nation's infrastructure. Over the next five years, more than half of a trillion dollars will go to revitalizing roads and bridges, rail, transit, ports, airports, broadband and water systems.</p><p>Of the $550 billion in the Infrastructure Investment and Jobs Act (IIJA), $15 billion are specifically earmarked for replacing lead water pipes, a paragon of the nation’s aging infrastructure, which deliver drinking water to tens of millions of people in the United States.</p><p>But putting those dollars to work - and spending them effectively - will take a lot of planning, coordination and of course, data.</p>",
    chapters: [
        {
            id: 'intro',
            title: 'Is $15 Billion enough?',
            image: 'https://www.asdwa.org/wp-content/uploads/2019/08/Lead-water-main-2-1024x768.jpg',
            imageCredit: '<a href="">ASDWA</a>',
            description: "There are believed to be between 6 and 10 million lead service lines in use throughout the United States. Will $15 billion be enough to replace them all with safer ones?",
            location: {
                center: [-99.429,38.679],
                zoom: 3.27,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'pws-lsl-estimated',
                    opacity: 0.75
                }
            ],
            onChapterExit: [
                {
                    layer: 'pws-lsl-estimated',
                    opacity: 0
                }
            ]
        },
        {
            id: 'legacy',
            title: 'A legacy of hazardous infrastructure',
            image: 'newplot (5).png',
            imageCredit: '<a href="#">American Community Survery, BlueConduit</a>',
            description: "The US Census Bureau estimates show roughly 50% of housing units within America's public water systems were built before 1980. But lead pipes were banned in 1986, and remain the primary source of lead contamination in drinking water, an environmental hazard that has impacted the health of millions of Americans for decades.",
            location: {
              center: [-99.429,38.679],
              zoom: 3.27,
              pitch:0,
              bearing:0
            },
            onChapterEnter: [
                {
                    layer: 'state-lsl-estimated',
                    opacity: 0.75
                }
            ],
            onChapterExit: [
                {
                    layer: 'state-lsl-estimated',
                    opacity: 0
                }
            ]
        },
        {
            id: 'midwest0',
            title: 'A legacy of hazardous infrastructure',
            image: 'https://www.asdwa.org/wp-content/uploads/2019/08/Lead-water-main-2-1024x768.jpg',
            imageCredit: '<a href="#">ASDWA</a>',
            description: "Majority of these service lines are concentrated in the Midwestern cities like Chicago, Detroit, Toledo and Cleveland, as well as cities throughout the Mid-Atlantic and the South.",
            location: {
              center:[-85.439,42.980],
              zoom:5.09,
              pitch:0,
              bearing:0
            },
            onChapterEnter: [
                {
                    layer: 'pws-lsl-estimated',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'pws-lsl-estimated',
                    opacity: 0
                }
            ]
        },
        {
            id: 'midwest1',
            title: 'A legacy of hazardous infrastructure',
            image: 'https://www.asdwa.org/wp-content/uploads/2019/08/Lead-water-main-2-1024x768.jpg',
            imageCredit: '<a href="#">ASDWA</a>',
            description: "Anywhere between 20 to 70% of the service connections in these urban water systems are made of lead, installed underground anytime between 40 and 140 years ago.",
            location: {
              center:[-85.439,42.980],
              zoom:5.09,
              pitch:0,
              bearing:0
            },
            onChapterEnter: [
                {
                    layer: 'pws-lsl-estimated',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'pws-lsl-estimated',
                    opacity: 0
                }
            ]
        },
        {
            id: 'dollarsPerLSL',
            title: 'Who gets the most money for LSL replacement?',
            image: 'https://www.asdwa.org/wp-content/uploads/2019/08/Lead-water-main-2-1024x768.jpg',
            imageCredit: '<a href="#">ASDWA</a>',
            description: "If you map out how much money each state is allocated, you’ll see that western states with very few lead pipes--like Hawaii, Alaska, Nevada, California, Utah and Idaho--will receive anywhere between $15 and $139 thousand per lead service line.",
            location: {
              center: [-99.429,38.679],
              zoom: 3.87,
              pitch:0,
              bearing:0
            },
            onChapterEnter: [
                {
                    layer: 'state-dollars-per-lsl',
                    opacity: 0.75
                }
            ],
            onChapterExit: [
                {
                    layer: 'state-dollars-per-lsl',
                    opacity: 0
                }
            ]
        },
        {
            id: 'hawaii',
            title: '',
            image: 'https://www.asdwa.org/wp-content/uploads/2019/08/Lead-water-main-2-1024x768.jpg',
            imageCredit: '<a href="#">ASDWA</a>',
            description: "Hawaii will receive $390 million to replace its estimated 2,800 lead service lines. More than $139,000 per pipe.",
            location: {
              center: [-159.007,20.578],
              zoom: 5.63,
              pitch:0,
              bearing:0
            },
            onChapterEnter: [
                {
                    layer: 'pws-lsl-estimated',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'pws-lsl-estimated',
                    opacity: 0
                }
            ]
        },
        {
            id: 'percapita',
            title: 'Who gets the most money for LSL replacement?',
            image: '',
            imageCredit: '<a href="#">ASDWA</a>',
            description: "Now let’s look at how many lead service lines there are, per capita, in each state. It’s clear that the Midwestern states--where most of the lead pipes exist--will receive significantly less investment per line, or roughly $2,800 on average.",
            location: {
              center: [-99.429,38.679],
              zoom: 3.87,
              pitch:0,
              bearing:0
            },
            onChapterEnter: [
              {
                  layer: 'state-lsl-per-capita',
                  opacity: 0.75
              }
            ],
            onChapterExit: [
              {
                  layer: 'state-lsl-per-capita',
                  opacity: 0
              }
            ]
        },
        {
            id: 'midwest2',
            title: 'Losers: The Midwest and New Jersey',
            image: '',
            imageCredit: '<a href="#">ASDWA</a>',
            description: "That leaves Michigan, Ohio, Wisconsin, Illinois and the rest of the region (as well as New Jersey) with less than what they need to replace every lead service line. So how can Midwestern cities get more bang for their buck?",
            location: {
              center:[-90.47,41.108],
              zoom: 4.57,
              pitch:0,
              bearing:0
            },
            onChapterEnter: [
                {
                    layer: 'not-enough-dollars-per-lsl',
                    opacity: 0.9
                },
                {
                    layer: 'state-lsl-per-capita',
                    opacity: 0.75
                }
            ],
            onChapterExit: [
                {
                    layer: 'not-enough-dollars-per-lsl',
                    opacity: 0
                },
                {
                    layer: 'state-lsl-per-capita',
                    opacity: 0
                }
            ]
        },
        {
            id: 'toledoLSL',
            title: 'Case study: Toledo, Ohio',
            image: 'https://blueconduit.com/wp-content/uploads/2022/04/Toledo-announcement-1024x771.jpg',
            imageCredit: '<a href="#">BlueConduit</a>',
            description: "In Ohio, the City of Toledo is using data analytics and machine learning to find and replace their lead service lines, starting in the communities with the most need.",
            location: {
              center: [-83.576,41.665],
              zoom: 11.5,
              pitch:0,
              bearing:0
            },
            onChapterEnter: [
              {
                  layer: 'toledo-lsl-percent',
                  opacity: 0.75
              }
            ],
            onChapterExit: [
              {
                  layer: 'toledo-lsl-percent',
                  opacity: 0
              }
            ]
        },
    ]
};

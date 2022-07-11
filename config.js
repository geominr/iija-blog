var config = {
    accessToken: 'pk.eyJ1IjoiYmx1ZWNvbmR1aXQtcmFhbmFuIiwiYSI6ImNrcDQ1dmI5cTA3YWgyeHQ4eTgya3RkbmMifQ.Yy7t6IfU4KV2QTGhl91PZA',
    style: 'mapbox://styles/blueconduit-raanan/cl3uawu86002l16o3wjz045l6',
    alignment: 'left',
    toptitle: 'BlueConduit | Data Science Blog | June 2022',
    title: "How will the US replace 7 million lead pipes?",
    byline: 'By Raanan Gurewitsch and Sheela Lal',
    description: "<p>At the end of 2021, the United States government made an historic investment in the nation's infrastructure. Over the next five years, more than half of a trillion dollars will go to revitalizing roads and bridges, rail, transit, ports, airports, broadband and water systems.</p><p>Of the $550 billion in the Infrastructure Investment and Jobs Act (IIJA), $15 billion are earmarked for replacing lead water pipes, a paragon of the nation’s aging infrastructure, which deliver drinking water to tens of millions of people in the United States.</p><p>Putting those dollars to work - and spending them effectively - will take a lot of planning, coordination and of course, data.</p>",
    chapters: [
      // intro
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
            ],
            chapterLegend: {
              type:'bubble',
              legend:{
                "color":"#e8aa44",
                "sizes":[0.5, 1.7, 2.5, 5, 10, 20],
                "breaks":[0, 2500, 5000, 10000, 20000, 50000],
                "title": "Estimated Lead Service Lines"
              }
            }
        },
      // legacy -> US
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
            ],
            chapterLegend: {
              type:'choropleth',
              legend:{
                "colors":["#ffffff","#f7d694","#fac756","#e8aa44"],
                "breaks":[5000, 50000, 100000, 500000],
                "title": "Estimated Lead Service Lines"
              }
            }
        },
      // legacy -> Midwest
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
                    opacity: 0.75
                }
            ],
            onChapterExit: [
                {
                    layer: 'pws-lsl-estimated',
                    opacity: 0
                }
            ],
            chapterLegend: {
              type:'bubble',
              legend:{
                "color":"#e8aa44",
                "sizes":[0.5, 1.7, 2.5, 5, 10, 20],
                "breaks":[0, 2500, 5000, 10000, 20000, 50000],
                "title": "Estimated Lead Service Lines"
              }
            }
        },
      // legacy -> Midwest 2
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
                    opacity: 0.75
                }
            ],
            onChapterExit: [
                {
                    layer: 'pws-lsl-estimated',
                    opacity: 0
                }
            ],
            chapterLegend: {
              type:'bubble',
              legend:{
                "color":"#e8aa44",
                "sizes":[0.5, 1.7, 2.5, 5, 10, 20],
                "breaks":[0, 2500, 5000, 10000, 20000, 50000],
                "title": "Estimated Lead Service Lines"
              }
            }
        },
      // who gets money?
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
            ],
            chapterLegend: {
              type:'choropleth',
              legend:{
                "colors":["#85bb65","#fac657","#f7d592","#ffffff"],
                "breaks":[ "$50,000 or more", "$10,000-25,000", "$5,000-10,000", "< $4,700 (avg. cost of replacement)"],
                "title": "Federal Investment per Lead Service Line"
              }
            }
        },
      // Hawaii
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
            ],
            chapterLegend: {
              type:'bubble',
              legend:{
                "color":"#e8aa44",
                "sizes":[0.5, 1.7, 2.5, 5, 10, 20],
                "breaks":[0, 2500, 5000, 10000, 20000, 50000],
                "title": "Estimated Lead Service Lines"
              }
            }
        },
      // who gets money? 2
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
            ],
            chapterLegend: {
              type:'choropleth',
              legend:{
                "colors":["#e8a945","#f7d592","#ffffff"],
                "breaks":["Up to 6", "1-2", "< 1"],
                "title": "Lead Service Lines per 100 people"
              }
            }
        },
      // who gets money? not the midwest
        {
            id: 'midwest2',
            title: 'Meanwhile, in the Midwest...',
            image: '',
            imageCredit: '<a href="#">ASDWA</a>',
            description: "The likes of Michigan, Ohio, Wisconsin, Illinois and New Jersey are left to do more with less. That's why cities across the region will need to invest early in cost-saving tech to replace more lead service lines.",
            location: {
              center:[-90.47,42.408],
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
                    layer: 'pws-lsl-estimated',
                    opacity: 0.75
                }
            ],
            onChapterExit: [
                {
                    layer: 'not-enough-dollars-per-lsl',
                    opacity: 0
                },
                {
                    layer: 'pws-lsl-estimated',
                    opacity: 0
                }
            ],
            chapterLegend: {
              type:'bubble',
              legend:{
                "color":"#e8aa44",
                "sizes":[0.5, 1.7, 2.5, 5, 10, 20],
                "breaks":[0, 2500, 5000, 10000, 20000, 50000],
                "title": "Estimated Lead Service Lines"
              },
              extraLegend:{
                "label":"Not enough IIJA Funding",
                "trace-color":"#5da3ea"
              }
            }
        },
      // Toledo
        {
            id: 'toledoLSL0',
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

            ],
            onChapterExit: [

            ],
            chapterLegend:false,
        },
      // Collecting reliable data
        {
            id: 'toledoLSL2',
            title: 'Collecting Reliable Data',
            image: 'https://media-exp1.licdn.com/dms/image/C4E22AQFZ3xh4R0ZVRA/feedshare-shrink_1280/0/1620143875527?e=1657152000&v=beta&t=1D5kEDwg69pR9R_Bi833ZKGPO9lt6e4t4FUI98_Ps2c',
            imageCredit: '<a href="#">BlueConduit</a>',
            description: "...",
            location: {
              center: [-83.568,41.651],
              zoom: 15.49,
              pitch:0,
              bearing:0
            },
            onChapterEnter: [
              {
                  layer: 'toledo-known unknown',
                  opacity: 1
              }
            ],
            onChapterExit: [
              {
                  layer: 'toledo-known unknown',
                  opacity: 0
              }
            ],
            chapterLegend: {
              type:'choropleth',
              legend:{
                "colors":["#ffffff","#fb3737"],
                "breaks":["Non-Lead","Lead"],
                "title": "Water Service Line Material"
              }
            }
        },
      // ML
        {
            id: 'toledoLSL3',
            title: 'Finding the lead with machine learning',
            image: 'https://blueconduit.com/wp-content/uploads/2022/04/Dig-Toledo-1024x768.jpg',
            imageCredit: '<a href="#">BlueConduit</a>',
            description: "...",
            location: {
              center: [-83.568,41.651],
              zoom: 15.49,
              pitch:0,
              bearing:0
            },
            onChapterEnter: [
              {
                  layer: 'toledo-predictions',
                  opacity: 0.75
              }
            ],
            onChapterExit: [
              {
                  layer: 'toledo-predictions',
                  opacity: 0
              }
            ],
            chapterLegend: {
              type:'choropleth',
              legend:{
                "colors":["#ffffff","#164f88","#f7d694","#e8aa44","#fb3737"],
                "breaks":["Non-Lead","Low Likelihood","Medium Likelihood","High Likelihood","Lead"],
                "title": "Estimated Service Line Material"
              }
            }
        },
      // Getting the lead out together
        {
            id: 'toledoLSL1',
            title: 'Getting the Lead Out Together',
            image: 'https://blueconduit.com/wp-content/uploads/2022/03/BlueConduit-Toledo-Site-208.jpg',
            imageCredit: '<a href="#">BlueConduit</a>',
            description: "...",
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
              },
              {
                  layer: 'lead-phases-outline',
                  opacity: 0.85
              },
              {
                  layer: 'lead-phases-points',
                  opacity: 1
              }
            ],
            onChapterExit: [
              {
                  layer: 'toledo-lsl-percent',
                  opacity: 0
              },
              {
                  layer: 'lead-phases-outline',
                  opacity: 0
              },
              {
                  layer: 'lead-phases-points',
                  opacity: 0
              }
            ],
            chapterLegend: {
              type:'choropleth',
              legend:{
                "colors":["#bb1616","#fac657","#f7d592","#ffffff"],
                "breaks":["75-100%","50-75%","25-50%","0-25%"],
                "title": "Homes with Lead Service Line"
              }
            }
        },
      // Mapping our progress around the country
        {
            id: 'nationwideModel',
            title: 'Replacing all 6.8 million lead service lines',
            image: '',
            imageCredit: '',
            description: "Using this technology, BlueConduit is able to find the communities with the most lead service lines.",
            location: {
              center: [-99.429,38.679],
              zoom: 3.27,
              pitch:0,
              bearing:0
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
            ],
            chapterLegend: {
              type:'bubble',
              legend:{
                "color":"#e8aa44",
                "sizes":[0.5, 1.7, 2.5, 5, 10, 20],
                "breaks":[0, 2500, 5000, 10000, 20000, 50000],
                "title": "Estimated Lead Service Lines"
              }
            }
        },
    ]
};

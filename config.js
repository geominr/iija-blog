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
            image: '',
            imageCredit: '',
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
            image: '',
            imageCredit: '',
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
            image: '',
            imageCredit: '',
            description: "Anywhere between 20 to 70% of the service connections in these urban water systems are made of lead, installed underground anytime between 40 and 140 years ago. So how far will the Infrastructure Bill go toward helping these communities?",
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
            image: '',
            imageCredit: '',
            description: "When we map out how much money each state is allocated, it is clear that the apportionment was not guided by the number of lead service lines per state. This map shows Western states with relatively fewer lead pipes will receive anywhere between $15,000 and $139,000 per lead service line.",
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
      // California
        {
            id: 'california',
            title: '',
            image: '',
            imageCredit: '',
            description: "California will receive $3.5 billion to replace its estimated 65,000 lead service lines. More than $53,846 per pipe. Fortunately, the excess money for lead pipe replacement can be used to solve other pressing drinking water challenges, like drought management.",
            location: {
              center: [-119.517,37.271],
              zoom: 5.53,
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
            title: 'What’s left over for the Midwest?',
            image: '',
            imageCredit: '',
            description: "Now consider how many lead service lines there are per capita in each state. Midwestern states--where most of the country’s lead pipes exist--will receive roughly $2,800 of investment per line. To put this in context, in 2019, the EPA estimates replacing a known lead service line costs $4,700, on average.",
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
            title: 'Barely scratching the surface',
            image: '',
            imageCredit: '',
            description: "For the likes of Michigan, Ohio, Wisconsin, Illinois and New Jersey, $2,800 barely scratches the surface for developing a service line inventory, let alone ultimately replacing the pipes. That's why cities across the region will need to invest early in cost-saving tech to replace more lead service lines.",
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
            description: "In Ohio, the City of Toledo is partnering with BlueConduit to use data analytics and machine learning to find and replace their lead service lines, starting in the communities with the most need.",
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
            chapterLegend:{
              type: "none",
              legend: "none"
            },
        },
      // Flint
        {
            id: 'homageToFlint',
            title: 'Lessons learned from Flint, MI',
            image: '',
            imageCredit: '',
            description: "BlueConduit’s technology was pioneered in Flint, MI in 2016 after the City’s water crisis unfolded. Without BlueConduit’s guidance, it cost Flint nearly $24,000 per successful replacement because poor records left the city guessing (often incorrectly) where the lead was. Thanks to big data and machine learning, BlueConduit took away the guesswork and brought down the cost per replacement by 75% to $6,000.",
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
            chapterLegend:{
              type: "none",
              legend: "none"
            },
        },
      // Collecting reliable data
        {
            id: 'toledoLSL2',
            title: 'Collecting Reliable Data',
            image: '',
            imageCredit: '',
            description: "The process starts with an inventory of verified service line materials. But records of when lead pipes were installed or replaced are incomplete and unreliable. So the utility department uses cheap methods to inspect homes across the City, documenting the location of lead, copper and other types of water service pipes.",
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
                "colors":["#ffffff","#fb3737","rgba(11, 37, 83)"],
                "breaks":["Non-Lead","Lead","Unknown"],
                "title": "Water Service Line Material"
              }
            }
        },
      // ML
        {
            id: 'toledoLSL3',
            title: 'Finding the lead with machine learning',
            image: '',
            imageCredit: '',
            description: "Using a representative sample of inspection records, Toledo can estimate the likelihood that the connection at every house contains lead, with the help of BlueConduit’s machine learning technology.",
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
            description: "Guided by local data, algorithms and lessons learned in over 50 cities around the country, the City of Toledo plans to replace all of their lead service lines by 2027 and prioritize the communities with the highest risk and the most vulnerable populations.",
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
            description: "For the hundreds of other cities like Toledo, now is the time to invest in technology that will stretch Federal dollars farther to get the lead out and create better outcomes for millions of Americans.<br><br>Interested in learning more about BlueConduit? <br><br> <a href='https://blueconduit.com/get-a-demo/'><button class='cu-button'>Get a Demo</button></a>",
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
      // concluding CTAs
        {
            id: 'CTAs',
            title: 'Want to learn more about lead in water?',
            image: '',
            imageCredit: '',
            description: "<a href='https://www.nrdc.org/experts/erik-d-olson/how-can-i-find-out-if-i-have-lead-service-line'><h3>How Can I Find Out If I Have a Lead Service Line? (NRDC blog)</h3></a> <br> <a href='https://www.nrdc.org/stories/what-you-need-know-about-lead-service-line-replacement#:~:text=If%20you%20do%20have%20a,free%20or%20at%20reduced%20cost.'><h3> What You Need to Know About Lead Service Line Replacement (NRDC)</h3></a> <br> <a href='https://www.nrdc.org/lead-pipes-widespread-used-every-state#:~:text=After%20conducting%20a%20survey%20of,that%20claim%20to%20have%20none.'><h3> Lead Service Lines are Widespread and Used in Every State (NRDC Article)</h3></a>",
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
      // thank you
        {
            id: 'thankyou',
            title: 'Thank you for reading!',
            image: '',
            imageCredit: '',
            description: "<small>Data sources:<br>NRDC<br>BlueConduit<br>US Census Bureau <br><br>Maps and animations by Raanan Gurewitsch</small>",
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

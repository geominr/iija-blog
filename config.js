var config = {
    accessToken: 'pk.eyJ1IjoiYmx1ZWNvbmR1aXQtcmFhbmFuIiwiYSI6ImNrcDQ1dmI5cTA3YWgyeHQ4eTgya3RkbmMifQ.Yy7t6IfU4KV2QTGhl91PZA',
    style: 'mapbox://styles/blueconduit-raanan/cl3uawu86002l16o3wjz045l6',
    alignment: 'left',
    toptitle: 'BlueConduit | Data Science Blog | September 2022',
    title: "Funding for Lead Pipe Replacement Falls Short for Midwest",
    byline: 'By Raanan Gurewitsch and Sheela Lal',
    description: "<small>Best viewed on Desktop or mobile Landscape Mode.</small><br><p>At the end of 2021, the United States government made an historic investment in the nation's infrastructure. Over the next five years, more than half of a trillion dollars will go to revitalizing roads and bridges, rail, transit, ports, airports, broadband and water systems.</p><p>Of the $550 billion in the Bipartisan Infrastructure Law (BIL), $15 billion are earmarked for replacing lead water pipes, a paragon of the nation’s aging infrastructure, which deliver drinking water to tens of millions of people in the United States.</p><p>Getting the most from those dollars will take a lot of planning, coordination and, of course, data.</p>",
    chapters: [
      // intro
        {
            id: 'intro',
            title: 'Is $15 Billion enough?',
            image: '',
            imageCredit: '',
            description: "There are believed to be between 6 and 10 million lead pipes in use throughout the United States. Will $15 billion be enough to replace them all with safer ones?",
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
                "title": "Estimated Lead Service Pipes"
              }
            }
        },
      // legacy -> US
        {
            id: 'legacy',
            title: 'A legacy of hazardous infrastructure',
            image: 'newplot (5).png',
            imageCredit: '<a href="https://data.census.gov/cedsci/table?q=housing%20characteristics&g=0100000US&tid=ACSDP5Y2020.DP04">Housing Units by Year Built. American Community Survery</a>',
            description: "Lead pipes were banned in 1986. Yet, the US Census Bureau estimates show roughly 50% of housing units within America's public water systems were built before 1980. Lead pipes remain the primary source of lead contamination in drinking water, an environmental hazard that has impacted the health of millions of Americans for decades.",
            location: {
              center: [-99.429,38.679],
              zoom: 3.27,
              pitch:0,
              bearing:0
            },
            onChapterEnter: [
                {
                    layer: 'pws-lsl-estimated',
                    opacity: 0
                },
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
                "title": "Estimated Lead Service Pipes"
              }
            }
        },
      // legacy -> Midwest
        {
            id: 'midwest0',
            title: 'A legacy of hazardous infrastructure',
            image: '',
            imageCredit: '',
            description: "Majority of these service pipes are concentrated in the Midwestern cities like Chicago, Detroit, Toledo and Cleveland, as well as cities throughout the Mid-Atlantic and the South.",
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
                    opacity: 0.75
                }
            ],
            chapterLegend: {
              type:'bubble',
              legend:{
                "color":"#e8aa44",
                "sizes":[0.5, 1.7, 2.5, 5, 10, 20],
                "breaks":[0, 2500, 5000, 10000, 20000, 50000],
                "title": "Estimated Lead Service Pipes"
              }
            }
        },
      // legacy -> Midwest 2
        {
            id: 'midwest1',
            title: '',
            image: '',
            imageCredit: '',
            description: "Among these urban water systems, the number of lead pipes can vary widely from under 10% to even over 80% of service pipes being lead. So how far will the Bipartisan Infrastructure Law go toward helping these communities?",
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
                "title": "Estimated Lead Service Pipes"
              }
            }
        },
      // who gets money?
        {
            id: 'dollarsPerLSL',
            title: 'Who gets the most money for LSL replacement?',
            image: '',
            imageCredit: '',
            description: "When we map out how much money each state is allocated, it is clear that the apportionment was not guided by the number of lead pipes per state. This map shows Western states with relatively fewer lead pipes will receive anywhere between $15,000 and $139,000 per lead service pipe.",
            location: {
              center: [-99.429,38.679],
              zoom: 3.27,
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
                "title": "BIL Dollars per Lead Service Pipe"
              }
            }
        },
      // California
        {
            id: 'california',
            title: '',
            image: '',
            imageCredit: '',
            description: "California will receive $3.5 billion to replace its estimated 65,000 lead pipes. More than $53,846 per pipe. Fortunately, the excess money for lead pipe replacement can be used to solve other pressing drinking water challenges, like drought management.",
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
                "title": "Estimated Lead Service Pipes"
              }
            }
        },
      // who gets money? 2
        {
            id: 'percapita',
            title: 'What’s left over for the Midwest?',
            image: '',
            imageCredit: '',
            description: "Now consider how many lead pipes there are per capita in each state. Midwestern states&mdash;where most of the country’s lead pipes exist&mdash;will receive roughly $2,800 of investment per pipe. To put this in context, in 2019, the EPA estimates replacing a known lead service pipe costs <a href='https://www.epa.gov/sites/default/files/2019-10/documents/strategies_to_achieve_full_lead_service_line_replacement_10_09_19.pdf' target='_blank'>$4,700, on average.</a>",
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
              },
              {
                  layer: 'not-enough-dollars-per-lsl',
                  opacity: 0
              },
              {
                  layer: 'pws-lsl-estimated',
                  opacity: 0
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
                "title": "Lead Service Pipes per 100 people"
              }
            }
        },
      // who gets money? not the midwest
        {
            id: 'midwest2',
            title: 'Barely scratching the surface',
            image: '',
            imageCredit: '',
            description: "For the likes of Michigan, Ohio, Wisconsin, Illinois and New Jersey, $2,800 per pipe barely scratches the surface for developing a an inventory of all the lead pipes in the drinking water system, let alone ultimately replacing the pipes. That's why cities across the region will need to invest early in cost-saving tech to replace more lead pipes.",
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
                    opacity: 0.9
                },
                {
                    layer: 'pws-lsl-estimated',
                    opacity: 0.75
                }
            ],
            chapterLegend: {
              type:'bubble',
              legend:{
                "color":"#e8aa44",
                "sizes":[0.5, 1.7, 2.5, 5, 10, 20],
                "breaks":[0, 2500, 5000, 10000, 20000, 50000],
                "title": "Estimated Lead Service Pipes"
              },
              extraLegend:{
                "label":"Not enough BIL Funding",
                "trace-color":"#5da3ea"
              }
            }
        },
      // experts weigh in
        {
            id: 'experts1',
            title: 'Experts are sounding the alarm',
            image: '',
            imageCredit: '',
            description: 'Elin Betanzo of <a href="https://safewaterengineering.com/hottopics/2022/8/17/national-funding-for-lead-service-line-replacement-is-essential-for-states-with-highest-number-of-lead-pipes">Safe Water Engineering</a> suggests that "action must be taken as soon as possible to ensure equity in state funding of lead service line replacements" and that either the EPA or Congress should "change the allotment formula to prioritize lead service line money to the states with the most lead service lines to ensure funding goes where it\'s needed most."',
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
                    opacity: 0.9
                },
                {
                    layer: 'pws-lsl-estimated',
                    opacity: 0.75
                }
            ],
            chapterLegend: {
              type:'bubble',
              legend:{
                "color":"#e8aa44",
                "sizes":[0.5, 1.7, 2.5, 5, 10, 20],
                "breaks":[0, 2500, 5000, 10000, 20000, 50000],
                "title": "Estimated Lead Service Pipes"
              },
              extraLegend:{
                "label":"Not enough BIL Funding",
                "trace-color":"#5da3ea"
              }
            }
        },
      // we need inventories
        {
            id: 'experts2',
            title: '',
            image: '',
            imageCredit: '',
            description: "Other experts have suggested <a href='https://www.detroitnews.com/story/news/politics/2022/08/25/why-michigan-got-shortchanged-funding-replace-lead-water-lines/7893711001/?gnt-cfr=1'>lead pipe replacements could cost between $7,000 and $9,000 each</a>, with cost rising rapidly in 2022. And not only do Midwestern utilities need more to replace lead pipes, they also need money to map out where they are in the first place.",
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
                "title": "Estimated Lead Service Pipes"
              },
              extraLegend:{
                "label":"Not enough BIL Funding",
                "trace-color":"#5da3ea"
              }
            }
        },
      // Toledo
        {
            id: 'toledoLSL0',
            title: 'Case study: Toledo, Ohio',
            image: 'https://blueconduit.com/wp-content/uploads/2022/04/Toledo-announcement-1024x771.jpg',
            imageCredit: '<a href="https://blueconduit.com/post/toledo-announces-city-wide-lead-service-line-replacement-plan/">BlueConduit</a>',
            description: "In Ohio, the City of Toledo is partnering with <a href='https://blueconduit.com'>BlueConduit</a> to use data analytics and machine learning to find and replace their lead pipes, starting in the communities with the most need.",
            location: {
              center: [-83.576,41.665],
              zoom: 11.5,
              pitch:0,
              bearing:0
            },
            onChapterEnter: [
              {
                  layer: 'not-enough-dollars-per-lsl',
                  opacity: 0
              },
              {
                  layer: 'pws-lsl-estimated',
                  opacity: 0
              }
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
            title: 'Lessons learned from Flint, Michigan',
            image: '',
            imageCredit: '',
            description: "BlueConduit’s technology was pioneered in Flint, Michigan in 2016 as the City’s water crisis unfolded. Without BlueConduit’s guidance, it cost Flint nearly $24,000 to get each lead service pipe out of the ground because poor records left the city guessing where the lead was.",
            location: {
              center: [-83.829,43.039],
              zoom: 9.17,
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
            title: '',
            image: '',
            imageCredit: '',
            description: "Thanks to big data and machine learning, BlueConduit took away the guesswork and brought down the cost per successful lead replacement by 75% to $6,000.",
            location: {
              center: [-83.829,43.039],
              zoom: 9.17,
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
            title: 'Step 1: Collecting Reliable Data',
            image: '',
            imageCredit: '',
            description: "The process starts with an inventory of whatever verified service pipe materials may exist. But records of when lead pipes were installed or replaced are incomplete and unreliable. Using cheap methods to inspect homes, the Department of Public Works maps out the location of lead, copper and other types of water service pipes.",
            location: {
              center: [-83.568,41.651],
              zoom: 14.5,
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
                "breaks":["Non-Lead","Lead","No Record"],
                "title": "Water Service Pipe Material Record"
              }
            }
        },
      // ML
        {
            id: 'toledoLSL3',
            title: 'Step 2: Finding the lead with machine learning',
            image: '',
            imageCredit: '',
            description: "By following BlueConduit’s recommended representative sample for inspections, Toledo can estimate the likelihood that the connection at every house contains lead, with the help of machine learning technology.",
            location: {
              center: [-83.568,41.651],
              zoom: 14.5,
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
                "title": "Estimated Service Pipe Material"
              }
            }
        },
      // ML 2
        {
            id: 'toledoLSL3.1',
            title: '',
            image: '',
            imageCredit: '',
            description: "The predictions show us trends similar to other cities, where lead pipes tend to be concentrated in areas with older housing, lower income levels and more minorities.",
            location: {
              center: [-83.576,41.665],
              zoom: 11.05,
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
            ],
            chapterLegend: {
              type:'choropleth',
              legend:{
                "colors":["#bb1616","#fac657","#f7d592","#ffffff"],
                "breaks":["75-100%","50-75%","25-50%","0-25%"],
                "title": "Homes with Lead Service Pipe"
              }
            }
        },
      // ML 3
        {
            id: 'toledoLSL3.2',
            title: '',
            image: '',
            imageCredit: '',
            description: "With BlueConduit’s analytics, decision makers in Toledo can identify the highest risk communities to target in their newly launched replacement program.",
            location: {
              center: [-83.576,41.665],
              zoom: 11.05,
              pitch:0,
              bearing:0
            },
            onChapterEnter: [
              {
                  layer: 'toledo-med-income',
                  opacity: 0.75
              }
            ],
            onChapterExit: [
              {
                  layer: 'toledo-med-income',
                  opacity: 0
              }
            ],
            chapterLegend: {
              type:'choropleth',
              legend:{
                "colors":["#e8a945","#f7d592","#ffffff","#83bb63","#4e7935"],
                "breaks":["$10,000","$30,000","$50,000","$75,000","$100,000 or more"],
                "title": "Est. Median Income (2020)"
              }
            }
        },
      // Getting the lead out together
        {
            id: 'toledoLSL1',
            title: 'Step 3: Getting the Lead Out Together',
            image: 'https://blueconduit.com/wp-content/uploads/2022/03/BlueConduit-Toledo-Site-208.jpg',
            imageCredit: '<a href="#">BlueConduit</a>',
            description: "Following this data-and-equity-driven approach, the City of Toledo plans to replace all of their lead pipes by 2027 in just five one-to-two-year phases. That's 13 years earlier than what the City originally projected.",
            location: {
              center: [-83.576,41.665],
              zoom: 11.05,
              pitch:0,
              bearing:0
            },
            onChapterEnter: [
              {
                  layer: 'toledo-black-pop',
                  opacity: 0.75
              },
              {
                  layer: 'lead-phases-outline',
                  opacity: 0.95
              },
              {
                  layer: 'lead-phases-labels',
                  opacity: 1
              },
              {
                  layer: 'pws-lsl-estimated',
                  opacity: 0
              },
              {
                  layer: 'customer-points',
                  opacity: 0
              }
            ],
            onChapterExit: [
              {
                  layer: 'toledo-black-pop',
                  opacity: 0
              },
              {
                  layer: 'lead-phases-outline',
                  opacity: 0
              },
              {
                  layer: 'lead-phases-labels',
                  opacity: 0
              }
            ],
            chapterLegend: {
              type:'choropleth',
              legend:{
                "colors":["#ffffff","#e1c5f7","#d1a5f3","#ad5dea","#4f117e"],
                "breaks":["0-10%","10-25%","25-50%","50-75%","75-100%"],
                "title": "Est. Black Population (%, 2020)"
              }
            }
        },
      // Tech's impact
        {
            id: 'impactSlide0',
            title: '',
            image: '',
            imageCredit: '',
            description: "Similar success stories are unfolding across the region. BlueConduit's technology has already analyzed over 1.5 million service pipes across 50 cities and towns, saving more than $100 million of tax-payer money.",
            location: {
              center:[-86.687,41.621],
              zoom: 5.57,
              pitch:0,
              bearing:0
            },
            onChapterEnter: [
                {
                    layer: 'pws-lsl-estimated',
                    opacity: 0.75
                },
                {
                    layer: 'customer-points',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'pws-lsl-estimated',
                    opacity: 0.75
                },
                {
                    layer: 'customer-points',
                    opacity: 0
                }
            ],
            chapterLegend: {
              type:'bubble',
              legend:{
                "color":"#e8aa44",
                "sizes":[0.5, 1.7, 2.5, 5, 10, 20],
                "breaks":[0, 2500, 5000, 10000, 20000, 50000],
                "title": "Estimated Lead Service Pipes"
              },
              extraLegend: {
                "label": "BlueConduit Customer",
                "svg": "BlueConduit Updated Logo_Final_Mark.svg"
              }
            }
        },
      // Mapping our progress around the country
        {
            id: 'nationwideModel',
            title: 'Replacing every lead service pipe in America',
            image: '',
            imageCredit: '',
            description: "For the <a href='https://blueconduit.com/lsl-solutions/lsl-estimates/' target='_blank'>hundreds of other American cities</a> with lead pipes, now is the time to invest in technology that will stretch Federal dollars farther to get the lead out and protect our public health.<br><br>Interested in learning more about BlueConduit? <br><br> <a href='https://blueconduit.com/get-a-demo/'><button class='cu-button'>Get a Demo</button></a>",
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
                "title": "Estimated Lead Service Pipes"
              }
            }
        },
      // concluding CTAs
        {
            id: 'CTAs',
            title: 'Want to learn more about lead in water?',
            image: '',
            imageCredit: '',
            description: "<a href='https://www.nrdc.org/experts/erik-d-olson/how-can-i-find-out-if-i-have-lead-service-line'><h4>How Can I Find Out If I Have a Lead Service Line? (NRDC blog)</h4></a> <br> <a href='https://www.youtube.com/watch?v=NKmwOzCO5I4'><h4>VIDEO: How to Check Your Service Pipe for Lead</h4></a> <br> <a href='https://www.nrdc.org/stories/what-you-need-know-about-lead-service-line-replacement#:~:text=If%20you%20do%20have%20a,free%20or%20at%20reduced%20cost.'><h4> What You Need to Know About Lead Service Line Replacement (NRDC)</h4></a> <br> <a href='https://www.nrdc.org/lead-pipes-widespread-used-every-state#:~:text=After%20conducting%20a%20survey%20of,that%20claim%20to%20have%20none.'><h4> Lead Service Lines are Widespread and Used in Every State (NRDC Article)</h4></a>",
            location: {
              center: [-99.429,38.679],
              zoom: 3.27,
              pitch:0,
              bearing:0
            },
            onChapterEnter: [

            ],
            onChapterExit: [

            ],
            chapterLegend: {
              type:'none',
              legend:"none"
            }
        },
      // thank you
        {
            id: 'thankyou',
            title: 'Thank you for reading!',
            image: '',
            imageCredit: '',
            description: "<small>Data sources:<br>NRDC<br>BlueConduit<br>City of Toledo<br>US Census Bureau <br><br>Lead Service Pipe Estimates by Jared Webb<br>Story by Raanan Gurewitsch and Sheela Lal<br>Maps and animations by Raanan Gurewitsch</small>",
            location: {
              center: [-99.429,38.679],
              zoom: 3.27,
              pitch:0,
              bearing:0
            },
            onChapterEnter: [

            ],
            onChapterExit: [

            ],
            chapterLegend: {
              type:'none',
              legend:"none"
            }
        },
    ]
};

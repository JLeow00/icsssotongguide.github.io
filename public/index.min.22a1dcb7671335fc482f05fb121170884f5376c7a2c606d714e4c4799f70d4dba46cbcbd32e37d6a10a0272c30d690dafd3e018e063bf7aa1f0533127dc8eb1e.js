var suggestions=document.getElementById("suggestions"),search=document.getElementById("search");search!==null&&document.addEventListener("keydown",inputFocus);function inputFocus(e){e.ctrlKey&&e.key==="/"&&(e.preventDefault(),search.focus()),e.key==="Escape"&&(search.blur(),suggestions.classList.add("d-none"))}document.addEventListener("click",function(e){var t=suggestions.contains(e.target);t||suggestions.classList.add("d-none")}),document.addEventListener("keydown",suggestionFocus);function suggestionFocus(e){const s=suggestions.classList.contains("d-none");if(s)return;const t=[...suggestions.querySelectorAll("a")];if(t.length===0)return;const n=t.indexOf(document.activeElement);if(e.key==="ArrowUp"){e.preventDefault();const s=n>0?n-1:0;t[s].focus()}else if(e.key==="ArrowDown"){e.preventDefault();const s=n+1<t.length?n+1:n;t[s].focus()}}(function(){var e=new FlexSearch.Document({tokenize:"forward",cache:100,document:{id:"id",store:["href","title","description"],index:["title","description","content"]}});e.add({id:0,href:"/docs/europe/italy/",title:"Italy",description:"Pisa, Florence, Rome, Amalfi Coast, Naples, Bolgana, Venice.",content:`Itinerary #Day Location Overnight 1 Arrival into Pisa Pisa 2 Pisa Pisa 3 Florence Florence 4 Rome Rome 5 Rome Rome 6 Amalfi Coast Sorrento 7 Amalfi Coast Sorrento 8 Pompeii, Naples Naples 9 Naples, Bologna Bologna 10 Venice Venice 11 Burano, Venice London Getting Around #Train Timetable and Tickets → Trains in Italy Guide →
Freccia, Italo: Better to book in advance to save money.
Regional, Intercity: Can buy at the station.
Day 1 #Reach Stansted no later than 15:30 for flight to Pisa.
Arrive in Pisa at 20:40. Take shuttle train from airport to Pisa Centrale (€5).
Check into accommodation and rest for the night. Maybe grab dinner/supper if anything is open.
Day 2 #Start sightseeing in Pisa in early morning to avoid crowds.
Sights to see in Pisa:
Leaning Tower of Pisa
Pisa Cathedral
Chill in Pisa for the rest of the day.
Day 3 #Check out of accommodation, take train from Pisa Centrale to Firenze Santa Maria Novella (Florence).
Leave bags at accommodation and go for sightseeing. Sights to see in Florence:
Basilica of Santa Maria Novella
Cathedral of Santa Maria del Fiore
Baptistery of St. John
Giotto’s Bell Tower
Palazzo Vecchio
Piazza Santa Croce
Uffizi Gallery
Ponte Vecchio
Visit the Accademia Gallery to see the David Statue at 16:00. Pre-book the timeslot for entry (€16).
Nearing sunset time (7.30pm), head to Piazzale Michelangelo for sunset view of the city.
Day 4 #Check out of accommodation. Breakfast starts at 07:30, takeout is possible also. After breakfast, take train from Firenze Santa Maria Novella to Roma Termini (Rome).
Drop off bags at accommodation and head off for sightseeing.
Sights to see:
Colosseum* (entry at 15:45, arrive 15 mins before)
Roman Forum*
Palatine Hill*
Altar of the Fatherland
Pantheon
Piazza Navona
Buy the 24hr combined ticket (€18) for attractions marked with (*). Entry into Colosseum must be at scheduled time, entry time not regulated for other attractions.
Day 5 #Visit Trevi Fountain and Spanish Steps in the morning at about 09:00 to avoid crowds.
Head to Vatican Museums and Sistine Chapel (€12 for students), entry at 11:30. Consider taking public transport if it is more convenient (€1.50 per 75 min ride).
After museum visit, continue sightseeing:
St Peters’ Square
Castel Sant’Angelo
Piazza del Popolo
Terrazza del Pincio (good view of the piazza)
Getting around Rome →
Day 6 #Take train from Roma Termini to Napoli Centrale (Naples).
Take Circumvesuviana / Campania Express train from Napoli Garibaldi to Sorrento. Trains come about every half an hour.
Tickets are cash only (€3.90), buy at ticket office.
Drop off bags at accommodation in Sorrento and grab some lunch.
Tour other towns on Amalfi Coast after lunch. Go to Amalfi first, take the SITA bus at 13:30, should reach by 15:00.
Tickets for SITA bus can be bought at newsstands with the SITA logo. Price depends on route taken for single journey, alternatively there is a 24-hr ticket for €10.
Sights to see in Amalfi:
Duomo di Amalfi
Viewpoint from Amalfi Cemetery (Belvedere cimitero monumentale)
Chill at the waterfront/cafe before going to Positano. Take SITA bus to Positano (Sponda) at 16:30, reach by 17:10.
Chill at Positano beach until sunset. Return to Sorrento, take SITA bus at 18:40, should reach by 19:40.
Day 7 #Capri boat tour at 09:00-17:00. Tour includes:
Sailing around Sorrento coast and Capri island for photo spots
Stop on Capri island for 4 hours, free and easy
Drinks, sandwiches and pickup at accomodation
Chill in Sorrento for the rest of the day. Terrazza Vittoria for drinks maybe, nice sunset view.
Day 8 #Check out of accommodation and take Circumvesuviana / Campania Express train from Sorrento to Pompei Scavi.
Head to Pompeii for 2-hour guided tour at 10:30. Tickets need to be bought seperately (€16).
Best to get a guided tour, otherwise we will be starting at stones. Luggage can be left at cloakroom in Pompeii free-of-charge.
Can continue exploring Pompeii after guided tour for a while, leave at around 13:30 to Naples. Take Circumvesuviana / Campania Express train to Napoli Garibaldi.
Check into accommodation and grab lunch. Explore Naples afterwards, sights to see:
Catacombs of San Gennaro (€6 for entry and tour, last entry at 17:00)
Naples Cathedral
Piazza del Plebiscito
Castel Nuovo
Pompeii Tickets →
Day 9 #Check out of accommodation. Ski trip group heads to Naples airport, the rest takes train from Napoli Centrale to Bologna Centrale
Get lunch after reaching Bologna, check into accommodation. Go for sightseeing afterwards, sights to see: Piazza Maggiore San Petronio’s Cathedral (nice rooftop view) Via Drapperie and Quadrilatero area Torre Asinelli
Day 10 #Check out of accommodation, take train from Bologna Centrale to Venezia Santa Lucia (Venice).
Drop off bags at accommodation, grab lunch, head off for sightseeing after. Sights to see:
Venetian Arsenal
T Fondaco dei Tedeschi rooftop terrace (free entry)
Rialto Bridge
Bridge of Sighs
St Mark’s Square
Doge’s Palace
Ponte Dell’Accademia (bridge with good view of canal)
Basilica di Santa Maria della Salute
Stroll along Grand Canal during sunset.
Gondola rides are too expensive, consider taking the traghetto for the experience instead (€2 per ride).
Getting around Venice →
Day 11 #Check out of accommodation. Check with host/front desk if we can leave bags at reception before half-day trip to Burano
Head out in the morning to Fondamente Nove to take Vaporetto line 12 to Burano. Spend about an hour or so exploring Burano before heading back to Venice by lunchtime.
Can consider buying the Vaporetto day ticket (€20).
Pick up bags and continue sightseeing until about evening time, start heading to airport
Take ATVO bus from Piazzale Roma to Venice Marco Polo Airport at 19:20. Journey takes about 20 min, buses every half hour. Aim to reach airport by 19:50.
Recommended Places to Eat #Bologna #Try the fresh egg pastas (tagliatelle al ragu/lasagne) as they’re really known for it and try mortadella and prosciutto, it tastes much better in Bologna!
More Information →
San Martino Gastromania (Monterosso) #Super small joint, pastas were good! Pansotti with walnut sauce left a mark.
More Information →
All\u0026rsquo;antico Vanaio (Florence) #Best sandwiches you can get around. There’re 3 outlets but they all belong to the same chain and are all equally good.
Grab any sandwich with the truffle sauce!
More Information →
Trattoria Sergio Gozzi (Florence) #Pretty cheap and good, most dishes come in smaller plates so you can have more variety for the same price.
More Information →
Geleteria Della Pessera (Florence) #Awesome and cheap gelato.
More Information →
Impressione Chongqing (Florence) #Rare find Szechuan food.
More Information →
Pizzeria Gino Sorbillo (Naples) #Variety of really good pizzas.
More Information →
L\u0026rsquo;Antica Pizzeria Da Michele (Naples) #Only Margherita and Marinara. The dough is rather uniquely tasting, different from pizzas elsewhere.
[More Information →](https://guide.michelin.com/sg/en/campania/napoli/restaurant/da-michele
Pizzeria da Remo (Rome) #Roman (thin crust, crisp) pizzas for a good price considering their size. Fiori di zucca (starter) was pretty good too.
More Information →
Bonci Pizzarium (Rome) #Long queue but super good!! It’s pizzas by weight and you have to try their potato pizza (carbs on carbs but worth it)
More Information →
I Tre Mercanti (Venice) #Eclairs! Reminded me of L’eclair back in Singapore, really good quality.
More Information →
Tips #Italy gets slightly more dangerous as you move further down South so do take good care of your belongings (no matter where you go tbh).
For paid Museums and Attractions, buy tickets online to skip the queue.
Be aware of thieves and keep your luggage with you while taking trains.
When using cash, check for counterfeit notes when receiving change.
There’s plenty of water fountains with drinkable water on the streets of Italy, top up your water bottle on the go; it’s rude to ask for tap water while dining in restaurants. Tap water is generally not served in restaurants anyway.
Try Dishes unique to each region!
Region Dishes Florence Florentine Steak, Panini Rome Carbonara, Alfredo, Arrabiata Pasta Amalfi Coast Limoncello and anything made from Amalfi Lemons Naples Neapolitan Pizza Bologna Tagliatelle Ragu, Lasagna Venice Squid Ink Pasta, Prosecco, Tiramisu `}),e.add({id:1,href:"/docs/europe/paris-nice/",title:"Paris and Nice",description:"Paris is the capital and most populous city of France, with an estimated population of 2,165,423 residents in 2019. Nice, capital of the Alpes-Maritimes department on the French Riviera, sits on the pebbly shores of the Baie des Anges.",content:`Itinerary #Day Location Overnight 1 Paris Paris 2 Paris Paris 3 Versailles (Day Trip) Nice 4 Nice and Monaco Nice 5 Nice and Villefranche-sur-Mer Nice 6 Nice London Paris Dining Tips →
Day 1 #Arrive at St Pancras no later than 07:00 for Eurostar to Paris.
Arrive at Paris Gare du Nord at 11:57. Go to Hotel de l\u0026rsquo;Aqueduc to drop off bag before check-in, and get lunch.
Head to Louvre Museum for visit at 14:30 (€17.00). Make sure to see the Mona Lisa painting and other must see paintings.
Head back to hotel for check-in, then head to Sacre Coeur for sightseeing.
Head to observation deck of Arc de Triomphe (€13.00) for view of the city. Try to enter earlier than allocated 18:30 slot if possible.
Head to Le relais de l\u0026rsquo;entrecote in Marbeuf for dinner (opens at 18:45). No reservations, queueing is necessary.
Head over to Siene river to see Eiffel Tower sparkle. Aim for 22:00/23:00, lights sparkle every hour after dusk.
Eiffel Tower sparkling lights
Day 2 #Breakfast in the Montmartre area. Head to Palais Garnier (€8 for students) for 10:00 entry.
Meet up at fountain on Place Saint Michel for free Paris walking tour from 11:00 to 14:00. Look out for the guide with a red umbrella. Remember to leave a tip for the guide. Sights covered by tour:
Notre Dame
Pont Nuef
Pont des Arts
Louvre Museum
Jardins des Tuileries
Head to Sainte Chapelle (€11.50) afterwards, but stop by Galerie Patrick Fourtin on the way. Lunch at crêperie then sightseeing afterwards:
Pantheon
Place de l’Estrapade (Emily’s house lol)
Place de la Concorde
Esplanade des Invalides
Champs des Mars
Trocadero
Dinner at Les Antiquaries
Head over to Champs des Mars after dinner to see Eiffel Tower sparkle, then head over to Louvre to see the glass pyramid light up.
Day 3 #Check out of hotel and head to Gare Montparnasse for day trip to Versailles.
Versailles food \u0026amp; palace bike tour (£88, 08:00-18:00).
Tickets to Palace of Versailles (€30) is extra.
Head to Austerlitz for sleeper train to Nice at 20:20. Grab dinner near Austerlitz before boarding train.
Day 4 #Arrive in Nice Ville at 09:08. Meetup with Tyler and drop bags at accommodation.
Sightsee around central Nice on the way to Airbnb, sights to see:
Promenade des Anglais
Place Massena
Nice Old Town
Head to Monaco for day trip. Take train from Nice Ville to Monaco Monte Carlo (€4.20 each way).
Grab lunch at Maison des Pâtes Condamine (it is inside the food hall at Condamine). Sightseeing afterwards, sights to see in Monaco:
Prince\u0026rsquo;s Palace of Monaco (good view of Port Hercule)
Jardins de Saint-Martin (good view of Port Fontvieille)
Monte Carlo Casino (€17 for entry, includes €10 worth of chips or €10 drink coupon)
Head back to Airbnb for check in and rest up. Chill on the beach in the evening if we are up for it.
Day 5 #Head for breakfast at Chez Maître Pierre, get the almond croissant.
Meet up for stand up paddling activity at Villefranche-sur-Mer, at 09:30 in front of Église Notre-Dame du Port de Nice.
Stand up-paddling activity (£47, highly recommended!)
Grab lunch at Le Rocher chez Mina Moules frites after returning to Nice, then head up to Colline du Château for viewpoint of the beach.
Go to the beach and chill for the evening, grab dinner afterwards.
Day 6 #Chill day, finish exploring the rest of Nice or just chill on the beach. Grab breakfast at Boulangerie roy Le Capitole, get the lavender croissant.
Grab lunch and head to airport by 15:40 for flight to London.
Recommended Places to Eat #La Merenda (Nice) #Local recommended this place to me. Chef was a 2 starred Michelin chef that decided to go back to cooking instead of expediting and take over this small restaurant. Super small joint (25 seats) and reservations are recommended (go a day before/at lunch for dinner). There’s a 7pm and 8.30pm timeslot and if you’re lucky you can book for the latter if you appear at 7pm. French Nicoise food.
More Information →
La Voix de son Maitre (Nice) #Known for their crepes! It’s crisp and pretty decent!
More Information →
Chez Pipo (Nice) #Get the socca from here! It’s a chickpea pancake that’s a speciality in Nice i think.
More Information →
Petisserie Rivieria (Monaco) #If you’re a bread fanatic, head here and get a Tresse, a brioche stuffed with almond cream. It’s absolutely LIFE CHANGING. They only bake one of these a day. It’s about 1.5 foot long so it’s best if you share (or you can just eat it yourself).
More Information →
Du Pain et des Idees (Paris) #Pistachio and chocolate snail pastry is the BEST, absolutely loved it.
More Information →
Frenchie to Go (Paris) #French toast is REALLY good, smoked bacon and maple syrup scone also the bomb though it’s really small.
More Information →
Pierre Herme (Paris) #Macarons are good! Not overly sweet.
More Information →
L\u0026rsquo;Eclair de Genie (Odeon, Paris) #Eclairs! Reminded me of L’eclair back in Singapore, really good quality.
More Information →
Tips #The last Ryanair flight of the day (which is often the cheapest) has quite a high likelihood of being cancelled. It’s happened to me and a bunch of friends who went on a separate occasion too. If you’ve something important on the next day, consider buying an earlier flight.
Try to wait for a Eurostar sale before going to Paris because it can go for as low as 25-35 quid one way and it’s so much more convenient than taking a plane/bus there.
If you want photos without the crowd, wake up early and head to the attractions!
Beware of and stay away from gangs of conmen (e.g. people coming up to you and tying friendship bands on your hand).
Beware of pickpocket (usually on metro).
Beware of people coming up to you to sign “petitions”, you might be pickpocketed while getting distracted.
Going up to the Eiffel tower around sunset might be the best idea, you can see both the day and night skyline with just one ticket.
You’ll probably get the best view of the Eiffel tower from the Palais de Chailot.
`}),e.add({id:2,href:"/docs/europe/berlin/",title:"Berlin",description:"Berlin is the capital and largest city of Germany by both area and population.",content:`Accommodation #Generator Berlin Mitte Oranienburger Strasse 65, Mitte, Berlin, 10117, Germany
Bring a towel and toiletries!
Getting to Accommodation from Airport #Take S-Bahn S9 line from S Flughafen Berlin-Schönefeld Bhf to S Hackescher Markt (13 stops, in direction of S Spandau Bhf)
Take tram M1 line from S Hackescher Markt to Berlin Oranienburger Straße (2 stops, in direction of Mitte, Am Kupfergraben)
Walk to accomodation
Total 55 min
Itinerary #Getting Around #Schoenefeld Airport is in zone C
Single trip on public transport costs 3.40 EUR for zones ABC, valid for 2 hours
1 day group ticket for up to 5 people costs 20.80 EUR for zones ABC
More Information →
Day 1 #Meet at Victoria Coach Station at 04:15
Do visa check and clear security upon arrival at Stansted at 06:25
Land in Berlin Schoenefeld at 10:40
Head to Schwarzwaldstuben for lunch
Head to Reichstag for dome visit at 2pm
After Reichstag, explore the remaining sights in the city:
Brandenburg Gate
Memorial to the Murdered Jews of Europe
Potsdamer Platz
Checkpoint Charlie
Head to accomodation to check-in. Rest up and head out for dinner at Acht\u0026amp;Dreissig across the road.
Head to Brandenburg Gate again for the night view
Day 2 #Check out of accommodation. Head to Chipps for brunch.
Stop by Gendarmenmarkt to take pictures and visit the nearby Ampelmann store
Head to the Victory Column in Tiergarten park for view from the observation deck.
Afterwards, head to:
Topography of Terror (free entry museum)
Berliner Dom
After lunch, head off to see these sights:
East Side Gallery
Oberbaumbrucke
Alexanderplatz
Dinner at Hofbrau
Start heading to the airport by 18:30
Tips #Most German cities tend not have gantries for their public transit systems, so it is technically possible to ride for free.
However, checks by conductors are frequent and fines when caught are high, so don’t test your luck!
Look out for group day tickets for city public transport which can help you save a lot!
Germany is a cash-heavy country, and certain establishments do not accept card payment, so it would be great to withdraw/change some Euros in advance!
While the German Autobahn is known to have no speed limit, be advised that certain sections do have speed limits, especially near cities, so do adhere to them. Also, exercise caution when driving fast.
Many places are closed on Christmas Day, Boxing Day, New Year’s Eve and New Year’s Day. so try and avoid visiting during this period
If you intend to visit the Reichstag Dome, make sure that you register online in advance! Also make sure that you bring photo ID (i.e. passport) for your visit.
Check out the Ampelmann stores in Berlin for the green traffic light man-themed merchandise.
`}),e.add({id:3,href:"/docs/uk/cambridge/",title:"Cambridge",description:"Cambridge is a city on the River Cam in eastern England, home to the prestigious University of Cambridge, dating to 1209.",content:`Recommended Places to Visit #Bath is a city on the River Cam in eastern England. It occupies an area of 40.7 km². It is home to the University of Cambridge, which contains exhibits on archaeology and anthropology, polar exploration, the history of science and zoology.
Trinity College, St. John’s College, King’s College #👉 These are the most aesthetic Colleges! Trinity College, St. John\u0026rsquo;s College and King\u0026rsquo;s College are constituent colleges of the University of Cambridge. They have extremely distinctive architectures.
Certain colleges (yes, this includes the three above) in Cambridge charge entrance fees for visitors. However, if you have a friend who studies at Cambridge, he or she can bring you in for free (and a few other friends, although only up to a certain number).
However take note that sometimes a college may be closed to all visitors due to private events.
More Information →
River Cam #The River Cam is the main river flowing through Cambridge in eastern England. After leaving Cambridge, it flows north and east before joining the River Great Ouse to the south of Ely, at Pope\u0026rsquo;s Corner.
The River has an assortment of wildlife, as well as architecture, to admire.
More Information →
Bridge of Sighs #👉 This is where Lee Kuan Yew and Kwa Geok Choo took that famous photo! The Bridge of Sighs in Cambridge, England is a covered bridge at St John\u0026rsquo;s College, Cambridge University. It was built in 1831 and crosses the River Cam between the college\u0026rsquo;s Third Court and New Court.
St John’s is one of the only Cambridge Colleges to feature two bridges on its main site. The second bridge is the ‘Wren Bridge’ (also known as ‘Kitchen Bridge’), which runs parallel to the Bridge of Sighs.
More Information →
Mathematical Bridge #The Mathematical Bridge is the popular name of a wooden footbridge in the southwest of central Cambridge, England. It bridges the River Cam about one hundred feet northwest of Silver Street Bridge and connects two parts of Queens\u0026rsquo; College.
Its official name is simply the Wooden Bridge or Queens\u0026rsquo; Bridge.
More Information →
Market Square #Cambridge is a market city, and stalls have been trading at the historic market square in the city centre since the middle ages. From Monday-Sunday, 10am-4pm, you will find stalls selling a wide range of goods.
More Information →
Recommended Activities #Punting and Formals are some of the more famous activities to do in Cambridge. As always, do stop and have a pint at the famous pubs too.
Punting #This involves taking a boat ride on the River Cam. To propel and steer the boat, one stands at the back of the boat and pushes a long metal pole against the river bed.
If you have a friend in Cambridge, he/she may be able to borrow his/her college’s punts for some punting. However this is generally not possible during the winter months.
There are commercial punts that operate throughout winter, however these are rather pricey unless you opt for self-hire.
Please ensure that you are confident before choosing to self-hire as there is always the risk of falling into the river if you are inexperienced at punting.
More Information →
Formals #Most colleges hold formal dinners at regular intervals during term time.
Generally it is only possible to attend these if your friend at Cambridge invites you for them, so do ask your friend.
Do ensure that you have formal wear if you are attending these formals!
More Information →
Tips #Having a 16-25 Railcard is good, it gives you a discount on the rail fare to Cambridge.
Trains from London to Cambridge run from Liverpool Street or Kings Cross.
The Greater Anglia service from Liverpool Street offers the best value for money.
You can get a return Super Off-Peak Day Return ticket for £8.80 (with railcard discount). It technically allows you to take any train between Liverpool Street and Cambridge in any direction, so long as it is operated by Greater Anglia.
Having a friend who studies at Cambridge to show you around is the best way to explore Cambridge.
A day trip to Cambridge is more than sufficient, as it is a really compact town.
`}),e.add({id:4,href:"/docs/uk/jurassic-coast/",title:"Jurassic Coast",description:"The Jurassic Coast is a World Heritage Site on the English Channel coast of southern England.",content:`Recommended Places to Visit #The Jurassic Coast stretches from Exmouth in East Devon to Studland Bay in Dorset, a distance of about 96 miles, and was inscribed on the World Heritage List in mid-December 2001.
Old Harry Rocks #👉 A must see. Old Harry Rocks are three chalk formations, including a stack and a stump, located at Handfast Point, on the Isle of Purbeck in Dorset, southern England.
They mark the most eastern point of the Jurassic Coast, a UNESCO World Heritage Site.
Further south from Old Harry Rocks along the South West Coast Path is the charming coastal town of Swanage, and beyond that Durlston Country Park and Dancing Ledge.
More Information →
Lulworth Cove #Formed by the combined forces of the sea and a river swollen by melting ice at the end of the last Ice Age.
Lulworth Cove is world famous for its unique geology and landforms including the Lulworth Crumple and Stair Hole.
From rock-pooling and watersports, to walking, coasteering or just relaxing with an ice cream, this is a must-visit destination on the Dorset Coast.
More Information →
Durdle Door #Durdle Door is one of Dorset’s most photographed and iconic landmarks. It is part of the Jurassic Coast World Heritage Site and is an extremely popular beauty spot.
It is located on the Lulworth Estate in south Dorset and is part of the Jurassic Coast.
The magnificent natural limestone arch was formed when the power of the waves eroded the rock and forged a hole through the middle. The name Durdle is derived from an old English word ‘thirl’, which means to pierce, bore or drill.
More Information →
Corfe Castle #Corfe Castle is a village and civil parish in the English county of Dorset. It is the site of a ruined castle of the same name.
The village and castle stand over a gap in the Purbeck Hills on the route between Wareham and Swanage.
More Information →
Corfe Train Station #👉 A vintage train pulls in every now and then. Corfe Castle railway station is a railway station located in the village of Corfe Castle, in the English county of Dorset.
Originally an intermediate station on the London and South Western Railway (L\u0026amp;SWR) branch line from Wareham to Swanage, the line and station were closed by British Rail in 1972.
More Information →
Weymouth Town #Weymouth is a seaside town in Dorset, southern England.
Its sandy beach is dotted with colorful beach huts and backed by Georgian houses.
Weymouth Sealife Park is home to sharks, turtles and stingrays.
More Information →
Recommended Places to Eat #A good trip should be accompanied by good food (and of course, good friends).
Bankes Arms Inn Pub #The Bankes Arms Inn in Studland, Dorset, could almost set the blueprint for every other traditional country pub.
Dating back to the 16th century and built from local quarried stone, the pub is surrounded by lush Purbeck countryside. The Bankes Arms has welcoming open fires in winter and a large pub garden for refreshing drinks in summer.
It\u0026rsquo;s a little pricey, but has a nice atmosphere.
More Information →
Weymouth Harbour Street #There are several good pubs and restaurants along this street such as The Ship Inn and The Royal Oak.
More Information →
IKEA at Southampton #On the way back to London, there is an IKEA at Southampton. It\u0026rsquo;s a great place to stock up on Ikea foodstuff and to visit if you miss home.
More Information →
Tips #The best way to explore the Jurassic Coast is by car as the sights on the coast are not very accessible with public transport.
We usually rent a car from the Sixt rental station for Heathrow airport, in this way we can avoid the central London congestion charge and hit the highway straightaway.
The nearest tube station to this Sixt rental station is Hatton Cross.
Other rental firms are available as well but most of us go for Sixt as their prices a friendlier and they are more friendly towards debit card payments.
Check their website for the requirements if you are renting with a debit card.
`}),e.add({id:5,href:"/docs/uk/peak-district/",title:"Peak District",description:"The Peak District is an upland area in England at the southern end of the Pennines. Mostly in Derbyshire, it extends into Cheshire, Greater Manchester, Staffordshire, West Yorkshire and South Yorkshire. ",content:`Recommended Places to Visit #The Peak District forms the southern extremity of the Pennines. Much of it is upland above 1,000 feet (300 m), its highest point being Kinder Scout at 2,087 ft (636 m).
Town of Tideswell #Walking around Tideswell, especially St John’s Church and its surroundings is nice.
More Information →
Town of Bakewell #Walking around the River Wye is nice.
More Information →
Chatsworth House #Bakewell DE45 1PP.
1600s Mansion and playground.
Christmas Market - but prices are high, might get some deals if you’re lucky.
Touristy places, expect touristy prices.
More Information →
Kinder Scout #👉 Must Visit Location. Mountaineous region and hiking trails, 400m elevation.
Estimated duration: 6-7 hours, must be down before sunset.
Scenic views on top, look out for a small waterfall.
Rocky trails - be careful. Bring thermal wear and water.
More Information →
Mam Tor and Back Tor #👉 Low temperature and high winds, prepare sufficient thermal wear and water. Wear comfortable shoes. Mountaineous region and hiking trails, 250-300m elevation.
Scenic views on top, overlooking towns and valleys.
Mam Tor and Back Tor are connected.
More Information →
Recommended Places to Eat #Many good stops along the way. Perfect for a road trip or a detour.
Elliot\u0026rsquo;s Fish and Chips #👉 Best Fish and Chips Store in the World. Commercial Road, Tideswell, Buxton SK17 8NU.
Cheap prices - £5.30 for Haddock or Cod.
Generous portions of fries and fish, batter is amazing.
Other side dishes - Spam fritters, onion rings, scampi, nuggets.
Very cheerful owner!
More Information →
High Nelly’s Cafe #2 Bank Square, Tideswell, Buxton SK17 8LA.
Good and delicious English Breakfast.
Slightly costly: ~ £10.
More Information →
The Old Original Bakewell Pudding Shop #The Square, Bakewell DE45 1BT.
Originators of Bakewell pudding - touristy prices.
More Information →
Fiveways Cafe #👉 Highly Recommended. 1 West Rd, Buxton SK17 6HE.
Very cheap but even more generous breakfast - ~£6 for: Baked beans, sausagges, toast, tomatoes, mushrooms, coffee/tea, eggs.
More Information →
Noodle Doodle #34 Trippet Ln, Sheffield S1 4EL.
Good Malaysian/Singaporean food place.
Many varieties - Mala, Nasi lemak, Laksa, homely comfort food.
Pricing is average London prices.
More Information →
Tips #We used a Car hire from Sixt @ Hatton Cross. It costed £266 - inclusive of Young Driver Surcharge, Fuel and Add on costs.
We stayed at Rockingham Lodge, Market Square, Tideswell, Buxton SK17 8LQ. It was good: clean and tidy with a spacious living room. Many amenities are available and kitchen appliances were very useful. Comfortable bedrooms, washing machine and dryers are available. Very kind owner, good distance from town centre and other towns!
`}),e.add({id:6,href:"/docs/uk/scotland-road-trip/",title:"Scotland Road Trip",description:"Scotland is a country that is part of the United Kingdom.",content:`Itinerary Outline #Day Location Overnight 1 Edinburgh Edinburgh 2 Forth Bridge, Loch Level, Pitlorchy Pitlorchy 3 Inverness, Loch Ness, Skye Skye 4 Skye Skye 5 Fort William, Glenfinnan, Glencoe Onich 6 Glencoe, Loch Lomond, Glasgow Glasgow 7 Glasgow Glasgow Itinerary Inspiration →
Day 1 #Reach London Kings Cross early in the morning before 08:52 departure to Edinburgh Waverley.
Arrive at Edinburgh Waverley at 13:10 (4 h 18 min journey). Get lunch and check in to apartment afterwards. Head out for sightseeing around Edinburgh.
Sights to see:
Arthur’s Seat (will need to hike up)
Edinburgh Castle
Edinburgh Old Town
Royal Mile
Day 2 #Road Trip Map →
Pick up rental car from Arnold Clark Edinburgh Seafield at 09:00.
Drive to Maid of the Forth for 3 Bridges Sightseeing Tour (£16/pp) from 10:30 to 13:00, to see the Forth Bridge and maybe puffins.
Grab lunch nearby, then drive to Loch Leven Castle Viewpoint (28 min) to see the castle.
Drive to Pitlorchy (54 min) and check into Pitlorchy Youth Hostel. Get groceries for dinner before heading to Pitlochry’s Recreation Ground at 19:00 for Highland Nights show (£7/pp). Show ends at 21:00.
Day 3 #Check out of Hostel. Drive to Dores Beach for viewpoint of Loch Ness (1 h 51 min). Drive to Inverness for lunch (17 min).
After lunch, drive to Cliff Cottage for check in (2 h 20 min). If time permits, can explore sights on Skye. Otherwise go get groceries for dinner.
Day 4 #Isle of Skye Itinerary →
Explore Skye, sights to see:
Old Man of Storr
The Brother’s Point
Kilt Rock and Mealt Falls
Quiraing
Fairy Glen
Dunvegan Castle
Neist Point Lighthouse
Fairy Pools
Day 5 #Check out of Cliff Cottage in morning and drive to Fort William (1 h 42 min) for lunch. Explore the town and try to get up close to Ben Nevis for pictures.
After lunch, drive to Glenfinnan Viaduct (30 min). Aim to arrive by 14:40 to see the steam train pass through the viaduct.
Drive to Onich (25 min) and check into Airbnb (10mins away from Glencoe). Stop by Ballachulish View Point on the way.
After checking in, drive out and get groceries for dinner.
Day 6 #Check out of Airbnb in morning (09:00) and drive to Luss (1 h 20 min) to see Loch Lomond.
Stop by Glencoe sights along the way:
Three Sisters Viewpoint
The Meeting of Three Waters
Glencoe Viewpoint
Devil’s Staircase
James Bond Skyfall Road
Lunch in Luss. Afterwards, consider doing some water activities on Loch Lomond at Luss:
Single/twin/triple kayak - £35/£40/£50 for 2 hours.
Stand up paddleboard - £35 for 2 hours.
Leave Luss by 16:00 and drive to Glasgow (45 min) to return car by 17:00 at Arnold Clark Glasgow Kilbirnie Street. Head to Airbnb to check in and then go for dinner.
Day 7 #Glasgow in 1 day →
Explore Glasgow, sights to see:
George Square
Glasgow Cathedral
Glasgow Necropolis
Glasgow murals
Gallery of Modern Art (just look from outside is fine)
Riverside Museum (free)
Tall Ship at Riverside (free)
Kelvingrove Park
Glasgow University (University Cloisters)
Merchant Square
Lunch at Willow Tea Rooms near Gallery of Modern Art. Dinner in Merchant Square area. Go for drinks at pub, should have live music since it is Saturday.
Bars in Glasgow with free live music →
Tips #We rented a Peugeot 3008 Auto from Arnold Clark Edinburgh Sighthill. It costed £855 including full insurance, young driver\u0026rsquo;s surcharge and one-way fee.
`}),e.add({id:7,href:"/docs/uk/bath/",title:"Bath",description:"Bath is the largest city in the county of Somerset, England, known for and named after its Roman-built baths.",content:`Recommended Places to Visit #Bath is a sprawling city of slightly above a hundred thousand in population and is 97 miles west of London.
The Roman Baths #👉 You have to see this, it is what you came to Bath for! Once the site of one of the great religious spas of the ancient world. People of Roman Britain came to the site to worship and bathe in the waters of the natural thermal springs, which still flow with hot water today.
Tickets with student discount for the Roman Baths are available. If you purchase online, there is a further 10% discount. £13.05 for weekday, £15.30 for weekend.
Remember to pick up an audio guide before entering, as it is already included in the ticket price.
More Information →
Bath Abbey #The Abbey Church of Saint Peter and Saint Paul, commonly known as Bath Abbey, is a parish church of the Church of England and former Benedictine monastery in Bath, Somerset, England.
Some interesting things to do include following the story of Jesus told across 56 scenes on the Great East Window. Badly damaged during World War II, it was beautifully restored by a father-and-son team in the 1950s.
You can also pop by the Abbey Shop and enjoy browsing through the selection of Christian books, music and souvenirs.
More Information →
Pulteney Bridge #Pulteney Bridge is a bridge over the River Avon in Bath, England. It was completed by 1774, and connected the city with the land of the Pulteney family which it wished to develop.
It is one of only three bridges in the world lined with shops. The exquisite 18th-century bridge is one of the most admired structures in Bath.
More Information →
Christmas Markets (December Only) #Going to Bath in December may be more worth your time, as during that month the Bath Christmas markets are open, so you have something additional to explore besides the baths. Do check online for the exact opening dates. Do expect crowds as well as everyone has the same idea too.
It’s a place where the scent of Christmas dances through the air, traditional artisan makers line the streets, and festive cheer lies on every corner.
More Information →
Jane Austen Centre #👉 Definitely go if you like her novels. The Jane Austen Centre in Bath focuses on the life and works of Jane Austen, as well as the Regency period in which she lived. A constantly evolving attraction, the Centre aims to inform and entertain visitors.
Tickets are needed to enter visit the Jane Austen Centre; student tickets are available online at £10.50.
More Information →
Recommended Places to Eat #We recommend one pub in particular to visit during your time there. Fret not, there are also plenty of other extremely good options.
Raven Ale #The Raven is a traditional old English pub that does good hearty pies and sausages complemented by an ever-changing selection of real ales, ciders or wine. They are a cultural, historical gem of a pub off Queen’s Square in the centre of Bath.
Specialising in Pies, Ales and Ciders, the Pub is worth a visit.
More Information →
Tips #A day trip is really sufficient for this city, as the main highlight is the Roman Baths.
To get to Bath from London, you can either take the train (Great Western Rail from Paddington) or the coach (National Express from Victoria Coach Station).
The train is the pricier option, at about £40 return, while the coach costs about £20 return.
However, the coach takes twice as long as the train to get to Bath (3h for coach, 1h 30 min for train).
If you have the time, consider taking the train further down to Bristol, home of the famous Clifton Suspension Bridge.
`}),e.add({id:8,href:"/docs/us/coming-soon/",title:"Coming Soon",description:"Check out our other guides in the meantime.",content:`Stay tuned!
`}),e.add({id:9,href:"/docs/uk/",title:"UK",description:"UK Doks.",content:""}),e.add({id:10,href:"/docs/europe/",title:"Europe",description:"Europe Doks.",content:""}),e.add({id:11,href:"/docs/us/",title:"US",description:"US Doks.",content:""}),e.add({id:12,href:"/docs/europe/copenhagen-malmo/",title:"Copenhagen and Malmo",description:"Copenhagen, Denmark’s capital, sits on the coastal islands of Zealand and Amager.",content:`Itinerary #Day 1 #Time Activity Remarks 0500 Be at Paddington Station for Easybus Bus at 0515, if reached early can aim to go for the 0445 bus 0650 Reach airport, clear check-in 0900 Flight to Copenhagen 1100 Reach Copenhagen, Clear Immigration 1200 Take Metro to City. From Koebenhavns Lufthavn st (Airport) Station, take Train 029 towards Nivå St. for 3 stops to Copenhagen Central Station. Buy tickets at metro. 1300 Rent a bike using the DonkeyRepublic App Around 8 pounds for 6 hours rental, can be locked and unlocked multiple times until bike is returned 1330 First Stop at Torvehallerne/Gasoline Grill for Lunch Choose one, the other will be for lunch the next day 1430 Bike Around Central Copenhagen: Tivoli Gardens, Copenhagen University, The Round Tower, Copenhagen Botanical Gardens, Amalienborg Palace, Frederik’s Church, Nyhavn Harbour 1800 Sunset at Nyhavn Harbour Sunset at Appx 1840 on 3 Oct 1900 Dinner at Copenhagen City Centre. Options: Slurp Ramen, WOK Vesterbro (Thai Food, slightly further away), Madbaren Marmorkirken (Pizza), Next Door Cafe 2000 Cycle/Train back to Airbnb, Visit Supermarket at Vanlose St for Breakfast Fotex/Irma (Closes at 9pm), Netto (Closes at Midnight) Day 2 #Time Activity Remarks 0730 Check-out of Airbnb. Bring bags. 0800 Rent bike from DonkeyRepublic. Bike Dock at Vanlose St Metro 0830 Morning Biking at Copenhagen City Centre: Little Mermaid Statue, Kastallet, Gefion Fountain, Fredrerik\u0026rsquo;s Church Walk around any attractions missed the previous day 1300 Lunch at Gasoline Grill - Vesterport Station/Torvehallernel 1400 Train from Copenhagen Central to Malmo Central Station Buy tickets at train station. 40 Min Ride. 1500 Reach Malmon Central Station. Rent a Bike using DonkeyRepublic. 1500 Biking around Malmo: Utsiktspunkt Oresundsbron (View of Oresund Bridge, Half and Hour Bike Ride Away), Stortoget, St Peter\u0026rsquo;s Church, Lila Torg (Has nice Cafes), Malmo Castle, Malmo Museum 1930 Dinner at Davidhall\u0026rsquo;s Pizzeria 2100 Train from Malmo Central to Copenhagen Airport 20 min ride. Aim to reach airport around 2030. Chill in Airport until Flight. 2215 Flight to London 2315 Reach Stansted, take Eastbus back to London Paddington Timezone -1Hr. Easybus at 0100. Try to get on 0030 Bus. Recommended Places to Eat #Grod #Ang moh porridge but it’s really good! Basically oats cooked in milk with toppings of your choice.
More Information →
Cocio #It’s not a restaurant, but a brand of chocolate milk that will change your world. You should be able to find it in most supermarkets.
More Information →
Gasoline Grill #Not sure if it was the cold but this tasted really good.
More Information →
Tips #Copenhagen is a cycling city and it’s really quite an experience exploring the city + outskirts by bike! You should be able to easily find a bicycle rental app which you can use (e.g. Donkey Republic). Otherwise you can check bike shops (they are everywhere!) to see if they have rentals.
If you cycle you will be able to clear most of the attractions in the city within a day (yes it’s that small).
Food is extremely expensive in Copenhagen, if you are renting an Airbnb you may want to consider cooking or prepping your own meals.
The nearby Swedish cities of Malmo \u0026amp; Lund are accessible by train (30-40minutes), good idea to visit as well (although they have even less attractions than Copenhagen).
Copenhagen is pretty cashless so no need to worry about bringing the local currency with you. Take note that the Danish krone (DKK) is used in Denmark, not the Euro.
`}),e.add({id:13,href:"/docs/",title:"Drive",description:"Drive Doks.",content:""}),search.addEventListener("input",t,!0);function t(){const s=5;var n=this.value,o=e.search(n,{limit:s,enrich:!0});const t=new Map;for(const e of o.flatMap(e=>e.result)){if(t.has(e.doc.href))continue;t.set(e.doc.href,e.doc)}if(suggestions.innerHTML="",suggestions.classList.remove("d-none"),t.size===0&&n){const e=document.createElement("div");e.innerHTML=`No results for "<strong>${n}</strong>"`,e.classList.add("suggestion__no-results"),suggestions.appendChild(e);return}for(const[r,a]of t){const n=document.createElement("div");suggestions.appendChild(n);const e=document.createElement("a");e.href=r,n.appendChild(e);const o=document.createElement("span");o.textContent=a.title,o.classList.add("suggestion__title"),e.appendChild(o);const i=document.createElement("span");if(i.textContent=a.description,i.classList.add("suggestion__description"),e.appendChild(i),suggestions.appendChild(n),suggestions.childElementCount==s)break}}})()
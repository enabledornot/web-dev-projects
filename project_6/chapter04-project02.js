const commonFirstNames = ["John", "Mary", "James", "Jennifer", "Robert", "Linda", "Michael", "Elizabeth", "William", "Susan"];
const commonLastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Martinez"];
const commonRoads = ["Main", "High", "Park", "Elm", "Oak", "Biden", "Washington", "Lincoln", "Carter", "Maple", "Pine", "River", "Forest", "Lake", "Broad", "Market", "Broadway", "Mill", "Cedar", "Hill", "Cottage", "Meadow", "Valley", "Crescent", "Sunset", "Ocean", "Mount", "Spring", "Summer", "Autumn", "Winter", "Lakeside", "Riverside", "Sunrise", "Sunset", "East", "West", "North", "South", "Central", "Old", "New", "Grand", "College", "University", "State", "County", "Country", "International", "Industrial", "Commercial", "Residential", "Historic", "Victory", "Liberty", "Freedom", "Hope", "Faith", "Charity", "Prospect", "Harbor", "Bay", "Port", "Square", "Circle", "Triangle", "Diamond", "Plaza", "Center", "Crossing", "Gateway", "Point", "Path", "Trail", "Lane", "Way", "Boulevard", "Expressway", "Highway", "Freeway", "Turnpike", "Parkway", "Avenue", "Street", "Drive", "Road", "Terrace", "Court", "Place", "Alley", "Grove", "Bend", "Ridge", "Garden", "Glen", "Vista", "Mall", "Row"];
const commonRoadTypes = ["Avenue", "Street", "Way", "Boulevard", "Lane", "Drive", "Road", "Court", "Terrace", "Circle", "Place", "Square", "Trail", "Parkway", "Court", "Place", "Crescent", "Highway", "Loop", "Alley", "Path", "Expressway", "Crossing", "Park", "Row", "Pathway", "Promenade", "Vista", "Grove", "Plaza", "Turnpike", "Mews", "Trace", "Manor", "Gardens", "Gate", "Commons", "Ridge", "Cross", "Port", "Center", "Woods", "View", "Heights", "Branch", "Pass", "Landing", "Bay", "Mall", "Hill", "Slope", "Harbor", "Shore", "Strand", "Fork", "Haven", "Orchard", "Meadow", "Run", "Brook", "Dale", "Key", "Spur", "Green", "Shoal", "Pike", "Passage", "Field", "Crossroad", "Ranch", "Crossroad", "Course", "Gate", "Mile", "Park", "Park", "Canyon", "Crossing", "Highlands", "Ridge", "Village", "Pike", "Bend", "Row", "Valley", "Park", "Glen", "Court", "Mill", "River", "Hill", "Pass", "Shoal", "Point", "Curve", "Trace", "Bayou", "Forge", "Port", "Place", "Landing", "Shoals", "Junction", "Ridge", "Plains", "Mountain", "Glade", "Passage", "Plains", "Garden", "Hill", "Glen", "Cove", "Bluff", "Plaza", "Row", "Hollow", "Row", "Field", "Corners", "Landing", "River", "Glen", "Vale", "Bluff", "Grove", "Ferry", "Vale", "Mill", "Landing", "Bluffs", "Trace", "Brook", "Orchard", "Crest", "Hollow", "Trail", "Woods", "Shores", "Landing", "Vale", "Vale", "Crossing", "Boulevard", "Crossing", "Parkway", "Hollow", "Manor", "Alley", "Meadows", "Corners", "Bluffs", "Plaza", "Meadows", "Glen", "Orchard", "Brook", "Ferry", "Crossroad", "Corners", "Boulevard", "Meadow", "Creek", "Branch", "Mill", "Trace", "Trail", "Alley", "Row", "Landing", "Bluff", "Run", "Way", "Key", "Center", "Haven", "Mall", "Turnpike", "Port", "Boulevard"];
const commonCities = ["Redmond", "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville", "San Francisco", "Columbus", "Fort Worth", "Indianapolis", "Charlotte", "Seattle", "Denver", "Washington", "Boston", "El Paso", "Detroit", "Nashville", "Portland", "Memphis", "Oklahoma City", "Las Vegas", "Louisville", "Baltimore", "Milwaukee", "Albuquerque", "Tucson", "Fresno", "Sacramento", "Kansas City", "Long Beach", "Mesa", "Atlanta", "Colorado Springs", "Virginia Beach", "Raleigh", "Omaha", "Miami", "Oakland", "Minneapolis", "Tulsa", "Wichita", "New Orleans", "Arlington", "Cleveland", "Tampa", "Bakersfield", "Aurora", "Honolulu", "Anaheim", "Santa Ana", "Corpus Christi", "Riverside", "St. Louis", "Lexington", "Pittsburgh", "Stockton", "Anchorage", "Cincinnati", "Saint Paul", "Greensboro", "Toledo", "Newark", "Plano", "Henderson", "Lincoln", "Buffalo", "Fort Wayne", "Jersey City", "Chula Vista", "Orlando", "St. Petersburg", "Norfolk", "Chandler", "Laredo", "Madison", "Durham", "Lubbock", "Winston-Salem", "Garland", "Glendale", "Hialeah", "Reno", "Baton Rouge", "Irvine", "Chesapeake", "Irving", "Scottsdale", "North Las Vegas", "Fremont", "Gilbert", "San Bernardino", "Boise"];

function randomDigit(len) {
    var dig = "";
    for(var i = 0; i < len; i++) {
        dig = dig + parseInt(Math.random() * 10);
    }
    return dig;
}

window.onload = function() {
   const r1 = Math.floor(Math.random() * commonFirstNames.length);
   const r2 = Math.floor(Math.random() * commonLastNames.length);
   document.getElementById("name").innerHTML = commonFirstNames[r1] + " " + commonLastNames[r2];

   const w0 = Math.floor(Math.random() * commonRoads.length);
   const w1 = Math.floor(Math.random() * commonRoadTypes.length);
   const w2 = Math.floor(Math.random() * 100);
   document.getElementById("address").innerHTML = commonRoads[w0] + " " + commonRoadTypes[w1] + " " + w2;

   const c = Math.floor(Math.random() * commonCities.length);
   document.getElementById("city").innerHTML = commonCities[c];

   document.getElementById("postal").innerHTML = randomDigit(5) + "-" + randomDigit(4);
}
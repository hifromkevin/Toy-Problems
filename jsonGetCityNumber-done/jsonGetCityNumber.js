/* You have a JSON response with a list of cities and their corresponding ID's, there's also an array called selected with city names defined.

Your exercise consist on creating a new array with the ID's of the cities that match those in the `selected` array.
Bonus points: 
- Consider performance
- Clean code
*/
var selected = ["Carrollton, TX", "Allen, TX"];
var response = {
  "status": "success",
  "data": {
    "citiesCount": 20,
    "cityIds": [
      {
        "cityId": "574",
        "cityAndState": "Allen, TX"
      },
      {
        "cityId": "722",
        "cityAndState": "Arlington, TX"
      },
      {
        "cityId": "1736",
        "cityAndState": "Carrollton, TX"
      },
      {
        "cityId": "1737",
        "cityAndState": "Dallas, TX"
      },
      {
        "cityId": "1739",
        "cityAndState": "Baltimore, MD"
      },
      {
        "cityId": "1740",
        "cityAndState": "Ann Arbor, MI"
      },
      {
        "cityId": "1741",
        "cityAndState": "Detroit, MI"
      },
      {
        "cityId": "1742",
        "cityAndState": "Royal Oak, MI"
      },
      {
        "cityId": "1743",
        "cityAndState": "Maddison Heights, MI"
      }
    ]
  }
}

function findCityId(arrOfCities, arrOfResponses) {
  var arrayOfCityIds = [];
  
  for (var i = 0; i < arrOfCities.length; i++) {    
    for (var j = 0; j < arrOfResponses["data"]["cityIds"].length; j++) {
      if (arrOfCities[i] === arrOfResponses["data"]["cityIds"][j]["cityAndState"]) {
        arrayOfCityIds.push(arrOfResponses["data"]["cityIds"][j]["cityId"]);
      }
    }
  }
  
  return arrayOfCityIds;
}

console.log(findCityId(selected, response));
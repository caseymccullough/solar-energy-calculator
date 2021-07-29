# Solar Energy Calculator (A clone of NREL's PVWatts)

[Try the App!](https://solar-energy-calculator.herokuapp.com/)

This application emulates the [PVWatts application](https://pvwatts.nrel.gov/) produced by the National Renewable Energy Lab. Though it is somewhat different in appearance, it provides the same basic functionality as the NREL site. My site leverages NREL's PVWatts API to offer the user information on the likely productivity of a photovoltaic power system in a given location. The site translates geographic information into solar energy data, then combines that with specific details about the planned PV system (as entered by the user). The combination of solar and system information enables a month-by-month estimation of the electricity cost savings 

## Technologies Used: 

React, JavaScript, HTML, CSS, React-Bootstrap (for Table, Form, and Carousel)
APIs: [Google Geocode](https://maps.googleapis.com/maps/api/geocode/json), [React Google Maps](https://react-google-maps-api-docs.netlify.app/), and [NREL PVWatts V6](https://developer.nrel.gov/docs/solar/pvwatts/v6/)

## Getting Started: 

[Find it on Heroku](https://electric-sage.herokuapp.com/)

## Unsolved Problems: 

Under System Information the pull-down menus continue to show their original labels even after a selection has been made, making it difficult for a user to know if his/ her selection has registered. 

![image](https://user-images.githubusercontent.com/11179812/127494604-d101a696-13db-47a4-a75b-4d33cb75b294.png)


## Future Enhancements: 

First, I want to make the aesthetic of the system info data confirmation / entry more in line with that of the NREL page. 

Secondly, I want to adjust the map, which currently bleeds off the screen a bit. I'd also like to change the label to the address entered by the user (currently it says "Location"). 

Currently the user must hit a button on the Submit Data page to validate all data (thus triggering a call to the PVWatts API). This is different to all previous navigation which takes place through the navigation arrows on the right and left side of the screen. A better solution will automatically make the API call when the user clicks the arrow that advances him / her to the Results page, eliminating the need for the button. 

The actual PVWatts app has a nice display at the top of the page that shows all required steps towards the completion of the analysis. In a future version I would like to replicate this. 

![image](https://user-images.githubusercontent.com/11179812/127490311-8860f570-8363-4f93-99c3-30e60f4be933.png)

Similarly, the NREL site's navigation arrows offer information about the destination to which they will take the user. 

![image](https://user-images.githubusercontent.com/11179812/127490704-a0722c53-0459-4d5f-b089-4a4bef3c3ee2.png)

Finally, my site does not tap into NREL's database of retail electricity prices (as does PVWatts). I'd like to add a call to this NREL API, which would offer users an electricity price based on their region. 




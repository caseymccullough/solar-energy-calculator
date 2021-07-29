# Solar Energy Calculator 
## (A clone of NREL's PVWatts)

[Try the App!](https://solar-energy-calculator.herokuapp.com/)

### This application emulates the [PVWatts application](https://pvwatts.nrel.gov/) provided by the National Renewable Energy Lab. Though it is somewhat different in appearance, it provides the same basic functionality as the NREL site. My site leverages NREL's  



## Technologies Used: 

React, JavaScript, HTML, CSS, Bootstrap (for Table, 
APIs: [Google Geocode](https://maps.googleapis.com/maps/api/geocode/json), [React Google Maps](https://react-google-maps-api-docs.netlify.app/), and [NREL PVWatts V6](https://developer.nrel.gov/docs/solar/pvwatts/v6/)

## Getting Started: 

[Find it on Heroku](https://electric-sage.herokuapp.com/)

## Unsolved Problems: 

Under System Information the pull-down menus continue to show their original labels even after a selection has been made, making it difficult for a user to know if his/ her selection has registered. 

![image](https://user-images.githubusercontent.com/11179812/127494604-d101a696-13db-47a4-a75b-4d33cb75b294.png)


## Future Enhancements: 

First, I want to make the aesthetic of the system info more in line with that of the NREL page. 

The actual PVWatts app has a nice display at the top of the page that shows all required steps towards the completion of the analysis. In a future version I would like to replicate this. 

![image](https://user-images.githubusercontent.com/11179812/127490311-8860f570-8363-4f93-99c3-30e60f4be933.png)

Similarly, the NREL site's navigation arrows offer information about the destination to which they will take the user. 

![image](https://user-images.githubusercontent.com/11179812/127490704-a0722c53-0459-4d5f-b089-4a4bef3c3ee2.png)

Finally, my site does not tap into NREL's database of retail electricity prices (as does PVWatts). I'd like to add a call to this NREL API, which would offer users an electricity price based on their region. 




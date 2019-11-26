/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["::fff:0.0.0.0/1", "::fff:128.0.0.0/2", "::fff:192.0.0.0/3", "::fff:224.0.0.0/4", "127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
			config: {
				showWeek: true,
			}
		},
		{
			module: "calendar",
			header: "Everyday is a good day",
			position: "top_left",
			config: {
				timeFormat: "absolute",
				calendars: [
					// {
					// 	symbol: "calendar-check",
					// 	url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"
					// },
					// {
					// 	symbol: "calendar-check",
					// 	url: "http://www.google.com/calendar/ical/china__zh_cn@holiday.calendar.google.com/public/basic.ics"
					// },
					{
						symbol: "calendar-check",
						url: "https://raw.githubusercontent.com/waytry/MagicMirror/master/_data/myevents.ics"
					},
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Suwanee, GA",
				locationID: "4225309",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "3989e85b152390446c842e53b51ff4a3",
				showHumidity: true,
				useLocationAsHeader: true
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			//header: "Weather Forecast",
			config: {
				location: "Suwanee",
				locationID: "4225309",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "3989e85b152390446c842e53b51ff4a3",
				// maxNumberOfDays: "8",
				// fadePoint: "0.6",
				appendLocationNameToHeader: false
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					//{
					//	title: "Zhihu",
					//	url: "https://www.zhihu.com/rss"
					//},
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					},
					{
						title: "Personal Station",
						url: "https://raw.githubusercontent.com/waytry/MagicMirror/master/_data/newsfeed.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}

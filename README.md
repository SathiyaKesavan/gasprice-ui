
This projects demonstrates use of kafka message streams and data persistence using noSQL database.
1. A producer produces a new message everyday by calling an endpoint which returns gas prices US. This message is dropped on to kafka.
2. A consumer service, reads these messages and persists them into MongoDB documents.
3. A microservice queries the mongoDB and fetches data for clients to consume.
4. Frontend invokes the microservice to paint the UX page with gas price data and trend.

Try it for yourself -> https://gasprice-ui.herokuapp.com/


![Gitfinal](https://user-images.githubusercontent.com/30667005/110126138-1c64d700-7d92-11eb-9c36-e3a95a27d319.png)

Sample UI
![Screen Shot 2021-03-15 at 8 43 52 PM](https://user-images.githubusercontent.com/30667005/111239259-2d51eb80-85cf-11eb-8884-72a16ad6109a.png)

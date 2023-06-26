# space-x

## Developer
- Tania OLIVIA

## Run the project
To run this project, if this is your first time launching this project, you need to launch the docker with the command below.
```
docker-compose up --build
```

If it's not your first time, you can do the command below
```
docker-compose up
```

It'll might take a while for the docker to finish running. If you've seen the log below :
```
spacex-front    |   App running at:
spacex-front    |   - Local:   http://localhost:8080/ 
spacex-front    |   - Network: unavailable
spacex-front    | 
spacex-front    |   Note that the development build is not optimized.
spacex-front    |   To create a production build, run npm run build.
spacex-front    | 
Build finished at 22:46:01 by 0.000s
```
That means docker has finished running and you can access the project on http://localhost:8082/.

## Informations about the web application "Space X"
- When you access the website on http://localhost:8082/. It'll show you the home page.
- You can see all the list of capsules on the home page and by clicking the button "Capsules" on the navigation bar
- Same thing for list of launches, you can see it by clicking the button "Launches" on the navigation bar
- You can also click to see more details of a capsule or a launch by clicking the icon ℹ️ (info) on the list of capsules or launches page.
- You can also see the related launches in a capsule by clicking one of the launch id on the capsule details page (You'll see the ids in blue)
- You can also see the related capsules in a launch by clicking one of the capsule id on the launch details page (You'll see the ids in blue)

## Stop the project
To stop the project, you can just stop the docker with the command below :
```
docker-compose down
```



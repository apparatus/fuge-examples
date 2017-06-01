# Fuge Sevices and Infrastructure
Sometimes it is useful to leave infrastruture running in the background, for example if you need to kill the fuge shell for any reason it is useful not to have databse containers and so on restart. This example demonstrates a pattern for doing this. The key point is that we still need to be able to discover these pieces of infrastrcutre using DNS or environment injection.

## Running the system
As before you will require docker to be installed to run the system. Once this is setup run the following:

```sh
$ docker pull mongo
```

The above will pull the lastet build of the offical mongo container. Next lets start the mongo container using docker-compose:

```sh
$ cd fuge
$ docker-compose up
```

Leave this running in one terminal and start a fresh shell `cd` into the `services-and-infrastructure` directory and start the fuge shell, then install dependencies:

```sh
$ fuge shell fuge/fuge.yml
fuge> apply npm install
fuge> ps
name                          type           status         watch          tail
mongo                         container      not managed
adderservice                  process        stopped        yes            yes
auditservice                  process        stopped        yes            yes
webapp                        process        stopped        yes            yes
dns                           internal       running        no             no
```

Note that `ps` now reports that mongo is `not managed` this means that `fuge` will not attempt to run the container, but it will generate dns entries and environment variables for it.

Next go ahead and start the system:

```sh
fuge> start all
```

The system will now start and run as before only this time we have separated out long running infrastructural containers from processes under development.


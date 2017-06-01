# Fuge Simple System Example
This example system contains an `express.js` based front end and a `restify` based service. The service
just adds two numbers together and returns the result. The front end provides a user interface to the service.

The fuge configuration is held in `./fuge/fuge.yml`.

To run the system first install dependencies:

``sh
$ cd adderservice && npm install
$ cd ../webapp && npm install
```

Then start the system in the Fuge shell:

```sh
$ fuge shell fuge/fuge.yml
fuge> start all
```

Check that all of the processes are running:

```sh
fuge> ps
name                          type           status         watch          tail
adderservice                  process        running        yes            yes
webapp                        process        running        yes            yes
```

Then consume the service by opening a browser at: `http://localhost:3000/add`.

Stop the system by exiting the fuge shell or running `stop all`.

```sh
fuge> exit
```


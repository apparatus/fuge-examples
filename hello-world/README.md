# Fuge Hello World example
The simplest possible fuge example. Contains a simple hello world service and a fuge configration file.
To run firstly install dependencies:

```sh
$ cd service
$ npm install
```

Then start the service in the Fuge shell:

```sh
$ fuge shell fuge/fuge.yml
fuge> start all
```

Test that the service is up with: 

```sh
$ curl http://localhost:8080/hello/<name>
```

Stop by simply exiting the fuge shell or by explicitly stopping first:

```sh
fuge> stop all
fuge> exit
```


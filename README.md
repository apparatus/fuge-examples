# Fuge Examples
This repository contains example systems, demonstating the use of Fuge. To run the examples, clone this repository. Each example comes with it's own README.md and setup instructions. Each example builds on the next so it is advisable to run them in order.

The examples are as follows:

## hello-world
The simplest possible configuration. Runs a single service in the fuge shell.

## simple-system
A simple system system configuration with a front end and a single microservice.

## kubernets-emulation
A slightly more complext microservice system that emulates a production Kuberntes environment. This example has a front end and two services one of which reads and writes to a mongo database which is provided through the use of a docker mongo container.

## using-docker-compose
The same system as in the previous example but one service and the mongo container are configured using a docker compose file that is included in the fuge conffiguration. Demonstrates how to use compose file in conjunction with a fuge configuration.

## services-and-infrastructure
This example demonstrates how to keep infrastrcutre, i.e. databases, queuing systems etc.. running in the background with docker-compose but still have them discoverable to microservices managed with fuge. This is a usefule pattern when killing and restarting the fuge shell.


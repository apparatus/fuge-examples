# Fuge Docker Compose Example
In this example we have taken the previous kubernetes example and moved two of the services into a docker-compose format file. These are the mongo image and the audit service. To enable this we have also added a Dockerfile to the `auditservice` directory.

## Running the system
As before you will require docker to be installed to run the system. Once this is setup run the following:

```sh
$ docker pull mongo
```

The above will pull the lastet build of the offical mongo container. Next install the process dependencies:

```sh
$ fuge shell fuge/fuge.yml
fuge> apply npm install
```

This takes advantage of the Fuge apply command. This will execute a nominated shell command in each of the named service directories, in this case `npm install` which will setup the dependencies for us.

Once the dependencies have all been installed (this may take a few moments) then we can execute the system with:

```sh
fuge> start all
fuge> ps
name                          type           status         watch          tail
adderservice                  process        running        yes            yes
auditservice                  process        running        yes            yes
webapp                        process        running        yes            yes
mongo                         container      running        no             yes
dns                           internal       running        no             no
```

As with the previous example, the adder service may be exercised by pointing a browser to `http://localhost:3000/add`. The Audit service can be exercised through `http://localhost:3000/audit`.

## Explanation
The difference between this and the kubernets-emulation example is that we have moved the mongo container and audit service configuration into a docker-compose file. The system is essentially unchaged apart from that. The fuge coniguration file includes the docker-compose configuration with this line:

```
include:
  - ./docker-compose.yml
```

This demonstrates how fuge can be used to mix and match configuration files.


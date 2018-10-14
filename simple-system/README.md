# Fuge Changing Environment Variables

# To change a value in memory:


Start the shell by running "fuge shell fuge/fuge.yml"


Run setval <process> to see all the available variables and their values, for example:

fuge> setval adderservice

        variables in adderservice
        type = process
        path = c:\MAMP\htdocs\fuge\fuge-examples\change-variables-while-running\adderservice
        run = node service.js
        ports = adderservice,8087,
        name = adderservice
        specific =
        status = enabled
        environment = ADDERSERVICE_SERVICE_HOST,127.0.0.1,ADDERSERVICE_SERVICE_PORT,8087,ADDERSERVICE_PORT,tcp://127.0.0.1:8087,ADDERSERVICE_PORT_8087_TCP,tcp://127.0.0.1:8087,ADDERSERVICE_PORT_8087_TCP_PROTO,tcp,ADDERSERVICE_PORT_8087_TCP_PORT,8087,ADDERSERVICE_PORT_8087_TCP_ADDR,127.0.0.1,WEBAPP_SERVICE_HOST,127.0.0.1,WEBAPP_SERVICE_PORT,3006,WEBAPP_PORT,tcp://127.0.0.1:3006,WEBAPP_PORT_3006_TCP,tcp://127.0.0.1:3006,WEBAPP_PORT_3006_TCP_PROTO,tcp,WEBAPP_PORT_3006_TCP_PORT,3006,WEBAPP_PORT_3006_TCP_ADDR,127.0.0.1,SERVICE_HOST,127.0.0.1,SERVICE_PORT,8087
        host = 127.0.0.1
        tail = true
        monitor = true
        monitor_excludes = 0,**/node_modules/**,1,**/.git/**,2,*.log
        delay_start = 0
        restart_on_error = false


Run setval <process> <variable> to see a single variable, for example:

        fuge> setval adderservice delay_start
        delay_start = 0

We can run setval <process> <variable> <value> to set a new value for the variable:

        fuge> setval adderservice delay_start 3000
        Old value = 0
        New value = 3000

Run setval with the env argument to set a new environment value for an enviornment variable <process> env <variable> <value> , for excample:

        fuge> setval adderservice env SERVICE_PORT 8088
        Old value = 8087
        New value = 8088


########################


# To change a value from the fuge.yml file while Fuge is running:


Start the shell by running "fuge shell fuge/fuge.yml"

change a value in the yml file:

        adderservice:
        type: process
        path: ../adderservice
        run: 'node service.js'
        terminate: SIGINT
        ports:
            - adderservice=8087

Here we could change SIGINT to SIGTERM, change the port number, change the path, or add new properties and values .
Note: Changing the path will disable the service if an invalid path is entered, but the system will keep running. Another way to disable a service is to use setval (above) to set the status to disabled.


 So, after changing the fuge.yml file and saving the changes, run 'rel' to reload the changed values, and type 'y' to confirm, or 'n' to cancel:

fuge> rel
There are changed values in:  adderservice
Do you want to apply these changes? (y/n)
y



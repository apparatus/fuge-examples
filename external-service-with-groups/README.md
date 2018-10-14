
# External service

This example is the same as the External service example but it has extra some extra services. This shows how services can be grouped, so that commands can be applied to the whole group. Adderservice minusservice multiplyservice and divideservice all have a common group, [group: sums] created in the fuge.yml file.

These groups can be seen using the ps command. You can apply all the usual commands to groups, eg, you can start the sums group hee with:


```sh
$ fuge shell fuge/fuge.yml
fuge> start sums
fuge>ps
```

name                          type           group          status         watch          tail
mongo                         container      default        not managed
adderservice                  process        sums           running        yes            yes
minusservice                  process        sums           running        yes            yes
multiplyservice               process        sums           running        yes            yes
divideservice                 process        sums           running        yes            yes
auditservice                  process        default        stopped        yes            yes
importantauditservice         process        critical       stopped        yes            yes



All commands that work with 'all', will also work with groups. 

  Start, restart, stop, pull, status, tail, grep, etc.



If you don't create a group for a service in the fuge.yml file then it will be given an automatic group of default, by default.

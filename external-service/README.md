# Fuge Sevices and Infrastructure
Sometimes it is necessecary to connect to shared infrastructure in development. This example demonstrates a pattern for doing this. The key point is that we still need to be able to discover these pieces of infrastrcutre using DNS.

## Running the system
This example is identical to the `services-and-infrastructure` example, except with the addition of two extra DNS records in fuge config. These are set under the `dns_external` key as follows:

```
  dns_external:
    - "shareddb.local IN A 192.0.2.1"
    - "_main._tcp.shareddb.local IN SRV 0 5 5060 shareddb.local"
```

In this case we are hosting an SRV and an A record for `shareddb`. If you start the fuge shell and issue the `zone` command you will see that the records for this service are now available.

None of the services in the example system actually consume shareddb, however they could now connect disocver this resorce exactly as they would in prodcution.

Fuge currently only support `A` and `SRV` records.


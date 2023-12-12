# IP2Location with database

## Usage

```js
const { IP2Location, dbPath } = require("@imaegoo/node-ip2region");

const ip2location = new IP2Location();

ip2location.open(dbPath);

for (const ip of ["8.8.8.8", "2404:6800:4001:c01::67"]) {
  const result = ip2location.getAll(ip.replace(/:[0-9]*$/, ""));
  console.log(`${ip} ${result.countryLong} ${result.region} ${result.city}`);
}

ip2location.close();
```

View more: https://ip2location-nodejs.readthedocs.io/en/latest/quickstart.html

## Free IP Geolocation Database

https://lite.ip2location.com/ip2location-lite

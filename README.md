# AzureSNATTests

Comparisons between Node applications that do and do not use 'keep-alives' for outbound connections. Testing is implemented with Apache jMeter from 10-200+ threads with matching ramp-up times on an infinite loop.

### Implementation

Two 'sets' of applications are in this repo. One set using Node with it's native `http` module to create the server. The other set uses `express`. Both 'sets' act as RESTful services where the 'frontend' portion will call to the backend. The backend for it's respective set is essentially a copy of the frontend, but just returns a small JSON response in the form of "{ message: pong }". 

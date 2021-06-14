Just trying out what xmpp serves have to offer

# Setup XMPP server
```
docker-compose up
```

# Create Users
```
docker exec -it ejabberd bin/ejabberdctl register user1 localhost password
```

```
docker exec -it ejabberd bin/ejabberdctl register user2 localhost password
```

# Testing client
Connect each user in separate terminal windows to see messages exchanged:
```
node client/user.js
```
```
node client/user.js
```
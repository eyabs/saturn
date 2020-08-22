### backend
postgresql database

- table: SharedTimers
-- id, roomcode, roomstate (JSON), created at, updated at
-- data for the timers is stored in roomstate json

server

- Django? CherryPy? 
- Endpoints
- JoinRoom(roomcode)
    - creates room if does not exist
- GetRoomState(roomcode)
- AddTimer(roomcode)
- RemoveTimer(roomcode, timerid)
- UpdateTimer(roomcode, timerid)
- StartTimer(roomcode, timerid)
- StopTimer(roomcode, timerid)

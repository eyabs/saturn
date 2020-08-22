CREATE TABLE SharedTimers (
    Id SERIAL PRIMARY KEY,
    RoomCode VARCHAR(64) NOT NULL,
    RoomState JSONB NOT NULL DEFAULT '{}',
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX ix_SharedTimers_RoomCode ON SharedTimers (RoomCode);

CREATE OR REPLACE FUNCTION update_modified_column()   
RETURNS TRIGGER AS $$
BEGIN
    NEW.UpdatedAt = now();
    RETURN NEW;   
END;
$$ language 'plpgsql';

CREATE OR REPLACE TRIGGER SharedTimers_UpdatedAt
BEFORE UPDATE on SharedTimers
FOR EACH ROW
EXECUTE PROCEDURE  update_modified_column();
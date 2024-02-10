ALTER TABLE clients
DROP admission_status;

ALTER TABLE clients
ADD admission_status VARCHAR(25);
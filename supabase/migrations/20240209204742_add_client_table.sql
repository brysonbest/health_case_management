CREATE TABLE clients (
  id INTEGER PRIMARY KEY,
  clientid VARCHAR(99),
  year DATE,
  active BOOLEAN,
  first_name VARCHAR(99),
  last_name VARCHAR(99),
  gender VARCHAR(25),
  birthday DATE,
  indigenous BOOLEAN,
  pwd BOOLEAN,
  vet BOOLEAN,
  emergency_shelter BOOLEAN,
  bus_pass BOOLEAN,
  clothing_supplement BOOLEAN,
  pssg BOOLEAN,
  admission_status BOOLEAN,
  deceased DATE,
  urgent BOOLEAN,
  phone_number VARCHAR,
  activated_account BOOLEAN,
  city INTEGER,
  created_at TIMESTAMP with time zone
);
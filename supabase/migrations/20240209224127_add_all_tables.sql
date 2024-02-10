CREATE TABLE health_authorities (
  id uuid PRIMARY KEY default uuid_generate_v4(),
  name VARCHAR(99)
);

CREATE TABLE cities (
  id uuid PRIMARY KEY default uuid_generate_v4(),
  name VARCHAR,
  health_authority uuid,
  FOREIGN KEY (health_authority) REFERENCES health_authorities(id)
);

CREATE TABLE clients (
  id uuid PRIMARY KEY default uuid_generate_v4(),
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
  pet_deposit BOOLEAN,
  pssg BOOLEAN,
  admission_status VARCHAR(25),
  deceased DATE,
  urgent BOOLEAN,
  phone_number VARCHAR,
  activated_account BOOLEAN,
  city uuid,
  created_at TIMESTAMP with time zone
);

CREATE TABLE services (
  id uuid PRIMARY KEY default uuid_generate_v4(),
  user_id uuid,
  service_name VARCHAR(25),
  notes TEXT,
  active BOOLEAN,
  created_at TIMESTAMP with time zone,
  modified TIMESTAMP with time zone,
  FOREIGN KEY (user_id) REFERENCES clients(id)
);

CREATE TABLE notes (
  id uuid PRIMARY KEY default uuid_generate_v4(),
  user_id uuid,
  content TEXT,
  created_at TIMESTAMP with time zone,
  modified TIMESTAMP with time zone,
  FOREIGN KEY (user_id) REFERENCES clients(id)
);

CREATE TABLE emergency_funds (
  id uuid PRIMARY KEY default uuid_generate_v4(),
  user_id uuid,
  description TEXT,
  amount INTEGER,
  created_at TIMESTAMP with time zone,
  FOREIGN KEY (user_id) REFERENCES clients(id)
);

ALTER TABLE clients ADD FOREIGN KEY (city) REFERENCES cities(id);
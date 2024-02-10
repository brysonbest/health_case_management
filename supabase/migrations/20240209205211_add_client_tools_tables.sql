CREATE TABLE services (
  id INTEGER PRIMARY KEY,
  user_id INTEGER,
  service_name VARCHAR(25),
  notes TEXT,
  active BOOLEAN,
  created_at TIMESTAMP with time zone,
  modified TIMESTAMP with time zone,
  FOREIGN KEY (user_id) REFERENCES clients(id)
);

CREATE TABLE notes (
  id INTEGER PRIMARY KEY,
  user_id INTEGER,
  content TEXT,
  created_at TIMESTAMP with time zone,
  modified TIMESTAMP with time zone,
  FOREIGN KEY (user_id) REFERENCES clients(id)
);

CREATE TABLE emergency_funds (
  id INTEGER PRIMARY KEY,
  user_id INTEGER,
  description TEXT,
  amount INTEGER,
  created_at TIMESTAMP with time zone,
  FOREIGN KEY (user_id) REFERENCES clients(id)
);
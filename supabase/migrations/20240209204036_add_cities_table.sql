CREATE TABLE cities (
  id INTEGER PRIMARY KEY,
  name VARCHAR(99),
  health_authority INTEGER,
  FOREIGN KEY (health_authority) REFERENCES health_authorities(id)
);
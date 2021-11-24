CREATE TABLE users (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    state BOOL DEFAULT 1,
    createdAt DateTime,
    updatedAt DateTime,
PRIMARY KEY (id)
);
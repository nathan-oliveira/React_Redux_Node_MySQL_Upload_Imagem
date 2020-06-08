CREATE SCHEMA db_products;

CREATE TABLE db_products.products (
  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NULL,
  img TEXT NULL,
  PRIMARY KEY(id)
);

INSERT INTO db_products.products(title, img)
VALUES('teste 1', 'teste 1');

INSERT INTO db_products.products(title, img)
VALUES('teste 2', 'teste 2');
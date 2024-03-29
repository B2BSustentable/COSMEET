-- -- Tabela access
 CREATE TABLE IF NOT EXISTS access (
                                       count INTEGER,
                                       business_id BIGINT UNIQUE,
                                       id BIGINT GENERATED BY DEFAULT AS IDENTITY,
                                       PRIMARY KEY (id)
     );

-- -- Tabela address
-- CREATE TABLE IF NOT EXISTS address (
--                                        number INTEGER,
--                                        business_id BIGINT UNIQUE,
--                                        id BIGINT GENERATED BY DEFAULT AS IDENTITY,
--                                        city VARCHAR(255),
--     country VARCHAR(255),
--     latitude VARCHAR(255),
--     longitude VARCHAR(255),
--     neighborhood VARCHAR(255),
--     state VARCHAR(255),
--     street VARCHAR(255),
--     zip_code VARCHAR(255),
--     PRIMARY KEY (id)
--     );
--
-- -- Tabela business
-- CREATE TABLE IF NOT EXISTS business (
--                                         id BIGINT GENERATED BY DEFAULT AS IDENTITY,
--                                         plans_id BIGINT,
--                                         users_id BIGINT UNIQUE,
--                                         about VARCHAR(255),
--     cnpj VARCHAR(255),
--     email VARCHAR(255),
--     name VARCHAR(255),
--     occupation VARCHAR(255),
--     phone VARCHAR(255),
--     photo VARCHAR(255),
--     PRIMARY KEY (id)
--     );
--
-- -- Tabela category
-- CREATE TABLE IF NOT EXISTS category (
--                                         id BIGINT GENERATED BY DEFAULT AS IDENTITY,
--                                         name VARCHAR(255),
--     PRIMARY KEY (id)
--     );
--
-- -- Tabela plans
-- CREATE TABLE IF NOT EXISTS plans (
--                                      id INTEGER GENERATED BY DEFAULT AS IDENTITY,
--                                      name VARCHAR(255),
--     price FLOAT(50),
--     favorite BOOLEAN,
--     limit_search BOOLEAN,
--     limit_category INTEGER,
--     PRIMARY KEY (id)
--     );
--
-- INSERT INTO plans (id, name, price, favorite, limit_search, limit_category) VALUES
--                                                                                 (1, 'EMPRESA_BASIC', 50.0, false, false, 2),
--                                                                                 (2, 'EMPRESA_COMMON', 100.0, true, true, 3),
--                                                                                 (3, 'EMPRESA_PREMIUM', 200.0, true, true, 5);
--
--
-- -- Tabela users
-- CREATE TABLE IF NOT EXISTS users (
--                                      id BIGINT GENERATED BY DEFAULT AS IDENTITY,
--                                      email VARCHAR(255),
--     name VARCHAR(255),
--     password VARCHAR(255),
--     PRIMARY KEY (id)
--     );
--
-- -- Chaves estrangeiras
-- ALTER TABLE IF EXISTS access ADD CONSTRAINT FKcrn27my41dhjn87qbtflu4yxq FOREIGN KEY (business_id) REFERENCES business;
-- ALTER TABLE IF EXISTS address ADD CONSTRAINT FK2eubkywtwmpvo1u37snrkpkxi FOREIGN KEY (business_id) REFERENCES business;
-- ALTER TABLE IF EXISTS business ADD CONSTRAINT FK9pmwpmon84a5tw2asyg4r5mm7 FOREIGN KEY (plans_id) REFERENCES plans;
-- ALTER TABLE IF EXISTS business ADD CONSTRAINT FKjdmg37ha3elvah84ryv0aow7r FOREIGN KEY (users_id) REFERENCES users;
--
-- -- CATEGORIAS
-- CREATE TABLE IF NOT EXISTS category (
--                                         id INTEGER GENERATED BY DEFAULT AS IDENTITY,
--                                         name VARCHAR(255),
--     PRIMARY KEY (id)
--     );
--
-- INSERT INTO category (id, name) VALUES
--                                     (1, 'EMPRESA_BASIC'),
--                                     (2, 'EMPRESA_COMMON'),
--                                     (3, 'EMPRESA_PREMIUM');

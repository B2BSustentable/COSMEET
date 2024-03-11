--PLANOS
    CREATE TABLE IF NOT EXISTS plans (
        id INTEGER GENERATED BY DEFAULT AS IDENTITY,
        name VARCHAR(255),
        price FLOAT(50),
        favorite BOOLEAN,
        limit_search BOOLEAN,
        limit_category INTEGER,
        PRIMARY KEY (id)
    );

    INSERT INTO plans (id, name, price, favorite, limit_search, limit_category) VALUES
        (1, 'EMPRESA_BASIC', 50.0, false, false, 2),
        (2, 'EMPRESA_COMMON', 100.0, true, true, 3),
        (3, 'EMPRESA_PREMIUM', 200.0, true, true, 5);


--CATEGORIAS
    CREATE TABLE IF NOT EXISTS category (
        id INTEGER GENERATED BY DEFAULT AS IDENTITY,
        name VARCHAR(255),
        PRIMARY KEY (id)
    );

    INSERT INTO category (id, name) VALUES
        (1, 'EMPRESA_BASIC'),
        (2, 'EMPRESA_COMMON'),
        (3, 'EMPRESA_PREMIUM');

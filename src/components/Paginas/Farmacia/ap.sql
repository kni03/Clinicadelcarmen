INSERT INTO products (name, formula, marca, category, image)
VALUES
  ('Amlodipino', 'Amlodipino', 'Avivia', 'Genérico, Tabletas', '/products/Amlodipino5av.jpg');


UPDATE products
SET name = 'Amlodipino'
SET formula = 'Amlodipino'
SET category = 'Genérico, Tabletas'
SET image = '/products/Amlodipino5.jpg'
SET marca = 'RAAM'
WHERE id = 7;

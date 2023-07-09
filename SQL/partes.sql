SELECT * FROM paises WHERE nombre = 'ALGERIA';

INSERT INTO "paises" ("id", "iso", "nombre") VALUES 
(1, 'AF', 'AFGHANISTAN');

UPDATE "paises"
	SET 
		nombre = 'ALGE',
		iso = 'AA'
	WHERE nombre = 'Algeria';


DELETE FROM paises WHERE nombre = 'Algeria'
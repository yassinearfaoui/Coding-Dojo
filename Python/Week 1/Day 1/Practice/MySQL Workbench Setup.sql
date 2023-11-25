INSERT INTO dojos (name) VALUES('dojo3');
SELECT * FROM ninjas ;
SET SQL_SAFE_UPDATES = 0;
delete from dojos ;
INSERT INTO dojos (name) VALUES('dojo3'),('dojo2'),('dojo3');
INSERT INTO ninjas (first_name , last_name, age, dojos_id) 
VALUES("yasineee ","arfaoui",30,(SELECT id from dojos ORDER BY id LIMIT 1 )),
("yasineee ","arfaoui",30,(SELECT id from dojos ORDER BY id LIMIT 1 )),
("yasineee ","arfaoui",30,(SELECT id from dojos ORDER BY id LIMIT 1 ));
INSERT INTO ninjas (first_name , last_name, age, dojos_id) 
VALUES("yasineee ","arfaoui",30,(SELECT id from dojos ORDER BY id limit 1 offset 1 )),
("yasineee ","arfaoui",30,(SELECT id from dojos ORDER BY  id limit 1 offset 1)),
("yasineee ","arfaoui",30,(SELECT id from dojos ORDER BY  id limit 1 offset 1));
INSERT INTO ninjas (first_name , last_name, age, dojos_id) 
VALUES("yusef ","boughanmi",21,(SELECT id from dojos ORDER BY id =6 )),
("yasineee ","arfaoui",28,(SELECT id from dojos ORDER BY  id =6)),
("hamza ","weti",44,(SELECT id from dojos ORDER BY  id =6));






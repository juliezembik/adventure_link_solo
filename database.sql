CREATE TABLE "person" (
	"id" SERIAL PRIMARY KEY,
	"username" VARCHAR (80) UNIQUE NOT NULL,
	"password" VARCHAR (100) NOT NULL
	);
	
CREATE TABLE "person_character" (
	"person_id" SERIAL PRIMARY KEY,
	"character_id" INT REFERENCES "person",
	"character_name" VARCHAR(40) UNIQUE NOT NULL,
	"gender" VARCHAR (10),
	"race" VARCHAR (16),
	"person_class" VARCHAR(16),
	"alignment" VARCHAR(24),
	"background" VARCHAR(2058)
	);
	
INSERT INTO "person"
VALUES (1, 'admin', 'testpassword');

INSERT INTO "person_character"
VALUES (1, 1, 'Administrator', 'Female', 'Racetest', 'classtest', 'alignment', 'background test');

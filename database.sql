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

CREATE TABLE "person" (
	"id" SERIAL PRIMARY KEY,
	"username" VARCHAR (80) UNIQUE NOT NULL,
	"password" VARCHAR (100) NOT NULL
	);
	
CREATE TABLE "person_character" (
	"person_id" SERIAL PRIMARY KEY,
	"character_id" INT REFERENCES "person"."id",
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

CREATE TABLE "inventory_bag" (
	"id" SERIAL PRIMARY KEY,
	"inventory_id" INT references "person_character",
	"item_available" BOOLEAN DEFAULT 'true'
	);
CREATE TABLE "items" (
	"item_id" SERIAL PRIMARY KEY,
	"item_type" VARCHAR (36) NOT NULL,
	"item_name" VARCHAR (50) NOT NULL,
	"item_description" VARCHAR (200) NOT NULL,
	"item_img" VARCHAR (300) NOT NULL,
	"item_lat" INT,
	"item_lng" INT
);

INSERT INTO "items"
VALUES (1, null, 'Health', 'Potion (S)', 'Small potion that heals you for a maximum of 15 health points', '/images/potion-s.png', true );

SELECT "person_character"."character_name", "person_character"."gender", "person_character"."alignment", "person_character"."race", "person_character"."person_class", "person_character"."background" FROM "person_character"
JOIN "person"
ON "person_character"."character_id" = "person"."id"
WHERE "person"."id" = 2;

SELECT "items"."item_name", "items"."item_description", "items"."item_img" FROM "items"
JOIN "holding_bag" ON "holding_bag"."item_id" = "items"."item_id"
JOIN "inventory_bag" ON "inventory_bag"."id" = "holding_bag"."inventory_bag_id"
JOIN "person_character" ON "person_character"."person_id" = "inventory_bag"."inventory_id"
WHERE "person_character"."character_id" = 13;

SELECT * FROM "inventory_bag"
JOIN "holding_bag" ON "inventory_bag"."id" = "holding_bag"."inventory_bag_id"
JOIN "items" ON "holding_bag"."item_id" = "items"."item_id"
WHERE "inventory_bag"."inventory_id" = 24;


CREATE TABLE "holding_bag" (
	"id" SERIAL PRIMARY KEY,
	"inventory_bag_id" INT REFERENCES "inventory_bag",
	"item_id" INT REFERENCES "items"
);

SELECT "items"."lat", "items"."lng" FROM "items"
WHERE "items" IS NOT NULL;


CREATE TABLE "events" (
	"id" SERIAL PRIMARY KEY,
	"event_name" VARCHAR (60),
	"event_description" VARCHAR (400),
	"event_rewards" VARCHAR (400),
	"lat" VARCHAR (100),
	"lng" VARCHAR (100)
);

CREATE TABLE "event_rewards" (
	"id" SERIAL PRIMARY KEY,
	"event_id" INT REFERENCES "events",
	"reward_name" VARCHAR (60),
	"items_id" INT REFERENCES "items"
);

SELECT * FROM "events"
JOIN "event_rewards" ON "event_rewards"."event_id" = "events"."id";

SELECT * FROM "event_rewards"
JOIN "events" ON "events"."id" = "event_rewards"."event_id";
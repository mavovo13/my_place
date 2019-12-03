create table test (id int);
create table address 
(
  post_code TEXT  NOT NULL, 
  display_name  TEXT  NOT NULL,
  PRIMARY KEY (post_code)
);

create table my_place_point
(
  id  int NOT NULL,
  display_name  TEXT  NOT NULL,
  PRIMARY KEY (id)
);

create table my_place_point_address_relation
(
  post_code TEXT  NOT NULL,
  my_place_point_id int NOT NULL,
  point int NOT NULL,
  memo  TEXT,
  UNIQUE  (post_code, my_place_point_id)
);
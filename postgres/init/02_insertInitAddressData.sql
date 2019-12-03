insert into address (post_code, display_name) values 
  ('601-8406', '京都市南区戒光寺町'),
  ('601-8372','京都市南区吉祥院嶋高町');

insert into my_place_point (id, display_name) values
  (1, '治水の履歴'),
  (2, '犯罪発生件数'),
  (3, '過去の地名');

insert into my_place_point_address_relation (post_code, my_place_point_id, point) values
  ('601-8406', 1, 100),
  ('601-8406', 2, 98);
USE `jachi_saver`;

-- category seed (8)
INSERT INTO `category` (`category_id`, `name`) VALUES
  ('FOOD', '식비'),
  ('HOUSING', '주거비'),
  ('UTIL', '공과금'),
  ('MOBILE', '통신비'),
  ('TRANS', '교통비'),
  ('CLOTH', '의류'),
  ('CULTURE', '문화/여가'),
  ('ETC', '기타');

-- board seed (4)
INSERT INTO `board` (`board_id`, `name`) VALUES
  ('TIP', '절약팁'),
  ('LIFE', '자취정보'),
  ('GROUP', '공동구매'),
  ('FREE', '자유게시판');

-- test users (2) - password는 해시가 아닌 표기용
INSERT INTO `user` (`user_id`, `password`, `nickname`, `email`, `age`, `school`, `grade`, `level`) VALUES
  ('test_user_1', 'TODO_HASH', '테스트유저1', 'test1@example.com', 20, '테스트대학교', '새싹', 1),
  ('test_user_2', 'TODO_HASH', '테스트유저2', 'test2@example.com', 23, '테스트대학교', '새싹', 1);


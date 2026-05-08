-- jachi_saver database schema
-- MySQL 8.x 권장 (CHECK 제약, DESC 인덱스)

CREATE DATABASE IF NOT EXISTS `jachi_saver`
  DEFAULT CHARACTER SET utf8mb4
  DEFAULT COLLATE utf8mb4_0900_ai_ci;

USE `project`;

-- 1. user (사용자)
CREATE TABLE IF NOT EXISTS `user` (
  `user_id` VARCHAR(50) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `nickname` VARCHAR(30) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `age` INT NULL,
  `school` VARCHAR(50) NULL,
  `grade` VARCHAR(20) NOT NULL DEFAULT '새싹',
  `level` INT NOT NULL DEFAULT 1,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT `pk_user` PRIMARY KEY (`user_id`),
  CONSTRAINT `uq_user_nickname` UNIQUE (`nickname`),
  CONSTRAINT `uq_user_email` UNIQUE (`email`),
  CONSTRAINT `chk_user_level` CHECK (`level` >= 1)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 3. category (카테고리)
CREATE TABLE IF NOT EXISTS `category` (
  `category_id` VARCHAR(20) NOT NULL,
  `name` VARCHAR(30) NOT NULL,
  CONSTRAINT `pk_category` PRIMARY KEY (`category_id`),
  CONSTRAINT `uq_category_name` UNIQUE (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 5. board (게시판)
CREATE TABLE IF NOT EXISTS `board` (
  `board_id` VARCHAR(20) NOT NULL,
  `name` VARCHAR(30) NOT NULL,
  CONSTRAINT `pk_board` PRIMARY KEY (`board_id`),
  CONSTRAINT `uq_board_name` UNIQUE (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 2. budget (목표예산)
CREATE TABLE IF NOT EXISTS `budget` (
  `budget_id` VARCHAR(50) NOT NULL,
  `user_id` VARCHAR(50) NOT NULL,
  `period` VARCHAR(20) NOT NULL,
  `target_amount` INT NOT NULL,
  CONSTRAINT `pk_budget` PRIMARY KEY (`budget_id`),
  CONSTRAINT `fk_budget_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE,
  CONSTRAINT `chk_budget_target_amount` CHECK (`target_amount` > 0),
  INDEX `idx_budget_user_period` (`user_id`, `period`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 4. expense (지출내역)
CREATE TABLE IF NOT EXISTS `expense` (
  `expense_id` VARCHAR(50) NOT NULL,
  `user_id` VARCHAR(50) NOT NULL,
  `category_id` VARCHAR(20) NOT NULL,
  `amount` INT NOT NULL,
  `spent_date` DATE NOT NULL,
  `detail` VARCHAR(200) NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT `pk_expense` PRIMARY KEY (`expense_id`),
  CONSTRAINT `fk_expense_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_expense_category` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON DELETE RESTRICT,
  CONSTRAINT `chk_expense_amount` CHECK (`amount` > 0),
  INDEX `idx_expense_user_spent_date` (`user_id`, `spent_date`),
  INDEX `idx_expense_user_category` (`user_id`, `category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 8. party (모집그룹)
CREATE TABLE IF NOT EXISTS `party` (
  `party_id` VARCHAR(50) NOT NULL,
  `user_id` VARCHAR(50) NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  `item` VARCHAR(100) NOT NULL,
  `max_members` INT NOT NULL,
  `est_cost` INT NULL,
  `deadline` DATE NOT NULL,
  `status` VARCHAR(20) NOT NULL DEFAULT '모집중',
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT `pk_party` PRIMARY KEY (`party_id`),
  CONSTRAINT `fk_party_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE,
  CONSTRAINT `chk_party_max_members` CHECK (`max_members` >= 2),
  CONSTRAINT `chk_party_status` CHECK (`status` IN ('모집중','마감','완료','취소')),
  INDEX `idx_party_status_deadline` (`status`, `deadline`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 6. post (게시글)
CREATE TABLE IF NOT EXISTS `post` (
  `post_id` VARCHAR(50) NOT NULL,
  `user_id` VARCHAR(50) NOT NULL,
  `board_id` VARCHAR(20) NOT NULL,
  `title` VARCHAR(100) NOT NULL,
  `content` TEXT NOT NULL,
  `views` INT NOT NULL DEFAULT 0,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT `pk_post` PRIMARY KEY (`post_id`),
  CONSTRAINT `fk_post_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_post_board` FOREIGN KEY (`board_id`) REFERENCES `board` (`board_id`) ON DELETE RESTRICT,
  INDEX `idx_post_board_created_at` (`board_id`, `created_at` DESC),
  INDEX `idx_post_user_created_at` (`user_id`, `created_at` DESC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 7. comment (댓글)
CREATE TABLE IF NOT EXISTS `comment` (
  `comment_id` VARCHAR(50) NOT NULL,
  `post_id` VARCHAR(50) NOT NULL,
  `user_id` VARCHAR(50) NOT NULL,
  `content` VARCHAR(500) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT `pk_comment` PRIMARY KEY (`comment_id`),
  CONSTRAINT `fk_comment_post` FOREIGN KEY (`post_id`) REFERENCES `post` (`post_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_comment_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE,
  INDEX `idx_comment_post_created_at` (`post_id`, `created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 9. participation (참여정보)
CREATE TABLE IF NOT EXISTS `participation` (
  `participation_id` VARCHAR(50) NOT NULL,
  `party_id` VARCHAR(50) NOT NULL,
  `user_id` VARCHAR(50) NOT NULL,
  `status` VARCHAR(20) NOT NULL DEFAULT '신청',
  CONSTRAINT `pk_participation` PRIMARY KEY (`participation_id`),
  CONSTRAINT `fk_participation_party` FOREIGN KEY (`party_id`) REFERENCES `party` (`party_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_participation_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE,
  CONSTRAINT `chk_participation_status` CHECK (`status` IN ('신청','승인','완료','취소')),
  CONSTRAINT `uq_participation_party_user` UNIQUE (`party_id`, `user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


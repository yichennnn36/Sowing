/******************************************
* 1: Create database sowing
******************************************/

CREATE DATABASE IF NOT EXISTS `sowing`
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE `sowing`;

/******************************************
* 2: Create tables for sowing
******************************************/

CREATE TABLE IF NOT EXISTS `sowing`.`member`
(
  `member_id`           SERIAL COMMENT 'member ID',
  `username`            VARCHAR(100) NOT NULL COMMENT 'user name',
  `nickname`            VARCHAR(100) NOT NULL COMMENT 'nickname',
  `password`            VARCHAR(100) NOT NULL COMMENT 'user password',
  `token`               VARCHAR(100) COMMENT 'token for verifying user',
  `token_expire_stamp`  DATETIME,
  `create_stamp`        DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_stamp`        DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`member_id`),
  UNIQUE KEY `idx_username_password` (`username`, `password`),
  KEY `idx_token` (`token`, `token_expire_stamp`)
)
ENGINE InnoDB
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `sowing`.`event_ticket`
(
  `ticket_id`           SERIAL COMMENT 'ticket ID',
  `member_id`           BIGINT NOT NULL COMMENT 'member ID',
  `title`               VARCHAR(100) NOT NULL COMMENT 'ticket title',
  `content`             TINYTEXT COMMENT 'ticket content',
  `location`            VARCHAR(50) NOT NULL COMMENT 'event location',
  `category`            INT UNSIGNED NOT NULL COMMENT 'ticket category',
  `date`                DATETIME NOT NULL COMMENT 'event date',
  `create_stamp`        DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_stamp`        DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ticket_id`),
  KEY `idx_member_id` (`member_id`)
)
ENGINE InnoDB
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

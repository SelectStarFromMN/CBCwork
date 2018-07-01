-- (CAREFUL!!) Drops the DB if it already exists --
-- DROP DATABASE IF EXISTS bootcampface_db;
-- Create a database --
CREATE DATABASE IF NOT EXISTS campface;

-- Use db for the following statements --
USE bootcampface_db;

-- ****************** SqlDBM: MySQL ******************;
-- ***************************************************;
/*
DROP TABLE Newsfeed;

DROP TABLE StudyGroupMember;

DROP TABLE SocialMediaLink;

DROP TABLE Skills;

DROP TABLE Profile;

DROP TABLE Cohort;

DROP TABLE StudyGroup;

DROP TABLE SocialMediaType;

DROP TABLE Bootcamp;

DROP TABLE RoleType;
*/

-- ************************************** StudyGroup

CREATE TABLE StudyGroup
(
 studyGroupId   INT NOT NULL AUTO_INCREMENT ,
 studyGroupName VARCHAR(45) NOT NULL ,
 scheduleJSON   MEDIUMTEXT ,

PRIMARY KEY (studyGroupId)
);

-- ************************************** SocialMediaType

CREATE TABLE SocialMediaType
(
 socialMediaTypeId INT NOT NULL AUTO_INCREMENT ,
 socialMediaName   VARCHAR(45) NOT NULL ,

PRIMARY KEY (socialMediaTypeId)
);

-- ************************************** Bootcamp

CREATE TABLE Bootcamp
(
 bootcampId  INT NOT NULL AUTO_INCREMENT ,
 programName VARCHAR(45) NOT NULL ,
 state       VARCHAR(45) NOT NULL ,

PRIMARY KEY (bootcampId)
);

-- ************************************** RoleType

CREATE TABLE RoleType
(
 roleTypeId INT NOT NULL AUTO_INCREMENT ,
 roleName   VARCHAR(45) NOT NULL ,

PRIMARY KEY (roleTypeId)
);

-- ************************************** Cohort

CREATE TABLE Cohort
(
 cohortId   INT NOT NULL AUTO_INCREMENT ,
 cohortName VARCHAR(45) NOT NULL ,
 bootcampId INT NOT NULL ,

PRIMARY KEY (cohortId),
KEY fkIdx_64 (bootcampId),
CONSTRAINT FK_64 FOREIGN KEY fkIdx_64 (bootcampId) REFERENCES Bootcamp (bootcampId)
);

-- ************************************** Profile

CREATE TABLE Profile
(
 userName   VARCHAR(45) NOT NULL ,
 firstName  VARCHAR(45) NOT NULL ,
 lastName   VARCHAR(45) NOT NULL ,
 gender     ENUM('F', 'M') ,
 avatar     LONGTEXT ,
 bio        TEXT ,
 email      VARCHAR(100) NOT NULL ,
 cohortId   INT ,
 roleTypeId INT ,
 password   VARCHAR(100) NOT NULL ,

PRIMARY KEY (userName),
KEY fkIdx_75 (cohortId),
CONSTRAINT FK_75 FOREIGN KEY fkIdx_75 (cohortId) REFERENCES Cohort (cohortId),
KEY fkIdx_79 (roleTypeId),
CONSTRAINT FK_79 FOREIGN KEY fkIdx_79 (roleTypeId) REFERENCES RoleType (roleTypeId)
);

-- ************************************** Newsfeed

CREATE TABLE Newsfeed
(
 newsfeedId     INT NOT NULL AUTO_INCREMENT ,
 eventTimestamp TIMESTAMP NOT NULL ,
 newsItem       TEXT NOT NULL ,
 userName       VARCHAR(45) NOT NULL ,

PRIMARY KEY (newsfeedId),
KEY fkIdx_122 (userName),
CONSTRAINT FK_122 FOREIGN KEY fkIdx_122 (userName) REFERENCES Profile (userName)
);

-- ************************************** StudyGroupMember

CREATE TABLE StudyGroupMember
(
 studyGroupId INT NOT NULL ,
 userName     VARCHAR(45) NOT NULL ,

PRIMARY KEY (studyGroupId, userName),
KEY fkIdx_106 (studyGroupId),
CONSTRAINT FK_106 FOREIGN KEY fkIdx_106 (studyGroupId) REFERENCES StudyGroup (studyGroupId),
KEY fkIdx_111 (userName),
CONSTRAINT FK_111 FOREIGN KEY fkIdx_111 (userName) REFERENCES Profile (userName)
);

-- ************************************** SocialMediaLink

CREATE TABLE SocialMediaLink
(
 socialMediaTypeId INT NOT NULL ,
 userName          VARCHAR(45) NOT NULL ,
 url               VARCHAR(256) NOT NULL ,

PRIMARY KEY (socialMediaTypeId, userName),
KEY fkIdx_91 (socialMediaTypeId),
CONSTRAINT FK_91 FOREIGN KEY fkIdx_91 (socialMediaTypeId) REFERENCES SocialMediaType (socialMediaTypeId),
KEY fkIdx_126 (userName),
CONSTRAINT FK_126 FOREIGN KEY fkIdx_126 (userName) REFERENCES Profile (userName)
);

-- ************************************** Skills

CREATE TABLE Skills
(
 skillsId    INT NOT NULL AUTO_INCREMENT ,
 skillsArray VARCHAR(100) NOT NULL ,
 userName    VARCHAR(45) NOT NULL ,

PRIMARY KEY (skillsId),
KEY fkIdx_39 (userName),
CONSTRAINT FK_39 FOREIGN KEY fkIdx_39 (userName) REFERENCES Profile (userName)
);

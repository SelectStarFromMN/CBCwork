-- (CAREFUL!!) Drops the DB if it already exists --
-- DROP DATABASE IF EXISTS bootcampface_db;
-- Create a database --
CREATE DATABASE IF NOT EXISTS bootcampface_db;

-- Use db for the following statements --
USE bootcampface_db;

-- ****************** SqlDBM: MySQL ******************;
-- ***************************************************;
/*
DROP TABLE Newsfeed;


DROP TABLE StudyGroupMember;


DROP TABLE Skills;


DROP TABLE Profile;


DROP TABLE SocialMediaLink;


DROP TABLE Cohort;


DROP TABLE StudyGroup;


DROP TABLE socialMediaType;


DROP TABLE Bootcamp;


DROP TABLE RoleType;
*/


-- ************************************** StudyGroup

CREATE TABLE StudyGroup
(
 StudyGroupId   INT NOT NULL AUTO_INCREMENT ,
 studyGroupName VARCHAR(45) NOT NULL ,
 scheduleJSON   MEDIUMTEXT ,

PRIMARY KEY (StudyGroupId)
);

-- ************************************** socialMediaType

CREATE TABLE socialMediaType
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

-- ************************************** SocialMediaLink

CREATE TABLE SocialMediaLink
(
 socialMediaLinkId INT NOT NULL AUTO_INCREMENT ,
 url               VARCHAR(256) NOT NULL ,
 socialMediaTypeId INT NOT NULL ,

PRIMARY KEY (socialMediaLinkId),
KEY fkIdx_91 (socialMediaTypeId),
CONSTRAINT FK_91 FOREIGN KEY fkIdx_91 (socialMediaTypeId) REFERENCES socialMediaType (socialMediaTypeId)
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
 profileId         INT NOT NULL AUTO_INCREMENT ,
 userName          VARCHAR(45) NOT NULL ,
 firstName         VARCHAR(45) NOT NULL ,
 lastName          VARCHAR(45) NOT NULL ,
 gender            CHAR NOT NULL ,
 avatar            LONGTEXT NOT NULL ,
 bio               TEXT NOT NULL ,
 email             VARCHAR(100) NOT NULL ,
 cohortId          INT NOT NULL ,
 roleTypeId        INT NOT NULL ,
 socialMediaLinkId INT NOT NULL ,

PRIMARY KEY (profileId),
KEY fkIdx_75 (cohortId),
CONSTRAINT FK_75 FOREIGN KEY fkIdx_75 (cohortId) REFERENCES Cohort (cohortId),
KEY fkIdx_79 (roleTypeId),
CONSTRAINT FK_79 FOREIGN KEY fkIdx_79 (roleTypeId) REFERENCES RoleType (roleTypeId),
KEY fkIdx_95 (socialMediaLinkId),
CONSTRAINT FK_95 FOREIGN KEY fkIdx_95 (socialMediaLinkId) REFERENCES SocialMediaLink (socialMediaLinkId)
);

-- ************************************** Newsfeed

CREATE TABLE Newsfeed
(
 newsfeedId     INT NOT NULL AUTO_INCREMENT ,
 eventTimestamp TIMESTAMP NOT NULL ,
 newsItem       TEXT NOT NULL ,
 profileId      INT NOT NULL ,

PRIMARY KEY (newsfeedId),
KEY fkIdx_122 (profileId),
CONSTRAINT FK_122 FOREIGN KEY fkIdx_122 (profileId) REFERENCES Profile (profileId)
);

-- ************************************** StudyGroupMember

CREATE TABLE StudyGroupMember
(
 StudyGroupId INT NOT NULL ,
 profileId    INT NOT NULL ,

PRIMARY KEY (StudyGroupId, profileId),
KEY fkIdx_106 (StudyGroupId),
CONSTRAINT FK_106 FOREIGN KEY fkIdx_106 (StudyGroupId) REFERENCES StudyGroup (StudyGroupId),
KEY fkIdx_111 (profileId),
CONSTRAINT FK_111 FOREIGN KEY fkIdx_111 (profileId) REFERENCES Profile (profileId)
);

-- ************************************** Skills

CREATE TABLE Skills
(
 skillsId    INT NOT NULL AUTO_INCREMENT ,
 profileId   INT NOT NULL ,
 skillsArray VARCHAR(100) NOT NULL ,

PRIMARY KEY (skillsId),
KEY fkIdx_39 (profileId),
CONSTRAINT FK_39 FOREIGN KEY fkIdx_39 (profileId) REFERENCES Profile (profileId)
);

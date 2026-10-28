-- MySQL dump 10.13  Distrib 8.0.46, for Win64 (x86_64)
--
-- Host: localhost    Database: campus_radio
-- ------------------------------------------------------
-- Server version	8.0.46

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `campus_radio`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `campus_radio` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `campus_radio`;

--
-- Table structure for table `show_tracks`
--

DROP TABLE IF EXISTS `show_tracks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `show_tracks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `show_id` varchar(100) NOT NULL,
  `title` varchar(255) NOT NULL,
  `artist` varchar(255) DEFAULT NULL,
  `audio_url` varchar(1000) NOT NULL,
  `track_order` int DEFAULT '1',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `show_id` (`show_id`),
  CONSTRAINT `show_tracks_ibfk_1` FOREIGN KEY (`show_id`) REFERENCES `shows` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=325 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `show_tracks`
--

LOCK TABLES `show_tracks` WRITE;
/*!40000 ALTER TABLE `show_tracks` DISABLE KEYS */;
INSERT INTO `show_tracks` VALUES (1,'acoustic-chai','Acoustic Session 1','Campus Artist','https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',1,'2026-10-28 03:56:31');
INSERT INTO `show_tracks` VALUES (2,'acoustic-chai','Acoustic Session 2','Campus Artist','https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',2,'2026-10-28 03:56:31');
INSERT INTO `show_tracks` VALUES (5,'hostel-diaries','Hostel Diaries Track 1','Campus Artist','https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',1,'2026-10-28 03:56:31');
INSERT INTO `show_tracks` VALUES (6,'hostel-diaries','Hostel Diaries Track 2','Campus Artist','https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',2,'2026-10-28 03:56:31');
INSERT INTO `show_tracks` VALUES (7,'tech-talks','Tech Talks Intro','Campus Radio','https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',1,'2026-10-28 03:56:31');
INSERT INTO `show_tracks` VALUES (8,'tech-talks','Tech Talks Outro','Campus Radio','https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',2,'2026-10-28 03:56:31');
INSERT INTO `show_tracks` VALUES (9,'morning-express','Morning Express Track 1','Campus DJ','https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',1,'2026-10-28 03:56:31');
INSERT INTO `show_tracks` VALUES (10,'morning-express','Morning Express Track 2','Campus DJ','https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',2,'2026-10-28 03:56:31');
INSERT INTO `show_tracks` VALUES (11,'sports-roundup','Sports Roundup Intro','Campus Radio','https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',1,'2026-10-28 03:56:31');
INSERT INTO `show_tracks` VALUES (12,'sports-roundup','Sports Roundup Outro','Campus Radio','https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',2,'2026-10-28 03:56:31');
INSERT INTO `show_tracks` VALUES (25,'campus-vibes','Campus Vibes - Test Audio','Test Audio','https://cdn.truefilesize.com/mp3/sample-500kb.mp3',1,'2026-10-28 04:05:07');
/*!40000 ALTER TABLE `show_tracks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shows`
--

DROP TABLE IF EXISTS `shows`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shows` (
  `id` varchar(100) NOT NULL,
  `title` varchar(255) NOT NULL,
  `host` varchar(255) NOT NULL,
  `category` varchar(100) NOT NULL,
  `show_time` varchar(255) DEFAULT NULL,
  `badge` varchar(100) DEFAULT NULL,
  `is_live` tinyint(1) DEFAULT '0',
  `rating` decimal(3,2) DEFAULT '0.00',
  `episodes_count` int DEFAULT '0',
  `description` text,
  `image` varchar(500) DEFAULT NULL,
  `host_avatar` varchar(500) DEFAULT NULL,
  `image_bg` varchar(255) DEFAULT NULL,
  `accent_color` varchar(30) DEFAULT NULL,
  `host_bio` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shows`
--

LOCK TABLES `shows` WRITE;
/*!40000 ALTER TABLE `shows` DISABLE KEYS */;
INSERT INTO `shows` VALUES ('acoustic-chai','Acoustic Evenings & Chai','RJ Mehak','Unplugged Sessions','Tue & Thu • 06:30 PM - 08:00 PM','Live Jam',0,4.90,94,'Student singer-songwriter recordings, poetry, storytelling, and acoustic melodies.','/images/shows/acoustic-chai.svg','/images/hosts/rj-mehak.svg','from-rose-900/40 to-slate-900/80','#fecdd3','Mehak is a vocalist and poet who hosts acoustic sessions.','2026-10-27 17:58:31');
INSERT INTO `shows` VALUES ('campus-vibes','Campus Vibes','DJ Sarah','Music & Hits','Mon - Fri • 04:00 PM - 06:00 PM','LIVE NOW',1,4.90,142,'The hottest chartbusters, campus shoutouts, and rapid-fire banter to power your evening college commute.','/images/shows/campus-vibes.svg','/images/hosts/dj-sarah.svg','from-purple-900/60 to-indigo-950/80','#c4b5fd','Sarah is a Final Year B.Tech student and Lead Radio Jockey at PCTE Radio.','2026-10-27 17:58:31');
INSERT INTO `shows` VALUES ('hostel-diaries','Hostel Diaries Late Night','RJ Kabir & Guests','Late Night Special','Fri & Sat • 10:30 PM - 12:00 AM','Trending',0,4.92,88,'Late night confessions, horror stories, exam stress relief, and song dedications.','/images/shows/hostel-diaries.svg','/images/hosts/rj-kabir.svg','from-violet-950/70 to-zinc-950/90','#ddd6fe','Kabir hosts the late-night show with listener calls and hostel shoutouts.','2026-10-27 17:58:31');
INSERT INTO `shows` VALUES ('morning-express','The Morning Express','RJ Aryan & RJ Simran','Morning Buzz','Mon - Sat • 08:00 AM - 10:00 AM','Daily Kickoff',0,4.80,220,'Wake up with high-energy tunes, weather check, PCTE canteen specials, and campus headline roundups.','/images/shows/morning-express.svg','/images/hosts/rj-aryan.svg','from-amber-900/40 to-slate-900/80','#fed7aa','Aryan and Simran bring you morning entertainment and campus news.','2026-10-27 17:58:31');
INSERT INTO `shows` VALUES ('sports-roundup','Varsity Sports Roundup','PCTE Sports Department','Sports & Fitness','Saturday • 11:00 AM - 12:30 PM','Weekly Recap',0,4.70,52,'Inter-college cricket, football leagues, basketball scores, and athlete interviews.','/images/shows/sports-roundup.svg','/images/hosts/rj-aryan.svg','from-emerald-950/60 to-slate-950/90','#a7f3d0','Covering sports tournaments and athlete interviews across PCTE.','2026-10-27 17:58:31');
INSERT INTO `shows` VALUES ('tech-talks','Tech Talks & Startups','Innovators Club & Prof. Sharma','Tech & Career','Wed & Fri • 02:00 PM - 03:30 PM','Podcast Series',0,4.95,68,'Conversations with alumni founders, coding club captains, hackathon winners, and AI breakthrough analysis.','/images/shows/tech-talks.svg','/images/hosts/prof-sharma.svg','from-cyan-900/40 to-slate-900/80','#a5f3fc','Featuring interviews with founders and student innovators.','2026-10-27 17:58:31');
/*!40000 ALTER TABLE `shows` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-10-28 23:00:40

-- ----------------------------
-- Table structure for t_student
-- ----------------------------
DROP TABLE IF EXISTS `t_student`;
CREATE TABLE `t_student` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_student
-- ----------------------------
INSERT INTO `t_student` VALUES ('1', 'xxx', '20');
INSERT INTO `t_student` VALUES ('2', 'test002', '19');
INSERT INTO `t_student` VALUES ('3', 'test002', '19');
INSERT INTO `t_student` VALUES ('4', 'test002', '19');
INSERT INTO `t_student` VALUES ('5', 'test002', '19');
INSERT INTO `t_student` VALUES ('6', 'test002', '19');

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES ('1', 'xxx', '12');
INSERT INTO `t_user` VALUES ('18', 'xxxx', '15');
INSERT INTO `t_user` VALUES ('19', 'test002', '19');

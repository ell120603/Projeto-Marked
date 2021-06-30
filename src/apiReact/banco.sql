create database Marked;
use  Marked;
create table users(
id_user int not null auto_increment primary key,
email_user varchar(60) not null,
username_user varchar(60) not null,
name_user varchar(60) not null,
password_user varchar(200) not null,
cpf_user varchar(11) not null
)engine=innodb;
select *  from users;
create table questions(
id_question int not null auto_increment primary key,
email_question varchar(60) not null,
question varchar(1000) not null
)engine=innodb;
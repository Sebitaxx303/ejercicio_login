create database PruebaLog
go
use PruebaLog
go
create table users(
id int identity (100,1) primary key,
username varchar (40) unique not null,
email varchar (40) unique not null,
userpassword varchar(max) not null
)
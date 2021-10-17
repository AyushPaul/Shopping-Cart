# Introduction

This is a Shopping Cart App made using NodeJs , Express and Sequelize.

---

## Basic Functionalities :

-  ##### Shopping-Cart Main Page
   Go to : 
   `http://localhost:2678/`
   To Check out all the Products and their Prices and click on them to Buy.

-  ##### Add Users / Sign-Up
   Go to : 
   `http://localhost:2678/add_users.html`
   For Signing Yourself Up before Purchasing any Products :) .

-  ##### Add Products
   Go to : 
   `http://localhost:2678/add_products.html`
   For Adding new products to the front store page . 


---
## Guidelines

#### 1) Preparing the Database
Do the following as root :

```sql
 create database shopdb2;
 create user shopper identified by 'shoppass';
 use shopdb2;
 grant all privileges on shopdb2 to shopper;
 grant all privileges on shopdb2.* to shopper;
```
#### 2) Starting the Server
Navigate to : `\SequelizeExpressShoppingApp\server.js` and run the script.

Congrats!! Now you can use the Shopping-Cart . \o/

---



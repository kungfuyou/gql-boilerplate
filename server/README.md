
## Auto Generating the models
- globally install sequelize-automate (assuming you already have sequelize and mysql2 packages globally installed) 

`npm install -g sequelize-automate`

`sequelize-automate -h localhost -d <dbname> -u <username> -p <password> --dialect mysql --camel`
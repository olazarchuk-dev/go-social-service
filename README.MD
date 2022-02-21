.go-social-service

Language: `Golang`

Пакеты облегчат работу:
* `gorilla / mux` — URL-маршрутизатор и диспетчер, будем использовать этот пакет для сопоставления путей URL с их обработчиками.
* `jinzhu / gorm` — ORM-библиотека для Golang, будем используем этот пакет, чтобы взаимодействовать с базой данных.
* `dgrijalva / jwt-go` — используется для подписи и проверки JWT-токенов.
* `joho / godotenv` — используется для загрузки .env-файлов в проект.

```shell script
CREATE TABLE "accounts" ("id" serial,"created_at" timestamp with time zone,"updated_at" timestamp with time zone,"deleted_at" timestamp with time zone,"email" text,"password" text,"token" text , PRIMARY KEY ("id"))  
CREATE INDEX idx_accounts_deleted_at ON "accounts"(deleted_at)   
CREATE TABLE "contacts" ("id" serial,"created_at" timestamp with time zone,"updated_at" timestamp with time zone,"deleted_at" timestamp with time zone,"name" text,"phone" text,"user_id" integer , PRIMARY KEY ("id"))  
CREATE INDEX idx_contacts_deleted_at ON "contacts"(deleted_at)   
```

```shell script
host=172.31.75.175 user=trademaster dbname=postgres sslmode=disable password=RVHmBTK6In1nvGryKxEy
8000
```

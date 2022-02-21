.go-social-service

Language: `Golang`

Пакеты облегчат работу:
* `gorilla / mux` — URL-маршрутизатор и диспетчер, будем использовать этот пакет для сопоставления путей URL с их обработчиками.
* `jinzhu / gorm` — ORM-библиотека для Golang, будем используем этот пакет, чтобы взаимодействовать с базой данных.
* `dgrijalva / jwt-go` — используется для подписи и проверки JWT-токенов.
* `joho / godotenv` — используется для загрузки .env-файлов в проект.

```shell script
(/home/oleksandr/GolandProjects/pkg/mod/github.com/jinzhu/gorm@v1.9.1/scope.go:1024) 
[2022-02-20 11:41:10]  [130.35ms]  CREATE TABLE "accounts" ("id" serial,"created_at" timestamp with time zone,"updated_at" timestamp with time zone,"deleted_at" timestamp with time zone,"email" text,"password" text,"token" text , PRIMARY KEY ("id"))  
[0 rows affected or returned ] 

(/home/oleksandr/GolandProjects/pkg/mod/github.com/jinzhu/gorm@v1.9.1/scope.go:1024) 
[2022-02-20 11:41:11]  [124.84ms]  CREATE INDEX idx_accounts_deleted_at ON "accounts"(deleted_at)   
[0 rows affected or returned ] 

(/home/oleksandr/GolandProjects/pkg/mod/github.com/jinzhu/gorm@v1.9.1/scope.go:1024) 
[2022-02-20 11:41:11]  [130.68ms]  CREATE TABLE "contacts" ("id" serial,"created_at" timestamp with time zone,"updated_at" timestamp with time zone,"deleted_at" timestamp with time zone,"name" text,"phone" text,"user_id" integer , PRIMARY KEY ("id"))  
[0 rows affected or returned ] 

(/home/oleksandr/GolandProjects/pkg/mod/github.com/jinzhu/gorm@v1.9.1/scope.go:1024) 
[2022-02-20 11:41:11]  [123.65ms]  CREATE INDEX idx_contacts_deleted_at ON "contacts"(deleted_at)   
[0 rows affected or returned ] 
```

```shell script
GOROOT=/usr/lib/go-1.13 #gosetup
GOPATH=/home/oleksandr/GolandProjects #gosetup
/usr/lib/go-1.13/bin/go build -o /tmp/___go_build_main_go /home/oleksandr/GolandProjects/go-social-service/main.go #gosetup
/tmp/___go_build_main_go #gosetup
host=172.31.75.175 user=trademaster dbname=postgres sslmode=disable password=RVHmBTK6In1nvGryKxEy
8000
```

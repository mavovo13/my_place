my_place
# ブランチ戦略
develop/master はmasterブランチを元に作成しています。
develop/master はしかるべきタイミングでmasterブランチにマージします。
issue対応時にはdevelop/masterからブランチを作成してください。
issueブランチの命名規則は下記を参考にしてください。

e.g.)
master
└develop/master
 └issue_{issue_id}
---

アーバンデータチャレンジ京都のハッカソンのためのリポジトリです。
https://udc-kyoto.connpass.com/event/152528/

# setup
run `docker-compose up -d --build`

## Front
build `ng build`
launch `ng serve --host=0.0.0.0`でホスト端末から`http://localhost:4200`で接続できます。

# test
T.B.W.

# docker-compose
各コンテナのビルドは、以下を実行してください。

```
docker-compose build
```

コンテナを立ち上げるに、以下を実行してください。

```
docker-compose up -d
```

起動しているコンテナを確認するためには、以下を実行してください。

```
docker-compose ps
```

コンテナにログインするためには、以下を実行してください。

```
docker-compose exec -it {コンテナ名} /bin/ash
# 例
docker-compose exec py /bin/ash
```

コンテナ群を止めるためには、以下を実行してください。

```
docker-compose stop
docker-compose rm
```

# postgresの簡単な使い方
## postgresのコンテナにログインする
コンテナログイン

```
docker-compose exec db /bin/ash
```

postgresではユーザごとにデータベースができるっぽい。
ログインした直後はrootだが、これをpostgresというユーザに切り替える

```
su postgres
```

この状態でpostgresのクライアントを起動する

```
psql
```

## テーブルの一覧を取得する

postgresのクライアントを起動した状態で以下を実行する

```
¥d
```

## 何らかのクエリを実行する

postgresのクライアントを起動した状態で、クエリを打って、最後に;をつけて実行する
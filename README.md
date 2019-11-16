my_place
---

アーバンデータチャレンジ京都のハッカソンのためのリポジトリです。
https://udc-kyoto.connpass.com/event/152528/

# setup
T.B.W.

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
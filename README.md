
<h2> Solução de e-commerce com microsserviços em Java </h2>

Este projeto foi desenvolvido em aula proporcionada pela Digital Innovation One, através do desenvolvedor Daniel Hatanaka.

Foram desenvolvidas duas APIs (uma Producer e uma Consumer) para utilização do Kafka + Avro;
<hr>
Em relação ao projeto desenvolvido em aula, fiz as seguintes alterações:

Atualizei as configuraçõs do Kafka para permitir utilização de versões mais recentes. A configuração utilizada pode ser encontrada em (utilizei parte dela):

https://github.com/confluentinc/cp-all-in-one/blob/latest/cp-all-in-one/docker-compose.yml

Desenvolvi uma aplicação em FrontEnd (não estava inclusa no projeto diponibilizado pelo instrutor), com base em arquivo do Bootstrap sugerido, para permitir testar a aplicação.
Para executá-la: \kafkaavromicroservicos\checkoutfront\bootstrap-5.2.0-checkout\checkout\index.html

Obs.: o teste também pode ser efetuado com o Postman: localhost:8085/v1/checkout/ (POST)

JSON (Exemplo):

{
    "firstName": "Pedro",
    "lastName": "Silva",
    "email":"g@gmail",
    "address": "Rua Tak",
    "complemento": "Ap 123",
    "country": "Brasil",
    "state": "SC",
    "cep": "90900",
    "sameAddress": true,
    "saveInfo": true,
    "paymentMethod": "Debito",
    "cardName": "Pedro Silva",
    "cardNumber":"12345",
    "cardDate":"12/24",
    "cardCvv":"123",
    "products": ["melancia"]
}

<hr>
Pré-requisitos para a execução do projeto:

Java 11;

Intellj IDEA Community Edition ou outra IDE;

Spring (Envers, Sleuth, Kafka, Avro);

Docker, docker-compose, Postgree;

<hr>
Alguns comandos úteis:

sudo docker-compose up --build -d

docker-compose down
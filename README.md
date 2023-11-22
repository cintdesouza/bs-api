BS GÁS - REQUISIÇÕES API

`Endpoints`

PRODUTOS

Criação de Produto: `POST http://localhost:3000/product/`

```
{
    "operation": "002-COMPRA",
    "movement": "Entrada",
    "situation": "Cadastrada",
    "model": 65,
    "series": 1,
    "number": 10,
    "supplier": "Brazil Sistem",
    "issueDate": "2017-05-11",
    "genDate": "2017-05-11",
    "employee": "Brazil Sistem",
    "freight": 500,
    "totalValue": 2500,
    "product": "Produto",
    "quantity": 2,
    "unit": 1,
    "unitaryValue": 1000,
    "total": 2500,
    "discount": 500,
    "productFreight": 500,
    "expenses": 2000,
    "insurance": 0,
    "icms": 0,
    "icmsST": 0,
    "ipi": 0,
    "pis": 0,
    "cofins": 0,
    "reweighing": "Peso",
    "weight": 0,
    "reweighingValue": 20,
    "method": "À vista",
    "finalTotal": 2520,
    "account": "Caixa",
    "condition": "0/30/60"
}
```
Retorno:
```
{
	"operation": "002-COMPRA",
	"movement": "Entrada",
	"situation": "Cadastrada",
	"model": 65,
	"series": 1,
	"number": 10,
	"supplier": "Brazil Sistem",
	"issueDate": "2017-05-11",
	"genDate": "2017-05-11",
	"employee": "Brazil Sistem",
	"freight": 500,
	"totalValue": 2500,
	"product": "Produto",
	"quantity": 2,
	"unit": 1,
	"unitaryValue": 1000,
	"total": 2500,
	"discount": 500,
	"productFreight": 500,
	"expenses": 2000,
	"insurance": 0,
	"icms": 0,
	"icmsST": 0,
	"ipi": 0,
	"pis": 0,
	"cofins": 0,
	"reweighing": "Peso",
	"weight": 0,
	"reweighingValue": 20,
	"method": "À vista",
	"finalTotal": 2520,
	"account": "Caixa",
	"condition": "0/30/60",
	"id": 1
}
```

Edição de Produto: `PATCH http://localhost:3000/product/:id`

```
{
    "operation": "001-COMPRA"
}
```
Retorno:
```
{
	"operation": "001-COMPRA",
	"movement": "Entrada",
	"situation": "Cadastrada",
	"model": 65,
	"series": 1,
	"number": 10,
	"supplier": "Brazil Sistem",
	"issueDate": "2017-05-11",
	"genDate": "2017-05-11",
	"employee": "Brazil Sistem",
	"freight": 500,
	"totalValue": 2500,
	"product": "Produto",
	"quantity": 2,
	"unit": 1,
	"unitaryValue": 1000,
	"total": 2500,
	"discount": 500,
	"productFreight": 500,
	"expenses": 2000,
	"insurance": 0,
	"icms": 0,
	"icmsST": 0,
	"ipi": 0,
	"pis": 0,
	"cofins": 0,
	"reweighing": "Peso",
	"weight": 0,
	"reweighingValue": 20,
	"method": "À vista",
	"finalTotal": 2520,
	"account": "Caixa",
	"condition": "0/30/60",
	"id": 1
}
```
Deleção de Produto: `DELETE http://localhost:3001/product/:id/`
```
Não é necessário enviar corpo de requisição.
```
Retorno:
```
No body returned for response
```
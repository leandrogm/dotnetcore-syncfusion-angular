# dotnet core syncfusion com angular

## Requisitos

- dotnet core sdk 3.1
- entity framework global
---
### Instalação:
- [instalar dotnet sdk](https://dotnet.microsoft.com/download/dotnet-core/3.1)
- `dotnet tool install --global dotnet-ef`
- `dotnet ef database update`
- `dotnet dev-certs https --trust` (windows)
- `cd ClientApp && npm i && cd ..`
- seeders de Tags na classe `ApplicationDbContext` para adicionar mais dados é necessário rodar o comando `dotnet ef migrations add {NomeDaMigration}` e depois `dotnet ef database update`
---
## Execução:
- `dotnet build && dotnet run`
- acessar http://localhost:5000 ou http://localhost:5001

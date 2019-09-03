# 2fa

Script CLI super simples de verificação em duas etapas, seguindo o guia do [David Walsh](https://davidwalsh.name/2fa), e usando o [speakeasy](https://github.com/speakeasyjs/speakeasy) para gerar os segredos e o [node-qrcode](https://github.com/soldair/node-qrcode) para gerar o QR Code.

## Como testar

O script tem dois passos, em dois arquivos diferentes. Antes de começar, não esqueça de rodar ```npm install```.

Primeiro, **gere um segredo** rodando o seguinte comando:

```node generate.js```

Isso vai gerar dois arquivos na pasta "data": um JSON com o segredo, que vai ser usado na verificação, e uma imagem PNG com o QR Code. Escaneie o QR Code com seu app de autenticação favorito.

Agora, **faça a verificação** rodando esse comando, substituindo os números pelo token gerado pelo app:

```node verify.js 123456```

Se o segredo e o token baterem, o script vai retornar ```true```.

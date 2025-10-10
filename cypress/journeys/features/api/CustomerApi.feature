Feature: API - Customer Login

    Scenario: Validando llamada correcta del endpoint
        Given El usuario realiza una peticion GET al endpoint correspondiente
        Then El usuario deberia recibir un codigo de estado 200
        And El usuario deberia ver en la respuesta un arreglo de clientes
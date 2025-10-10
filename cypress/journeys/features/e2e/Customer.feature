Feature: Frontend Customer Login

    Scenario: Validar opciones de Customer
        Given El usuario ingresa a la seccion de Customer Login
        When El usuario hace click en el boton con el nombre "Customer Login"
        Then El usuario deberia ver el select "Your Name"
        When El usuario selecciona al cliente "Harry Potter"
        Then El usuario debe disponer del boton "Login"
        When El usuario hace click en el boton Login para ingresar
        Then El usuario deberia ver el mensaje "Welcome Harry Potter !!"
        And El usuario deberia ver el boton de salida "Logout"
        And El usuario deberia ver el boton de transacciones "Transactions"
        And El usuario deberia ver el boton de depositos "Deposit"
        And El usuario deberia ver el boton de billetera "Withdrawl"

Feature: Frontend Bank Manager Login

    Scenario: Validar opciones de Bank Manager
        Given El usuario ingresa a la seccion de Bank Manager Login
        When El usuario hace click en el boton "Bank Manager Login"
        Then El usuario deberia ver el boton1 "Add Customer"
        And El usuario deberia ver el boton2 "Open Account"
        And El usuario deberia ver el boton3 "Customers"
        When El usuario hace click en el boton agregar "Add Customer"
        And El usuario ingresa el nombre "Juan"
        And El usuario ingresa el apellido "Perez"
        And El usuario ingresa el codigo postal "12345"
        And El usuario hace click en el boton "Add Customer" para enviar el formulario
        Then Se deberian borrar los campos del formulario
        When El usuario hace click en el boton2 "Open Account"
        And El usuario selecciona el cliente "Juan Perez"
        And El usuario selecciona la moneda "Dollar"
        And El usuario hace click en el boton "Process" para procesar
        Then Se deberian quedar con el valor por defecto en el select
        When El usuario hace click en el boton3 "Customers"
        Then El usuario deberia ver en la tabla el cliente "Juan"
Feature: Frontend Inicio

    Scenario: Verificar opciones iniciales de la pagina
        Given El usuario ingresa a la pagina de inicio
        Then El usuario deberia ver el titulo "XYZ Bank"
        And El usuario tiene que ver el boton "Home"
        And El usuario dispone del boton "Customer Login"
        And El usuario deberia ver el boton "Bank Manager Login"
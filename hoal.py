import datetime

# Solicitar el año de nacimiento y el año de muerte (o 0 si aún están vivos)
ano_nacimiento = int(input("Ingrese año de nacimiento: "))
ano_muerte = int(input("Ingrese año de muerte (o 0 si aún está vivo): "))

# Obtener el año actual si se ingresó 0 como año de muerte
if ano_muerte == 0:
    ano_muerte = datetime.datetime.now().year

# Función para verificar si un año es bisiesto
def es_bisiesto(ano):
    if (ano % 4 == 0 and ano % 100 != 0) or (ano % 400 == 0):
        return True
    else:
        return False

# Contador de años bisiestos
contador_bisiestos = 0

# Calcular la cantidad de años bisiestos en el rango
for ano in range(ano_nacimiento, ano_muerte + 1):
    if es_bisiesto(ano):
        contador_bisiestos += 1

# Mostrar el resultado
print("La cantidad de años bisiestos vividos es:", contador_bisiestos)
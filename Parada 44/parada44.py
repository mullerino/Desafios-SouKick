# -*- coding: utf-8 -*-
"""Parada44.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1zDN7qZXTxsp5UJUFt786zCRuddRKDmVT

Questão 1: Faça um programa que mostre uma contagem regressiva que inicia em 10 e termina em 0.
"""

i=10

while(i>=0):
  print(i)
  i = i - 1

"""Questão 2: Faça um programa que mostre todos os números pares de 1 até 200."""

i = 0

while(i<=200):
  if(i%2 == 0):
    print(i)
  i += 1

"""Questão 3: Faça um programa que gere as tabuadas do 1 até o 10."""

i = 1

for i in range(1,11):
  print('-------------------')
  for j in range(1,10):
    print(i,'x',j,'=',i*j);

"""Questão 4: Faça um programa em que o usuário digita um número inteiro e o programa exibe todos os números ímpares do 1 até o valor inserido"""

number = int(input('Digite um número inteiro:'))
print('--------------')
print('Os números impares antes do valor digitado são:')

for i in range(0, number):
  if(i%2 != 0):
    print(i)

"""Questão 5: Faça um programa onde o usuário digite três notas. O programa precisa calcular a média e depois informar se o aluno foi aprovado ou reprovado."""

n1 = float(input('Digite a primeira nota: '))
n2 = float(input('Digite a segunda nota: '))
n3 = float(input('Digite a terceira nota: '))
print('')

media = round((n1+n2+n3)/3, 2)
print('Resultado:')

if(media >= 6):
  print('Aluno aprovado com média', media)
else:
  print('Aluno reprovado, sua média foi', media)
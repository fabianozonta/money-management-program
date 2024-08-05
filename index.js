    /*
Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível e 
então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair.
 Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, 
 somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções. 
 A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa.
*/

opcao = ''
let saldo = 0
let depositar = ''
let sacar = ''

do {
    opcao = prompt('Você tem disponível na sua conta R$' + saldo + '\nPara depositar digite:\n1 Depositar dinheiro \n2 Sacar dinheiro \n3 Sair')

    switch (opcao) {
        case '1':
            depositar = parseFloat(prompt('Quantos reais você deseja depositar: '))
            saldo = saldo + depositar
            break
        case '2':
            sacar = parseFloat(prompt('Quantos reais você desejar retirar: '))
            if (sacar > saldo) {
                alert('Você não tem dinheiro suficiente')
            } else {
                saldo = saldo - sacar
            }
            break
        case '3':
            alert('Saindo do programa')
            break

    }

} while (opcao != 3)

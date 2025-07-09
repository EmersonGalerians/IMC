const resultado = document.querySelector('#resultado');
const altura = document.querySelector('#altura');
const peso = document.querySelector('#peso');

const calcIMC = () => {
    if(altura.value !== '' && peso.value !== '' ){
        const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
        let classification = ''

        if(imc <18.5){
            classification = 'abaixo do peso'
        }
        else if(imc <25){
            classification = 'Peso normal'
            mns= 'Continue cuidando do seu corpo'
        }
        else if(imc <30){
            classification = 'Acima do peso'
        }
        else if(imc <35){
            classification = 'Obsidade Grau 1' 
        }
        else if(imc <41){
            classification = 'Obesidade Grau 2'
        }
        else{
            classification = 'Obesidade Grau 3'
        }

        resultado.innerHTML = `IMC: ${imc} (${classification} )  ${mns}`
    }else{
        resultado.innerHTML = 'preencha os campos'
    }
}
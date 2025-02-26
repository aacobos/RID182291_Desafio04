// Chamando o arquivo css
import './Hero.css'

// Importanto o componente Button
import Button from '../Button/Button'

function Hero () {
    return (
        <div className='container hero d-flex al-center'>
            <div className='hero-text'>
                <h1>Olá, eu sou Ariel <br /> Desenvolvedor Full-stack</h1>
                <p>
                Sou desenvolvedor Full-stack com experiência em Python, Django, análise de dados, CSS, React e JavaScript.
                Minha atuação envolve tanto o desenvolvimento de aplicações web dinâmicas quanto a manipulação e 
                interpretação de dados para tomada de decisões estratégicas. 
                </p>
                <Button />
            </div>
        </div>
    )
}

export default Hero
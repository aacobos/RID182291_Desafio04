// Chamando o arquivo css
import './Project.css'

// Importando as imagens
import AgendeIA from '../../assets/AgendeIA.jpg'
import DashboardAerodromos from '../../assets/DashboardAerodromos.jpg'
import DesenvolvimentoWeb from '../../assets/DesenvolvimentoWeb.jpg'

function Project () {
    return (
        <div className='container'>
            <div className='box-project'>
                <h2>Projetos</h2>
            </div>
            <div className='card-project'>
                <div className='card-img-project'>
                    <img src={AgendeIA} alt="AgendeIA" />
                </div>
                <div className='card-text-project'>
                    <h2>Agente de IA para WhatsApp</h2>
                    <p>Desenvolvimento de um chatbot inteligente para automatizar o atendimento no WhatsApp de uma 
                        influenciadora que vende cursos de redação para concursos. 
                        Utilizando n8n e ChatGPT, o atendimento é humanizado e melhora a experiência do usuário.
                    </p>
                </div>
            </div>
            <div className='card-project'>
                <div className='card-img-project'>
                    <img src={DashboardAerodromos} alt="DashboardAerodromos" />
                </div>
                <div className='card-text-project'>
                    <h2>Sistema de Cadastro de Aeroportos</h2>
                    <p>Criação de um sistema web para cadastro e gerenciamento de aeroportos, desenvolvido com Django e
                         integrado a bibliotecas Python, como Folium, para visualização interativa de mapas.
                    </p>
                </div>
            </div>
            <div className='card-project'>
                <div className='card-img-project'>
                    <img src={DesenvolvimentoWeb} alt="DesenvolvimentoWeb" />
                </div>
                <div className='card-text-project'>
                    <h2>Desenvolvimento de Sites Responsivos</h2>
                    <p>Construção de sites modernos e responsivos utilizando CSS, JavaScript e React, 
                        garantindo interfaces dinâmicas, intuitivas e adaptáveis a diferentes dispositivos.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Project
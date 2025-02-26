// Chamando o arquivo css
import './Footer.css'

// Importando a imagem de avatar
import FacebookIcon from '../../assets/icon-facebook.svg'
import InstagramIcon from '../../assets/icon-instagram.svg'
import XIcon from '../../assets/icon-x.svg'
import LinkedinIcon from '../../assets/icon-linkedin.svg'


function Footer () {
    return (
        <footer>
            <div className="container">
                <div className="d-flex social-links jc-center">
                    <a href="https://google.com" target="_blank">
                        <img src={FacebookIcon} />
                    </a>
                    <a href="https://google.com" target="_blank">
                        <img src={InstagramIcon} />
                    </a>
                    <a href="https://google.com" target="_blank">
                        <img src={XIcon} />
                    </a>
                    <a href="https://google.com" target="_blank">
                        <img src={LinkedinIcon} />
                    </a>
                </div>
                <p>Copyright ©2030 All rights reserved </p>
            </div>
        </footer>
    )
}

export default Footer
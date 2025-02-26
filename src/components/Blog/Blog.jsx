// Chamando o arquivo css
import './Blog.css'

// Importando a função para mudança de cor
import { useBackgroundColor } from '../../utils/ChangeColor';

function Blog () {
    const changeBgColor = useBackgroundColor();
    
    return (
        <div className='box-blog'>
            <div className='container'>
                <div className='card-blog'>
                    <h2>
                        Blog
                    </h2>
                </div>
                <div className='card jc-space-between'>
                    <div className='card-area'>
                        <h2>Making a design system from scratch</h2>
                        <div className='info-blog'>
                            <p>12 Feb 2030</p>
                            <p>Design, Pattern</p>
                        </div>
                        <div className='card-text'>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>

                    </div>
                    <div className='card-area'>
                        <h2>Creating pixel perfect icons in Figma</h2>
                        <div className='info-blog'>
                            <p>12 Feb 2030</p>
                            <p>Figma, Icon Design</p>
                        </div>
                        <div className='card-text'>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='box-button'>
                    <button className='blog-button' onClick={changeBgColor}>Mudar a Cor</button>
                </div>
            </div>
        </div>
    )
}

export default Blog
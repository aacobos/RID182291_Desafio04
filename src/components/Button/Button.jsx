// Chamando o arquivo css
import './Button.css'

function Button () {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/Curriculo.pdf';
        link.download = 'Curriculo.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button className="download-button" onClick={handleDownload}>
            Download resumo
        </button>
    );

}

export default Button
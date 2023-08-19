import { Link } from 'react-router-dom';
import styles from './Nosotros.module.css';
import Sergio from '../../assets/imagenesGrupo/Sergio.jpg';
import Gabriel from '../../assets/imagenesGrupo/Gabriel.jpg'
import Andres from '../../assets/imagenesGrupo/Andres.jpg'
import Jonny from '../../assets/imagenesGrupo/Jonny.jpg'
import Sol from '../../assets/imagenesGrupo/Sol.jpg'
import Dulce from '../../assets/imagenesGrupo/Dulce.jpg'
import Jose from '../../assets/imagenesGrupo/Jose.jpg'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const integrantes = [
    {
        nombre: 'Andres Pardo',
        especializacion: 'Full Stack web developer',
        github: 'https://github.com/apardov',
        linkedin: 'Enlace LinkedIn 1'
       },
      {
        nombre: 'Dulce Rojas',
        especializacion: 'Full Stack web developer',
        github: 'https://github.com/IngRojasDulce',
        linkedin: 'https://www.linkedin.com/in/dulce-rojas-19060416a/'
       },
      {
        nombre: 'Sol Lizarraga',
        especializacion: 'Full Stack web developer',
        github: 'https://github.com/Sunnynothere',
        linkedin: 'https://www.linkedin.com/in/lizarragagrigonisol/'
       
      },
      {
        nombre: 'Jonathan Fernández',
        especializacion: 'Full Stack web developer',
        github: 'https://github.com/JonnyFernandez',
        linkedin: 'https://www.linkedin.com/in/jonathan-fernandez-65a959277/',
       
      },
      {
        nombre: 'Juan Jose Chambi',
        especializacion: 'Full Stack web developer',
        github: 'https://github.com/JuanJoseChambi',
        linkedin: 'https://www.linkedin.com/in/juanjosechambi/',
       
      },
      {
        nombre: 'Sergio Martin Rodriguez',
        especializacion: 'Full Stack web developer',
        github: 'https://github.com/itsergiorodriguez',
        linkedin: 'https://www.linkedin.com/in/sergio-martin-rodriguez-401853a3/',
        
      },  {
        nombre: 'Gabriel Blanche',
        especializacion: 'Full Stack web developer',
        github: 'https://github.com/Blanchester',
        linkedin: 'https://www.linkedin.com/in/gabriel-blanche-552689185/',
                
      },
      
];

const Nosotros = () => {
  return (
    <div className={styles.bodyContainer}>
      <h2 className={styles.title}>Nosotros</h2>
      <p className={styles.introParagraph}>
        Somos un equipo dedicado a brindar soluciones innovadoras en el ámbito de la compra de
        supermercado en línea. Nuestra plataforma permite a los comercios locales expandir su
        alcance y ofrecer un servicio conveniente a sus clientes.
      </p>

      <h3 className={styles.title2}>Integrantes del Equipo</h3>
      <div className={styles.integrantesContainer}>
        {integrantes.map((integrante, index) => (
          <div className={styles.cardMargin} key={index}>
            <div className={styles.integranteCard}>
            <h4 className={styles.name}>{integrante.nombre}</h4>
              <img
                src={getImagen(integrante.nombre)}
                alt={`Foto de ${integrante.nombre}`}
              />
              <div className={styles.cardContent}>
              <p className={styles.especializacion}>{integrante.especializacion}</p>
              <p>
              <a href={integrante.github} target="_blank" rel="noopener noreferrer" className={styles.githubLink} >
                    <AiFillGithub className={styles.icon} />
                    GitHub
                  </a>
                </p>
                <p>
                  <a href={integrante.linkedin} target="_blank" rel="noopener noreferrer" className={styles.linkedinLink} >
                    <AiFillLinkedin className={styles.icon} />
                    LinkedIn
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
                 <Link to="/" className={styles.homeLink}>
                       Volver a Home
                </Link>
    </div>
  );
};;
  
  export default Nosotros;
  



function getImagen(nombre) {
  switch (nombre) {
    case 'Andres Pardo':
      return Andres;
     case 'Sergio Martin Rodriguez':
      return Sergio;
      case 'Gabriel Blanche':
        return Gabriel;
      case 'Jonathan Fernández':
        return Jonny;
      case 'Dulce Rojas':
        return Dulce;
      case 'Sol Lizarraga':
        return Sol;
      case 'Juan Jose Chambi':
        return Jose;
    default:
      return ''; // Devuelve una cadena vacía o la ruta de una imagen por defecto
  }
}




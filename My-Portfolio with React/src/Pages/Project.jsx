
import project from '../Project.json'
import './Project.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
export const Project = () => {
  const handleButtonClick = (url) => {
    if (url) {
      window.open(url, "_blank");
    } else {
      toast.warn('Sorry this site is not Available due to copyright issue!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

  }
  return (
    <>
      <section className="services" id="services">
        <h2 align="center"><span> My Projects</span></h2>
        <div className="serv-content">
          {project.projects.map((v, i) => {
            return (
              <div className="card" key={i}>
                <div className="box">
                  <FontAwesomeIcon icon={faCode} style={{ paddingTop: '12px' }} />
                  <div className="text">{v.projectName}</div>
                  <img src={require(`../${v.thumbnail}`)} alt="Project Thumbnail" />

                  <p> Netflix Clone using HTML,CSS & Javascript</p>
                  <button id="hover" className="details" onClick={() => handleButtonClick(require(`../${v.viewImg}`))}><b>{v.buttonimg}</b></button>
                  <button className="details" onClick={() => handleButtonClick(v.link)}><b>{v.buttonview}</b></button>


                </div>
              </div>
            )
          })
          }
        </div>
      </section>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

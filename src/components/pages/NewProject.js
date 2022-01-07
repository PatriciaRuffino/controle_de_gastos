import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css';
import {useNavigate} from 'react-router-dom';


function NewProject () {

    const navigate = useNavigate()

    function creatPost(project){
        //initialize cost and services
        project.const =0
        project.services = []

        fetch('http://localhost:5001/projects', {
            method: 'POST',
            headers:{
                'Content-type': 'aplication/json',
            },
            body: JSON.stringify(project)
        })
        .then((resp) => resp.json())
        .then((data)=>{
            console.log(data)
        navigate('/projects',{message: 'Projeto criado com sucesso'} )
        })
        //redirect
        .catch((err)=>console.log(err))
    }
    return(
       <div className={styles.newproject_container}>
           <h1>Criar Projeto</h1>
           <p>Crie o seu projeto para depois adicionar os serviços</p>
           <ProjectForm handleSubmit={creatPost} btnText="Criar projeto" />
       </div>
    )
}
export default NewProject;
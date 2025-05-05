import Header from '../../../components/cms/header.js'
import Forms from "../../../components/cms/formStudent.js";
import Footer from '../../../components/cms/footer.js';
import Navbar from '../../../components/cms/navbar.js';
// eu coloquei header, navbar e footer no app.js e ai tirei das outras paginas pra nao duplicar ;)

export default function Form(){
    return(
        <>
        <main>
            <br/>
            <Forms />
            <br/>
        </main>
        </>
    )
}
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { LabelizeInput } from '../../components/LabelizeInput';
import { useNavigate } from 'react-router-dom';
import './style.css'
import { inputStyle } from "styles"; 
import ROUTES from 'constants/routes';

const LoginContainer = () => {
    const { register, handleSubmit, formState, setFocus, getValues } = useForm();
    const {errors, isDirty, dirtyFields, submitCount, isValid} = formState
    const [visibleModal, setVisibleModal] = useState(false)
    const navigate = useNavigate()

    const onSubmit = data => {
        if (isValid) {
            navigate(ROUTES.Movies)
        }
    };

    useEffect(() => {
        const firstError = Object.keys(errors).reduce((field, a) => { return !!errors[field] ? field : a }, null);
        if (firstError) {
          setFocus(firstError);
        }
      }, []);

    return (
        <div style={{ display: "flex", flex: 1, height: "100vh", justifyContent: "center"}}>
            <div style={{ position: "relative", alignSelf: "center", justifyContent: "center", textAlign: "center", padding: 50, border: "1px solid black", borderRadius: 25}}>
                <div style={{ padding: "0 30px", position: "absolute", top: -20, left: "25%", right: "25%", backgroundColor: "#fff" }}>Bienvenue jeune padawan</div>
                    <form style={{ display: "flex", flexDirection: "column", minWidth: 300 }} onSubmit={handleSubmit(onSubmit)}>
                        <LabelizeInput inputStyle={inputStyle} name="email" defaultValue="" register={register} dirtyFields={dirtyFields} isDirty={isDirty} errors={errors} required={true}/>
                        <LabelizeInput inputStyle={inputStyle} name="mot de passe" defaultValue="" register={register} dirtyFields={dirtyFields} isDirty={isDirty} errors={errors} required={true}/>
                        <input type="submit" value="Accéder à la suite" />
                    </form>
            </div>
                
        </div>
    )
}



export default LoginContainer
import { useForm } from "react-hook-form";
import { Button, Input, SubHeading } from "./ui/ui-components";
import { addUserWithDataToFireStore, signInUser } from "../firebase/helper";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export type FormValues = {
    name: string;
    email: string;
    password: string;
};

type FormProps = {
    signInForm: boolean
}
const Form = ({ signInForm }: FormProps) => {
    let {
        handleSubmit,
        register,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormValues>();

    const navigate = useNavigate()

    const onSubmit = async (event: FormValues) => {
        isSubmitting = true;
        try {
            if (!signInForm) {
                await addUserWithDataToFireStore(event);
                navigate('/in')
                toast.success('User Registered ⭐')
            } else {
                const uid = await signInUser(event)
                console.log(uid);
                
                navigate('/')
                toast.success('Logged In ⭐')

            }
        } catch (error) {
            toast.error('Failed to create ❌')
        }
        isSubmitting = false;
        reset();
    };

    return (
        <form className="" onSubmit={handleSubmit(onSubmit)}>
            <SubHeading
                style={{ color: "skyblue", marginBottom: "30px" }}
                title="Sign Up"
            />
            {!signInForm && <Input errors={errors} register={register} label="name" type={"text"} />}
            <Input errors={errors} register={register} label="email" type={"text"} />
            <Input
                errors={errors}
                register={register}
                label="password"
                type="password"
            />
            <Button isSubmitting={isSubmitting} text="Submit" />
        </form>
    );
};

export default Form;

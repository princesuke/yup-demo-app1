// import { useState, useRef } from "react"
// import { yupToFormError } from "../utils/yupToFormE rrors"

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../schemas/signupSchema"


// npm install react-hook-form @hookform/resolver

export default function SignupFormV2() {
    const styles = {
        divInput: "flex gap-2",
        input: "border-1 rounded-lg",
        textError: "text-red-500 font-medium"
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(signupSchema),
        shouldFocusError: true,
        defaultValues: {
            username: "",
            nickname: "",
            password: "",
            confirmPassword: "",
            age: "",
            tel: "",
            terms: false
        }
    });
      
        
    // const [form, setForm] = useState({
            // username: "",
            // nickname: "",
            // password: "",
            // confirmPassword: "",
            // age: "",
            // tel: "",
            // terms: false
    //     })

    // const refs = {
    //     username: useRef(null),
    //     nickname: useRef(null),
    //     password: useRef(null),
    //     confirmPassword: useRef(null),
    //     age: useRef(null),
    //     tel: useRef(null),
    //     terms: useRef(null)
    // }

    // const [errors, setErrors] = useState({})
    
    // const handleChange = (e)=> {
    //     // setForm({...form, [e.target.name]: e.target.value})
    //     const {name, type, value, checked} = e.target;
    //     setForm((prev)=> ({
    //         ...prev,
    //         [name]: type === "checkbox" ? checked : value
    //     }))
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     // console.log(form);
    //     try {
    //         await signupSchema.validate(form, {abortEarly: false})
    //         // const isFormValid = await signupSchema.isValid(form, {abortEarly: false})
            

    //         // if (isFormValid) {
    //         //     console.log("ฟอร์มผ่าน!");
    //         //     } else {
    //         //     console.log("ฟอร์มไม่ผ่าน!");
    //         //     }


    //         alert("ส่งสำเร็จ");
    //         setErrors({});
    //     } catch(err) {
    //         const errorObj = yupToFormError(err, refs);
    //         setErrors(errorObj);
    //     }
    // }

    const onSumit = (data) => {
        alert("ส่งสำเร็จ");
        reset();
        console.log(data)
    }
        
        
    return (
        <>
            <p className="text-2xl font-bold pb-10">CC 20 Signup Form</p>
            <form className="space-y-2" onSubmit={handleSubmit(onSumit)}>
            <div className={styles.divInput}>
                <p>
                    <label>ชื่อผู้ใช้:</label>
                    <input 
                        className={styles.input} 
                        type="text"
                        {...register("username")}
                    />
                </p>
                <p className={styles.textError}>{errors.username?.message}</p>
            </div>
            <div className={styles.divInput}>
                <p>
                    <label>ชื่อเล่น:</label>
                    <input 
                        className={styles.input} 
                        type="text" 
                        {...register("nickname")}
                    />
                </p>
                <p className={styles.textError}>{errors.nickname?.message}</p>
            </div>
            
            <div className={styles.divInput}>
                <p>
                    <label>รหัสผ่าน</label>
                    <input 
                        className={styles.input} 
                        type="password"
                        {...register("password")}
                    />
                </p>
                <p className={styles.textError}>{errors.password?.message}</p>
            </div>
             <div className={styles.divInput}>
                <p>
                    <label>ยืนยันรหัสผ่าน</label>
                    <input 
                        className={styles.input} 
                        type="password"
                        {...register("confirmPassword")}
                    />
                </p>
                <p className={styles.textError}>{errors.confirmPassword?.message}</p>
            </div>
            <div className={styles.divInput}>
                <label>อายุ:</label>
                <input 
                    className={styles.input} 
                    type="number"
                    {...register("age")}
                />
                <p className={styles.textError}>{errors.age?.message}</p>
            </div>
            <div className={styles.divInput}>
                <label>เบอร์โทร:</label>
                <input 
                    className={styles.input} 
                    type="number"
                    {...register("tel")}
                />
                <p className={styles.textError}>{errors.tel?.message}</p>
            </div>
             <div className={styles.divInput}>
                <label>ยอมรับเงื่อนไข:</label>
                <input 
                    className={styles.input} 
                    type="checkbox"
                    {...register("terms")}
                />
                <p className={styles.textError}>{errors.terms?.message}</p>
            </div>
            <button type="submit">สมัครสมาชิก</button>
            </form>
        </>
    )
}
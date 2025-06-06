import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { heroSchema } from '../schemas/heroSchema';

const CLASSES = ["Warrior", "Mage", "Theif", "Humanoid", " Devil"];

export default function HeroFormV2() {
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
        resolver: yupResolver(heroSchema),
        mode: "onTouched",
        defaultValues: {
            heroCode: "",
            email: "",
            password: "",
            confirmPassword: "",
            age: "",
            class: "",
            term: false
        },
        shouldFocusError: true
    });

    const onSubmit = (data) => {
        alert("You've been chosen!")
        console.log(data);
        reset()
    }

    return (
        <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.divInput}>
                <label>Hero Code: </label>
                <input className={styles.input} type="text" {...register("heroCode")} />
                <p className={styles.textError}>{errors.heroCode?.message}</p>
            </div>

            <div className={styles.divInput}>
                <labe>Eagle Guild ID: </labe>
                <input className={styles.input} type="text" {...register("email")}/>
                <p className={styles.textError}>{errors.email?.message}</p>
            </div>

            <div className={styles.divInput}>
                <labe>Secret Code: </labe>
                <input className={styles.input}  type="password" {...register("password")}/>
                <p className={styles.textError}>{errors.password?.message}</p>
            </div>

             <div className={styles.divInput} >
                <labe>Repeat Code: </labe>
                <input className={styles.input} type="password" {...register("confirmPassword")}/>
                <p className={styles.textError}>{errors.confirmPassword?.message}</p>
            </div>

             <div className={styles.divInput} >
                <labe>Hero Age: </labe>
                <input className={styles.input} type="number" {...register("age")}/>
                <p className={styles.textError}>{errors.age?.message}</p>
            </div>

            <div className={styles.divInput} >
                <label>Hero Class</label>
                <select className={styles.input} {...register("class")}>
                    {
                        CLASSES.map((cls)=> (
                            <option key={cls} value={cls}>
                                {cls}
                            </option>
                        ))
                    }
                </select>
                <p className={styles.textError}>{errors.class?.message}</p>
            </div>
            
            <div className={styles.divInput} >
                <label>
                    <input type='checkbox' {...register("term")} />
                    &nbsp; Swear Allegiance to the Guild
                </label>
                <p className={styles.textError}>{errors.term?.message}</p>
            </div>

            <button type="submit">ลงทะเบียน</button>
        </form>
    )
}
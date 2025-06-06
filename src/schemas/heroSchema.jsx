import * as Yup from "yup";

export const heroSchema = Yup.object({
    heroCode: Yup.string()
    .required("กรุณากรอก Hero Code")
    .matches(/^[A-Z]{3}-\d{4}$/, "Hero Code ต้องมีรูปแบบ ABC-1234"),

    email: Yup.string()
    .email("รูปแบบอีเมลไม่ถูกต้อง")
    .required("กรุณากรอกอีเมล"),

    password: Yup.string()
    .min(6, "รหัสผ่านต้องมีอย่างน้อย 6 ตัว")
    .required("กรุณากรอกรหัสผ่าน"),

    confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "รหัสผ่านไม่ตรงกัน")
    .required("กรุณายืนยันรหัสผ่าน"),

    age: Yup.number()
    .typeError("กรุณากรอกอายุเป็นตัวเลข")
    .min(10, "ต้องมีอายุมากกว่า 9 ปี")
    .max(120, "อายุมากเกินไป"),

    class: Yup.string()
    .oneOf(["Warrior", "Mage", "Thief"], "กรุณาเลือกคลาสที่ถูกต้อง")
    .required("กรุณาเลือกคลาส"),

    term: Yup.boolean()
    .oneOf([true], "คุณต้องยอมรับคำสาบานก่อน")
});
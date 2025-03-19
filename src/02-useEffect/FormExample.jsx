import { useForm } from "react-hook-form"


export default function App() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 20 })} /><br/>
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} /><br/>
      <input type="number" {...register("age", { min: 18, max: 99 })} /><br/>
      <input type="submit" />
    </form>
  )
}